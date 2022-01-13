// get data from API with id
// fetch data from API
const API = "https://backend-user-tor.herokuapp.com/api/v1/users/";
const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('userName').value;
  const data = await getData(id);
  showData(data);
})



const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  console.log(apiURl);
  console.log(id);
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

const showData = (data) => {
  let infoUser = `
    <div class="info-data-user" id="info-data" >
      <img src="${data.person.picture}" alt="avatar">
      <h2>${data.person.name}</h2>
    </div>
    <div class="table-skill-user" id="skill-user" >
      <h2>Skills and interest</h2>
      <table id="userSkill" >
      </table>
    </div>
  `;

  let table = `
    <tr></tr>
    <tr></tr> 
    `;


  for (let r of data.strengths) {
    table += `
        <tr>
        <td class="table__right">${r.name}</td>
        <td class="table__left">${r.proficiency}</td>
        </tr>
      `;
  }

  document.getElementById('app').innerHTML = infoUser;
  document.getElementById('userSkill').innerHTML = table;
};