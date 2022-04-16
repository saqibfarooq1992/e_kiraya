<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use DB;
class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $blog = DB::table('blogs')
                ->join('users' , 'blogs.user_id' , '=' , 'users.id')
                ->orderBy('blogs.created_at','asc')
                ->select('blogs.*' , 'users.name')
                ->get();

        return response()->json($blog, 200);
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
            'blogpicture' => 'required',
        ]);
        $slug = Str::slug($request->title , '-');
        $blog = Blog::create([
            'user_id' => $request->user('api')->id,
            'title' => $request->title,
            'blog_description' => $request->description,
            'blog_picture' => $request->file('blogpicture')->store('blog'),
            'slug' => $slug,
        ]);
        if ($blog->save()) {
            return response()->json($blog, 200);
           }else{
            return response()->json($blog, 500);
           }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        $request->validate([
            'title' => 'required|string',
            'blog_description' => 'required',
        ]);
        $oldPath  =   $blog->image;
        if ($request->hasFile('blog_picture')) {
            $request->validate([
                'blog_picture' => 'image|mimes:jpeg,png,jpg',
           ]);
            $path = $request->file('blog_picture')->store('property');
            $slug = Str::slug($request->title , '-');

            $blog->blog_picture = $path;
            $blog->title = $request->title;
            $blog->blog_description = $request->blog_description;
            $blog->slug =  $slug;
            Storage::delete($oldPath);
        }
        if ($blog->save()) {
            return response()->json($blog,200);
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
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        if($blog->delete()){
            Storage::delete([
                $blog->image,
            ]);
            return  response()->json([
                'message'   =>  'Blog  Deleted Successfully',
                'status_code'   =>200
            ],200);
        }else{
            return  response()->json([
                'message'   =>  'some error occured try again!',
                'status_code'   =>500
            ],500);
        }
    }
}
