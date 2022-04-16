<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>"Admin",
            'email'=>"saqibfarooq1992@gmail.com",
            'password'=>bcrypt('admin123'),
            'phone'=>"0321-1717555",
            'city_name' => "Islamabad",
            'role' => "admin",
            'terms'=>"1",
            'status' => "approved",
            'avatar' => "abc.jpg"
        ]);
    }
}
