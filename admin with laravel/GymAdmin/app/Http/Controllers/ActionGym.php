<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Classes;
use Illuminate\Http\Request;
use Auth;
use App\Models\General;
use App\Models\HomeCamp;
use App\Models\HomeMotivation;
use App\Models\Slider;
use App\Models\Trainer;
use App\Models\Package;
use App\Models\ContactForm;

class ActionGym extends Controller
{
    function __construct()
    {
        $this->middleware('auth')->except('adminIndex', 'login');
    }
    function adminIndex()
    {
        if (!Auth::user()) {
            return view('actionGym.adminIndex');
        }
        return redirect(route('dashboard'));
    }

    function login(Request $request)
    {
        $credentials = $r->only('email', 'password');
        if (Auth::attempt($credentials)) {

            return redirect(route('dashboard'));
        } else {
            return redirect(route('adminIndex'));
        }
    }
    function dashboard()
    {

        if (Auth::user()) {
            $data = Auth::user();
            return view('actionGym.dashboard', compact('data'));
        }

        return redirect(route('adminIndex'));
    }
    function general()
    {
        $data = Auth::user();
        $general = General::first();
        return view('actionGym.general', compact('data', 'general'));
    }
    function updateGeneral(Request $request, $id)
    {
        // dd($request->file('category_photo'));
        $general = General::find($id);
        $array = [
            'about_text' => $request->about_text,
            'about_bennar_text' => $request->about_bennar_text,
            'classess_bennar_text' => $request->classess_bennar_text,
            'package_bennar_text' => $request->package_bennar_text,
            'trainer_bennar_text' => $request->trainer_bennar_text,
            'contact_text' => $request->contact_text,
            'contact_bennar_text' => $request->contact_bennar_text,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'footer_text' => $request->footer_text
        ];
        if ($request->file('category_photo')) {
            $cPhoto = $request->file('category_photo');
            $path = 'photo/';
            $cName = 'category_photo' . date('Ymdhis') . '.' . $cPhoto->getClientOriginalExtension();
            $cPhoto->move($path, $cName);
            $array['category_photo'] = $cName;
        }
        if ($request->file('logo')) {
            $logo = $request->file('logo');
            $path = 'photo/';
            $logoName = 'actionGym' . date('Ymdhis') . '.' . $logo->getClientOriginalExtension();
            $logo->move($path, $logoName);
            $array['logo'] = $logoName;
        }
        if ($request->file('bennar')) {
            $bennar = $request->file('bennar');
            $path = 'photo/';
            $name = 'bennar' . date('Ymdhis') . '.' . $bennar->getClientOriginalExtension();
            $bennar->move($path, $name);
            $array['bennar'] = $name;
        }
        if ($request->file('about_photo')) {
            $about_photo = $request->file('about_photo');
            $path = 'photo/';
            $name = 'about_photo' . date('Ymdhis') . '.' . $about_photo->getClientOriginalExtension();
            $about_photo->move($path, $name);
            $array['about_photo'] = $name;
        }
     

        $re = $general->update($array);
        if ($re) {
            return redirect(route('general'));
        }
    }
    // slider
    function sliderForm()
    {
        $data = Auth::user();

        return view('actionGym.sliderForm', compact('data'));
    }
    function insertSlider(Request $request)
    {
        $request->validate([
            'photo' => 'required',
            'big_text' => 'required',
            'small_text' => 'required',
        ]);
        $array = [
            'big_text' => $request->big_text,
            'small_text' => $request->small_text,
        ];
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/slider/';
            $name = 'slider' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        $re = Slider::create($array);
        if ($re) {
            return redirect(route('sliderForm'));
        }
    }
    function sliderTable()
    {
        $data = Auth::user();
        $slider = Slider::orderBy('id','DESC')->get();
       
        return view('actionGym.slidertable', compact('data', 'slider'));
    }
    function editSlider($id)
    {
        $data = Auth::user();
        $slider = Slider::find($id);
        return view('actionGym.editSlider', compact('data', 'slider'));
    }
    function updateSlider(Request $request, $id)
    {
        $slider = Slider::find($id);
        $array = [
            'big_text' => $request->big_text,
            'small_text' => $request->small_text,
        ];
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/slider/';
            $name = 'sliderUpdate' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        $re = $slider->update($array);
        if ($re) {
            return redirect(route('sliderTable'));
        }
    }
    function deleteSlider(Request $request, $id)
    {
        $slider = Slider::find($id);
        $re = $slider->delete();
        if ($re) {
            return redirect(route('sliderTable'));
        }
    }

