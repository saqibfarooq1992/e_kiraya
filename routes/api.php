<?php

use Illuminate\Http\Request;


Route::group(['prefix' => 'auth'], function (){
    Route::post('register','AuthController@register');
    Route::post('login','AuthController@login');
    Route::post('reset-password-request', 'AuthController@resetPasswordRequest');
    Route::post('reset-password', 'AuthController@resetPassword');
    Route::resource('/properties' , 'PropertyController');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('profile', 'AuthController@profile');
        Route::get('logout','AuthController@logout');
        Route::resource('suspensions', 'SuspensionsController');

    });
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/change-password', 'UserController@changePassword');
    Route::put('/update-profile', 'UserController@updateProfile');
    Route::post('/update-image', 'UserController@updateProfile');
    Route::resource('user_profiles', 'UserProfileController');
    Route::get('/user-data', 'UserProfileController@userData');
    Route::post('/user-profiles', 'UserProfileController@userProfile');
    Route::get('/get-properties-admin' , 'PropertyController@getProperty');


    // user access
    Route::group(['middleware' => 'scope:user'], function() {

    });

    // Admin access
    Route::group(['middleware' => 'scope:admin'], function() {
    Route::resource('/cities','CityController');
    Route::get('/get-property-admin' , 'AdminController@Property');
    Route::post('/search-react-admin' , 'AdminController@react');
    Route::get('/total-un-paid-rent-admin' , 'AdminController@unPaidRent');
    Route::get('/total-paid-rent-admin' , 'AdminController@TotalPaidRent');
    Route::get('/total-rent-admin' , 'AdminController@totalRent');
    Route::resource('/blogs', 'BlogController');
    Route::post('/search-cities','CityController@search');

    // users routes
    Route::resource('/users' , 'UserController');
    Route::post('/users/{id}','UserController@approved');
    Route::get('/all-users' , 'UserController@allusers');
    Route::post('/search-user','UserController@search');
    Route::get('/get-all-landlord-admin/{id}' , 'UserController@getLandlord');
    Route::put('/update-profile-admin/{id}', 'UserController@updateLandlordProfile');

    // front pages
    Route::resource('/abouts','AboutController');
    Route::resource('/headers' , 'HeaderController');
    Route::resource('/footers' , 'FooterController');

    // sectors
    Route::resource('/sectors' , 'SectorController');
    Route::post('/search-sectors-admin','SectorController@search');
    Route::get('/sectos', 'PropertyController@getsectors');

    // property rules
    Route::resource('/rules' , 'RuleController');
    Route::post('/search-rules' , 'RuleController@search');

    // property type
    Route::resource('/propertytypes','PropertytypeController');
    Route::post('/search-property-type' , 'PropertytypeController@search');

    // managers
    Route::resource('/managers' , 'ManagerController');
    Route::resource('/area_managers','AreaManagerController');
    Route::post('/get-managers-data-admin/{id}' , 'AreaManagerController@getManagerData');
    Route::get('/get-area-admin' , 'AreaManagerController@areaManager');
    Route::get('/get-tenant' ,  'ReservedController@areaManager');
    Route::get('/get-All-Favourited-Property' , 'AdminController@getFavourited');


    // area Employee
    Route::resource('/area_employees','AreaEmployeeController');
    Route::get('/get-employees' , 'ManagerController@getEmployee');
    Route::post('/get-employees-data-admin/{id}' , 'AreaEmployeeController@getEmployeeData');


    // property Routes
    Route::post('/property-approved/{id}' , 'PropertyController@approved' );
    Route::post('/property-hot/{id}' , 'PropertyController@hotProperty' );
    Route::post('/search-reserved-property','AdminController@searchReservedProperty');
    Route::post('/search-all-properties-admin/{id}' , 'AdminController@searchProperties');
    Route::post('/search-sectors/{id}' , 'AdminController@searchSectors');
    Route::post('/search-property-admin' , 'AdminController@searchProperty');
    Route::post('/property-un-paid-rent-admin/{id}' , 'PropertyController@unpaid');
    Route::post('/property-reservation/{id}' , 'PropertyController@reservation' );
    Route::post('/search-properties-admin' , 'AdminController@searchInvoiceProperty');
    Route::get('/get-pending-property-rent-admin' , 'AdminController@unPaidRent' );
    Route::post('/suspended-property/{id}' , 'PropertyController@suspendedProperty');
    Route::get('/get-all-properties/{id}', 'PropertyController@getAllProperty');

    // Tenants
    Route::post('/get-tenant-data-admin/{id}' , 'AreaManagerController@getTenantData');
    // Route::resource('suspensions', 'SuspensionsController');
    Route::resource('tenants', 'TenantController');




    });

    // manager route
    Route::group(['middleware' => 'scope:manager'],function(){
    Route::get('/show-all-reserved-property-manager' , 'AdminController@ShowAllReserved');
    Route::get('/get-all-properties-manager/{id}', 'PropertyController@getAllProperty');
    Route::get('/get-pendding-property' , 'AdminController@penddingRentProperty');
    Route::resource('/employees', 'EmployeeController');

    // Route::resource('/area_employees', 'AreaEmployeeController');

    Route::post('/property-approved-manager/{id}' , 'PropertyController@approved' );
    Route::get('/pending-property-manager' , 'AdminController@penddingProperty');
    Route::get('/get-properties-manager' , 'ManagerController@getManagerProperty');
    Route::get('/get-All-Favourited-Property-manager' , 'AdminController@ShowAllFavourited');
    Route::post('/search-Favorited-properties' , 'AdminController@search');
    Route::get('/commented-property' , 'ManagerController@commentedProperty');
    Route::get('/get-commented-property-count' , 'ManagerController@commentedPropertyCount');

    // Route::get('/get-employees' , 'ManagerController@getEmployee');

    Route::post('/send-employee','ManagerController@sendEmployee');
    Route::post('/property-hot-manager/{id}' , 'PropertyController@hotProperty' );
    Route::get('/get-engaged-property-manager' , 'ManagerController@getEngagedProperty');
    Route::get('/get-favourited-property' , 'ManagerController@favouriteProperty');
    Route::get('/paid-rent-property' , 'ManagerController@Totalpaidrentlist');
    Route::get('/get-managers' , 'AreaManagerController@getManagerData');
    Route::get('/get-area-managers-data' , 'AreaManagerController@areaManager');
    Route::get('/get-area-employee-data' , 'AreaEmployeeController@areaEmployee');


    });

    // Employee Route
    Route::group(['middleware' => 'scope:employee'],function(){
    Route::get('/get-property-for-employee' , 'EmployeeController@getPropertyEmployee');
    Route::post('/property-approved-employee/{id}' , 'PropertyController@approved' );
    Route::get('/get-old-property-for-employee' , 'EmployeeController@getOldPropertyEmployee');
    Route::get('/pending-property-employee' , 'AdminController@penddingProperty');
    Route::get('/all-latest-property-count-admin' , 'EmployeeController@latestProperty');
    Route::get('/get-commented-property' , 'EmployeeController@commentedProperty');
    Route::get('/all-latest-property-count' , 'EmployeeController@latestProperty');
    Route::post('/property-hot-employee/{id}' , 'PropertyController@hotProperty' );
    Route::get('/engaged-properties-employee', 'ReservedController@engagedProperty');

    });
    // Csr Route
    Route::group(['middleware' => 'scope:csr'],function(){
            Route::post('/property-approved-csr/{id}' , 'PropertyController@approved' );
            Route::post('/search-engaged-property','ReservedController@search');
            Route::get('/pending-property-csr' , 'AdminController@penddingProperty');
            Route::post('/search-properties-csr' , 'AdminController@searchProperties');
            Route::get('/reserved-property-csr', 'ReservedController@reservedCsr');
            Route::post('/property-hot-csr/{id}' , 'PropertyController@hotProperty');
            Route::post('/property-un-paid-rent-csr/{id}' , 'PropertyController@unpaid');
            Route::get('/all-property-rent' , 'PropertyController@allRent');
            Route::get('/engaged-property-csr' , 'ReservedController@engagedCsr');
            Route::get('/paid-property-csr' , 'PropertyController@paidProperty');
            Route::get('/un-paid-property-csr' , 'PropertyController@UnpaidProperty');
            Route::post('/get-managers-data-csr/{id}' , 'AreaManagerController@getManagerData');
            Route::get('/get-area-managers' , 'AreaManagerController@areaManager');
            Route::get('/get-all-landlord-csr/{id}' , 'UserController@getLandlord');
            Route::post('/search-all-properties-csr/{id}' , 'AdminController@searchProperties');

    });

    // Landlord Route
    Route::group(['middleware' => 'scope:landloard'],function(){
            Route::get('/get-properties-landlord' , 'PropertyController@getProperty');
            Route::post('/search-properties-landlord-invoice' , 'AdminController@searchInvoiceProperty');
            Route::get('/show-all-rent-landlord' , 'ManagerController@TotalRent');
            Route::get('/get-property-landlord' , 'AdminController@Property');
            Route::post('/search-properties-landlord' , 'AdminController@searchProperty');
            Route::post('/search-react-landlord' , 'AdminController@react');
            Route::get('/get-all-landlord/{id}' , 'UserController@getLandlord');
            Route::get('/get-invoice-data/{id}', 'PropertyController@getAllReservedProperty');
            Route::post('/property-un-paid-rent-landlord/{id}' , 'PropertyController@unpaid');
            Route::resource('suspensions', 'SuspensionsController');



    });
    // Tenant Route
        Route::group(['middleware' => 'scope:tenant'],function(){
                Route::get('/reserved-property-list', 'ReservedController@reservedTenant');
                Route::get('/get-All-Favourited-Property-tenant' , 'AdminController@getFavourited');
                Route::get('/get-all-liked-property-tenant' , 'AdminController@getLiked');
                Route::get('/get-all-engaged-property', 'AdminController@getEngaged');
                Route::get('/show-all-rent-tenant' , 'AdminController@getRent');

    });


});

