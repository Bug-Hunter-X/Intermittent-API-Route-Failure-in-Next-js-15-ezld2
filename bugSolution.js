```javascript
// pages/index.js
import useSWR from 'swr';

function MyComponent() {
  const { data, error } = useSWR('/api/test', async (url) => {
    const res = await fetch(url, { timeout: 5000 }); // Add timeout
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });

  if (error) return <div>failed to load: {error.message}</div>;
  if (!data) return <div>loading...</div>;
  return <div>Hello {data.text}</div>;
}
```