import { connect, connection } from "mongoose";

export const connectToDatabase = () => {
  connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = connection;
  db.on("error", (err) => console.log(err));
  db.once("open", () => console.log("connected"));
};
