<?php

namespace App\Http\Controllers;

use App\Models\General;
use App\Models\Slider;
use App\Models\Category;
use App\Models\Classes;
use App\Models\Package;
use App\Models\Trainer;
use App\Models\HomeMotivation;
use App\Models\HomeCamp;
use App\Models\ContactForm;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    function generalData(){
        $general = General::first();
        return response()->json([
            'status'=>'success',
            'data'=>$general
        ]);
    }
    function slider(){
        $slider = Slider::get();
        return response()->json([
            'status'=>'success',
            'data'=>$slider
        ]);
    }
    function category(){
        $category = Category::orderBy('id','DESC')->get();
        return response()->json([
            'status'=>'success',
            'data'=>$category
        ]);
    }
    function trainer(){
        $trainer = Trainer::orderBy('id','DESC')->get();
        return response()->json([
            'status'=>'success',
            'data'=>$trainer
        ]);
    }
    function classess(){
        $classess = Classes::orderBy('id','DESC')->get();
        return response()->json([
            'status'=>'success',
            'data'=>$classess
        ]);
    }
    function package(){
        $package = Package::orderBy('id','DESC')->get();
        return response()->json([
            'status'=>'success',
            'data'=>$package
        ]);
    }
    function homeMotivation(){
        $homeMotivation = HomeMotivation::first();
        return response()->json([
            'status'=>'success',
            'data'=>$homeMotivation
        ]);
    }
    function homeCamp(){
        $homeCamp = HomeCamp::first();
        return response()->json([
            'status'=>'success',
            'data'=>$homeCamp
        ]);
    }
    function contactMessage(Request $request){
        $data = ContactForm::create($request->all());
        return response()->json([
            'status'=>true,
            'data'=>$data
        ]);
    }
}
