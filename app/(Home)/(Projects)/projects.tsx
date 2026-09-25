import { StaticImageData } from 'next/image';
import React from 'react';
import { ProjectAlbum } from './data';

const Projects = () => {
  const ProjectAlbum = (projectAlbumData: ProjectAlbum[]) => {
    return (
      <div id={projectAlbumData[0].projectHeading}>
        {
          /** Implement project card */
          <img src={projectAlbumData[0].projectArtwork1.src} />
        }
      </div>
    );
  };

  return <div className="w-full min-h-screen bg-orange-300 flex">x</div>;
};

export default Projects;
