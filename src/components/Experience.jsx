import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Community Dreams Foundation',
      role: 'Data Analyst',
      period: 'July 2025 – Present',
      location: 'Remote',
      achievements: [
        'Developed scalable financial analytics systems and Power BI dashboards integrating donation, grant, and expenditure data, improving reporting efficiency by 30%',
        'Automated data reconciliation workflows using Python and SQL, reducing manual effort by 40% and improving data accuracy',
        'Partnered with finance and operations teams to define KPIs and enable self-service reporting, increasing forecast precision by 20%',
      ],
    },
    {
      company: 'Ananda (Finance and Technology)',
      role: 'Data Analyst',
      period: 'August 2024 – December 2024',
      location: 'Remote',
      achievements: [
        'Integrated Retrieval-Augmented Generation (RAG) with LLMs (Llama, Gemma, Mistral) improving chatbot response accuracy and engagement by 25%',
        'Designed machine learning pipelines using Python (pandas, NumPy, Scikit-learn) for sentiment and volatility analysis',
        'Acted as a liaison between technical and business teams, managing Agile sprints in JIRA and Confluence',
      ],
    },
    {
      company: 'Accenture Solutions Pvt. Ltd.',
      role: 'Data Analyst',
      period: 'September 2022 – August 2023',
      location: 'Insurance Sector',
      achievements: [
        'Conducted A/B testing and performance analytics on insurance claim workflows, improving process efficiency by 10%',
        'Developed data models and window functions in AWS Redshift, improving data integrity by 40% across 10,000+ records',
        'Built enterprise insurance dashboards in Power BI using DAX and Power Query, reducing reporting time by 5%',
        'Automated ETL pipelines using AWS Glue and Informatica, ensuring schema consistency and faster processing',
        'Led stakeholder workshops during data migration, preventing scope deviations and saving $150K in project costs',
        'Conducted root cause and risk analysis on multi-source insurance data, achieving a 90% accuracy rate post-UAT',
      ],
    },
    {
      company: 'Accenture Solutions Pvt. Ltd.',
      role: 'Application Development Associate',
      period: 'February 2021 – September 2022',
      location: 'Insurance Sector',
      achievements: [
        'Integrated claims and policyholder data using advanced SQL joins, CTEs, and stored procedures, optimizing reporting workflows',
        'Built compliance dashboards in Tableau and Looker Studio, improving risk transparency and audit readiness',
        'Created automated data quality checks in Domo, reducing audit time by 35%',
        'Executed data migration from SQL Server to Snowflake, ensuring accuracy in transformation and validation for regulatory compliance',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-300"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-navy-800 mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg font-semibold text-gold-600 mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {exp.period}
                          </span>
                          <span>•</span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-700">
                            <span className="text-gold-500 mr-2 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
