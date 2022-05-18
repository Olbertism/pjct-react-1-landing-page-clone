/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';

const headerStyles = css``;

const navMainStyles = css`
  width: 100%;
  height: 80px;
  margin: 0 auto;

  z-index: 9500;
  background-color: #fff;
  position: fixed;

  img {
    max-width: 100%;
  }

  a.menuItem {
    padding: 20px;
  }
`;

// i think i can generalize this
const navOuterWrapperStyles = css`
  margin: 0 auto;
  padding-right: 40px;
  padding-left: 40px;
  max-width: 1330px;
`;

const containerMarginStyles = css`
  margin: 0 auto;
  padding-right: 40px;
  padding-left: 40px;
  max-width: 1330px;
`;

const navWrapperStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const navMenuStyles = css`
  //display: flex;
  align-items: center;
`;

const navLogoStyles = css`
  display: inline-block;
  width: 136px;
  margin-top: 0;
  margin-right: 80px;
  margin-left: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
`;

const navLoginStyles = css`
  //display: flex;
  align-items: center;
`;

const navItemListStyles = css`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  //gap: 20px;

  a {
    color: #313131;
    line-height: 120%;
    font-size: 15px;
    font-weight: 500;
  }

  /* li {
    display: inline;
  } */
`;

const navStartButtonStyles = css`
  background-color: #ff625a;
  width: 145px;
  padding: 15px 32px;
  border-radius: 2px;
  //display: inline-block;
  color: #fff !important;
  text-align: center;
`;

const genericArticleStyles = css`
  section {
    text-align: center;
  }
`;

const heroSectionStyles = css`
  padding-top: 220px;
  padding-bottom: 20px;

  h1 {
    margin: 00 32px;
    font-size: 72px;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`;

const sectionContainerStyles = css`
  max-width: 1330px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
`;

const heroGridStyles = css`
  display: grid;
  padding-top: 0;
  padding-bottom: 0;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(0px, 1fr);
`;

const heroGridItemWrapperStyles = css`
  justify-self: center;
`;

const heroHeadlineStyles = css`
  color: #ff625a;
`;

const heroSubheadlineStyles = css`
  margin-bottom: 56px;
  color: #797979;
  font-size: 18px;
  font-weight: 400px;
  font-family: 'inter', sans-serif;
  letter-spacing: 0;
`;

const heroButtonStyles = css`
  display: inline;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 2px;
  background-color: #ff625a;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0;
`;

const videoSectionStyles = css`
  padding-top: 120px;
  max-width: 1330px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
`;

const videoWrapperStyles = css`
  width: 100%;
  height: auto;
  max-width: 1330px;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  padding-right: 40px;
  padding-left: 40px;
`;

const endorsementGridStyles = css`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 0.75fr 1fr 1fr 1fr 1fr 0.5fr 0.5fr;

  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
`;

const logoSmallStyles = css`
  max-width: 70% !important;
  margin: 0 auto;
`;

const logo6Styles = css`
  padding-right: 10px;
  padding-left: 10px;
`;

const footerMainStyles = css`
  background-color: #060606;
  margin-top: 75px;
  padding-top: 75px;
  list-style-type: none;
  color: #797979;
  font-size: 14px;

  a {
    color: #797979;
  }

  a:hover {
    color: #f0f0f0;
  }

  h4 {
    font-size: 18px;
    color: #f0f0f0;
    margin-top: 0;
  }
`;

const footerGridStyles = css`
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 0.25fr 1fr;
`;

const footerLogoStyles = css`
  display: inline-block;
  width: 60%;
  margin-left: 0;
`;

const footerSubGridStyles = css`
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 40x;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const footerSubGridListStyles = css`
  list-style-type: none;
  padding-left: 0;
`;

const footerDividerStyles = css`
  margin-top: 65px;
  margin-bottom: 48px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #1f2125;
  width: 100%;
  height: 1px;
`;

const footerLegalStyles = css`
  display: flex;
  justify-content: space-between;
`;

const footerLegalListStyles = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style-type: none;
`;

