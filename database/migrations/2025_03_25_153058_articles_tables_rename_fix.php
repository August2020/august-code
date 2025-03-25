<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::rename('article_article_tag', 'articles_article_tags');
        Schema::rename('article_categories', 'article_category');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::rename('articles_article_tags', 'article_article_tag');
        Schema::rename('article_category', 'article_categories');
    }
};
