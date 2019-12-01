
import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server starting on port ${PORT}!`);
});
