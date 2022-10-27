import './header.module.less'
import { useState } from 'react'

interface headListProps {
  component: JSX.Element
  name: string
}

export default function Header({ headList }: { headList: headListProps[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='header'>
      <ul className='header__left'>
        {headList.map((headItem, index) => {
          return (
            <li
              key={index}
              style={index === activeIndex ? { color: '#eee' } : { color: '#bbb' }}
              onClick={() => setActiveIndex(index)}>
              {headItem.component}&nbsp;{headItem.name}
            </li>
          )
        })}
      </ul>
      <ul className='header__right'>
        <li>右侧区域</li>
      </ul>
    </div>
  )
}
