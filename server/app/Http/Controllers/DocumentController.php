<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\DocumentConfiguration;
use Illuminate\Http\Request;
use App\Http\Resources\DocumentResource;
class DocumentController extends Controller
{
    public function getDocuments()
    {
        $documents = Document::withCount('fields')->get();

        $transformedDocuments = $documents->map(function ($document) {
            return [
                'id' => $document->id,
                'document_name' => $document->document_name,
                'created_at' => $document->created_at,
                'field_count' => $document->fields_count,
            ];
        });

        return response()->json($transformedDocuments);
    }


    public function getDocument($id)
    {
        $documents = Document::with('fields')->get();
        return DocumentResource::collection($documents);
    }

    public function createDocument(Request $request)
    {
        $validatedData = $request->validate([
            'document_name' => 'required|string|max:255',
            'form_values' => 'required|array',
            'form_values.*.field_seq' => 'required|integer',
            'form_values.*.is_mandatory' => 'required|boolean',
            'form_values.*.field_type' => 'required|integer',
            'form_values.*.field_name' => 'required|string|max:255',
            'form_values.*.select_values' => 'nullable|json'
        ]);

        // dd($validatedData);

        $document = Document::create(['document_name' => $validatedData['document_name']]);

        foreach ($validatedData['form_values'] as $field) {
            DocumentConfiguration::create([
                'document_id' => $document->id,
                'field_seq' => $field['field_seq'],
                'is_mandatory' => $field['is_mandatory'],
                'field_type' => $field['field_type'],
                'field_name' => $field['field_name'],
                'select_values' => isset($field['select_values']) ? json_decode($field['select_values']) : null
            ]);
        }

        return response()->json(['message' => 'Document created successfully'], 201);
    }
}

