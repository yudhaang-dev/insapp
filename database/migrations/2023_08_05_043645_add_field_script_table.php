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
      Schema::table('scripts', function ($table) {
        $table->foreignId('example_id')
          ->nullable()
          ->default(null)
          ->after('category_id')
          ->constrained('scripts')
          ->cascadeOnUpdate()
          ->nullOnDelete();
        $table->boolean('example_question')->default(0)->after('type');
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::table('users', function ($table) {
        $table->dropColumn('example_id');
        $table->dropColumn('example_question');
      });;
    }
};
