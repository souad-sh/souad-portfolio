import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// UniGuide images
import img1 from "../assets/project_imgs/Uniguide/Screenshot (664).png";
import img2 from "../assets/project_imgs/Uniguide/Screenshot (665).png";
import img3 from "../assets/project_imgs/Uniguide/Screenshot (666).png";
import img4 from "../assets/project_imgs/Uniguide/Screenshot (667).png";
import img5 from "../assets/project_imgs/Uniguide/Screenshot (668).png";

// Laptop Selling images
import lap1 from "../assets/project_imgs/sellinglaptop/Screenshot_20250726_115401.png";
import lap2 from "../assets/project_imgs/sellinglaptop/Screenshot_20250726_115142.png";
import lap3 from "../assets/project_imgs/sellinglaptop/Screenshot_20250726_115230.png";
import lap4 from "../assets/project_imgs/sellinglaptop/Screenshot_20250726_115537.png";

// Library image
import libraryImage from "../assets/project_imgs/library/library.png";

// AI images
import ai1 from "../assets/project_imgs/ai/Screenshot (676).png";
import ai2 from "../assets/project_imgs/ai/Screenshot (677).png";
import ai3 from "../assets/project_imgs/ai/Screenshot (678).png";
import ai4 from "../assets/project_imgs/ai/Screenshot (679).png";
import ai5 from "../assets/project_imgs/ai/Screenshot (680).png";

export default function Projects() {
  const uniGuideImages = [img1, img2, img3, img4, img5];
  const laptopImages = [lap1, lap2, lap3, lap4];
  const aiImages = [ai1, ai2, ai3, ai4, ai5];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-secondary to-primary text-white relative overflow-hidden"
    >
      <h2 className="text-4xl font-extrabold text-center mb-14">Projects</h2>

      {/* UniGuide Project */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg border-l-[6px] border-purple-400 mb-16">
        <h3 className="text-3xl font-bold text-purple-300 mb-2 text-center">
          UniGuide Platform
        </h3>
        <p className="text-center text-gray-200 mb-8">
          A full-stack university & major explorer with real-time filtering,
          chatbot, and admin dashboards using React, Node.js, and MySQL.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showIndicators={true}
            emulateTouch
            className="rounded-xl"
          >
            {uniGuideImages.map((img, idx) => (
              <div
                key={idx}
                className="h-[400px] bg-white flex justify-center items-center"
              >
                <img
                  src={img}
                  alt={`UniGuide ${idx + 1}`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Laptop Selling App */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg border-l-[6px] border-pink-400 mb-16">
        <h3 className="text-3xl font-bold text-pink-300 mb-2 text-center">
          Laptop Selling Mobile App
        </h3>
        <p className="text-center text-gray-200 mb-8">
          An Android-based e-commerce app for laptops, built using Java.
          Includes shopping cart, login, and secure features.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showIndicators={true}
            emulateTouch
            className="rounded-xl"
          >
            {laptopImages.map((img, idx) => (
              <div
                key={idx}
                className="h-[500px] bg-white flex justify-center items-center"
              >
                <img
                  src={img}
                  alt={`Laptop App ${idx + 1}`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Library Management System */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg border-l-[6px] border-yellow-400 mb-16">
        <h3 className="text-3xl font-bold text-yellow-300 mb-2 text-center">
          Library Management System
        </h3>
        <p className="text-center text-gray-200 mb-8">
          Laravel + MySQL-based system to manage book inventories, user roles,
          and borrowing activities. Features authentication and dashboard.
        </p>
        <div className="flex justify-center">
          <img
            src={libraryImage}
            alt="Library Management System"
            className="max-h-[500px] rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>

      {/* Breast Cancer ML Project */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg border-l-[6px] border-blue-400 mb-16">
        <h3 className="text-3xl font-bold text-blue-300 mb-2 text-center">
          Breast Cancer ML Project
        </h3>
        <p className="text-center text-gray-200 mb-8">
          Machine learning prediction for breast cancer using Decision Tree and
          Neural Networks with Scikit-learn. Includes metrics, confusion matrix
          and UI insights.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showIndicators={true}
            emulateTouch
            className="rounded-xl"
          >
            {aiImages.map((img, idx) => (
              <div
                key={idx}
                className="h-[500px] bg-white flex justify-center items-center"
              >
                <img
                  src={img}
                  alt={`AI Project ${idx + 1}`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
