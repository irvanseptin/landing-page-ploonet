import React, { useState, useRef, useEffect } from 'react';
import IconArrow from '@/public/icons/arrow.svg';
import { SelectProps } from './select.interface';

const Select: React.FC<SelectProps> = ({
  placeholder,
  className,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Select Button */}
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center rounded-[10px] border border-[1px] border-[#FFFFFF26] bg-[#141414] text-white px-8 py-4 focus:outline-none"
      >
        <span>{placeholder}</span>
        <span>
          <div className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <IconArrow />
          </div>
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full bg-[#141414] border border-[1px] border-[#FFFFFF26] rounded-[10px] mt-2 z-10">
          <ul className="text-white">
            {options?.map((option, index) => (
              <li key={index} className="p-3 hover:bg-[#2a2a2a] cursor-pointer">
                {option?.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
