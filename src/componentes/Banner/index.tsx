import "./Banner.css";

interface BannerProps {
  endImg: string;
  altText?: string;
}

export const Banner = ({ endImg, altText }: BannerProps) => {
  // JSX
  return (
    <header className="banner">
      <img src={endImg} alt={altText} />
    </header>
  );
};

export default Banner;
