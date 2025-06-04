declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      email: string;
      name?: string | null;
      image?: string | null;
    };
  }
}

export type AuthUser = {
  id: string;
  email: string;
  role: string;
};
