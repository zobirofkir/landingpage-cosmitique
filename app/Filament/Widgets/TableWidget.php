<?php

namespace App\Filament\Widgets;

<<<<<<< HEAD
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
=======
use App\Models\Product;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Filters\Filter;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use Filament\Widgets\TableWidget as BaseWidget;

class TableWidget extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(Product::query())
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->sortable()
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('name')
                    ->label('Nom du produit')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email du client')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('phone')
                    ->label('Téléphone')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('address')
                    ->label('Adresse')
                    ->limit(30)
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('quantity')
                    ->label('Quantité')
                    ->sortable(),
                TextColumn::make('price')
                    ->label('Prix')
                    ->money('mad', true)
                    ->sortable(),
                BadgeColumn::make('promo_code')
                    ->label('Code promo')
                    ->colors(['primary']),
                TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Filter::make('promo_code')
                    ->label('Avec code promo')
                    ->query(fn (Builder $query): Builder => $query->whereNotNull('promo_code')),
                Filter::make('promo_code_value')
                    ->label('Filtrer par code promo')
                    ->form([
                        TextInput::make('promo_code')
                            ->label('Code promo'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        if (!empty($data['promo_code'])) {
                            return $query->where('promo_code', $data['promo_code']);
                        }
                        return $query;
                    }),
            ])
            ->defaultSort('created_at', 'desc');
>>>>>>> feature/dashboard
    }
}
