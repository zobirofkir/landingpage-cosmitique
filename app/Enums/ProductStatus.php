<?php

namespace App\Enums;

enum ProductStatus: string
{
    case PENDING = 'pending';
    case DELIVERED = 'delivered';
    case CANCELLED = 'cancelled';
    case PROCESSING = 'processing';
}