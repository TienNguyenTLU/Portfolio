import './info.css';

export default function Info() {
  return (
    <div className='info-content'>
      <h1 className='about-me'>About me</h1>
      <div className='info-text'>
        <h1 className='greet'>Hi, I&apos;m Tien</h1>
        <p>
          I&apos;m a Frontend Developer passionate about creating intuitive and engaging user experiences.
          I specialize in React, Next.js, and Tailwind CSS &ndash; transforming ideas into beautifully crafted products.
        </p>

        <h1 className='achivements-h1'>Achievements:</h1>
        <ul className='achivements-list'>
          <li className="Education">
            <p>Education: <span>Software Engineer</span></p>
          </li>
          <li className="Certifications">
            <p>Certifications: <span>7.0 IELTS</span></p>
          </li>
          <li className="Projects">
            <p>Projects: <span>10+</span></p>
          </li>
        </ul>

        <p>
          I love solving problems, continuously learning, and working with teams to build meaningful digital products.
          Currently, I&apos;m looking for opportunities to grow as a Frontend Developer and expand my skills into Fullstack development.
        </p>
        <p>Let&rsquo;s connect and create something amazing!</p>
      </div>
    </div>
  );
}
