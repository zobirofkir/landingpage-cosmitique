<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Grid;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Filters\Filter;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\Grid as InfoGrid;
use Filament\Infolists\Components\Section;
use Illuminate\Database\Eloquent\Builder;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Produits';
    protected static ?string $navigationGroup = 'Boutique';
    protected static ?string $modelLabel = 'Produit';
    protected static ?string $pluralModelLabel = 'Produits';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(2)
                    ->schema([
                        TextInput::make('name')
                            ->label('Nom du produit')
                            ->required()
                            ->maxLength(255)
                            ->columnSpan(2),
                        TextInput::make('email')
                            ->label('Email du client')
                            ->email()
                            ->required()
                            ->maxLength(255),
                        TextInput::make('phone')
                            ->label('Téléphone')
                            ->tel()
                            ->maxLength(20),
                        TextInput::make('address')
                            ->label('Adresse')
                            ->maxLength(255)
                            ->columnSpan(2),
                        TextInput::make('quantity')
                            ->label('Quantité')
                            ->numeric()
                            ->minValue(1)
                            ->default(1)
                            ->required(),
                        TextInput::make('price')
                            ->label('Prix')
                            ->numeric()
                            ->prefix('MAD')
                            ->required(),
                        TextInput::make('promo_code')
                            ->label('Code promo')
                            ->maxLength(50),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
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
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->label('Voir'),
                Tables\Actions\DeleteAction::make()
                    ->label('Supprimer'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->label('Supprimer la sélection'),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Section::make('Informations du client')
                    ->schema([
                        InfoGrid::make(2)
                            ->schema([
                                TextEntry::make('email')
                                    ->label('Email du client')
                                    ->columnSpan(1)
                                    ->weight('bold')
                                    ->color('primary'),
                                TextEntry::make('phone')
                                    ->label('Téléphone')
                                    ->columnSpan(1),
                                TextEntry::make('address')
                                    ->label('Adresse')
                                    ->columnSpan(2)
                                    ->icon('heroicon-o-map-pin'),
                            ]),
                    ])
                    ->columns(1)
                    ->collapsible(),

                Section::make('Informations de la commande')
                    ->schema([
                        InfoGrid::make(2)
                            ->schema([
                                TextEntry::make('name')
                                    ->label('Nom du produit')
                                    ->columnSpan(2)
                                    ->weight('bold')
                                    ->color('success'),
                                TextEntry::make('quantity')
                                    ->label('Quantité')
                                    ->columnSpan(1),
                                TextEntry::make('price')
                                    ->label('Prix')
                                    ->money('mad', true)
                                    ->columnSpan(1)
                                    ->color('warning'),
                                TextEntry::make('promo_code')
                                    ->label('Code promo')
                                    ->columnSpan(2)
                                    ->color('info'),
                                TextEntry::make('created_at')
                                    ->label('Créé le')
                                    ->dateTime('d M Y H:i')
                                    ->columnSpan(2)
                                    ->color('gray'),
                            ]),
                    ])
                    ->columns(1)
                    ->collapsible(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'view' => Pages\ViewProduct::route('/{record}'), 
        ];
    }
}
