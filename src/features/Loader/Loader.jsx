import { useSelector } from 'react-redux';
import LoaderSvg from './Spinner-1s-100px.svg';

export const Loader = () => {
  const showLoader = useSelector((state) => state.loader.show);

  if(!showLoader) return;

  return (
    <img src={LoaderSvg} alt="loading image" />
  )
}