<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MeController extends Controller
{

    public function __construct(){
        $this->middleware(['auth:api']);
    }

    public function __invoke(Request $request)
    {

        $user = $request->user();

        return response()->json($user);

        // tak było wcześniej
        // return response()->json([
        //     'email' => $user->email,
        //     'name' => $user->name,
        //     'id' => $user->id,
        //     'in_work' => $user->in_work
        // ]);
        

    }

}
