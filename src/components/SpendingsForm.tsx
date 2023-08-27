import React, { useState } from "react";

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

import { useCreateSpendingMutation } from "../services/spendings";
import Alert from "./Alert";

interface SpendingsFormProps {
  isLoading: boolean;
}

const SpendingsForm: React.FC<SpendingsFormProps> = ({ isLoading }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const [
    createSpending,
    { isLoading: isCreatingSpendingLoading, isError, isSuccess },
  ] = useCreateSpendingMutation();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newSpendingData = {
      description,
      amount: parseFloat(amount),
      currency,
      spent_at: new Date().toISOString(),
    };

    await createSpending(newSpendingData);

    setDescription("");
    setAmount("");
    setCurrency("USD");
  };

  return (
    <>
      {isError && (
        <Alert type="error">
          <p>Oops! Something went wrong.</p>
        </Alert>
      )}
      {isSuccess && (
        <Alert type="success">
          <p>Success! Your spending has been recorded.</p>
        </Alert>
      )}
      <form
        onSubmit={(event) => handleFormSubmit(event)}
        className="flex justify-center gap-3 mb-10"
      >
        <Input
          className="w-64"
          type="text"
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          isDisabled={isLoading || isCreatingSpendingLoading}
        />
        <Input
          className="w-28"
          type="text"
          placeholder="Amount"
          value={amount}
          required
          onChange={(e) => {
            const newValue = e.target.value;
            const sanitizedValue = newValue.replace(/[^0-9.-]/g, "");
            setAmount(sanitizedValue);
          }}
          isDisabled={isLoading || isCreatingSpendingLoading}
        />
        <Select
          value={currency}
          testId="currency-select"
          onChange={(e) => setCurrency(e.target.value)}
          disabled={isLoading || isCreatingSpendingLoading}
          className="w-28 px-3 py-2 text-sm action-input"
          options={[
            { value: "USD", label: "USD" },
            { value: "HUF", label: "HUF" },
          ]}
        />
        <Button
          disabled={isLoading || isCreatingSpendingLoading}
          className="button-primary w-24 px-2 py-1"
          type="submit"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default SpendingsForm;
