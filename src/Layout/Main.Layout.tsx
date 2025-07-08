// Ubicación: src/Layout/Main.Layout.tsx

import React, { FC } from 'react';

// IMPORTACIONES DIRECTAS DESDE SU ARCHIVO DE ORIGEN
import { Header } from '@/components/nav/Header.nav';
import SideBar from '@/components/nav/Sidebar.nav';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header /> {/* Usamos el nombre original del componente: Header */}
      <SideBar />
      <div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start mb-10 w-full">
        <div className="w-64 h-64 rounded-full bg-neon fixed mx-auto my-auto blur-xl inset-0 opacity-20" />
        {children}
      </div>
    </>
  );
};

export default Layout;