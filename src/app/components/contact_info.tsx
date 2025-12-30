import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact_info.css';
import { IoIosMail } from 'react-icons/io';
export default function Contact() {
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/TienNguyenTLU" ,icon: <FaGithub /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/nguyen-tien-b48495254/" ,icon: <FaLinkedin /> },
        { name: "Facebook", url: "https://www.facebook.com/tiennguyen394/",icon: <FaFacebook /> },
        { name: "Email", url: "mailto:tiencp1234hd@gmail.com",icon: <IoIosMail /> }
    ];
    return (
        <div className="contact-info">
            <h2 className='contact-title'>Contact Information</h2>
            <p>Email: <span className="Email">tiencp1234hd@gmail.com</span></p>
            <p>Phone: <span className="Phone">+84 865 725 929</span></p>
            <p>Address: <span className="Address">182 Dang Tien Dong,Dong Da, Hanoi, Vietnam</span></p>
            <ul className="socialnetworks">
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