import { Link } from 'react-router-dom';
import s from './Card.module.css';

const Card = ({ title, imageUrl, id, description }) => {
  return (
    <div className={s.appCard}>
      <Link to={`/posts/${id}`} className={s.btn}>
        <img src={imageUrl} className={s.cardImgTop} alt="..." />
        <div className={s.cardBody}>
          <h5 className={s.cardTitle}>{title}</h5>
          {/* <p>{description}</p> */}
        </div>
      </Link>
    </div>
  )
}

export default Card;