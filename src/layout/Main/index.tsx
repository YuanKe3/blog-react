import './main.module.less'
import right from 'assets/right.svg'

export default function Main() {
  return (
    <div>
      <div className='article'>
        <div className='article__left'>
          <p className='article__title ellipse-one-line'>
            我是一个严肃的标题我是一个严肃的标题我是一个严肃的标题
          </p>
          <div className='article__info ellipse-one-line'>
            <span className='article__createTime'>2022-06-25 08:30:14</span>
            <span className='article__category'>
              发表在&nbsp;<span style={{ color: 'violet', cursor: 'pointer' }}>编程语言</span>
            </span>
            <span className='article__views'>0</span>
          </div>
          <span className='article__outline ellipse-lines'>
            北越南此举，无疑是搬起石头砸自己的脚 北越南此举，无疑是搬起石头砸自己的脚
            北越南此举，无疑是搬起石头砸自己的脚 北越南此举，无疑是搬起石头砸自己的脚
            北越南此举，无疑是搬起石头砸自己的脚 北越南此举，无疑是搬起石头砸自己的脚
          </span>
        </div>
        <div className='article__right'>
          <img src={right} alt='' />
        </div>
      </div>
    </div>
  )
}
