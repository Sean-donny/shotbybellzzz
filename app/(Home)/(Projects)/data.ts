//image import
import projectArtwork from '@/public/tyra_by_the_lake.jpg';
import { StaticImageData } from 'next/image';

export type AlbumNames =
  | 'collegeDropout'
  | 'lateRegistration'
  | 'graduation'
  | 'heartbreak'
  | 'mbdtf'
  | 'watchTheThrone'
  | 'yeezus'
  | 'tlop'
  | 'ye'
  | 'ksg'
  | 'jik'
  | 'donda';

export type AlbumBranding = {
  [key in AlbumNames]: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    accentColor1: string;
    accentColor2: string;
    accentColor3: string;
    accentColor4: string;
    backgroundColor: string;
    headingFont: string;
    ctaFont: string;
    paragraphBodyFont: string;
  };
};

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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  graduation: {
    primaryColor: '#fef7e5',
    secondaryColor: '#ec0b8d',
    tertiaryColor: '#96599e',
    accentColor1: '#27aae2',
    accentColor2: '#efd015',
    accentColor3: '#211d1e',
    accentColor4: '#f05c48',
    backgroundColor:
      'linear-gradient(in oklch to bottom, #583184, #933075, #df7e4c)',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  ksg: {
    primaryColor: '#213f7a',
    secondaryColor: '#731746',
    tertiaryColor: '#dd1b51',
    accentColor1: '#35f6fb',
    accentColor2: '#7a151e',
    accentColor3: '#f8b720',
    accentColor4: '#183f71',
    backgroundColor:
      'linear-gradient(in oklch to bottom, #dc3b71, #f88456, #2499c0)',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
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
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
};

export type ProjectStyling = {
  headingColor: string;
  paragraphColor: string;
  backgroundColor: string;
  imageComplimentColor: string;
  navButtonFillColor: string;
  navButtonStrokeColor: string;
  ctaButtonFillColor: string;
  ctaButtonTextColor: string;
  textSelectionBackgroundColor: string;
  textSelectionTextColor: string;
  albumCoverColor: string;
  headingFont?: string;
  ctaFont?: string;
  paragraphBodyFont?: string;
};

export type ProjectAlbum = {
  [key in AlbumNames]: {
    projectHeading: string;
    projectDescription: string;
    projectArtwork: StaticImageData;
    projectArtworkAlt: string;
    projectArtworkTitle: string;
    projectLink: string;
    projectStyling: ProjectStyling;
  };
};

export type ProjectAlbumDetail = {
  projectHeading: string;
  projectDescription: string;
  projectArtwork: StaticImageData;
  projectArtworkAlt: string;
  projectArtworkTitle: string;
  projectLink: string;
  projectStyling: ProjectStyling;
};

export const projectAlbumData: ProjectAlbum = {
  collegeDropout: {
    projectHeading: 'College Dropout',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.collegeDropout.secondaryColor,
      paragraphColor: albumbrandingData.collegeDropout.primaryColor,
      backgroundColor: albumbrandingData.collegeDropout.backgroundColor,
      imageComplimentColor: albumbrandingData.collegeDropout.tertiaryColor,
      navButtonFillColor: albumbrandingData.collegeDropout.accentColor1,
      navButtonStrokeColor: albumbrandingData.collegeDropout.accentColor2,
      ctaButtonFillColor: albumbrandingData.collegeDropout.accentColor3,
      ctaButtonTextColor: albumbrandingData.collegeDropout.accentColor4,
      textSelectionBackgroundColor:
        albumbrandingData.collegeDropout.primaryColor,
      textSelectionTextColor: albumbrandingData.collegeDropout.accentColor3,
      albumCoverColor: albumbrandingData.collegeDropout.accentColor3,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  lateRegistration: {
    projectHeading: 'Late Registration',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.lateRegistration.secondaryColor,
      paragraphColor: albumbrandingData.lateRegistration.primaryColor,
      backgroundColor: albumbrandingData.lateRegistration.backgroundColor,
      imageComplimentColor: albumbrandingData.lateRegistration.tertiaryColor,
      navButtonFillColor: albumbrandingData.lateRegistration.accentColor1,
      navButtonStrokeColor: albumbrandingData.lateRegistration.accentColor2,
      ctaButtonFillColor: albumbrandingData.lateRegistration.accentColor3,
      ctaButtonTextColor: albumbrandingData.lateRegistration.accentColor4,
      textSelectionBackgroundColor:
        albumbrandingData.lateRegistration.primaryColor,
      textSelectionTextColor: albumbrandingData.lateRegistration.accentColor3,
      albumCoverColor: albumbrandingData.lateRegistration.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  graduation: {
    projectHeading: 'Graduation',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.graduation.secondaryColor,
      paragraphColor: albumbrandingData.graduation.primaryColor,
      backgroundColor: albumbrandingData.graduation.backgroundColor,
      imageComplimentColor: albumbrandingData.graduation.tertiaryColor,
      navButtonFillColor: albumbrandingData.graduation.accentColor1,
      navButtonStrokeColor: albumbrandingData.graduation.accentColor2,
      ctaButtonFillColor: albumbrandingData.graduation.accentColor3,
      ctaButtonTextColor: albumbrandingData.graduation.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.graduation.primaryColor,
      textSelectionTextColor: albumbrandingData.graduation.accentColor3,
      albumCoverColor: albumbrandingData.graduation.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  heartbreak: {
    projectHeading: '808s & heartbreak',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.heartbreak.secondaryColor,
      paragraphColor: albumbrandingData.heartbreak.primaryColor,
      backgroundColor: albumbrandingData.heartbreak.backgroundColor,
      imageComplimentColor: albumbrandingData.heartbreak.tertiaryColor,
      navButtonFillColor: albumbrandingData.heartbreak.accentColor1,
      navButtonStrokeColor: albumbrandingData.heartbreak.accentColor2,
      ctaButtonFillColor: albumbrandingData.heartbreak.accentColor3,
      ctaButtonTextColor: albumbrandingData.heartbreak.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.heartbreak.primaryColor,
      textSelectionTextColor: albumbrandingData.heartbreak.accentColor3,
      albumCoverColor: albumbrandingData.heartbreak.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  mbdtf: {
    projectHeading: 'My Beautiful Dark Twisted Fantasy',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.mbdtf.secondaryColor,
      paragraphColor: albumbrandingData.mbdtf.primaryColor,
      backgroundColor: albumbrandingData.mbdtf.backgroundColor,
      imageComplimentColor: albumbrandingData.mbdtf.tertiaryColor,
      navButtonFillColor: albumbrandingData.mbdtf.accentColor1,
      navButtonStrokeColor: albumbrandingData.mbdtf.accentColor2,
      ctaButtonFillColor: albumbrandingData.mbdtf.accentColor3,
      ctaButtonTextColor: albumbrandingData.mbdtf.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.mbdtf.primaryColor,
      textSelectionTextColor: albumbrandingData.mbdtf.accentColor3,
      albumCoverColor: albumbrandingData.mbdtf.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  watchTheThrone: {
    projectHeading: 'Watch The Throne',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.watchTheThrone.secondaryColor,
      paragraphColor: albumbrandingData.watchTheThrone.primaryColor,
      backgroundColor: albumbrandingData.watchTheThrone.backgroundColor,
      imageComplimentColor: albumbrandingData.watchTheThrone.tertiaryColor,
      navButtonFillColor: albumbrandingData.watchTheThrone.accentColor1,
      navButtonStrokeColor: albumbrandingData.watchTheThrone.accentColor2,
      ctaButtonFillColor: albumbrandingData.watchTheThrone.accentColor3,
      ctaButtonTextColor: albumbrandingData.watchTheThrone.accentColor4,
      textSelectionBackgroundColor:
        albumbrandingData.watchTheThrone.primaryColor,
      textSelectionTextColor: albumbrandingData.watchTheThrone.accentColor3,
      albumCoverColor: albumbrandingData.watchTheThrone.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  yeezus: {
    projectHeading: 'Yeezus',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.yeezus.secondaryColor,
      paragraphColor: albumbrandingData.yeezus.primaryColor,
      backgroundColor: albumbrandingData.yeezus.backgroundColor,
      imageComplimentColor: albumbrandingData.yeezus.tertiaryColor,
      navButtonFillColor: albumbrandingData.yeezus.accentColor1,
      navButtonStrokeColor: albumbrandingData.yeezus.accentColor2,
      ctaButtonFillColor: albumbrandingData.yeezus.accentColor3,
      ctaButtonTextColor: albumbrandingData.yeezus.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.yeezus.primaryColor,
      textSelectionTextColor: albumbrandingData.yeezus.accentColor3,
      albumCoverColor: albumbrandingData.yeezus.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  tlop: {
    projectHeading: 'The Life of Pablo',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.tlop.secondaryColor,
      paragraphColor: albumbrandingData.tlop.primaryColor,
      backgroundColor: albumbrandingData.tlop.backgroundColor,
      imageComplimentColor: albumbrandingData.tlop.tertiaryColor,
      navButtonFillColor: albumbrandingData.tlop.accentColor1,
      navButtonStrokeColor: albumbrandingData.tlop.accentColor2,
      ctaButtonFillColor: albumbrandingData.tlop.accentColor3,
      ctaButtonTextColor: albumbrandingData.tlop.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.tlop.primaryColor,
      textSelectionTextColor: albumbrandingData.tlop.accentColor3,
      albumCoverColor: albumbrandingData.tlop.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  ye: {
    projectHeading: 'Ye',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.ye.secondaryColor,
      paragraphColor: albumbrandingData.ye.primaryColor,
      backgroundColor: albumbrandingData.ye.backgroundColor,
      imageComplimentColor: albumbrandingData.ye.tertiaryColor,
      navButtonFillColor: albumbrandingData.ye.accentColor1,
      navButtonStrokeColor: albumbrandingData.ye.accentColor2,
      ctaButtonFillColor: albumbrandingData.ye.accentColor3,
      ctaButtonTextColor: albumbrandingData.ye.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.ye.primaryColor,
      textSelectionTextColor: albumbrandingData.ye.accentColor3,
      albumCoverColor: albumbrandingData.ye.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  ksg: {
    projectHeading: 'Kids See Ghosts',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.ksg.secondaryColor,
      paragraphColor: albumbrandingData.ksg.primaryColor,
      backgroundColor: albumbrandingData.ksg.backgroundColor,
      imageComplimentColor: albumbrandingData.ksg.tertiaryColor,
      navButtonFillColor: albumbrandingData.ksg.accentColor1,
      navButtonStrokeColor: albumbrandingData.ksg.accentColor2,
      ctaButtonFillColor: albumbrandingData.ksg.accentColor3,
      ctaButtonTextColor: albumbrandingData.ksg.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.ksg.primaryColor,
      textSelectionTextColor: albumbrandingData.ksg.accentColor3,
      albumCoverColor: albumbrandingData.ksg.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  jik: {
    projectHeading: 'Yandhi Scraps',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.jik.secondaryColor,
      paragraphColor: albumbrandingData.jik.primaryColor,
      backgroundColor: albumbrandingData.jik.backgroundColor,
      imageComplimentColor: albumbrandingData.jik.tertiaryColor,
      navButtonFillColor: albumbrandingData.jik.accentColor1,
      navButtonStrokeColor: albumbrandingData.jik.accentColor2,
      ctaButtonFillColor: albumbrandingData.jik.accentColor3,
      ctaButtonTextColor: albumbrandingData.jik.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.jik.primaryColor,
      textSelectionTextColor: albumbrandingData.jik.accentColor3,
      albumCoverColor: albumbrandingData.jik.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
  donda: {
    projectHeading: 'Donda',
    projectDescription: `Bellzzz explores the relationship between the subjects's appreciation for express through the medium of painting, and their desire to be understood as a person. In this artist + muse depiction, that desire is momentarily fulfilled, but eternally evident in these photos. Explore this project to see how this collaboration bloomed.`,
    projectArtwork: projectArtwork,
    projectArtworkAlt: 'Alt',
    projectArtworkTitle: 'Title',
    projectLink: '',
    projectStyling: {
      headingColor: albumbrandingData.donda.secondaryColor,
      paragraphColor: albumbrandingData.donda.primaryColor,
      backgroundColor: albumbrandingData.donda.backgroundColor,
      imageComplimentColor: albumbrandingData.donda.tertiaryColor,
      navButtonFillColor: albumbrandingData.donda.accentColor1,
      navButtonStrokeColor: albumbrandingData.donda.accentColor2,
      ctaButtonFillColor: albumbrandingData.donda.accentColor3,
      ctaButtonTextColor: albumbrandingData.donda.accentColor4,
      textSelectionBackgroundColor: albumbrandingData.donda.primaryColor,
      textSelectionTextColor: albumbrandingData.donda.accentColor3,
      albumCoverColor: albumbrandingData.donda.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
};
