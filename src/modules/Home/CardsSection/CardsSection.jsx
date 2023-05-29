import PropTypes from "prop-types";

import CardList from "./CardList";
import Button from "components/Button";

import s from "./cardSection.module.scss";

const CardsSection = (props) => {
  const { items, page, totalPages, onClick } = props;

  return (
    <section>
      <div className={`container ${s.wrapper}`} id="users">
        <h2 className={s.wrapper__title}>Working with GET request</h2>
        <CardList items={items} />
        {totalPages && (
          <Button
            disabled={totalPages === page}
            handleClick={onClick}
            buttonText="Show more"
          />
        )}
      </div>
    </section>
  );
};

CardsSection.defaultProps = {
  onClick: () => {},
  items: [],
  totalPages: 0,
  page: 1,
};

CardsSection.propTypes = {
  onClick: PropTypes.func,
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
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default CardsSection;
