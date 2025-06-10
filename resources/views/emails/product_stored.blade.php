<!DOCTYPE html>
<html>
<head>
    <title>Nouveau Produit Enregistré</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #4CAF50;
            font-size: 24px;
            text-align: center;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
            margin: 10px 0;
        }
        strong {
            color: #000;
        }
        .container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Détails du Produit</h1>
        <p><strong>Nom :</strong> {{ $product->name }}</p>
        <p><strong>Email :</strong> {{ $product->email }}</p>
        <p><strong>Quantité :</strong> {{ $product->quantity }}</p>
        <p><strong>Téléphone :</strong> {{ $product->phone }}</p>
        <p><strong>Adresse :</strong> {{ $product->address }}</p>
        <p><strong>Promo Code :</strong> {{ $product->promo_code }}</p>        
        <p><strong>Prix Total :</strong> {{ $product->price }}</p>        
    </div>
</body>
</html>
