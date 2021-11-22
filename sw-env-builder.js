require('dotenv').config({ path: ".env.production" });
const fs = require('fs');

fs.writeFileSync('./dist/swenv.js',
`
const process = {
  env: {
    VUE_APP_API_URL: "${process.env.VUE_APP_API_URL}",
    VUE_APP_USER: ${process.env.VUE_APP_USER}
  }
}
`);