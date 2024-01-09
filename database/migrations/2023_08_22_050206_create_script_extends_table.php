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
    Schema::create('script_extends', function (Blueprint $table) {
      $table->id();
      $table->foreignId('script_id')
        ->nullable()
        ->default(null)
        ->constrained('scripts')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->string('description');
      $table->decimal('duration', 7, 0)->default(0);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('script_extends');
  }
};
