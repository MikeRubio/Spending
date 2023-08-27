import { timeFormatter } from "./helpers/timeFormatter";
import { MoneyIcon, EditIcon, TrashIcon } from "../assets/index";
import { SpendingsProps } from "../types/types";

const Spendings: React.FC<SpendingsProps> = ({ spending }) => {
  const { amount, currency, description, spent_at } = spending;
  const currencySymbol = currency === "USD" ? "$" : "Ft";
  const formattedDateTime = timeFormatter(spent_at);

  return (
    <div className="bg-white shadow-xl p-4 rounded-md flex items-center justify-evenly m-3 hover:bg-slate-50">
      <span className="bg-sky-100 rounded-md">{MoneyIcon}</span>
      <div className="flex flex-col w-1/2">
        <p className="font-medium">{description}</p>
        <p className="text-zinc-400">{formattedDateTime}</p>
      </div>
      <p className="font-medium">
        {currencySymbol}
        {amount}
      </p>
      <div className="flex gap-3">
        <p>{EditIcon}</p>
        <p>{TrashIcon}</p>
      </div>
    </div>
  );
};

export default Spendings;
