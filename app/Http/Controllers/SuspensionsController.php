<?php

namespace App\Http\Controllers;

use App\Suspensions;
use App\Property;
use DB;
use Illuminate\Http\Request;

class SuspensionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $suspensions = DB::table('suspensions')
                        ->join('users' , 'suspensions.user_id' , '=' , 'users.id')
                        ->join('properties' , 'suspensions.property_id' , '=' , 'properties.id')
                        ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                        ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                        ->select('users.name' , 'suspensions.id' , 'suspensions.reason_cancellation' , 'propertytypes.property_name' , 'cities.city_name' , 'properties.size' , 'properties.unit' , 'users.phone' , 'properties.rent_price' , 'properties.status' )
                        ->get();
        return response()->json($suspensions , 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'comment' => 'required',
            'property_id' => 'required',
        ]);
        $check = Suspensions::where('property_id',$request->property_id)->first();
        if ($check) {
            return response()->json([
                'message' => 'Selected Property is already in your Suspended list',
                'status_code' => 401
            ], 401);
        }else{
            $property = Property::find($request->property_id);
            $property->status = 'suspended';
            if($property->save()){
                $suspensions = new Suspensions;
                $suspensions->user_id = $request->user('api')->id;
                $suspensions->property_id = $property->id;
                $suspensions->reason_cancellation = $request->comment;
                $suspensions->save();
                return response()->json([
                    'message' => 'Property Suspended successfully!',
                    'status_code' => 201
                ], 201);
            }else{
                return response()->json([
                    'message' => 'Some error occurred, Please try again',
                    'status_code' => 500
                ], 500);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Suspensions  $suspensions
     * @return \Illuminate\Http\Response
     */
    public function show(Suspensions $suspensions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Suspensions  $suspensions
     * @return \Illuminate\Http\Response
     */
    public function edit(Suspensions $suspensions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Suspensions  $suspensions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Suspensions $suspensions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Suspensions  $suspensions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Suspensions $suspensions)
    {
        if($suspensions->delete()){
            return  response()->json([
                'message'   =>  'Suspensions Deleted Successfully',
                'status_code'   =>200
            ],200);
        }
        else{
            return  response()->json([
                'message'   =>  'some error occured try again!',
                'status_code'   =>500
            ],500);
        }
    }
}
