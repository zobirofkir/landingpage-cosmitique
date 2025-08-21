<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use App\Enums\ProductStatus;
use Filament\Widgets\ChartWidget;

class ProductChartWidget extends ChartWidget
{
    protected static ?string $heading = 'Product Orders by Status';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $pending = Product::where('status', ProductStatus::PENDING)->count();
        $delivered = Product::where('status', ProductStatus::DELIVERED)->count();
        $cancelled = Product::where('status', ProductStatus::CANCELLED)->count();
        $processing = Product::where('status', ProductStatus::PROCESSING)->count();

        return [
            'datasets' => [
                [
                    'label' => 'Orders by Status',
                    'data' => [$pending, $processing, $delivered, $cancelled],
                    'backgroundColor' => ['#f59e0b', '#3b82f6', '#10b981', '#ef4444'],
                ],
            ],
            'labels' => ['Pending', 'Processing', 'Delivered', 'Cancelled'],
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}