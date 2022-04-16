<?php

namespace App\Http\Controllers;

use App\Faq;
use Auth;

use Illuminate\Http\Request;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $faqs = Faq::orderBy('created_at','desc')->paginate(5);
        return response()->json($faqs, 200);
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
            'question' => 'required',
            'description' => 'required',
        ]);
        $user = $request->user('api')->id;
        $faq = Faq::create([
            'question' => $request->description,
            'description' => $request->description,
            'user_id' => $user,
        ]);
        if($faq->save()){
                return response()->json($faq, 200);
            }else{
                return response()->json($faq, 500);
            }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function show(Faq $faq)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function edit(Faq $faq)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Faq $faq)
    {
        //
       $request->validate([
           'description' => 'required|string',
           'question' => 'required|string',
       ]);
       $faq->description = $request->description;
       $faq->question = $request->question;
       if($faq->save()){
        return response()->json($faq, 200);
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
     * @param  \App\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function destroy(Faq $faq)
    {
        //
        if($faq->delete()){
            return  response()->json([
                'message'   =>  'Faq Deleted Successfully',
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
        $faq = Faq::where('description', 'like', '%'.$request['query'].'%')->get();

        if (count($faq) < 1) {
            $faq = Faq::orderBy('created_at','desc')->paginate(20);
        }
        return response()->json($faq, 200);
    }
}
