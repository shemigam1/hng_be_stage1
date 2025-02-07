import express from "express"
import cors from 'cors'
import axios from "axios"
import { checkArmstrong, checkEven, checkPrime, digitSum, isPerfectNumber } from "./utils.js"

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query
    if (!number || isNaN(number)) {
        return res.status(400).json({ error: "true", number: number })
    }

    const numberData = await (await axios.get(`http://numbersapi.com/${number}/math?json`)).data
    // const numberData = response.json()
    // console.log(numberData);





    const data = {
        number: parseInt(number),
        is_prime: checkPrime(number),
        is_perfect: isPerfectNumber(number),
        properties: checkArmstrong(number),
        digit_sum: digitSum(number),  // sum of its digits
        fun_fact: numberData.text //gotten from the numbers API
    }

    res.status(200).json(data)
})
app.use("**", (req, res) => {
    res.status(404).json({
        message: "Not Found!"
    })
})

app.listen(port, async () => {
    console.log(`listening on http://localhost:${port}`)
})