<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('id');
            $table->text('property_number');
            $table->string('title');
            $table->text('slug');
            $table->text('description');
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedInteger('propertytype_id');
            $table->foreign('propertytype_id')->references('id')->on('propertytypes')->onDelete('cascade');
            $table->unsignedInteger('city_id');
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
            $table->unsignedInteger('sector_id');
            $table->foreign('sector_id')->references('id')->on('sectors')->onDelete('cascade');
            $table->string('badrooms');
            $table->string('bathrooms');
            $table->text('address');
            $table->string('unit');
            $table->string('marital_status');
            $table->string('payment_type');
            $table->text('account_number');
            $table->text('size');
            $table->text('manager_phone')->nullable();
            $table->string('rent_price');
            $table->string('tv_lounged');
            $table->string('furnished');
            $table->string('reservation');
            $table->string('notification');
            $table->string('security_price')->nullable();
            $table->string('company_commession')->nullable();
            $table->string('dues_rent')->nullable();
            $table->string('paid_date')->nullable();
            $table->string('garage');
            $table->string('status');
            $table->string('rent');
            $table->string('pic1');
            $table->string('pic2');
            $table->string('pic3');
            $table->string('pic4');
            $table->string('pic5');
            $table->string('pic6');
            $table->string('pic7');
            $table->string('pic8');
            $table->string('pic9');
            $table->string('pic10');
            $table->string('pic11');
            $table->string('pic12');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
