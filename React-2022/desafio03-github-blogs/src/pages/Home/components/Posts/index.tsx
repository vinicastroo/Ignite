import { useContextSelector } from "use-context-selector";
import { IssueContext } from "../../../../contexts/IssueContext";
import { Post } from "../Post";
import { PostsContainer } from "./styles";

export function Posts() {
  const issues = useContextSelector(IssueContext, context => {
    return context.issues
  })

  return (
    <PostsContainer>
      {
        issues.length > 0 && issues.map(issue => (
          <Post post={issue} key={issue.id} />
        ))
      }
    </PostsContainer>
  )
}