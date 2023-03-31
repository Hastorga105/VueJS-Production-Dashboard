<template>
  <v-app-bar
    fixed dense
    color="#db011c"
    dark
    elevation="5"
    >
    <img 
    class="mr-3" 
    :src="require('../assets/brand.png')" 
    @click="$router.push('/')" 
    height="80"
    style="cursor: pointer"/>
    <v-spacer></v-spacer>
    <v-btn text to="browse" class="font-weight-light">
      Prod?
    </v-btn>
    <v-btn text to="login" v-if="!$store.state.isUserLoggedIn" class="font-weight-light">
      Acceder
    </v-btn>
    <v-btn text to="/register" v-if="!$store.state.isUserLoggedIn" class="font-weight-light">
      Registrarse
    </v-btn>
    <v-btn text @click="logout" to="/" v-if="$store.state.isUserLoggedIn" class="font-weight-light">
      Salir
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)//afectan a la comprobacion isUserLoggedIn 
      this.$store.dispatch('setUser', null)
    }
    }
}
</script>

<style>
</style>