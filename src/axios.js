import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-2ed52.cloudfunctions.net/api" // THE API (cloud function) URL
});
// http://localhost:5001/clone-2ed52/us-central1/api

export default instance;
