import React from 'react';
import styles from 'components/Card/LikableCatCard/index.module.scss';
import { LikableCatDataType } from 'api/type';
import FilledHeartIconSrc from 'images/icon/heart-full-icon.svg';
import LinedHeartIconSrc from 'images/icon/heart-line-icon.svg';

type Props = {
  catData: LikableCatDataType;
  likeCat: (carData: LikableCatDataType) => void;
};

const LikableCatCard = ({ catData, likeCat }: Props) => {
  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundImage: `url(${catData.url})` }}
      onClick={() => likeCat(catData)}
    >
      <div className={styles.iconWrapper}>
        <img
          className={styles.icon}
          src={catData.isLiked ? FilledHeartIconSrc : LinedHeartIconSrc}
          alt='like icon'
        />
      </div>
    </div>
  );
};

export default LikableCatCard;
