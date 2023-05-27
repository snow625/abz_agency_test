import PropTypes from "prop-types";
import { memo } from "react";
import Tooltip from "components/Tooltip";

import s from "./card.module.scss";

const Card = (props) => {
  const { photo, name, position, email, phone } = props.itemData;

  return (
    <li className={s.card}>
      <img
        className={s.card__icon}
        src={photo}
        alt={`${name}'s photo`}
        width="70"
        height="70"
        loading="lazy"
      ></img>

      {name.length > 25 ? (
        <Tooltip toUpperCase={true} title={name}>
          <h3 className={`${s.card__text} text_overflow cursor firstUpperCase`}>
            {name}
          </h3>
        </Tooltip>
      ) : (
        <h3 className={`${s.card__text} firstUpperCase`}>{name}</h3>
      )}
      <div>
        <p className={s.card__text}>{position}</p>

        {email.length > 25 ? (
          <Tooltip title={email}>
            <a
              href={`mailto:${email}`}
              className={`${s.card__text}  text_overflow`}
            >
              {email}
            </a>
          </Tooltip>
        ) : (
          <a href={`mailto:${email}`} className={s.card__text}>
            {email}
          </a>
        )}

        <a href={`tel:${phone}`} className={s.card__text}>
          {phone}
        </a>
      </div>
    </li>
  );
};

Card.propTypes = {
  itemData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }),
};

const MemoizedCard = memo(Card);

export default MemoizedCard;
