let app = new Vue({
  // options object
  el: "#app",
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: 'assets/img/avatar_1.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: 'assets/img/avatar_2.jpg',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: 'assets/img/avatar_3.jpg',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: 'assets/img/avatar_4.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],

    posizioneUtente: 0,
    newMessageSent: "",
    ricercaUtenti: ""
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.ricercaUtenti.toLowerCase())
      })
    }
  },
  methods: {

    changeUtente: function (ordine) {
      this.posizioneUtente = ordine;
    }
    ,
    addNewMessageSent: function (){
      this.contacts[this.posizioneUtente].messages.push(
        {
          text: this.newMessageSent,
          status: 'sent'
        }
      );

      this.newMessageSent = ""
      setTimeout(this.addNewReceived, 1000);

    }
    ,
    addNewReceived: function (){
      this.contacts[this.posizioneUtente].messages.push(
        {
          text: 'Risposta del contatto dopo un secondo',
          status: 'received'
        }
      );
    }
  }
});
