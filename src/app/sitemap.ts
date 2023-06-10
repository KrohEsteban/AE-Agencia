import { MetadataRoute } from 'next';
 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

   
    
    let sitemap =[
        {
            url: process.env.URL +'/',
            lastModified: new Date(),
          },
          {
            url: process.env.URL + '/nosotros',
            lastModified: new Date(),
          },
          {
            url: process.env.URL +'/servicios',
            lastModified: new Date(),
          },
          {
            url: process.env.URL + '/contactos',
            lastModified: new Date(),
          },
           
            
    ]
    


  return sitemap;
}