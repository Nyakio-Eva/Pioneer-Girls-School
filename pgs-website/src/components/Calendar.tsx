import React from 'react';
import { Calendar as CalendarIcon, Clock, BookOpen, Star } from 'lucide-react';

const term1_dates = [
  { date: '5th Jan', event: 'Staff Reporting' },
  { date: '8th Jan', event: 'Grade 9 & Form 1 Reporting' },
  { date: '9th Jan', event: 'Form 2, 3 & 4 Reporting' },
  { date: '12th Jan', event: 'Classes Begin' },
  { date: '2nd-9th Feb', event: 'CAT 1' },
  { date: '15th Feb', event: 'First Half Term Break' },
  { date: '19th Feb', event: 'Classes Resume' },
  { date: '8th-15th Mar', event: 'CAT 2' },
  { date: '29th Mar', event: 'Good Friday' },
  { date: '1st Apr', event: 'Easter Monday' },
  { date: '5th Apr', event: 'School Closing Day' },
];

const term2_dates = [
  { date: '29th Apr', event: 'Staff Reporting' },
  { date: '2nd May', event: 'All Students Reporting' },
  { date: '24th-31st May', event: 'CAT 1' },
  { date: '1st Jun', event: 'Madaraka Day' },
  { date: '17th-21st Jun', event: 'Half Term Break' },
  { date: '24th Jun', event: 'Classes Resume' },
  { date: '19th-26th Jul', event: 'CAT 2' },
  { date: '9th Aug', event: 'School Closing Day' },
];

const term3_dates = [
  { date: '26th Aug', event: 'Staff Reporting' },
  { date: '27th Aug', event: 'All Students Reporting' },
  { date: '20th-27th Sep', event: 'CAT' },
  { date: '10th Oct', event: 'Huduma Day' },
  { date: '20th Oct', event: 'Mashujaa Day' },
  { date: '25th Oct', event: 'School Closing Day' },
];

const other_dates = [
  { date: '19th Jan', event: 'Clubs & Societies Registration' },
  { date: '26th Jan', event: 'Inter-House Competitions Begin' },
  { date: '10th Feb', event: 'Parents Visitation Day' },
  { date: '23rd Mar', event: 'Annual Sports Day' },
  { date: '10th May', event: 'Mid-Term Exams' },
  { date: '15th Jul', event: 'Talent Show' },
  { date: '28th Sep', event: 'Annual General Meeting (AGM)' },
  { date: '18th Oct', event: 'Prize Giving Day' },
];

const CalendarCard: React.FC<{ title: string; dates: { date: string; event: string }[]; icon: React.ReactNode }> = ({ title, dates, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full mr-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="border-t border-gray-200 pt-4 space-y-3">
      {dates.map((item, index) => (
        <div key={index} className="flex items-center">
          <Clock className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-semibold">{item.date}:</span> {item.event}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Calendar: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">School Calendar</h1>
          <p className="text-lg md:text-xl mt-2">Important Dates & Events for the Academic Year</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Term 1 */}
          <CalendarCard title="Term 1" dates={term1_dates} icon={<CalendarIcon className="w-6 h-6 text-blue-600" />} />
          
          {/* Term 2 */}
          <CalendarCard title="Term 2" dates={term2_dates} icon={<CalendarIcon className="w-6 h-6 text-blue-600" />} />
          
          {/* Term 3 */}
          <CalendarCard title="Term 3" dates={term3_dates} icon={<BookOpen className="w-6 h-6 text-blue-600" />} />
          
          {/* Other Important Dates */}
          <div className="lg:col-span-3">
            <CalendarCard title="Other Important Dates" dates={other_dates} icon={<Star className="w-6 h-6 text-blue-600" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;