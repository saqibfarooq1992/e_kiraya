<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function faq()
    {
        return $this->hasMany('App\Faq');
    }
    public function property()
    {
        return $this->hasMany('App\Property');
    }
    public function blog()
    {
        return $this->hasMany('App\Blog');
    }
    public function Leasetermination()
    {
        return $this->hasMany('App\Leasetermination');
    }
    public function landlordinvoice()
    {
        return $this->hasMany('App\Landlordinvoice');
    }
    public function invoicerent()
    {
        return $this->hasMany('App\Renterinvoice');
    }
    public function favorite()
    {
        return $this->hasMany('App\Favorite');
    }
    public function share()
    {
        return $this->hasMany('App\Share');
    }
    public function seen()
    {
        return $this->hasMany('App\Seen');
    }
    public function like()
    {
        return $this->hasMany('App\Like');
    }
    public function reserved()
    {
        return $this->hasMany('App\Reserved');
    }
    public function invoice()
    {
        return $this->hasMany('App\Invoice');
    }
    public function manager()
    {
        return $this->belongsTo('App\Manager');
    }
    public function favorities()
    {
        return $this->hasMany(Favorite::class);
    }
    public function employee()
    {
        return $this->belongsTo('App\Employee');
    }
    public function areaManager()
    {
        return $this->hasMany('App\AreaManager');
    }
}
