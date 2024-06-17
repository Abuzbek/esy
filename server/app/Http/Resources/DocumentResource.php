<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'document_name' => $this->document_name,
            'created_at' => $this->created_at,
            'fields' => $this->fields->map(function ($fields) {
                return [
                    'id' => $fields->id,
                    'field_seq' => $fields->field_seq,
                    'is_mandatory' => $fields->is_mandatory,
                    'field_type' => $fields->field_type,
                    'field_name' => $fields->field_name,
                    'select_values' => $fields->select_values,
                ];
            }),
        ];
    }
}
