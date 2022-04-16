<?php

namespace App\Http\Controllers;
use App\Property;
use App\User;
use App\Renterinvoice;
use App\Reserved;
use App\Propertytype;
use App\Invoice;
use DB;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    //
    public function getProperty($id)
    {
        $property = DB::table('properties')
                    ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                    ->join('cities', 'properties.city_id', '=', 'cities.id')
                    ->join('users', 'properties.user_id', '=', 'users.id')
                    ->select('properties.*' , 'cities.city_name' , 'users.name' , 'users.phone')
                    ->where('properties.id' , $id)
                    ->first();
        // $property = DB::table('reserveds')
        // ->join('users', 'reserveds.user_id', '=', 'users.id')
        // ->join('properties', 'reserveds.property_id', '=', 'properties.id')
        // ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
        // ->join('cities', 'properties.city_id', '=', 'cities.id')
        // ->where('reserveds.property_id' , $id)
        // ->select('users.name' ,'users.phone', 'properties.title' , 'properties.size' , 'properties.rent' ,  'propertytypes.property_name' , 'cities.city_name' , 'reserveds.*' )
        // ->first();
        // $renterInvoice  = Reserved::where('id' , $id)->get();

        // foreach ($renterInvoice as $reserv){
        //     $reserv = $reserv->property->rent_price;
        //     $security =  $reserv * 2;
        //     $total = $security + $reserv;
        // }
        // foreach ($renterInvoice as $pro){
        //     $pro = $pro->property->propertytype->name;
        // }
        // foreach ($renterInvoice as $city){
        //     $city = $city->property->city->city_name;
        // }
        // foreach ($renterInvoice as $user){
        //     $user = $user->user->name;
        // }
        return response()->json($property, 200);
    }
    public function getRenty()
    {
        $user  = User::where('role','renter')->get();

        return response()->json($user,200);
    }
    public function getRenterProperty()
    {
        $property  = Propertytype::get();


        return response()->json($property,200);
    }
    public function getTotalRent()
    {
        $property  = Property::get();
        return response()->json($property,200);
    }
    public function search(Request $request)
    {
        $city = Reserved::where('city_name', 'like', '%'.$request['query'].'%')->get();

        if (count($city) < 1) {
            $city = Reserved::orderBy('created_at','desc')->paginate(20);
        }
        return response()->json($city, 200);
    }
    public function invoice(Request $request)
    {
            $invoice = new Invoice();
            $invoice->property_id = $request->id;
            $invoice->user_id = $request->user('api')->id;
            if ($invoice->save()) {
                return response()->json([
                    'message' => 'Invoice has been added in your Invoice list',
                    'status_code' => 201
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Some error occurred, Please try again',
                    'status_code' => 500
                ], 500);
            }

    }
}
