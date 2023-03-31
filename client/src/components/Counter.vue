<template>
    <card title="Horas" color="#db011c">
        <div>
            <section class="text-3l flex justify-center content-center flex-col mx-auto text-center"></section>
            <section class="flex text-6xl justify-center content-center">
                <div no-gutters>
                    <v-card class="d-flex justify-center " flat tile>
                        <v-card tile flat class="ma-3 pa-3">
                        <h1 class="big">{{displayHours}} : 
                        {{displayMinutes}} :
                        {{displaySeconds}}
                        </h1>
                        </v-card>
                    </v-card>
                </div>
                <v-row class="d-flex justify-center">
                    <v-col cols="2">
                        <div>
                        <v-btn @click="descargar()" color="#107c41" dark>Descargar</v-btn>
                        </div>
                    </v-col>
                    <v-col cols="2"><h1>Cantidad: {{cantidad}}</h1></v-col>
                    <v-col cols="2"><h1>Total: {{cTotal}}</h1></v-col>
                </v-row>
                <v-container class="pa-5">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left medium">
                                Dia
                            </th>
                            <th class="text-left medium">
                                Hora
                            </th>
                            <th class="text-left medium">
                                Cantidad
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr 
                            class="text-left medium"
                            v-for="item in horas"
                            :key="item.id"
                            >
                            <td class="small">{{ item.dia }}</td>
                            <td class="small">{{ item.hora }}</td>
                            <td class="small">{{ item.cantidad }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                </v-container>
            </section>
        </div>
    </card>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'
import XLSX from 'xlsx'
export default {
    name: 'Counter',
    components: {
        Card
    },
    data(){
        return {
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0,
            displayDays: 0,
            horas: [ { } ],
            hora: 1,
            cantidad: 0,
            cTotal: 0,

        }
    },
    computed: {
        _seconds: () => 1000,
        _minutes(){
            return this._seconds * 60
        },
        _hours() {
            return this._minutes * 60
        },
        _days() {
            return this._hours * 24
        },
    },
    mounted() {
        
    },
    created() {
        this.fetchData()
        
    },
    methods: {
        showRemaining(){
            const timer = setInterval(() => {//Hacer esto cada 1 segundo
                const now = new Date()//Obtener La fecha y hora de hoy
                const end = new Date(now.getFullYear(), now.getMonth()+1, now.getDay(), now.getHours()+1, 0, 0, 0);//Obtener la fecha de hoy dentro de una hora
                const distance = end.getTime() - now.getTime();//Diferencia entre la hora actual y dentro de una hora
                //Convertir Date a minutos, segundos y horas
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                //Verificar si el dato es menor a 10 para mostrarlo como 00, 06, 04... en el temporizador (ej: 1 se muestra como 01, 8 -> 08, etc)
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                const mes = now.getMonth()+1 < 10 ? "0" + now.getMonth()+1 : now.getMonth()+1
                const dia = (now.getDate()+1) < 10 ? "0" + (now.getDate()+1) : (now.getDate()+1)
                const fecha = now.getFullYear() + '-' + mes + '-' + dia
                const horas = now.getHours() < 10 ? "0" + now.getHours() : now.getHours() 
                const minutos = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
                const hora = horas +":" + minutos
                //console.log((now.getDate()) +"-"+ (now.getMonth()+1) +"-"+now.getFullYear())
                //Cuando se termine la hora hacer lo siguiente
                if((hours == 0) && (minutes == 0) && (seconds == 0)){//Horas, minutos y dias == 0 para actualizar cada hora
                    console.log("llegamos a cero")
                    //this.horas.push( {dia: fecha, hora: hora, cantidad: this.cantidad})
                    clearInterval(timer)
                    
                    this.add(fecha, hora)
                }
                //console.log(fecha)
            }, 1000)
        },

        descargar(){
            var Horas = XLSX.utils.json_to_sheet(this.horas)//guardar objeto convertido a excel
            var wb = XLSX.utils.book_new() //Crear excel
            XLSX.utils.book_append_sheet(wb, Horas, 'Reporte por hora')//Agergar Hoja de excel
            XLSX.writeFile(wb, 'Reporte.xlsx') //Guardar excel
        },
        async fetchData(){
            axios.get(`http://localhost:8081/horas2`)//direccion de la api, aparece en services
            .then(response => {
                const data = response.data
                this.horas = data
                 var total = 0
                for (const [clave] of Object.entries(this.horas)) {
                        var cantidad = this.horas[clave]["cantidad"]
                        total = total + cantidad                    
                    }
                    console.log(total);
                    this.$store.commit('contTotal', total)
                    this.cTotal = total
                    console.log(this.horas)
                })
            .catch(e => {
                console.log(e.message)
            })
           
            this.cantidad = Math.floor(Math.random()*50);
            const total = this.$store.getters.getcTotal;
            this.showRemaining()
            //this.showRemaining()

        },
        async add(fecha, hora,) {
            console.log("Subiendo los datos")
            const res = await axios.post(`http://localhost:8081/horas`, {
            dia: fecha,
            hora: hora,
            cantidad: this.cantidad
            })
            this.fetchData()
            
        },
        
    }
}
</script>
<style>
.big {
    font-size: 10em;
    
}
.medium {
    font-size: 2em !important;
}
.small {
    font-size: 1em !important;
}

</style>