<?php

namespace App\Http\Controllers;

use App\Csr;
use App\Property;
use App\Reserved;
use App\Favorite;
use DB;
use Illuminate\Http\Request;

class CsrController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Csr  $csr
     * @return \Illuminate\Http\Response
     */
    public function show(Csr $csr)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Csr  $csr
     * @return \Illuminate\Http\Response
     */
    public function edit(Csr $csr)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Csr  $csr
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Csr $csr)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Csr  $csr
     * @return \Illuminate\Http\Response
     */
    public function destroy(Csr $csr)
    {
        //
    }
    public function TotalProperty()
    {
        $property = DB::table('properties')->count();
        return response()->json($property, 200);
    }
    public function TotalReservedProperty()
    {
        $reserved = DB::table('reserveds')->count();
        return response()->json($reserved, 200);
    }
    public function TotalPenddingProperty()
    {
        $pendding = Db::table('properties')->where('status' , 'pendding')->count();
        return response()->json($pendding, 200);
    }
    public function TotalRunningProperty()
    {
        $engaged = DB::table('properties')->where('status' ,'occupied')->count();
        return response()->json($engaged, 200);
    }
    public function TotalFavouritedProperty()
    {
        $favorite = DB::table('favorites')->count();
        return response()->json($favorite, 200);
    }
    public function TotalPropertyRent()
    {
        $totalRent = DB::table('properties')->sum('rent_price');
        $rent =  number_format($totalRent);
        return response()->json($rent, 200);
    }
    public function TotalPenddingRent()
    {
        $property = DB::table('properties')->where('rent' ,'unpaid')->count();
        return response()->json($property, 200);
    }
    public function TotalPaidRent()
    {
        $paidRent = DB::table('properties')->where('rent' ,'paid')->count();
        return response()->json($paidRent, 200);
    }

    public function Favouritedlist()
    {
        $favorite = Favorite::get();
        foreach ($favorite as $property){
                $favorite = $property->property->all;
            }
        return response()->json($favorite, 200);
    }
    public function forwardProperty($id)
    {
        $properties = Property::find($id);
        $properties->status = 'commented';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property forword to Manager successfully!',
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
