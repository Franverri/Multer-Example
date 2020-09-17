const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const images = require('./routes/api/images');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    msg: 'app running'
  })
});

app.use(express.static('uploads'));

app.use('/api/images', images);

const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
