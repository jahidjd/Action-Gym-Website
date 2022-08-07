<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(ApiController::class)->group(function(){
    Route::get('/generalData','generalData');
    Route::get('/slider','slider');
    Route::get('/category','category');
    Route::get('/trainer','trainer');
    Route::get('/classess','classess');
    Route::get('/package','package');
    Route::get('/homeMotivation','homeMotivation');
    Route::get('/homeCamp','homeCamp');
    Route::post('/contactMessage','contactMessage');
});
