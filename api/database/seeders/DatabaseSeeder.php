<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    
        // USERS
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@admin.pl',
            'password' => Hash::make('admin123'),
            'reset_password_token' => 'ttt',
        ]);

        DB::table('users')->insert([
            'name' => 'test',
            'email' => 'test@test.pl',
            'password' => Hash::make('test123'),
            'reset_password_token' => 'tkl',
        ]);

        //GOŁĘBNIKI 2 NA 1 UŻYTKOWNIKA
        DB::table('pigeon_hawks')->insert([
            'user_id' => 1,
            'name' => 'Gołebnik podstawowy',
        ]);
        DB::table('pigeon_hawks')->insert([
            'user_id' => 1,
            'name' => 'Gołebnik rozpłodowy',
        ]);
        DB::table('pigeon_hawks')->insert([
            'user_id' => 2,
            'name' => 'Gołebnik podstawowy',
        ]);
        DB::table('pigeon_hawks')->insert([
            'user_id' => 2,
            'name' => 'Gołebnik rozpłodowy',
        ]);

        //GOŁĘBIE 1 NA 1 GOŁĘBNIK
        DB::table('pigeons')->insert([
            'user_id' => 1,
            'pigeon_hawk_id' => 1,
            'name' => 'Gołąb nr',
        ]);
        DB::table('pigeons')->insert([
            'user_id' => 1,
            'pigeon_hawk_id' => 2,
            'name' => 'Gołąb nr',
        ]);
        DB::table('pigeons')->insert([
            'user_id' => 2,
            'pigeon_hawk_id' => 3,
            'name' => 'Gołąb nr',
        ]);
        DB::table('pigeons')->insert([
            'user_id' => 2,
            'pigeon_hawk_id' => 4,
            'name' => 'Gołąb nr',
        ]);




    }
}
