import { useState, useEffect } from "react";

import ActionBar from "./components/ActionBar";
import Spendings from "./components/Spendings";

import { useGetSpendingQuery } from "./services/spendings";
import { Spending } from "./types/types";
import { Spinner } from "../src/assets/index";

function App() {
  const {
    data,
    error: hasErrorGettingSpendings,
    isLoading: isGetSpendingsLoading,
  } = useGetSpendingQuery({});
  const [filteredData, setFilteredData] = useState<Spending[]>(data || []);

  useEffect(() => {
    setFilteredData(data || []);
  }, [data]);

  if (hasErrorGettingSpendings) {
    return (
      <div
        className="px-4 py-3 leading-normal text-red-100 bg-red-700 rounded-lg"
        role="alert"
      >
        <p>Looks like we are having issues getting to your spendings </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-200 flex justify-center p-5">
      <div>
        <ActionBar
          setFilteredData={setFilteredData}
          data={data}
          isLoading={isGetSpendingsLoading}
        />
        {isGetSpendingsLoading ? (
          <div className="text-center">
            <div role="status">{Spinner}</div>
          </div>
        ) : (
          filteredData?.map((spending: Spending) => (
            <Spendings key={spending.id} spending={spending} />
          ))
        )}
      </div>
    </main>
  );
}

export default App;
