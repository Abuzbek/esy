export interface IData {
  id: number;
  document_name: string;
  created_at: string;
  field_count: number;
}

export interface IDataConf {
  field_seq: number|string;
  is_mandatory: boolean;
  field_type: number|string;
  field_name: string;
  select_values: string;
}
