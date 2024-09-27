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
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('admin.login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['verified'])->name('admin.dashboard');

    // Article-related routes
    Route::middleware(['verified'])->group(function () {
        Route::get('/articles', [ArticlesController::class, 'index'])->name('articles.index');
        Route::get('/articles/create', [ArticlesController::class, 'create'])->name('articles.create');
        Route::get('/articles-categories', [ArticleCategoriesController::class, 'index'])->name('articles-categories.index');
        Route::get('/articles-categories/create', [ArticleCategoriesController::class, 'create'])->name('articles-categories.create');
        Route::get('/articles-tags', [ArticleTagsController::class, 'index'])->name('articles-tags.index');
        Route::get('/articles-tags/create', [ArticleTagsController::class, 'create'])->name('articles-tags.create');
    });
});

require __DIR__.'/auth.php';
