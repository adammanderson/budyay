/* eslint-disable no-console */
import path from 'path';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import next from 'next';

admin.initializeApp();

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
const handle = app.getRequestHandler();

const nextServer = functions.https.onRequest((request, response) => {
  console.log(`File: ${request.originalUrl}`);
  return app.prepare().then(() => handle(request, response));
});

export { nextServer };
