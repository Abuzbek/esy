<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;

Route::get('/v1/documents', [DocumentController::class, 'getDocuments']);
Route::get('/v1/document/{id}', [DocumentController::class, 'getDocument']);
Route::post('/v1/documents/create', [DocumentController::class, 'createDocument']);
