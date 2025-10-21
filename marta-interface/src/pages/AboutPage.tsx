import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div style={{ padding: '50px', backgroundColor: '#282c34', color: 'white', minHeight: '100vh' }}>
      <h1>About MARTA</h1>
      <p>This is the about page for the MARTA tracker.</p>
      <Link to="/" style={{ color: '#007bff' }}>← Back to Home</Link>
    </div>
  );
}