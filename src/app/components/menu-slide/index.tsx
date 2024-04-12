// components/SlideOver.tsx
'use client';

import React from 'react';
import BrandImage from '../../../../public/images/brand.jpg'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  IconButton,
  Typography
} from "@material-tailwind/react";
import Image from "next/image";
function Icon({ id, open }: {id: any, open: any}) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
  );
}
interface SlideOverProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

const MenuSlide: React.FC<SlideOverProps> = ({ isOpen, onClose }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  const closeDrawer = () => {
    onClose(false)
  }
  return (
      <Drawer
          placement="right"
          open={isOpen}
          onClose={closeDrawer}
          className="p-4"
          size={450}
      >

        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className='site-font'>
            فهرست
          </Typography>
          <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawer}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="menu-items flex flex-col gap-2">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
                onClick={() => handleOpen(1)}
                className='bg-emerald-50 rounded-tl-lg rounded-br-lg text-sm site-font flex p-0 items-center'
            >
              <div className="w-[17rem] text-gray-900 site-font self-stretch max-h-14 overflow-hidden">
                <Image src={BrandImage} alt='Brand image' className='h-auto -mt-5'/>
              </div>
              <div className="min-w-20 text-gray-900 site-font h-full py-3 px-4 self-center">
                رنگ مو
              </div>

            </AccordionHeader>
            <AccordionBody className='bg-blue-50'>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>

        </div>
      </Drawer>
  );
};

export default MenuSlide;