<?php
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
Route::get('/config-cache', function() {
    $exitCode = Artisan::call('config:clear');
    return 'Config cache cleared';
});

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    return 'Application cache cleared';
});
Route::get('/storage-link', function() {
    $exitCode = Artisan::call('storage:link');
    return 'Storaged linked ';
});
Route::get('/addWatermark', function()
{
    $img = Image::make(public_path('images/main.png'));
   
    /* insert watermark at bottom-right corner with 10px offset */
    $img->insert(public_path('images/logo2.png'), 'bottom-right', 10, 10);
   
    $img->save(public_path('images/main-new.png')); 
    return 'Add Water Mark';
});
