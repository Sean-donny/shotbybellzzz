import { StaticImageData } from 'next/image';
import React from 'react';

export type ProjectStyling = {
  backgroundColor: string;
  headingColor: string;
  paragraphColor: string;
  accentColor: string;
  selectionColor: string;
};

// Add alt info & other missing fields
export type ProjectAlbum = {
  projectHeading: string;
  projectDescription: string;
  projectArtwork1: StaticImageData;
  projectLink: string;
  projectStyling: ProjectStyling;
};

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
