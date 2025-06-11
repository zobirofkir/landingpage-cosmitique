<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(ContactRequest $request)
    {
        $contact = Contact::create($request->validated());

        /**
         * Send email
         */
        Mail::raw("Name: {$contact->name}\nEmail: {$contact->email}\nMessage: {$contact->message}", function ($message) {
            $message->to('contact@lidermcosmetique.com')
                    ->subject('Nouvelle soumission de contact');
        });

        return response()->json(['success' => 'Nous vous contacterons bientôt']);
    }
}
