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
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@admin.pl',
            'password' => Hash::make('admin123'),
            'reset_password_token' => 'tokentokentokentoken',
        ]);

        DB::table('pigeon_hawks')->insert([
            'user_id' => 1,
            'name' => 'Gołebnik podstawowy',
        ]);

        DB::table('pigeon_hawks')->insert([
            'user_id' => 1,
            'name' => 'Gołebnik rozpłodowy',
        ]);

    }
}
