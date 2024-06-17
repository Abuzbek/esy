import { useEffect, useState } from 'react';
import DocumentTable from '../../components/DocumentTable';
import styl from './styles.module.scss';
import axios from 'axios';
const MainPage = () => {
  const [documents, setDocuments] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/documents')
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