import React from 'react';

const TransactionForm: React.FC = () => {
  return (
    <form>
      <h4 className="mb-3">
        Create new Transaction
      </h4>
      <div className="form-group mb-3">
        <label htmlFor="type" className="text-secondary mb-2">Category type</label>
        <select
          required
          name="type"
          id="type"
          className="form-select"
        >
          <option disabled value="">Select a category</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="name" className="text-secondary mb-2">Category name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="form-control"
      
        />
      </div>
      <button
        type="submit"
        className="btn btn-success w-100"
      >
        Create
      </button>
    </form>
  );
};

export default TransactionForm;