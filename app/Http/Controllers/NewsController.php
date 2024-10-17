<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function online()
    {
        return Inertia::render('Frontend/Online');
    }

    public function news()
    {
        return Inertia::render('Frontend/Print1');
    }

    public function interview()
    {
        return Inertia::render('Frontend/Print2');
    }
}

