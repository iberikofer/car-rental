import type { FC } from 'react';
import { LoadMoreBtn } from './LoadMore.styled';

interface LoadMoreProps {
  nextPage: () => void;
}

export const LoadMore: FC<LoadMoreProps> = ({ nextPage }) => {
  return <LoadMoreBtn onClick={nextPage}>Load more</LoadMoreBtn>;
};

export default LoadMore;
