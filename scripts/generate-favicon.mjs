import fs from "node:fs";
import pngToIco from "png-to-ico";

const buf = await pngToIco("./src/app/icon.png");
fs.writeFileSync("./src/app/favicon.ico", buf);
