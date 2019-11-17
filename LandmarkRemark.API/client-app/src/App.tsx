import React from 'react';
import { ModalServiceProvider } from './components/Dialog/ModalService';
import MapComponent from './components/Map/MapComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <ModalServiceProvider>
        <MapComponent />
    </ModalServiceProvider>
    </div>
  );
}

export default App;
