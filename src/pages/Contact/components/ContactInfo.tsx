// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

// const ContactInfo = () => {
//   const contactMethods = [
//     {
//       icon: Mail,
//       title: 'Email Us',
//       primary: 'kafeel@freshrootstech.com',
//       secondary: '',
//       color: 'blue',
//       href: 'mailto:kafeel@freshrootstech.com',
//       isExternal: false
//     },
//     {
//       icon: Phone,
//       title: 'Call Us',
//       primary: '+91 8310699171',
//       secondary: '',
//       color: 'emerald',
//       href: 'https://wa.me/918310699171',
//       isExternal: true
//     },
//     {
//       icon: MapPin,
//       title: 'Visit Us',
//       primary: 'F5, B3 Kumar Castles, Palm Grove enclave, Gubbalala, Banglore 570062',
//       secondary: '',
//       color: 'purple',
//       href: null,
//       isExternal: false
//     },
//     {
//       icon: MessageCircle,
//       title: 'Live Chat',
//       primary: 'Available 24/7',
//       secondary: '',
//       color: 'cyan',
//       href: 'https://wa.me/918310699171',
//       isExternal: true
//     }
//   ];

//   const officeHours = [
//     { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
//     { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
//     { day: 'Sunday', hours: 'Emergency Support Only' }
//   ];

//   return (
//     <section className="min-h-screen bg-white dark:bg-slate-900 flex items-center">
//       <div className="px-6 lg:px-12 xl:px-24 w-full">
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="h-full flex flex-col justify-center"
//         >
//            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
//             Get in <span className="gradient-text">Touch</span>
//           </h2>

//           {/* Contact Methods */}
//           <div className="space-y-6 mb-12 flex-grow">
//             {contactMethods.map((method, index) => {
//               const Component = method.href ? 'a' : 'div';
//               const linkProps = method.href ? {
//                 href: method.href,
//                 ...(method.isExternal && { target: '_blank', rel: 'noopener noreferrer' })
//               } : {};

//               return (
//                 <motion.div
//                   key={method.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                 >
//                   <Component
//                     {...linkProps}
//                     className={`flex items-start space-x-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${method.href ? 'cursor-pointer' : ''}`}
//                   >
//                     <div className={`w-12 h-12 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
//                       <method.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
//                         {method.title}
//                       </h3>
//                       <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">
//                         {method.primary}
//                       </p>
//                       <p className="text-sm text-slate-500 dark:text-slate-400">
//                         {method.secondary}
//                       </p>
//                     </div>
//                   </Component>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Office Hours */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg mb-8"
//           >
//             <div className="flex items-center mb-6">
//               <Clock className="w-6 h-6 text-blue-600 mr-3" />
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white">
//                 Office Hours
//               </h3>
//             </div>
            
//             <div className="space-y-3">
//               {officeHours.map((schedule, index) => (
//                 <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700 last:border-b-0">
//                   <span className="text-slate-700 dark:text-slate-300 font-medium">
//                     {schedule.day}
//                   </span>
//                   <span className="text-slate-600 dark:text-slate-400">
//                     {schedule.hours}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Actions */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="space-y-4"
//           >
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
//               <Calendar className="w-5 h-5 mr-2" />
//               Schedule Consultation
//             </button>
            
