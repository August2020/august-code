<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Allow all users to make this request (you can adjust this based on your needs)
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'category' => $this->input('category') ?? null,
            'tags' => $this->input('tags', '[]'), // Ensure tags is always an array
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'content' => 'required|string',
            'category' => 'exists:article_category,id',
            'tags' => 'array',
            'tags.*' => 'exists:article_tags,id',
        ];
    }
}
