@extends('actionGym.layout')
@section('body')

<div id="app" class="app">

    @include('actionGym.header')

    @include('actionGym.menu')

    <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


    <div id="content" class="app-content">

        <div class="row">
            <div class="col-xl-12 col-lg-12">

                <div class="card mb-3">

                    <div class="card-body">
                        <h1>General Form</h1>
                        <form action="{{route('updateGeneral',$general->id)}}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('put')
                            <table class="table table-bordered">
                                <tr>
                                    <th>Logo</th>
                                    <td>
                                        <input type="file" class="form-control" name="logo">
                                        <img src="{{url('photo/'.$general->logo)}}" alt="" width="100px">
                                    </td>
                                    <th>Bennar</th>
                                    <td>
                                        <input type="file" class="form-control" name="bennar">
                                        <img src="{{url('photo/'.$general->bennar)}}" alt="" width="100px">
                                    </td>
                                </tr>
                                <tr>
                                    <th>About Text</th>
                                    <td colspan="3"><textarea name="about_text" id="" cols="10" rows="3" class="form-control">{{$general->about_text}}</textarea></td>
                                </tr>
                                <tr>
                                    <th>Footer Text</th>
                                    <td colspan="3"><textarea name="footer_text" id="" cols="10" rows="3" class="form-control">{{$general->footer_text}}</textarea></td>
                                </tr>
                                <tr>
                                    <th>About Bennar Text</th>
                                    <td><input type="text" name="about_bennar_text" class="form-control" value="{{$general->about_bennar_text}}"></td>
                                    <th>Classess Bennar text</th>
                                    <td><input type="text" name="classess_bennar_text" class="form-control" value="{{$general->classess_bennar_text}}"></td>
                                </tr>
                                <tr>
                                    <th>Package Bennar Text</th>
                                    <td><input type="text" name="package_bennar_text" class="form-control" value="{{$general->package_bennar_text}}"></td>
                                    <th>Trainer Bennar text</th>
                                    <td><input type="text" name="trainer_bennar_text" class="form-control" value="{{$general->trainer_bennar_text}}"></td>
                                </tr>
                                <tr>
                                    <th>Contact Text</th>
                                    <td><input type="text" name="contact_text" class="form-control" value="{{$general->contact_text}}"></td>
                                    <th>Contact Bennar Text</th>
                                    <td><input type="text" name="contact_bennar_text" class="form-control" value="{{$general->contact_bennar_text}}"></td>
                                </tr>
                                
                                <tr>
                                    <th>Email</th>
                                    <td><input type="text" name="email" class="form-control" value="{{$general->email}}"></td>
                                    <th>Phone</th>
                                    <td><input type="text" name="phone" class="form-control" value="{{$general->phone}}"></td>
                                </tr>
                                <tr>
                                    <td>About Photo</td>
                                    <td>
                                        <input type="file" name="about_photo" class="form-control">
                                        <img src="{{url('photo/'.$general->about_photo)}}" alt="" width="100px">
                                    </td>
                                    <td>Category Photo</td>
                                    <td>
                                        <input type="file" name="category_photo" class="form-control">
                                        <img src="{{url('photo/'.$general->category_photo)}}" alt="" width="100px">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td><input type="text" name="address" class="form-control" value="{{$general->address}}"></td>
                                   <td colspan="2"> <input type="submit" class="form-control btn btn-info" value="Update"></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>


        </div>

    </div>


    <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>


    <div class="app-theme-panel">
        <div class="app-theme-panel-container">
            <a href="javascript:;" data-toggle="theme-panel-expand" class="app-theme-toggle-btn"><i class="bi bi-sliders"></i></a>
            <div class="app-theme-panel-content">
                <div class="small fw-bold text-white mb-1">Theme Color</div>
                <div class="card mb-3">

                    <div class="card-body p-2">

                        <div class="app-theme-list">
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-pink" data-theme-class="theme-pink" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Pink">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-red" data-theme-class="theme-red" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Red">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-warning" data-theme-class="theme-warning" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Orange">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-yellow" data-theme-class="theme-yellow" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Yellow">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-lime" data-theme-class="theme-lime" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Lime">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-green" data-theme-class="theme-green" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Green">&nbsp;</a></div>
                            <div class="app-theme-list-item active"><a href="javascript:;" class="app-theme-list-link bg-teal" data-theme-class="" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-info" data-theme-class="theme-info" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cyan">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-primary" data-theme-class="theme-primary" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Blue">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-purple" data-theme-class="theme-purple" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Purple">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-indigo" data-theme-class="theme-indigo" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Indigo">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-gray-100" data-theme-class="theme-gray-200" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Gray">&nbsp;</a></div>
                        </div>

                    </div>


                    <div class="card-arrow">
                        <div class="card-arrow-top-left"></div>
                        <div class="card-arrow-top-right"></div>
                        <div class="card-arrow-bottom-left"></div>
                        <div class="card-arrow-bottom-right"></div>
                    </div>

                </div>
                <div class="small fw-bold text-white mb-1">Theme Cover</div>
                <div class="card">

                    <div class="card-body p-2">

                        <div class="app-theme-cover">
                            <div class="app-theme-cover-item active">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-1.jpg);" data-theme-cover-class="" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-2.jpg);" data-theme-cover-class="bg-cover-2" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 2">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-3.jpg);" data-theme-cover-class="bg-cover-3" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 3">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-4.jpg);" data-theme-cover-class="bg-cover-4" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 4">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-5.jpg);" data-theme-cover-class="bg-cover-5" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 5">&nbsp;</a>
                            </div>
                        </div>

                    </div>


                    <div class="card-arrow">
                        <div class="card-arrow-top-left"></div>
                        <div class="card-arrow-top-right"></div>
                        <div class="card-arrow-bottom-left"></div>
                        <div class="card-arrow-bottom-right"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
@endsection
