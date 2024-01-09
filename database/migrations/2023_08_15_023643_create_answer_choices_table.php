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
    Schema::create('answer_choices', function (Blueprint $table) {
      $table->id();
      $table->foreignId('answer_id')
        ->nullable()
        ->default(null)
        ->constrained('answers')
        ->cascadeOnUpdate()
        ->nullOnDelete();
      $table->foreignId('choice_id')
        ->nullable()
        ->default(null)
        ->constrained('choices')
        ->cascadeOnUpdate()
        ->nullOnDelete();
      $table->string('answer')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('answer_choices');
  }
};
