type LocalStorageDataType<T> = {
  id: string;
} & T;

export const saveDataToLocalStorage = <T>(
  data: LocalStorageDataType<T>,
  storageKey: string,
) => {
  const localStorage = window.localStorage;
  const storedDataList =
    getDataFromLocalStorage<LocalStorageDataType<T>>(storageKey);

  if (!!storedDataList) {
    localStorage.setItem(storageKey, JSON.stringify([...storedDataList, data]));
  } else {
    localStorage.setItem(storageKey, JSON.stringify([data]));
  }
};

export const removeDataFromLocalStorage = <T>(
  data: LocalStorageDataType<T>,
  storageKey: string,
) => {
  const localStorage = window.localStorage;
  const storedDataList =
    getDataFromLocalStorage<LocalStorageDataType<T>>(storageKey);

  if (!storedDataList) {
    localStorage.setItem(storageKey, JSON.stringify([]));
  } else {
    localStorage.setItem(
      storageKey,
      JSON.stringify(
        storedDataList.filter((storedData) => storedData.id !== data.id),
      ),
    );
  }
};

export const getDataFromLocalStorage = <T>(
  storageKey: string,
): T[] | undefined => {
  const savedStringData = window.localStorage.getItem(storageKey);

  return !!savedStringData ? JSON.parse(savedStringData) : undefined;
};
