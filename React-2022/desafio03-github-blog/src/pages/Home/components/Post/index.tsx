import { PostContainer } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
  number: number
}

interface PostProps {
  post: Issue
}
export function Post({ post }: PostProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <PostContainer href={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{publishedDateRelativeToNow}</span>
      </div>

      <p>{post.body}</p>
    </PostContainer>
  )
}