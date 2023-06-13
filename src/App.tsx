import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { Post } from './components/Post'

import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:itemId" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
