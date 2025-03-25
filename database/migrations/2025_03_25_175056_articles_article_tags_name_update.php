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
        Schema::table('articles_article_tags', function (Blueprint $table) {
            $table->renameColumn('tag_id', 'article_tag_id');
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('articles_article_tags', function (Blueprint $table) {
            $table->renameColumn('article_tag_id', 'tag_id');
        });
    }
};
