import axios from "axios";

const search = async () =>
  axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);

export default { search };