import React from 'react';
import styles from 'components/Header/index.module.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <h1 className={styles.title} onClick={() => navigate('/')}>
        I LOVE CATS π
      </h1>
      <div className={styles.menuList}>
        <div className={styles.menu} onClick={() => navigate('/')}>
          ν
        </div>
        <div className={styles.menu} onClick={() => navigate('/liked-cats')}>
          λΆλ§ν¬
        </div>
      </div>
    </header>
  );
};

export default Header;
