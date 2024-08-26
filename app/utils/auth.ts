export const authCookie = {
  parse: async (cookieString: string | null) => {
    // This fake module always returns a userId
    if (cookieString) {
      return "fakeUserId";
    }
    return null;
  },
};
