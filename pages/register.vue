<template>
  <v-app>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
        <v-row>
          <img class="logo-header" src="~/assets/img/logo_color.png" />
        </v-row>
        <v-row align="center">
          <v-card-text class="align-center form-register">
            <h1>
              Daftarkan <br />
              Diri Kamu
            </h1>

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
              <v-btn id="btnRegister" dark block type="submit">Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="7"
        lg="7"
        xl="7"
        class="align-center right-side"
      >
        <img src="~/assets/img/login-img.png" alt="" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  head() {
    return {
      title: 'Register'
    }
  },
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
            pattern.test(value) || '5-10 karakter, kombinasi huruf dan angka.'
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
.logo-header {
  height: 60px;
  margin: 10px 40px;
}
.form-register {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
}
.form-register .v-input__slot {
  border: #f07875 2px solid;
  box-shadow: none !important;
  border-radius: 24px;
  height: 36px;
  font-size: 14px;
}
.form-register h1 {
  font-family: 'Muli', sans-serif;
  font-weight: 900;
  color: #23573e;
  margin-bottom: 20px;
}
.form-register #btnRegister {
  background-color: #f07875;
  height: 48px;
  border-radius: 24px;
  box-shadow: none;
}
.right-side {
  background-color: #c1f5e4;
}
.right-side img {
  margin-top: 18%;
}
</style>
