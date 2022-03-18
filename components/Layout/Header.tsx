import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center justify-center">
      <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 p-5 rounded  focus:text-white focus:bg-red-500 m-4 md:mb-0">
            Books
          </a>
        </Link>
        <Link href="/library/series">
          <a className="flex title-font font-medium items-center text-gray-900 p-5 rounded  focus:text-white focus:bg-red-500 m-4 md:mb-0">
            Series
          </a>
        </Link>
        <Link href="/library/series/createSeries">
          <a className="flex title-font font-medium items-center text-gray-900 p-5 rounded  focus:text-white focus:bg-red-500 m-4 md:mb-0">
            Create Series
          </a>
        </Link>
        <Link href="/library/book/createBook">
          <a className="flex title-font font-medium items-center text-gray-900 p-5 rounded  focus:text-white focus:bg-red-500 m-4 md:mb-0">
            Create Book
          </a>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
