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
    Schema::create('question_discussions', function (Blueprint $table) {
      $table->id();
      $table->foreignId('script_id')
        ->nullable()
        ->default(null)
        ->constrained('scripts')
        ->cascadeOnUpdate()
        ->nullOnDelete();
      $table->foreignId('question_id')
        ->nullable()
        ->default(null)
        ->constrained('questions')
        ->cascadeOnUpdate()
        ->nullOnDelete();
      $table->text('content');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('question_discussions');
  }
};
