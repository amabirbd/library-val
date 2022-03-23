import prisma from '../../../lib/prisma';
import { GetServerSideProps } from "next";
import { useRouter } from "next/router"
import Sidenav from '../../../components/Sidenav';
import { useDrop } from 'react-dnd';


export const getServerSideProps: GetServerSideProps = async () => {

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

    const { series, books } = props;
    const router = useRouter()
    const seriesName = router.query.series
    const currentSeries = series.find((item) => seriesName === item.title )
    const currentSeriesId = currentSeries.id

  
    // MOVEBOOK
    const moveBook = async (bookId) => {

      console.log("MOVE BOOK CALLED");
      console.log("current series: ", currentSeries);
      console.log("current series id: ", currentSeriesId);
      console.log("current book id: ", bookId.bookId);
      
      const bookData = {
        bookId: bookId.bookId,
        seriesId: currentSeriesId
      }


      updateBook(bookData)
        .then(res => console.log("returend updated data", res)
        )
    }

    // UPDATEBOOK
    async function updateBook(bookData) {
      console.log("updatebook called", currentSeries);
      
      const response = await fetch('/api/updateBookApi', {
        method: 'POST',
        body: JSON.stringify(bookData)
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