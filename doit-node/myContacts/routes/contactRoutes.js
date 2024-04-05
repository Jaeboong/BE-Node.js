const express = require("express");
const router = express.Router();
const { getAllContacts, postAllContacts, getContact_ID, updateContact_ID, deleteContact_ID } = require("../controllers/contactControllers");

router.route("/")
.get(getAllContacts)
.post(postAllContacts);

router.route("/:id")
.get(getContact_ID)
.put(updateContact_ID)
.delete(deleteContact_ID);

module.exports = router;