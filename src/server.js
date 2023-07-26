const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDatabase');

// AUTH
const routerAuth = require('./routes/auth/RouterAuth');
const routerSignUp = require('./routes/auth/RouterSignUp');
const routerLogin = require('./routes/auth/RouterLogin');

// INDEX
const routerProfile = require('./routes/index/RouterProfile');
const routerAdmin = require('./routes/index/RouterAdmin');
const routerIndex = require('./routes/index/RouterIndex');
const routerHome = require('./routes/index/RouterHome');
const routerLogout = require('./routes/index/RouterLogout');

const routerRefresh = require('./routes/RouterRefresh');

let app = express();

dotenv.config();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true,
}));

app.use(session({
    key: 'userId',
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))


// AUTH
app.use('/auth', routerAuth);
app.use('/signup', routerSignUp);
app.use('/login', routerLogin);


// INDEX
app.use('/index', routerIndex);
app.use('/profile', routerProfile);
app.use('/admin', routerAdmin);
app.use('/home', routerHome);
app.use('/logout', routerLogout);

app.use('/refresh', routerRefresh);

connectDB();

app.listen(PORT, () => {
    console.log('Successfully Running on Port:', PORT);
})