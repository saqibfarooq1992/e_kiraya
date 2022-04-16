<?php

namespace App\Http\Controllers;

use App\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $cities = City::orderBy('created_at','asc')->paginate(4);
        return response()->json($cities, 200);
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
            'city_name' => 'required|unique:cities|max:255',
            ]);
            $city = City::create([
                'city_name' => $request->city_name,
            ]);
            if ($city->save()) {
                return response()->json($city, 200);
               }else{
                return response()->json($city, 500);
               }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {

        $request->validate([
            'city_name' => 'required',
            ]);
            $city->city_name = $request->city_name;
            if($city->save()){
                return response()->json($city, 200);
            }else{
                return response()->json([
                    'message'=> 'Some error occurred , Please try gain',
                    'status_code'=>500
                ], 500);
            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        //
        if($city->delete()){
            return  response()->json([
                'message'   =>  'City Deleted Successfully',
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
    public function search(Request $request)
    {
        $city = City::where('city_name', 'like', '%'.$request['query'].'%')->get();

        if (count($city) < 1) {
            $city = City::orderBy('created_at','desc')->paginate(20);
        }
        return response()->json($city, 200);
    }
}
