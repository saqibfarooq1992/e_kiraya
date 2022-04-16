<?php

namespace App\Http\Controllers;

use App\Notification;
use App\Property;
use Illuminate\Http\Request;
use DB;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $notification = Property::where('notification' , 'new')->orderBy('created_at','desc')->get();
        // $notification = DB::table('reserveds')
        //               ->join('properties' , 'reserveds.property_id' , '=' , 'properties.id')
        //               ->where('properties.notification', 'new')
        //               ->select('properties.*');
        return response()->json($notification, 200);
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
     * @param  \App\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function show(Notification $notification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function edit(Notification $notification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notification $notification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notification $notification)
    {
        //
    }
    public function reload($id)
    {
        $properties = Property::find($id);
        $properties->notification = 'new';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property Reloaded successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function commentedPropertyNotification()
    {
        $notification = Property::where('status' , 'commented')->where('notification' , 'new')->orderBy('created_at','desc')->get();
        return response()->json($notification, 200);
    }
    public function approvedProperty()
    {
        $notification = Property::where('status' , 'approved')->where('notification' , 'new')->orderBy('created_at','desc')->get();
        return response()->json($notification, 200);
    }
    public function newProperty()
    {
        $property = Property::where('status' , 'pendding')
                    ->orwhere('notification' , 'new')
                    ->orderBy('created_at','desc')->get();
        return response()->json($property, 200);
    }
}
