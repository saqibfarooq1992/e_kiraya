<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    protected $guarded = [];
    public function user()
    {
        return $this->hasMany('App\User');
    }
}
