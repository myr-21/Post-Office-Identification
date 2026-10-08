import { predictAddress } from "./src/services/postroute";

async function run() {
  try {
    const res = await predictAddress({
      rawAddress: "Flat 302, Baner Road, near Balewadi, Pune",
      mode: "automatic",
    });
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error(err);
  }
}

run();
