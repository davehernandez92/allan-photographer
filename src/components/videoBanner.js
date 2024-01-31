"use client ";
import React, { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion"
import {motion} from 'framer-motion'
import Image from "next/image";
import { getCldVideoUrl } from "next-cloudinary";
import fallbackImageUrl from "../../public/images/videothumb.jpg";
import unmuted from "../../public/images/volume.svg";
import muted from "../../public/images/volume-x.svg";
import playIcon from "../../public/images/play.svg";
import pauseIcon from "../../public/images/pause.svg";
import styles from "../app/ui/components/videoBanner.module.css";

export default function VideoBanner() {
    const ref = useRef(null)
    const isInView = useInView(ref)

  const url = getCldVideoUrl({
    width: 1680,
    height: 7200,
    src: "/videos/videoBoda.mp4",
  });

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
//   const [videoInView, setVideoInView] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const togglePlaying = () => {

    const video = videoRef.current;
    if (video) {
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        setIsPlaying((prevPlayed) => !prevPlayed);
      }
    };
    
    useEffect(() => {
        const video = videoRef.current;
       if(isInView) {
        video.play();
       } else {
        video.pause();
       }
      }, [isInView])

  return (
    <div className=" h-full w-full relative">
      <video
        ref={videoRef}
        className="w-full h-full"
        autoPlay={isPlaying} 
        muted={isMuted}
        playsInline
        loop
        
        poster={fallbackImageUrl}
      >
        <source src={url} type="video/mp4" />
      </video>
      <motion.h1 initial={{ opacity: 0, y:10 }} animate={{opacity: 1, y:0, transition: { delay: 0.7, duration: 0.6 }}}   className={styles.title}> Servicios</motion.h1>
      <div ref={ref} className={`absolute flex gap-5 ${styles.controllers}`}>
        <button
          onClick={toggleMute}
          className={`flex items-center space-x-2 `}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          <Image
            src={muted}
            alt="muted icon"
            width={30}
            height={30}
            className={isMuted ? "block " : "hidden"}
          />
          <Image
            src={unmuted}
            alt="muted icon"
            width={30}
            height={30}
            className={isMuted ? "hidden " : "block"}
          />
        </button>
        <button
          onClick={togglePlaying}
          className={`flex items-center space-x-2 `}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          <Image
            src={pauseIcon}
            alt="pause icon"
            width={30}
            height={30}
            className={isPlaying ? "block " : "hidden"}
          />
          <Image
            src={playIcon}
            alt="play icon"
            width={30}
            height={30}
            className={isPlaying ? "hidden " : "block"}
          />
        </button>
      </div>
    </div>
  );
}
