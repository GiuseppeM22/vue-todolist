  const { createApp } = Vue

  createApp({
    data() {
      return {
        nuovaLista: {
            testo:"",
            done: false
        },
        lista:[
            /*le attivita verranno aggiunte qui*/
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
        return (this.lista[i].done==true) ? 'underline' : ''
    }

}
  }).mount('#app')