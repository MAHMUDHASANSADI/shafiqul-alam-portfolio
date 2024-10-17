<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class AwardHonorController extends Controller
{
    //
    public function award()
    {
        return Inertia::render('Frontend/Award');
    }

    public function achivement()
    {
        return Inertia::render('Frontend/Achivement');
    }

    public function degree()
    {
        return Inertia::render('Frontend/Degree');
    }

    public function recognition()
    {
        return Inertia::render('Frontend/Recognition');
    }

    public function miscellaneous()
    {
        return Inertia::render('Frontend/Miscellaneous');
    }
}
