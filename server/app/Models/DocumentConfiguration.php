<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentConfiguration extends Model
{
    use HasFactory;

    protected $fillable = [
        'document_id',
        'field_seq',
        'is_mandatory',
        'field_type',
        'field_name',
        'select_values'
    ];

    protected $casts = [
        'select_values' => 'array',
    ];

    public function document()
    {
        return $this->belongsTo(Document::class);
    }
}
