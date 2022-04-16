<?php

namespace App\Http\Controllers;

use App\CreateLesson;
use Illuminate\Http\Request;
use Auth;
use App\User;

class CreateLessonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lession = CreateLesson::paginate();
        return response()->json($lession, 200);
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
            'name' => 'required',
            'duration'=>'required',
            'type' =>  'required',
            'charges' => 'required',
        ]);

        $user_id = Auth::id();
        $user = User::find($user_id);

        $lesson = new CreateLesson();
        $lesson->name = $request->name;
        $lesson->duration = $request->duration;
        $lesson->type = $request->type;
        $lesson->charges = $request->charges;
        $lesson->user_id = $user->id;

        if($lesson->save()){
            return response()->json($lesson, 200);
        }else{
            return response()->json([
                'message'=> 'Some error occurred , Please try gain',
                'status_code'=>500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CreateLesson  $createLesson
     * @return \Illuminate\Http\Response
     */
    public function show(CreateLesson $createLesson)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CreateLesson  $createLesson
     * @return \Illuminate\Http\Response
     */
    public function edit(CreateLesson $createLesson)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CreateLesson  $createLesson
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CreateLesson $createLesson)
    {
        $request->validate([
            'name' => 'required',
            'duration'=>'required',
            'type' =>  'required',
            'charges' => 'required',
        ]);

        $createLesson->name = $request->name;
        $createLesson->duration = $request->duration;
        $createLesson->type = $request->type;
        $createLesson->charges = $request->charges;

        if($createLesson->save()){
            return response()->json($createLesson, 200);
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
     * @param  \App\CreateLesson  $createLesson
     * @return \Illuminate\Http\Response
     */
    public function destroy(CreateLesson $createLesson)
    {
        if($createLesson->delete()) {
            return response()->json([
                'message' => 'Leeson Deleted successfully',
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
