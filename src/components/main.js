import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomNews } from "../actions/fetch_custom_news";


const Main = () => {
    //news sources
    const [sources, setSources] = useState([]);
    //select source
    const [source, setSource] = useState("");
    //select relevance (fix this)
    const [relevance, setRelevance] = useState("");

    //----- connect redux
    const customNewsSelector = useSelector((state) => state.CustomSearch);
    //dispatch hook
    const dispatch = useDispatch();
    //action to dispatch
    const getCustomNews = (source, relevance) => dispatch(fetchCustomNews(source, relevance));

    //get the sources
    const getSources = () => {
        fetch("https://newsapi.org/v1/sources?")
        .then(res => {
            console.log(customNewsSelector.customNews);
            return res.json();

        })
        .then(response => {
            console.log(response);
            setSources(response.sources)
        })
    }


    useEffect(()=>{
        getSources();
    }, [])


    const getNews = (e) => {
        console.log(source);
        e.preventDefault();
        if(source === "" || source === "nothing" ){
            console.log("No source selected");
        }else{
            getCustomNews(source, relevance);
            console.log(customNewsSelector.customNews)
        }
    }

    let news;
    if(customNewsSelector.customNews.length > 0)
    {
      news =  <div className="news">
                    { customNewsSelector.customNews.map(x => {
                            return (
                                <div className="post" key={x.title}>
                                <img src={x.urlToImage} alt={x.title} />
                                    <h3>{x.title}</h3>
                                    <p><i>Written by {x.author}</i></p>
                                    <p>{x.description}</p>
                                    <a href = {x.url}>Click here to read the full story</a>
                                </div>
                            )
                        })
                    }
               </div>

    }
    else
    {
        news = <p>Select news source</p>
    }

    return(
        <React.Fragment>
            <section>
                <h2>Latest News</h2>

                 <form onSubmit = {getNews}>
                    <div className="form-control">
                        <label>Source</label>
                      <br></br>
                        <select onChange = {e => setSource(e.target.value)}>
                            <option value="nothing">Select...</option>
                            {
                                sources.map(source => {
                                    return(
                                        <option key={source.id} value={source.id}>{source.name}</option>
                                    )
                                })
                            }
                        </select>

                        <input type="submit" value="Search" />
                    </div>
                 </form>

                    {news}


            </section>
        </React.Fragment>
    )
}

export default Main;
