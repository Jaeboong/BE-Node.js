const express = require("express");
const router = express.Router();
const { getAllContacts, 
    createContacts, 
    getContact_ID, 
    updateContact_ID, 
    deleteContact_ID,
    addContactForm
} = require("../controllers/contactControllers");

router.route("/")
.get(getAllContacts);

router.route("/add").get(addContactForm).post(createContacts);

router.route("/:id")
.get(getContact_ID)
.put(updateContact_ID)
.delete(deleteContact_ID);

module.exports = router;