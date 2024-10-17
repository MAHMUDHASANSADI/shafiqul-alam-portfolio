<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashProgramController extends Controller
{
    //
    public function program()
    {
        return Inertia::render('Backend/Home/Program/create');
    }
}
