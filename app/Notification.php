<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $guarded = [];
    public function property()
    {
        return $this->belongsTo(property::class);
    }
    //
}
