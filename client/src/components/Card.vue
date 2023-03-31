<template>
<div>
    <v-toolbar 
    flat
    :color="color"
    dark 
    >
    <!--color="#db011c" 
    dark-->
            <v-toolbar-title >
                <br>{{title}}
            </v-toolbar-title>
            <v-app-bar flat color="rgba(0,0,0,0)" class="">
            </v-app-bar>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container>
                <!--<v-toolbar dense elevation="0" color="#db011c" dark>
                <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>-->
            <!--<v-container>-->
                <slot>
                    No slot content defined
                </slot>
            <!--</v-container>-->
        </v-container>
</div>
        
</template>
<script>
export default ({
  props: {
      title: "",
      color: ""
  },
    data() {
        return {
        }
    },

})
</script>

<style>

</style>