import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'John', email: 'john@john.com' },
  ];

  render(<UserList users={users} />);

  return { users };
}

test('render one row per user', () => {
  renderComponent();
  // const { container } = render(<UserList users={users} />);
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  // const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render the emails and name per user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
