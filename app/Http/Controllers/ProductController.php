<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Mail\OrderThankYou;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ProductStored;

class ProductController extends Controller
{
    public function store(ProductRequest $request)
    {
        $product = Product::create($request->validated());
    
        /**
         * Check if email is present and valid before sending
         */
        if ($request->filled('email')) {
            Mail::to($request->email)->send(new OrderThankYou($request->email));
        }
    
        Mail::to(['contact@lidermcosmetique.com', 'Medmediabuyer@gmail.com'])->send(new ProductStored($product));
    
        return response()->json([
            'message' => 'Merci beaucoup, nous vous contacterons bientôt. / شكراً جزيلاً، سنتواصل معكم قريباً.'
        ]);
    }
}
