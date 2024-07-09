import { client} from "../lib/sanity";

export async function getData() {
    const query = "*[_type == 'heroImage'][0]";
  
    const data = await client.fetch(query);
  
    return data;
  }