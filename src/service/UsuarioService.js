import axios from "axios";

export default class UsuarioService {
  login(user) {
    return axios.post(
      "oauth/token",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          username: user.username,
          password: user.password,
          grant_type: "password",
        },
        auth: {
          username: "vetun-proj",
          password: "secret",
        },
      }
    );
  }

  menuBarUser() {
    return axios.post("usuario", {
      params: {
        access_token: localStorage.getItem("token"),
      },
    });
  }
}
