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
            }
        }
    },

    // Actions
    actions: {
        reservar(obj){
            this.lista.reservas.push(obj)
        },
        limparCampos(){
            this.formulario = {
                titulo: "",
                nome: "",
                dataReserva: "",
                horaEntrada: "",
                horasDeReserva: "",
                placa: "",
                modelo: "",
                ano: "", 
            }
        },
        data(data) {
            let data = data.split("/")
            let diaMesAno = `${data[2]}/${data[1]}/${data[0]}}`
            return diaMesAno
        }
    },

    // Getters
    getters: {
        
    }
})