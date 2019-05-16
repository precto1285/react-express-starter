const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/customers', (req, res) => {
  res.send(customers = [
    { id: 1, firstName: "Phil", lastName: "Recto", userName: "precto1285", pin: "1234" },
    { id: 2, firstName: "Dawn", lastName: "Recto", userName: "smartassdawn", pin: "4321" },
    { id: 3, firstName: "Gypsy", lastName: "Montalban-Recto", userName: "gypgyp", pin: "6969" }
  ]);
})

const PORT = 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));