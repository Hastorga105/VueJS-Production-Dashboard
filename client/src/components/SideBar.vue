<template>
    <v-card>
        <v-navigation-drawer width="200" color="#F4F5F9" app permanent expand-on-hover>
            <v-list-item class="px-2 py-5" >
                <v-list-item-title class="text-capitalize" align="center" >
                    <v-icon color="#db011c">fas fa-address-card</v-icon>Texto Titulo
                </v-list-item-title>
            </v-list-item>
            <v-list dense nav >
                <v-list-item-group v-model="selectedItem" color="red accent-2">
                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                <v-list-item-group v-if="!$store.state.isUserLoggedIn" v-model="selectedItem" color="red accent-2">
                    <v-list-item v-for="(item, i) in user" :key="i" :to="item.route">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                <v-list-item-group v-else v-model="selectedItem" color="red accent-2">
                    <v-list-item @click=logout()>
                        <v-list-item-icon>
                            <v-icon >mdi-logout-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Salir </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:appends>
            </template>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
    export default {
        data: () => ({
            selectedItem: 0,
            //drawer: null,
            items: [
                {icon: 'fas fa-home', text: 'Dashboard', route: '/'},
                {icon: 'fas fa-table', text: 'Jobs', route: '/heijunka'},
                {icon: 'fas fa-clock', text: 'Horas', route: '/horas'},
                {icon: 'fas fa-desktop', text: 'Graficas', route: '/test'},
                {icon: 'fas fa-desktop', text: 'Admin', route: '/browse'},
            ],
            user: [
                {icon: 'fas fa-home', text: 'Login', route: '/login'},
                {icon: 'fas fa-home', text: 'Register', route: '/register'},
            ]
        }),
        methods: {
            logout(){
                this.$store.dispatch('setToken', null)//afectan a la comprobacion isUserLoggedIn 
                this.$store.dispatch('setUser', null)
            }
        }
    }
</script>
<style >
div >>> .v-list a {
    text-decoration: none;
}
</style>