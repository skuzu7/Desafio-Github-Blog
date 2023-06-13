import { ContentContainer, ContentCard } from './styles'

export function Content({ issues, onItemClick }) {
  return (
    <ContentContainer>
      {issues.map((issue) => (
        <ContentCard
          key={issue.id}
          onClick={() =>
            onItemClick(
              issue.id,
              issue.title,
              issue.labels.map((label) => label.description),
              issue.url,
            )
          }
        >
          <header>
            <span>{issue.title}</span>
          </header>
          <p>{issue.labels.map((label) => label.description).join(', ')}</p>
        </ContentCard>
      ))}
    </ContentContainer>
  )
}
