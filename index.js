const express = require("express");
const app = express();
const cors = require("cors");
const Data = require("./model/user.modal");
const connection = require("./config");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/getData", async(req, res) => {
  try {
    let invoice =await Data.find({});
    return res.status(200).send({
      success: true,
      message: "Data Got successfully",
      invoice,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      success: false,
      message: "Some Error occured",
    });
  }
});
app.post("/postData", async (req, res) => {
  try {
    const  srno  = req.body.srno;
    const  amount  = req.body.amount;
    const  itemtype  = req.body.itemtype;
    console.log(req.body,"33")

    const invoice = await Data.create({
      srno,
      amount,
      itemtype,
    });


     console.log(invoice)
    //  res.send(data)
    return res.status(200).send({
      success: true,
      message: "Data Added Succesfully",
      invoice,
    });
  } catch (error) {
    console.log(error);

    return res.status(200).send({
      success: false,
      message: "Some Error occured",
    });
  }
});


app.delete("/delete/:_id", async(req,res)=> {
    // console.log("data11111")
    try{
        const {_id} = req.params
        console.log({_id})
        const deletedData = await Data.deleteOne({_id});
        return res.status(200).send({
            success: true,
            message: "Data Deleted Succesfully",
            deletedData,
          });
    }catch(err){
        console.log(err);
        return res.status(400).send({
            success: false,
            message: "Some Error occured",
          });
    }
})

// const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
  try {
    connection, console.log("database connect");
  } catch (err) {
    console.log(err);
  }
  console.log("successfully server running on 8080");
});
