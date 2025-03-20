<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ArticleTag;
use App\Http\Requests\StoreArticleTagRequest;
use App\Http\Requests\UpdateArticleTagRequest;
use Inertia\Inertia;

class ArticleTagsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articlesTags = ArticleTag::all();

        return Inertia::render('Admin/ArticlesTags/Index', [
            'articlesTags' => $articlesTags,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ArticlesTags/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleTagRequest $request)
    {
        ArticleTag::create($request->validated());

        return redirect()->route('admin.article_tags.index')
            ->with('success', 'Article tag created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ArticleTag $articleTag)
    {
        return Inertia::render('Admin/ArticlesTags/Edit', [
            'articleTag' => $articleTag,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleTagRequest $request, ArticleTag $articleTag)
    {
        $articleTag->update($request->validated());

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
