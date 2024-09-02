import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../const/temp_unlove_logo.png';
import content from '../const/copywright';

const Header: React.FC = () => {
  return (
    <header className="bg-salmon p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo} // TODO find logo
            alt="Unlove Logo"
            className="h-10 mr-4"
          />
          <h1 className="text-cozyPurple font-bold text-2xl">Unlove</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-cozyPurple hover:text-purpleBubble">
                {content['landingPage button'].EN}
              </Link>
            </li>
            <li>
              <Link to="/test" className="text-cozyPurple hover:text-purpleBubble">
                {content['startTheTest button'].EN}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
