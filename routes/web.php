<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

Route::get('/', [MainController::class, 'home'])->name('home');
Route::get('/about', [MainController::class, 'about'])->name('about');
Route::get('/resume', [MainController::class, 'resume'])->name('resume');
