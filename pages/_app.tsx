import '../styles/tailwind.css';
import Layout from '../components/Layout';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </Layout>
  );
}

export default MyApp;
