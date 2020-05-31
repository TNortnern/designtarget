export default {
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    /**
     * @param {err} err pass in a error that you don't or won't need
     * @description for handling errors that you won't need and getting eslint to shutup
     * @returns literally nothing
     */
    throwAway(err) {
      // this function is the a literally throws unneccessary errors away to get eslint to shutup
      let throwAway = [];
      throwAway = [...throwAway, err];
      return throwAway;
    }
  }
};
