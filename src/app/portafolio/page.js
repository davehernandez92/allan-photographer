import cloudinary from "cloudinary"

import GalleryGrid from "@/components/galleryGrid"
import GalleryHero from "@/components/galleryHero"

export default async function PortafolioPage() {

  const results = await cloudinary.v2.search
  .expression('resource_type:image AND asset_folder=galeria  ')
  .sort_by('public_id','desc')
  .max_results(32)
  .execute()
  

    return (
      <div>
      <GalleryHero/>
      <GalleryGrid images={results.resources}/>

      
      
      </div>
    )
  }
  

  