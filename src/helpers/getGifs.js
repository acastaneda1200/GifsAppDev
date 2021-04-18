export const getGifs =  async(categoria) => {
   
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=10&api_key=h1Mf9W0h3d35PBFvE09zOdXdf4DAH94B`;
    const resp =  await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            images: img.images?.downsized_medium.url
        }
    })
 
    return gifs;
   
  
    
}