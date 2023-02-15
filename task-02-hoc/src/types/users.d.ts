export type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type UserExcerptProps = {
  user: userType;
};

export type userStateType = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
  data: userType[];
};
