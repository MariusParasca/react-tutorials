import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Wrapper } from './components/Wrapper/Wrapper';
import { Modal } from './components/Modal/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper>
        <div>
          <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
        </div>
      </Wrapper>
      <Modal
        open={openModal}
        onClose={() => {
          console.log('%c It closes', 'color: red');
          setOpenModal(false);
        }}
      >
        <p>Some text</p>
        <Button onClick={() => setOpenModal(false)}>Close Modal</Button>
      </Modal>
    </>
  );
}

export default App;
