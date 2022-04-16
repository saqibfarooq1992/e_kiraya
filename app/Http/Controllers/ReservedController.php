<?php

namespace App\Http\Controllers;

use App\Reserved;
use App\Property;

use DB;
use Illuminate\Http\Request;

class ReservedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $property = DB::table('reserveds')
        ->join('users', 'reserveds.user_id', '=', 'users.id')
        ->join('properties', 'reserveds.property_id', '=', 'properties.id')
        ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
        ->join('cities', 'properties.city_id', '=', 'cities.id')
        ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
        ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
        ->get();
        return response()->json($property, 200);
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reserved  $reserved
     * @return \Illuminate\Http\Response
     */
    public function show(Reserved $reserved)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Reserved  $reserved
     * @return \Illuminate\Http\Response
     */
    public function edit(Reserved $reserved)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reserved  $reserved
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reserved $reserved)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reserved  $reserved
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reserved $reserved)
    {
        if($reserved->delete()){
            return  response()->json([
                'message'   =>  'Reserved Property Deleted Successfully',
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

    public function reservedTenant(Request $request)
    {
        $property = DB::table('reserveds')
            ->join('properties', 'reserveds.property_id', '=', 'properties.id')
            ->join('users', 'reserveds.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('reserveds.user_id', $request->user('api')->id)
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone'  , 'propertytypes.property_name' , 'properties.*')
            ->get();
        return response()->json($property, 200);
    }
    public function reservedCsr(Request $request)
    {
        $property = DB::table('reserveds')
            ->join('properties', 'reserveds.property_id', '=', 'properties.id')
            ->join('users', 'reserveds.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.city_name', 'sectors.sector', 'users.name' ,'users.phone' , 'propertytypes.property_name' , 'properties.*' , 'reserveds.m_status' )
            ->paginate(4);
        return response()->json($property, 200);
    }
    public function engagedCsr(Request $request)
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.status' , 'occupied')
            ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
            ->paginate(2);
        return response()->json($property, 200);
    }
    public function engagedProperty(Request $request)
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.status' , 'occupied')
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
            ->get();
        return response()->json($property, 200);
    }
    public function search(Request $request)
    {
        $property = Property::where([['status' , 'occupied'] , ['title', 'like', '%'.$request['query'].'%']])
        ->get();
        if (count($property) < 1) {
            $property = Property::orderBy('created_at','desc')->paginate(20);
        }
        return response()->json($property, 200);
    }
    public function propertyOccupied($id)
    {
        dd();
        $properties = Property::find($id);
        $properties->status='occupied';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property under Taking successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
}
