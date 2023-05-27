import { useState, useCallback, useEffect } from "react";

import CardList from "./CardList";
import Button from "components/Button";
import Loader from "components/Loader";
import api from "api";
const { getUsers } = api;

import s from "./cardSection.module.scss";
const initialState = {
  loading: false,
  items: [],
  page: 1,
  count: 6,
  offset: 0,
  totalPages: 0,
};

const CardsSection = () => {
  const [state, setState] = useState(initialState);

  const { items, page, count, offset, totalPages, loading } = state;

  const onShowMoreClick = useCallback(() => {
    setState((prev) => {
      const page = prev.page + 1;
      const offset = prev.page * count;
      return {
        ...prev,
        page,
        offset,
      };
    });
  }, [count]);
  const getItems = useCallback(async () => {
    setState((prev) => {
      return { ...prev, loading: true };
    });

    const data = await getUsers({ count, page, offset });

    data &&
      setState((prev) => {
        return {
          ...prev,
          totalPages: data.total_pages,
          items: [...prev.items, ...data.users],
        };
      });

    setState((prev) => {
      return { ...prev, loading: false };
    });
  }, [count, offset, page]);

  useEffect(() => {
    getItems();
  }, [getItems, state.page]);

  return (
    <section>
      <div className={`container ${s.wrapper}`}>
        <h2 className={s.wrapper__title}>Working with GET request</h2>
        {items.length && <CardList items={items} />}
        {totalPages && (
          <Button
            disabled={totalPages === page}
            handleClick={onShowMoreClick}
            buttonText="Show more"
          />
        )}
        {loading && <Loader />}
      </div>
    </section>
  );
};

export default CardsSection;
