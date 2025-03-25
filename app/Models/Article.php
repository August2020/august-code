<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'content',
        'image',
        'active',
        'article_category_id',
    ];

    protected $dates = ['deleted_at'];

    public function category()
    {
        return $this->belongsTo(ArticleCategory::class, 'article_category_id');
    }

    public function tags()
    {
        return $this->belongsToMany(ArticleTag::class, 'articles_article_tags');
    }
}
