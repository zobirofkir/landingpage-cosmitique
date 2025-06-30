<?php

namespace App\Filament\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use App\Models\Product;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;

class TableWidget extends BaseWidget
{
    
    protected int|string|array $columnSpan = 'full'; 

    public function table(Table $table): Table
    {   
        return $table
            ->query(Product::query())
            ->columns([
                TextColumn::make('id')->label('ID')->sortable(),
                TextColumn::make('name')->label('Nom du produit')->searchable(),
                TextColumn::make('email')->label('Email du client')->searchable(),
                TextColumn::make('phone')->label('Téléphone')->searchable(),
                TextColumn::make('address')->label('Adresse')->limit(30),
                TextColumn::make('quantity')->label('Quantité')->sortable(),
                TextColumn::make('price')->label('Prix')->money('eur', true)->sortable(),
                BadgeColumn::make('promo_code')->label('Code promo')->colors(['primary']),
                TextColumn::make('created_at')->label('Créé le')->dateTime('d M Y H:i')->sortable(),
            ]);
    }
}
