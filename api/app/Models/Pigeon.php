<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Pigeon extends Model
{
    use HasFactory;
    public $timestamps = false;


    protected static function booted()
    {
        static::addGlobalScope( 'owns', function(Builder $builder){
            $builder->where( 'user_id', auth()->id() );
        });
    }

}
