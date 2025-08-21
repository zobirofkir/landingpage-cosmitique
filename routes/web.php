<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PhoneController;
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

/**
 * Store Contact
 */
Route::post('/contacts', [ContactController::class, 'store'])->name("contacts.store");

/**
 * Store Phone
 */
Route::post('/phones', [PhoneController::class, 'store'])->name('phones.store');

/**
 * Thank You Page
 */
Route::get('/thanks', function () {
    return Inertia::render('ThanksPage');
})->name('thanks');