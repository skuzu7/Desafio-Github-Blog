import { useLocation, Link } from 'react-router-dom'
import { PostContainer, PostStyle } from './styles'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'

export function Post() {
  const location = useLocation()
  const { issueTitle, issueDesc, issueUrl } = location.state

  return (
    <PostContainer>
      <header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <FiArrowLeft size={20} /> Voltar
        </Link>
        <p>
          <a href={issueUrl} target="_blank" rel="noopener noreferrer">
            GitHub <FiExternalLink size={16} style={{ marginLeft: '4px' }} />
          </a>
        </p>
      </header>

      <PostStyle>
        <span>{issueTitle}</span>
        <p>{issueDesc}</p>
      </PostStyle>
    </PostContainer>
  )
}

export default Post
