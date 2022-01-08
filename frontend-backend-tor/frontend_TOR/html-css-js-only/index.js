// get data from API

// const getData = async (id) => {
//   const apiURl = id ? `${API}${id}` : API;
//   try {
//     const response = await fetch(apiURl);
//     const data = await response.json();
//     return data.results[0];
//   } catch (error) {
//     console.log('Fetch Error', error);
//   };
// };
const id = document.getElementById('username');

const getData = async (id) => {
  try {
    const response = await fetch("http://172.17.45.77:3000/api/v1/users/" + id);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}
