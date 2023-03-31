<template>
    <div class="Home">
        <v-toolbar flat>
            <v-toolbar-title>
                <span class="caption">Overview Dashboard</span><br>Texto temporal
            </v-toolbar-title>
            <v-app-bar flat color="rgba(0,0,0,0)" class="ml-16">
                <v-tabs v-model="tab" color="#db011c" slider-size="3" > 
                    <v-tab>
                        <v-btn fab color="#E6B89C" elevation="0" >
                            1
                        </v-btn>
                    </v-tab>
                    <v-tab>
                        <v-btn fab color="red lighten-4" elevation="0">
                            2
                        </v-btn>
                    </v-tab>
                    <v-tab>
                        <v-btn fab color="green lighten-4" elevation="0">
                           3
                        </v-btn>
                    </v-tab>
                    <v-tab>
                        <v-btn fab color="blue lighten-4" elevation="0">
                            4
                        </v-btn>
                    </v-tab>
                    <v-tab>
                        <v-btn fab color="grey lighten-4" elevation="0">
                            5
                        </v-btn>
                    </v-tab>
                </v-tabs>
            </v-app-bar>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>far fa-bell</v-icon>
            </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container class="mt-5">
            <v-row>
                <!-------------v-cards informacion principal------------------------->
                
                <v-col cols="12" sm="12" md="2">
                        <v-card color="#db011c" flat>
                            <v-row align="center" justify="center">
                                <v-col>  
                                    <div class="v-text2" tile>
                                        A
                                    </div>
                                    <div class="v-text">
                                            Turno
                                    </div>
                                </v-col>     
                            </v-row>
                        </v-card>
                </v-col>

                <v-col cols="12" sm="12" md="2">
                    <v-hover>
                        <v-card color="#403F4C" flat>
                            <v-row align="center" justify="center">
                                <v-col>  
                                    <div class="v-text2" tile>
                                        {{total}}
                                    </div>
                                    <div class="v-text">
                                            Plan
                                    </div>
                                </v-col>
                                        
                            </v-row>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12" sm="12"  md="2">
                    <v-hover>
                        <v-card color="#F9DC5C" flat>
                            <v-row align="center" justify="center">
                                <v-col>  
                                    <div class="v-text2" tile>
                                        {{actual}}
                                    </div>
                                    <div class="v-text">
                                            Actual
                                    </div>
                                </v-col>
                                        
                            </v-row>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12"  sm="12" md="2">
                    <v-hover>
                        <v-card color="#3185FC" flat>
                            <v-row align="center" justify="center">
                                <v-col>  
                                    <div class="v-text2" tile>
                                        {{dif}}
                                    </div>
                                    <div class="v-text">
                                            Diferencia
                                    </div>
                                </v-col>
                                        
                            </v-row>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12" sm="12" md="2">
                    <v-hover>
                        <v-card color="#5ADBFF" flat>
                            <v-row align="center" justify="center">
                                <v-col>  
                                    <div class="v-text2" tile>
                                        67
                                    </div>
                                    <div class="v-text">
                                            Takt time
                                    </div>
                                </v-col>
                                        
                            </v-row>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12" sm="12" md="2">
                    <v-hover>
                        <v-card color="#95A3B3" flat>
                            <v-row align="center" justify="center">
                                <v-col>  
                                    <div class="v-text2" tile>
                                        60
                                    </div>
                                    <div class="v-text">
                                            Texto
                                    </div>
                                </v-col>
                                        
                            </v-row>
                        </v-card>
                    </v-hover>
                </v-col>

            </v-row>
            
            <!--v-row---------------------------------------------------->

            <v-row >
                <v-col cols="12" sm="12" lg="3">
                    <v-card>
                        <v-img
                        contain
                        class="white--text align-end"
                        :src="require('../assets/2850.png')"
                        >
                            <v-card-title><h1>Modelo: 2850</h1></v-card-title>
                        </v-img>
                    </v-card>
                </v-col> 
                <v-col cols="12" sm="12" lg="3" >
                    <v-card >
                        <v-list-item three-line>
                        <v-list-item-content >
                            <div class="mb-4 title black--text pl-0 ml-2">Porcentaje</div>
                            <v-progress-circular
                            rotate="270"
                            size="350"
                            width="110"
                            :value="perc"
                            color="#db011c"
                            >
                            <h1>{{perc}}%</h1>
                            </v-progress-circular>
                        </v-list-item-content>
                    </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" lg="6">
                    <v-card>
                        <v-app-bar dlat color="rgba(0,0,0,0)" elevation="0">
                            <v-toolbar-title class="title black--text pl-0 ml-2" >
                                Grafica
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn color="#db011c" class="white--text mr-2" @click="graficarSemana()" >Registro por horas</v-btn>
                            <!--<v-btn color="#FFD7DB" class=" mr-2" @click="graficarMes()">Mensual</v-btn>-->
                        </v-app-bar>
                        <v-sparkline
                        :labels="titulos"
                        :fill="fill"
                        :line-width="width"
                        :padding="padding"
                        :smooth="radius || false"
                        :value="datas"
                        auto-draw
                        :color="color"
                        :height= "113"
                        ></v-sparkline>
                    </v-card>
                </v-col>
                
            </v-row>
            
            <!--Prueba chartjs-->
            <!--
            <v-row>
                <v-col cols="12" sm="12" lg="3" >
                    <v-card >
                        <v-list-item three-line>
                        <v-list-item-content >
                            <div class="title black--text pl-0 ml-2">Grafica</div>
                            <Doughnut
                            :chartData= 'datos'
                            :height= "350"
                            >
                            </Doughnut>
                            
                        </v-list-item-content>
                    </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" lg="9">
                    <v-card>
                        <v-app-bar dlat color="rgba(0,0,0,0)" elevation="0">
                            <v-toolbar-title class="title black--text pl-0 ml-2" >
                                Grafica2
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-app-bar>
                        <BarChart
                        :chartData= 'datos'
                        :height= "110"
                        :options = 'options'>
                        </BarChart>
                    </v-card>
                </v-col>
            </v-row>-->

        </v-container>
    </div>
