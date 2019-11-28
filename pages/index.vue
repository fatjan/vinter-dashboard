<template>
  <div id="homePage">
    <div class="section home-section">
      <v-container>
        <v-layout row wrap>
          <v-flex lg6>
            <img src="~/assets/img/home-illustration.png" alt="" />
          </v-flex>
          <v-flex lg6>
            <h1>Awali Karirmu Di Sini</h1>
            <p>Vinter membantu kamu mempersiapkan karir</p>
            <p>di perusahaan impianmu</p>
            <form action class="header-form">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Silahkan masukkan email kamu"
                  aria-label="Silahkan masukkan email kamu"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button id="basic-addon2" class="btn btn-primary">
                    Mulai Magang
                  </button>
                </div>
              </div>
            </form>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="section benefit">
      <v-container>
        <v-layout row wrap>
          <v-flex lg4>
            <div class="card align-center">
              <div class="circle"></div>
              <img src="~/assets/img/problem-solving.png" alt="" />
              <h2>Real Case Problem</h2>
            </div>
          </v-flex>
          <v-flex lg4>
            <div class="card align-center">
              <div class="circle"></div>
              <img src="~/assets/img/resume.png" alt="" />
              <h2>Internship Experience</h2>
            </div>
          </v-flex>
          <v-flex lg4>
            <div class="card align-center">
              <div class="circle"></div>
              <img src="~/assets/img/policy.png" alt="" />
              <h2>Internship Certificate</h2>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<style>
#homePage p {
  font-family: 'Muli', sans-serif;
}
#homePage h1 {
  font-family: 'Muli', sans-serif;
  font-weight: 900;
  margin-bottom: 0px;
}
.section {
  padding: 40px 0;
}
.home-section {
  background-color: #c1f5e4;
  padding-bottom: 100px;
}
.home-section img {
  height: 340px;
  margin-left: 30px;
}
.home-section p {
  margin-bottom: 0px;
}
.benefit {
  margin-top: -100px;
}
.benefit .card {
  height: 250px;
  margin: 0px 50px;
  padding: 15px;
}
.benefit .circle {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #ff7a76;
}
.benefit .card img {
  margin-top: -100px;
  height: 110px;
}
.benefit .card h2 {
  margin-top: 20px;
  font-family: 'Muli', sans-serif;
  font-weight: 800;
}
.btn {
  height: 40px;
  box-shadow: none;
  border-radius: 20px;
  width: 130px;
}
.btn.btn-primary {
  color: white;
  background-color: #ff7a76 !important;
  font-family: 'Muli', sans-serif;
  border-color: #ff7a76;
}
.btn.btn-secondary {
  color: #ff7a76;
  background-color: #c1f5e4 !important;
  border: solid 2px #ff7a76;
  font-family: 'Muli', sans-serif;
}
.btn:hover {
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
}
#btnLogin {
  margin: 0px 20px;
}
.home-section .header-form {
  position: relative;
  padding-top: 20px;
}
.home-section .header-form .form-control {
  border-color: #ff7a76;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-left: 16px;
  font-size: 14px;
  font-family: 'SFCompactDisplay-Regular', sans-serif;
}
.home-section .header-form .btn {
  font-family: 'Muli', sans-serif;
  width: 140px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-right: 30px;
}
.btn-login:hover,
.btn-register:hover {
  text-decoration: none;
}
</style>
<script>
export default {
  layout: 'HomePageLayout',
  data() {
    return {
      benefit: [
        {
          pict: '~/assets/img/problem-solving.png',
          desc: 'Real Case Problem'
        },
        {
          pict: '~/assets/img/resume.png',
          desc: 'Internship Experience'
        },
        {
          pict: '~/assets/img/policy.png',
          desc: 'Internship Certificate'
        }
      ]
    }
  }
}
</script>
