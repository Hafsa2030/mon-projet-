import React, { useState } from 'react';
import { 
  Home,
  Calendar,
  FileText,
  BookOpen
} from 'lucide-react';

const AestheticClinicHome = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cin: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation */}
      <nav className="bg-white shadow-lg p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-serif font-bold text-blue-800">
            BeautyCare Clinic
          </div>
          
          <div className="flex space-x-6">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <Home size={20} />
              <span>ACCUEIL</span>
            </button>
            <a href="#about" className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <BookOpen size={20} />
              <span>À PROPOS</span>
            </a>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <Calendar size={20} />
              <span>SERVICES</span>
            </button>
            <a href="#contact" className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <FileText size={20} />
              <span>CONTACT</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Centre d'Esthétique Médical
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Offrez-vous des soins esthétiques professionnels dans un environnement moderne et confortable.
            </p>
            
            {/* Form */}
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-md mx-auto">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Inscription Patient</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">CIN</label>
                  <input
                    type="text"
                    name="cin"
                    value={formData.cin}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
          
          {/* Right side with Image and Description */}
          <div className="flex justify-center items-center md:block mt-8 md:mt-0">
            <div className="text-center">
              <img 
                src="/0dfc8b2ada46e30d4a793d82ef1994c9.jpg"
                alt="Chambre médicale moderne"
                className="rounded-lg shadow-xl w-96 h-72 object-cover mx-auto" 
              />
              <p className="mt-6 text-lg text-gray-700">
                Découvrez nos chambres modernes et équipées, où chaque détail est conçu pour votre confort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
          À Propos de Nous
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/95d92ed5505f994e40dfbf1a3ca0b7d1.jpg"
              alt="Nos installations modernes"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-serif font-semibold text-gray-800">
              Nos Services et Installations
            </h3>
            <p className="text-lg text-gray-600">
              Nos installations sont pensées pour vous offrir une expérience exceptionnelle avec un équipement de pointe, des espaces modernes et un environnement calme et serein.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-100 py-16">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
          Contactez-Nous
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-lg text-gray-600 text-center">
            Si vous avez des questions ou souhaitez plus d'informations, n'hésitez pas à nous contacter !
          </p>
          <form className="space-y-4 bg-white shadow-lg p-8 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AestheticClinicHome;