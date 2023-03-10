import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToast } from '../../app/configureStore/reducers';
import css from './Toast.module.css';

export const Toast = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.toast.show);
  const title = useSelector((state) => state.toast.title);
  const type = useSelector((state) => state.toast.type);

  useEffect(() => {
    if(show){
      const interval = setInterval(() => {
        dispatch(removeToast())
      }, 6000);
      return () => {
          clearInterval(interval);
      }}
  }, [show]);

  if(!show) return;

  return (
  <div className={css.toastContainer}>
    <div className={`${css.toast} ${ type === 'success' ? css.success : css.error }`}>
      <h4>{title}</h4>
    </div>
  </div>
)};
