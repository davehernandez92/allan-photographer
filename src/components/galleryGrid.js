

import Image from 'next/image';
import styles from '../app/ui/components/galleryGrid.module.css'; 
const GalleryGrid = ({images}) => {

   
  
    return (
      <section className=' my-20 lg:my-32'>
       
      <div className={`  ${styles.gallery__grid}`}>
        {images.map((image) => (
          <div key={image.public_id} className={styles.gallery__item}>
            <Image
              key={image.url}
              src={image.url}
              alt={image.public_id}
              width={image.width } 
              height={image.height} 
            />
          </div>
        ))}
      </div>
      </section>
    );
  };
  
  export default GalleryGrid;