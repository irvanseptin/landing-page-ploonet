import React, { useState } from 'react'
import Button from '@/components/atoms/button'
import { MenuProps } from './menu.interface'
import IconDot from '@/public/icons/dot.svg'

const Menu: React.FC<MenuProps> = ({
  menus,
  isVertical,
}) => {
  const [menuList, setMenuList] = useState(menus)

  const handleClick = (label: string) => {
    const updatedMenus = menuList.map(menu => {
      let isActive = false
      if (menu.label === label) {
        isActive = true
      }
      return {
        ...menu,
        isActive,
      }
    })
    setMenuList(updatedMenus)
  }

  const buttonClass = (isActive?: boolean) => `${isActive ? 'text-white' : 'text-[#AAAAAA]'} ${(isActive && !isVertical) && 'flex-col'}`

  return (
    <>
      {!isVertical ? (
        <div className="hidden md:flex items-center gap-[55px] xl:gap-[20px] 2xl:gap-[15px]">
          {menuList.map(menu => (
            <Button
              variant="text"
              className={buttonClass(menu?.isActive)}
              onClick={() => handleClick(menu.label)}
            >
              {menu.label}
              {menu?.isActive && <IconDot className="mt-7 absolute"/>}
            </Button>
          ))}
        </div>
      ) : (
        <div className="block md:hidden flex flex-col items-start p-4 gap-4">
          {menuList.map(menu => (
            <Button
              variant="text"
              className={buttonClass(menu?.isActive)}
              onClick={() => handleClick(menu.label)}
            >
              {menu?.isActive && <IconDot className="mr-3"/>}
              {menu.label}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu
