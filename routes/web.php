<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BiographyController;
use App\Http\Controllers\BusinessActivityController;
use App\Http\Controllers\AwardHonorController;
use App\Http\Controllers\BusinessactController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
// use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\DashSliderController;
use App\Http\Controllers\DashHeroController;
use App\Http\Controllers\DashGalleryController;
use App\Http\Controllers\DashNewsController;
use App\Http\Controllers\DashProgramController;
use App\Http\Controllers\DashTestimonialController;
use App\Http\Controllers\DashEventController;

use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[HomeController::class,'home'])->name('home');

Route::get('/Biography',[BiographyController::class,'biography'])->name('biography');
Route::get('/bizz',[BusinessActivityController::class,'bizz'])->name('bizz');
Route::get('/cafirm',[BusinessActivityController::class,'cafirm'])->name('cafirm');
Route::get('/award',[AwardHonorController::class,'award'])->name('award');
Route::get('/achivement',[AwardHonorController::class,'achivement'])->name('achivement');
Route::get('/degree',[AwardHonorController::class,'degree'])->name('degree');
Route::get('/recognition',[AwardHonorController::class,'recognition'])->name('recognition');
Route::get('/miscellaneous',[AwardHonorController::class,'miscellaneous'])->name('miscellaneous');
Route::get('/online',[NewsController::class,'online'])->name('online');
Route::get('/news',[NewsController::class,'news'])->name('news');
Route::get('/interview',[NewsController::class,'interview'])->name('interview');
Route::get('/blog',[BlogController::class,'blog'])->name('blog');

Route::post('/logout', [DashboardController::class, 'logout'])->name('logout');

Route::get('/slider', [DashSliderController::class,'slider'])->name('slider');
Route::get('/hero', [DashHeroController::class,'hero'])->name('hero');
Route::get('/program', [DashProgramController::class,'program'])->name('program');
Route::get('/admin/news', [DashNewsController::class,'news'])->name('admin.news');
Route::get('/testimonial', [DashTestimonialController::class,'testimonial'])->name('testimonial');

Route::get('/gallery', [DashGalleryController::class,'gallery'])->name('gallery');
// Route::post('/gallery', [DashGalleryController::class,'show1'])->name('show1');


Route::get('/event', [DashEventController::class,'event'])->name('event');




Route::get('/payment',[StorageController::class,'withoutlog'])->name('withoutlog');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
