/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { sequelize } from './database/config.sequelize.js';
import swaggerConfig from './docs/index.js';
import swaggerUI from 'swagger-ui-express';
import { stayRouter } from './modules/stay/infrastructure/stay.controller.js';
import { categoryRouter } from './modules/category/infrastructure/category.controller.js';
import { reservationRouter } from './modules/reservation/infrastructure/reservation.controller.js';
import { wishRouter } from './modules/wish/infrastructure/wish.controller.js';
import { userRouter } from './modules/user/infrastructure/user.controller.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
  }),
);
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1/stays', stayRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/reservation', reservationRouter);
app.use('/api/v1/wish', wishRouter);
app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(port, async () => {
  try {
    // await sequelize.sync({ alter: true });
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error);
  }

  console.log(
    `Documentacion disponible en http://localhost:${port}/v1/api-docs`,
  );
  console.log(
    `Server is running in port: ${port} in mode ${process.env.NODE_ENV}`,
  );
});
