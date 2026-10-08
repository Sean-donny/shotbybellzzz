//image import
import galleryImage1 from '@/public/tyra_by_the_lake.jpg';
import galleryImage2 from '@/public/bellzzz_with_the_cam.jpg';
import { StaticImageData } from 'next/image';

export type CameraInfo = {
  format: string;
  iso: string;
  aperture: string;
  shutterSpeed: string;
  sensorSize: string;
  lens: string;
  camera: string;
};

type GalleryInstantPhoto = {
  [key: string]: {
    src: StaticImageData;
    alt: string;
    title: string;
    year: string;
    description: string;
    cameraInfo: CameraInfo;
  };
};

type GalleryInstantPhotoDetail = {
  src: StaticImageData;
  alt: string;
  title: string;
  year: string;
  description: string;
  cameraInfo: CameraInfo;
};

export const gallerySectionImageData: GalleryInstantPhoto = {
  image1: {
    src: galleryImage1,
    alt: 'tyra by the lake looking piercingly at the viewer',
    title: 'Lake Side',
    year: '2025',
    description: 'Tyra by the lake looking piercingly at the viewer',
    cameraInfo: {
      format: 'digital',
      iso: '200',
      aperture: '1.4',
      shutterSpeed: '1/250',
      sensorSize: '48',
      lens: 'Sigma 16mm f/1.4 DC DN Contemporary',
      camera: 'Fujifilm X-M5',
    },
  },
  image2: {
    src: galleryImage2,
    alt: 'bellzzz holding a camera',
    title: 'The Photographer',
    year: '2025',
    description: 'Bellzzz holding a camera',
    cameraInfo: {
      format: 'digital',
      iso: '200',
      aperture: '1.4',
      shutterSpeed: '1/250',
      sensorSize: '48',
      lens: 'Sigma 16mm f/1.4 DC DN Contemporary',
      camera: 'Fujifilm X-M5',
    },
  },
};
