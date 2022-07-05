import express, { json } from 'express';
import { router } from './src/routes/router';

const app = express();
const PORT  = process.env.PORT;

app.use(json());
app.use('/', router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
