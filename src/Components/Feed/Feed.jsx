import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_convert } from '../../data'
import moment from 'moment'

const Feed = ({category}) => {

    const [data, setData] = useState([])

    const fetchData = async ()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=300&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
      
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }

    useEffect(()=>{
        fetchData();
        
    },[category]);

    
    
  return (
    <>
        <div className="feed d-flex flex-wrap">
            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}     

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 


            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}        

{data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}     

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 


            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}        

{data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}     

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 


            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}        

{data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}     

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 


            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })} 

            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card col-lg-4 text-light col-md-6 col-sm-6 col-12 text-decoration-none" >
                <img src={`${item.snippet.thumbnails.high.url}`} alt="" style={{backgroundColor: '#222'}}/>
                <div className="con-4 mt-2">
                <h5 >{item.snippet.title}</h5>
                <h6 style={{color: 'lightgray',fontSize: '14px',lineHeight: '3px'}}>{item.snippet.channelTitle}</h6>
                <p style={{color: 'lightgray'}}>{value_convert(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
                )
            })}        
        </div>
    </>
  )
}

export default Feed