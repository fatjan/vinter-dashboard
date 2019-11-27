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
          <v-card-text class="align-center form-register">
            <!-- <v-col cols="12" class="align-center separator"> -->
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
            <v-form ref="form" @submit="login">
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                type="email"
                placeholder="Email"
                aria-label="Email"
                solo
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.required]"
                @click:append="showPassword = !showPassword"
                placeholder="Password"
                aria-label="Password"
                solo
              ></v-text-field>
              <p id="formErrorPar" v-if="formError" class="error--text">
                <i id="formError">{{ formError }}</i>
              </p>
              <strong>
                <v-btn
                  id="btnSignUp"
                  @click="login"
                  class="btn btn-primary btn-login"
                >
                  Sign In</v-btn
                >
              </strong>
            </v-form>
            <div class="bottom-text">
              <p>
                Belum punya akun? <a @click="toRegister">Sign Up Di sini</a>
              </p>
              <a @click="toHome">Back to Home</a>
            </div>
            <!-- </v-col> -->
          </v-card-text>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7" class="right">
      </v-col>
    </v-row>
  </v-app>
</template>

<style scoped>
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
.form-login {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
}
.form-login .v-input__slot {
  border: #f07875 2px solid;
  box-shadow: none !important;
  border-radius: 24px;
  height: 36px;
  font-size: 14px;
}
.form-login h1 {
  font-family: 'Muli', sans-serif;
  font-weight: 900;
  color: #23573e;
  margin-bottom: 20px;
}
.form-login #btnSignUp {
  background-color: #f07875;
  height: 48px;
  border-radius: 24px;
  box-shadow: none;
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
  .form-login {
    margin: 25px 10px 0px 10px;
  }
}
</style>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      formError: null,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^([a-zA-Z0-9]+)([._-]??[a-zA-Z0-9]+)+@([a-zA-Z0-9]+)([.-]??[a-zA-Z0-9]+)+([.]{1}[a-zA-Z0-9]{1,3})$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        await this.$store
          .dispatch('login/login', {
            email: this.email,
            password: this.password
          })
          .then(() => {
            Swal.fire('Login berhasil. \n Selamat Datang di Vinter.')
            this.formError = null
            this.$router.push('/dashboard')
          })
          .catch((err) => {
            console.log(err)
            this.formError = 'email / password salah'
          })
      }
    },
    toRegister() {
      this.$router.push('/register')
    },
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
