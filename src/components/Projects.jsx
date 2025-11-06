import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Customer Behavior Analysis & Churn Prediction',
      period: 'January 2025 – May 2025',
      description: 'Analyzed customer behavior patterns and built predictive models to identify churn risks.',
      achievements: [
        'Cleaned and merged transactional and customer data from multiple sources using SQL',
        'Performed EDA in Python (pandas, seaborn, matplotlib) to uncover churn behavior trends',
        'Built and optimized Logistic Regression and XGBoost models improving recall by 20%',
        'Designed an interactive Power BI dashboard with dynamic churn KPIs and customer segmentation',
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'pandas', 'seaborn', 'matplotlib', 'XGBoost'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Loan Default Prediction',
      period: 'January 2024 – May 2024',
      description: 'Developed machine learning models to predict loan defaults with high accuracy.',
      achievements: [
        'Prepared and transformed large lending datasets with missing value handling, encoding, and scaling',
        'Conducted EDA and feature engineering to identify high-impact variables',
        'Developed Logistic Regression and Random Forest models achieving 85% accuracy and 0.75 ROC-AUC',
        'Visualized model results and conducted cost-benefit analysis',
      ],
      technologies: ['Python', 'scikit-learn', 'matplotlib', 'seaborn', 'Random Forest'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Global COVID-19 Impact Dashboard',
      period: 'May 2024 – December 2024',
      description: 'Built a comprehensive dashboard tracking global and regional COVID-19 trends.',
      achievements: [
        'Designed a fully interactive Power BI dashboard with real-time data',
        'Created DAX measures for rolling averages, fatality rates, and custom KPIs',
        'Implemented time-series filtering for historical trend analysis',
        'Published to Power BI Service for real-time refresh and public sharing',
      ],
      technologies: ['Power BI', 'DAX', 'Power Query', 'Power BI Service'],
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-navy-800 mb-2 md:mb-0">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-navy-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-gold-500 mr-2 mt-1">▸</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-navy-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-navy-800 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
