// Replace your root route with this simple test
app.get('/', (req, res) => {
  res.send('<h1>Backend is working!</h1><p>File serving test in progress...</p>');
});
