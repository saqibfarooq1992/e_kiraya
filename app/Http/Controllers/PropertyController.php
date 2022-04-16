<?php

namespace App\Http\Controllers;

use App\Property;
use App\Propertytype;
use App\City;
use App\Sector;
use App\Rule;
use App\Favorite;
use App\Like;
use App\User;
use App\Invoice;
use Carbon\Carbon;
use DB;
use Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        $property = DB::table('properties')
            ->join('users' , 'properties.user_id' , '=' ,'users.id')
            ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
            ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
            ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
            ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
            ->orderBy('updated_at','DESC')->paginate(4);
        return response()->json($property, 200);
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
            'title' => 'required|string',
            'description' => 'required',
            'property_type' => 'required',
            'city' => 'required',
            'address' => 'required',
            'unit' => 'required',
            'size' => 'required',
            'rent_price' => 'required',
            'furnished' => 'required',
            'sector' =>  'required',
            'payment' => 'required',
            'account' =>  'required',
            'pic1' => 'required|image|mimes:jpeg,png,jpg',
            'pic2' => 'required|image|mimes:jpeg,png,jpg',
            'pic3' => 'required|image|mimes:jpeg,png,jpg',
            'pic4' => 'required|image|mimes:jpeg,png,jpg',
            'pic5' => 'required|image|mimes:jpeg,png,jpg',
            'pic6' => 'required|image|mimes:jpeg,png,jpg',
            'pic7' => 'required|image|mimes:jpeg,png,jpg',
            'pic8' => 'required|image|mimes:jpeg,png,jpg',
        ]);
        $user = $request->user('api')->id;
        $property = new Property();
        $property->user_id = $user;
        $rand = rand();
        $property->property_number = "$request->title - eko$rand";
        $property->title = $request->title;
        $slug = Str::slug($property->property_number , '-');
        $property->slug = $slug;
        $property->description = $request->description;
        $property->city_id = $request->city;
        $property->sector_id = $request->sector;
        $property->propertytype_id = $request->property_type;
        $property->address = $request->address;
        $property->unit = $request->unit;
        $property->size = $request->size;
        $property->payment_type = $request->payment;
        $property->account_number = $request->account;
        $property->rent_price = $request->rent_price;
        $property->status = "pending";
        $property->notification = "new";
        $property->rent = "unpaid";
        $property->furnished = $request->furnished;
        $property->reservation = "pending";
        $property->security_price = $request->rent_price*2;
        $property->company_commession=$property->rent_price/2;
        $property->pic1 = $request->file('pic1')->store('property');
        $property->pic2 = $request->file('pic2')->store('property');
        $property->pic3 = $request->file('pic3')->store('property');
        $property->pic4 = $request->file('pic4')->store('property');
        $property->pic5 = $request->file('pic5')->store('property');
        $property->pic6 = $request->file('pic6')->store('property');
        $property->pic7 = $request->file('pic7')->store('property');
        $property->pic8 = $request->file('pic8')->store('property');
        if ($request->pic9 && $request->pic10 && $request->pic11 && $request->pic12) {
            $request->validate([
                'pic9' => 'required|image|mimes:jpeg,png,jpg',
                'pic10' => 'required|image|mimes:jpeg,png,jpg',
                'pic11' => 'required|image|mimes:jpeg,png,jpg',
                'pic12' => 'required|image|mimes:jpeg,png,jpg',
            ]);
            $property->pic9 = $request->file('pic9')->store('property');
            $property->pic10 = $request->file('pic10')->store('property');
            $property->pic11 = $request->file('pic11')->store('property');
            $property->pic12 = $request->file('pic12')->store('property');
        } else {
            $property->pic9  = "Null";
            $property->pic10 = "Null";
            $property->pic11 = "Null";
            $property->pic12 = "Null";
        }
        if ($request->tvlounge && $request->garage) {
            $request->validate([
                        'tvlounge' => 'required',
                        'garage' => 'required',
                    ]);
                    $property->tv_lounged = $request->tvlounge;
                    $property->garage = $request->garage;
        } else {
                    $property->tv_lounged = "Null";
                    $property->garage = "Null";
        }
        if ($request->badrooms && $request->bathrooms) {
            $request->validate([
                        'badrooms' => 'required',
                        'bathrooms' => 'required',
                    ]);
                    $property->badrooms = $request->badrooms;
                    $property->bathrooms = $request->bathrooms;
        } else {
                    $property->badrooms = "Null";
                    $property->bathrooms = "Null";
        }
        if($request->marital_status)
        {
            $request->validate([
                'marital_status' => 'required',
            ]);
            $property->marital_status = $request->marital_status;
        }else{
            $property->marital_status = "null";
        }
        if($property->save()){
            $property = array(
                'email' => $request->user('api')->email,
                'name' => $request->user('api')->name,
                'user_query' => "Thanks For Joining Our Community Your Property Added Successfully Please Cooperate with us  ",
            );
            Mail::send('emails.AddProperty', $property, function ($message) use ($property) {
                $message->from('no_reply@eko.com.pk', 'Adding new Property');
                $message->to($property['email'], $property['name']);
                $message->subject($property['user_query']);
            });
            return response()->json([
                'message' => 'Property Data Added successfully!',
                'status_code' => 201
            ], 201);
        }else{
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function show(Property $property)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property $property)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required',
            'property_type' => 'required',
            'city' => 'required',
            'sector' => 'required',
            'badrooms' => 'required',
            'bathrooms' => 'required',
            'address' => 'required',
            'unit' => 'required',
            'marital_status' => 'required',
            'size' => 'required',
            'rent_price' => 'required',
            'tvlounge' => 'required',
            'garage' => 'required',
            'furnished' => 'required',
        ]);
        $property->title = $request->title;
        $property->description = $request->description;
        $property->propertytype_id = $request->property_type;
        $property->city_id = $request->city;
        $property->sector_id = $request->sector;
        $property->badrooms = $request->badrooms;
        $property->bathrooms = $request->bathrooms;
        $property->address = $request->address;
        $property->unit = $request->unit;
        $property->marital_status = $request->marital_status;
        $property->size = $request->size;
        $property->rent_price = $request->rent_price;
        $property->security_price = $request->rent_price*2;
        if ($request->paid_date) {
            $property->paid_date = $request->paid_date;
        }else{
            $property->paid_date = 'null';
        }
        $property->company_commession = $request->company_commession;
        if ($request->operator ==='-') {
            $property->dues_rent = $property->security_price - $request->security_price;
        }else{
            $property->dues_rent = 0;
            $property->company_commession = 0;
        }
        $property->tv_lounged = $request->tvlounge;
        $property->garage = $request->garage;
        $property->furnished = $request->furnished;
        if($request->employee){
            $property->employee = $request->employee;
        }
        $property->notification = 'new';
        $oldPath    =   $property->pic1;
        if ($request->hasFile('pic1')) {
            $request->validate([
                'pic1' => 'image|mimes:jpeg,png,jpg',
           ]);
            $path = $request->file('pic1')->store('property');
            $property->pic1 = $path;
            Storage::delete($oldPath);
        }else if($request->hasFile('pic2')){
            $request->validate([
                'pic2' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic2')->store('property');
           $property->pic2 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic3')){
            $request->validate([
                'pic3' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic3')->store('property');
           $property->pic3 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic4')){
            $request->validate([
                'pic4' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic4')->store('property');
           $property->pic4 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic5')){
            $request->validate([
                'pic5' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic5')->store('property');
           $property->pic5 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic6')){
            $request->validate([
                'pic6' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic6')->store('property');
           $property->pic6 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic7')){
            $request->validate([
                'pic7' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic7')->store('property');
           $property->pic7 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic8')){
            $request->validate([
                'pic8' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic8')->store('property');
           $property->pic8 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic9')){
            $request->validate([
                'pic9' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic9')->store('property');
           $property->pic9 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic10')){
            $request->validate([
                'pic10' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic10')->store('property');
           $property->pic10 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic11')){
            $request->validate([
                'pic1' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic11')->store('property');
           $property->pic11 = $path;
           Storage::delete($oldPath);
        }else if($request->hasFile('pic12')){
            $request->validate([
                'pic12' => 'image|mimes:jpeg,png,jpg',
           ]);
           $path = $request->file('pic12')->store('property');
           $property->pic12 = $path;
           Storage::delete($oldPath);
        }
        // $lastTotal = Property::latest('id')->select('Total_price')->get();
        // if($lastTotal->isEmpty()){
        //     $property->Total_price = $request->rent;
        // } else {
        //     $property->Total_price = $request->rent + $lastTotal[0]->Total_price;
        // }
        if ($property->save()) {
            return response()->json($property,200);
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
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property $property)
    {
        if($property->delete()){
            Storage::delete([$property->pic1 ,
                            $property->pic2,
                            $property->pic3,
                            $property->pic4,
                            $property->pic5,
                            $property->pic6,
                            $property->pic7,
                            $property->pic8,
                            $property->pic9,
                            $property->pic10,
                            $property->pic11,
                            $property->pic12]);
            return  response()->json([
                'message'   =>  'Property  Deleted Successfully',
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
    public function getprotype()
    {
        $pro = Propertytype::orderBy('created_at','desc')->get();
        return response()->json($pro, 200);
    }
    public function getcity()
    {
        $cities = City::orderBy('created_at', 'asc')->get();
        return response()->json($cities,200);
    }
    public function getsectors(Request $request)
    {
        $sectors = Sector::where('city_id', $request->city_id)->get();

        return response()->json($sectors,200);
    }
    public function getsector(Request $request)
    {
        $sectors = DB::table('sectors')->get();

        return response()->json($sectors,200);
    }
    public function getsectorsupdate()
    {
        $sectors = Sector::get();

        return response()->json($sectors,200);
    }
    public function getrules()
    {
        $rules = Rule::orderBy('created_at','desc')->paginate(5);
        return response()->json($rules, 200);
    }
    public function approved(Request $request , $id )
    {
        $properties = Property::find($id);
        $properties->status = 'approved';
        $properties->notification = 'new';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property approved successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function reservation(Request $request , $id )
    {
        $properties = Property::find($id);
        $properties->reservation = 'rejected';
        $properties->notification = 'new';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property approved successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function hotProperty(Request $request , $id)
    {
        $properties = Property::find($id);
        $properties->status='hot';
        $properties->manager_phone = $request->user('api')->phone;
        $check = Property::where('status','hot')->count();
        if($check < 4)
        {
            if ($properties->save())
            {
            return response()->json([
                'message' => 'Property under Taking successfully!',
                'status_code' => 200
            ], 200);
            }
            else
            {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
            }
        }
        else
        {
            return response()->json([
                'message' => 'Four Properties already in hot status!',
                'status_code' => 401
            ], 401);
        }
    }
    public function paidRent($id ,  Request $request)
    {
        $properties = Property::find($id);
        $properties->rent = 'paid';
        $check = Invoice::whereMonth('created_at', Carbon::today()->month)->whereYear('created_at', Carbon::today()->format('Y'))->where( 'property_id' , $id)->first();
        if (!$check) {
            if($properties->save()){
                $property = new Invoice();
                $property->property_id = $id;
                $property->user_id = $request->user('api')->id;
                $property->save();
                return response()->json([
                    'message' => 'Property has paid successfully',
                    'status_code' => 200
                ], 200);
            }else {
                return response()->json([
                    'message' => 'Some error occurred! , Please try again',
                    'status_code' => 500
                ], 500);
            }
        }else{
            return response()->json([
                'message' => 'Properties already in Your Invoice list you can paid this property next month!',
                'status_code' => 401
            ], 401);
        }


    }
    public function unpaid($id)
    {
        $properties = Property::find($id);
        $properties->rent = 'unpaid';
        if ($properties->save()) {
            $invoice = Invoice::whereMonth('created_at', Carbon::today()->month)->whereYear('created_at', Carbon::today()->format('Y'))->where('property_id' , $id)->first();
            $invoice->delete();
            return response()->json([
                'message' => 'You are Successfully Change this property Rent type!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    // public function suspendedProperty($id)
    // {
    //     dd($id);
    //     $property = Property::find($id);
    //     $property->status = 'suspended';
    //     if($property->save())
    //     {
    //         return response()->json([
    //             'message' => 'You are Successfully change this property status',
    //             'status_code' => 200,
    //         ]);
    //     }else{
    //         return response()->json([
    //             'message' => 'Some error occurred , Please try again',
    //         ]);
    //     }

    // }
    public function propertyRunning($id)
    {
        $properties = Property::find($id);
        $properties->status='occupied';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property under Taking successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function seen($id)
    {
        $properties = Property::find($id);
        $properties->notification = 'old';
        if ($properties->save()) {
            return response()->json([
                'message' => 'Property Reloaded successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function favorite(Request $request)
    {
        $check = Favorite::where('property_id', $request->id)->where('user_id', $request->user('api')->id)->first();
        if ($check) {
            return response()->json([
                'message' => 'Selected Property is already in your favorite list',
                'status_code' => 200
            ], 200);
        } else {
            $favorite = new Favorite();
            $favorite->property_id = $request->id;
            $favorite->user_id = $request->user('api')->id;

            if ($favorite->save()) {
                return response()->json([
                    'message' => 'Property has been added in your favorite list',
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
    public function like(Request $request)
    {
        $check = Like::where('property_id', $request->id)->where('user_id', $request->user('api')->id)->first();
        if ($check) {
            return response()->json([
                'message' => 'Selected Property is already in your Like list',
                'status_code' => 200
            ], 200);
        } else {
            $like = new Like();
            $like->property_id = $request->id;
            $like->user_id = $request->user('api')->id;

            if ($like->save()) {
                return response()->json([
                    'message' => 'Property has been added in your Like list',
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
    public function reserved(Request $request)
    {
        $check = Favorite::where('property_id', $request->id)->where('user_id', $request->user('api')->id)->first();
        if ($check) {
            return response()->json([
                'message' => 'Selected Property is already in your favorite list',
                'status_code' => 200
            ], 200);
        } else {
            $favorite = new favorite();
            $favorite->property_id = $request->id;
            $favorite->user_id = $request->user('api')->id;
            if ($favorite->save()) {

                return response()->json([
                    'message' => 'Property has been added in your favorite list',
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
    public function unFavorite(Request $request)
    {
        $check = Favorite::where('property_id', $request->id)->where('user_id', $request->user('api')->id)->first();
        if (!$check) {
            return response()->json([
                'message' => 'You have not favorited this Property yet!',
                'status_code' => 200
            ], 200);
        } else {
            if ($check->delete()) {
                return response()->json([
                    'message' => 'Property removed from your favorite list',
                    'status_code' => 201
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Some error occurred, while removing Property from your favorite list',
                    'status_code' => 500
                ], 500);
            }
        }
    }
    public function unLike(Request $request)
    {
        $check = Like::where('property_id', $request->id)->where('user_id', $request->user('api')->id)->first();
        if (!$check) {
            return response()->json([
                'message' => 'You have not Like this Property yet!',
                'status_code' => 200
            ], 200);
        } else {
            if ($check->delete()) {
                return response()->json([
                    'message' => 'Property removed from your Like list',
                    'status_code' => 201
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Some error occurred, while removing Property from your Like list',
                    'status_code' => 500
                ], 500);
            }
        }
    }
    public function getUser()
    {
        $user = User::orderBy('created_at', 'desc')->where('role' , 'employee')->get();
        return response()->json($user,200);
    }
    public function getProperty(Request $request)
    {
        if ($request->user('api')->role==='admin') {
            $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'propertytypes.property_name' , 'properties.*' )
            ->paginate(4);
            return response()->json($property, 200);
        }else{
            $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.user_id' , $request->user('api')->id)
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'propertytypes.property_name' , 'properties.*' )
            ->paginate(4);
        return response()->json($property, 200);
        }
    }
    public function getAllProperty($id)
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.id' , $id)
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.avatar'  , 'propertytypes.property_name' , 'properties.*' )
            ->first();
        return response()->json($property, 200);
    }
    public function getAllReservedProperty($id)
    {
        $property = DB::table('reserveds')
            ->join('properties','reserveds.property_id' , '=' , 'properties.id')
            ->join('users', 'reserveds.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.id' , $id)
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.avatar'  , 'propertytypes.property_name' , 'properties.*' )
            ->first();
        return response()->json($property, 200);
    }
    public function allRent()
    {
        $property = DB::table('properties')->sum('rent_price');
        $properties =  number_format($property);
        return response()->json($properties, 200);
    }
    public function paidProperty()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.rent' , 'paid')
            ->where('properties.status' , 'occupied')
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
            ->paginate(4);

        return response()->json($property, 200);
    }
    public function UnpaidProperty()
    {
        $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.rent' , 'unpaid')
            ->where('properties.status' , 'occupied')
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
            ->paginate(4);

        return response()->json($property, 200);
    }
}
