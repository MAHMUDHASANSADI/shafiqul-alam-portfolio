<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashEventController extends Controller
{
    //
    public function event()
    {
        return Inertia::render('Backend/Home/Event/create');
    }
}
