import { useEffect } from 'react';
import CarComponent from './components/CarComponent';
// Importing our context provider which will make our global state available to child components
import CarProvider from './utils/CarContext';

export default function App() {
  useEffect(() => {
    document.title = 'Digital Garage';
  }, []);

  return (
    <CarProvider>
      <CarComponent />
    </CarProvider>
  );
}
