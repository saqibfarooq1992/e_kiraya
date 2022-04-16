<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserProfile;
use App\User;
use Auth;

class UserProfileController extends Controller
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

    public function userData(){
        $user = Auth::id();
        $user = User::find($user);
        return response()->json($user, 200);
    }

    public function userProfile(Request $request){
       
        $request->validate([
            'fname' => 'required',
            'lname' => 'required',
            'contact'=>'required',
            'nationality' =>  'required',
            'dob' => 'required',
            'profile_image' => 'required|image|mimes:jpg,jpeg,png',
            'video' => 'required',
            'sex' => 'required',
            'bio' => 'required',
        ]);

        
        $user_id = Auth::id();
        $user = User::find($user_id);
        
        $user->fname = $request->fname;
        $user->lname = $request->lname;
        
        $profile = UserProfile::where('user_id',$user_id)->first();
        $profile->contact_no = $request->contact;
        $profile->nationality = $request->nationality;
        $profile->dob = $request->dob;
        $profile->sex = $request->sex;
        $profile->bio = $request->bio;

        $path = $request->file('profile_image')->store('profile_image');
        $path1 = $request->file('video')->store('profile_video');

        $profile->image = $path;
        $profile->video = $path1;

        if($profile->save()){
            $user->save();
            return response()->json($profile, 200);
        }else{
            return response()->json([
                'message'=> 'Some error occurred , Please try gain',
                'status_code'=>500
            ], 500);
        }
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
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function show(UserProfile $userProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(UserProfile $userProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserProfile $userProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }
}
