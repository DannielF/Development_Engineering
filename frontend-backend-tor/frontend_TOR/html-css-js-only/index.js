// get data from API
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
