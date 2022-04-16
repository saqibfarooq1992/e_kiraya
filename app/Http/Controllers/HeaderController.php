<?php

namespace App\Http\Controllers;

use App\Header;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // added new to test
use DB;
class HeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
         $headers = DB::table('headers')->where('id', '1')->first();
        return response()->json($headers, 200);
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
     * @param  \App\Header  $header
     * @return \Illuminate\Http\Response
     */
    public function show(Header $header)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Header  $header
     * @return \Illuminate\Http\Response
     */
    public function edit(Header $header)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Header  $header
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Header $header)
    {
       $request->validate([
           'title'  => 'required|min:3',
           'description' => 'required',
       ]);
       $header->title = $request->title;
       $header->description = $request->description;
       $oldPath = $header->benner;
       if($request->hasFile('benner')){
           $request->validate([
                'benner' => 'image|mimes:jpeg,png,jpg',
           ]);
            $path = $request->file('benner')->store('header');
            $header->benner = $path;
            Storage::delete($oldPath);
       }
        if ($header->save()) {
            return response()->json($header,200);
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
     * @param  \App\Header  $header
     * @return \Illuminate\Http\Response
     */
    public function destroy(Header $header)
    {
        //
    }
}
