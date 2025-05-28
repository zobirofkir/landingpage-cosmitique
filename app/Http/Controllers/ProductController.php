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
        return response()->json(['message' => 'Merci beaucoup, nous vous contacterons bientôt. / شكراً جزيلاً، سنتواصل معكم قريباً.']);
    }
}
