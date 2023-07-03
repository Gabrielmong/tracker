import { List } from '@mui/material';
import { ItemProps, SidebarItem } from './SidebarItem';

interface SidebarItemsProps {
    items: ItemProps[];
    handleNavigation: (href: string) => void;
}

export const SidebarItems = ({
  items,
  handleNavigation,
}: SidebarItemsProps) => {
  return (
    <List>
      {items.map((item: ItemProps, index: number) => (
        <SidebarItem
          key={index}
          index={index}
          text={item.text}
          icon={item.icon}
          href={item.href}
          handleNavigation={handleNavigation}
        />
      ))}
    </List>
  );
};