Route::resource('/subscribers', 'SubscriberController');
Route::get('/get-blogs' , 'MainController@blog');
Route::post('recommended-properties/{id}','MainController@recommendedProperty');
Route::post('/send-manager' , 'ManagerController@sendManager');
Route::post('/send-employee-admin' , 'ManagerController@sendEmployee');
Route::post('/get-managers' , 'ManagerController@getManager');


Route::get('/get-commented-property-count' , 'ManagerController@commentedPropertyCount');
Route::get('/get-notification-commented', 'NotificationController@commentedPropertyNotification');
Route::get('/get-notification-property' , 'NotificationController@approvedProperty' );
Route::get('/get-pending-property', 'NotificationController@newProperty');
Route::resource('/contacts', 'ContactController');
Route::get('/headers' , 'MainController@header');


Route::get('/get-property-hot' , 'MainController@hotProperty');
Route::post('genrate-invoice','InvoiceController@invoice');
Route::post('/search-engaged-property','ReservedController@search');
Route::get('/get-cities','MainController@index');
Route::post('/search-renter-invoice','InvoiceController@search');
Route::post('/search-landlord-invoice','LandlordController@search');


Route::resource('/advertisement' , 'AdvertisementController');
Route::get('/about-us','MainController@about');
Route::resource('/faqs','FaqController');
Route::get('/faqs','MainController@faq');
Route::post('/search-faq','FaqController@search');
Route::get('/property' , 'PropertyController@getprotype');



