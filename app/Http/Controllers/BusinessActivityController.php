<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


use Illuminate\Http\Request;

class BusinessActivityController extends Controller
{
    public function cafirm()
    {
        return Inertia::render('Frontend/CAFirm');
    }

    public function bizz()
    {
        return Inertia::render('Frontend/Bizzsol');
    }
}
