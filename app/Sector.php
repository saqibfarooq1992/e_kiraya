<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sector extends Model
{
    //
    protected $guarded = [];
    public function property()
    {
        return $this->hasMany('App\Property');
    }
    public function renterinvoice()
    {
        return $this->hasMany('App\Renterinvoice');
    }
    public function city()
    {
        return $this->belongsTo('App\City');
    }
    public function areaManager()
    {
        return $this->hasMany('App\AreaManager');
    }
    public function manager()
    {
        return $this->belongsTo('App\Manager');
    }
}
