const express = require('express');
const RoutingError = require('./routingError')
const routeFuncs = require('./expressRouteFunctions')

const app = express();

app.use(express.json());


app.get('/mean', function(req, res, next) {
    try {
        let nums = req.query
        if (Object.keys(nums).length === 0) throw new RoutingError("Numbers are required.", 400)
        return res.json({
            response: {
                operation: "mean",
                value: routeFuncs.mean(nums)
            }
        })
    } catch(e) {
        next(e)
    }
})

app.get('/median', function(req, res, next) {
    try {
        let nums = req.query
        if (Object.keys(nums).length === 0) throw new RoutingError("Numbers are required.", 400)


        return res.json({
            response: {
                operation: "median",
                value: routeFuncs.median(nums)
            }
        })
    } catch(e) {
        next(e)
    }
})

app.get('/mode', function(req, res, next) {
    try {
        let nums = req.query
        if (Object.keys(nums).length === 0) throw new RoutingError("Numbers are required.", 400)

        return res.json({
            response: {
                operation: "mode",
                value: routeFuncs.mode(nums)
            }
        })
    } catch(e) {
        next(e)
    }
})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});