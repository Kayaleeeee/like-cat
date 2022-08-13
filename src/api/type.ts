export type FetchCatListParams = {
  page: number;
  limit: number;
  size?: 'small' | 'mid' | 'full';
};

export type CatDataType = {
  height: number;
  width: number;
  id: string;
  url: string;
};

export type LikableCatDataType = CatDataType & {
  isLiked: boolean;
};

export const SAVED_CAT_LOCAL_STORAGE_KEY = 'saved-cats';
