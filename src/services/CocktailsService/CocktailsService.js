import RestApi from "../RestApi";

export const BASE_PATH = process.env.REACT_APP_REST_CONTEXT;

export default class CocktailsService {
  static async getCocktails(page) {
    const response = await RestApi.call(
      "GET",
      `${BASE_PATH}/beers?page=${page}&per_page=10`
    );
    return response;
  }
}
