import axios, { AxiosError } from "axios";
import IRepository from "../interfaces/IRepository";

const ENDPOINT: string = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const search = async (repository: string): Promise<IRepository[] | AxiosError> => {
  try {
    const response = await axios.get(`${ENDPOINT}/search/${repository}`);
    const items: IRepository[] = response.data.items;
    items.sort((repo1, repo2) => repo2.stargazers_count! - repo1.stargazers_count!);

    return items;
  } catch (error) {
    return error as AxiosError;
  }
};
