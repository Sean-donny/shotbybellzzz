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
    paragraphBackgroundColor: string;
    paragraphTextColor: string;
    headingTextColor: string;
    imageBackdropColor: string;
    accentColor1: string;
    accentColor2: string;
    accentColor3: string;
    accentColor4: string;
    selectionBackgroundColor: string;
    selectionTextColor: string;
    backgroundColor: string;
    headingFont: string;
    ctaFont: string;
    paragraphBodyFont: string;
  };
};

export const albumbrandingData: AlbumBranding = {
  collegeDropout: {
    paragraphTextColor: '#d59f36',
    paragraphBackgroundColor: '#000123',
    headingTextColor: '#d0841a',
    imageBackdropColor: '#b05d00',
    accentColor1: '#d59f36',
    accentColor2: '#9d4b01',
    accentColor3: '#c3ebfe',
    accentColor4: '#604e43',
    selectionBackgroundColor: '#d92127',
    selectionTextColor: '#c3ebfe',
    backgroundColor: '#5b1112',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  lateRegistration: {
    paragraphTextColor: '#B36332',
    paragraphBackgroundColor: '#2E1202',
    headingTextColor: '#bd9a3a',
    imageBackdropColor: '#dbecf4',
    accentColor1: '#70330e',
    accentColor2: '#d3b471',
    accentColor3: '#9C907C',
    accentColor4: '#1E3140',
    selectionBackgroundColor: '#99D3F0',
    selectionTextColor: '#405a6e',
    backgroundColor: '#000000',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  graduation: {
    paragraphTextColor: '#fef7e5',
    paragraphBackgroundColor: '#211d1e',
    headingTextColor: '#ec0b8d',
    imageBackdropColor: '#96599e',
    accentColor1: '#27aae2',
    accentColor2: '#efd015',
    accentColor3: '#211d1e',
    accentColor4: '#f05c48',
    selectionBackgroundColor: '#522978',
    selectionTextColor: '#27aae2',
    backgroundColor:
      'linear-gradient(in oklch to bottom, #583184, #933075, #df7e4c)',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  heartbreak: {
    paragraphTextColor: '#8ED2CA',
    paragraphBackgroundColor: '#40365b',
    headingTextColor: '#e0341a',
    imageBackdropColor: '#e13276',
    accentColor1: '#579fcf',
    accentColor2: '#a9cfc2',
    accentColor3: '#2f9980',
    accentColor4: '#f7e732',
    selectionBackgroundColor: '#9E228B',
    selectionTextColor: '#F7B9D4',
    backgroundColor: '#d8d9d3',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  mbdtf: {
    paragraphTextColor: '#EBB589',
    paragraphBackgroundColor: '#731020',
    headingTextColor: '#1C1D18',
    imageBackdropColor: '#447A46',
    accentColor1: '#61232E',
    accentColor2: '#F39B83',
    accentColor3: '#FFAE00',
    accentColor4: '#00647F',
    selectionBackgroundColor: '#000',
    selectionTextColor: '#77C5AB',
    backgroundColor: '#CC223D',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  watchTheThrone: {
    paragraphTextColor: '#f6bd74',
    paragraphBackgroundColor: '#573E1E',
    headingTextColor: '#ECBF66',
    imageBackdropColor: '#7b5130',
    accentColor1: '#d7a358',
    accentColor2: '#7a5011',
    accentColor3: '#ffbc52',
    accentColor4: '#be7100',
    selectionBackgroundColor: '#A28251',
    selectionTextColor: '#F2BA8A',
    backgroundColor: '#9a7138',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  yeezus: {
    paragraphTextColor: '#7CDCD6',
    paragraphBackgroundColor: '#191d35',
    headingTextColor: '#9ba6b3',
    imageBackdropColor: '#ffffff',
    accentColor1: '#41d389',
    accentColor2: '#39ffc7',
    accentColor3: '#fe0901',
    accentColor4: '#F0F1F5',
    selectionBackgroundColor: '#FE0000',
    selectionTextColor: '#571E2D',
    backgroundColor: '#d2d4d7',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  tlop: {
    paragraphTextColor: '#EAE3D0',
    paragraphBackgroundColor: '#000000',
    headingTextColor: '#000000',
    imageBackdropColor: '#75e7d3',
    accentColor1: '#000',
    accentColor2: '#F37739',
    accentColor3: '#fbe3b1',
    accentColor4: '#274157',
    selectionBackgroundColor: '#2DD9CC',
    selectionTextColor: '#000',
    backgroundColor: '#F58C57',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  ye: {
    paragraphTextColor: '#C9D7E0',
    paragraphBackgroundColor: '#48688f',
    headingTextColor: '#48688f',
    imageBackdropColor: '#faf2dd',
    accentColor1: '#778193',
    accentColor2: '#020b11',
    accentColor3: '#17242d',
    accentColor4: '#22dd53',
    selectionBackgroundColor: '#0DF23B',
    selectionTextColor: '#121E27',
    backgroundColor: '#1e334f',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  ksg: {
    paragraphTextColor: '#FBFAF5',
    paragraphBackgroundColor: '#194987',
    headingTextColor: '#670E3B',
    imageBackdropColor: '#dd1b51',
    accentColor1: '#0E7DAC',
    accentColor2: '#5CBDD1',
    accentColor3: '#000',
    accentColor4: '#F8B446',
    selectionBackgroundColor: '#5CBDD1',
    selectionTextColor: '#194987',
    backgroundColor:
      'linear-gradient(in oklch to bottom, #dc3b71, #f88456, #2499c0)',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  jik: {
    paragraphTextColor: '#ffffff',
    paragraphBackgroundColor: '#0d1faf',
    headingTextColor: '#00C3FF',
    imageBackdropColor: '#0029A3',
    accentColor1: '#0d1faf',
    accentColor2: '#cbbd5c',
    accentColor3: '#0d1faf',
    accentColor4: '#ffffff',
    selectionBackgroundColor: '#0B146B',
    selectionTextColor: '#F3D850',
    backgroundColor: '#1b24fd',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
  donda: {
    paragraphTextColor: '#fff',
    paragraphBackgroundColor: '#000000',
    headingTextColor: '#000000',
    imageBackdropColor: '#ab1711',
    accentColor1: '#000000',
    accentColor2: '#ffffff',
    accentColor3: '#cdbaa9',
    accentColor4: '#ab1711',
    selectionBackgroundColor: '#ab1711',
    selectionTextColor: '#000',
    backgroundColor: '#617782',
    headingFont: 'cal-sans',
    ctaFont: 'boldonese',
    paragraphBodyFont: 'line-jp',
  },
};

export type ProjectStyling = {
  headingColor: string;
  paragraphBackgroundColor: string;
  paragraphTextColor: string;
  imageBackdropColor: string;
  navButtonFillColor: string;
  navButtonStrokeColor: string;
  ctaButtonFillColor: string;
  ctaButtonTextColor: string;
  selectionBackgroundColor: string;
  selectionTextColor: string;
  albumCoverColor: string;
  backgroundColor: string;
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
      headingColor: albumbrandingData.collegeDropout.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.collegeDropout.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.collegeDropout.paragraphTextColor,
      backgroundColor: albumbrandingData.collegeDropout.backgroundColor,
      imageBackdropColor: albumbrandingData.collegeDropout.imageBackdropColor,
      navButtonFillColor: albumbrandingData.collegeDropout.accentColor1,
      navButtonStrokeColor: albumbrandingData.collegeDropout.accentColor2,
      ctaButtonFillColor: albumbrandingData.collegeDropout.accentColor3,
      ctaButtonTextColor: albumbrandingData.collegeDropout.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.collegeDropout.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.collegeDropout.selectionTextColor,
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
      headingColor: albumbrandingData.lateRegistration.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.lateRegistration.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.lateRegistration.paragraphTextColor,
      backgroundColor: albumbrandingData.lateRegistration.backgroundColor,
      imageBackdropColor: albumbrandingData.lateRegistration.imageBackdropColor,
      navButtonFillColor: albumbrandingData.lateRegistration.accentColor1,
      navButtonStrokeColor: albumbrandingData.lateRegistration.accentColor2,
      ctaButtonFillColor: albumbrandingData.lateRegistration.accentColor3,
      ctaButtonTextColor: albumbrandingData.lateRegistration.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.lateRegistration.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.lateRegistration.selectionTextColor,
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
      headingColor: albumbrandingData.graduation.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.graduation.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.graduation.paragraphTextColor,
      backgroundColor: albumbrandingData.graduation.backgroundColor,
      imageBackdropColor: albumbrandingData.graduation.imageBackdropColor,
      navButtonFillColor: albumbrandingData.graduation.accentColor1,
      navButtonStrokeColor: albumbrandingData.graduation.accentColor2,
      ctaButtonFillColor: albumbrandingData.graduation.accentColor3,
      ctaButtonTextColor: albumbrandingData.graduation.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.graduation.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.graduation.selectionTextColor,
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
      headingColor: albumbrandingData.heartbreak.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.heartbreak.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.heartbreak.paragraphTextColor,
      backgroundColor: albumbrandingData.heartbreak.backgroundColor,
      imageBackdropColor: albumbrandingData.heartbreak.imageBackdropColor,
      navButtonFillColor: albumbrandingData.heartbreak.accentColor1,
      navButtonStrokeColor: albumbrandingData.heartbreak.accentColor2,
      ctaButtonFillColor: albumbrandingData.heartbreak.accentColor3,
      ctaButtonTextColor: albumbrandingData.heartbreak.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.heartbreak.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.heartbreak.selectionTextColor,
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
      headingColor: albumbrandingData.mbdtf.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.mbdtf.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.mbdtf.paragraphTextColor,
      backgroundColor: albumbrandingData.mbdtf.backgroundColor,
      imageBackdropColor: albumbrandingData.mbdtf.imageBackdropColor,
      navButtonFillColor: albumbrandingData.mbdtf.accentColor1,
      navButtonStrokeColor: albumbrandingData.mbdtf.accentColor2,
      ctaButtonFillColor: albumbrandingData.mbdtf.accentColor3,
      ctaButtonTextColor: albumbrandingData.mbdtf.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.mbdtf.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.mbdtf.selectionTextColor,
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
      headingColor: albumbrandingData.watchTheThrone.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.watchTheThrone.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.watchTheThrone.paragraphTextColor,
      backgroundColor: albumbrandingData.watchTheThrone.backgroundColor,
      imageBackdropColor: albumbrandingData.watchTheThrone.imageBackdropColor,
      navButtonFillColor: albumbrandingData.watchTheThrone.accentColor1,
      navButtonStrokeColor: albumbrandingData.watchTheThrone.accentColor2,
      ctaButtonFillColor: albumbrandingData.watchTheThrone.accentColor3,
      ctaButtonTextColor: albumbrandingData.watchTheThrone.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.watchTheThrone.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.watchTheThrone.selectionTextColor,
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
      headingColor: albumbrandingData.yeezus.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.yeezus.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.yeezus.paragraphTextColor,
      backgroundColor: albumbrandingData.yeezus.backgroundColor,
      imageBackdropColor: albumbrandingData.yeezus.imageBackdropColor,
      navButtonFillColor: albumbrandingData.yeezus.accentColor1,
      navButtonStrokeColor: albumbrandingData.yeezus.accentColor2,
      ctaButtonFillColor: albumbrandingData.yeezus.accentColor3,
      ctaButtonTextColor: albumbrandingData.yeezus.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.yeezus.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.yeezus.selectionTextColor,
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
      headingColor: albumbrandingData.tlop.headingTextColor,
      paragraphBackgroundColor: albumbrandingData.tlop.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.tlop.paragraphTextColor,
      backgroundColor: albumbrandingData.tlop.backgroundColor,
      imageBackdropColor: albumbrandingData.tlop.imageBackdropColor,
      navButtonFillColor: albumbrandingData.tlop.accentColor1,
      navButtonStrokeColor: albumbrandingData.tlop.accentColor2,
      ctaButtonFillColor: albumbrandingData.tlop.accentColor3,
      ctaButtonTextColor: albumbrandingData.tlop.accentColor4,
      selectionBackgroundColor: albumbrandingData.tlop.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.tlop.selectionTextColor,
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
      headingColor: albumbrandingData.ye.headingTextColor,
      paragraphBackgroundColor: albumbrandingData.ye.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.ye.paragraphTextColor,
      backgroundColor: albumbrandingData.ye.backgroundColor,
      imageBackdropColor: albumbrandingData.ye.imageBackdropColor,
      navButtonFillColor: albumbrandingData.ye.accentColor1,
      navButtonStrokeColor: albumbrandingData.ye.accentColor2,
      ctaButtonFillColor: albumbrandingData.ye.accentColor3,
      ctaButtonTextColor: albumbrandingData.ye.accentColor4,
      selectionBackgroundColor: albumbrandingData.ye.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.ye.selectionTextColor,
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
      headingColor: albumbrandingData.ksg.headingTextColor,
      paragraphBackgroundColor: albumbrandingData.ksg.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.ksg.paragraphTextColor,
      backgroundColor: albumbrandingData.ksg.backgroundColor,
      imageBackdropColor: albumbrandingData.ksg.imageBackdropColor,
      navButtonFillColor: albumbrandingData.ksg.accentColor1,
      navButtonStrokeColor: albumbrandingData.ksg.accentColor2,
      ctaButtonFillColor: albumbrandingData.ksg.accentColor3,
      ctaButtonTextColor: albumbrandingData.ksg.accentColor4,
      selectionBackgroundColor: albumbrandingData.ksg.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.ksg.selectionTextColor,
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
      headingColor: albumbrandingData.jik.headingTextColor,
      paragraphBackgroundColor: albumbrandingData.jik.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.jik.paragraphTextColor,
      backgroundColor: albumbrandingData.jik.backgroundColor,
      imageBackdropColor: albumbrandingData.jik.imageBackdropColor,
      navButtonFillColor: albumbrandingData.jik.accentColor1,
      navButtonStrokeColor: albumbrandingData.jik.accentColor2,
      ctaButtonFillColor: albumbrandingData.jik.accentColor3,
      ctaButtonTextColor: albumbrandingData.jik.accentColor4,
      selectionBackgroundColor: albumbrandingData.jik.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.jik.selectionTextColor,
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
      headingColor: albumbrandingData.donda.headingTextColor,
      paragraphBackgroundColor:
        albumbrandingData.donda.paragraphBackgroundColor,
      paragraphTextColor: albumbrandingData.donda.paragraphTextColor,
      backgroundColor: albumbrandingData.donda.backgroundColor,
      imageBackdropColor: albumbrandingData.donda.imageBackdropColor,
      navButtonFillColor: albumbrandingData.donda.accentColor1,
      navButtonStrokeColor: albumbrandingData.donda.accentColor2,
      ctaButtonFillColor: albumbrandingData.donda.accentColor3,
      ctaButtonTextColor: albumbrandingData.donda.accentColor4,
      selectionBackgroundColor:
        albumbrandingData.donda.selectionBackgroundColor,
      selectionTextColor: albumbrandingData.donda.selectionTextColor,
      albumCoverColor: albumbrandingData.donda.backgroundColor,
      headingFont: 'cal-sans',
      ctaFont: 'boldonese',
      paragraphBodyFont: 'line-jp',
    },
  },
};
