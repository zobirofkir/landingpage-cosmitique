<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhoneRequest;
use App\Models\Phone;
use Illuminate\Http\Request;

class PhoneController extends Controller
{
    public function store(PhoneRequest $request)
    {
        Phone::create($request->validated());
        return redirect()->route('thanks');
    }
}
