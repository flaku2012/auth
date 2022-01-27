<?php

namespace App\Http\Controllers\Work;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\User\Work;

class WorkController extends Controller
{

    public function __construct(){
        $this->middleware(['auth:api']);
    }

//====================================================================================================
//====================================================================================================
//====================================================================================================

    public function start(Request $request)
    {

        $user = Auth()->user();
        $check_in_work = User::find(Auth()->id())->work;

        //zmienne z request
        $end_time_work = $request->czas_pracy;
        $work_salary = $request->wynagrodzenie;

        if( empty($check_in_work) && $end_time_work != '' )
        {
            
            $work = new Work;
            $work->user_id = Auth()->id();
            $work->in_work = 1;
            $work->end_time_of_work = $end_time_work;
            $work->work_salary = $work_salary;
            $work->save();

            // dodać akutalizację salda dla użytkownika

        }

    }

//====================================================================================================
//====================================================================================================
//====================================================================================================
    
    public function manual_end()
    {   
        $user = Auth()->user();
        $check_in_work = Work::where( 'user_id', Auth()->id() )->first();
        $check_in_work->delete();

    }

//====================================================================================================
//====================================================================================================
//====================================================================================================

    public function status()
    {   
        $get_status_work = Work::where( 'user_id', Auth()->id() )->first();

        if( $get_status_work) {
            return $get_status_work;
        }
    }

//====================================================================================================
//====================================================================================================
//====================================================================================================

}
