<template>
<v-row>
    <v-col >
        <card title="Registro">
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 ,d4 lg4>
                    <v-card class="elevation-1 pa-3" justify-center>
                        <v-card-text>
                            <div class="align-center">
                                <h1 class="flex my-4">Registro</h1>
                            </div>
                            <v-text-field :rules="rules2" type="email" name="email" v-model="email" label="email" color="#a80116"/>
                            <v-text-field :rules="rules" type="password" name="password" v-model="password" label="password" color="#a80116" />
                            <v-btn elevation="0" block @click="register" color="#a80116" dark>Registrarse</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </card>
    </v-col>
</v-row>
    
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Card from '@/components/Card'
export default {
    components: {
        Card
    },
  data () {
    return {
        email:'',
        password:'',
        error: null,
        rules: [
            value => !!value || 'Este campo es obligatorio',
            value => (value && value.length >= 3) || 'La contraseña debe tener minimo 3 caracteres',
        ],
        rules2: [
            value => !!value || 'Este campo es obligatorio',
            value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'email invalido'
            },
        ]
    }
  },
  methods: {
      async register () {
          try {
              const response = await AuthenticationService.register({
              email: this.email,
              password: this.password,
          }) 
          this.$store.dispatch('setToken', response.data.token)//mandar token a store(de vuex)
          this.$store.dispatch('setUser', response.data.user)
          }catch (error){
              this.error = error.response.data.error
          }
          this.$router.push("/")
      }
  },

}
</script>
<style scoped>
</style>