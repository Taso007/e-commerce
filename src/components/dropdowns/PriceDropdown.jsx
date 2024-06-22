import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

function PriceDropdown({ onSort }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation();
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSort = (direction) => {
    onSort(direction);
    setDropdownOpen(false);
  };
 
  return (
    <div className="topBar-item" onClick={toggleDropdown}>
      <span>{t("sort")}</span>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => handleSort("Price Increasing")}>{t("priceIncreasing")}</li>
          <li className="dropdown-item" onClick={() => handleSort("Price Decreasing")}>{t("priceDecreasing")}</li>
        </ul>
      )}
    </div>
  );
}

export default PriceDropdown;
