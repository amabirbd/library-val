import { GetServerSideProps, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import prisma from '../../../lib/prisma';




export const getStaticProps: GetStaticProps = async () => {
  const series = await prisma.series.findMany({
    include: {
      books: true
    }
  });
  return { props: { series } };
};

const handleDeleteButtonClick = async(e) => {
  e.preventDefault()
  const serieId = e.target.value
  console.log("delete button clicked", serieId);

  // call deleteSeries
  await deleteSeries(serieId)
    .then((res)=> {
      console.log("Deleted series: ", res)
    })
    
}

async function deleteSeries(seriesId) {
  const response = await fetch('/api/deleteSeriesApi', {
    method: 'DELETE',
    body: JSON.stringify(seriesId)
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  
  return await response.json();
}

function Series(props) {
  const router = useRouter();

  const {series} = props
  console.log("Series: ", series);


  // const refreshData = () => {
  //   router.replace(router.asPath)
  //     }

  // useEffect(() => {
  //   refreshData()
  // }, []) // SETTING SERIES AS A DEPENDENCY CREATES INFINITE LOOP
  
  
  return (
    <div className='flex flex-wrap flex-col content-center'>
      <h1 className='text-red-500 text-3xl m-10'>SERIES</h1>
      <ul className='flex flex-col justify-center '>
      {
        series.map(item => (
          <Link href={`/library/series/${item.title}`}>

            <li key={item.id} className='flex flex-row align-middle justify-between w-72 pt-5 cursor-pointer hover:text-red-500'  >
                <div className='underline' >{item.title}</div>
                <div className='flex ' key={item.id}>{item.books.length}<span className='px-2'>books</span></div>
                <button value={item.id}  onClick={handleDeleteButtonClick} className='bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded'>DELETE</button>
            </li>
          </Link>
        ))
      }
    </ul>
    </div>
  )
}

export default Series