<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class General extends Model
{
    use HasFactory;
    protected $table = 'generals';
    protected $fillable =[
        'logo',
        'about_photo',
        'about_text',
        'bennar',
        'about_bennar_text',
       'classess_bennar_text',
       'package_bennar_text',
       'trainer_bennar_text',
        'contact_text',
       'contact_bennar_text',
        'email',
        'phone',
        'address',
        'footer_text',
        'category_photo'
        
    ];
}
