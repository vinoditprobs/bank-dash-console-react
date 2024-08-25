import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuItems = () => {

const pagePath = usePathname();



  const menuItems = [
    { label: "Dashboard", icon: "pi pi-home", url: "/", exact: false },
    { label: "Transactions", icon: "pi pi-transactions" },
    { label: "Accounts", icon: "pi pi-accounts" },
    { label: "Investments", icon: "pi pi-investments" },
    { label: "Credit Cards", icon: "pi pi-creditCard" },
    { label: "Loans", icon: "pi pi-loans", url: "/loans/"  },
    { label: "Services", icon: "pi pi-services" },
    { label: "My Privileges", icon: "pi pi-privileges" },
    { label: "Setting", icon: "pi pi-setting" },
  ];

  return (
    <nav className="main_menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.url && (
              <Link href={item.url} className={`nav_link ${pagePath === item.url ? 'active' : ''}`}  > 
                 <span className='p-menuitem-icon' ><i className={`pi ${item.icon}`} ></i></span>
                <span className="p-menuitem-text" >{item.label}</span>
              </Link>
            )}
            {!item.url && (
              <span className="nav_link">
                <span className='p-menuitem-icon' ><i className={`pi ${item.icon}`} ></i></span>
                <span className="p-menuitem-text" >{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItems;
