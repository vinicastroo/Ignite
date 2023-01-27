import { useContextSelector } from "use-context-selector";
import { IssueContext } from "../../../../contexts/IssueContext";
import { SearchContainer } from "./styles";

export function Search() {
  const fetchIssue = useContextSelector(IssueContext, context => {
    return context.fetchIssue
  })

  const totalIssues = useContextSelector(IssueContext, context => {
    return context.issues.length
  })

  async function handleSearchTransactions(query: string) {
    await fetchIssue(query)
  }

  return (
    <SearchContainer>
      <div>
        <strong>Publicações</strong>
        <strong>{totalIssues > 0 ? `${totalIssues} publicações` : ''} </strong>
      </div>

      <input type="text" placeholder="Buscar conteúdo" onBlur={event => handleSearchTransactions(event.target.value)} />
    </SearchContainer>
  )
}