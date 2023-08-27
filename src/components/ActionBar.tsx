import { useState } from "react";

import { CURRENCY_OPTIONS, SORT_OPTIONS } from "../contants";
import {
  ActionBarProps,
  SortingDirection,
  Spending,
  filterByCurrency,
} from "../types/types";

import Button from "./Button";
import Select from "./Select";
import SpendingsForm from "./SpendingsForm";

const ActionBar = ({ setFilteredData, data, isLoading }: ActionBarProps) => {
  const [filteringBy, setFilteringBy] = useState<filterByCurrency>("ALL");
  const [sortOption, setSortOption] = useState<SortingDirection>("date-des");

  const handleFilterAndSort = (
    currency: filterByCurrency,
    direction: SortingDirection
  ) => {
    const compareFunction = (a: Spending, b: Spending) => {
      if (direction === "date-des") {
        return new Date(b.spent_at).getTime() - new Date(a.spent_at).getTime();
      } else if (direction === "date-asc") {
        return new Date(a.spent_at).getTime() - new Date(b.spent_at).getTime();
      } else if (direction === "amount-asc") {
        return a.amount - b.amount;
      } else if (direction === "amount-des") {
        return b.amount - a.amount;
      }
      return 0;
    };

    const sortedData = [...data].sort(compareFunction);

    const filteredAndSortedData =
      currency !== "ALL"
        ? sortedData.filter((item: Spending) => item.currency === currency)
        : sortedData;

    setFilteredData(filteredAndSortedData);
    setFilteringBy(currency);
    setSortOption(direction);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOption = event.target.value as SortingDirection;
    handleFilterAndSort(filteringBy, newSortOption);
  };

  const handleDataFiltering = (key: filterByCurrency) => {
    if (key === "ALL") {
      handleFilterAndSort("ALL", sortOption);
    } else {
      handleFilterAndSort(key, sortOption);
    }
  };

  return (
    <div className="w-fit p-4 mb-10 ">
      <SpendingsForm isLoading={isLoading} />
      <div className="flex justify-between">
        <Select
          testId="sort-select"
          value={sortOption}
          onChange={handleSortChange}
          disabled={isLoading}
          options={SORT_OPTIONS}
          name="Sort By"
          className="w-min px-3 py-2 text-sm action-input"
        />
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {CURRENCY_OPTIONS.map((currency) => (
            <Button
              key={currency}
              disabled={isLoading}
              onClick={() => handleDataFiltering(currency as filterByCurrency)}
              className={`rounded button-grup ${
                filteringBy === currency
                  ? "ring-2 z-10 text-sky-500 ring-sky-500"
                  : ""
              }`}
            >
              {currency}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
