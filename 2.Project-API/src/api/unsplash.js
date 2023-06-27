import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ott0z_AszSlyO2ZLJ6h2_otnrfmOfrSVlBQ5rrJYHBA",
  },
});