//             <a 
//               href="https://wa.me/918310699171"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
//             >
//               <MessageCircle className="w-5 h-5 mr-2" />
//               Start Live Chat
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'kafeel@freshrootstech.com',
      secondary: '',
      color: 'blue',
      href: 'mailto:kafeel@freshrootstech.com',
      isExternal: false
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 8310699171',
      secondary: '',
      color: 'emerald',
      href: 'https://wa.me/918310699171',
      isExternal: true
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'F5, B3 Kumar Castles, Palm Grove enclave, Gubbalala, Banglore 570062',
      secondary: '',
      color: 'purple',
      href: null,
      isExternal: false
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      primary: 'Available 24/7',
      secondary: '',
      color: 'cyan',
      href: 'https://wa.me/918310699171',
      isExternal: true
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM IST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  // Function to handle calendar scheduling
  const handleScheduleConsultation = () => {
    // Option 1: Microsoft Bookings URL (Replace with your actual Bookings URL)
    const microsoftBookingsUrl = 'https://outlook.live.com/bookwithme/user/YOUR_BOOKING_ID';
    
    // Option 2: Outlook Calendar with pre-filled appointment details
    const outlookCalendarUrl = createOutlookCalendarUrl();
    
    // Option 3: Generic calendar event (works with most calendar apps)
    const genericCalendarUrl = createGenericCalendarUrl();
    
    // Use Microsoft Bookings if available, otherwise fall back to Outlook
    window.open(microsoftBookingsUrl, '_blank', 'noopener,noreferrer');
  };

  // Create Outlook Calendar URL with pre-filled details
  const createOutlookCalendarUrl = () => {
    const baseUrl = 'https://outlook.live.com/calendar/0/deeplink/compose';
    
    const params = new URLSearchParams({
      subject: 'Consultation Meeting - Fresh Roots Tech',
      body: 'Hi,\n\nI would like to schedule a consultation regarding your services.\n\nBest regards',
      startdt: getDefaultStartDate(),
      enddt: getDefaultEndDate(),
      location: 'Virtual Meeting / Fresh Roots Tech Office',
      to: 'kafeel@freshrootstech.com'
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  // Create generic calendar URL (ICS format)
  const createGenericCalendarUrl = () => {
    const startDate = getDefaultStartDate();
    const endDate = getDefaultEndDate();
    
    const eventDetails = {
      title: 'Consultation Meeting - Fresh Roots Tech',
      start: startDate,
      end: endDate,
      description: 'Consultation meeting with Fresh Roots Tech team regarding services and solutions.',
      location: 'Virtual Meeting'
    };
    
    const icsContent = createICSContent(eventDetails);
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    return URL.createObjectURL(blob);
  };

  // Get default start date (next business day at 10 AM)
  const getDefaultStartDate = () => {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    
    // Set to 10 AM
    nextDay.setHours(10, 0, 0, 0);
    
    // If it's weekend, move to Monday
    if (nextDay.getDay() === 0) nextDay.setDate(nextDay.getDate() + 1); // Sunday to Monday
    if (nextDay.getDay() === 6) nextDay.setDate(nextDay.getDate() + 2); // Saturday to Monday
    
    return nextDay.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  // Get default end date (1 hour after start)
  const getDefaultEndDate = () => {
    const startDate = new Date(getDefaultStartDate().replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/, '$1-$2-$3T$4:$5:$6Z'));
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Add 1 hour
    return endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  // Create ICS calendar content
  const createICSContent = (event: any) => {
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Fresh Roots Tech//Consultation Booking//EN
BEGIN:VEVENT
UID:${Date.now()}@freshrootstech.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
ORGANIZER:mailto:kafeel@freshrootstech.com
END:VEVENT
END:VCALENDAR`;
  };

  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 flex items-center">
      <div className="px-6 lg:px-12 xl:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          {/* Contact Methods */}
          <div className="space-y-6 mb-12 flex-grow">
            {contactMethods.map((method, index) => {
              const Component = method.href ? 'a' : 'div';
              const linkProps = method.href ? {
                href: method.href,
                ...(method.isExternal && { target: '_blank', rel: 'noopener noreferrer' })
              } : {};

              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Component
                    {...linkProps}
                    className={`flex items-start space-x-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${method.href ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">
                        {method.primary}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {method.secondary}
                      </p>
                    </div>
                  </Component>
                </motion.div>
              );
            })}
          </div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg mb-8"
          >
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Office Hours
              </h3>
            </div>
            
            <div className="space-y-3">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700 last:border-b-0">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {schedule.day}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <button 
              onClick={handleScheduleConsultation}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
            
            <a 
              href="https://wa.me/918310699171"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
