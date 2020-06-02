/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";

import Global from "./components/global";

require("./mystyles.scss");

const app = document.querySelector("#app");
ReactDOM.render(<Global />, app);
