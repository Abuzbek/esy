/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDataConf } from "../../types";
import api from "../../axios";

const DocumentForm = () => {
  const [documentName, setDocumentName] = useState("");
  const [fields, setFields] = useState<IDataConf[]>([
    {
      field_seq: "",
      is_mandatory: false,
      field_type: "",
      field_name: "",
      select_values: "",
    },
  ]);
  const navigate = useNavigate();

  const addField = () => {
    setFields([
      ...fields,
      {
        field_seq: "",
        is_mandatory: false,
        field_type: "",
        field_name: "",
        select_values: "",
      },
    ]);
  };

  const handleFieldChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const newFields = fields.slice();
    const name = event.target.name as keyof IDataConf;
    // @ts-ignore
    newFields[index][name] = event.target.value;
    setFields(newFields);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      document_name: documentName,
      form_values: fields.map((field) => ({
        ...field,
        select_values:
          field.field_type === "2"
            ? JSON.parse(field.select_values || "[]")
            : null,
      })),
    };
    api
      .post("/api/v1/documents/create", payload)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error creating document:", error));
  };

  return (
    <div className="mx-auto max-w-[23.125rem]">
      <h1 className="text-2xl text-center mb-4">Create New Document</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-col gap-1">
          <label htmlFor="document_name"> Document Name: </label>
          <input
            type="text"
            name="document_name"
            id="document_name"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
          />
        </div>
        <hr className="my-5" />
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="field_seq"> Field Sequence: </label>
              <input
                type="number"
                name="field_seq"
                id="field_seq"
                value={field.field_seq}
                onChange={(e) => handleFieldChange(index, e)}
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="field_type">Field Type:</label>
              <select
                name="field_type"
                id="field_type"
                value={field.field_type}
                onChange={(e) => handleFieldChange(index, e)}
              >
                <option value="">Select Type</option>
                <option value="1">Input</option>
                <option value="2">Select</option>
                <option value="3">Number Input</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="field_name">Field Name:</label>
              <input
                type="text"
                name="field_name"
                id="field_name"
                value={field.field_name}
                onChange={(e) => handleFieldChange(index, e)}
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="is_mandatory"
                id="is_mandatory"
                checked={field.is_mandatory}
                onChange={(e) =>
                  handleFieldChange(index, {
                    // @ts-ignore
                    target: { name: "is_mandatory", value: e.target.checked },
                  })
                }
              />
              <label htmlFor="is_mandatory">Is Mandatory:</label>
            </div>

            {field.field_type === "2" && (
              <div className="flex flex-col gap-1">
                <label htmlFor="select_values">Select Values (JSON):</label>
                <input
                  type="text"
                  name="select_values"
                  id="select_values"
                  value={field.select_values}
                  onChange={(e) => handleFieldChange(index, e)}
                />
              </div>
            )}
            <hr className="my-5" />
          </div>
        ))}

        <div className="flex justify-between items-center">
          <button type="button" onClick={addField}>
            Add More
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default DocumentForm;
