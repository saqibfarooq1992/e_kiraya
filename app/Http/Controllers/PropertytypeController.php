<?php

namespace App\Http\Controllers;

use App\Propertytype;
use Illuminate\Http\Request;

class PropertytypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $properties = Propertytype::orderBy('created_at','asc')->paginate(4);
       return response()->json($properties, 200);
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
            'property_name' => 'required|unique:propertytypes||max:20'
        ]);
        $propertytype = Propertytype::create([
            'property_name' => $request->property_name,
        ]);
        if ($propertytype->save()) {
            return response()->json($propertytype, 200);
           }else{
            return response()->json($propertytype, 500);
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Propertytype  $propertytype
     * @return \Illuminate\Http\Response
     */
    public function show(Propertytype $propertytype)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Propertytype  $propertytype
     * @return \Illuminate\Http\Response
     */
    public function edit(Propertytype $propertytype)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Propertytype  $propertytype
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Propertytype $propertytype)
    {
        //
        $request->validate([
            'property_name' => 'required|max:20'
        ]);
        $propertytype->property_name = $request->property_name;
            if($propertytype->save()){
                return response()->json($propertytype, 200);
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
     * @param  \App\Propertytype  $propertytype
     * @return \Illuminate\Http\Response
     */
    public function destroy(Propertytype $propertytype)
    {
        if($propertytype->delete()){
            return  response()->json([
                'message'   =>  'Property Type Deleted Successfully',
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
        $properties = Propertytype::where('property_name', 'like', '%'.$request['query'].'%')->get();

        if (count($properties) < 1) {
            $properties = Propertytype::orderBy('created_at','desc')->paginate(20);
        }
        return response()->json($properties, 200);
    }
}
