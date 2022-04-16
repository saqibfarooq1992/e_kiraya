<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(AboutSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(AdvertisementSeeder::class);
        $this->call(HeaderSeeder::class);
        $this->call(PropertytypeSeeder::class);

    }
}
