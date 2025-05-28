<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|string|max:255",
            "email" => "required|email|max:255",
            "message" => "required|string|max:1000",
        ];
    }

    /**
     * Get the validation messages that apply to the request.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            "name.required" => "Le nom est requis.",
            "name.string" => "Le nom doit être une chaîne de caractères.",
            "name.max" => "Le nom ne doit pas dépasser 255 caractères.",
            "email.required" => "L'adresse e-mail est requise.",
            "email.email" => "L'adresse e-mail doit être valide.",
            "email.max" => "L'adresse e-mail ne doit pas dépasser 255 caractères.",
            "message.required" => "Le message est requis.",
            "message.string" => "Le message doit être une chaîne de caractères.",
            "message.max" => "Le message ne doit pas dépasser 1000 caractères.",
        ];
    }
}
