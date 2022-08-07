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
        Schema::create('generals', function (Blueprint $table) {
            $table->id();
            $table->char('logo',50);
            $table->char('about_photo',50);
            $table->char('about_text',255);
            $table->char('bennar',50);
            $table->text('about_bennar_text');
            $table->char('classess_bennar_text',100);
            $table->char('package_bennar_text',100);
           $table->char('trainer_bennar_text',100);
            $table->char('contact_text',100);
           $table->char('contact_bennar_text',100);
            $table->char('email',50);
            $table->char('phone',15);
            $table->char('address',50);
            $table->text('footer_text');
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
        Schema::dropIfExists('generals');
    }
};
