<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Iker Hurtado</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])

    @vite('resources/css/app.css')
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>