Route::get('/cities' , 'PropertyController@getcity');
Route::resource('/properties' , 'PropertyController');
Route::get('get-sectors' , 'PropertyController@getsectors');
Route::get('get-sector' , 'PropertyController@getsector');


Route::get('get-sectors-update' , 'PropertyController@getsectorsupdate');


Route::post('/search-property','MainController@search');

Route::get('/rules' , 'PropertyController@getrules');


Route::resource('/advertisements' , 'AdvertisementController');

Route::get('/get-pro' , 'MainController@getproperty');


Route::get('/get-properties-front' , 'MainController@getFrontProperties');

Route::get('/get-myads', 'MainController@myproperty');

Route::post('/property-paid-rent/{id}' , 'PropertyController@paidRent' );

Route::post('favourite','PropertyController@favorite');

Route::post('un-favourite','PropertyController@unFavorite');

Route::post('like','PropertyController@like');

Route::post('un-like','PropertyController@unLike');

Route::get('/get-favourite-properties' , 'MainController@getFavourite');

Route::resource('/get-notification', 'NotificationController');

Route::post('/reload/{id}' , 'NotificationController@reload' );

Route::post('/properties/{id}' , 'PropertyController@seen' );

Route::get('/get-details', 'MainController@detail');

Route::resource('/reserveds', 'ReservedController');


