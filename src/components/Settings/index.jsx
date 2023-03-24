import { useState, useRef, useEffect, Fragment } from 'react';
import cn from 'classnames'
import { FiSettings } from 'react-icons/fi';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Popover, Transition } from "@headlessui/react";


const Settings = ({ className = "" }) => {
  
  return (
    <div className={cn("icon-box", className)}>
      <Popover className="relative">
        <Popover.Button
          className={`relative text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center`}
        >
          <FiSettings size={22} />
        </Popover.Button>
      </Popover>
      
    </div>
  );
};

export default Settings;
