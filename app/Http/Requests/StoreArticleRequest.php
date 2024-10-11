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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',     // Article title is required and should be a string
            'content' => 'required|string',           // Article content is required
            'categories' => 'nullable|array',         // Categories can be an optional array
            'categories.*' => 'exists:categories,id', // Each category must exist in the database
            'tags' => 'nullable|array',               // Tags can be an optional array
            'tags.*' => 'exists:tags,id',             // Each tag must exist in the database
        ];
    }
}
