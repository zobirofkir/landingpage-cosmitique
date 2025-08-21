<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Carbon;

class SalesChartWidget extends ChartWidget
{
    protected static ?string $heading = 'Sales Over Time';
    protected static ?int $sort = 4;
    protected int | string | array $columnSpan = 'full';

    protected function getData(): array
    {
        $data = [];
        $labels = [];

        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i);
            $labels[] = $date->format('M d');
            $data[] = Product::whereDate('created_at', $date)->sum('price');
        }

        return [
            'datasets' => [
                [
                    'label' => 'Daily Sales (MAD)',
                    'data' => $data,
                    'borderColor' => '#f97316',
                    'backgroundColor' => 'rgba(249, 115, 22, 0.1)',
                    'fill' => true,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}