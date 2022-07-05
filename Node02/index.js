import express, { json }  from 'express';
import { router } from './router/router';
const PORT = process.env.PORT;

const app = express();
app.use(json());

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
