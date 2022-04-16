<?php

use Illuminate\Database\Seeder;
use App\Header;
class HeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Header::create([
            'title' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
            'benner' => "abc.jpg",
        ]);
    }
}
