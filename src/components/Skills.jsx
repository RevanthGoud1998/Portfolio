import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python (pandas, NumPy)', 'R', 'Java', 'SQL', 'T-SQL', 'DAX', 'HTML/CSS', 'Bash', 'XML', 'VBA'],
    },
    {
      title: 'Big Data & Data Engineering',
      icon: '🔧',
      skills: ['Apache Spark', 'Hadoop', 'MapReduce', 'Databricks', 'Hive', 'HDFS', 'dbt', 'SSIS', 'ETL/ELT', 'Data Validation', 'CI/CD'],
    },
    {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: ['AWS (S3, Glue, Lambda, Redshift)', 'Microsoft Azure (Data Factory, Synapse)', 'GCP (BigQuery)', 'Snowflake', 'Docker'],
    },
    {
      title: 'Business Intelligence & Visualization',
      icon: '📊',
      skills: ['Power BI', 'Tableau', 'Looker Studio', 'Domo', 'Excel (Pivot Tables, XLOOKUP, Macros)', 'SAP', 'SPSS', 'SAS', 'Microsoft Access'],
    },
    {
      title: 'Project Management & Collaboration',
      icon: '🤝',
      skills: ['Agile', 'Scrum', 'Kanban', 'Sprint Planning', 'Backlog Grooming', 'JIRA', 'Confluence', 'Git', 'GitHub'],
    },
    {
      title: 'Core Competencies',
      icon: '🎯',
      skills: ['Data Modeling', 'Forecasting', 'KPI Design', 'Financial Analysis', 'Problem-Solving', 'Critical Thinking', 'Stakeholder Communication'],
    },
  ];

  const certifications = [
    'Microsoft Power BI Data Analyst Associate',
    'Atlassian Jira Fundamentals Badge',
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md card-hover"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-navy-800">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-navy-50 text-navy-700 rounded-full text-sm font-medium hover:bg-navy-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-navy-800 text-center mb-6">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center border-l-4 border-gold-500 card-hover"
              >
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-navy-800 font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
