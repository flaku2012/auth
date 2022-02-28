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

    public function getUserPigeonHawks()
    {

        $pigeonhawks = PigeonHawk::get();

        abort_if(!$pigeonhawks, 404, "Not found");

        return response()->json($pigeonhawks);

    }
    
    public function getUserPigeonHawk($pigeonhawk)
    {
        $hawk = PigeonHawk::find($pigeonhawk);

        // jak masz global scope to nie musisz go callować, sam się dodaje
        // jak byś chiał bez globalnych scope to robisz cos w tym stylu
        // PigeonHawk::withoutGlobalScope(['owns'])->where('user_id', 1337)->first()

        abort_if(!$hawk, 404, "Not found");

        return response()->json($hawk);

    }
    
}
