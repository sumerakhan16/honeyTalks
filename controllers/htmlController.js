const express = require('express');
const router = express.Router();
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainPage.html"));
  });

module.exports = router;