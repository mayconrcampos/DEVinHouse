import { defineStore } from "pinia"

export const useReservaStore = defineStore("reservas", {
    state: () => {
        return {
            lista: {
                reservas: []
            },
            formulario: {
                titulo: "Sistema para Reserva de Vagas",
                nome: "Maycon R Campos",
                dataReserva: "25/04/2022",
                horaEntrada: "05:37",
                horasDeReserva: "4",
                placa: "MBO-9974",
                modelo: "Ford Ka mp3",
                ano: "2007",
                
            },
            botaoReservar: {
                nome: "Reservar",
            },
            botaoLimpar: {
                nome: "Limpar",
            },
            
        }
    },

    // Actions
    actions: {
        reservar(obj){
            this.lista.reservas.push(obj)
        },
        limparCampos(){
            this.formulario = {
                nome: "",
                dataReserva: "",
                horaEntrada: "",
                horasDeReserva: "",
                placa: "",
                modelo: "",
                ano: "", 
            }
        },
        dataParaArray(data){
            let d = new Date(data)
            let dia = d.getDate() + 1 < 10 ? `0${d.getDate() + 1}` : d.getDate() + 1
            let mes = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
            let ano = d.getFullYear()
      
            return (`${dia}/${mes}/${ano}`)
        },
  
        dataParaTabela(data){
          let d = data.split("/")
          console.log(d)
          let dataFormatada = `${d[2]}-${d[1]}-${d[0]}`
          console.log(dataFormatada)
          return dataFormatada
        },
        preencheFormulario(nome, dataReserva, horaEntrada, horasDeReserva, placa, modelo, ano){
            this.formulario = {
                "nome": nome,
                "dataReserva": dataReserva,
                "horaEntrada": horaEntrada,
                "horasDeReserva": horasDeReserva,
                "placa": placa,
                "modelo": modelo,
                "ano": ano 
            }
        },
        deletaItem(indice){
            this.lista.reservas.splice(indice, 1)
        }
        
   
    },

    // Getters
    getters: {
        
    }
})