<?php

namespace App\Http\Controllers;

use App\Renterinvoice;
use App\Propertytype;
use Illuminate\Http\Request;

class RenterinvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $renterInvoice  = Renterinvoice::get();
        // foreach ($renterInvoice as $type){
        //         $propertyType = $type->propertyType->name;
        // }
        // foreach ($renterInvoice as $property){
        //     $prop = $property->property->title;
        // }
        // foreach ($renterInvoice as $user){
        //     if ($user->user->role === 'renter') {
        //         $user = $user->user->name;
        //     }
        // }
        // return response()->json($renterInvoice,200);

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
        $request->validate([
            'invoiceNumber' => 'required|max:255',
            'renter' => 'required|max:255',
            'phone' => 'required|max:11',
            'title' => 'required|max:255',
            'size' => 'required|max:255',
            'propertyType' => 'required|max:255',
            'totalRent' => 'required',
            'payableAmmount' => 'required|max:255',
            'taxes' => 'required|max:255',
            ]);
            if ($request->discount == "true") {
                $request->validate([
                    'discount' => 'required|max:255',
                ]);
                $renterInvoice = Renterinvoice::create([
                    'invoice_number' => $request->invoiceNumber,
                    'user_id'        => $request->renter,
                    'phone'          => $request->phone,
                    'property_id'    => $request->title,
                    'size'           => $request->size,
                    'propertytype_id'    => $request->propertyType,
                    'totalRent'          => $request->totalRent,
                    'payable_amount' => $request->payableAmmount,
                    'taxes'          =>  $request->taxes,
                    'discount'       =>  $request->discount,
                    'dues'    =>  ($request->totalRent - $request->payableAmmount) + ($request->taxes -  $request->discount)
                ]);
            }else{
                $renterInvoice = Renterinvoice::create([
                        'invoice_number'    => $request->invoiceNumber,
                        'user_id'           => $request->renter,
                        'phone'             => $request->phone,
                        'property_id'       => $request->title,
                        'size'              => $request->size,
                        'propertytype_id'   => $request->propertyType,
                        'totalRent'         => $request->totalRent,
                        'payable_amount'    => $request->payableAmmount,
                        'taxes'             =>  $request->taxes,
                        'discount'          =>  "0",
                        'dues'    =>  ($request->totalRent - $request->payableAmmount) + ($request->taxes - 0)
                    ]);
                }
            if ($renterInvoice->save()) {
                return response()->json($renterInvoice, 200);
               }else{
                return response()->json($renterInvoice, 500);
               }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Renterinvoice  $renterinvoice
     * @return \Illuminate\Http\Response
     */
    public function show(Renterinvoice $renterinvoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Renterinvoice  $renterinvoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Renterinvoice $renterinvoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Renterinvoice  $renterinvoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Renterinvoice $renterinvoice)
    {
            $request->validate([
            'invoice_number' => 'required|max:255',
            'user_id' => 'required|max:255',
            'phone' => 'required|max:11',
            'property_id' => 'required|max:255',
            'size' => 'required|max:255',
            'propertytype_id' => 'required|max:255',
            'totalRent' => 'required',
            'payable_amount' => 'required|max:255',
            'taxes' => 'required|max:255',
            'discount' => 'required|max:255',
            ]);
            $renterinvoice->invoice_number  = $request->invoice_number;
            $renterinvoice->user_id         = $request->user_id;
            $renterinvoice->phone           =  $request->phone;
            $renterinvoice->property_id     =  $request->property_id;
            $renterinvoice->size            =  $request->size;
            $renterinvoice->propertytype_id =  $request->propertytype_id;
            $renterinvoice->totalRent       =  $request->totalRent;
            $renterinvoice->payable_amount  =  $request->payable_amount;
            $renterinvoice->taxes        =  $request->taxes;
            $renterinvoice->discount        =  $request->discount;
            $renterinvoice->dues            =  ($request->totalRent - $request->payable_amount) + ($request->taxes -  $request->discount);

            if($renterinvoice->save()){
                return response()->json($renterinvoice, 200);
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
     * @param  \App\Renterinvoice  $renterinvoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Renterinvoice $renterinvoice)
    {
        if($renterinvoice->delete()){
            return  response()->json([
                'message'   =>  'Invoice Deleted Successfully',
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
    public function getProperty()
    {
        $propertyType  = Propertytype::get();
        return response()->json($propertyType,200);
    }
}
