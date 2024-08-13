function About() {
  return (
    <div id="about" className="terminal">
      <div className="terminal-header">
        <div className="header-button red"></div>
        <div className="header-button yellow"></div>
        <div className="header-button green"></div>
      </div>

      <div className="terminal-window">
        <div className="statement">
          <div className="input-statement">My.currentLocation</div>
          <div className="return-statement">{`"Wisconsin, USA"`}</div>
        </div>

        <div className="statement">
          <div className="input-statement">My.contactInfo</div>
          <div className="return-statement">
            [
            <a href="mailto:jaybrady15@gmail.com">{`"jaybrady15@gmail.com" ,`}</a>
            <a
              rel="noopener"
              href="https://www.linkedin.com/in/jay-brady-ba0141166/"
            >
              {` "LinkedIn" ,`}
            </a>
            <a rel="noopener" href="https://github.com/jaybradyishere">
              {` "GitHub"`}
            </a>{" "}
            ]
          </div>
        </div>

        <div className="statement">
          <div className="input-statement">My.resume</div>
          <div className="return-statement">
            <a rel="noopener" href="/your_resume.pdf" target="_blank">
              {`"my_resume.pdf"`}
            </a>
          </div>
        </div>

        <div className="statement">
          <div className="input-statement">My.interests</div>
          <div className="return-statement">
            {`["coding😍😍", "music 🎶", "running 🏃🏾"]`}
          </div>
        </div>

        <div className="statement">
          <div className="input-statement">My.education</div>
          <div className="return-statement">
            {`"Self Taught - University Of WI-Milwaukee"`}
          </div>
        </div>

        <div className="statement">
          <div className="input-statement">My.skills</div>
          <div className="return-statement">
            {`["HTML", "CSS", "SCSS", "Tailwind", "JavaScript", "React", "Next.js", "Type-Script"] `}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
