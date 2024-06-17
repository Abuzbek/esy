import { useEffect, useState } from 'react';
import DocumentTable from '../../components/DocumentTable';
import styl from './styles.module.scss';
import api from '../../axios';
const MainPage = () => {
  const [documents, setDocuments] = useState([]);

    useEffect(() => {
        api.get('/api/v1/documents')
            .then(response => setDocuments(response.data))
            .catch(error => console.error('Error fetching documents:', error));
    }, []);
  return (
    <div className={styl.main}>
      <DocumentTable documents={documents}/>
    </div>
  )
}

export default MainPage