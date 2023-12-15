import React from 'react';

const useLocalStorage = (key, item) => {
  const [data, setData] = React.useState(() => {
    const localItem = window.localStorage.getItem(key);

    if (localItem && !item) {
      return localItem;
    }

    return item;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, data);
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorage;
