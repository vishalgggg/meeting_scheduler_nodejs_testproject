const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
app.use(cors());
app.use(express.json());
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});