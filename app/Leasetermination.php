<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leasetermination extends Model
{
    //
    protected $guarded = [];
    public function property()
    {
        return $this->belongsTo('App\Property');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
