/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IDataDetail } from '../../types';
import api from '../../axios';

const DocumentView = () => {
    const { id } = useParams();
    const [document, setDocument] = useState<IDataDetail|null>(null);

    useEffect(() => {
        api.get(`/api/v1/document/${id}`)
            .then(response => {
                setDocument(response.data)
            })
            .catch(error => console.error('Error fetching document:', error));
        
    }, [id]);

    if (!document) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{document?.document_name}</h1>
            {document?.fields?.map(field => (
                <div key={field.id}>
                    <label>{field.field_name}:</label>
                    {field.field_type === 1 && <input type="text" readOnly />}
                    {field.field_type === 2 && (
                        <select>
                            {field.select_values.map((option: any) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    )}
                    {field.field_type === 3 && <input type="number" readOnly />}
                </div>
            ))}
        </div>
    );
};

export default DocumentView;
