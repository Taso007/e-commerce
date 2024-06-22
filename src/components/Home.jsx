import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Product from './products/Product'
import { useProductContext } from "../contexts/ProductContext";
import '../styles/home.css';
import PriceDropdown from "./dropdowns/PriceDropdown";
import FilterDropdown from "./dropdowns/FilterDropdown";
import { useTranslation } from 'react-i18next';

function Home() {
  const { products } = useProductContext();
  const [searchResults, setSearchResults] = useState(products);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    handleFilter(selectedFilters);
  }, [selectedFilters]);

  const handleSearch = (searchInput) => {
    const filteredResults = products.filter(product =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSort = (direction) => {
    const sortedResults = [...searchResults];
    if (direction === "Price Increasing") {
      sortedResults.sort((a, b) => a.price - b.price);
    } else if (direction === "Price Decreasing") {
      sortedResults.sort((a, b) => b.price - a.price);
    }
    setSearchResults(sortedResults);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const handleFilter = (filters) => {
    if (filters.length === 0) {
      setSearchResults(products);
    } else {
      const filteredResults = products.filter(product =>
        filters.includes(product.brand)
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="content-container">
        <div className="left-sidebar">
          <PriceDropdown onSort={handleSort} />
          <FilterDropdown selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
        </div>
        <div className="right-sidebar">
          <h1 className="ourProducts">{t("ourProducts")}</h1>
        </div>
      </div>
      <div className="container">
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <div>{t("noprodsfound")}</div>
        )}
      </div>
    </>
  );
}

export default Home;