</template>
<script>
import BarChart from '../charts/Bar.js'
import Doughnut from '../charts/Donut.js'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        BarChart,
        Doughnut
    },
    data: () => ({
        tab: null,
        text: 'center',
        fill: false,
        padding: 10,
        radius: 3,
        value: [],
        svalue: [0, 6, 5, 0, 5, 10, 0,],
        mvalue: [90,50, 9, 50, 80, 50, 5, 0, 0, 1, 8, 2, 9, 0,9, 50, 80, 50, 5, 45, 9, 50, 80, 50, 5, 0, 0, 1, 8, 2,],
        labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D',],
        labels2: [],
        width: 5,
        lineCap: 'round',
        autoLineWidth: false,
        fills: false,
        color: "#db011c",
        total: 300,
        actual: 0,
        perc: 100,
        dif: 0,
        horas: [],
        titulos: [],
        datas: [],
        //chartjs datos y options
        datos: {
            labels: ['L','M','MM','J','V','S','D'],
            datasets: [{
                label: 'Datos',
                backgroundColor: [
                    '#db011c',
                    '#403F4C',
                    '#F9DC5C',
                    '#3185FC',
                    '#5ADBFF',
                    '#95A3B3',
                    '$E4B7E5'
                ],
                pointBackgroundColor: 'white',
                data: [3,4,2,6,7,5,6],
                axis: 'y',
                
            }]
        },
        options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                    }]
                },
        },
        



    }),
    methods: {
        graficarSemana() {
            this.value = this.svalue
            this.color = "#db011c"
        },
        graficarMes() {
            this.value = this.mvalue
            this.color = "#FFD7DB"
        },
        obtenerPorcentaje(){
            this.perc = ((this.actual*100)/this.total).toFixed()
            this.dif = this.total-this.actual
        },
        async fetchData(){
            axios.get(`http://localhost:8081/horas2`)//direccion de la api, aparece en services
            .then(response => {
                const data = response.data
                this.horas = data
                for (const [clave, valor] of Object.entries(this.horas)) {
                    this.titulos.push(this.horas[clave]["hora"]) 
                    this.datas.push(this.horas[clave]["cantidad"])                   
                }
            })
            .catch(e => {
                console.log(e)
            })
            //console.log(this.titulos)
            //console.log(this.datas)
            let datos = this.datas
            let labels = this.titulos
            //this.datos["datasets"][0]["data"] = datos
            //this.datos["labels"] = labels
            //console.log(this.datos)
            

        },
    },
    async mounted () {
        this.fetchData()
        this.graficarSemana()
        this.actual = this.$store.getters.getcTotal
        this.obtenerPorcentaje()
    }

}
</script>

<!--<style scoped lang="sass">
.v-card.on-hover.theme--dark
background-color : rgba(#FFF, 0.8)
>.v-card__text
color:#000
</style>-->
<style scoped>
.border {
    border-right: 1px solid grey
}
.v-text {
    font-size: 2vw;
    color: white
}
.v-text2 {
    font-size: 6vw;
    color: white;
    font-weight: bold
}
</style>
