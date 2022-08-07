<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeCamp extends Model
{
    use HasFactory;
    protected $table ='home_camps';
    protected $fillable = [
        'title',
        'description',
        'photo'
    ];
}
