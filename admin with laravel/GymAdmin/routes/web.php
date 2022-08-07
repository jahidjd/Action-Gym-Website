<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActionGym;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[ActionGym::class,'adminIndex'])->name('adminIndex');
Route::middleware('auth')->group(function(){
    Route::post('/login',[ActionGym::class,'login'])->name('login');
    Route::get('/dashboard',[ActionGym::class,'dashboard'])->name('dashboard');
    Route::get('/general',[ActionGym::class,'general'])->name('general');
    Route::put('/updateGeneral/{id}',[ActionGym::class,'updateGeneral'])->name('updateGeneral');
    Route::get('/sliderForm',[ActionGym::class,'sliderForm'])->name('sliderForm');
    Route::post('/insertSlider',[ActionGym::class,'insertSlider'])->name('insertSlider');
    Route::get('/sliderTable',[ActionGym::class,'sliderTable'])->name('sliderTable');
    Route::get('/editSlider/{id}',[ActionGym::class,'editSlider'])->name('editSlider');
    Route::put('/updateSlider/{id}',[ActionGym::class,'updateSlider'])->name('updateSlider');
    Route::delete('/deleteSlider/{id}',[ActionGym::class,'deleteSlider'])->name('deleteSlider');
    Route::get('/categoryForm',[ActionGym::class,'categoryForm'])->name('categoryForm');
    Route::post('/insertCategory',[ActionGym::class,'insertCategory'])->name('insertCategory');
    Route::get('/categoryTable',[ActionGym::class,'categoryTable'])->name('categoryTable');
    Route::get('/editCategory/{id}',[ActionGym::class,'editCategory'])->name('editCategory');
    Route::put('/updateCategory/{id}',[ActionGym::class,'updateCategory'])->name('updateCategory');
    Route::delete('/deleteCategory/{id}',[ActionGym::class,'deleteCategory'])->name('deleteCategory');
    Route::get('/trainer',[ActionGym::class,'trainer'])->name('trainer');
    Route::post('/insertTrainer',[ActionGym::class,'insertTrainer'])->name('insertTrainer');
    Route::get('/trainerTable',[ActionGym::class,'trainerTable'])->name('trainerTable');
    Route::get('/editTrainer/{id}',[ActionGym::class,'editTrainer'])->name('editTrainer');
    Route::put('/updateTrainer/{id}',[ActionGym::class,'updateTrainer'])->name('updateTrainer');
    Route::delete('/deleteTrainer/{id}',[ActionGym::class,'deleteTrainer'])->name('deleteTrainer');
    Route::get('/homeMotivation',[ActionGym::class,'homeMotivation'])->name('homeMotivation');
    Route::put('/homeMotivationUpdate/{id}',[ActionGym::class,'homeMotivationUpdate'])->name('homeMotivationUpdate');
    Route::get('/membershipcamp',[ActionGym::class,'membershipcamp'])->name('membershipcamp');
    Route::put('/membershipcampUpdate/{id}',[ActionGym::class,'membershipcampUpdate'])->name('membershipcampUpdate');
    Route::get('/classessForm',[ActionGym::class,'classessForm'])->name('classessForm');
    Route::post('/classessInsert',[ActionGym::class,'classessInsert'])->name('classessInsert');
    Route::get('/classessTable',[ActionGym::class,'classessTable'])->name('classessTable');
    Route::get('/editClass/{id}',[ActionGym::class,'editClass'])->name('editClass');
    Route::put('/updateClass/{id}',[ActionGym::class,'updateClass'])->name('updateClass');
    Route::delete('/deleteClasses/{id}',[ActionGym::class,'deleteClasses'])->name('deleteClasses');
    Route::get('/packageForm',[ActionGym::class,'packageForm'])->name('packageForm');
    Route::post('/insertPackage',[ActionGym::class,'insertPackage'])->name('insertPackage');
    Route::get('/packageTable',[ActionGym::class,'packageTable'])->name('packageTable');
    Route::get('/editPackage/{id}',[ActionGym::class,'editPackage'])->name('editPackage');
    Route::put('/updatePackage/{id}',[ActionGym::class,'updatePackage'])->name('updatePackage');
    Route::delete('/deletePackage/{id}',[ActionGym::class,'deletePackage'])->name('deletePackage');
    Route::get('/userMessage',[ActionGym::class,'userMessage'])->name('userMessage');
    Route::delete('/deleteContact/{id}',[ActionGym::class,'deleteContact'])->name('deleteContact');
});
Auth::routes(['register'=>false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
