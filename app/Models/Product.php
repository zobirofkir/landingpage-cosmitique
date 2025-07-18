<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 
        'email', 
        'quantity', 
        'phone', 
        'address',
        'promo_code',
        'price',
        'status'
    ];
}
