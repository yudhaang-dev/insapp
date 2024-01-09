<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('examinations', function (Blueprint $table) {
      $table->id();
      $table->string('poster')->nullable();
      $table->string('name');
      $table->text('description')->nullable();
      $table->text('instruction')->nullable();
      $table->decimal('price', 20, 2)->nullable()->default(0);
      $table->enum('status', ['Plan', 'On Going', 'Pending', 'Cancel', 'Done'])->default('Plan');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('examinations');
  }
};
