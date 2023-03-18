import "./Header.css";
import imgone from "../Header/img/1.png" 
function Header() {
  return (
    <>
      <div>
        <header class="header">
          <div class="container">
            <div class="header_box">
              <div class="image_box">
                <a href="./main.html"></a>
              </div>
                <img src={imgone} alt="" />
              <nav>
                <ul class="header_box_items">
                  <li class="header_item">
                    <a href="#menu_pack">Menu</a>
                  </li>
                  <li class="header_item">
                    <a href="#news">News</a>
                  </li>
                  <li class="header_item">
                    <a href="#about_us">About Us</a>
                  </li>
                  <li class="header_item">
                    <a href="#contact_us">Contact Us</a>
                  </li>
                  <li class="header_item">
                    <a href="#" class="log_in">
                      Log in
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
