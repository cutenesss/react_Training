const PersonSchema = {
    name: 'Person',
    properties: {
      name:     'string',
      birthday: 'date',
      cars:     'Car[]',
      picture:  'data?' // optional property
    }
  };

  export default PersonSchema;