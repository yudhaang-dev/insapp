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
    Schema::create('scores', function (Blueprint $table) {
      $table->id();
      $table->foreignId('question_id')
        ->constrained('questions')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->decimal('value', 5, 0);
      $table->string('alias')->nullable();
    });

    Schema::create('choice_score', function (Blueprint $table) {
      $table->id();
      $table->foreignId('score_id')
        ->constrained('scores')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->foreignId('choice_id')
        ->constrained('choices')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('choice_score');
    Schema::dropIfExists('scores');
  }
};
