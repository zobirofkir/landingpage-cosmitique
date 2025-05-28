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
            /**
             * French messages
             */
            "name.required" => "Le nom est requis.",
            "name.string" => "Le nom doit être une chaîne de caractères.",
            "name.max" => "Le nom ne doit pas dépasser 255 caractères.",
            "email.required" => "L'adresse e-mail est requise.",
            "email.email" => "L'adresse e-mail doit être valide.",
            "email.max" => "L'adresse e-mail ne doit pas dépasser 255 caractères.",
            "message.required" => "Le message est requis.",
            "message.string" => "Le message doit être une chaîne de caractères.",
            "message.max" => "Le message ne doit pas dépasser 1000 caractères.",

            /**
             * Arabic messages
             */
            "name.required" => "الاسم مطلوب.",
            "name.string" => "يجب أن يكون الاسم نصًا.",
            "name.max" => "يجب ألا يتجاوز الاسم 255 حرفًا.",
            "email.required" => "البريد الإلكتروني مطلوب.",
            "email.email" => "يجب أن يكون البريد الإلكتروني صالحًا.",
            "email.max" => "يجب ألا يتجاوز البريد الإلكتروني 255 حرفًا.",
            "message.required" => "الرسالة مطلوبة.",
            "message.string" => "يجب أن تكون الرسالة نصًا.",
            "message.max" => "يجب ألا تتجاوز الرسالة 1000 حرف.",
        ];
    }
}
