<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Inertia\Inertia;
use Inertia\Response;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();
        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Articles/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        $validated = $request->validated();

        DB::transaction(function () use ($validated) {
            $article = Article::create($validated);

            // Attach categories
            if (isset($validated['categories'])) {
                $article->categories()->attach($validated['categories']);
            }

            // Attach tags
            if (isset($validated['tags'])) {
                $article->tags()->attach($validated['tags']);
            }
        });

        return redirect()->route('admin.articles.index')
            ->with('success', 'Article created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        $validated = $request->validated();

        DB::transaction(function () use ($article, $validated) {
            $article->update($validated);

            // Sync categories
            if (isset($validated['categories'])) {
                $article->categories()->sync($validated['categories']);
            }

            // Sync tags
            if (isset($validated['tags'])) {
                $article->tags()->sync($validated['tags']);
            }
        });

        return redirect()->route('admin.articles.index')
            ->with('success', 'Article updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        DB::transaction(function () use ($article) {
            // Detach categories and tags
            $article->categories()->detach();
            $article->tags()->detach();

            $article->delete();
        });

        return redirect()->route('admin.articles.index')
            ->with('success', 'Article deleted successfully.');
    }
}
