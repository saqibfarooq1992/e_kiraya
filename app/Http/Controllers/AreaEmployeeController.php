<?php

namespace App\Http\Controllers;

use App\AreaEmployee;
use DB;
use Illuminate\Http\Request;

class AreaEmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $areaEmployee = DB::table('area_employees')
                        ->join('users' , 'area_employees.user_id' , '=' , 'users.id')
                        ->join('cities' , 'area_employees.city_id' , '=' , 'cities.id')
                        ->join('sectors' , 'area_employees.sector_id' , '=' , 'sectors.id')
                        ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'area_employees.id')
                        ->get();
         return response()->json($areaEmployee, 200);
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
        $areaEmployee = $request->validate([
                    'name' => 'required',
                    'city' => 'required',
                    'sector' => 'required',
                ]);
        $areaEmployee = AreaEmployee::create([
                    'user_id'  => $request->name,
                    'city_id'  => $request->city,
                    'sector_id'=> $request->sector,
                ]);
        if($areaEmployee->save()){
            return response()->json([
                'message' => 'Area Assign to Employee successfully!',
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
     * @param  \App\AreaEmployee  $areaEmployee
     * @return \Illuminate\Http\Response
     */
    public function show(AreaEmployee $areaEmployee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AreaEmployee  $areaEmployee
     * @return \Illuminate\Http\Response
     */
    public function edit(AreaEmployee $areaEmployee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AreaEmployee  $areaEmployee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AreaEmployee $areaEmployee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AreaEmployee  $areaEmployee
     * @return \Illuminate\Http\Response
     */
    public function destroy(AreaEmployee $areaEmployee)
    {
        if($areaEmployee->delete()){
            return  response()->json([
                'message'   =>  'AreaEmployee Deleted Successfully',
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
    public function areaEmployee(Request $request)
    {
        $areaEmployee = DB::table('area_employees')
        // ->join('users' , 'area_managers.user_id' , '=' , 'users.id')
        ->join('cities' , 'area_employees.city_id' , '=' , 'cities.id')
        ->join('sectors' , 'area_employees.sector_id' , '=' , 'sectors.id')
        ->where('area_employees.user_id' , $request->user_id)
        ->select('cities.city_name' , 'area_employees.city_id' , 'area_employees.sector_id' , 'sectors.sector')
        ->distinct('area_employees.city_id')
        ->get();
        return response()->json($areaEmployee, 200);
    }
    public function getEmployeeData(Request $request , $id)
    {
        $manager = DB::table('area_employees')
                   ->join('users' , 'area_employees.user_id' , 'users.id')
                   ->join('cities' , 'area_employees.city_id' , 'cities.id')
                   ->join('sectors' , 'area_employees.sector_id' , 'sectors.id')
                   ->where('area_employees.sector_id' , $id)
                   ->select('users.name')
                   ->distinct()
                   ->get();
        return response()->json($manager, 200);

    }
}
