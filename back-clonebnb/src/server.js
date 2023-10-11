import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { stayRouter } from './stay/infrastructure/controllers/stay.controller.js';
import swaggerConfig from './docs/index.js';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1/stays', stayRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(port, () => {
  console.log(`Documentacion disponible en http://localhost:${port}/api-docs`);
  console.log(`Server is running in port: ${port}`);
});