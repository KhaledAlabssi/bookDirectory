import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';


const __dirname = path.resolve();

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static('public'))

app.listen(process.env.PORT || 3000);
