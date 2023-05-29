import Header from "modules/Header";
import Loader from "components/Loader";
import Hero from "./Hero";
import CardsSection from "./CardsSection";
import FormSection from "./FormSection";
import api from "api";
const { createNewUser, getUsers } = api;
import s from "./home.module.scss";
import { useCallback, useState, useEffect } from "react";
import { scroller } from "react-scroll";

import { Toaster } from "react-hot-toast";

const initialState = {
  loading: false,
  items: [],
  page: 1,
  count: 6,
  offset: 0,
  totalPages: 0,
  isRegister: false,
};

const Home = () => {
  const [state, setState] = useState(initialState);

  const getItems = useCallback(
    async (page = 1, offset = 0) => {
      setState((prev) => {
        return { ...prev, loading: true };
      });

      const data = await getUsers({ count: 6, page, offset });

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
    },
    [setState]
  );

  const onShowMoreClick = useCallback(() => {
    setState((prev) => {
      const page = prev.page + 1;
      const offset = prev.page * prev.count;
      return {
        ...prev,
        page,
        offset,
      };
    });
  }, [setState]);

  useEffect(() => {
    getItems(state.page, state.offset);
  }, [getItems, state.page, state.offset]);

  const onSubmit = useCallback(
    async (value) => {
      setState((prev) => {
        return { ...prev, loading: true };
      });
      const data = new FormData();
      Object.keys(value).forEach((key) => {
        data.append(key, value[key]);
      });

      const result = await createNewUser(data);
      if (result) {
        setState({...initialState, isRegister:true});
        scroller.scrollTo("users", {
          duration: 500,
          delay: 500,
          smooth: true,
        });
        return;
      }

      setState((prev) => {
        return { ...prev, loading: false };
      });
    },
    [setState]
  );

  const { items, page, totalPages, loading, isRegister } = state;
  return (
    <>
      <Header />
      <main className={s.main}>
        <Hero />
        {!!items.length && <CardsSection
          onClick={onShowMoreClick}
          items={items}
          page={page}
          totalPages={totalPages}
        />}
        <FormSection onSubmit={onSubmit} isRegister={isRegister} />
      </main>
      <Toaster />
      {loading && <Loader />}
    </>
  );
};

export default Home;
