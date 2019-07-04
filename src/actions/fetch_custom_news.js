
export function fetchCustomNews(source, relevance){
    //return the actual action to do (custom news here)
    return function(dispatch){
      fetch("https://newsapi.org/v1/articles?source="+ source+"&sortBy="+ relevance +"&apiKey=d9c7b7350e644f78a2d822e723cad16a")
      .then(res => {
          return res.json();

      })
      .then(res => {
        dispatch({type:"FETCH_CUSTOM_NEWS", payload: res.articles});
      })
      .catch(err => {
          console.log(err);
      })

   }
}
