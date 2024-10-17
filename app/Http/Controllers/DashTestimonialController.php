<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashTestimonialController extends Controller
{
    public function testimonial()
    {
        return Inertia::render('Backend/Home/Testimonial/create');
    }

}
