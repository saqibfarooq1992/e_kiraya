<?php

namespace App\Http\Controllers;

use App\AreaManager;
use App\Sector;
use App\City;
use App\User;

use DB;
use Illuminate\Http\Request;

class AreaManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $area = DB::table('area_managers')
                ->join('users' , 'area_managers.user_id' , '=' , 'users.id')
                ->join('cities' , 'area_managers.city_id' , '=' , 'cities.id')
                ->join('sectors' , 'area_managers.sector_id' , '=' , 'sectors.id')
                ->distinct('user_id')
                ->select('users.name' , 'users.phone' , 'area_managers.*' , 'sectors.sector' , 'cities.city_name')
                ->get();
        // $managers = AreaManager::all();
        // foreach($managers as $manager){

        //     $sector_ids[] = explode(',',$manager->sector_id);
        //     $manager['sectors'] = $sector_ids;

        //     foreach ($sector_ids as $sector_id){
        //         $temp = Sector::find($sector_id);
        //         }
        //         $manager['sectors'] = $temp;
        //         $city = City::find($manager->city_id);
        //         $manager['city']=$city->city_name;
        //         $user = User::find($manager->user_id);
        //         $manager['user']=$user->name;
        //         $manager['phone']=$user->phone;


        // }
        return response()->json($area, 200);
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
        $data['sector_id'] = implode(',',$request->sector);
        $data['user_id'] = $request->name;
        $data['city_id'] = $request->city;
        $area = AreaManager::create($data);
        if ($area->save()) {
            return response()->json([
                        'message' => 'Area Assign to Manager successfully!',
                        'status_code' => 201
                    ], 201);
        } else {
         return response()->json([
             'message' => 'Some error occurred, Please try again!',
             'status_code' => 500
         ],500);
        }


        // $areaManager = $request->validate([
        //     'name' => 'required',
        //     'city' => 'required',
        //     'sector' => 'required',
        // ]);
        // $property = new AreaManager();
        // $property->user_id = $request->name;
        // $property->city_id = $request->city;
        // $property->sector_id = $request->sector;
        // if($property->save()){
        //     return response()->json([
        //         'message' => 'Area Assign to Manager successfully!',
        //         'status_code' => 201
        //     ], 201);
        // }else{
        //     return response()->json([
        //         'message' => 'Some error occurred, Please try again',
        //         'status_code' => 500
        //     ], 500);
        // }
    //    $areaManager = implode(" ", $areaManager);
    //     $areaManager['sector'] = $request->areaManager('sector');


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AreaManager  $areaManager
     * @return \Illuminate\Http\Response
     */
    public function show(AreaManager $areaManager)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AreaManager  $areaManager
     * @return \Illuminate\Http\Response
     */
    public function edit(AreaManager $areaManager)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AreaManager  $areaManager
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AreaManager $areaManager)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AreaManager  $areaManager
     * @return \Illuminate\Http\Response
     */
    public function destroy(AreaManager $areaManager)
    {
        //
    }
    public function getManagerData(Request $request , $id)
    {
        $managers = AreaManager::all();
        foreach($managers as $manager){
            $sector_ids[] = explode(',',$manager->sector_id);
            $manager['sectors'] = $sector_ids;
            foreach ($sector_ids as $sector_id){
                $temp[] = Sector::find($id);
                }
                $manager['sectors'] = $temp;
                $manager['id'] = $temp;
                $city = City::find($manager->city_id);
                $manager['city']=$city->city_name;
                $user = User::find($manager->user_id);
                $manager['user']=$user->name;
                // $manager = DB::table('area_managers')
                //    ->join('users' , 'area_managers.user_id' , 'users.id')
                //    ->join('cities' , 'area_managers.city_id' , 'cities.id')
                //    ->join('sectors' , 'area_managers.sector_id' , 'sectors.id')
                //    ->where('area_managers.sector_id' , $id)
                //    ->select('users.name')
                //    ->distinct()
                //    ->get();
        }
        return response()->json($manager, 200);

    }
    public function getTenantData(Request $request , $id)
    {
        $tenants = DB::table('reserveds')
                   ->join('users' , 'reserveds.user_id' , 'users.id')
                   ->where('reserveds.property_id' , $id)
                   ->select('users.name')
                   ->get();
        return response()->json($tenants, 200);
    }

}
