const assetUrl = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

export const profile = {
  name: 'Suhani Tomar',
  title: 'Data Science Enthusiast',
  email: 'suhanitomar888@gmail.com',
  location: 'India',
  photo: '/Pic.jpeg',
  resume: '/GeneralCV.pdf',
  resumeFileName: 'GeneralCV.pdf',
  github: 'https://github.com/suhanitomar888',
  linkedin: 'https://www.linkedin.com/in/suhani-tomar/',
}

export const projects = [
  {
    title: 'Banking Churn Prediction Insights Dashboard',
    description:
      'Investigated 66K+ customer dataset to uncover behavioral churn drivers. Built advanced KPIs and data models enabling multi-dimensional churn analysis. Identified 35% churn rate for targeted retention strategies.',
    techStack: ['Power BI', 'Power Query', 'DAX', 'Time-Series Analysis', 'Forecasting', 'Anomaly Detection', 'Data Modeling'],
    githubUrl: 'https://github.com/suhanitomar888/ChurnPrediction',
    liveUrl: '#',
    previewUrl: '#',
    image: '/bank_pic.png',
  },
  {
    title: 'Diet Recommendation Chatbot App',
    description:
      'Developed full-stack app generating personalized diet plans. Integrated APIs and chatbot using Flask for dynamic recommendations. Improved user engagement with automated conversational guidance.',
    techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Gemini API', 'Spoonacular API'],
    githubUrl: 'https://github.com/suhanitomar888/Meal-Preparation-Planner',
    liveUrl: '#',
    previewUrl: '#',
    image: '/diet_pic.jpg',
  },
  {
    title: 'Good Food Purchasing Analytics',
    description:
      'Performed EDA on procurement dataset to uncover spending trends. Applied feature engineering using Pandas, Excel, and visualization tools. Identified cost inefficiencies and price fluctuations.',
    techStack: ['Python (Pandas, NumPy, Seaborn, Matplotlib)', 'MS Excel', 'Power Query'],
    githubUrl: 'https://github.com/suhanitomar888/GoodFoodInsights',
    liveUrl: '#',
    previewUrl: '#',
    image: '/goodfood.png',
  },
  {
    title: 'Risk Behavior Analysis',
    description:
      'Analyzed behavioral data to identify key risk patterns. Identified features influencing high-risk outcomes. Built predictive ML models for improved decision-making.',
    techStack: ['Python', 'Machine Learning', 'Scikit-learn'],
    githubUrl: 'https://github.com/suhanitomar888',
    liveUrl: '#',
    previewUrl: '#',
    image: '/risk.jpg',
  },
  {
    title: 'Sales Performance Dashboard',
    description:
      'Analyzed sales data across regions, products, and timelines. Identified top-performing products and high-revenue markets. Built KPI-driven dashboards for business insights.',
    techStack: ['Power BI', 'DAX', 'Data Modeling'],
    githubUrl: 'https://github.com/suhanitomar888',
    liveUrl: '#',
    previewUrl: '#',
    image: '/sales.jpg',
  },
  {
    title: 'Hotel Booking Insights',
    description:
      'Analyzed booking data across customer segments and trends. Identified cancellation patterns and preferences. Generated insights for pricing optimization and demand planning.',
    techStack: ['SQL', 'Data Analysis', 'Query Optimization'],
    githubUrl: 'https://github.com/suhanitomar888/Hotel-Booking-Analysis',
    liveUrl: '#',
    previewUrl: '#',
    image: '/hotel.png',
  },
]
