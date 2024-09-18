import React, { useEffect, useState } from 'react';
import './Recomm.css'
import { API_KEY, value_convert } from '../../data';
import { Link } from 'react-router-dom';

const Recomm = ({categoryId}) => {
  
  const [apiData, setApiData] = useState([]);

  const fetchData = async ()=>{
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30000&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
      

      await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
  }
  
  useEffect(()=>{
fetchData()
  },[])


  return (
    <>
        <div className="recommended col-lg-4 col-md-12 m-lg-2 mt-5 p-1">
          {
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }
       {
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }{
            apiData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='col-12 d-lg-flex m-2 d-md-flex d-sm-flex mt-3 text-decoration-none overflow-hidden  '>
                <div className="recomm-vid col-lg-6 col-md-5 col-sm-6">
                 <img src={item.snippet.thumbnails.high.url} alt="" className=' col-12'/>
                </div>
                <div className="recom-info ms-2 text-light mt-lg-0 mt-md-0 mt-sm-0 mt-3" style={{lineHeight: '2px'}}>
                     <h6>{item.snippet.title}</h6>
                     <p className='mt-3'>{item.snippet.channelTitle}</p>
                     <p className='mt-3' style={{fontSize: '14px'}}>{value_convert(item.statistics.viewCount)} View</p>
                </div>
                </Link>
              )
            })
          }
        </div>
    </>
  )
}

export default Recomm