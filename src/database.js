import mongoose from 'mongoose'
import { DB } from './config'

mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
    (err, _) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Database is Connected')
      }
    }
  );