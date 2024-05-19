export type SaltType = {
  id: number;
  salt: string;
  salt_frequency: number;
  available_forms: string[];
  most_common: {
    Form: string;
    Strength: string;
    Packing: string;
  };
  salt_forms_json: object;
};

export type DataType = {
  saltSuggestions: SaltType[];
  medicineSuggestions: object[];
};
