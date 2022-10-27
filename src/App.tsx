import { useState } from 'react'
import { HomeOutlined, FileTextOutlined, StarOutlined } from '@ant-design/icons'
import './App.less'
import Header from 'layout/Header'
import Aside from 'layout/Aside'
import Nav from 'layout/Nav'
import Main from 'layout/Main'

function App() {
  const [headList] = useState([
    {
      component: <HomeOutlined />,
      name: '主页'
    },
    {
      component: <FileTextOutlined />,
      name: '笔记'
    },
    {
      component: <StarOutlined />,
      name: '收藏'
    }
  ])
  return (
    <div className='app'>
      <header className='header'>
        <Header headList={headList} />
      </header>
      <nav className='nav'>
        <Nav />
      </nav>
      <main className='main'>
        <Main />
      </main>
      <aside className='aside'>
        <Aside />
      </aside>
      <footer className='footer'>
        <p>©2022-2022 袁珂版权所有 联系我: QQ:1393764662</p>
      </footer>
    </div>
  )
}

export default App
