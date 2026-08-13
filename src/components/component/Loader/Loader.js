import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css';
function Loader() {
	return (
		<div className={css.loader}>
			<Vortex
				visible={true}
				height="80"
				width="80"
				ariaLabel="vortex-loading"
				wrapperStyle={{}}
				wrapperClass="vortex-wrapper"
				colors={['#3470ff', '#0b44cd', '#8bb4ff', '#3470ff', '#0b44cd', '#8bb4ff']}
			/>
		</div>
	);
}
export default Loader;
