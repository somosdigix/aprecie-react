import { useState } from 'react';
import './App.css';
import { ModalReconhecimento } from './components/modalReconhecimento/ModalReconhecimento';

function App() {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <div>
      <button className="botao-modal" onClick={() => setModalVisivel(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>

      <ModalReconhecimento visivel={modalVisivel} setModalVisivel={() => setModalVisivel(!modalVisivel) }/>
    </div>
  );
}

export default App;
