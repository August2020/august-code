<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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
        return view('admin.article_categories.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:article_categories',
        ]);

        ArticleCategory::create([
            'name' => $request->name,
        ]);

        return redirect()->route('admin.article_categories.index')
            ->with('success', 'Article category created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ArticleCategory $articleCategory)
    {
        return view('admin.article_categories.show', compact('articleCategory'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ArticleCategory $articleCategory)
    {
        return view('admin.article_categories.edit', compact('articleCategory'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ArticleCategory $articleCategory)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:article_categories,name,' . $articleCategory->id,
        ]);

        $articleCategory->update([
            'name' => $request->name,
        ]);

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
