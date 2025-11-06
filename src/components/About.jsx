import React from 'react';

const About = () => {
  const highlights = [
    { number: '4+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '3', label: 'Industries' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm <span className="font-semibold text-navy-800">Revanth Goud Gajagauni</span>,
              a Data and Business Analyst with a proven background in analytics, automation, and
              data-driven decision-making. With hands-on experience in <span className="font-semibold text-navy-800">Python, SQL, Power BI, AWS, and Snowflake</span>,
              I specialize in turning complex datasets into clear insights that drive operational
              efficiency and growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Having worked on cross-functional projects across insurance, finance, and technology
              domains, I bring a holistic approach to analytics—combining technical precision with
              business understanding. My current focus includes <span className="font-semibold text-navy-800">predictive modeling,
              ETL automation, data visualization, and cloud-based analytics architectures</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about developing solutions that simplify decision-making, enhance
              performance metrics, and foster a culture of data literacy across organizations.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-navy-50 rounded-xl hover:bg-navy-100 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-navy-800 mb-2">
                  {item.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
