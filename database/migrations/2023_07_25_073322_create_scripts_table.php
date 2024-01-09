<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('scripts', function (Blueprint $table) {
      $table->id();
      $table->foreignId('category_id')->nullable()->default(null)
        ->constrained('categories')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->foreignId('sub_category_id')->nullable()->default(null)
        ->constrained('sub_categories')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->string('title')->unique();
      $table->text('description')->nullable();
      $table->enum('type', ['Multiple Choice', 'Essay']);
      $table->timestamps();
    });

    Schema::create('questions', function (Blueprint $table) {
      $table->id();
      $table->foreignId('script_id')
        ->constrained('scripts')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->tinyInteger('number')->default(1);
      $table->text('sentence');
      $table->timestamps();

    });

    Schema::create('choices', function (Blueprint $table) {
      $table->id();
      $table->foreignId('question_id')
        ->constrained('questions')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
      $table->tinyInteger('number')->default(1);
      $table->char('key', 1);
      $table->text('content');
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
    Schema::dropIfExists('choices');
    Schema::dropIfExists('questions');
    Schema::dropIfExists('scripts');
  }
};
