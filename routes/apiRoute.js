// const router = require("express").Router();
const Workout = require("../models/workout.js");

module.exports = function(app){
app.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

app.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: { exercises: body }
        },
        {
            new: true, 
            runValidators: true
        }
    )
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

app.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

app.delete("/api/workouts", (req, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    }).catch(err => {
        res.json(err);
    })
    
});

};