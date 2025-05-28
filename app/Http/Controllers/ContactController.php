<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(ContactRequest $request)
    {

        Contact::create($request->validated());
        return redirect()->route('home')->with('success', 'Nous vous contacterons bientôt');
    }
}
