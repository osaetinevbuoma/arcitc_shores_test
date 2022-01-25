import IRepository from "../../interfaces/IRepository";
import { search } from "../SearchService";

describe('Test search service', () => {
  test('search function', async () => {
    const query = 'pnemonia detection';
    const results = await search(query);

    expect((results as IRepository[]).length).toBeGreaterThan(0);
  });
});
