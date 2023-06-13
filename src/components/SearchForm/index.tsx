import { useForm } from 'react-hook-form'
import axios from 'axios'
import { SearchFormContainer } from './styles'
import { Content } from '../content'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchForm = () => {
  const { register, handleSubmit } = useForm()
  const [issues, setIssues] = useState([])
  const navigate = useNavigate()

  const handleFormSubmit = async ({ searchQuery }) => {
    try {
      if (searchQuery) {
        const response = await axios.get(
          'https://api.github.com/search/issues',
          {
            params: {
              q: searchQuery,
            },
          },
        )

        setIssues(response.data.items)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleItemClick = (issueId, issueTitle, issueDesc, issueUrl) => {
    navigate(`/post/${issueId}`, {
      state: { issueId, issueTitle, issueDesc, issueUrl },
    })
    console.log(issueId, issueTitle, issueDesc, issueUrl)
  }

  return (
    <div>
      <SearchFormContainer>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            type="text"
            {...register('searchQuery')}
            placeholder="Procurar uma Issue no GitHub"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </SearchFormContainer>
      <Content issues={issues} onItemClick={handleItemClick} />
    </div>
  )
}

export default SearchForm
