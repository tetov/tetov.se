import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
interface HIProp {
  title: string
  image: IGatsbyImageData
}

const HeroImage: React.FC<HIProp> = ({ title, image }) => {
  const image_data = getImage(image)
  return (
    <GatsbyImage
      alt={`Cover image for ${title}`}
      image={image_data}
      loading="eager"
      imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
    />
  )
}

export default HeroImage
