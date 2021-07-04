import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Issues } from './styles'
import { RepositoryInfo } from '../../components/RepositoryInfo'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import { Header } from '../../components/Header'

type RepositoryParams = {
  repository: string;
}

export type Repositories = {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

type Issue = {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repositories | null>(null)
  const [issue, setIssues] = useState<Issue[]>([])

  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(response => {
      setRepository(response.data)
    })

    api.get(`/repos/${params.repository}/issues`).then(response => {
      setIssues(response.data)
    })
  }, [params.repository])

  return (
    <>
      <Header />

      { repository && (
          <RepositoryInfo repository={repository}/>
      )}

      <Issues>
        { issue.map(issue => (
          <a key={issue.id} target="_blank" href={issue.html_url} rel="noreferrer">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
