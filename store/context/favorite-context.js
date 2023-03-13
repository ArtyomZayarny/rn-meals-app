import { createContext } from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoriteContextProvider = ({ children }) => {
  return <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
};
