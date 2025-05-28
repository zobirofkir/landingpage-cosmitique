<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * Get Welcome Page
 */
Route::get('/', function () {
    return Inertia::render('WelcomePage');
})->name('home');

/**
 * Store Product
 */
Route::post('/products', [ProductController::class, 'store'])->name("products.store");