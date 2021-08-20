import { memo } from 'react';
import { navs } from '../utils/config';

interface headerProps {
  blogSiteName: string;
}

function header(props: headerProps) {
  const { blogSiteName } = props;

  return (
    <header className="container mx-auto pt-12 max-w-xl flex justify-between items-baseline">
      <h1 className="logo text-5xl font-bold">{blogSiteName}</h1>
      <nav className="md:flex items-center space-x-1">
        <ul className="inline-block">
          {navs.map((route) => (
            <li className="inline-block text-base font-bold" key={route.path}>
              <a
                className="mx-2 hover:text-red-800 duration-200 cursor-pointer"
                aria-label={route.description || route.name}
                href={route.path}
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default memo(header);
