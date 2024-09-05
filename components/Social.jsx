import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/TanishqSom"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tanishq-som-5594a0269/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/tanishqsom"},
    {icon: <FaTwitter />, path: "https://x.com/SomTanishq"}
]

const Social = ({conatinerStyles, iconStyles}) => {
  return (
    <div className={conatinerStyles}>
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social