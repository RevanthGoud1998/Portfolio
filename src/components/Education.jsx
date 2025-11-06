import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Master of Science in Business Analytics and Project Management
                </h3>
                <p className="text-xl text-gold-400 font-semibold mb-2">
                  (MSBAPM)
                </p>
                <p className="text-lg text-gray-200">
                  University of Connecticut, School of Business
                </p>
                <p className="text-gray-300 mt-1">
                  Hartford, CT
                </p>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-gold-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Graduation</p>
                    <p className="text-lg font-semibold">May 2025</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gold-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">GPA</p>
                    <p className="text-lg font-semibold">3.82 / 4.0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold text-lg mb-3">Key Focus Areas:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Business Analytics',
                  'Project Management',
                  'Data Science',
                  'Machine Learning',
                  'Statistical Analysis',
                  'Business Strategy',
                ].map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gold-500 text-navy-900 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
