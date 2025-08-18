<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Enums\ProductStatus;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name', 
        'email', 
        'quantity', 
        'phone', 
        'address',
        'promo_code',
        'price',
        'status',
        'historique',
    ];

    protected $casts = [
        'status' => ProductStatus::class,
        'historique' => 'array',
    ];

    public function addHistorique($action, $details = null)
    {
        $historique = $this->historique ?? [];
        $historique[] = [
            'action' => $action,
            'details' => $details,
            'timestamp' => now()->toISOString(),
            'user' => auth()->user()?->name ?? 'System'
        ];
        $this->update(['historique' => $historique]);
    }
}