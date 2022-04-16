<?php

namespace App\Http\Controllers;

use App\Leasetermination;
use App\User;
use Illuminate\Http\Request;

class LeaseterminationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $leasetermination = Leasetermination::orderBy('created_at','desc')->get();
        foreach ($leasetermination as $pro){
            $properties = $pro->property->title;
        }
        // foreach ($leasetermination as $city){
        //     $cities = $city->city->city_name;

        // }
        foreach ($leasetermination as $user){
            $users = $user->user->phone;
        }

        // foreach ($leasetermination as $sector){
        //     $sectors = $sector->sector->sector;
        // }
        return response()->json($leasetermination, 200);
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
        "name" => 'required',
        "property" => 'required',
        "cnic" => 'required|string|max:15',
        "phone" => 'required|string|max:12',
        "s_date" =>' required',
        "e_date" => "required",
        "reason" => "required",
       ]);
       $leasetermination = new Leasetermination();
       $leasetermination->user_id = $request->name;
       $leasetermination->property_id =  $request->property;
       $leasetermination->cnic =  $request->cnic;
       $leasetermination->phone =  $request->phone;
       $leasetermination->s_date =  $request->s_date;
       $leasetermination->e_date =  $request->e_date;
       $leasetermination->reason =  $request->reason;

       if($leasetermination->save()){
        return response()->json([
            'message' => 'Leastermination  Data Added successfully!',
            'status_code' => 201
        ], 201);
        }else{
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Leasetermination  $leasetermination
     * @return \Illuminate\Http\Response
     */
    public function show(Leasetermination $leasetermination)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Leasetermination  $leasetermination
     * @return \Illuminate\Http\Response
     */
    public function edit(Leasetermination $leasetermination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Leasetermination  $leasetermination
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Leasetermination $leasetermination)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Leasetermination  $leasetermination
     * @return \Illuminate\Http\Response
     */
    public function destroy(Leasetermination $leasetermination)
    {
        if($leasetermination->delete()){
            return  response()->json([
                'message'   =>  'Lease Termination Notice Deleted Successfully',
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

    public function getUserData()
    {
        $users = User::orderBy('created_at','desc')->where('status','Approved')->where('role','renter')->get();
        return response()->json($users, 200);
    }

    public function repost($id)
    {
        $properties = Property::find($id);
        $properties->status = 'approved';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property approved successfully!',
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
