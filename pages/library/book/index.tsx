// import { GetStaticProps } from 'next';
// import React, { useEffect, useState } from 'react'
// import Card from '../../components/Card';
// import prisma from '../../lib/prisma';


// export const getStaticProps: GetStaticProps = async () => {
//   const books = await prisma.book.findMany();
//   return { props: { books } };
// };



// function Library(props) {

//   const { books } = props;  
//   console.log(books);
  
//   return (
//     <ul className='flex flex-col '>
//       {
//         books.map(item => (
//           <li  key={item.id}> <Card /></li>
//         ))
//       }
//     </ul>
//   )
// }

// export default Library;