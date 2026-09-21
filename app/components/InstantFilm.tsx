import Image, { StaticImageData } from 'next/image';

type CustomAspectRatio =
  | 'INSTAXMINI'
  | 'INSTAXSQUARE'
  | 'POLAROIDGO'
  | 'POLAROIDITYPE';

/**
 * Photo window height / width ratios.
 */
export const InstantFilmSizes = {
  INSTAXMINI: 1.34782608696,
  INSTAXSQUARE: 1,
  POLAROIDGO: 1.02173913043,
  POLAROIDITYPE: 1.02597402597,
} as const;

type InstantFilmProps = {
  image: StaticImageData;
  alt: string;
  title?: string;
  width: number;
  aspectRatio: CustomAspectRatio;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'auto' | 'async' | 'sync';
};

const InstantFilm = ({
  image,
  alt,
  title,
  width,
  aspectRatio,
  loading,
  fetchPriority,
  decoding,
}: InstantFilmProps) => {
  const photoAspectRatio = InstantFilmSizes[aspectRatio];

  return (
    <div className="box-border bg-sky-50 px-3 pt-5 pb-10" style={{ width }}>
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: `1 / ${photoAspectRatio}`,
        }}
      >
        <Image
          src={image}
          alt={alt}
          title={title}
          fill
          sizes={`${width}px`}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default InstantFilm;
