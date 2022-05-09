import "../styles/Footer.css";
import Button from "./Button";
import Logo from "./Logo";
import { RiTwitterFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-center">
        <div className="footer-container ">
          <div className="footer">
            <div>
              <div>
                <h1>Imagine a Place</h1>
              </div>
              <div>
                <p>English, USA</p>
              </div>
              <div>
                <ul className="flex space-between">
                  <li>
                    <RiTwitterFill fill="white" />
                  </li>
                  <li>
                    <FiInstagram color="white" />
                  </li>
                  <li>
                    <RiFacebookBoxFill fill="white" />
                  </li>
                  <li>
                    <RiYoutubeFill fill="white" />
                  </li>
                </ul>
              </div>
            </div>
            {/* column2 */}
            <div>
              <div>Product</div>
              <div>Download</div>
              <div>Nitro</div>
              <div>Status</div>
            </div>
            {/* column3 */}
            <div>
              <div>Company</div>
              <div>About</div>
              <div>Jobs</div>
              <div>Branding</div>
              <div>Newsroom</div>
            </div>
            {/* column4 */}
            <div>
              <div>Resources</div>
              <div>College</div>
              <div>Support</div>
              <div>Safety</div>
              <div>Blog</div>
              <div>Feedback</div>
              <div>Developers</div>
            </div>
            {/* column5 */}
            <div>
              <div>Policies</div>
              <div>Terms</div>
              <div>Privacy</div>
              <div>Cookie settings</div>
              <div>Guidelines</div>
              <div>Acknowledgments</div>
              <div>Licenses</div>
            </div>
          </div>
          <div class="border mt-20 mb-20"></div>
          {/* Row2  */}
          <div className="flex justify-between">
            <div>
              <Logo />
            </div>

            <div>
              <Button message="Open Discord" bgColor="#404eed" color="white" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
