import { fetchCatListRequest } from 'api';
import {
  FetchCatListParams,
  LikableCatDataType,
  SAVED_CAT_LOCAL_STORAGE_KEY,
} from 'api/type';
import LikableCatCard from 'components/Card/LikableCatCard';
import React, { useEffect, useState, useCallback } from 'react';
import styles from 'pages/Home/index.module.scss';
import Button from 'components/Button';
import { toast } from 'react-toastify';
import { saveDataToLocalStorage } from 'utils';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageParams, setPageParams] = useState<FetchCatListParams>({
    page: 1,
    limit: 3,
    size: 'mid',
  });
  const [catList, setCatList] = useState<LikableCatDataType[]>([]);

  const fetchCatList = useCallback(() => {
    setIsLoading(true);

    fetchCatListRequest(pageParams)
      .then(({ data }) => {
        setCatList(
          data.map((data) => {
            return { ...data, isLiked: false };
          }),
        );

        setPageParams((prev) => {
          return { ...prev, page: prev.page + 1 };
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Oops, 고양이 불러오기에 실패했어요.');
      });
  }, [pageParams]);

  const likeCat = (likedCat: LikableCatDataType) => {
    setCatList((prev) =>
      prev.map((prevCatData) =>
        prevCatData.id === likedCat.id
          ? { ...prevCatData, isLiked: true }
          : prevCatData,
      ),
    );

    saveDataToLocalStorage<LikableCatDataType>(
      likedCat,
      SAVED_CAT_LOCAL_STORAGE_KEY,
    );

    toast.success('북마크에 저장 되었습니다.');

    setTimeout(() => {
      setCatList((prev) => prev.filter((prevCatData) => !prevCatData.isLiked));
    }, 500);
  };

  useEffect(() => {
    if (!catList.length && !isLoading) {
      fetchCatList();
    }
  }, [fetchCatList, catList.length, isLoading]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          마음에 드는 고양이를 저장하려면 클릭하세요
        </h2>
      </div>

      {isLoading ? (
        <div className={styles.loader}>로딩중...</div>
      ) : (
        <div className={styles.cardList}>
          {catList.map((catData) => {
            return (
              <LikableCatCard
                key={catData.id}
                catData={catData}
                likeCat={likeCat}
              />
            );
          })}
        </div>
      )}

      <div className={styles.buttonWrapper}>
        <Button onClick={fetchCatList}>다른 고양이 볼게요</Button>
      </div>
    </div>
  );
};

export default HomePage;
