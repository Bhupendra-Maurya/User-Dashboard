import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
import { User } from "../types/User";

describe("Dashboard", () => {
  test("renders the dashboard and displays loading state", () => {
    render(<Dashboard />);
    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  test("displays users after fetching data", async () => {
    const mockUsers: User[] = [
      { id: 1, name: "John Doe", username: "johndoe", email: "john@example.com", address: { street: "123 Main St", city: "Anytown" } },
      { id: 2, name: "Jane Smith", username: "janesmith", email: "jane@example.com", address: { street: "456 Elm St", city: "Othertown" } }
    ];

    // Mock fetch to return mockUsers
    // jest.spyOn allows you to mock or spy on existing functions.
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => mockUsers
    } as Response);

    render(<Dashboard />);

    await waitFor(() => {
      const userName = screen.getByText(/John Doe/i);
      expect(userName).toBeInTheDocument();
    });

    // Clean up mock
    jest.restoreAllMocks();
  });

  test("displays error message when fetching fails", async () => {
    jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Network error"));

    render(<Dashboard />);
    
    await waitFor(() => {
      const errorMessage = screen.getByText(/Failed to load user data/i);
      expect(errorMessage).toBeInTheDocument();
    });

    jest.restoreAllMocks();
  });
});
