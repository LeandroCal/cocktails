import axios from "axios";

export default class RestApi {
  static processResponse(response) {
    if (response.status >= 200 && response.status < 400) {
      return response.data;
    }
    const newError = new Error(
      response?.message || "Error en el servidor, por favor, inténtelo de nuevo"
    );
    newError.response = response;

    throw newError;
  }

  static processError(error) {
    const newError = new Error(
      error?.message || "Error en el servidor, por favor, inténtelo de nuevo"
    );

    newError.response = error.response;

    throw newError;
  }

  static async call(method, url, data, params, headers) {
    try {
      const response = await axios({
        method,
        url,
        data,
        params,
        headers,
      });

      return RestApi.processResponse(response);
    } catch (error) {
      return RestApi.processError(error);
    }
  }
}
