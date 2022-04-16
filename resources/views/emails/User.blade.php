

 <div class="row">
    <div class="col-md-4 mx-auto shadow bg-white px-3 pt-3">
        <img src="{{asset('../images/logo2.png ')}}"  width="80px" height="50px" alt="logo">
        <h4 class="text-center confirmation"> New User Register </h4>
        <p class="message">You have received below enquiry from {{($name)}}</p>
        <p class="text-dark message">Subject: <strong>{{$user_query}}<strong></p>
        <p class="text-center text-success url">Regards: Eko.com.pk </p>
    </div>
</div>
<style>
img{
    display: block;
    margin: auto;
}
.confirmation{
    color: brown;
    text-align: center
}
.url{
    color: green;
    text-align: center;
}
.message{
    text-align: center;
}
</style>
