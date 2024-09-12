import { render, screen } from '@testing-library/react';
import UsersList from '../components/UsersList';

const mockUsers = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com', address: { street: '123 Main St', city: 'Anytown' } },
  { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com', address: { street: '456 Elm St', city: 'Othertown' } }
];

describe("UsersList",()=>{
  test('renders the user table with data', () => {
    render(<UsersList users={mockUsers} />);
  
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3); // 2 users + 1 header row
  
    const john = screen.getByText('John Doe');
    expect(john).toBeInTheDocument();
  
    const jane = screen.getByText('Jane Smith');
    expect(jane).toBeInTheDocument();
  });
  
  test('displays no users found message', () => {
    render(<UsersList users={[]} />);
    const noUsersMessage = screen.getByText('No users found');
    expect(noUsersMessage).toBeInTheDocument();
  });
  
})