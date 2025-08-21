import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact_info.css';
import { IoIosMail } from 'react-icons/io';
export default function Contact() {
    const socialLinks = [
            { name: "GitHub", url: "" ,icon: <FaGithub /> },
            { name: "LinkedIn", url: "" ,icon: <FaLinkedin /> },
            { name: "Facebook", url: "",icon: <FaFacebook /> },
            { name: "Email", url: "mailto:",icon: <IoIosMail /> }
        ];
    return (
        <div className="contact-info">
            <h2 className='contact-title'>Contact Information</h2>
            <p>Email: <span className="Email">tiencp1234hd@gmail.com</span></p>
            <p>Phone: <span className="Phone">+84 123 456 789</span></p>
            <p>Address: <span className="Address">123 Main St, Hanoi, Vietnam</span></p>
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