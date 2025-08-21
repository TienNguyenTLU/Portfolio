import './bio.css'
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function Bio()
{
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/TienNguyenTLU" ,icon: <FaGithub /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/nguyen-tien-b48495254/" ,icon: <FaLinkedin /> },
        { name: "Facebook", url: "https://www.facebook.com/tiennguyen394/",icon: <FaFacebook /> },
        { name: "Email", url: "mailto:tiencp1234hd@gmail.com",icon: <IoIosMail /> }
    ];
    return (
        <div className="bio">
            <Image src="/logo.jpg" alt="Profile Picture" width={256} height={256} className="profile-pic"/>
            <h1>Nguyen Minh Tien</h1>
            <p>A Software Engineer who has developed countless innovative solutions.</p>
            <ul className="socialList">
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}