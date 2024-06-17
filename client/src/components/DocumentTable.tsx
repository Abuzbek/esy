import { FC } from "react";
import { Link } from "react-router-dom";
import { IData } from "../types";

interface Props {
  documents?: IData[];
}

const DocumentTable: FC<Props> = ({ documents }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-end mb-5">
        <Link
          to="/create"
          className="p-4 py-2 rounded-md bg-[#0144F5] text-white"
        >
          New Document Form
        </Link>
      </div>
      <div className="rounded-md overflow-hidden border border-[#E5E7EB]">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Document Name</th>
              <th>Creation Date</th>
              <th>Document Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents?.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.document_name}</td>
                <td>{new Date(doc.created_at).toLocaleString()}</td>
                <td>{doc.field_count}</td>
                <td>
                  <Link to={`/view/${doc.id}`} className="text-[#0144F5]">
                    Document Preview
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentTable;
