import Me from "../assets/My Images/hacker.png";

function Banner() {
  return (
    <div className="window">
      <div id="home" className="banner-container">
        <div className="banner-wrapper">
          <div className="banner-header">
            <h1>{`Jay Brady's Computer 💻`}</h1>
            <p>
              Front End Developer located in <strong>Wisconsin</strong>
            </p>
          </div>

          <div className="banner-image-section">
            <img src={Me} />
            <div className="password-container">
              <input
                className="password"
                type="text"
                placeholder="Enter password"
                disabled
              />
            </div>
          </div>
          <div className="banner-techstack-section">
            <h2>Tech Stack / Skills</h2>
            <img
              src="https://skillicons.dev/icons?i=html,css,scss,tailwind,react,javascript,typescript,nextjs,aftereffects,photoshop"
              alt="skill-icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
