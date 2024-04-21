/**** Server Entry ****/
/* -------------------- */
// #region Init.

import express from "express";
import cors from "cors";

// Config server
const app = express();
app.use(cors());
app.use(express.json());

// #endregion Init.
/* -------------------- */
// #region Functionality

// Good people, lend me your ears!
app.listen(8080, function () {
  console.log("Listening on 8080.");
});

// Root
app.get("/", function (request, response) {
  console.log(`GET: ${request.body}`);
  response.json(rootRequest());
});

// #endregion Functionality
/* -------------------- */
