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
    Schema::create('participants', function (Blueprint $table) {
      $table->id();
      $table->foreignId('examination_id')
        ->constrained('examinations')
        ->cascadeOnUpdate()
        ->restrictOnDelete();
      $table->foreignId('ticket_id')
        ->constrained('tickets')
        ->cascadeOnUpdate()
        ->restrictOnDelete();
      $table->foreignId('user_id')
        ->constrained('users')
        ->cascadeOnUpdate()
        ->restrictOnDelete();
      $table->tinyInteger('reset_count')->default(0);
      $table->timestamps();
    });

    Schema::create('participant_sections', function (Blueprint $table) {
      $table->id();
      $table->foreignId('participant_id')
        ->constrained('participants')
        ->cascadeOnUpdate()
        ->restrictOnDelete();
      $table->foreignId('section_id')
        ->constrained('sections')
        ->cascadeOnUpdate()
        ->restrictOnDelete();
      $table->enum('status', ['Ready', 'Running', 'Finish'])->default('Ready');
      $table->datetime('start_at')->nullable();
      $table->decimal('duration_used', 6, 0)->default(0);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('participant_sections');
    Schema::dropIfExists('participants');
  }
};
