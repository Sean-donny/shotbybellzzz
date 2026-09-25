//image import
import projectArtwork1 from '@/public/tyra_by_the_lake.jpg';
import projectArtwork2 from '@/public/tyra_by_the_lake.jpg';
import projectArtwork3 from '@/public/tyra_by_the_lake.jpg';
import { StaticImageData } from 'next/image';

export type ProjectStyling = {
  headingColor: string;
  paragraphColor: string;
  backgroundColor: string;
  accentColor1: string;
  selectionColor: string;
};

// Add alt info & other missing fields
export type ProjectAlbum = {
  projectHeading: string;
  projectDescription: string;
  projectArtwork1: StaticImageData;
  // projectArtworkAlt: string;
  projectLink: string;
  projectStyling: ProjectStyling;
};

const projectAlbumData: ProjectAlbum[] = [
  {
    projectHeading: 'College Dropout',
    projectDescription:
      'Bellzz emerges on the scene as a prod turned rapper with something to prove',
    projectArtwork1: projectArtwork1,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork2,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
  {
    projectHeading: '',
    projectDescription: '',
    projectArtwork1: projectArtwork3,
    projectLink: '',
    projectStyling: {
      headingColor: '',
      paragraphColor: '',
      backgroundColor: '',
      accentColor1: '',
      selectionColor: '',
    },
  },
];

export interface AlbumBranding {
  [key: string]: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    accentColor1: string;
    accentColor2: string;
    accentColor3: string;
    accentColor4: string;
    backgroundColor: string;
    primaryFont: string;
    secondaryFont: string;
    tertiaryFont: string;
  };
}

export const albumbrandingData: AlbumBranding = {
  collegeDropout: {
    primaryColor: '#d92127',
    secondaryColor: '#d0841a',
    tertiaryColor: '#b05d00',
    accentColor1: '#d59f36',
    accentColor2: '#9d4b01',
    accentColor3: '#c3ebfe',
    accentColor4: '#604e43',
    backgroundColor: '#5b1112',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  lateRegistration: {
    primaryColor: '#874615',
    secondaryColor: '#bd9a3a',
    tertiaryColor: '#dbecf4',
    accentColor1: '#70330e',
    accentColor2: '#d3b471',
    accentColor3: '#e9ce9f',
    accentColor4: '#405a6e',
    backgroundColor: '#000000',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  graduation: {
    primaryColor: '#fef7e5',
    secondaryColor: '#ec0b8d',
    tertiaryColor: '#96599e',
    accentColor1: '#27aae2',
    accentColor2: '#efd015',
    accentColor3: '#211d1e',
    accentColor4: '#f05c48',
    backgroundColor: 'linear-to-b/oklch from-#583184 via-#933075 to-#df7e4c',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  heartbreak: {
    primaryColor: '#40365b',
    secondaryColor: '#e0341a',
    tertiaryColor: '#e13276',
    accentColor1: '#579fcf',
    accentColor2: '#a9cfc2',
    accentColor3: '#2f9980',
    accentColor4: '#f7e732',
    backgroundColor: '#d8d9d3',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  mbdtf: {
    primaryColor: '#731020',
    secondaryColor: '#298bb2',
    tertiaryColor: '#fec55e',
    accentColor1: '#4d322a',
    accentColor2: '#844226',
    accentColor3: '#32973c',
    accentColor4: '#1a201b',
    backgroundColor: '#ff1c3a',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  watchTheThrone: {
    primaryColor: '#f6bd74',
    secondaryColor: '#d3953b',
    tertiaryColor: '#7b5130',
    accentColor1: '#d7a358',
    accentColor2: '#7a5011',
    accentColor3: '#ffbc52',
    accentColor4: '#be7100',
    backgroundColor: '#9a7138',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  yeezus: {
    primaryColor: '#191d35',
    secondaryColor: '#9ba6b3',
    tertiaryColor: '#ffffff',
    accentColor1: '#41d389',
    accentColor2: '#39ffc7',
    accentColor3: '#fe0901',
    accentColor4: '#351d24',
    backgroundColor: '#d2d4d7',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  tlop: {
    primaryColor: '#000000',
    secondaryColor: '#000000',
    tertiaryColor: '#75e7d3',
    accentColor1: '#8a5f1e',
    accentColor2: '#f67183',
    accentColor3: '#fbe3b1',
    accentColor4: '#274157',
    backgroundColor: '#f58c57',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  ye: {
    primaryColor: '#48688f',
    secondaryColor: '#17242d',
    tertiaryColor: '#faf2dd',
    accentColor1: '#778193',
    accentColor2: '#020b11',
    accentColor3: '#17242d',
    accentColor4: '#22dd53',
    backgroundColor: '#1e334f',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  ksg: {
    primaryColor: '#213f7a',
    secondaryColor: '#731746',
    tertiaryColor: '#dd1b51',
    accentColor1: '#35f6fb',
    accentColor2: '#7a151e',
    accentColor3: '#f8b720',
    accentColor4: '#183f71',
    backgroundColor: 'linear-to-b/oklch from-#dc3b71 via-#f88456 to-#2499c0',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  jik: {
    primaryColor: '#16235d',
    secondaryColor: '#e0b661',
    tertiaryColor: '#e0b661',
    accentColor1: '#0d1faf',
    accentColor2: '#cbbd5c',
    accentColor3: '#0d1faf',
    accentColor4: '#ffffff',
    backgroundColor: '#1b24fd',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
  donda: {
    primaryColor: '#000000',
    secondaryColor: '#000000',
    tertiaryColor: '#ab1711',
    accentColor1: '#000000',
    accentColor2: '#ffffff',
    accentColor3: '#cdbaa9',
    accentColor4: '#ab1711',
    backgroundColor: '#617782',
    primaryFont: '',
    secondaryFont: '',
    tertiaryFont: '',
  },
};
