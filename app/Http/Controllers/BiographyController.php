<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class BiographyController extends Controller
{
    public function biography()
    {
        return Inertia::render('Frontend/Biography');
    }
}