    //  category

    function categoryForm()
    {
        $data = Auth::user();
        return view('actionGym.categoryFrom', compact('data'));
    }
    function insertCategory(Request $request)
    {
        
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'icon' => 'required',
            'photo' => 'required',
        ]);
        $array = [
            'title' => $request->title,
            'description' => $request->description,
            // 'icon' => $request->icon
        ];
        if ($request->file('icon')) {
            $icon = $request->file('icon');
            $path = 'photo/category/icon/';
            $name = 'icon' . date('Ymdhis') . '.' . $icon->getClientOriginalExtension();
            $icon->move($path, $name);
            $array['icon'] = $name;
        }
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/category/';
            $name = 'category' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        $re = Category::create($array);
        if ($re) {
            return redirect(route('categoryForm'));
        }
    }

    function categoryTable()
    {
        $data = Auth::user();
        $category = Category::orderBy('id','DESC')->get();
        return view('actionGym.categoryTable', compact('data', 'category'));
    }
    function editCategory($id)
    {
        $data = Auth::user();
        $category = Category::find($id);
        return view('actionGym.editCategory', compact('data', 'category'));
    }
    function updateCategory(Request $request, $id)
    {
        $category = Category::find($id);
        $array = [
            'title' => $request->title,
            'description' => $request->description,
            // 'icon' => $request->icon
        ];
        if ($request->file('icon')) {
            $icon = $request->file('icon');
            $path = 'photo/category/icon/';
            $name = 'icon' . date('Ymdhis') . '.' . $icon->getClientOriginalExtension();
            $icon->move($path, $name);
            $array['icon'] = $name;
        }
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/category/';
            $name = 'category' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        $re = $category->update($array);
        if ($re) {
            return redirect(route('categoryTable'));
        }
    }
    function deleteCategory(Request $request, $id)
    {
        $category = Category::find($id);
        $re = $category->delete();
        if ($re) {
            return redirect(route('categoryTable'));
        }
    }

    // trainer

    function trainer(){
        $data = Auth::user();

        return view('actionGym.trainerForm', compact('data'));
    }
    function insertTrainer(Request $request){
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'trainer_type' => 'required',
            'photo' => 'required',
        ]);
        $array = [
            'name' => $request->name,
            'description' => $request->description,
            'trainer_type' => $request->trainer_type
        ];
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/trainer/';
            $name = $request->name . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        $re = Trainer::create($array);
        if ($re) {
            return redirect(route('trainer'));
        }
    }

    function trainerTable(){
        $data = Auth::user();
        $trainer = Trainer::orderBy('id','DESC')->get();
        return view('actionGym.trainerTable', compact('data', 'trainer'));
    }
    function editTrainer($id){
        $data = Auth::user();
        $trainer = Trainer::find($id);
        return view('actionGym.editTrainer', compact('data', 'trainer'));
    }

    function updateTrainer(Request $request,$id){
        $trainer = Trainer::find($id);
        $array = [
            'name' => $request->name,
            'description' => $request->description,
            'trainer_type' => $request->trainer_type
        ];
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/trainer/';
            $name = $request->name . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        $re = $trainer->update($array);
        if ($re) {
            return redirect(route('trainerTable'));
        }

    }
    function deleteTrainer(Request $request, $id)
    {
        $trainer = Trainer::find($id);
        $re = $trainer->delete();
        if ($re) {
            return redirect(route('trainerTable'));
        }
    }
    // homeMotivation

    function homeMotivation(){
        $data = Auth::user();
        $hm = HomeMotivation::first();
        return view('actionGym.homeMotivation', compact('data','hm'));
    }
    function homeMotivationUpdate(Request $request,$id){
         $hm = HomeMotivation::find($id);
         $array = [
            'title' => $request->title,
            'description' => $request->description,
            'total_staff' => $request->total_staff,
            'calories_burn' => $request->calories_burn,
            'happy_customer' => $request->happy_customer,
        ];
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/';
            $name = 'homeMotivation' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        $re = $hm->update($array);
        if($re){
            return redirect(route('homeMotivation'));
        }
    }

    // membershipcamp

    function membershipcamp(){
        $data = Auth::user();
        $ms = HomeCamp::first();
        return view('actionGym.membershipcamp', compact('data','ms'));
    }
    function membershipcampUpdate(Request $request,$id){
        $ms = HomeCamp::find($id);
        $array = [
           'title' => $request->title,
           'description' => $request->description,
           
       ];
       if ($request->file('photo')) {
           $photo = $request->file('photo');
           $path = 'photo/';
           $name = 'membershipcamp' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
           $photo->move($path, $name);
           $array['photo'] = $name;
       }
       $re = $ms->update($array);
       if($re){
           return redirect(route('membershipcamp'));
       }
    }
    // classessFrom
    function classessForm(){
        $data = Auth::user();

        return view('actionGym.classessForm', compact('data'));
    }
    function classessInsert(Request $request){
        $request->validate([
            'title' => 'required',
            'icon' => 'required',
            
            'photo' => 'required',
        ]);
        $array = [
            'title' => $request->title 
        ];
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/classess/';
            $name = $request->title. date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        if ($request->file('icon')) {
            $photo = $request->file('icon');
            $path = 'photo/classess/icon/';
            $name = 'icon' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['icon'] = $name;
        }
        $re = Classes::create($array);
        if ($re) {
            return redirect(route('classessForm'));
        }
    }
    function classessTable(){
        $data = Auth::user();
        $class = Classes::orderBy('id','DESC')->get();
        return view('actionGym.classTable', compact('data', 'class'));
    }
    function editClass($id){
        $data = Auth::user();
        $class = Classes::find($id);
        return view('actionGym.editClass', compact('data', 'class'));
    }
    function updateClass(Request $request,$id){
        $class = Classes::find($id);
        $array = [
            'title' => $request->title 
        ];
        if ($request->file('photo')) {
            $photo = $request->file('photo');
            $path = 'photo/classess/';
            $name = $request->title. date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['photo'] = $name;
        }
        if ($request->file('icon')) {
            $photo = $request->file('icon');
            $path = 'photo/classess/icon/';
            $name = 'icon' . date('Ymdhis') . '.' . $photo->getClientOriginalExtension();
            $photo->move($path, $name);
            $array['icon'] = $name;
        }
        $re = $class->update($array);
        if ($re) {
            return redirect(route('classessTable'));
        }
    }
    function  deleteClasses(Request $req,$id){
        $class = Classes::find($id);
        $re = $class->delete();
        if ($re) {
            return redirect(route('classessTable'));
        }
    }

    // packageForm

    function packageForm(){
        $data = Auth::user();

        return view('actionGym.packageForm', compact('data'));
    }
    function insertPackage(Request $request){
        $request->validate([
            'title'=>'required',
            'rate'=>'required',
            'description'=>'required'
        ]);
        $array=[
            'title'=>$request->title,
            'rate'=>$request->rate,
        ];
        $d = $request->description;
        // dd($d);
        foreach($d as $k=>$v){
            if(empty($v)){
                return  redirect(route('packageForm'));
            }
        };
        // print_r($d);
        $array['description'] = json_encode($d);
        $re = Package::create($array);
        if($re){
            return redirect(route('packageForm'));
        }
    }
    function packageTable(){
        $data = Auth::user();
        $package = Package::orderBy('id','DESC')->get();
        // dd($package);
      
        return view('actionGym.packageTable', compact('data', 'package'));
    }
    function editPackage($id){
        $data = Auth::user();
        $package = Package::find($id);
        return view('actionGym.editPackage', compact('data', 'package'));
    }
    function updatePackage(Request $request,$id){
        $package = Package::find($id);
        $array=[
            'title'=>$request->title,
            'rate'=>$request->rate,
        ];
        $d = $request->description;
        foreach($d as $k=>$v){
            if(empty($v)){
                return  redirect(route('packageTable'));
            }
        }
        $array['description'] = json_encode($d);
        $re = $package->update($array);
        if($re){
            return redirect(route('packageTable'));
        }
    }
    function deletePackage(Request $re, $id){
        $package = Package::find($id);
        $re = $package->delete();
        if($re){
            return redirect(route('packageTable'));
        }
    }
    function userMessage(){
        $data = Auth::user();
        $contact = ContactForm::get();
        return view('actionGym.contact', compact('data', 'contact'));
    }
    function deleteContact($id){
        $contact = ContactForm::find($id);
        $re = $contact->delete();
        if($re){
            return redirect(route('userMessage'));
        }
    }
}
