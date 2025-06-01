<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderThankYou extends Mailable
{
    use Queueable, SerializesModels;

    public $userEmail;

    public function __construct($userEmail)
    {
        $this->userEmail = $userEmail;
    }

    public function build()
    {
        return $this->subject('Merci pour votre commande')
                    ->view('emails.order_thank_you')
                    ->with(['email' => $this->userEmail]);
    }
}
