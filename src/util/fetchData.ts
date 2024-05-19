import axios from 'axios';

export const getDataOnSearch = async (searchKey) =>
  axios
    .get(
      `https://backend.cappsule.co.in/api/v1/new_search?q=${searchKey}&pharmacyIds=1,2,3`,
    )
    .then(async (response) => response.data);
