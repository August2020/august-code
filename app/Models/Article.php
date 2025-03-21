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
    ];

    protected $dates = ['deleted_at'];

    public function categories()
    {
        return $this->belongsToMany(ArticleCategory::class, 'article_category_article');
    }

    public function tags()
    {
        return $this->belongsToMany(ArticleTag::class);
    }
}
