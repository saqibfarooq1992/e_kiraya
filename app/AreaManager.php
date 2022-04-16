<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AreaManager extends Model
{
    //
    protected $guarded = [];
    protected $fillable = [
        'user_id',
        'city_id',
        'sector_id'
    ];
    public function sector()
    {
        return $this->belongsTo('App\Sector');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function city()
    {
        return $this->belongsTo('App\City');
    }
}
