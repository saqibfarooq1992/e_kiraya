<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\City;
use App\About;
use App\User;
use App\Faq;
use App\Propertytype;
use App\Property;
use App\Favorite;
use App\Like;
use App\Sector;
use App\Reserved;
use App\Seen;
use App\View;
use App\Blog;
use Carbon\Carbon;
use Auth;
use DB;
use Mail;
class MainController extends Controller
{
    public function index()
    {
        $cities = City::orderBy('created_at','asc')->get();
        return response()->json($cities, 200);
    }
    public function about()
    {
        $about = About::first();
        return response()->json($about, 200);
    }
    public function faq()
    {
        $faqs = DB::table('faqs')
                ->join('users' , 'faqs.user_id' , '=' , 'users.id')
                ->get();
        return response()->json($faqs , 200);
    }
    public function header()
    {
        $headers = DB::table('headers')->where('id', '1')->first();
        return response()->json($headers, 200);
    }
    public function getproperty(){
        $protype = DB::table('propertytypes')->get();
        return response()->json($protype, 200);
    }
    // public function myproperty(Request $request)
    // {
    //     $myproperty = DB::table('properties')
    //     ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
    //     ->join('cities', 'properties.city_id', '=', 'cities.id')
    //     ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
    //     ->where('user_id',$request->user('api')->id)
    //     ->select('propertytypes.property_name' , 'properties.*' , 'cities.city_name' , 'sectors.sector')
    //     ->get();
    //     return response()->json($myproperty,200);
    // }
    public function getFavourite(Request $request)
    {
        $favourite = DB::table('favorites')
                    ->join('users' , 'favorites.user_id' , '=' , 'users.id')
                    ->join('properties' , 'favorites.property_id' , '=' , 'properties.id')
                    ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                    ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
                    ->where('properties.user_id' , $request->user('api')->id)
                    ->select('users.name' , 'properties.*' , 'cities.city_name' , 'sectors.sector')
                    ->get();
        return response()->json($favourite, 200);

    }
    public function detail(){
        $properties = DB::table('properties')
        ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'properties.id')
        ->select('properties.*' , 'propertytypes.property_name')->get();
        return response()->json($properties,200);
    }
    public function propertyDetail($slug)
    {
        $property = DB::table('properties')
                    ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                    ->join('cities', 'properties.city_id', '=', 'cities.id')
                    ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                    ->join('users' , 'properties.user_id' , '=' , 'users.id')
                    ->where('properties.slug' , $slug)
                    ->select('properties.*' , 'sectors.sector' , 'cities.city_name','propertytypes.property_name')->first();
        return response()->json($property, 200);
    }
    public function getProperties()
    {
        $property = DB::table('properties')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->select('propertytypes.property_name' , 'properties.*' )
            ->get();
        return response()->json($property,200);
    }
    public function hotProperty(Request $request)
    {
        $properties = DB::table('properties')
                    ->join('users' , 'properties.user_id' , '=' , 'users.id')
                    ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                    ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                    ->where('properties.status' , 'hot')
                    ->select('users.id' , 'users.name' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name', 'properties.*')
                    ->get();
                    if($request->user('api')){
                        foreach ($properties as $key => $property) {
                            $favourited = Favorite::where('user_id' , $request->user('api')->id)
                            ->where('property_id' , $property->id)
                            ->first();
                            if ($favourited) {
                                $property->favourited = true;
                            } else {
                                $property->favourited = false;
                            }
                        }
                }else{
                    $properties = DB::table('properties')
                    ->join('users' , 'properties.user_id' , '=' , 'users.id')
                    ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                    ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                    ->where('properties.status' , 'hot')
                    ->select('users.id' , 'users.name' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name', 'properties.*')
                    ->get();
                }
                if($request->user('api')){
                    foreach ($properties as $key => $property) {
                        $liked = Like::where('user_id' , $request->user('api')->id)
                        ->where('property_id' , $property->id)
                        ->first();
                        if ($liked) {
                            $property->liked = true;
                        } else {
                            $property->liked = false;
                        }
                    }
            }else{
                $properties = DB::table('properties')
                ->join('users' , 'properties.user_id' , '=' , 'users.id')
                ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
                ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                ->where('properties.status' , 'hot')
                ->select('users.id' , 'users.name' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name', 'properties.*')
                ->get();
            }
        return response()->json($properties,200);
    }
    public function getFrontProperties(Request $request)
    {
                    $properties = DB::table('properties')
                                  ->join('users' , 'properties.user_id' , '=' , 'users.id')
                                  ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                                  ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                                  ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
                                  ->where('properties.status','approved')
                                  ->select('users.name' , 'propertytypes.property_name' , 'cities.city_name' , 'sectors.sector' , 'properties.*')
                                  ->orderBy('updated_at','DESC')->paginate(4);
                    if($request->user('api')){
                        if($request->user('api')){
                            foreach ($properties as $key => $property) {
                                $favourited = Favorite::where('user_id' , $request->user('api')->id)
                                ->where('property_id' , $property->id)
                                ->first();
                                if ($favourited) {
                                    $property->favourited = true;
                                } else {
                                    $property->favourited = false;
                                }

                            }
                        }else{
                            $properties = DB::table('properties')
                            ->join('users' , 'properties.user_id' , '=' , 'users.id')
                            ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                            ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                            ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
                            ->where('properties.status','approved')
                            ->select('users.name' , 'propertytypes.property_name' , 'cities.city_name' , 'sectors.sector' , 'properties.*')
                            ->orderBy('updated_at','DESC')->paginate(4);
                        }
                        if ($request->user('api')) {
                            foreach ($properties as $key => $property) {

                                $liked = Like::where('user_id' , $request->user('api')->id)
                                ->where('property_id' , $property->id)
                                ->first();
                                if ($liked) {
                                    $property->liked = true;
                                } else {
                                    $property->liked = false;
                                }
                            }
                        } else {
                            $properties = DB::table('properties')
                            ->join('users' , 'properties.user_id' , '=' , 'users.id')
                            ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                            ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                            ->join('sectors' , 'properties.sector_id' , '=' , 'sectors.id')
                            ->where('properties.status','approved')
                            ->select('users.name' , 'propertytypes.property_name' , 'cities.city_name' , 'sectors.sector' , 'properties.*')
                            ->orderBy('updated_at','DESC')->paginate(4);

                        }
                    }
                return response()->json($properties,200);
    }
    public function getCity()
    {
        $city = City::orderBy('created_at','asc')->get();
        return response()->json($city, 200);
    }
    public function getSector(Request $request)
    {
        $sector = Sector::where('city_id', $request->city_id)->get();
        return response()->json($sector, 200);
    }
    public function search(Request $request)
    {
        $property= Property::with('user')
                                ->with('propertytype')
                                ->with('city')
                                ->with('sector')
                                ->with('favorite')
                                ->with('like')
                                ->with('share')
                                ->withCount('reserved')
                                ->withCount('like')
                                ->withCount('favorite')
                                ->withCount('view')
                                ->withCount('seen')
                                ->withCount('share')
                                ->where('title', 'like', '%'.$request['qu'].'%')
                                ->where('city_id', 'like', '%'.$request['city'].'%')
                                ->where('sector_id', 'like', '%'.$request['sector'].'%')
                                ->where('status','approved')
                                ->orderBy('updated_at','DESC')->get();
                                if ($property -> isEmpty()) {
                                    return response()->json([
                                        'message' => 'Sorry Searched Property not found!',
                                        'status_code' => 404
                                    ], 404);
                                } else {
                                    return response()->json($property, 200);
                                }
    }
    //show popular property page
    public function getPopularProperty()
    {
        $property = DB::table('seens')
            ->join('properties', 'seens.property_id', '=', 'properties.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->select('cities.city_name', 'sectors.sector', 'propertytypes.property_name' , 'properties.*' )
            ->distinct()
            ->get();
        return response()->json($property, 200);
    }
    public function visitProperty(Request $request)
    {
       $check = View::where('property_id', $request->id)->first();
        if ($check) {
            return response()->json([
                'message' => 'Selected Property is already in your View list',
                'status_code' => 200
            ], 200);
        } else {
            $visited = new View();
            $visited->property_id = $request->id;
            $visited->user_id = $request->user('api')->id;
            if ($visited->save()) {
                return response()->json([
                    'message' => 'Property has been added in your visited list',
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
    public function topProperty(Request $request)
    {
        $check = Property::where('id', $request->id)->first();
        if ($check) {
            $check->updated_at = now();
            $check->save();
        }
        else {
            return response()->json([
                    'message' => 'Some error occurred, Please try again',
                    'status_code' => 500
                ], 500);
        }
    }
    public function recommendedProperty(Request $request , $id)
    {
        $property = DB::table('properties')
                    ->join('cities' , 'properties.city_id' , 'cities.id')
                    ->join('sectors' , 'properties.sector_id' , 'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , 'propertytypes.id')
                    ->where('properties.city_id' , $id)
                    ->select('properties.*' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name')->paginate(4);
        return response()->json($property,200);
    }
    public function updateReserved(Request $request)
    {
        $request->validate([
            'cnic' => 'required',
            'current_address' => 'required',
            'status' => 'required',
            'domicile' => 'required',
        ]);
            if($request->user('api')){
                $reserve = new Reserved();
                $reserve->user_id = $request->user('api')->id;
                $reserve->property_id = $request->property_id;
                $reserve->cnic = $request->cnic;
                $reserve->current_address = $request->current_address;
                $reserve->m_status = $request->status;
                $reserve->domicile = $request->domicile;
                if ($reserve->save()) {
                    $property = array(
                        'email' => $request->user('api')->email,
                        'name' => $request->user('api')->name,
                        'user_query' => "Thanks For Joining Our Community Your Property Added in Reserved Successfully Please Cooperate with us  ",
                    );
                    Mail::send('emails.Reserved', $property, function ($message) use ($property) {
                        $message->from('no_reply@eko.com.pk', 'Adding new Property');
                        $message->to($property['email'], $property['name']);
                        $message->subject($property['user_query']);
                    });
                    return response()->json([
                        'message' => 'Property has been added in your Reserved list',
                        'status_code' => 201
                    ], 201);
                } else {
                    return response()->json([
                        'message' => 'Some error occurred, Please try again',
                        'status_code' => 500
                    ], 500);
                }
            }else{
                $user = new User();
                $user->name = $request->Name;
                $user->email = $request->email;
                $user->password = bcrypt($request->password);
                $user->phone = $request->phone;
                $user->role = $request->role;
                $user->city_id = $request->city_id;
                $user->varification_code = "Null";
                $user->terms = 'true';
                $user->status = 'pendding';
                $user->avatar = 'null';
                if($user->save()){
                    $reserve = new Reserved();
                    $reserve->user_id = $user->id;
                    $reserve->property_id = $request->property_id;
                    $reserve->cnic = $request->cnic;
                    $reserve->current_address = $request->current_address;
                    $reserve->m_status = $request->status;
                    $reserve->domicile = $request->domicile;
                    if ($reserve->save()) {
                        return response()->json([
                            'message' => 'Property has been added in your Reserved list',
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
    }
    public function blog()
    {
        $blog = Blog::orderBy('created_at','asc')->get();
        return response()->json($blog, 200);
    }
}
