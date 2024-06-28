import { json } from "@sveltejs/kit";

export async function GET(requestEvent) {
  
  const resp = await fetch("https://recite.onrender.com/random/quote-from-db",{
    method:'GET',
    headers:{
        "Content-type":"application/json"
    }
  });
  const data = await resp.json();
  console.log("data", data);
  return json(data);
}
