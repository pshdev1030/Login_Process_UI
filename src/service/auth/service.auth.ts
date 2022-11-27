import { AxiosInstance, AxiosResponse } from "axios";
import { GetToken1, GetToken2 } from "./interface.auth";

const auth = (instance: AxiosInstance) => ({
  getToken1: (userName: string) =>
    instance
      .post("/type1", { userName })
      .then((res: AxiosResponse<GetToken1>) => res.data),
  getToken2: (token: string) =>
    instance
      .post("/type2", { token })
      .then((res: AxiosResponse<GetToken2>) => res.data),
});

export default auth;
