<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

use App\Models\User;
use App\Models\PigeonHawk;

class PigeonHawk extends Model
{
    use HasFactory;
    public $timestamps = false;


    protected $fillable = ['name'];

    protected static function booted()
    {
        static::addGlobalScope('owns', function (Builder $builder) {
            $builder->where('user_id', auth()->id());
        });
    }

    // sprawdzić potrzebę funkcji
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // zweryfikować potrzębę
    public function pigeons()
    {
        return $this->hasMany(Pigeon::class);

    }

}
