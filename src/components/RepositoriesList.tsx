import React, { FC, useState } from 'react';
import { useActions } from '../hooks/useActions';

interface RepositoriesListProps {
}

export const RepositoriesList: FC<RepositoriesListProps> = () => {
  const [term, setTerm] = useState<string>('')
   const { searchRepositories } = useActions()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    searchRepositories(term)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={term} onChange={e=> setTerm(e.target.value)} />
      <button>Search</button>
    </form>

  );
};
