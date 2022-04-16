<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="Theme Region">
        <meta name="description" content="">
        <title>EKO</title>
            <link rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}">
            <link rel="stylesheet" href="{{asset('css/slidr.css')}}">
            <link rel="stylesheet" href="{{asset('css/main.css')}}">
            <link rel="stylesheet" href="{{asset('css/ourteam.css')}}">
            <link id="preset" rel="stylesheet" href="{{asset('css/presets/preset1.css')}}">
            <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
            <link rel="icon" href="{{asset('images/favicon.png')}}" sizes="16x16" type="image/png">
            <link rel="stylesheet" href="{{asset('icon/font-awesome/css/all.min.css') }}" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="{{asset('css/app.css')}}">
            <link rel="stylesheet" href="{{asset('css/newcss.css')}}">
            <link rel="stylesheet" href="{{asset('css/contact.css')}}">
            <link rel="stylesheet" href="{{asset('css/ourproject.css')}}">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
        {{-- <script src="{{asset('js/modernizr.min.js')}}"></script> --}}
    </body>
</html>

