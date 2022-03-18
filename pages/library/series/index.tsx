import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import prisma from '../../../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const series = await prisma.series.findMany({
    include: {
      books: true
    }
  });
  return { props: { series } };
};

function Series(props) {
  const {series} = props
  console.log("series", series);
  
  return (
    <div className='flex flex-wrap flex-col content-center'>
      <h1 className='text-red-500 text-3xl m-10'>SERIES</h1>
      <ul className='flex flex-col justify-center '>
      {
        series.map(item => (
          <Link href={`/library/series/${item.title}`}>

            <li className='flex flex-row align-middle justify-between w-72 pt-5 cursor-pointer hover:text-red-500'  key={item.id}>
                <div className='underline'>{item.title}</div>
                <div className='flex '>number of books: {item.books.length}</div>
            </li>
          </Link>
        ))
      }
    </ul>
    </div>
  )
}

export default Series