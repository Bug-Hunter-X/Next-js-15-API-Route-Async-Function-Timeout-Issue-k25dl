```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Simulate an asynchronous operation
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Data fetched successfully' });
    }, 1000);
  });

  promise
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    });
}
```