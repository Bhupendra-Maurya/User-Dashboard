interface Address {
  street: string;
  city: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

interface UsersListProps {
    users: User[];
  }
export type { User, SearchBarProps,UsersListProps };
