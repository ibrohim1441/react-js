import "./Onesection.css";
import imgtwo from "../Onesection/img/klipartz 2.png";
function chase() {

   return(
    <>
       <section class="fine_dining_section">
            <div class="container">
                <div class="fine_dining_box">
                    <div class="fine_dining_box_item">
                        <p class="fine_dining_box_title">
                            Chase the new Flavour
                        </p>
                        <p class="fine_dining_content">
                            The key to Fine dining
                        </p>
                        <p class="fine_dining_desc">
                            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam
                            scelerisque sapien. Et, penatibus aliquam amet tellus
                        </p>
                        <a href="#">Explore Menu</a>
                    </div>
                    <div class="fine_dining_img">
                        <img src={imgtwo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
   )
}

export default chase;