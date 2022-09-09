export const getUsersFromStore = (optionValue:string, query:string) => {
  return (state:State) => {
    switch (optionValue) {
      case 'All':
        return state.users.filter(user => (
          user.name.toLowerCase().includes(query.toLowerCase())
        ));
      case 'name':
        return state.users
          .filter(user => (user.name.toLowerCase().includes(query.toLowerCase())))
          .sort((a, b) => a.name.localeCompare(b.name));
      default:
        return state.users;
    }
  };
};

export const getUserPostsFromStore = (state:State) => state.userPosts;
export const getSelectedUser = (state:State) => state.selectUser;
export const getSortValue = (state:State) => state.sortValue;
export const getSearchValue = (state:State) => state.searchValue;
