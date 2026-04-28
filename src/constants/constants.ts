export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const BALANCE_URI = "/balance";
export const TRANSACTIONS_URI = "/transactions";
export const BUDGETS_URI = "/budgets";
export const POTS_URI = "/pots";

// Settings for form fields
export const FORM_SETTINGS = {
  email: {
    required: "Required field",
    pattern: {
      message: "Incorrect Email",
      value: /^\S+@\S+$/i,
    },
  },
  password: {
    required: "Required field",
    minLength: {
      value: 4,
      message: "Should have 4 or more characters",
    },
  },
  name: {
    required: "Required field",
    minLength: { message: "Should be at least 4 characters", value: 4 },
    maxLength: { message: "Shouldn't be more than 30 characters", value: 30 },
  },
  target: {
    required: "Required field",
  },
  totalChange: {
    required: "Required field",
    min: {
      value: 10,
      message: "It can't be less than $10",
    },
  },
};
