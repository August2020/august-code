<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ArticleTag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ArticleTagsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = ArticleTag::all();
        return Inertia::render('Admin/ArticlesTags/Index', [
            'tags' => $tags,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.article_tags.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:article_tags',
        ]);

        ArticleTag::create([
            'name' => $request->name,
        ]);

        return redirect()->route('admin.article_tags.index')
            ->with('success', 'Article tag created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ArticleTag $articleTag)
    {
        return view('admin.article_tags.show', compact('articleTag'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ArticleTag $articleTag)
    {
        return view('admin.article_tags.edit', compact('articleTag'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ArticleTag $articleTag)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:article_tags,name,' . $articleTag->id,
        ]);

        $articleTag->update([
            'name' => $request->name,
        ]);

        return redirect()->route('admin.article_tags.index')
            ->with('success', 'Article tag updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ArticleTag $articleTag)
    {
        $articleTag->delete();

        return redirect()->route('admin.article_tags.index')
            ->with('success', 'Article tag deleted successfully.');
    }
}
