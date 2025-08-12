import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on the list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button', { name: /add user/i });

  user.click(nameInput);
  user.keyboard('jane');
  user.click(emailInput);
  user.keyboard('jane@jane.com');
  user.click(button);

  const nameCell = screen.getByRole('cell', { name: 'jane' });
  const emailCell = screen.getByRole('cell', { name: 'jane@jane.com' });

  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});
