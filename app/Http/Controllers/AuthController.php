<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use App\UserProfile;
use Carbon\Carbon;
use Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'Name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
            'phone' => 'required',
            'role' => 'required|string',
            'city_name' => 'required',
            'terms' => 'required',
        ]);
        $user = new User();
        $user->name = $request->Name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone = $request->phone;
        $user->role = $request->role;
        $user->city_name = $request->city_name;
        $user->varification_code = "Null";
        $user->terms = $request->terms;
        $user->status = 'pendding';
        if($request->hasfile('avater')){
            $path = $request->file('avater')->store('avatar');
            $user->avatar = $path;
        }else{
            $user->avatar = "Null";
        }

        if($user->save()){
            $userData = array(
                'email' => $request->email,
                'name' => $request->Name,
                'subject' => $request->subject,
                'user_query' => "welcome to our family ",
            );
            return response()->json([
                'message' => 'user created successfully!',
                'status_code' => 201
            ], 201);
        }else{
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'message' => 'Invalid Username Or Password',
                'status_code' => 401
            ], 401);
        }

        $user = $request->user();

        if ($user->role == 'admin' && $user->status = 'approved') {

            $tokenData = $user->createToken('Personal Access Token', ['admin']);

        } else if ($user->role == 'manager' && $user->status = 'approved') {

            $tokenData = $user->createToken('Personal Access Token', ['manager']);

        } else if ($user->role == 'csr' && $user->status = 'approved') {

            $tokenData = $user->createToken('Personal Access Token', ['csr']);

        }else if ($user->role == 'employee' && $user->status = 'approved') {

            $tokenData = $user->createToken('Personal Access Token', ['employee']);

        } else if ($user->role == 'tenant' && $user->status = 'approved'){

            $tokenData = $user->createToken('Personal Access Token', ['tenant']);
        }else if ($user->role == 'landloard' && $user->status = 'approved'){

            $tokenData = $user->createToken('Personal Access Token', ['landloard']);
        }

        $token = $tokenData->token;

        if ($request->remember_me){
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, Please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully',
            'status_code' => 200
        ], 200);
    }
    public function profile(Request $request)
    {
        if($request->user())
        {
            return response()->json($request->user(),200);
        }
        return response()->json([
            'message' => 'Not logged in',
            'status_code' => 500,
        ],500);
    }
    public function resetPasswordRequest(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $user = User::where('email' , $request->email)->first();
        if(!$user){
            return response()->json([
                'message'   => 'we have sent you a varification code to your email address',
                'status_code' => 200,
            ], 200);
        }else{

            $random = rand(111111,999999);
            $user->varification_code = $random;
            if($user->save()){
                $userData = array(
                    'email' => $user->email,
                    'name' => $user->name,
                    'random' => $random,
                );
                Mail::send('emails.reset_password', $userData, function ($message) use ($userData) {
                    $message->from('no_reply@eko.com.pk', 'Password Request');
                    $message->to($userData['email'], $userData['name']);
                    $message->subject('Reset Password Request (E-kiraya Online)');
                });
                    if(Mail::failures()){

                        return response()->json([
                            'message' => 'Some error occured , Please Try again',
                            'status_code' => 500,
                        ], 500);

                    }else{
                        return response()->json([
                            'message' => 'we have sent you a varification code to your email address',
                            'status_code' => 200,
                        ], 200);
                    }

            }else{
                return response()->json([
                    'message' => 'Some error occured , Please Try again',
                    'status_code' => 500,
                ], 500);
            }
        }
    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'varification_code' => 'required',
            'password' => 'required|confirmed|min:6',

        ]);
        $user = User::where('email' , $request->email)->where('varification_code' , $request->varification_code)->first();
        if(!$user){
            return response()->json([
                'message'   => 'User not found / Invalid code',
                'status_code' => 401,
            ], 401);
        }else{
            $user->password =bcrypt(trim($request->password));
            $user->varification_code = Null;
            if($user->save()){
                 return response()->json([
                        'message' => 'Password Updated Successfully',
                        'status_code' => 200,
                    ], 200);
            }else{
                return response()->json([
                    'message' => 'Some error occured , please try again',
                    'status_code' => 500,
                ], 500);
            }
        }
    }


}
