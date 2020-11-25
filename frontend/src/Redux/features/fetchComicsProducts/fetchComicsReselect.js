import {createSelector} from 'reselect'
const fetchComicsSelector = state => state.fetchComics;

export const selectComicsItems = createSelector(
    fetchComicsSelector,
    comics => comics
);