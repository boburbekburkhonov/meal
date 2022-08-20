import axios from "axios";

const By_Search = 'https://www.themealdb.com/api/json/v1/1/search.php?s'

const By_Canadian_Foods = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const By_Canadian_Foods_Id = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i';

const By_Country = 'https://www.themealdb.com/api/json/v1/1/filter.php?a';

const Seafoods_Meals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const By_Name = 'https://www.themealdb.com/api/json/v1/1/search.php?f'


const Get = {
  By_Canadian: axios.get(`${By_Canadian_Foods}`),

  Seafoods: axios.get(Seafoods_Meals),

  By_Canadian_Id: (strId) => axios.get(`${By_Canadian_Foods_Id}=${strId}`),

  By_Searchs: (str) =>  axios.get(`${By_Search}=${str}`),

  By_Countrys: (name) => axios.get(`${By_Country}=${name}`),

  By_Names: (a) => axios.get(`${By_Name}=${a}`)

}

export default Get