Route::get('/get-user' , 'PropertyController@getuser');


Route::get('/get-properties' , 'PropertyController@getProperty');

Route::get('/get-renter' , 'UserController@getRenter');

Route::get('/getLandloard' , 'UserController@getLandloard');

Route::get('/get-managers' , 'ManagerController@manager');

Route::get('/get-employee' , 'ManagerController@employee');


Route::get('/get-sector' , 'ManagerController@sector');

Route::get('/get-employee' , 'UserController@employee');

Route::get('get-property-details/{slug}' , 'MainController@propertyDetail');


Route::get('/pending-property-count' , 'AdminController@pendingCount');

Route::get('/approved-property-count' , 'AdminController@approvedCount');

Route::get('/total-property-count' , 'AdminController@totalCount');

Route::get('/total-notification-count' , 'AdminController@totalPropertyCount');

// Route::get('/total-Renter-count' , 'AdminController@totalRenterCount');

// Route::get('/total-Landloard-count' , 'AdminController@totalLandloardCount');

// Route::get('/total-reserved-count' , 'AdminController@totalReservedCount');

// Route::get('/total-favourited-count' , 'AdminController@totalfavouritedCount');

// Route::get('/total-employee-count' , 'AdminController@totalEmployeeCount');

// Route::get('/total-manager-count' , 'AdminController@totalManagerCount');

// Route::get('/total-csr-count' , 'AdminController@totalCsrCount');

// Route::get('/total-property' , 'AdminController@allProperty');

// Route::get('/total-pending-property' , 'AdminController@penddingProperty');

// Route::get('/total-approved-property' , 'AdminController@ApprovedProperty');




// Route::get('/get-csr-account' , 'UserController@getCsr');

// Route::get('/property-count-manager' , 'ManagerController@totalPropertyCount');

// Route::get('/reserved-count' , 'ManagerController@totalReservedCount');

// Route::get('/pending-count' , 'ManagerController@pendingCount');

Route::get('/paid-rent' , 'ManagerController@paidRent');

Route::get('/get-Favourited-Property' , 'ManagerController@ShowAllFavourited');

Route::get('/show-all-rent' , 'ManagerController@TotalRent');

Route::get('/property-count' , 'CsrController@TotalProperty');

Route::get('/reserved-property-count' , 'CsrController@TotalReservedProperty');

Route::get('/pendding-property-count' , 'CsrController@TotalPenddingProperty');

Route::get('/pendding-rent' , 'ManagerController@penddingRent');

Route::get('/running-property' , 'ManagerController@runningProperty');

Route::post('/property-running/{id}' , 'PropertyController@propertyRunning' );

Route::get('/running-property-count' , 'CsrController@TotalRunningProperty');

Route::get('/running-favourited-count' , 'CsrController@TotalFavouritedProperty');

Route::get('/property-rent-count' , 'CsrController@TotalPropertyRent');

