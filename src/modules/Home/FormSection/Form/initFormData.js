export const fields = {
  name: {
    required: true,
    fullWidth: true,
    id: "name",
    type: "text",
    label: "Your name",
    inputProps: {
      pattern: "[a-zA-z]{2,60}",
      title: "Jon",
    },
  },
  email: {
    required: true,
    fullWidth: true,
    
    id: "email",
    type: "email",
    label: "Email",
  },
  phone: {
    fullWidth: true,
    required: true,
    id: "phone",
    type: "tel",
    helperText: "+38 (XXX) XXX - XX - XX",
    mask: "+380999999999",
    label: "Phone",
    inputProps: {
      pattern: "[0-9+]{13}",
      title: "+38 099 999 99 99",
    },
  },
  position_id: {
    positions: [
      {
        id: 1,
        name: "Lawyer",
      },
      {
        id: 2,
        name: "Content manager",
      },
      {
        id: 3,
        name: "Security",
      },
      {
        id: 4,
        name: "Designer",
      },
    ],
  },
  photo: {
    fullWidth: true,
    id: "photo",
    type: "file",
    hidden: true,
    label: "Upload your photo",
    accept: "image/png, image/jpeg",
  },
};

export const initialState = {
  name: "",
  email: "",
  phone: "",
  position_id: 1,
  photo: null,
};
