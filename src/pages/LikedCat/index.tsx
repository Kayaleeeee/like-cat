import { LikableCatDataType, SAVED_CAT_LOCAL_STORAGE_KEY } from 'api/type';
import React, { useEffect, useState, useCallback } from 'react';
import styles from 'pages/LikedCat/index.module.scss';
import { toast } from 'react-toastify';
import SavedCatCard from 'components/Card/SavedCatCard';
import { getDataFromLocalStorage, removeDataFromLocalStorage } from 'utils';
import ImageViewer from 'components/ImageViewer';

const LikedCatPage = () => {
  const [clickedCatImage, setClickedCatImage] = useState<undefined | string>();
  const [catList, setCatList] = useState<LikableCatDataType[]>([]);

  const getSavedCatList = useCallback(() => {
    const savedList = getDataFromLocalStorage<LikableCatDataType>(
      SAVED_CAT_LOCAL_STORAGE_KEY,
    );

    setCatList(savedList || []);
  }, []);

  const unlikeCat = (unlikedCat: LikableCatDataType) => {
    setCatList((prev) =>
      prev.filter((prevCatData) => prevCatData.id !== unlikedCat.id),
    );
    removeDataFromLocalStorage<LikableCatDataType>(
      unlikedCat,
      SAVED_CAT_LOCAL_STORAGE_KEY,
    );
    toast.success('북마크에서 삭제했습니다.');
  };

  useEffect(() => {
    getSavedCatList();
  }, [getSavedCatList]);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            사진을 클릭하면 더 크게 볼 수 있어요!
          </h2>
        </div>

        {!catList.length ? (
          <div className={styles.noSavedCatNotice}>
            아직 저장된 고양이가 없어요.
          </div>
        ) : (
          <div className={styles.cardList}>
            {catList.map((catData) => {
              return (
                <SavedCatCard
                  key={catData.id}
                  catData={catData}
                  unlikeCat={unlikeCat}
                  onClick={() => setClickedCatImage(catData.url)}
                />
              );
            })}
          </div>
        )}
      </div>
      <ImageViewer
        imageUrl={clickedCatImage}
        close={() => setClickedCatImage(undefined)}
      />
    </div>
  );
};

export default LikedCatPage;
