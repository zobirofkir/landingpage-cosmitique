<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use App\Enums\ProductStatus;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProductStatsWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Products', Product::count())
                ->description('All products in system')
                ->descriptionIcon('heroicon-m-cube')
                ->color('primary'),
            
            Stat::make('Pending Orders', Product::where('status', ProductStatus::PENDING)->count())
                ->description('Orders awaiting processing')
                ->descriptionIcon('heroicon-m-clock')
                ->color('warning'),
            
            Stat::make('Delivered Orders', Product::where('status', ProductStatus::DELIVERED)->count())
                ->description('Successfully delivered')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),
            
            Stat::make('Total Revenue', number_format(Product::sum('price'), 2) . ' MAD')
                ->description('Total sales amount')
                ->descriptionIcon('heroicon-m-currency-euro')
                ->color('success'),
        ];
    }
}