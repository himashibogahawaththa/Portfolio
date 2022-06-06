import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{ImBehance2} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href='https://www.linkedin.com/in/himashi-bogahawaththa-b922911b2/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/himashibogahawaththa' target="_blank"><FaGithub/></a>
      <a href='https://www.behance.net/himashibogahawaththa' target="_blank"><ImBehance2/></a>
    </div>
  )
}

export default HeaderSocials