//   import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Alert } from './Alert';
import './App.css';





export default function App() {
  return (
    <div>
      <Alert variant="info">
        Would you like to browse our recomended products&
      </Alert>
      <Alert variant="error" outlined>
        There was an error during transaction!
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your contact information!
      </Alert>
    </div>
  );
}

// export default App;
