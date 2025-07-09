// Ubicación: src/components/nav/NavOption.tsx

import React, { FC } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // El Link para hacer scroll
import Link from 'next/link'; // El Link para cambiar de página
import { useRouter } from 'next/router'; // Importamos el 'router' para saber en qué página estamos

interface INavOption {
  item: {
    name: string;
    href: string;
  };
  number: number;
}

const NavOption: FC<INavOption> = ({ item, number }) => {
  // Obtenemos la ruta de la página actual (ej: "/" o "/experience")
  const { pathname } = useRouter();

  // Verificamos si estamos en la página principal
  const isHomePage = pathname === '/';

  return (
    <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neon">
      {isHomePage ? (
        // --- CASO 1: Si estamos en la página principal, usamos SCROLL ---
        <ScrollLink
          activeClass="active"
          duration={500}
          href={item.href}
          offset={-100}
          smooth={true}
          spy={true}
          to={item.href}
        >
          <span className="text-neon">{number}. </span>
          {item.name}
        </ScrollLink>
      ) : (
        // --- CASO 2: Si estamos en OTRA página, usamos un ENLACE NORMAL ---
        <Link href={`/#${item.href}`} legacyBehavior>
          <a>
            <span className="text-neon">{number}. </span>
            {item.name}
          </a>
        </Link>
      )}
    </li>
  );
};

export default NavOption;