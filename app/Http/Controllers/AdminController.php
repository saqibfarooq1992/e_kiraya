<?php

namespace App\Http\Controllers;
use App\Property;
use App\User;
use App\Reserved;
use App\Favorite;
use DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function Property(Request $request)
    {
        if($request->user('api')->role==='admin'){
                $property = DB::table('properties')
                            ->join('users' , 'properties.user_id' , '=' ,'users.id')
                            ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                            ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                            ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                            ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                            ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
        }else {
                $property = DB::table('properties')
                        ->join('users' , 'properties.user_id' , '=' ,'users.id')
                        ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                        ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                        ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                        ->where('user_id' , $request->user('api')->id)
                        ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                        ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
        }


    }
    public function searchProperty(Request $request)
    {
        if ($request->q===null) {
            if ($request->user('api')->role === 'admin') {
                $property = DB::table('properties')
                            ->join('users' , 'properties.user_id' , '=' ,'users.id')
                            ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                            ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                            ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                            ->where('properties.status' , 'commented')
                            ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                            ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
            } else{
                $property = DB::table('properties')
                        ->join('users' , 'properties.user_id' , '=' ,'users.id')
                        ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                        ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                        ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                        ->where('properties.user_id' , $request->user('api')->id)
                        ->where('properties.status' , 'commented')
                        ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                        ->orderBy('updated_at','DESC')->paginate(4);

            }

        }elseif ($request->q==='comment') {
            if ($request->user('api')->role === 'admin') {
                $property = DB::table('properties')
                            ->join('users' , 'properties.user_id' , '=' ,'users.id')
                            ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                            ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                            ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                            ->where('properties.status' , 'commented')
                            ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                            ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
            } else {
                $property = DB::table('properties')
                        ->join('users' , 'properties.user_id' , '=' ,'users.id')
                        ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                        ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                        ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                        ->where('properties.user_id' , $request->user('api')->id)
                        ->where('properties.status' , 'commented')
                        ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                        ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);

            }
        }elseif ($request->q==='engaged') {
            if ($request->user('api')->role === 'admin') {
                $property = DB::table('properties')
                ->join('users' , 'properties.user_id' , '=' ,'users.id')
                ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                ->where('properties.status' , 'occupied')
                ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                ->orderBy('updated_at','DESC')->paginate(4);
            return response()->json($property, 200);
            } else {
                $property = DB::table('properties')
                        ->join('users' , 'properties.user_id' , '=' ,'users.id')
                        ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                        ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                        ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                        ->where('properties.user_id' , $request->user('api')->id)
                        ->where('properties.status' , 'occupied')
                        ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                        ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
            }
        }elseif ($request->q==='un-paid') {
            if ($request->user('api')->role === 'admin') {
                    $property = DB::table('properties')
                    ->join('users' , 'properties.user_id' , '=' ,'users.id')
                    ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                    ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                    ->where('rent' , 'unpaid')
                    ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                    ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
            } else {
                $property = DB::table('properties')
                    ->join('users' , 'properties.user_id' , '=' ,'users.id')
                    ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                    ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                    ->where('properties.user_id' , $request->user('api')->id)
                    ->where('rent' , 'unpaid')
                    ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                    ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
            }
        }elseif ($request->q==='paid') {
            if ($request->user('api')->role === 'admin') {
                $property = DB::table('properties')
                    ->join('users' , 'properties.user_id' , '=' ,'users.id')
                    ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                    ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                    ->where('rent' , 'paid')
                    ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                    ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
            } else {
                $property = DB::table('properties')
                    ->join('users' , 'properties.user_id' , '=' ,'users.id')
                    ->join('cities' , 'properties.city_id' , '=' ,'cities.id')
                    ->join('sectors' , 'properties.sector_id' , '=' ,'sectors.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' ,'propertytypes.id')
                    ->where('properties.user_id' , $request->user('api')->id)
                    ->where('rent' , 'paid')
                    ->select('users.name' , 'users.phone' , 'cities.city_name' , 'sectors.sector' , 'propertytypes.property_name' , 'properties.*')
                    ->orderBy('updated_at','DESC')->paginate(4);
                return response()->json($property, 200);
            }

        }
    }
    public function react(Request $request)
    {
        if ($request->reactQuery==='favourited') {
            if ($request->user('api')->role==='admin') {
                $favorited = DB::table('favorites')
                ->join('users', 'favorites.user_id', '=', 'users.id')
                ->join('properties', 'favorites.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);
            } else {
                $favorited = DB::table('favorites')
                ->join('users', 'favorites.user_id', '=', 'users.id')
                ->join('properties', 'favorites.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.user_id' , $request->user('api')->id)
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);
            }

        }elseif($request->reactQuery==='liked') {
            if ($request->user('api')->role==='admin') {
                $favorited = DB::table('likes')
                ->join('users', 'likes.user_id', '=', 'users.id')
                ->join('properties', 'likes.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);

            } else {
                $favorited = DB::table('likes')
                ->join('users', 'likes.user_id', '=', 'users.id')
                ->join('properties', 'likes.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.user_id' , $request->user('api')->id)
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);
            }

        }elseif ($request->reactQuery==='visited') {
            if ($request->user('api')->role==='admin') {
                $favorited = DB::table('views')
                ->join('users', 'views.user_id', '=', 'users.id')
                ->join('properties', 'views.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);

            } else {
                $favorited = DB::table('views')
                ->join('users', 'views.user_id', '=', 'users.id')
                ->join('properties', 'views.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.user_id' , $request->user('api')->id)
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);
            }

        }elseif ($request->reactQuery==='seen') {
           if ($request->user('api')->role==='admin') {
            $favorited = DB::table('seens')
            ->join('users', 'seens.user_id', '=', 'users.id')
            ->join('properties', 'seens.property_id', '=', 'properties.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->distinct()
            ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
            ->paginate(4);
            return response()->json($favorited, 200);
           } else {
                $favorited = DB::table('seens')
                ->join('users', 'seens.user_id', '=', 'users.id')
                ->join('properties', 'seens.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.user_id' , $request->user('api')->id)
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);
           }

        }elseif ($request->reactQuery===null) {
           if ($request->user('api')->role==='admin') {
                $favorited = DB::table('favorites')
                ->join('users', 'favorites.user_id', '=', 'users.id')
                ->join('properties', 'favorites.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);
            } else {
                $favorited = DB::table('favorites')
                ->join('users', 'favorites.user_id', '=', 'users.id')
                ->join('properties', 'favorites.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.user_id' , $request->user('api')->id)
                ->distinct()
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->paginate(4);
                return response()->json($favorited, 200);
            }
        }
    }
    public function approvedCount()
    {
        $count = DB::table('properties')->where('status' , 'approved')->where('notification' , 'new')->count();
        return response()->json($count,200);
    }
    public function totalCount()
    {
        $count = DB::table('properties')->count();
        return response()->json($count,200);
    }
    public function totalPropertyCount()
    {
        $count = Property::where('notification','new')->count();
        return response()->json($count,200);
    }
    public function totalRent(Request $request)
    {
        if($request->user()->role === 'admin'){
            $property = DB::table('properties')->sum('rent_price');
            $properties =  number_format($property);
            return response()->json($properties, 200);
        }else{
            $property = DB::table('properties')->where('user_id', $request->user('api')->id)->sum('rent_price');
            $properties =  number_format($property);
            return response()->json($properties, 200);
        }

    }
    public function unPaidRent(Request $request)
    {
        if($request->user('api')->role === 'admin'){
            $property = Property::where('rent' , 'unpaid')->sum('rent_price');
            $properties =  number_format($property);
            return response()->json($properties, 200);
        }else{
            $property = Property::where('user_id', $request->user('api')->id)->where('rent' , 'unpaid')->sum('rent_price');
            $properties =  number_format($property);
            return response()->json($properties, 200);
        }

    }
    public function searchReservedProperty(Request $request)
    {
        $property = DB::table('reserveds')
        ->join('users', 'reserveds.user_id', '=', 'users.id')
        ->join('properties', 'reserveds.property_id', '=', 'properties.id')
        ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
        ->join('cities', 'properties.city_id', '=', 'cities.id')
        ->where('users.name', 'like', '%'.$request['query'].'%')
        ->select('users.*', 'properties.*' , 'propertytypes.*' , 'cities.*')
        ->get();
        return response()->json($property, 200);
    }
    public function searchProperties(Request $request , $id)
    {
        if ($request->q==='properties') {
            $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('users.id', $id)
            ->select('cities.city_name', 'sectors.sector',  'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*'  )
            ->paginate(4);
            return response()->json($property, 200);
        } elseif($request->q==='engaged') {
            $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.user_id', $id)
            ->where('properties.status' , 'occupied')
            ->select('cities.city_name', 'sectors.sector',  'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*'  )
            ->paginate(4);
            return response()->json($property, 200);

        }elseif($request->q==='paid') {
            $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.user_id', $id)
            ->where('properties.rent' , 'paid')
            ->select('cities.city_name', 'sectors.sector',  'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*'  )
            ->paginate(4);
            return response()->json($property, 200);
        }elseif($request->q==='un-paid') {
            $property = DB::table('properties')
            ->join('users', 'properties.user_id', '=', 'users.id')
            ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
            ->where('properties.user_id', $id)
            ->where('properties.rent' , 'unpaid')
            ->select('cities.city_name', 'sectors.sector',  'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*'  )
            ->paginate(4);
            return response()->json($property, 200);
        }

    }
    public function searchInvoiceProperty(Request $request)
    {
        if ($request->invoiceQuery=== null) {
            $property = DB::table('properties')
                ->join('users', 'properties.user_id', '=', 'users.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.user_id' , $request->user('api')->id)
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->get();
                return response()->json($property, 200);
        }elseif($request->invoiceQuery==='paid'){
            if($request->user('api')->role === 'admin'){
                $property = DB::table('properties')
                ->join('users', 'properties.user_id', '=', 'users.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.rent' , 'paid')
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->get();
                return response()->json($property, 200);
            }else{
                $property = DB::table('properties')
                ->join('users', 'properties.user_id', '=', 'users.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.rent' , 'paid')
                ->where('properties.user_id' , $request->user('api')->id)
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->get();
                return response()->json($property, 200);
            }

        }elseif ($request->invoiceQuery==='unpaid') {
            if ($request->user('api')->role==='admin') {
                $property = DB::table('properties')
                ->join('users', 'properties.user_id', '=', 'users.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.rent' , 'unpaid')
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->get();
                return response()->json($property, 200);
            }else {
                $property = DB::table('properties')
                ->join('users', 'properties.user_id', '=', 'users.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->join('sectors', 'properties.sector_id', '=', 'sectors.id')
                ->where('properties.rent' , 'unpaid')
                ->where('properties.user_id' , $request->user('api')->id)
                ->select('cities.city_name', 'sectors.sector', 'users.name' , 'users.phone' , 'propertytypes.property_name' , 'properties.*' )
                ->get();
                return response()->json($property, 200);
            }

        }elseif ($request->invoiceQuery==='reserv') {
            if($request->user('api')->role==='admin'){
                $property = DB::table('reserveds')
                ->join('users', 'reserveds.user_id', '=', 'users.id')
                ->join('properties', 'reserveds.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->select('users.name', 'reserveds.user_id' ,'properties.*' , 'propertytypes.property_name' , 'cities.city_name' , 'reserveds.cnic')
                ->get();
            return response()->json($property, 200);
            }else {
                $property = DB::table('reserveds')
                ->join('users', 'reserveds.user_id', '=', 'users.id')
                ->join('properties', 'reserveds.property_id', '=', 'properties.id')
                ->join('propertytypes', 'properties.propertytype_id', '=', 'propertytypes.id')
                ->join('cities', 'properties.city_id', '=', 'cities.id')
                ->where('properties.user_id' , $request->user('api')->id)
                ->select('users.name', 'reserveds.user_id' , 'properties.*' , 'propertytypes.property_name' , 'reserveds.cnic' , 'cities.city_name')
                ->get();
            return response()->json($property, 200);
            }

        }
    }
    public function searchSectors(Request $request , $id)
    {
        if ($request->qu==='sector') {
            $sector = DB::table('area_managers')
                    ->join('sectors' , 'area_managers.sector_id' , '=' , 'sectors.id')
                    ->join('cities' , 'area_managers.city_id' , '=' , 'cities.id')
                    ->join('users' , 'area_managers.user_id' , '=' , 'users.id')
                    ->where('users.id' , $id)
                    ->select('sectors.sector' , 'cities.city_name')
                    ->get();
                return response()->json($sector, 200);
        } else {
            return "hello";
        }

    }
    public function TotalPaidRent(Request $request)
    {
        $property = DB::table('properties')->where('rent' , 'paid')->sum('rent_price');
        $properties =  number_format($property);
        return response()->json($properties, 200);
    }
    public function getEngaged(Request $request)
    {
        $property= DB::table('reserveds')
                    ->join('users' , 'reserveds.user_id' , '=' , 'users.id')
                    ->join('properties' , 'reserveds.property_id' , '=' , 'properties.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                    ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                    ->where('reserveds.user_id' ,  $request->user('api')->id)
                    ->where('properties.status' , 'occupied')
                    ->select('cities.city_name' , 'propertytypes.property_name' , 'properties.*' )
                    ->get();
        return response()->json($property, 200);

    }
    public function getFavourited(Request $request)
    {
        if ($request->user('api')->role==='admin') {
            $property = DB::table('favorites')
            ->join('properties' , 'favorites.property_id' , '=' , 'properties.id')
            ->join('users' , 'favorites.user_id' , '=' , 'users.id')
            ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
            ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
            ->select('users.name' , 'properties.*' , 'cities.city_name' , 'propertytypes.property_name')
            ->paginate(4);
            return response()->json($property, 200);
        }elseif($request->user('api')->role==='landloard') {
            $property = DB::table('favorites')
            ->join('properties' , 'favorites.property_id' , '=' , 'properties.id')
            ->join('users' , 'favorites.user_id' , '=' , 'users.id')
            ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
            ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
            ->where('properties.user_id' , $request->user('api')->id)
            ->select('users.name' , 'properties.*' , 'cities.city_name' , 'propertytypes.property_name')
            ->paginate(4);
            return response()->json($property, 200);
        }else {
            $property = DB::table('favorites')
            ->join('properties' , 'favorites.property_id' , '=' , 'properties.id')
            ->join('users' , 'favorites.user_id' , '=' , 'users.id')
            ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
            ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
            ->where('favorites.user_id' , $request->user('api')->id)
            ->select('users.name' , 'properties.*' , 'cities.city_name' , 'propertytypes.property_name')
            ->paginate(4);
            return response()->json($property, 200);
        }
    }
    public function getLiked(Request  $request)
    {
        $property = DB::table('likes')
                    ->join('properties' , 'likes.property_id' , '=' , 'properties.id')
                    ->join('propertytypes' , 'properties.propertytype_id' , '=' , 'propertytypes.id')
                    ->join('users' , 'likes.user_id' , '=' , 'users.id')
                    ->join('cities' , 'properties.city_id' , '=' , 'cities.id')
                    ->where('likes.user_id' , $request->user('api')->id)
                    ->select('users.name' , 'cities.city_name' , 'properties.*' , 'propertytypes.property_name')
                    ->paginate(4);
        return response()->json($property, 200);
    }
    public function getRent(Request $request)
    {
        $property = DB::table('reserveds')
                        ->join('properties' , 'reserveds.property_id' , '=' , 'properties.id')
                        ->join('users' , 'reserveds.user_id' , '=' , 'users.id')
                        ->where('properties.rent_price')
                        ->where('reserveds.user_id' , $request->user('api')->id)
                        ->sum('properties.rent_price');
        $property = number_format($property);
        $paid = DB::table('reserveds')
                ->join('properties' , 'reserveds.property_id' , '=' , 'properties.id')
                ->join('users' , 'reserveds.user_id' , '=' , 'users.id')
                ->where('reserveds.user_id' , $request->user('api')->id)
                ->where('properties.rent' , 'paid')->sum('properties.rent_price');
        $paid = number_format($paid);
        $unpaid = DB::table('reserveds')
                ->join('properties' , 'reserveds.property_id' , '=' , 'properties.id')
                ->join('users' , 'reserveds.user_id' , '=' , 'users.id')
                ->where('reserveds.user_id' , $request->user('api')->id)
                ->where('properties.rent' , 'unpaid')->sum('properties.rent_price');
        $unpaid = number_format($unpaid);
        return response()->json([
            $property ,  $paid , $unpaid
        ]);
    }

}
