const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
 
// Get all contacts
// GET /contact

const getAllContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
});

const postAllContacts = asyncHandler(async(req, res) =>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name|| !email || !phone){
        return res.send("필수 값이 입력되지 않았습니다!");
    }

    const contact = await Contact.create({
        name, email, phone
    });

    res.send("Create Contacts")
})

//GET /contacts/:id

const getContact_ID = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
})
const updateContact_ID = asyncHandler(async (req, res) =>{
    const id = req.params.id;
    const {name, email, phone} = req.body;
    const contact = await Contact.findById(id);
    if(!contact){
        throw new Error("Contact not Found!");
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();

    res.json(contact);
})
const deleteContact_ID = asyncHandler(async (req, res) =>{
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if(!contact){
        throw new Error("Contact not Found!");
    }

    await Contact.deleteOne();
    res.send("Deleted");
})

module.exports = {postAllContacts,
    getAllContacts,
    getContact_ID,
    updateContact_ID,
    deleteContact_ID
};