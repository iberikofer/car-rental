import type { FC } from 'react';
import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['#ff4d4d', '#dc2626', '#ff8a8a', '#ff4d4d', '#dc2626', '#ff8a8a']}
      />
    </div>
  );
};

export default Loader;
