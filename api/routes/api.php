<?php

//use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Route;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

use App\Http\Controllers\Auth\SignInController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\SignOutController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\MeController;
use App\Http\Controllers\Work\WorkController;
use App\Http\Controllers\Profile\MessagesController;
use App\Http\Controllers\PigeonHawks\PigeonHawksController;

use App\Mail\WelcomeMail;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\Mail;

Route::group(['prefix' => 'auth'], function(){
    Route::post('signin' , SignInController::class);
    Route::post('register' , RegisterController::class);
    Route::post('signout' , SignOutController::class);

    Route::get('me' , MeController::class);
});

//Email Route TESTY
Route::get('/email' , function(){
    Mail::to('flaku2012@gmail.com')->send(new WelcomeMail());
    return new WelcomeMail();
});

//Email Route Reset Password TESTY
Route::get('/reset-password-email/{email}' , function($email){
    Mail::to($email)->send(new ResetPasswordMail());
    return new ResetPasswordMail();
});

Route::post('/send_token_email', [ResetPasswordController::class, 'send_token_email'] );
Route::post('/validate_token', [ResetPasswordController::class, 'validate_token'] );
Route::post('/reset_password', [ResetPasswordController::class, 'reset_password'] );
Route::post('/change_password' , [ResetPasswordController::class, 'change_password'] );

Route::group(['prefix' => 'work'], function(){
    Route::post('start' , [WorkController::class, 'start']);
    Route::post('manual_end' , [WorkController::class, 'manual_end']);
    Route::post('end_time_work' , [WorkController::class, 'end_time_work']);
    Route::get('status' , [WorkController::class, 'status']);
});

// gołębniki - PigeonHawks
Route::group(['prefix' => 'pigeonhawks'], function(){
    Route::get('get_user_pigeon_hawks' , [PigeonHawksController::class, 'get_user_pigeon_hawks']);
});



// wiadomości + websocket
Route::get('messages' , [MessagesController::class, 'fetchMessages']);
Route::post('messages' , [MessagesController::class, 'sendMessage']);

Route::get('weryf' , [MessagesController::class, 'weryfikacja']);
