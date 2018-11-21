import express from "express";
import {setpizzas} from "../ss/ss";
import {set1pizzas} from "../ss/ss.js";
import {readPizzas} from "../ss/ss.js";
const router = express.Router();

router.get("/", (req, res) => {
  setpizzas()
  set1pizzas({ "name": "vegetarienne", "image": "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2Ff0f33831-f80e-45b3-9032-593ada3ace5f.2Ejpeg/750x562/quality/80/crop-from/center/pizza-vegetarienne.jpeg" })
  res.render("index", { pizzas: [{ name: "peperonni" }, { name: "4fromages" }] });
});

router.post("/", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("hello", { firstname, lastname });
});

export default router;

