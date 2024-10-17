<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashGalleryController extends Controller
{
    //
    public function gallery()
    {
        return Inertia::render('Backend/Home/Gallery/create');
    }

    // public function show1()
    // {
    //     return Inertia::render('Backend/Home/Gallery/show');
    // }
}
