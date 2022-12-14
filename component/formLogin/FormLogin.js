import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faClose } from '@fortawesome/free-solid-svg-icons';
import styles from 'static/scss/formLogin.module.scss';
import { ShowFormContext } from 'layouts/WebLayout';

export default function FormLogin() {
  const { showLogin, setShowLogin, setShowSignUp, setShowForgetPass } = useContext(ShowFormContext);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className={`${styles.form_login} ${showLogin ? 'show' : ''}`}>
      <h3>Đăng nhập</h3>
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Phone" {...register('phone')} />
        </div>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Password" {...register('password')} />
        </div>
        <div>
          <button
            className={styles.link}
            onClick={() => {
              setShowLogin(false);
              setShowForgetPass(true);
            }}
          >
            Quên mật khẩu?
          </button>
        </div>
        <div className={styles.button_login}>
          <input type="submit" className="btn btn-primary" value="Đăng nhập" />
        </div>
        <div>
          <p>
            Chưa có tài khoản?{' '}
            <button
              className={styles.link}
              onClick={() => {
                setShowLogin(false);
                setShowSignUp(true);
              }}
            >
              Đăng ký
            </button>
          </p>
        </div>
      </form>
      <div className={styles.button_close}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowLogin(false)} />
      </div>
    </div>
  );
}
