import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPhone, faClose } from '@fortawesome/free-solid-svg-icons';
import styles from 'static/scss/formLogin.module.scss';
import { ShowFormContext } from 'layouts/WebLayout';

export default function FormSignUp() {
  const { showSignUp, setShowSignUp, setShowLogin } = useContext(ShowFormContext);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className={`${styles.form_login} ${showSignUp ? 'show' : ''}`}>
      <h3>Đăng ký</h3>
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faPhone} />
          <input type="text" placeholder="Số điện thoại" {...register('phone')} />
        </div>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faUser} />
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
