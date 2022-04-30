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
            anos: [],
            valida: {
                nome: false,
                dataReserva: false,
                horaEntrada: false,
                horasDeReserva: false,
                placa: false,
                modelo: false,
                ano: false
            }
            
        }
    },

    // Actions
    actions: {
        validaInputNome(nome){
            if(nome.length == 0) {
                this.valida.nome = true
                
            }else{
                this.valida.nome = false
                
            }
        },
        validaInputDataReserva(dataReserva){
            if(isNaN(new Date(dataReserva)) || new Date(dataReserva) < new Date()) {
                this.valida.dataReserva = true
                
            }else{
                this.valida.dataReserva = false
                
            }
        },
        validaInputHoraEntrada(horaEntrada){
            let tempo = horaEntrada.split(":")
            let hora = Number(tempo[0]) >= 0 && Number(tempo[0]) < 24 ? true : false
            let minuto = Number(tempo[1]) >= 0 && Number(tempo[1]) < 60
           
            if(horaEntrada.length < 5 || !hora || !minuto) {
                this.valida.horaEntrada = true
                
            }else{
                this.valida.horaEntrada = false
                
            }
        },
        validaInputHorasDeReserva(horasDeReserva){
            if(horasDeReserva <= 0) {
                this.valida.horasDeReserva = true
                
            }else{
                this.valida.horasDeReserva = false 
                
            }
        },
        validaInputPlaca(placa){
            if(placa.length < 7) {
                this.valida.placa = true
                
            }else{
                this.valida.placa = false
                
            }
        },
        validaInputModelo(modelo){
            if(modelo.length == 0) {
                this.valida.modelo = true
                
            }else{
                this.valida.modelo = false
                
            }
        },
        validaInputAno(ano){
            //this.valida.ano = true
            if(ano < 1900 || ano > new Date().getFullYear().getUTCDate("pt-br") ) {
                this.valida.ano = true

            }else{
                this.valida.ano = false
                
            }
        },
      
        preencheAnos(){
            let data = new Date()
            let ano = data.getFullYear()

            for(let i = ano; i >= 1900; i--){
                this.anos.push(i)
            }
        },
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