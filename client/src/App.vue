<template>
  <v-app>
    <!--<page-header/>-->
    <SideBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
import PageHeader from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style >
#app {
  text-align: center;
}
table.v-table thead th {
      font-size: 40px !important;

 }
</style>
