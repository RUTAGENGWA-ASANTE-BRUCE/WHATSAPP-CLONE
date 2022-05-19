import Express from "express"
import Mongoose from "mongoose"
import Cors from "cors"
import sidechats from "./sideChat.js"
import profilepicture from "./profile.js"
import chatprofile from "./chatProfile.js"
import sender from "./sender.js"
import receiver from "./receiver.js"
//App config
const app = Express()
const port = process.env.PORT || 2006
const connection_url = "mongodb://localhost/whatsapp-clone"
//Middlewares
app.use(Express.json())
app.use(Cors())
//dbConfig
Mongoose.connect(connection_url)
//API Endpoits

app.get("/", (req, res) => res.status(200).send("Hello World"))

app.post("/whatsapp/sideChats", (req, res) =>
{
    const sideChatsSpace = req.body

    sidechats.create(sideChatsSpace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/whatsapp/sideChats", (req, res) =>
{
    sidechats.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/whatsapp/profile", (req, res) =>
{
    const profileSpace = req.body

    profilepicture.create(profileSpace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/whatsapp/profile", (req, res) =>
{
    profilepicture.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/whatsapp/chatProfile", (req, res) =>
{
    const chatProfilePlace = req.body

    chatprofile.create(chatProfilePlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/whatsapp/chatProfile", (req, res) =>
{
    chatprofile.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/whatsapp/sender", (req, res) =>
{
    const senderPlace = req.body

    sender.create(senderPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/whatsapp/sender", (req, res) =>
{
    sender.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/whatsapp/receiver", (req, res) =>
{
    const receiverPlace = req.body

    receiver.create(receiverPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/whatsapp/receiver", (req, res) =>
{
    receiver.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})
//listener
app.listen(port, () => console.log(`listening on port ${port}`))