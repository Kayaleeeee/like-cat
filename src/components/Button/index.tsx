import React, { FC } from 'react';
import { HTMLAttributes } from 'react';
import styles from 'components/Button/index.module.scss';

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
