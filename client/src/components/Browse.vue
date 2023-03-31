<template>
        <div>
            <card title="Prod">
                <v-row >
                    <v-col>
                        <v-data-table
                        :headers="headers"
                        :items="datos"
                        :items-per-page="10"
                        class="elevation-1"
                        ></v-data-table>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3">
                        <v-file-input
                        accept="image/*"
                        label="File input"
                        ></v-file-input>
                    </v-col>
                    <v-col align="left" md="3">
                        <v-btn>Subir</v-btn>
                    </v-col>
                </v-row>
            </card>
        </div>
</template>
<script>
import SongsService from '@/services/SongsService'
import Card from '@/components/Card'
import axios from "axios"
export default ({
    methods: {
        async obtenerDatos(){
            this.datos = this.songs
            //console.log(this.datos)
            let data = this.datos 
            let data2 = []

                //console.log(data[arr])
                for (const [clave, valor] of Object.entries(data)) {
                //console.log(valor['persona']);
                data2.push(valor['persona'])
                } 
            console.log("Los nombres son: ")
            console.log(data2)
        },
        
        
    },
    components: {
        Card
    },
    data () {
        return {
            songs: null,
            headers: [
                {text: 'id', value: 'id',},
                {text: 'titulo', value: 'titulo' },
                {text: 'persona', value: 'persona' },
                {text: 'info', value: 'info' },
                ],
            datos: [],
            prueba: [],
                
        }
    },
    async mounted () {
        //request al backend de todos los datos de la tabla
        this.songs = (await SongsService.index()).data
        this.obtenerDatos()
        //console.log(this.headers)
    },
    //otra manera de obtener datos de una api
    /*
    created(){
        axios.get(`http://localhost:8081/browse`)//direccion de la api, aparece en services
        .then(response => {
            this.prueba = response.data
            console.log(this.prueba)
        })
        .catch(e => {
            console.log(e.message)
        })
    }*/
})
</script>

<style>

</style>
