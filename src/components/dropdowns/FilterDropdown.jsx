import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

function FilterDropdown({ selectedFilters, onFilterChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (brand) => {
    const updatedFilters = selectedFilters.includes(brand)
      ? selectedFilters.filter((item) => item !== brand)
      : [...selectedFilters, brand];
    onFilterChange(updatedFilters);
  };

  return (
    <div className="topBar-item" onClick={toggleDropdown}>
      <span>{t("filter")}</span>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          {["Xiaomi", "Acer", "Apple"].map((brand) => (
            <li key={brand} className="dropdown-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(brand)}
                  onChange={() => handleCheckboxChange(brand)}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterDropdown;
