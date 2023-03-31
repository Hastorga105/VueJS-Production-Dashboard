<template>
    <v-row>
        <v-col lg="6" sm="12">
            <v-container>
            <horizontalBar
            :chartData= 'datacollection'
            :height= "100"
            :options= 'options'>
            </horizontalBar>
        </v-container>
        </v-col>
        <v-col lg="6" sm="12">
            <BarChart
            :chartData= 'datacollection'
            :height= "100"
            :options = 'options2'>
            </BarChart>
        </v-col>
        <v-col lg="6" sm="12">
            <Doughnut
            :chartData= 'datacollection2'
            :height= "200"
            >
            </Doughnut>
        </v-col>
        <v-col lg="6" sm="12">
            <LineChart
            :chartData= 'datacollection'
            :height= "200"
            :options = 'options2'>
            >
            </LineChart>
        </v-col>
    </v-row>
        
</template>

<script>
import horizontalBar from '../charts/HorizontalBar.js'
import BarChart from '../charts/Bar.js'
import Doughnut from '../charts/Donut.js'
import LineChart from '../charts/Line.js'

import axios from "axios"

    export default {
    components: {
        horizontalBar,
        BarChart,
        Doughnut,
        LineChart,
        },
        data(){
            return {
                datacollection: {},
                datacollection2: {},
                loaded: false,
                options: {},
                options2: {},
                datos: [],
                ids: [3,5,2,3,4,6,6]

            }
        },
        mounted(){
            this.fillData()
        },
        methods: {
            fillData(){
                this.datacollection = {//datos y propiedades de la grafica charjs
                    labels: ['L','M','MM','J','V','S','D'],
                    datasets: [{
                        label: 'Datos',
                        pointRadius: 10,
                        lineTension: 0,
                        fill: false,
                        borderDash: [10, 10],
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
                        data: [0,1,2,2,3,3,4],
                        
                    }]
                },
                this.datacollection2 = {//datos y propiedades de la grafica charjs
                    labels: ['rojo','gris','amarillo','azul', 'azul bajito', 'otro gris','gris mas oscuro','Ddgdf'],
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
                        data: this.ids,
                        axis: 'y',
                        
                    }]
                },
                this.options = {//opciones charjs
                    indexAxis: 'y',
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                }
                this.options2 = {//opciones charjs
                    indexAxis: 'y',
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                        }]
                    },
                }
            },

        }
    }
</script>