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
function cardMembers(members) {
  
  //-Cycle inside the array
  let row = ''
  for (let i = 0; i < members.length; i++) {
    const member = members[i];

    //-Create card HTML structure and save in a variable
    const cardMarkup =
      `<div class="col-lg-4 col-sm-6">
        <div class="my-card d-flex">
          <img src="./assets/${member.img}" alt="">
          <div class="member-info">
            <h3>${member.name}</h3>
            <div>${member.role}</div>
            <a href="">${member.email}</a>
          </div>
        </div>
      </div>`

    //-Push the card structure into the rowEl
     row += cardMarkup
    
  }
  
  return row
}

//-Stamp result in page
rowEl.innerHTML = cardMembers(teamMembers)

//Select formEl
const formEl = document.querySelector('form')
const nameEl = document.getElementById('name')
const roleEl = document.getElementById('role')
const emailEl = document.getElementById('email')
const imgEl = document.getElementById('img')

console.log(formEl);

//Add a new card based on form data
//-Prevent default form behavior
formEl.addEventListener('submit', function(e) { 
  e.preventDefault()
  
  //-Get user input
  const name= nameEl.value
  const role = roleEl.value
  const email = emailEl.value
  const img = imgEl.value
  
  teamMembers.push(
    {
      name,
      role,
      email,
      img
    }
  )
  console.log(teamMembers);
  rowEl.innerHTML = cardMembers(teamMembers)
})
//-Add the new
