import prisma from '../../../lib/prisma';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router"
import { useState } from 'react';
import { route } from 'next/dist/server/router';
import Sidenav from '../../../components/Sidenav';
import { useDrop } from 'react-dnd';


export const getServerSideProps: GetServerSideProps = async (context) => {

  // const {params} = context

  //get all series
    const series = await prisma.series.findMany({
      include: {
          books: true
      }
    });
    //get all the books
    const books = await prisma.book.findMany({
      include: {
        series: true
      }
    })


    return { props: { series, books  } };
  };


function SelectedSeries(props) {

  const {books, series} = props;

    const router = useRouter()
    const seriesName = router.query.series

    const currentSeries = series.find((item) => seriesName === item.title )

    // const currentSeriesBooks = currentSeries.books
    // specific series object from the "series" array returned from prisma client
    // const seriesObj = series.find(item => item.title === seriesName)


    console.log("books: ", books);
    

  
    // MOVEBOOK
    const moveBook = async (bookId) => {

      console.log("MOVE BOOK CALLED");
      
      updateBook(bookId, currentSeries, series)
        .then(res => console.log(res)
        )
      
    }

    // UPDATEBOOK
    async function updateBook(bookId, currentSeries, series ) {
      const response = await fetch('/api/updateBookApi', {
        method: 'POST',
        body: JSON.stringify(bookId, currentSeries, series)
      })
  
      if (!response.ok) {
        throw new Error(response.statusText);
  
      }
  
      return await response.json();
    }
    



    // DND code
    const [{isOver}, dropRef] = useDrop(() => ({
      accept: "book",
      drop: (bookId) => moveBook(bookId)
      ,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      })
    }))
    
    return (
        <div className='flex flex-row align-middle justify-between w-full h-full mt-12 mx-5 '>
          <Sidenav books = {books} />

          <h1 className=' flex m-5 w-3/4 h-96 border-red-500 border-4 items-center justify-center text-2xl bg-white ' ref={dropRef} style={{backgroundColor: isOver ? "#808080" : "white"}}>ADD BOOKS TO  <span className="capitalize px-5 text-red-500">{seriesName}</span></h1>
        </div>
    )
}

export default SelectedSeries;