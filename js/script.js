  const { createApp } = Vue

  createApp({
    data() {
      return {
        nuovaLista: {
            testo:"",
            done: false
        },
        lista:[
            {testo: "fare cose", done: false},
            {testo: "fare cose", done: false},
            {testo: "fare cose", done: false}
        ]
    }
},
methods:{
    aggiungiLista(){
        let nuovaLista =  { ...this.nuovaLista}
        this.lista.unshift(nuovaLista)
        this.nuovaLista.testo = ""
    },
    rimuoviAttivita(i){
        this.lista.splice(i, 1)
    },
    change(i){
        this.lista[i].done = !this.lista[i].done
    },
    underline(i){
        return (this.lista[i].done==true) ? 'underline' : 'green'
    }

}
  }).mount('#app')