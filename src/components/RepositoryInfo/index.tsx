import React from 'react'
import { Container } from './styles'
import { Repositories } from '../../pages/Repository'

type Props = {
  repository: Repositories
}

export const RepositoryInfo = ({ repository }: Props) => {
  return (
    <Container>
      <header>
        <img
          src={repository.owner.avatar_url}
          alt={repository.owner.login}
        />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>{repository.stargazers_count}</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>{repository.forks_count}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{repository.open_issues_count}</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </Container>
  )
}
