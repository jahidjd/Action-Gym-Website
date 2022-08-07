<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_motivations', function (Blueprint $table) {
            $table->id();
            $table->char('title',100);
            $table->text('description');
            $table->integer('total_staff');
            $table->bigInteger('calories_burn');
            $table->bigInteger('happy_customer');
            $table->char('photo',50);
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
        Schema::dropIfExists('home_motivations');
    }
};
