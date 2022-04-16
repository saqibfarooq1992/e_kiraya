<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Propertytype extends Model
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
}
