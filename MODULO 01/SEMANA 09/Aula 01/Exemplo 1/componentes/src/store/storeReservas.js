import { defineStore } from "pinia"

export const useReservaStore = defineStore("reservas", {
    state: () => {
        return {
            lista: {
                reservas: []
            },
            titulo: "Sistema para Reserva de Vagas",
            formulario: {
                nome: "",
                dataReserva: "",
                horaEntrada: "",
                horasDeReserva: "",
                placa: "",
                modelo: "",
                ano: "",
                
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
        editaItem(indice, obj){
            this.lista.reservas.splice(indice, 1, obj)
        },
        deletaItem(indice){
            this.lista.reservas.splice(indice, 1)
        },
        esvaziaLista(){
            this.lista.reservas = []
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
          let dataFormatada = `${d[2]}-${d[1]}-${d[0]}`
          return dataFormatada
        },
        preencheFormulario(nome, dataReserva, horaEntrada, horasDeReserva, placa, modelo, ano){
            this.formulario = {
                "nome": nome,
                "dataReserva": dataReserva,
                "horaEntrada": horaEntrada,
                "horasDeReserva": horasDeReserva,
                "placa": placa.toUpperCase(),
                "modelo": modelo,
                "ano": ano 
            }
        },

        // Funções para salvar localStorage

        salvaDB(){
            if(this.lista.reservas.length >= 0){
                var dados = JSON.stringify(this.lista.reservas)
                localStorage.setItem("reservas", dados)
            }
        },

        carregaDB(){
            var dados = localStorage.getItem("reservas")
            dados = JSON.parse(dados)
            if(dados.length > 0){
                for (let index = 0; index < dados.length; index++) {
                    this.lista.reservas.push(dados[index])
                } 
            }
        }
    },

    // Getters
    getters: {
    
        
    }
})