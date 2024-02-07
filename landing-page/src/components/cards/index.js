import { Component } from "react";
import Allcards from "../AllCards";
import ScrollingImagesContent from "../scrollingImages";

import "./index.css";

class ServicesSection extends Component {
  render() {
    const CardDetails = [
      {
        id: 1,
        name: "Cloud App Development",
        discription:
          "Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707277800/cloud-computing_ffnl0h.png",
      },
      {
        id: 2,
        name: "App Development",
        discription:
          "Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707278054/physics_e38upw.png",
      },
      {
        id: 3,
        name: "UI/UX Design",
        discription:
          "Customized Software Development Services to Fuel Growth  &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707277918/ux-design_dhuu6k.png",
      },
      {
        id: 4,
        name: "Web Development",
        discription:
          " Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707278194/development_azfmgz.png",
      },
    ];

    const ScrollingImages = [
      {
        id: 1,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707135971/download_3_l5rdg5.png",
        alt: "one",
      },
      {
        id: 2,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707136212/download_4_cj9yaa.png",
        alt: "two",
      },
      {
        id: 3,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707136320/images_l7jfor.png",
        alt: "three",
      },
      {
        id: 4,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707140838/download_5_uelnpk.jpg",
        alt: "four",
      },
      {
        id: 5,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707140931/download_7_q5i1mv.png",
        alt: "five",
      },
      {
        id: 6,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707136526/download_6_zknqjz.png",
        alt: "six",
      },
      {
        id: 7,
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707278618/php_brands_icon_256556_yr83sv.png",
        alt: "seven",
      },
    ];
    return (
      <div className="total-container">
        <div className="first-container">
          <div className="Advanced-Services">
            <h1 className="headline">
              <spam className="Our"> Our </spam> Advanced
              <spam className="Services"> Services</spam>
            </h1>
            <p className="paragraph">
              We support founders on their journey from pre-revenue to
              multimillion-dollar valution and beyond.All of this is possible
              through our expertise in the leading technology verticals
            </p>
            <div className="button-section">
              <button className="button-1">Sedhule metting</button>
              <p className="paragraph-2">View All Services</p>
            </div>
          </div>
          <div className="modules">
            {CardDetails.map((eachItem) => (
              <Allcards key={eachItem.id} details={eachItem} />
            ))}
          </div>
        </div>
        <div className="wrapper">
          <div className="slider">
            <div className="slide-track">
              {ScrollingImages.map((eachItem) => (
                <ScrollingImagesContent key={eachItem.id} details={eachItem} />
              ))}
            </div>
          </div>
        </div>
        <div className="final-container">
          <div className="inner-container">
            <h1 className="headline-4">From idea-To-Develop</h1>
            <p className="final-paragraph">
              develop agency specialized in delivering world-class solutions for
              the web & mobile through mature & engaging mature technology.our
              team of experts have specilized knowledge and experience in
              different areas of digital marketing SEO Software Development, Web
              design and development which allow them to deliver high-quality
              work to their clients
            </p>
          </div>
          <div className="final-image">
            <img className="final-image"
              src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707140456/copy-removebg-preview_mtdac1.png"
              alt="idea"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesSection;

// <div className="wrapper">
//           <div className="slider">
//             <div className="slide-track">
//               <div className="slide">
//                 <img
//                   src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707135971/download_3_l5rdg5.png"
//                   alt="noty"
//                 />
//               </div>

//               <div className="slide">
//                 <img
//                   src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707136212/download_4_cj9yaa.png"
//                   alt="sep"
//                 />
//               </div>

//               <div className="slide">
//                 <img
//                   src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707136320/images_l7jfor.png"
//                   alt="use"
//                 />
//               </div>

//               <div className="slide">
//                 <img
//                   src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707140838/download_5_uelnpk.jpg"
//                   alt="spy"
//                 />
//               </div>

//               <div className="slide">
//                 <img
//                   src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707140931/download_7_q5i1mv.png"
//                   alt="django"
//                 />
//               </div>

//               <div className="slide">
//                 <img
//                   src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707136526/download_6_zknqjz.png"
//                   alt="python"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//   <div class="modules">
//             <div class="Cloud">
//               <img
//                 src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707126870/download_1_aei6e7.png"
//                 alt="cloud app"
//                 class="image-1 w-20 "
//               />
//               <p class="paragraph-3">Cloud App Development</p>
//               <p class="paragraph-32">
//                 Customized Software Development Services to Fuel Growth
//                 &Profitability{" "}
//               </p>
//               <p class="paragraph-4">Learn More</p>
//             </div>
//             <div class="Cloud">
//               <img
//                 src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707134399/download_2_brixjx.png"
//                 alt="app dev"
//                 class="image-1 w-20 "
//               />
//               <p class="paragraph-3">App Development</p>
//               <p class="paragraph-32">
//                 Flawless consumer-facing apps toNature Online Relationships{" "}
//               </p>
//               <p class="paragraph-4">Learn More</p>
//             </div>

//             <div class="Cloud">
//               <img
//                 src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707134626/images_2_p4v694.jpg"
//                 alt="ui ux"
//                 class="image-1 w-20 "
//               />
//               <p class="paragraph-3">UI/UX Design</p>
//               <p class="paragraph-32">
//                 Crafting interactive experience that strength brand & improve
//                 conversions
//               </p>
//               <p class="paragraph-4">Learn More</p>
//             </div>
//             <div class="Cloud">
//               <img
//                 src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707134732/images_3_vynjd8.jpg"
//                 alt="cloud"
//                 class="image-1 w-20 "
//               />
//               <p class="paragraph-3">Web Development</p>
//               <p class="paragraph-32">
//                 Creating Web Design that drivesGrowth&Boisters Users Interaction
//               </p>
//               <p class="paragraph-4">Learn More</p>
//             </div>
//           </div>