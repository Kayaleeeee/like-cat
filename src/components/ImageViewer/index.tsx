import React, { useEffect, useCallback } from 'react';
import styles from 'components/ImageViewer/index.module.scss';

type Props = {
  close: () => void;
  imageUrl?: string;
};

const ImageViewer = ({ close, imageUrl }: Props) => {
  const closeViewerWithKey = useCallback(
    (e: WindowEventMap['keyup']) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    !!imageUrl && window.addEventListener('keyup', closeViewerWithKey);

    return () => {
      window.removeEventListener('keyup', closeViewerWithKey);
    };
  }, [closeViewerWithKey, imageUrl]);

  if (!imageUrl) {
    return <></>;
  }

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.contaier}>
        <div className={styles.relativeWrapper}>
          <div className={styles.header}>
            <div className={styles.heightHolder} />
            <button className={styles.closeButton} onClick={close}>
              X
            </button>
          </div>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={imageUrl} alt='selected cat' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
