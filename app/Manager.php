<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    //
    protected $guarded = [];
    public function city()
    {
        return $this->belongsTo('App\City');
    }
    public function sector()
    {
        return $this->belongsTo('App\Sector');
    }
    public function user()
    {
        return $this->hasMany('App\User');
    }
}
