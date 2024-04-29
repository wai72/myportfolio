import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Grace</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/wai72" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/yinwainaing/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:grace.yinwainaing@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/petiaung50/" target="_blank"><SiLeetcode/></a>
        <a href="https://medium.com/@khunsoemoeaung" target='_blank'><FaMedium/></a> */}
      </div>
    </footer>
  )
}

export default Footer