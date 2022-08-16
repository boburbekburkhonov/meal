import axios from "axios";

const By_Canadian_Foods = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const By_Canadian_Foods_Id = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i'


const Get = {
  By_Canadian: axios.get(`${By_Canadian_Foods}`),

  By_Canadian_Id: (strId) => axios.get(`${By_Canadian_Foods_Id}=${strId}`)


}

export default Get