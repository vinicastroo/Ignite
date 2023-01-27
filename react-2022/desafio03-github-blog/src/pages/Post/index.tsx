import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { api } from '../../lib/axios';
import { HeaderPost, Indicators, Links, Markdown, PostContainer } from './styles';
import remarkGfm from 'remark-gfm'

interface Issue {
  id: number
  html_url: string
  title: string
  body: string
  login: string
  company: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}

export function Post() {
  let { id } = useParams();

  const [issue, setIssue] = useState<Issue>()
  const [publishedDateRelativeToNow, setPublishedDateRelativeToNow] = useState('')
  const [publishedDateFormatted, setPublishedDateFormatted] = useState('')

  const fetchIssue = useCallback(async () => {
    const user = 'vinicastroo';
    const repo = 'desafio03-github-blog';

    const response = await api.get<Issue>(`/repos/${user}/${repo}/issues/${id}`,
    )

    setPublishedDateRelativeToNow(formatDistanceToNow(new Date(response.data.created_at), {
      locale: ptBR,
      addSuffix: true
    }))

    setPublishedDateFormatted(format(
      new Date(response.data.created_at),
      "dd 'de' LLLL 'às' HH:mm'h'",
      {
        locale: ptBR,
      }
    ));

    setIssue(response.data)
  }, [])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <PostContainer>
      {
        issue && (
          <>
            <HeaderPost>
              <Links>
                <a href='/'>
                  <i className="fa-solid fa-chevron-left" />
                  <span>Voltar</span>
                </a>

                <a href={issue.html_url}>
                  <span>Ver no github</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </Links>

              <h1>{issue?.title}</h1>

              <Indicators>
                <div>
                  <i className="fa-brands fa-github" />
                  <span>{issue?.user.login}</span>
                </div>
                <div>
                  <i className="fa-regular fa-calendar"></i>
                  <time
                    title={publishedDateFormatted}
                    dateTime={issue?.created_at}
                  >
                    {publishedDateRelativeToNow}
                  </time>
                </div>
                <div>
                  <i className="fa-regular fa-comment"></i>
                  <span>{issue && issue.comments > 0 ? issue.comments : 'Sem'} comentários</span>
                </div>
              </Indicators>
            </HeaderPost>

            <Markdown children={issue.body} remarkPlugins={[remarkGfm]} />
          </>
        )
      }
    </PostContainer >
  )
}