import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('Display two inputs and one button when load the app', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('It calls onAddUser when the for is submitted', () => {
  const mock = jest.fn();

  render(<UserForm onAddUser={mock} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  user.click(nameInput);
  user.keyboard('Jane');
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'Jane', email: 'jane@jane.com' });
});

test('Empties the two inputs when for is submitted', () => {
  render(<UserForm onAddUser={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  user.click(nameInput);
  user.keyboard('Jane');
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
