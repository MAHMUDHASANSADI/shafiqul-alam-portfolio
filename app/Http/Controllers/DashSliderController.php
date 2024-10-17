<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashSliderController extends Controller
{
    public function slider()
    {
        return Inertia::render('Backend/Home/Slider/create');
    }
}
