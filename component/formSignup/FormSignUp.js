import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from 'static/scss/formLogin.module.scss';
import { ShowFormContext } from 'layouts/WebLayout';

export default function FormSignUp() {
  const { showSignUp, setShowSignUp, setShowLogin } = useContext(ShowFormContext);
  const { register, handleSubmit } = useForm();

  const handleRegister = (data) => {
    const info = { username: data.username, email: data.email, password: data.password };
    axios
      .post('http://localhost:2003/v1/auth/register', info)
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={`${styles.form_login} ${showSignUp ? 'show' : ''}`}>
      <h3>Đăng ký</h3>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Tên tài khoản" {...register('username')} />
        </div>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" placeholder="Email" {...register('email')} />
        </div>

        <div className={styles.field}>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Password" {...register('password')} />
        </div>
        <div className={styles.button_login}>
          <input type="submit" className="btn btn-primary" value="Đăng ký" />
        </div>
        <div>
          <p>
            Đã có tài khoản?{' '}
            <button
              type="button"
              className={styles.link}
              onClick={() => {
                setShowSignUp(false);
                setShowLogin(true);
              }}
            >
              Đăng nhập
            </button>
          </p>
        </div>
      </form>
      <div className={styles.button_close}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowSignUp(false)} />
      </div>
    </div>
  );
}
