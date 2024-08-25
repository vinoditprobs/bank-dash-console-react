

import { PanelMenu } from 'primereact/panelmenu';

const MenuItems = () => {
    const menuItems = [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          to: '/',
          exact: true
        },
        {
          label: 'Transactions',
          icon: 'pi pi-transactions',
          to: '/transactions',
        },
        {
          label: 'Accounts',
          icon: 'pi pi-accounts'
        },
        {
          label: 'Investments',
          icon: 'pi pi-investments'
        },
        {
          label: 'Credit Cards',
          icon: 'pi pi-creditCard'
        },
        {
          label: 'Loans',
          icon: 'pi pi-loans',
          to: '/loans'
        },
        {
          label: 'Services',
          icon: 'pi pi-services'
        },
        {
          label: 'My Privileges',
          icon: 'pi pi-privileges'
        },
        {
          label: 'Setting',
          icon: 'pi pi-setting'
        },
        // Uncomment this part if you want to add sub-menu items
        /*
        {
          label: 'Devices',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Phone',
              icon: 'pi pi-mobile'
            },
            {
              label: 'Desktop',
              icon: 'pi pi-desktop'
            },
            {
              label: 'Tablet',
              icon: 'pi pi-tablet'
            }
          ]
        }
        */
      ];

  return (
    <nav className="main_menu" >
              <PanelMenu model={menuItems} />   
                </nav>
   
  );
};

export default MenuItems;
