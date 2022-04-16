<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Property extends Model
{
    //
    protected $guarded = [];
    // public function getFirstNameAttribute($value)
    // {
    //     return ucfirst($value);
    // }
    // public function setDateAttribute( $value ) {
    //     $this->attributes['date'] = (new Carbon($value))->format('d/m/y');
    // }
    public function city()
    {
        return $this->belongsTo('App\City');
    }
    public function propertytype()
    {
        return $this->belongsTo('App\Propertytype');
    }
    public function sector()
    {
        return $this->belongsTo('App\Sector');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function invoicerent()
    {
        return $this->hasMany('App\Renterinvoice');
    }
    public function invoicelandlord()
    {
        return $this->hasMany('App\Landlordinvoice');
    }
    public function Leasetermination()
    {
        return $this->hasMany('App\Leasetermination');
    }
    public function favorite()
    {
        return $this->hasMany('App\Favorite' , "property_id");
    }
    public function seen()
    {
        return $this->hasMany('App\Seen' , "property_id");
    }
    public function view()
    {
        return $this->hasMany('App\View' , "property_id");
    }
    public function like()
    {
        return $this->hasMany('App\Like' , "property_id");
    }
    public function share()
    {
        return $this->hasMany('App\Share' , "property_id");
    }
    public function reserved()
    {
        return $this->hasMany('App\Reserved' , "property_id");
    }
    public function invoice()
    {
        return $this->belongsTo('App\Invoice');
    }
    public function notification()
    {
        return $this->belongsTo('App\Notification');
    }
}
