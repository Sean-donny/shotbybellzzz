import { StaticImageData } from 'next/image';
import React from 'react';

const Projects = () => {
  interface ProjectStyling {
    backgroundColor: string;
    headingColor: string;
    paragraphColor: string;
    accentColor: string;
    selectionColor: string;
  }
  interface ProjectAlbumProps {
    projectStyling: ProjectStyling;
    projectArtwork1: StaticImageData;
    projectHeading: string;
    projectDescription: string;
    projectLink: string;
  }
  const ProjectAlbum = ({
    projectStyling,
    projectArtwork1,
    projectHeading,
    projectDescription,
    projectLink,
  }: ProjectAlbumProps) => {
    return <div id={projectHeading}>{/** Implement project card */}</div>;
  };
  return <div className="w-full min-h-screen bg-orange-300 flex">x</div>;
};

export default Projects;
