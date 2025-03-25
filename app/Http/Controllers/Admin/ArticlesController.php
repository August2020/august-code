<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\ArticleTag;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Eager loading categories and tags to prevent N+1 issue
        $articles = Article::with(['categories', 'tags'])->get();

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $articlesTags = ArticleTag::all();
        $articlesCategories = ArticleCategory::all();

        return Inertia::render('Admin/Articles/Create', [
            'articlesCategories' => $articlesCategories,
            'articlesTags' => $articlesTags,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('articles', 'public');
            $validated['image'] = $imagePath;
        }

        DB::transaction(function () use ($validated, $request) {
            $article = Article::create([
                'title' => $validated['title'],
                'description' => $validated['description'],
                'content' => $validated['content'],
                'image' => $validated['image'],
                'article_category_id' => $validated['category'],
            ]);

            if ($request->has('tags')) {
                $article->tags()->attach($request->tags);
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
            // Use `fill` to update the article's properties and then save
            $article->fill($validated)->save();

            // Sync categories if present
            if (isset($validated['categories'])) {
                $article->categories()->sync($validated['categories']);
            }

            // Sync tags if present
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
            // Detach categories and tags (if no cascading delete is configured in the DB)
            $article->categories()->detach();
            $article->tags()->detach();

            $article->delete();
        });

        return redirect()->route('admin.articles.index')
            ->with('success', 'Article deleted successfully.');
    }
}
