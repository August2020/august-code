<?php

use App\Http\Controllers\Admin\ArticlesController;
use App\Http\Controllers\Admin\ArticleCategoriesController;
use App\Http\Controllers\Admin\ArticleTagsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
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

// Public Routes
Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/wiecej-o-mnie', function () {
    return Inertia::render('About');
});

Route::get('/uslugi/projektowanie', function () {
    return Inertia::render('Services/Design');
});

Route::get('/uslugi/programowanie', function () {
    return Inertia::render('Services/Programming');
});

Route::get('/kontakt', function () {
    return Inertia::render('Contact');
});

// Admin Routes
Route::prefix('admin')->middleware(['auth'])->group(function () {
    // Authentication routes for admin
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('admin.login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    
    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['verified'])->name('admin.dashboard');

    // Resource routes
    Route::middleware(['verified'])->group(function () {
        // Article-related routes
        Route::resource('articles', ArticlesController::class, ['as' => 'admin']);

        // Article categories routes
        Route::resource('article_categories', ArticleCategoriesController::class, ['as' => 'admin']);

        // Article tags routes
        Route::resource('article_tags', ArticleTagsController::class, ['as' => 'admin']);
    });
});

// Auth routes
require __DIR__.'/auth.php';
