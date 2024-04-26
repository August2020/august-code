<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('article_tags', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('articles_article_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('article_id')->constrained('articles', 'id')->onDelete('cascade');
            $table->foreignId('tag_id')->constrained('article_tags', 'id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('articles_article_tags');
        Schema::dropIfExists('article_tags');
    }
};
