```javascript
// pages/api/test.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```

```javascript
// pages/index.js
import useSWR from 'swr';

function MyComponent() {
  const { data, error } = useSWR('/api/test');

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>Hello {data.text}</div>;
}
```