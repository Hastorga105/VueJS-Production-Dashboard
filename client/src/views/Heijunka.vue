<template>
  <v-app>
    <card title="HEIJUNKA MXC002" color="#db011c">
      <!--<v-row>
        <v-col>
        <v-toolbar color="#db011c" dark >
        <v-toolbar-title><h3>HEIJUNKA MXC002</h3></v-toolbar-title>
      </v-toolbar>
      </v-col>
      </v-row>-->
      
      <!--<v-row>
        <v-col>
          <v-text-field v-model="newTask" label="Enter Task" @keyup.enter="add"></v-text-field>
        </v-col>
      </v-row>-->
      <v-row>
        <v-col class="md-2">
          <v-card color="orange darken-4" dark class="pa-3" >
            <v-row >
              <v-col >
                <v-card-title>2801</v-card-title>
                <v-card-subtitle>Informacion importante</v-card-subtitle>
              </v-col>
              <v-avatar 
              class="ma-3"
                size="125"
                tile>
                <v-img
                  class="pa-3"
                  :src="require('../assets/2801.png')"
                  />
              </v-avatar>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="md-2">
          <v-card color="green darken-1" dark class="pa-3">
            <v-row>
              <v-col>
                <v-card-title>2802</v-card-title>
                <v-card-subtitle>Informacion importante</v-card-subtitle>
                </v-col>
                <v-avatar 
                class="ma-3"
                size="125"
                tile>
                  <v-img
                  class="pa-3"
                  :src="require('../assets/2802.png')"
                  />
              </v-avatar>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="md-2">
          <v-card color="blue" dark class="pa-3">
            <v-row>
              <v-col>
                <v-card-title>2902</v-card-title>
                <v-card-subtitle>Informacion importante</v-card-subtitle>
                </v-col>
                <v-avatar 
                class="ma-3"
                size="125"
                tile>
                  <v-img
                  class="pa-3"
                  :src="require('../assets/2902.png')"
                  />
              </v-avatar>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="contar()">Terminado</v-btn>
        </v-col>
      </v-row>
      <v-row >
       
        <v-col cols="4">
          <v-card color="grey darken-3" dark class="pa-2" tile>
              <v-card-title>Siguiente</v-card-title>
              <v-row>
                  <v-col>
                    <v-card>
                      <v-card-title>JOB</v-card-title>
                      <v-card-subtitle>{{proceso[1]["id"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                      <v-card-title>Console</v-card-title>
                      <v-card-subtitle>{{proceso[1]["console"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                      <v-card-title>QTY</v-card-title>
                      <v-card-subtitle>{{proceso[1]["qty"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                </v-row>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card color="yellow darken-3" dark class="pa-2" >
              <v-card-title>En proceso</v-card-title>
              <v-row>
                  <v-col>
                    <v-card>
                      <v-card-title>JOB</v-card-title>
                      <v-card-subtitle>{{proceso[0]["id"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                      <v-card-title>Console</v-card-title>
                      <v-card-subtitle>{{proceso[0]["console"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                      <v-card-title>QTY</v-card-title>
                      <v-card-subtitle>{{proceso[0]["qty"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                        <v-card-title>Actual</v-card-title>
                        <v-card-subtitle>{{proceso[0]["actual"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                </v-row>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card color="green darken-2" dark class="pa-2">
            <v-card-title>Terminado</v-card-title>
            <v-card-subtitle></v-card-subtitle>
                <v-row v-for="(value, name, index) in terminados" :key="index">
                  <v-col>
                    <v-card>
                      <v-card-title>JOB</v-card-title>
                      <v-card-subtitle>{{terminados[name]["id"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                      <v-card-title>Console</v-card-title>
                      <v-card-subtitle>{{terminados[name]["console"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                      <v-card-title>QTY</v-card-title>
                      <v-card-subtitle>{{terminados[name]["qty"]}}</v-card-subtitle>
                    </v-card>
                  </v-col>
                </v-row>
          </v-card>
        </v-col>
      </v-row>
      <!--<v-row>
        <v-col>
          <counter></counter>
        </v-col>
      </v-row>-->
      
    </card>
  </v-app>
</template>

<script>
import axios from "axios"
import Card from '@/components/Card'
import Counter from '@/components/Counter'
//var socket = io.connect("localhost:8081/test")
export default {
  name: 'Heijunka',
  components: {
    Card,
    Counter
  },
  data(){
    return {
      horas: ["6:30","7:30","8:30","9:30","10:30","11:30","12:30",
      "13:30","14:30","15:30","16:30","17:30","18:30","19:30","20:30",
      "21:30", "22:30", "23:30", "00:30", "01:30", "02:30", "03:30", "04:30", "05:30"],
      timer: "",
      jobs: [
        {id:172476, console:"2902", qty:1130, actual: 1130, estado: "terminado"},
        {id:172477, console:"2902", qty:830, actual: 830, estado: "terminado"},
        {id:172478, console:"2902", qty:830, actual: 825, estado: "en proceso"},
        {id:172479, console:"2902", qty:10, actual: 0, estado: "en proceso"},
        {id:172480, console:"2902", qty:10, actual: 0, estado: "en proceso"},
        {id:172481, console:"2902", qty:10, actual: 0, estado: "en proceso"},
        {id:172482, console:"2902", qty:830, actual: 0, estado: "en proceso"},
        {id:172483, console:"2902", qty:830, actual: 0, estado: "en proceso"},
        {id:172484, console:"2902", qty:830, actual: 0, estado: "en proceso"},
      ],
      horas:[],
      terminados: [],
      proceso: [],
      cont: 0,
    }
  },
  methods: {
    terminado(){
      let terminado = Object.keys(this.jobs)
      for( terminado in this.jobs){
        if(this.jobs[terminado]['estado'] == "terminado"){
          this.terminados.push(this.jobs[terminado])
          //console.log("los jobs terminados son: ", this.terminados[terminado]["id"])
        }else{
          this.proceso.push(this.jobs[terminado])
          console.log(terminado)
          
        }
      }
      //console.log("los jobs en proceso son: ", this.proceso) 
    },
    contar: function(){
      this.proceso[0]["actual"] ++
//console.log(this.proceso[0]["actual"])
      if(this.proceso[0]["actual"] >= this.proceso[0]["qty"]){
        this.proceso[0]["estado"] = "terminado"
        //console.log(this.proceso[0]["estado"])
        this.terminados.push(this.proceso[0])
        this.proceso.splice(0,1)
        console.log("los jobs en proceso son: ", this.proceso) 

      }
    },
    async fetchData(){
      axios.get(`http://localhost:8081/test`)//direccion de la api, aparece en services
        .then(response => {
            this.prueba = response.data
            this.arrBacklog = response.data
        })
        .catch(e => {
            console.log(e)
        })
    },
  },//methods

  mounted(){
    //this.proceso[0]["actual"] = 80
  },
  created(){
    this.terminado()
    }
}
</script>
