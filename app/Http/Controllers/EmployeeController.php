<?php

namespace App\Http\Controllers;

use App\Employee;
use App\City;
use App\User;
use App\Property;
use DB;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('employees')
        ->join('cities', 'employees.city_id', '=', 'cities.id')
        ->join('sectors', 'employees.sector_id', '=', 'sectors.id')
        ->join('users', 'employees.employee_id', '=', 'users.id')
        ->select('users.name', 'cities.*' , 'sectors.*', 'employees.*')
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
            'employee' => 'required|max:255',
            'phone' => 'required',
            'city' => 'required',
            'sector' => 'required',
            'comment'   => 'required',
        ]);
        $employee = Employee::create([
            'employee_id' => $request->employee,
            'phone' => $request->phone,
            'city_id' => $request->city,
            'sector_id' => $request->sector,
            'comment' => $request->comment,
        ]);
        if ($employee->save()) {
            return response()->json($employee, 200);
           }else{
            return response()->json($employee, 500);
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        $request->validate([
            'employee_id' => 'required|max:255',
            // 'phone' => 'required',
            'city_id' => 'required',
            'sector_id' => 'required',
            'comment'   => 'required',
        ]);
        $employee->employee_id = $request->employee_id;
        $employee->city_id = $request->city_id;
        $employee->sector_id = $request->sector_id;
        $employee->phone = $request->phone;
        $employee->comment = $request->comment;
        if($employee->save()){
            return response()->json($employee, 200);
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
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
        if($employee->delete()){
            return  response()->json([
                'message'   =>  'Area Employee Deleted Successfully',
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
    public function city()
    {
        $cities = City::orderBy('created_at','desc')->get();
        return response()->json($cities, 200);
    }
    public function latestProperty()
    {
        // $property = Property::where('notification' , 'new')->latest()->count();
        $property = DB::table('properties')
                    ->join('users' , 'properties.user_id' , 'users.id')
                    ->join('cities' , 'properties.city_id' , 'cities.id')
                    ->join('sectors' , 'properties.sector_id' , 'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , 'propertytypes.id')
                    ->select('propertytypes.property_name' , 'users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'properties.*')
                    ->get();
        return response()->json($property, 200);
    }
    public function oldProperty()
    {
        $property = Property::orderBy('created_at','asc')->where('notification' , 'old')->count();
        return response()->json($property, 200);
    }
    public function paidProperty(Request $request )
    {
        $property = Property::where('rent' , 'paid' )->where('user_id', $request->user('api')->id)->count();
        return response()->json($property, 200);
    }
    public function penddingProperty(Request $request)
    {
        $property = Property::where('rent' , 'paid' )->where('user_id', $request->user('api')->id)->count();
        return response()->json($property, 200);
    }
    public function totalProperty(Request $request)
    {
        $property = Property::where('user_id', $request->user('api')->id)->count();
        return response()->json($property, 200);
    }
    public function getPropertyEmployee()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.*', 'sectors.*', 'users.*' , 'propertytypes.*' , 'properties.*' )
            ->where('properties.status' , 'approved')
            ->orderBy('properties.id', 'desc')
            ->take(10)
            ->paginate(4);

        return response()->json($property, 200);
    }
    public function getOldPropertyEmployee()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.*', 'sectors.*', 'users.*' , 'propertytypes.*' , 'properties.*' )
            ->orderBy('properties.id', 'asc')
            ->take(5)
            ->get();
        return response()->json($property, 200);
    }
    public function PendingRentList()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
            ->where('properties.rent' , 'unpaid')
            ->paginate(2);
        return response()->json($property, 200);
    }
    public function PaidRentList()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.*' , 'properties.*' )
            ->where('properties.rent' , 'paid')
            ->paginate(2);
        return response()->json($property, 200);
    }
    public function pendingProperty()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
            ->where('properties.status' , 'pending')
            ->paginate(2);
        return response()->json($property, 200);
    }
    public function ReservedProperty()
    {
            $reserved = DB::table('reserveds')
            ->join('users', 'reserveds.user_id', '=', 'users.id')
            ->join('properties', 'reserveds.property_id', '=', 'properties.id')
            ->select('users.*', 'properties.*' )
            ->paginate(2);
        return response()->json($reserved, 200);
    }
    public function commentedProperty(Request $request)
    {
        $commented = DB::table('employees')
        ->join('properties' , 'employees.property_id' , '=' , 'properties.id')
        ->join('users as landlord' , 'properties.user_id' , '=' , 'landlord.id')
        ->join('users as u' , 'properties.user_id' , '=' , 'u.id')
        ->join('users' , 'employees.user_id' , '=' , 'users.id')
        ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
        ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
        ->where('employees.user_id', $request->user('api')->id)
        ->where('properties.status', 'commented')
        ->select('properties.*' ,  'employees.comment', 'landlord.name' , 'propertytypes.property_name' , 'cities.city_name' , 'u.phone')
        ->paginate(4);
        return response()->json($commented , 200);
    }

}