function App() {
  return (
    <div className="App">
      <header css={headerStyles}>
        <nav css={navMainStyles}>
          <div className="navOuterWrapper" css={containerMarginStyles}>
            <div className="navWrapper" css={navWrapperStyles}>
              <a>
                <img src="/logo.png" alt="the logo" css={navLogoStyles} />
              </a>
              <div className="navMenu" css={navMenuStyles}>
                <ul css={navItemListStyles}>
                  <li>
                    <a className="menuItem" href="/">
                      Products
                    </a>
                  </li>
                  <li>
                    <a className="menuItem" href="/">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a className="menuItem" href="/">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="menuItem" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="menuItem" href="/">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a className="menuItem" href="/">
                      Company
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navLogin" css={navLoginStyles}>
                <ul css={navItemListStyles}>
                  <li>
                    <a className="menuItem" href="/">
                      Login
                    </a>
                  </li>
                  <li>
                    <a css={navStartButtonStyles} href="/">
                      Get started
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <article css={genericArticleStyles}>
          <section css={heroSectionStyles}>
            <div className="sectionContainer" css={sectionContainerStyles}>
              <div className="heroGrid" css={heroGridStyles}>
                <div
                  className="heroGridItemWrapper"
                  css={heroGridItemWrapperStyles}
                >
                  <h1>
                    <span css={heroHeadlineStyles}>
                      Automate data preparation.
                    </span>
                    <br />
                    <span>Deliver better datasets.</span>
                  </h1>
                  <p css={heroSubheadlineStyles}>
                    Superb AI helps you effortlessly label, manage, and curate
                    training datasets for computer vision and makes rapid,
                    consistent iteration a reality.
                  </p>
                </div>
                <a href="/" css={heroButtonStyles}>
                  Get started
                </a>
              </div>
            </div>
          </section>
          <section css={videoSectionStyles}>
            <div className="videoWrapper" css={videoWrapperStyles}>
              {/* <iframe
                src="https://www.youtube.com/embed/JBEY9hDkjRw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                sandbox=""
              /> */}
              <iframe
                src="https://www.youtube.com/embed/JBEY9hDkjRw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-same-origin"
              />
            </div>
          </section>
          <section css={containerMarginStyles}>
            <p css={heroSubheadlineStyles}>
              Trusted by ingenious AI teams that know better data leads to
              better models.
            </p>
            <div className="endorsementGrid" css={endorsementGridStyles}>
              <img
                src="/620bd7510b40693014d42de4_logo_samsung.png"
                alt="partner logo 1"
              />
              <img
                src="/620bd76677dec74cfed5cfc5_logo_builtrobotics.png"
                alt="partner logo 2"
                css={logoSmallStyles}
              />
              <img
                src="/620bd7823939f90e3c5ba3b0_logo_lg.png"
                alt="partner logo 3"
              />
              <img
                src="/620bd7925a73c26c84b4366a_logo_qualcomm.png"
                alt="partner logo 4"
              />
              <img
                src="/620bd7a1e5e45164580427be_logo_phantom.png"
                alt="partner logo 5"
              />
              <img
                src="/620bd7b5e5e45149e904288f_logo_thordrive.png"
                alt="partner logo 6"
                css={logo6Styles}
              />
              <img src="/hyundai.png" alt="partner logo 7" />
              <img
                src="/620bd7dd2d0d8344b797dbc1_logo_kia.png"
                alt="partner logo 8"
              />
            </div>
          </section>
        </article>
      </main>
      <footer css={footerMainStyles}>
        <div css={containerMarginStyles}>
          <div className="footerGrid" css={footerGridStyles}>
            <div>
              <img
                src="/logo_footer.png"
                alt="the logo"
                css={footerLogoStyles}
              />
              <p>
                Get the most from your unique data. Build and ship more and
                better datasets and experiment, iterate, and deploy your
                computer vision applications faster than ever before.
              </p>
              <div className="socialButtons">
                <a href="/">
                  <img src="" alt="" />
                </a>
                <a href="/">
                  <img src="" alt="" />
                </a>
              </div>
            </div>
            <div className="footerSubGrid" css={footerSubGridStyles}>
              <div>
                <h4>Products</h4>
                <ul css={footerSubGridListStyles}>
                  <li>
                    <a href="/">Automate</a>
                  </li>
                  <li>
                    <a href="/">Label</a>
                  </li>
                  <li>
                    <a href="/">Manage</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Solutions</h4>
                <ul css={footerSubGridListStyles}>
                  <li>
                    <a href="/">Retail</a>
                  </li>
                  <li>
                    <a href="/">Agriculture &amp; Agritech</a>
                  </li>
                  <li>
                    <a href="/">Transportation</a>
                  </li>
                  <li>
                    <a href="/">View All Solutions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Resources</h4>
                <ul css={footerSubGridListStyles}>
                  <li>
                    <a href="/">Datasets</a>
                  </li>
                  <li>
                    <a href="/">Documentation</a>
                  </li>
                  <li>
                    <a href="/">Version History</a>
                  </li>
                  <li>
                    <a href="/">Datacast</a>
                  </li>
                  <li>
                    <a href="/">Whitepaper</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul css={footerSubGridListStyles}>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div />
            </div>
          </div>
          <div className="footerDivider" css={footerDividerStyles} />
        </div>

        <div css={containerMarginStyles}>
          <div className="footerLegal" css={footerLegalStyles}>
            <p>© Superb AI, Inc.</p>
            <ul css={footerLegalListStyles}>
              <li>
                <a href="/">Terms &amp; Conditions</a> |
              </li>
              <li>
                <a href="/">Privacy Policy</a> |
              </li>
              <li>
                <a href="/">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
