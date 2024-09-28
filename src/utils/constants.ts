export const API_URL = "http://localhost:8000";

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
      value: 6,
      message: "Should have 6 or more characters",
    },
  },
  name: {
    required: "Required field",
    minLength: { message: "Should be at least 4 characters", value: 4 },
    maxLength: { message: "Shouldn't be more than 30 characters", value: 30 },
  },
  target: {
    required: "Required field",
    pattern: { message: "Numbers only", value: /^\d+$/ },
  },
};
