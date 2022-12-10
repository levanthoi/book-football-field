import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from 'static/scss/formLogin.module.scss';
import { ShowFormContext } from 'layouts/WebLayout';

export default function FormForgetPass() {
  const { setShowLogin, setShowForgetPass, showForgetPass } = useContext(ShowFormContext);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className={`${styles.form_forget} ${showForgetPass ? 'show' : ''}`}>
      <h3>Nhập số điện thoại của bạn</h3>
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faPhone} />
          <input type="text" placeholder="Phone" {...register('phone')} />
        </div>
        <div></div>
        <div className={styles.button_login}>
          <input type="submit" className="btn btn-primary" value="Gửi yêu cầu" />
        </div>
      </form>
      <div className={styles.button_close}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowForgetPass(false)} />
      </div>
    </div>
  );
}
