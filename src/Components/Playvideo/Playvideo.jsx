import React, { useEffect, useState } from 'react';
import './Playvideo.css';
import video from '../../assets/Video.mp4'
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { LuSaveAll } from "react-icons/lu";
import user from '../../assets/Goku.png'
import { API_KEY, value_convert } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const Playvideo = () => {

    const {videoId} = useParams()

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null)
    const [commentData, setCommentData] = useState([])

    const fetchvideoData = async () => {
        //Fetching Video Data
        const vid_detailURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(vid_detailURL).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchotherData = async () => {
        const channeldata_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channeldata_URL).then(res => res.json()).then(data => setChannelData(data.items[0]));

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=5000&videoId=${videoId}&key=${API_KEY}`

        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchvideoData()
    }, [videoId])

    useEffect(() => {
        fetchotherData()
    }, [apiData])

    return (
        <>
            <div className="play-video col-lg-8 col-md-12 col-sm-12 col-12">
                {/* <video src={video} controls autoPlay={true} className='col-12' style={{objectFit: 'cover'}}></video> */}
                <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} className='col-12' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h4 className=' text-light ms-2'>{apiData ? apiData.snippet.title : 'There Is a NO Title'}</h4>
                <div className="play-video-info text-light d-lg-flex justify-content-between align-items-center d-md-flex d-sm-flex">
                    <p className=' ms-2'>{value_convert(apiData ? apiData.statistics.viewCount : 'No Data Here')}  &bull;&nbsp;
                        {
                            apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'No Data Here'}</p>
                    <div className=''>
                        <span className=' m-2'><AiTwotoneLike className=' fs-3' />{value_convert(apiData ? apiData.statistics.likeCount : 'There Is a NO Title')}</span>
                        <span className=' m-2'><AiTwotoneDislike className=' fs-3' /></span>
                        <span className=' m-2'><IoIosShareAlt className=' fs-3' /></span>
                        <span className=' m-2'><LuSaveAll className=' fs-3' /></span>
                    </div>
                </div>


                <hr className=' text-light ' />
                <div className="publisher col-12 ">
                    <div className="pub d-flex gap-2 text-light align-items-center justify-content-between">
                        <div className='d-flex gap-2'>
                            <img src={channelData ? channelData.snippet.thumbnails.high.url : ""} alt="" className='rounded-circle' style={{ height: '30px', width: '30px', objectFit: 'cover' }} />
                            <h5 className='lh-1'>{apiData ? apiData.snippet.channelTitle : 'There Is a NO Title'} <br /> <span style={{ fontSize: '11px' }}>{value_convert(channelData ? channelData.statistics.subscriberCount : '')} Subscribers</span></h5>
                        </div>
                        <button className='btn text-light bg-danger fw-bolder'>Subscribe</button>
                    </div>
                    <div className=' text-light lh-1'>

                    </div>

                </div>

                <div className="vid-desc text-light col-12 ">

                    {/* Video Description */}
                    <p className='lh-sm text-white-50'>{apiData ? apiData.snippet.description.slice(0, 800) : 'There Is a NO Title'}</p>
                    <hr className=' text-light' />

                    {/* Video Comment Count */}
                    <h4>{apiData ? value_convert(apiData.statistics.commentCount) : 'There Is a NO Title'} Comments</h4>

                    {/* Video Comments */}

                    {
                        commentData.map((item, index) => {
                            return (
                                <div className="comment mt-3" key={index}>
                                    <div className="com-user d-flex gap-2 align-items-center">
                                        {/* Commented User Profile Photo */}
                                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className=' rounded-circle' style={{ height: '30px', width: '30px', objectFit: 'cover' }} />
                                        {/* Commented UserName  and Time */}
                                        <h6>{item.snippet.topLevelComment.snippet.authorDisplayName}&nbsp;&bull; <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h6>
                                    </div>
                                    <div>
                                        {/* Comments */}
                                        <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                                        <div className="commet-action">
                                            {/* Comment Likes */}
                                            <span className=' m-2'><AiTwotoneLike className=' fs-4' />{' '+
                                            item.snippet.topLevelComment.snippet.likeCount}</span>
                                            {/* Comment Dislike */}
                                            <span className=' m-2'><AiTwotoneDislike className=' fs-4' /></span>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }




                </div>
            </div>
        </>
    )
}

export default Playvideo