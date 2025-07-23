import React, { useState} from 'react';
import { BarChart3, TrendingUp, Award, Calendar, ExternalLink, Loader2 } from 'lucide-react';

interface DashboardData {
  id: string;
  year: string;
  title: string;
  description: string;
  embedUrl: string;
  aspectRatio: string;
  icon: React.ReactNode;
}

const dashboardsData: DashboardData[] = [
  {
    id: 'kcse-2024-1',
    year: '2024',
    title: 'KCSE Results Overview 2024',
    description: 'Comprehensive analysis of KCSE 2024 performance across all subjects and counties',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiOWIxNDAzNDgtN2Q2Zi00YmVkLTk3MTktMDAxNjYyNDcwYzE4IiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&pageName=73b6365c2c07d32893cc&embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/10]',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: 'kcse-2024-2',
    year: '2024',
    title: 'KCSE Performance Trends 2024',
    description: 'Detailed breakdown of grade distributions and performance metrics',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNjE2ZTBhMDQtN2YyZS00MjQzLThhMDYtMWMxNzhiNjQyYmMwIiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&pageName=085370b5c1b94020ad53&embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/10]',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 'kcse-2023',
    year: '2023',
    title: 'KCSE Results Analysis 2023',
    description: 'Historical performance data and comparative analysis for KCSE 2023',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZjFmNjg5MTUtNTRkMy00MzQ5LTgwOTQtZmI3ZGJlMmEzNDJiIiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/9]',
    icon: <Award className="w-6 h-6" />
  }
];

const DashboardCard: React.FC<{ dashboard: DashboardData }> = ({ dashboard }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="group bg-[#f2f2f2] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Card Header */}
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-200 transition-colors">
              {dashboard.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {dashboard.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-600">{dashboard.year}</span>
              </div>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {dashboard.description}
        </p>
      </div>

      {/* Dashboard Embed */}
      <div className="relative">
        {isLoading && (
          <div className={`${dashboard.aspectRatio} flex items-center justify-center bg-gray-50 border-t border-gray-100`}>
            <div className="text-center">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Loading dashboard...</p>
              <div className="flex space-x-1 mt-2 justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className={`${dashboard.aspectRatio} flex items-center justify-center bg-red-50 border-t border-red-100`}>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ExternalLink className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-red-600 font-medium">Unable to load dashboard</p>
              <p className="text-red-500 text-sm mt-1">Please check your connection and try again</p>
            </div>
          </div>
        )}

        <iframe
          src={dashboard.embedUrl}
          className={`w-full ${dashboard.aspectRatio} ${isLoading || hasError ? 'hidden' : 'block'} border-0`}
          title={dashboard.title}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default function BeInspired() {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  
  const filteredDashboards = selectedYear === 'all' 
    ? dashboardsData 
    : dashboardsData.filter(d => d.year === selectedYear);

  const uniqueYears = ['all', ...Array.from(new Set(dashboardsData.map(d => d.year)))];

  return (
    <div className="min-h-screen bg-slate-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-200 font-medium">Educational Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6">
              KCSE Results
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Analytics</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive insights and performance analytics from Kenya's national examinations. 
              Explore trends, compare results, and be inspired by educational achievements across the nation.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900">Filter by Year</h2>
          <div className="flex flex-wrap gap-2">
            {uniqueYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {year === 'all' ? 'All Years' : year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-8 lg:gap-12">
          {filteredDashboards.map((dashboard) => (
            <DashboardCard key={dashboard.id} dashboard={dashboard} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Data-Driven Education</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These interactive dashboards provide detailed insights into KCSE performance trends, 
              helping students, educators, and policymakers make informed decisions for educational excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}