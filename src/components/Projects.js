// src/components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Projects</h2>
      <div className="grid gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">UniGuide Platform</h3>
          <p className="text-gray-700">Full-stack university/major explorer using React, Node.js, MySQL.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Laptop Selling Mobile App</h3>
          <p className="text-gray-700">Android-based e-commerce app using Java, with cart and login.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Library Management System</h3>
          <p className="text-gray-700">Laravel + MySQL web app with admin features and secure login.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Breast Cancer ML Project</h3>
          <p className="text-gray-700">Prediction using Decision Tree and Neural Network (Scikit-learn).</p>
        </div>
      </div>
    </section>
  );
}
