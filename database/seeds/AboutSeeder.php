<?php

use Illuminate\Database\Seeder;
use App\About;
class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        About::create([
            'title'=>"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do",
            'description'=>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
            'image'=>"abc.jpg",
            'backgrounds'=>"Lorem ipsum dolor sit amet",
            'approach' => "Lorem ipsum dolor sit amet",
            'methodology' => "Lorem ipsum dolor sit amet",
        ]);
    }
}
