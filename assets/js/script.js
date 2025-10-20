const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato)

Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

*/


//Select rowEl
const rowEl = document.querySelector('.row')


//Stamp result in page
//-Create a function to stamp a card for every member
function stampMembers(row, members) {

  //-Cycle inside the array
  for (let i = 0; i < members.length; i++) {
    const member = members[i];

    //-Create card HTML structure and save in a variable
    const cardMarkup =
      `<div class="col-lg-4 col-sm-6">
        <div class="card">
          <img class="card-img-top" src="./assets/${member.img}" alt="">
          <div class="card-body">
            <h3>${member.name}</h3>
            <div>${member.role}</div>
            <div>${member.email}</div>
          </div>
        </div>
      </div>`

    //-Push the card structure into the rowEl
    row.innerHTML += cardMarkup
    
  }
  return row
}

//-Stamp result in page
const printCards = stampMembers(rowEl, teamMembers)