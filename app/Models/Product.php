<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\ProductStatus;

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
        'status',
    ];

    protected $casts = [
        'status' => ProductStatus::class,
    ];
}