<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('sections', function (Blueprint $table) {
        $table->id();
        $table->foreignId('examination_id')
          ->constrained('examinations')
          ->cascadeOnUpdate()
          ->cascadeOnDelete();
        $table->foreignId('script_id')
          ->constrained('scripts')
          ->cascadeOnUpdate()
          ->cascadeOnDelete();
        $table->tinyInteger('number')->default(1);
        $table->enum('sorting_mode', ['Normal', 'Random'])->default('Normal');
        $table->boolean('control_mode')->default(false);
        $table->boolean('auto_next')->default(false);
        $table->integer('replacement_duration')->default(0);
        $table->decimal('duration', 7, 0)->default(0);
        $table->timestamps();

      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sections');
    }
};
