import React from 'react';
import styles from 'components/Card/SavedCatCard/index.module.scss';
import { LikableCatDataType } from 'api/type';
import { HTMLAttributes } from 'react';

type Props = {
  catData: LikableCatDataType;
  unlikeCat: (unlikedCat: LikableCatDataType) => void;
} & HTMLAttributes<HTMLDivElement>;

const SavedCatCard = ({ catData, unlikeCat, ...props }: Props) => {
  const handleUnlikeCat = (e: React.MouseEvent) => {
    e.stopPropagation();
    unlikeCat(catData);
  };

  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundImage: `url(${catData.url})` }}
      {...props}
    >
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleUnlikeCat}>
          X
        </button>
      </div>
    </div>
  );
};

export default SavedCatCard;
