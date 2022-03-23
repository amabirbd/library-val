import { GetStaticProps } from 'next';
import Card from '../components/Card';
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany();
  return { props: { books }, revalidate: 10 };
};

export default function Home(props) {
  const { books } = props;  
  console.log("Books: ", books);
  
  return (
    <div className='flex flex-wrap flex-col content-center'>
      <h1 className='text-red-500 text-3xl m-10'>BOOKS</h1>
      <ul className='flex justify-center '>
      {
        books.map(item => (
          <li key={item.id}><Card book={item} /></li>
        ))
      }
    </ul>
    </div>
  );
}
