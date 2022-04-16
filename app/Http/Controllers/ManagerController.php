<?php

namespace App\Http\Controllers;

use App\Manager;
use App\User;
use App\City;
use App\Sector;
use App\Property;
use App\Reserved;
use App\Favorite;
use App\Employee;

use DB;
use Illuminate\Http\Request;

class ManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('managers')
        ->join('properties' ,'managers.property_id' , '=' , 'properties.id')
        ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
        ->join('cities', 'managers.city_id', '=', 'cities.id')
        ->join('sectors', 'managers.sector_id', '=', 'sectors.id')
        ->join('users', 'managers.user_id', '=', 'users.id')
        ->select('users.name', 'users.phone' ,  'cities.city_name' , 'sectors.sector', 'managers.*' , 'properties.status' , 'properties.rent' , 'properties.size' , 'properties.unit' , 'properties.rent_price' ,  'propertytypes.property_name')
        ->get();
        return response()->json($users, 200);

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
        $request->validate([
            'manager' => 'required',
            'phone' => 'required',
            'city' => 'required',
            'sector' => 'required|unique:managers',
            'comment' => 'required',
            ]);
            $manager = Manager::create([
                'manager_id' => $request->manager,
                'phone' => $request->phone,
                'city_id' => $request->city,
                'sector_id' => $request->sector,
                'comment' => $request->manager,
            ]);
            if ($manager->save()) {
                return response()->json($manager, 200);
               }else{
                return response()->json($manager, 500);
               }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function show(Manager $manager)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function edit(Manager $manager)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Manager $manager)
    {
        $request->validate([
            'manager_id' => 'required|max:255',
            'phone' => 'required',
            'city_id' => 'required',
            'sector_id' => 'required',
            'comment'   => 'required',
        ]);
        $manager->manager_id = $request->manager_id;
        $manager->city_id = $request->city_id;
        $manager->sector_id = $request->sector_id;
        $manager->phone = $request->phone;
        $manager->comment = $request->comment;
        if($manager->save()){
            return response()->json($manager, 200);
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
     * @param  \App\Manager  $manager
     * @return \Illuminate\Http\Response
     */
    public function destroy(Manager $manager)
    {
        if($manager->delete()){
            return  response()->json([
                'message'   =>  'Area manager Deleted Successfully',
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

    public function manager()
    {
        $manager = User::orderBy('created_at','desc')->where('role' , 'manager')->get();
        return response()->json($manager, 200);
    }
    public function employee()
    {
        $employee = User::orderBy('created_at','desc')->where('role' , 'employee')->get();
        return response()->json($employee, 200);
    }
    public function city()
    {
        $cities = City::orderBy('created_at','desc')->get();
        return response()->json($cities, 200);
    }
    public function sector()
    {
        $sectors = Sector::orderBy('created_at','desc')->get();
        return response()->json($sectors, 200);
    }
    public function totalPropertyCount()
    {
        $property = Property::count();
        return response()->json($property, 200);
    }
    public function totalReservedCount()
    {
         $property = DB::table('reserveds')->count();
        return response()->json($property, 200);
    }
    public function TotalRent(Request $request)
    {
        $property = DB::table('properties')
                    ->where('properties.user_id' , $request->user('api')->id )
                    ->sum('rent_price');
        $property = number_format($property);
        $paid = DB::table('properties')
                ->where('rent' , 'paid')
                ->where('properties.user_id' , $request->user('api')->id )
                ->sum('rent_price');
        $paid = number_format($paid);
        $unpaid = DB::table('properties')
                ->where('rent' , 'unpaid')
                ->where('properties.user_id' , $request->user('api')->id )
                ->sum('rent_price');
        $unpaid = number_format($unpaid);
        // dd($paid , $unpaid , $property);
        // $properties = [$paid , $unpaid , $property];

        return response()->json([
            $property ,  $paid , $unpaid
        ]);
    }
    public function pendingCount()
    {
        $property = Property::where('status' , 'pending')->count();
        return response()->json($property, 200);
    }
    public function runningProperty()
    {
        $property = Property::where('status' , 'occupied')->count();
        return response()->json($property, 200);
    }
    public function getEngagedProperty()
    {
        $property = DB::table('properties')
        ->join('users', 'properties.user_id', '=', 'users.id')
        ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
        ->join('cities', 'properties.city_id', '=', 'cities.id')
        ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
        ->where('properties.status' , 'occupied')
        ->select('cities.city_name', 'sectors.sector', 'users.name', 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
        ->get();
        return response()->json($property, 200);
    }
    public function paidRent()
    {
        $property = Property::where('rent' , 'paid')->sum('rent_price');
        $properties = number_format($property);
        return response()->json($properties, 200);
    }
    public function penddingRent()
    {
        $property = Property::where('rent' , 'pending')->sum('rent_price');
        $properties = number_format($property);
        return response()->json($properties, 200);
    }
    public function Totalpaidrentlist()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.rent' , 'paid')
            ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
            ->get();
        return response()->json($property, 200);
    }
    public function ShowAllFavourited()
    {
        $property = Favorite::count();
        return response()->json($property, 200);
    }
    public function commentedPropertyCount()
    {
        $property = Property::where('status' , 'commented')->where('notification' , 'new')->count();
        return response()->json($property, 200);
    }
    public function getProperty(Request $request)
    {
        $property = DB::table('properties')
        ->join('users', 'properties.user_id', '=', 'users.id')
        ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
        ->join('cities', 'properties.city_id', '=', 'cities.id')
        ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
        ->where('properties.status' , 'commented')
        ->where('users.id' ,'=', $request->user('api')->id)
        ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
        ->get();

        return response()->json($property, 200);
    }
    public function getManager()
    {
        $manager = DB::table('users')
                                    ->where('role' , 'manager')->get();
        return response()->json($manager, 200);
    }
    public function sendManager(Request $request)
    {

        $request->validate([
            'user_id'=>'required',
            'sector_id' => 'required',
            'city_id'=>'required',
            'property_id'=>'required',
            'comment'=> 'required',
        ]);

        $check = DB::table('managers')
                    ->where('user_id', '=', $request->user_id)
                    ->where('city_id', '=', $request->city_id)
                    ->where('sector_id', '=', $request->sector_id)
                    ->where('property_id','=', $request->property_id)
                    ->where('comments','=', $request->comment)
                    ->first();
        if(!$check)
        {
            $saveRecord = new Manager();
            $saveRecord->user_id = $request->user_id;
            $saveRecord->sector_id = $request->sector_id;
            $saveRecord->city_id = $request->city_id;
            $saveRecord->property_id = $request->property_id;
            $saveRecord->comments = $request->comment;

            if($saveRecord->save())
            {
                $property = Property::find($request->property_id , 'id');
                $property->status = 'commented';
                $property->save();
                return response()->json(['message'=> 'Your record have saved successfully!','status_code'=>200], 200);
            }
            else
            {
                return  response()->json(['message' => 'Some error occured try again!','status_code' =>500],500);
            }
        }
        else
        {
            return  response()->json(['message' => 'Poperty is already assigned to this manager','status_code' =>403],403);
        }
    }
    public function getManagerProperty(Request $request)
    {
        $properties = DB::table('managers')
        ->join('users' , 'managers.user_id' , '=' , 'users.id')
        ->join('properties' , 'managers.property_id' , '=' , 'properties.id')
        ->join('cities', 'properties.city_id', '=' , 'cities.id')
        ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
        ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
        ->where('managers.user_id', $request->user('api')->id)
        ->where('properties.status' , 'commented')
        ->select('managers.comments' , 'properties.*' , 'users.name', 'users.phone', 'sectors.sector' , 'cities.city_name', 'propertytypes.property_name')
        ->distinct()
        ->get();
        return response()->json($properties, 200);
    }
    public function commentedProperty(Request $request)
    {

        $property = DB::table('managers')
                    ->join('properties' , 'managers.property_id' , '=' , 'properties.id')
                    ->join('users' , 'properties.user_id' , '=' , 'users.id')
                    ->join('users as landlord' , 'properties.user_id' , '=' , 'landlord.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                    ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                    ->where('properties.status' , 'commented')
                    ->where('managers.user_id', $request->user('api')->id)
                    ->select('properties.*' , 'managers.comments' , 'users.phone' , 'propertytypes.property_name','cities.city_name' , 'landlord.name')
                    ->distinct()
                    ->get();
        return response()->json($property, 200);
    }
    // public function seenProperty($id)
    // {
    //     $properties = Property::find($id);
    //     $properties->notification = 'old';
    //     if ($properties->save()) {
    //         return response()->json([
    //             'message' => 'Property Reloaded successfully!',
    //             'status_code' => 200
    //         ], 200);
    //     } else {
    //         return response()->json([
    //             'message' => 'Some error occurred, Please try again',
    //             'status_code' => 500
    //         ], 500);
    //     }
    // }
    public function getEmployee()
    {
        $employee = DB::table('users')
                                    ->where('role' , 'employee')->select('users.name' , 'users.id')->get();
        return response()->json($employee, 200);
    }
    public function sendEmployee(Request $request)
    {
        $request->validate([
            'user_id'=>'required',
            'sector_id' => 'required',
            'city_id'=>'required',
            'property_id'=>'required',
            'comment'=> 'required',
        ]);
        $check = DB::table('employees')
                    ->where('user_id', '=', $request->user_id)
                    ->where('city_id', '=', $request->city_id)
                    ->where('sector_id', '=', $request->sector_id)
                    ->where('property_id','=', $request->property_id)
                    ->where('comments','=', $request->comment)
                    ->first();
        if(!$check)
        {
            $saveRecord = new Employee();
            $saveRecord->user_id = $request->user_id;
            $saveRecord->sector_id = $request->sector_id;
            $saveRecord->city_id = $request->city_id;
            $saveRecord->property_id = $request->property_id;
            $saveRecord->comments = $request->comment;
            if($saveRecord->save())
            {
                return response()->json(['message'=> 'Your record have saved successfully!','status_code'=>200], 200);
            }
            else
            {
                return  response()->json(['message' => 'Some error occured try again!','status_code' =>500],500);
            }
        }
        else
        {
            return  response()->json(['message' => 'Poperty is already assigned to this manager','status_code' =>403],403);
        }
    }
    public function favouriteProperty()
    {
        $property = DB::table('favorites')
                    ->join('users' , 'favorites.user_id' , '=' , 'users.id')
                    ->join('properties' , 'favorites.property_id' , '=' , 'properties.id')
                    ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                    ->select('users.name' , 'users.phone' , 'properties.*' , 'cities.city_name' , 'propertytypes.property_name')
                    ->get();
        return response()->json($property, 200);

    }


}
