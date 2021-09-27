import React, { useState, useEffect, useContext } from "react";
import { useModalContext } from "../../context/ModalContext";
import CocktailsService from "../../services/CocktailsService";
import DataContext from "../../context/DataContext";

import HeaderTitle from "../../components/HeaderTitle";
import Pagination from "../../components/Pagination";
import Cocktails from "./Cocktails";
// import Loader from "../../components/Loader";

import "./Tab3.scss";

const Tab3 = () => {
  const { data, action } = useContext(DataContext);
  const { currentPage, currentCocktails } = data;
  const { launchModal } = useModalContext();
  const [cocktails, setCocktails] = useState(currentCocktails || []);
  const [page, setPage] = useState(currentPage || 1);

  const loadData = () => {
    // setTimeout para apreciar el skeleton
    setTimeout(async () => {
      try {
        const response = await CocktailsService.getCocktails(page);
        setCocktails(response);
        action({ currentCocktails: response, currentPage: page });
      } catch (error) {
        launchModal(error?.message || "Error en el servidor");
      }
    }, 1500);
  };

  useEffect(() => {
    if (cocktails?.length === 0) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className="tab3">
        <HeaderTitle text="Bebidas" />
        <Cocktails items={cocktails || []} />
        {cocktails?.length > 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            setCocktails={setCocktails}
          />
        )}
      </div>
    </>
  );
};

export default Tab3;
