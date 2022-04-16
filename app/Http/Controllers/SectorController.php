<?php

namespace App\Http\Controllers;

use App\Sector;
use App\City;
use DB;
use Illuminate\Http\Request;

class SectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $sectors = DB::table('sectors')
                    ->join('cities' , 'sectors.city_id' , 'cities.id')
                    ->select('sectors.*' , 'cities.city_name')
                    ->orderBy('created_at','asc')
                    ->paginate(4);
        return response()->json($sectors, 200);
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
            'name' => 'required|max:255',
            'city' => 'required',
            ]);
        $sector = Sector::create([
            'sector' => $request->name,
            'city_id'=> $request->city,
        ]);
        if ($sector->save()) {
            return response()->json($sector, 200);
           }else{
            return response()->json($sector, 500);
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function show(Sector $sector)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function edit(Sector $sector)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sector $sector)
    {
        //
        $request->validate([
            'sector' => 'required',
            'city_id' => 'required'
            ]);
            $sector->sector = $request->sector;
            $sector->city_id = $request->city_id;
            if($sector->save()){
                return response()->json($sector, 200);
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
     * @param  \App\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sector $sector)
    {
        //
        if($sector->delete()){
            return  response()->json([
                'message'   =>  'Sector Deleted Successfully',
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
        $sector = Sector::where('sector', 'like', '%'.$request['query'].'%')->get();
        if (count($sector) < 1) {
            $sector = Sector::orderBy('created_at','desc')->paginate(4);
        }
        return response()->json($sector, 200);
    }
    // public function city()
    // {
    //     $cities = City::orderBy('created_at','asc')->get();
    //     return response()->json($cities, 200);
    // }
}
