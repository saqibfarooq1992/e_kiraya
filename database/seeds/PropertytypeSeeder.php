<?php

use Illuminate\Database\Seeder;
use App\Propertytype;
class PropertytypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Propertytype::create([
            'property_name' => 'House',
        ]);

    }
}
