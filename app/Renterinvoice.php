<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Renterinvoice extends Model
{
    //
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function property()
    {
        return $this->belongsTo('App\Property');
    }
    public function sector()
    {
        return $this->belongsTo('App\Sector');
    }
    public function City()
    {
        return $this->belongsTo('App\City');
    }
    public function propertytype()
    {
        return $this->belongsTo('App\Propertytype');
    }
}
