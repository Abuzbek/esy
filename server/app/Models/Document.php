<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $fillable = ['document_name'];

    public function fields()
    {
        return $this->hasMany(DocumentConfiguration::class);
    }
}

