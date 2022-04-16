<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    //
    protected $guarded = [];
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function property() {
        return $this->belongsTo(property::class);
    }
}
