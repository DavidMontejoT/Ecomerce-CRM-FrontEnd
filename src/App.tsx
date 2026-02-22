import React from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  console.log('🟢 App.tsx renderizando...');

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
