import PropTypes from "prop-types";
import Card from "./Card";

import s from "./cardList.module.scss";

const CardList = (props) => {
  const { items } = props;

  const elements = items.map((el) => {
    const { id } = el;
    return <Card key={id} itemData={el} />;
  });

  return <ul className={s.list}>{elements}</ul>;
};

CardList.defaultProps = {
  items: [],
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
