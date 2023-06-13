import { useEffect, useState } from 'react'
import axios from 'axios'
import { SummaryContainer, ProfileImage, ProfileInfo } from './styles'
import { FaGlobe, FaCode } from 'react-icons/fa'

export function Summary() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/skuzu7')
        setUserData(response.data)
      } catch (error) {
        console.log('Error:', error)
      }
    }

    fetchUserData()
  }, [])

  if (!userData) {
    return <p>Loading...</p>
  }

  const {
    name,
    avatar_url: avatarUrl,
    bio,
    html_url: htmlUrl,
    public_repos: publicRepos,
  } = userData

  return (
    <SummaryContainer>
      <ProfileImage>
        <img src={avatarUrl} alt="Imagem de Perfil" />
      </ProfileImage>

      <ProfileInfo>
        <h2>{name}</h2>
        <p>{bio}</p>
        <div className="additional-info">
          <p>
            <FaGlobe />
            <a href={htmlUrl}>{htmlUrl}</a>
          </p>

          <p>
            <FaCode />
            {publicRepos} public repositories
          </p>
        </div>
      </ProfileInfo>
    </SummaryContainer>
  )
}
