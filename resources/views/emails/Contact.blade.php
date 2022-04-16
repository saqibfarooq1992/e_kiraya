
<section class="reservationconfirmation">
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="formheader">
                    <h3 class="text-center formheader">Contatct Us</h3>
                </div>
                <div class="border">
                    <img src="{{asset('../images/logo2.png ')}}" class="d-block mx-auto" alt="">
                    <h4 class="text-center">Thankyou for Contact.</h4>
                    <p class="message">You have received below enquiry from {{($name)}}</p>
                    <p class="text-dark message">Subject: <strong>{{$subject}}<strong></p>
                    <p class="text-dark message">Subject: <strong>{{$user_query}}<strong></p>
                    <p class="text-center text-success url">Regards: Eko.com.pk </p>
                    <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png" class="d-block mx-auto" alt="">
                    <p class="text-center">Head Office:office 18-19 Walayat Plaza Rehmanabad,Rawalpindi</p>
                    <p class="text-center">Office Cell No:0321 1717555</p>
                </div>
            </div>
        </div>
    </div>
</section>
 {{-- <div class="row">
    <div class="col-md-4 mx-auto shadow bg-white px-3 pt-3">
        <img src="{{asset('../images/logo2.png ')}}"  width="80px" height="50px" alt="logo">
        <h4 class="text-center confirmation"> Contatct Us </h4>
        <p class="message">You have received below enquiry from {{($name)}}</p>
        <p class="text-dark message">Subject: <strong>{{$subject}}<strong></p>
        <p class="text-dark message">Subject: <strong>{{$user_query}}<strong></p>
        <p class="text-center text-success url">Regards: Eko.com.pk </p>
    </div>
</div> --}}
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
.reservationconfirmation .formheader {
            background-color: #23AC8F;
            color: white;
            padding: 10px;
        }
</style>
