let allProblem;

/////////////////////  json取得(start)  //////////////

(async function getJsonFile() {
    axios.get('./sample.json')
        .then(res => allProblem = res.data)
        .catch(err => console.error(err))
        .finally(res => console.log('finally'))
}());

/////////////////////  json取得(end)  ////////////////


