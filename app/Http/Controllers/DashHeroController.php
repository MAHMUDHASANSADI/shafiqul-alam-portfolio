<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashHeroController extends Controller
{
    //
    public function hero()
    {
        return Inertia::render('Backend/Home/Hero/create');
    }
}
