const {Router} = require('express');
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/",(req,res)=>{
    res.render("index",{
        title : "Mini Messageboard",
        messages : messages
    });
})

router.get("/new",(req,res)=>{
    res.render("form")
})

router.post("/new",(req,res)=>{
    const data = req.body;
    messages.push({
        user: data.user,
        text : data.text,
        added : new Date()
    });

    res.redirect("/");
})

router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  res.render("message", { message });
});

module.exports = router;