Route::get('/paid-rent-count' , 'CsrController@TotalPaidRent');

Route::get('/pendding-rent-count' , 'CsrController@TotalPenddingRent');

Route::get('/total-paid-rent' , 'AdminController@TotalPaidRent');

Route::get('/total-pendding-rent' , 'AdminController@TotalPenddingRent');

Route::get('/get-paid-rent-list' , 'ManagerController@Totalpaidrentlist');

Route::get('/get-favourited-list' , 'CsrController@Favouritedlist');

Route::get('/get-pendding-rent-list-for-employee' , 'EmployeeController@PendingRentList');


Route::get('/all-old-property' , 'EmployeeController@oldProperty');

Route::get('/all-paid-property' , 'EmployeeController@paidProperty');

Route::get('/all-pendding-property' , 'EmployeeController@penddingProperty');

Route::get('/get-total-property' , 'EmployeeController@totalProperty');


Route::get('/total-reserved' , 'LandloardController@totalReserve');

Route::get('/get-total-pending-property' , 'LandloardController@totalPendingProperty');

Route::get('/total-favourited-property' , 'LandloardController@totalFavoriteProperty');


Route::get('/total-paid-rent' , 'LandloardController@paidRent');

Route::get('/total-un-paid-rent' , 'AdminController@unPaidRent');



Route::get('/get-reserved-property-landloard' , 'LandloardController@ReservedProperty');


Route::get('/get-renty-data', 'InvoiceController@getRenty');

Route::get('/get-renter-property', 'InvoiceController@getRenterProperty');

Route::get('/get-total-rent', 'InvoiceController@getTotalRent');

Route::resource('/renterinvoices', 'RenterinvoiceController');

Route::get('/get-renter-property-type', 'RenterinvoiceController@getProperty');

Route::get('/get-property-type', 'LandlordinvoiceController@getPropertype');

Route::get('/get-landlord-data', 'LandlordinvoiceController@getLandlord');

Route::get('/get-property-invoice/{id}', 'InvoiceController@getProperty');

Route::get('/get-all-properties/{id}', 'PropertyController@getAllProperty');

Route::get('/get-property-front', 'MainController@getProperties');

Route::get('/get-landlord-property-type', 'LandlordinvoiceController@getPropertype');

Route::get('/get-landlord-property', 'LandlordinvoiceController@getProperty');

Route::resource('/landlordinvoices', 'LandlordinvoiceController');

Route::get('/get-landlord-property-invoice/{id}', 'LandlordinvoiceController@getlanlordProperty');


Route::get('/get-cities-front' , 'MainController@getCity');

Route::get('/get-sector-front' , 'MainController@getSector');


//fornt Route
Route::get('/get-popular-properties','MainController@getPopularProperty');

Route::resource('/leaseterminations', 'LeaseterminationController');

Route::get('/get-user-notifcation', 'LeaseterminationController@getUserData');

Route::get('/get-property-type' , 'PropertyController@getprotype');

Route::post('/re-post/{id}' , 'LeaseterminationController@repost' );

Route::get('/get-pending-property-rent' , 'LandloardController@getUnPaidRent' );

Route::get('/get-paid-rent-list-for-employee' , 'EmployeeController@PaidRentList');

Route::get('/get-pendding-property-list-for-employee' , 'EmployeeController@pendingProperty');

Route::get('/get-reserved-property-list-for-employee' , 'EmployeeController@ReservedProperty');

Route::get('/get-engaged-property' , 'LandloardController@engaged' );

Route::get('/get-commented-property-manager' , 'ManagerController@getProperty' );

Route::post('/property-forword/{id}' , 'CsrController@forwardProperty' );

Route::put('/update-properties/{id}' , 'ManagerController@assignProperty' );

Route::post('/visit-property','MainController@visitProperty');

Route::post('/top-property','MainController@topProperty');

Route::post('/property-reserved-update' , 'MainController@updateReserved');
































































