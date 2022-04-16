<?php

namespace App\Http\Controllers;

use App\About;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use DB;
class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $abouts = DB::table('abouts')
                                    ->first();
        return response()->json($abouts, 200);
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
     * @param  \App\About  $about
     * @return \Illuminate\Http\Response
     */
    public function show(About $about)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\About  $about
     * @return \Illuminate\Http\Response
     */
    public function edit(About $about)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\About  $about
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, About $about)
    {
        //
        $request->validate([
            'title'  => 'required|min:3',
            'description' => 'required',
            'backgrounds' => 'required',
            'approach'  =>  'required',
            'methodology' => 'required',
        ]);
        $about->title = $request->title;
        $about->description = $request->description;
        $about->backgrounds = $request->backgrounds;
        $about->approach = $request->approach;
        $about->methodology = $request->methodology;
        $oldPath = $about->image;
        if($request->hasFile('image')){
            $request->validate([
                 'image' => 'image|mimes:jpeg,png,jpg',
            ]);
             $path = $request->file('image')->store('about');
             $about->image = $path;
             Storage::delete($oldPath);
        }
        if ($about->save()) {
            return response()->json([
             'message' => 'Some error occurred, Please try again!',
             'status_code' => 200
            ]);
        } else {
         return response()->json([
             'message' => 'Some error occurred, Please try again!',
             'status_code' => 500
         ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\About  $about
     * @return \Illuminate\Http\Response
     */
    public function destroy(About $about)
    {
        //
    }
}
