<template>
  <v-app>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5" class="left">
        <v-flex lg6>
          <a href="/">
            <img class="logo-header" src="~/assets/img/logo_color.png" />
          </a>
        </v-flex>
        <v-row>
          <v-col cols="12" class="align-center separator">
            <h2>
              <strong>
                Masuk dengan
              </strong>
            </h2>
            <h2>
              <strong>
                Email Kamu
              </strong>
            </h2>
            <form action class="header-form">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div class="input-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>
              <strong>
                <v-btn id="btnSignUp" class="btn btn-primary btn-login">
                  Sign In</v-btn
                >
              </strong>
            </form>
            <div class="bottom-text">
              <p>Belum punya akun? <a href="">Sign Up Di sini</a></p>
              <a href="/">Back to Home</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7" class="right">
      </v-col>
    </v-row>
  </v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Muli:400,700,800&display=swap');
.right {
  background-color: #c1f5e4;
}
.logo-header {
  height: 60px;
  margin: 15px 0px 15px 50px;
}
.separator {
  padding-top: 140px;
}
h2 {
  color: #23573f;
  font-family: 'Muli', sans-serif;
  font-weight: 800;
}
.form-control {
  border-color: #ff7a76;
  border-radius: 20px;
  margin: 25px 120px 0px 120px;
  padding-left: 20px;
  font-size: 14px;
  font-family: 'SFCompactDisplay-Regular', sans-serif;
}
.btn:hover {
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
}
#btnLogin {
  /* margin: 0px 20px; */
}
.btn {
  height: 40px;
  box-shadow: none;
  border-radius: 20px;
  width: 350px;
  margin-top: 25px;
}
.btn.btn-primary {
  color: white;
  background-color: #ff7a76 !important;
  font-family: 'Muli', sans-serif;
  border-color: #ff7a76;
}
.btn-login:hover {
  text-decoration: none;
}
.bottom-text {
  margin-top: 10px;
}
p {
  font-family: 'Muli', sans-serif;
  font-size: 14px;
  margin: 0px;
}
a {
  font-family: 'Muli', sans-serif;
  font-size: 14px;
  color: #f7995c !important;
  margin: 0px;
  padding-top: 0px;
}
a:hover {
  text-decoration: none;
}

@media (max-width: 812px) {
  .form-control {
    margin: 25px 10px 0px 10px;
  }
}
</style>
