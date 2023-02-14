const express = require("express"); 
const cron = require("node-cron");
const router = express. Router();

router.post("/schedule", (req, res) => {
try {

    let TaskToBeSchedule = [
        {
            text: "Anshul'sBirthday",
            time: "2023-02-14 16:49:00"
        },
        {
            text: "Aayush'sBirthday",
            time: "2023-02-14 16:49:03"
        },
        {
            text: "akshay'sBirthday",
            time: "2023-02-14 16:49:06"
        },
        {
            text: "sheeta'sBirthday",
            time: "2023-02-14 16:49:09"
        },
        {
            text: "sweta'sBirthday",
            time: "2023-02-14 16:49:12"
        }
    ]
    
    TaskToBeSchedule.forEach(key => {
        let timeString = key.time
        let [dateString, times] = timeString.split(" ")
    
        let [year, month, date] = dateString.split("-")
        let [hour, minutes, seconds] = times.split(":")
    
        cron.schedule(`${seconds} ${minutes} ${hour} ${date} ${month} *`, () => {
            console.log(key.text)
            res.send(key.text)
        })
    })
res.status(201).send({msg:"task scheduled"})
}
catch (error)

{ res.status(500).send("error coming from server side")}})

module.exports = router;