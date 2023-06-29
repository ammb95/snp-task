import { Express } from 'express';
import cors from 'cors';

const CLIENT_ORIGIN = 'http://localhost:3000';

const corsConfigs = {
  origin: CLIENT_ORIGIN,
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

export function configureCors(app: Express) {
  app.use(cors());

  app.use(cors(corsConfigs));
}
