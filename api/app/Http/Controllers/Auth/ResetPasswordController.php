<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;
use Illuminate\Support\Str;
use App\Models\User;

class ResetPasswordController extends Controller
{

    public function send_token_email(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if(!isset($user->id))
        {
            return response()->json(['error' => 'Użytkownik z takim adresem e-mail - nie istnieje !!!'], 401);
        }

        $token = Str::random(20);

        Mail::send('emails.resetpassword', ['kod_autoryzacji' => $token], function($message) {
            $message->to('flaku2012@gmail.com', 'Tutorials Point')->subject
                ('Kod weryfikacyjny');
            $message->from('flaku2012@gra-golebie.pl','Gra Golebie.pl');
        });

        $update_user = User::find($user->id);
        $update_user->reset_password_token = $token;
        $update_user->save();
    }

//====================================================================================================
//====================================================================================================

    public function validate_token(Request $request)
    {
        $token = User::where('reset_password_token' , $request->token)->first();

        if(!isset($token->email))
        {
            return response()->json(['error' => 'Niepoprawny kod autoryzacji !!!'], 401);
        }

        $user = User::where('email', $token->email)->first();

        return response()->json($user, 200);
    }

//====================================================================================================
//====================================================================================================

    public function reset_password(Request $request)
    {
       $user = User::find($request->user_id);

       $user->password = bcrypt($request->password);
       $user->reset_password_token = '';
       $user->save();

    }

//====================================================================================================
//====================================================================================================

}
