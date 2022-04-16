<?php

use Illuminate\Database\Seeder;
use App\Advertisement;
class AdvertisementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Advertisement::create([
            'title' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            'image' => "abc.jpg",
        ]);
    }
}
