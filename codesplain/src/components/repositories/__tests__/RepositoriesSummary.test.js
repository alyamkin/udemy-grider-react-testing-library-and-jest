import { render, screen } from '@testing-library/react';
import RepositoriesSummary from '../RepositoriesSummary';

test('displays information about the repository', () => {
  const repository = {
    stargazers_count: 1,
    open_issues: 50,
    forks: 200,
    language: 'Javascript',
  };
  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }
});
