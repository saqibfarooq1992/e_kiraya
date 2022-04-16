<template>
    <main>
        <Header />
        <section>
          <div class="main-container">
              <div class="breadcrumb-section container" style="padding-top:70px">
                      <ol class="breadcrumb">
                          <li><a href="index.html">Home</a></li>
                          <li>Privacy Policy</li>
                      </ol>
            </div>
          </div>
       </section>
         <section class="HowEkoWorks">
           <div class="container">
            <div class="howekoworkscontent border">
                  <h3 class="text-center font-weight-bold bg-light p-3">Privacy Policy</h3>
                  <hr>
                  <span class="text-danger float-right">Last Updated : 20 july,2020</span>
                  <h4 class="mt-3 text-success">Cookies</h4>
                  <p>Cookies are created when you use your browser to visit a website, to keep track of yourmovements within the site, help you resume where you left off, remember your registered login,theme selection, preferences, and other customization functions. Cookies also help in improvingthe use of E-Kiraya Online. Declining cookies may affect the performance of the site and youmay not be able to view certain features available at the site.</p>
                  <h4 class="text-success">Access of Information</h4>
                  <p>EKO will collect and access your personal information like your name, contact number, email address, postal code, and property details. For EKO to provide you with the best services, please make sure that the information you are providing is correct and not misleading. If in case your information changes, please update that information in your EKO account as well.</p>
                  <h4 class="text-success">Security</h4>
                  <p>Our servers store your personal information. Any information given by you is treated as an asset that is protected and by using substantial tools (physical security, encryption, passwords, etc.) your personal information is also secured against any unauthorized disclosure, access, and breach. Moreover, we have specifically coded to protect your privacy, yet we do not guarantee that your private communications and personal information will always remain private and secure.</p>
                  <h4 class="text-success">Account Protection</h4>
                  <p>To protect your EKO account, do not share your account details with anyone (i.e. Credentials, Personal Information, etc.) If you lose control of your password and account details, immediately notify EKO, so that we can take proper measures to protect your account. In case you share your password with others, you are responsible for all the actions taken in your account.</p>
                  <p>For protecting your password, make sure that you use a strong password, (i.e. use both lower- and upper-case letter, numeric, and special characters)</p>
                  <h4 class="text-success">Your Rights</h4>
                  <p>You have all the right to access your personal data at any time. You also have the right to ask EKO to stop using your personal data for marketing purposes</p>
                  <h4 class="text-success">Conflict Resolution/Governing Law</h4>
                  <p>If there is any conflict between E-Kiraya Online and its user, that conflict will be dealt through arbitration under the Arbitration Act, 1940. </p>
                  <h4 class="text-success">General</h4>
                  <p>These policies and terms may change with time. To check the latest polices and terms, visit this page frequently.</p>
            </div>
        </div>
    </section>
        <Footer />
    </main>
</template>
<script>
import Header from '../../components/user/Header.vue';
import Footer from '../../components/user/Footer.vue';
export default {
    name: "Welcome",
    components: {
        Header,
        Footer
  }
}
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');
    .main-container{
    background-color:#38b16e ;
    background-image: linear-gradient(to right,#42B45D,#20AB94);
    width: 100%;
    height:300px;
}
.HowEkoWorks{
  margin-top:50px;
  font-family: 'Lato', sans-serif;
  margin-bottom:50px;
}
.howekoworkscontent h4{
  font-family: 'Lato', sans-serif;
}
.howekoworkscontent li {
  list-style-type: none;
  position: relative;
  padding-left: 10px;
}
.howekoworkscontent li:before {
  content: "\25BA \0020";
  font-size: 10px;
  position: absolute;
  top: 5px;
  left: -10px;
}
</style>
