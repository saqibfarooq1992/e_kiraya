<?php

namespace App\Http\Controllers;
use App\Property;
use App\Reserved;
use App\Favorite;
use DB;
use Illuminate\Http\Request;

class LandloardController extends Controller
{
    //
    // public function totalProperty(Request $request)
    // {
    //     $property = Property::where('user_id', $request->user('api')->id)->count();
    //     return response()->json($property, 200);
    // }
    public function totalReserve(Request $request)
    {
        $property = Reserved::where('user_id', $request->user('api')->id)->count();
        return response()->json($property, 200);
    }
    public function totalPendingProperty(Request $request)
    {
        $property = Property::where('status' , 'pendding')->where('user_id', $request->user('api')->id)->count();
        return response()->json($property, 200);
    }
    // public function totalFavoriteProperty(Request $request)
    // {
    //     $property = DB::table('favorites')
    //                 ->join('users' , 'favorites.user_id' , '=' , 'users.id')
    //                 ->join('properties' , 'favorites.property_id' , '=' , 'properties.id')
    //                 ->where('properties.user_id', $request->user('api')->id)->count();
    //     return response()->json($property, 200);
    // }
    // public function totalLikedProperty(Request $request)
    // {
    //     $property = DB::table('likes')
    //                 ->join('users' , 'likes.user_id' , '=' , 'users.id')
    //                 ->join('properties' , 'likes.property_id' , '=' , 'properties.id')
    //                 ->where('properties.user_id', $request->user('api')->id)->count();
    //     return response()->json($property, 200);
    // }
    // public function totalRent(Request $request)
    // {
    //     $property = Property::where('user_id', $request->user('api')->id)->sum('rent_price');
    //     $properties =  number_format($property);
    //     return response()->json($properties, 200);
    // }
    public function paidRent(Request $request)
    {
        $property = Property::where('user_id', $request->user('api')->id)->where('rent' , 'paid')->sum('rent_price');
        $properties =  number_format($property);
        return response()->json($properties, 200);
    }
    
    // public function getUnPaidRent(Request $request)
    // {
    //     $properties = DB::table('properties')
    //         ->join('users', 'properties.user_id', '=', 'users.id')
    //         ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
    //         ->join('cities', 'properties.city_id', '=', 'cities.id')
    //         ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
    //         ->where('properties.rent', 'unpaid')
    //         ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
    //         ->paginate(4);
    //     return response()->json($properties, 200);
    // }
    public function listProperty(Request $request)
    {
        
        $property= Property::with('user')->with('propertytype')
                                          ->with('city')
                                          ->with('sector')
                                          ->with(array('favorite' => function ($query) use($request) {
                                            $query->where('user_id', $request->user('api'));
                                            }))
                                          ->with(array('like' => function ($query) use($request) {
                                            $query->where('user_id', $request->user('api'));
                                            }))
                                          ->withCount('reserved')
                                          ->withCount('like')
                                          ->withCount('favorite')
                                          ->withCount('view')
                                          ->withCount('seen')
                                          ->where('user_id' , $request->user('api')->id)
                                          ->orderBy('updated_at','DESC')->paginate(4);
        return response()->json($property, 200);
    }
    // public function listPenddingProperty(Request $request)
    // {
    //     $properties = DB::table('properties')
    //         ->join('users', 'properties.user_id', '=', 'users.id')
    //         ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
    //         ->join('cities', 'properties.city_id', '=', 'cities.id')
    //         ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
    //         ->where('properties.status' , 'pending')
    //         ->where('user_id', $request->user('api')->id)
    //         ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
    //         ->paginate(4);
    //     return response()->json($properties, 200);
    // }
    // public function ReservedProperty(Request $request)
    // {
    //     $property = DB::table('reserveds')
    //         ->join('users', 'reserveds.user_id', '=', 'users.id')
    //         ->join('properties', 'reserveds.property_id', '=', 'properties.id')
    //         ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
    //         ->join('cities', 'properties.city_id', '=', 'cities.id')
    //         ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
    //         ->where('properties.user_id', $request->user('api')->id)
    //         ->select('cities.city_name', 'sectors.sector', 'users.*' , 'propertytypes.property_name' , 'properties.*' )
    //         ->get();
    //         return response()->json($property, 200);
    // }
    public function search(Request $request)
    {
        $city = Reserved::where('city_name', 'like', '%'.$request['query'].'%')->get();

        if (count($city) < 1) {
            $city = Reserved::orderBy('created_at','desc')->paginate(20);
        }
        return response()->json($city, 200);
    }
    // public function engaged(Request $request)
    // {
    //     $property = Property::where('user_id', $request->user('api')->id)
    //     ->where('status' , 'occupied')
    //     ->count();
    //     return response()->json($property, 200);
    // }
    // public function engagedProperty(Request $request)
    // {
    //     $property = DB::table('properties')
    //                   ->join('propertytypes', 'properties.propertytype_id' , '=' , 'propertytypes.id')
    //                   ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
    //                   ->where('properties.user_id' , $request->user('api')->id)
    //                   ->where('properties.status' , 'occupied')
    //                   ->select('propertytypes.property_name' , 'properties.*','cities.city_name')
    //                   ->get();
    //     return response()->json($property, 200);
    // }
    // public function searchReact(Request $request)
    // {
    //     $favourit = DB::table('favorites')
    //         ->join('users', 'favorites.user_id', '=', 'users.id')
    //         ->join('properties', 'favorites.property_id', '=', 'properties.id')
    //         ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
    //         ->join('cities', 'properties.city_id', '=', 'cities.id')
    //         ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
    //         ->where('properties.user_id', $request->user('api')->id)
    //         ->distinct()
    //         ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
    //         ->paginate(4);
    //     if($request->q == 'like')
    //     {
    //         $likes = DB::table('likes')
    //         ->join('users', 'likes.user_id', '=', 'users.id')
    //         ->join('properties', 'likes.property_id', '=', 'properties.id')
    //         ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
    //         ->join('cities', 'properties.city_id', '=', 'cities.id')
    //         ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
    //         ->where('properties.user_id', $request->user('api')->id)
    //         ->distinct()
    //         ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
    //         ->paginate(4);
    //         return response()->json($likes, 200);
    //     }
    //     else{
    //         $favourited = DB::table('favorites')
    //         ->join('users', 'favorites.user_id', '=', 'users.id')
    //         ->join('properties', 'favorites.property_id', '=', 'properties.id')
    //         ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
    //         ->join('cities', 'properties.city_id', '=', 'cities.id')
    //         ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
    //         ->where('properties.user_id', $request->user('api')->id)
    //         ->distinct()
    //         ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
    //         ->paginate(4);
    //         return response()->json($favourited, 200);
    //     }
    //     return response()->json($favourit   , 200);

        
    // }
}
