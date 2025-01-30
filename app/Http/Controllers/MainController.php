<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;


class MainController extends Controller
{
    public function show()
    {
        return Inertia::render('layouts/Layout');
    }

    public function home()
    {
        return Inertia::render('components/Home');
    }

    public function about()
    {
        return Inertia::render('components/About');
    }

    public function resume()
    {
        return Inertia::render('components/Resume');
    }
}
