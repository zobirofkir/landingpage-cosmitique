<!DOCTYPE html>
<html>
<head>
    <title>New Product Stored</title>
</head>
<body>
    <h1>Product Details</h1>
    <p><strong>Name:</strong> {{ $product->name }}</p>
    <p><strong>Email:</strong> {{ $product->email }}</p>
    <p><strong>Quantity:</strong> {{ $product->quantity }}</p>
    <p><strong>Phone:</strong> {{ $product->phone }}</p>
    <p><strong>Address:</strong> {{ $product->address }}</p>
</body>
</html>
