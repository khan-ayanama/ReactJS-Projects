import axios from "axios";

const KEY = "AIzaSyCZv1nuBP3GmGO-eb-j4wLv8mOKTHK4tkE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
