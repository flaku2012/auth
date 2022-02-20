<?php

namespace App\Http\Controllers\PigeonHawks;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\PigeonHawk;

class PigeonHawksController extends Controller
{
    
    public function __construct(){
        $this->middleware(['auth:api']);
    }

    public function get_user_pigeon_hawks()
    {
        $pigeonhawks =  PigeonHawk::where( 'user_id', Auth()->id() )->get();
        return response()->json($pigeonhawks);
    }
    
}
