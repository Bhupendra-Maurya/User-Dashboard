import { render, screen, waitFor } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  test("renders search input", () => {
    const mockSetSearchQuery = jest.fn(); //jest.fn(): Creates a mock function, allowing you to test if and how functions are called.
    render(<SearchBar searchQuery="" setSearchQuery={mockSetSearchQuery} />);

    const searchInput = screen.getByPlaceholderText(/search by name.../i);
    expect(searchInput).toBeInTheDocument();
  });

  test("updates search query on input change", async () => {
    const mockSetSearchQuery = jest.fn();
    render(<SearchBar searchQuery="" setSearchQuery={mockSetSearchQuery} />);
    const searchInput = screen.getByPlaceholderText(/search by name.../i);
    // fireEvent.change(searchInput, { target: { value: "John" } });
    
     await userEvent.type(searchInput, "John");
    
    expect(mockSetSearchQuery).toHaveBeenCalledWith("John");
  });
});
