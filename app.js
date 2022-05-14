const REQUESTS_PER_FIVE_SECONDS = 25;
const slowDown = require('express-slow-down');
const { getRequestBuilder } = require('./requestbuilder');
const app = express();
const port = 6969;

const speedLimiter = slowDown({
    windowMs: 5000,
    delayAfter: REQUESTS_PER_FIVE_SECONDS,
    delayMs: 5000
})

app.use(speedLimiter);

app.get('/:urlOfRequest', (req, res) => {
    res = await getRequestBuilder(req);
    
});

app.post('/:urlOfRequest', (req, res) => {
    // FETCH here
    // get URL from req.params.urlOfRequest
    // Build call from req.body, req.headers
    // RES => build same way

})
