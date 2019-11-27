<template>
  <v-app>
    <v-row align="center">
      <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5"
        ><v-card>
          <v-toolbar dark color="indigo darken-4">
            <v-spacer></v-spacer>
            <div id="title_sign_up" class="title">Registrasi di Vinter</div>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" @submit="regist">
              <v-text-field
                id="name"
                v-model="name"
                :rules="[rules.required, rules.name]"
                solo
                label="Nama"
                type="text"
              ></v-text-field>
              <v-text-field
                id="email"
                v-model="email"
                :rules="[rules.required, rules.email]"
                solo
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="[rules.required, rules.password]"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                solo
                label="Password"
              ></v-text-field>
              <v-text-field
                id="passwordConfirm"
                v-model="passwordConfirm"
                :append-icon="showPasswordConfirm ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="[rules.required, rules.isSame, rules.password]"
                :type="showPasswordConfirm ? 'text' : 'password'"
                @click:append="showPasswordConfirm = !showPasswordConfirm"
                solo
                label="Confirm Password"
              ></v-text-field>
              <p id="formErrorPar" v-if="formError" class="error--text">
                <i id="formError">{{ formError }}</i>
              </p>
              <v-btn
                id="btnRegister"
                dark
                block
                color="indigo darken-4"
                type="submit"
                >Sign Up</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card></v-col
      >
      <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
        <div
          class="m-login-left float-lg-right d-lg-flex align-items-lg-center"
        >
          <div class="m-login-img text-center w-100">
            <div id="lottieLogin" class="lottie-animation"></div>
          </div>
        </div>
        <div
          class="m-login-right float-lg-left d-lg-flex align-items-lg-center"
        >
          <a href="index.html" class="m-login-logo"
            ><img src="assets/img/logo_navbar@2x.png" width="118" alt=""
          /></a>
          <div class="m-login-content text-center w-100">
            <h1>Login with your <br />Alterra Email</h1>
            <button class="btn btn-primary">
              <img src="assets/img/google-plus@2x.png" alt="" width="21" />
              Login with Email
            </button>
            <a href="" class="login-back">Back to Home</a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      name: '',
      changeForm: false,
      email: '',
      password: '',
      passwordConfirm: '',
      formError: null,
      showPassword: false,
      showPasswordConfirm: false,
      rules: {
        required: (value) => !!value || 'Required.',
        name: (value) => {
          const pattern = /^[\w\W]{4,255}$/
          return pattern.test(value) || 'Min 4 characters'
        },
        password: (value) => {
          const pattern = /^(?=.{5,10}$)(?=.*[a-zA-z])(?=.*[0-9]).*$/
          return (
            pattern.test(value) ||
            'Password perlu berisi 5-10 karakter dengan kombinasi huruf dan angka.'
          )
        },
        isSame: (value) => {
          return this.password === value || 'Incorrect Password.'
        },
        email: (value) => {
          const pattern = /^([a-zA-Z0-9]+)([._-]??[a-zA-Z0-9]+)+@([a-zA-Z0-9]+)([.-]??[a-zA-Z0-9]+)+([.]{1}[a-zA-Z0-9]{1,3})$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        phoneNumber: (value) => {
          const pattern = /^08[0-9]{9,13}$/
          return pattern.test(value) || 'Invalid Phone Number.'
        }
      }
    }
  },
  computed: {},
  methods: {
    async regist(e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        await this.$store
          .dispatch('register/regist', {
            name: this.name,
            email: this.email,
            password: this.password
          })
          .then(() => {
            Swal.fire('Registrasi berhasil. Selamat Datang di Vinter.')
            this.formError = null
            this.$router.push('/')
          })
          .catch((err) => {
            this.formError = err
          })
      }
    }
  }
}
</script>

<style>
/* ---LOGIN--- */
.m-login {
  position: relative;
}
.m-login .m-login-left {
  background-color: #f4f7fc;
  text-align: center;
  padding: 20px 0;
}
.m-login .m-login-left img {
  max-width: 70%;
  width: 560px;
}
.m-login .m-login-right {
  position: relative;
  padding-top: 100px;
  padding-bottom: 50px;
}
.m-login .m-login-right .m-login-logo {
  position: absolute;
  top: 30px;
  left: 30px;
  display: table;
}
.m-login .m-login-right .m-login-content h1 {
  font-family: 'Muli', sans-serif;
  font-weight: 800;
  font-size: 35px;
}
.m-login .m-login-right .m-login-content .btn {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  border-radius: 20px;
  width: 250px;
  display: table;
  margin: 20px auto;
  font-size: 12px;
  font-family: 'SFCompactDisplay-Bold', sans-serif;
  padding: 10px;
}
.m-login .m-login-right .m-login-content .btn > img {
  margin-right: 10px;
}
.m-login .m-login-right .m-login-content .login-back {
  color: #f47522;
  font-size: 14px;
  text-decoration: underline;
}
@media (min-width: 992px) {
  .m-login {
    height: 100vh;
    width: 100%;
    text-align: center;
  }
  .m-login .m-login-left {
    height: 100%;
    width: 60%;
    padding: 0;
  }
  .m-login .m-login-right {
    height: 100%;
    width: 40%;
    padding: 0;
  }
}
</style>
