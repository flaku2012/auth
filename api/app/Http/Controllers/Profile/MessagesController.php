<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Events\ChatEvent;
use App\Events\MessageSent;

use App\Models\User\User;
use App\Models\User\Message;


class MessagesController extends Controller
{
    // spr czy zalogowany
    public function __construct(){
        $this->middleware(['auth:api']);
    }


    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    public function sendMessage(Request $request)
    {
        $message = auth()->user()->messages()->create([
            'message' => $request->message
        ]);

        broadcast(new MessageSent($message->load('user')))->toOthers();
        //return $message->load('user');
        return ['status' => 'success'];
    }

    // nieaktywne - testy
    public function send(Request $request)
    {
        //event( new ChatEvent($request->message, Auth()->id() ) );
        event( new ChatEvent($request->message, Auth()->id() ) )->toOthers();
    }

    // funkcja do testowania - do testowaniw
    public function weryfikacja()
    {
        
        return 'test';
    }
    
}
