<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $guarded = [];
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function property() {
        return $this->belongsTo(property::class);
    }
    public function reserved() {
        return $this->belongsTo(Reserved::class);
    }
}
