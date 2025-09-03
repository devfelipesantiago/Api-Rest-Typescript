import express = require('express');
import routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.routes();

    this.app.get('/', (_req, res) => res.status(200).send('Trybeteca API no ar!'));
  }

  private routes(): void {
    this.app.use(routes);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Trybeteca API no ar na porta ${PORT}!`));
  }
}

export default App;
