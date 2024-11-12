<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'MD.SHAFIQUL ALAM') }}</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="Anil z" name="bizzsol.com.bd">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Md. Shafiqul Alam">
        <meta name="keywords" content="portfolio">
        
        <!-- SITE TITLE -->
        <!-- <title inertia>{{ config('app.name', 'Md. Shafiqul Alam') }}</title> -->
        <!-- Favicon Icon -->
        {{-- <link rel="shortcut icon" type="image/x-icon" href="{{asset('assets/images/favicon.png')}}"> --}}
        <!-- Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet"> 
      

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
       
    </body>
</html>
