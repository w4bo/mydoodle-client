import App from "./App.vue";
import { createApp } from "vue";
import { createRouter } from "./router";
import { createAuth0 } from "@auth0/auth0-vue";
import hljs from "vue3-highlightjs";
import "highlight.js/styles/github.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { domain, clientId as client_id } from "../auth_config.json";
import dotenv from "dotenv";
dotenv.config();
const domain = "" + process.env.VUE_APP_AUTH0_DOMAIN;
const client_id = "" + process.env.VUE_APP_AUTH0_CLIENT_ID;
const redirect_uri = "" + process.env.VUE_APP_REDIRECT_URI;
const app = createApp(App);
library.add(faLink, faUser, faPowerOff);
app
  .use(hljs)
  .use(createRouter(app))
  .use(
    createAuth0({
      domain,
      client_id,
      redirect_uri: redirect_uri // window.location.origin,
    })
  )
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
