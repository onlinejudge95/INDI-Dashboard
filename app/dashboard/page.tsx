// import Link from 'next/link';
// import { signOut } from 'next-auth/react';
import React from 'react';
// import { FaUserAstronaut } from 'react-icons/fa';
// import { IoTelescope } from 'react-icons/io5';
// import { PiSignOut } from 'react-icons/pi';
// import { VscDebugDisconnect } from 'react-icons/vsc';

// import { ThemeToggle } from '@/components/theme';
// import { Button } from '@/components/ui/button';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';

// type DashboardMenuItem = {
//   href: string;
//   text: string;
//   icon: JSX.Element;
// };

// const DashboardMenu: React.FC = () => {
//   const menuItem: DashboardMenuItem[] = [
//     {
//       icon: <VscDebugDisconnect className='h-5 w-5' />,
//       href: '/dashboard/connection',
//       text: 'Connection',
//     },
//     {
//       icon: <FaUserAstronaut className='h-5 w-5' />,
//       href: '/dashboard/profile',
//       text: 'Profile',
//     },
//   ];
//   return (
//     <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
//       <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
//         <Link
//           href='/dashboard'
//           className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
//         >
//           <IoTelescope className='h-6 w-6' />
//           <span className='sr-only'>INDIa</span>
//         </Link>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger>
//               <ThemeToggle />
//               <span className='sr-only'>Theme</span>
//             </TooltipTrigger>
//             <TooltipContent side='right'>Theme</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//         {menuItem.map(({ icon, href, text }, index) => (
//           <TooltipProvider key={index}>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Link
//                   href={href}
//                   className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
//                 >
//                   {icon}
//                   <span className='sr-only'>{text}</span>
//                 </Link>
//               </TooltipTrigger>
//               <TooltipContent side='right'>{text}</TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         ))}
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button
//                 variant='ghost'
//                 onClick={() => {
//                   signOut({ callbackUrl: '/auth', redirect: true });
//                 }}
//               >
//                 <PiSignOut className='h-5 w-5' />
//                 <span className='sr-only'>Sign Out</span>
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent side='right'>Sign Out</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       </nav>
//     </aside>
//   );
// };

const Dashboard: React.FC = () => {
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted-40'>
      <p>Hello, World!!</p>
    </div>
  );
};

export default Dashboard;
