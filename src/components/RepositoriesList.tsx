import React, { FC, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface RepositoriesListProps {
}

export const RepositoriesList: FC<RepositoriesListProps> = () => {
  const [term, setTerm] = useState<string>('');
  const {searchRepositories} = useActions();
  const {data, loading, error} = useTypedSelector(state => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </>
  );
};
