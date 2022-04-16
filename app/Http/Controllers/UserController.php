<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\City;
use Auth;
use DB;
use Illuminate\Support\Facades\Storage;
use App\Notifications\ApprovedUser;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = DB::table('users')->paginate(4);
            // ->join('cities', 'users.cities', '=', 'cities.id')
            // ->select('users.*', 'cities.city_name' )
            // ->paginate(4);
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
            'name' => 'required|string|max:255',
            'email' => 'required|string|unique:users',
            'password' => 'required|string|confirmed',
            'phone' => 'required|string|max:15',
            'city_id' => 'required',
            'role' => 'required',
            'avatar' => 'required|image|mimes:jpeg,png,jpg',
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone = $request->phone;
        $user->role = $request->role;
        $user->city_name = $request->city_id;
        $user->terms = 'true';
        $user->status= 'approved';
        $path = $request->file('avatar')->store('avatar');
        $user->avatar = $path;
        if ($user->save()) {
            return response()->json($user, 200);
            }else{
            return response()->json($user, 500);
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,'.$user->id,
            'phone' => 'required|string|max:15',
            'role' => 'required',
            'city_id' => 'required',
        ]);

        $user->name = $request->name;
        $user->email = $request->email;
        if($request->password){
            $request->validate([
                'password' => 'required|string|confirmed',
            ]);
            $user->password = bcrypt($request->password);
        }
        $oldPath    =   $user->avatar;
        if ($request->hasFile('avatar')) {
            $request->validate([
                'avatar' => 'image|mimes:jpeg,png,jpg',
           ]);
            $path = $request->file('avatar')->store('avatar');
            $user->avatar = $path;
            Storage::delete($oldPath);
        }
        $user->phone = $request->phone;
        $user->role = $request->role;
        $user->city_id = $request->city_id;
        if($request->terms){
            $user->terms = 'true';
        }else{
            $user->terms = 'false';
        }
        $user->terms = $request->terms;
        if($user->save()){
            return response()->json($user, 200);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
        if($user->delete()){
            return  response()->json([
                'message'   =>  'User Deleted Successfully',
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
    public function search(Request $request)
    {
        if ($request->userQuery!='admin') {
            if ($request->userQuery==='manager') {
                $users = DB::table('users')
                ->join('cities' , 'users.city_id' , '=' , 'cities.id')
                ->where('users.role' , 'manager')
                ->select('cities.city_name' , 'users.*')
                ->get();
                return response()->json($users, 200);
            }elseif ($request->userQuery==='employee') {
                $users = DB::table('users')
                ->join('cities' , 'users.city_id' , '=' , 'cities.id')
                ->where('users.role' , 'employee')
                ->select('cities.city_name' , 'users.*')
                ->get();
                return response()->json($users, 200);
            }elseif ($request->userQuery==='csr') {
                $users = DB::table('users')
                ->join('cities' , 'users.city_id' , '=' , 'cities.id')
                ->where('users.role' , 'csr')
                ->select('cities.city_name' , 'users.*')
                ->get();
                return response()->json($users, 200);
            }elseif ($request->userQuery==='tenant') {
                $users = DB::table('users')
                        ->join('cities' , 'users.city_id' , '=' , 'cities.id')
                        ->where('users.role' , 'renter')
                        ->select('cities.city_name' , 'users.*')
                        ->get();
                        return response()->json($users, 200);
            }elseif ($request->userQuery==='landlord') {
                $users = DB::table('users')
                        ->join('cities' , 'users.city_id' , '=' , 'cities.id')
                        ->where('users.role' , 'landloard')
                        ->select('cities.city_name' , 'users.*')
                        ->get();
                        return response()->json($users, 200);
            }
        } else {
            $users = DB::table('users')
            ->join('cities' , 'users.city_id' , '=' , 'cities.id')
            ->select('cities.city_name' , 'users.*')
            ->get();
            return response()->json($users, 200);
        }
        $users = DB::table('users')
            ->join('cities' , 'users.city_id' , '=' , 'cities.id')
            ->select('cities.city_name' , 'users.*')
            ->get();
            return response()->json($users, 200);
    }
    public function allusers()
    {
        $users = User::orderBy('created_at','desc')->where('role' , 'admin')
                                                   ->orwhere('role','employee')
                                                   ->orwhere('role','csr')
                                                   ->orwhere('role','manager')->paginate(5);
        return response()->json($users, 200);
    }
    public function getRenter()
    {
        $users = User::orderBy('created_at','desc')->where('role' , 'renter')->paginate(4);
        return response()->json($users, 200);
    }
    public function getLandloard()
    {
        $users = User::orderBy('created_at','desc')->where('role' , 'landloard')->paginate(4);
        return response()->json($users, 200);
    }
    public function employee()
    {
        $employees = User::orderBy('created_at','desc')->where('role' , 'employee')->get();
        return response()->json($employees, 200);
    }
    public function updateProfile(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|max:255',
        //     ''
        // ]);
        $oldPath = Auth::user()->avatar;
        if($request->hasFile('avater')){

            $request->validate([
                 'avatar' => 'image|mimes:jpeg,png,jpg',
            ]);
             $path = $request->file('avater')->store('avatar');
             Storage::delete($oldPath);
        }
        $update = $request->user()->update([
            'name' => $request->name,
            'phone' => $request->phone,
            'city_id' => '1',
            'cities' => $request->cities,
            'avatar' => $path,
        ]);
        if ($update) {
            return response()->json([
                'message' => 'Information updated successfully',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|max:255',
            'new_password' => 'required|confirmed|min:8',
        ]);

        if (!Hash::check($request->current_password, $request->user()->password)) {
            return response()->json([
                'message' => 'Current password is wrong',
                'status_code' => 401
            ], 401);
        }

        $update = $request->user()->update([
            'password' => Hash::make($request->new_password),
        ]);

        if ($update) {
            return response()->json([
                'message' => 'Password changed successfully',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function getCsr()
    {
        $csr = User::orderBy('created_at','desc')->where('role' , 'csr')->paginate(5);
        return response()->json($csr, 200);
    }
    public function getLandlord($id)
    {
        $landlord = DB::table('users')->find($id);
                    // ->join('cities' , 'users.city_id' , '=' , 'cities.id')
                    // ->where('users.id' , $id)
                    // ->select('users.*' , 'cities.city_name')
                    // ->first();
        return response()->json($landlord, 200);
    }
    public function updateLandlordProfile(Request $request , $id)
    {

           $user = User::find($id);
           $oldPath = $user->avatar;
        //    dd($request->all());

            if($request->hasFile('avatar')){

                $request->validate([
                    'avatar' => 'image|mimes:jpeg,png,jpg',
                ]);
                $path = $request->file('avatar')->store('avatar');
                Storage::delete($oldPath);
                User::where('id',$id)->update([
                    'avatar' => $path,
                ]);
            }
            $update = User::where('id',$id)->update([
                'name' => $request->name,
                'phone' => $request->phone,
                'cities' => $request->cities,
                'password' => Hash::make($request->new_password),
            ]);
            if ($update) {
                return response()->json([
                    'message' => 'Information updated successfully',
                    'status_code' => 200
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Some error occured please try again',
                    'status_code' => 500
                ], 500);
            }

    }
}
