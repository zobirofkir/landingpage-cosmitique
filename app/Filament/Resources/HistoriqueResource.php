<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HistoriqueResource\Pages;
use App\Models\Product;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Actions\Action;

class HistoriqueResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-clock';
    protected static ?string $navigationLabel = 'Historique';
    protected static ?string $navigationGroup = 'Boutique';
    protected static ?string $modelLabel = 'Historique';
    protected static ?string $pluralModelLabel = 'Historique';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nom du produit')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email du client')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('price')
                    ->label('Prix')
                    ->money('mad', true)
                    ->sortable(),
                TextColumn::make('deleted_at')
                    ->label('Supprimé le')
                    ->dateTime('d M Y H:i')
                    ->sortable(),
            ])
            ->actions([
                Action::make('historique')
                    ->label('Voir Historique')
                    ->icon('heroicon-o-eye')
                    ->modalContent(fn (Product $record) => view('filament.historique-modal', ['historique' => $record->historique]))
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel('Fermer'),
                Tables\Actions\RestoreAction::make()
                    ->label('Restaurer'),
            ])
            ->modifyQueryUsing(fn ($query) => $query->onlyTrashed())
            ->defaultSort('deleted_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHistoriques::route('/'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}