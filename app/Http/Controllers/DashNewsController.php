<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashNewsController extends Controller
{
    //

    public function news()
    {
        return Inertia::render('Backend/Home/News/create');
    }
}
