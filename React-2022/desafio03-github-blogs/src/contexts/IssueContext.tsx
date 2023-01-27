import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Issue {
  id: number
  url: string
  title: string
  body: string
  login: string
  company: string
  created_at: string
  comments: number
  number: number
  user: {
    login: string
  }
}

interface IssueResponse {
  items: Issue[]
}

interface TransactionContextType {
  issues: Issue[]
  fetchIssue: (query?: string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as TransactionContextType)

export function IssuesProvider({ children }: TransactionProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssue = useCallback(async (query = '') => {
    const user = 'vinicastroo';
    const repo = 'desafio03-github-blog';
    const formattedQuery = query.replace(' ', '%20');

    const response = await api.get(`/search/issues?q=${formattedQuery}repo:${user}/${repo}`,
    )

    const issueData: IssueResponse = response.data
    setIssues(issueData.items)
  }, [])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <IssueContext.Provider
      value={{
        issues,
        fetchIssue,
      }}
    >
      {children}
    </IssueContext.Provider>
  )
}
