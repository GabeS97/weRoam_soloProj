import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  const hideForm = () => setShowModal(false)

  return (
    <>
      <button className='login__loginButton' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm hideForm={hideForm} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
