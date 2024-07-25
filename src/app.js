const express = require('express');
const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use(express.json());
app.use('/api', calculatorRoutes);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON format' });
    }
    next();
});
  
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
