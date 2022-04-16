<?php

namespace App\Http\Controllers;

use App\Landlordinvoice;
use App\Propertytype;
use App\Property;
use App\User;
use Illuminate\Http\Request;

class LandlordinvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $landlordInvoice = Landlordinvoice::get();
            // foreach ($landlordInvoice as $type){
            //     dd($type);
            //     $propertyType = $type->propertyType->name;
            // }
            foreach ($landlordInvoice as $property){
                $prop = $property->property->title;
            }
            foreach ($landlordInvoice as $user){
                    $user = $user->user->name;
            }
        return response()->json($landlordInvoice,200);
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
        // //
        // $request->validate([
        //     'invoiceNumber' => 'required|string',
        //     'landlord' => 'required',
        //     'phone' => 'required',
        //     'title' => 'required',
        //     'propertytype' => 'required',
        //     'size' => 'required',
        //     'totalRent' => 'required',
        //     'payableAmmount' => 'required',
        //     'taxes' => 'required',
        //     'discount' => 'required',
        // ]);
        // $invoice = new Landlordinvoice();
        // $invoice->invoice_number = $request->invoiceNumber;
        // $invoice->property_id = $request->title;
        // $invoice->user_id = $request->landlord;
        // $invoice->phone = $request->phone;
        // $invoice->propertytype_id = $request->propertytype;
        // $invoice->size = $request->size;
        // $invoice->total_rent = $request->totalRent;
        // $invoice->payable_amount = $request->payableAmmount;
        // $invoice->taxes = $request->taxes;
        // $invoice->discount = $request->discount;
        // $invoice->total_dues = ($request->totalRent - $request->payableAmmount) + ($request->taxes -  $request->discount);
        // if($invoice->save()){
        //     return response()->json([
        //         'message' => 'Landlord invoice data added successfully!',
        //         'status_code' => 201
        //     ], 201);
        // }else{
        //     return response()->json([
        //         'message' => 'Some error occurred, Please try again',
        //         'status_code' => 500
        //     ], 500);
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Landlordinvoice  $landlordinvoice
     * @return \Illuminate\Http\Response
     */
    public function show(Landlordinvoice $landlordinvoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Landlordinvoice  $landlordinvoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Landlordinvoice $landlordinvoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Landlordinvoice  $landlordinvoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Landlordinvoice $landlordinvoice)
    {
        // $request->validate([
        //     'invoice_number' => 'required|max:255',
        //     'user_id' => 'required|max:255',
        //     'phone' => 'required|max:11',
        //     'property_id' => 'required|max:255',
        //     'size' => 'required|max:255',
        //     'propertytype_id' => 'required|max:255',
        //     'total_rent' => 'required',
        //     'payable_amount' => 'required|max:255',
        //     'taxes' => 'required|max:255',
        //     'discount' => 'required|max:255',
        //     ]);
        //     $landlordinvoice->invoice_number  = $request->invoice_number;
        //     $landlordinvoice->user_id         = $request->user_id;
        //     $landlordinvoice->phone           =  $request->phone;
        //     $landlordinvoice->property_id     =  $request->property_id;
        //     $landlordinvoice->size            =  $request->size;
        //     $landlordinvoice->propertytype_id =  $request->propertytype_id;
        //     $landlordinvoice->total_rent       =  $request->total_rent;
        //     $landlordinvoice->payable_amount  =  $request->payable_amount;
        //     $landlordinvoice->taxes           =  $request->taxes;
        //     $landlordinvoice->discount        =  $request->discount;
        //     $landlordinvoice->total_dues            =  ($request->total_rent - $request->payable_amount) + ($request->taxes -  $request->discount);
        //     if($landlordinvoice->save()){
        //         return response()->json($landlordinvoice, 200);
        //     }else{
        //         return response()->json([
        //             'message'=> 'Some error occurred , Please try gain',
        //             'status_code'=>500
        //         ], 500);
        //     }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Landlordinvoice  $landlordinvoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Landlordinvoice $landlordinvoice)
    {
        // if($landlordinvoice->delete()){
        //     return  response()->json([
        //         'message'   =>  'Invoice Deleted Successfully',
        //         'status_code'   =>200
        //     ],200);
        // }
        // else{
        //     return  response()->json([
        //         'message'   =>  'some error occured try again!',
        //         'status_code'   =>500
        //     ],500);
        // }
    }
    public function getPropertype()
    {
        $proptype  = Propertytype::get();

        return response()->json($proptype,200);
    }
    public function getProperty()
    {
        $prop  = Property::paginate(4);
        foreach ($prop as $type){
            $propertyType = $type->propertyType->name;
        }
        foreach ($prop as $user){
            $user = $user->user->name;
        }
        return response()->json($prop,200);
    }
    public function getLandlord()
    {
        $proptype  = User::where('role','landloard')->get();
        return response()->json($proptype,200);
    }
    public function getlanlordProperty($id)
    {
        $renterInvoice  = Property::where('id' , $id)->get();
        foreach ($renterInvoice as $type){
            $propertyType = $type->propertyType->name;
        }
        // foreach ($renterInvoice as $property){
        //     $prop = $property->property->title;
        // }
        foreach ($renterInvoice as $user){
            $user = $user->user->name;
        }
            return response()->json($renterInvoice,200);
        }
}
