<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    //
    protected $guarded = [];

    public function user(){
        return $this->hasMany('App\User');
    }
    public function renterinvoice(){
        return $this->hasMany('App\Renterinvoice');
    }
    public function property(){
        return $this->hasMany('App\Property');
    }
    public function sector()
    {
        return $this->hasMany('App\Sector');
    }
    public function manager()
    {
        return $this->hasMany('App\Manager');
    }
    public function areaManager()
    {
        return $this->hasMany('App\AreaManager');
    }

}
