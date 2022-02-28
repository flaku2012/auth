<?php

namespace App\Http\Controllers\Pigeon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\PigeonHawk;
use App\Models\Pigeon;

class PigeonController extends Controller
{
    public function __construct(){
        $this->middleware(['auth:api']);
    }

    public function getUserPigeons($pigeon_hawk_id=false)
    {
        //$pigeons = Pigeon::where( 'user_id', Auth()->id() )->get()->pigeonhawk;
        $pigeons = PigeonHawk::where( 'user_id', Auth()->id() )->first()->pigeons;

        return response()->json($pigeons);
    }

}
