<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ArticleCategory;
use App\Http\Requests\StoreArticleCategoryRequest;
use App\Http\Requests\UpdateArticleCategoryRequest;
use Inertia\Inertia;

class ArticleCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = ArticleCategory::all();

        return Inertia::render('Admin/ArticlesCategories/Index', [
            'articlesCategories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ArticlesCategories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleCategoryRequest $request)
    {
        ArticleCategory::create($request->validated());
        return redirect()->route('admin.article_categories.index')
            ->with('success', 'Article category created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ArticleCategory $articleCategory)
    {
        return Inertia::render('Admin/ArticlesCategories/Edit', [
            'articleCategory' => $articleCategory,
        ]);        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleCategoryRequest $request, ArticleCategory $articleCategory)
    {
        $articleCategory->update($request->validated());

        return redirect()->route('admin.article_categories.index')
            ->with('success', 'Article category updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ArticleCategory $articleCategory)
    {
        $articleCategory->delete();

        return redirect()->route('admin.article_categories.index')
            ->with('success', 'Article category deleted successfully.');
    }
}
