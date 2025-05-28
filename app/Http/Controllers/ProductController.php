<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(ProductRequest $request)
    {
        Product::create($request->validated());
        return redirect()->route('home')->with('success', 'Merci beaucoup, nous vous contacterons bientôt.');
    }
}
