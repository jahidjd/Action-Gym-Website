<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeMotivation extends Model
{
    use HasFactory;
    protected $table = 'home_motivations';
    protected $fillable = [
        'title',
        'description',
        'total_staff',
        'calories_burn',
        'happy_customer',
        'photo'
    ];
}
