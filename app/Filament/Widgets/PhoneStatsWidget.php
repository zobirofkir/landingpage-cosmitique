<?php

namespace App\Filament\Widgets;

use App\Models\Phone;
use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class PhoneStatsWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Phone Numbers', Phone::count())
                ->description('Registered phone numbers')
                ->descriptionIcon('heroicon-m-phone')
                ->color('primary'),
            
            Stat::make('Unique Customers', Product::distinct('phone')->count())
                ->description('Customers with orders')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),
        ];
    }
}