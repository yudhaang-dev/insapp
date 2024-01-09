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
    Schema::create('answers', function (Blueprint $table) {
      $table->id();
      $table->foreignId('participant_section_id')
        ->constrained('participant_sections')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->foreignId('question_id')
        ->constrained('questions')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->tinyInteger('number')->default(1);
      $table->decimal('duration_used', 6, 0)->default(0);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('answers');
  }
};
