async function load_font(fontFamily, url) {                                   
    try {                                                                           
        const font = new FontFace(fontFamily, url);                                 
        await font.load();                                                          
        document.fonts.add(font);                                                   
        return true;                                                                
    } catch (e) {                                                                   
        if (e instanceof DOMException) {                                            
            switch (e.name) {                                                       
                case 'SecurityError':                                               
                    console.error('Font could not be loaded due to a security issue.');
                    break;                                                          
                case 'NetworkError':                                                
                    console.error('Font could not be loaded due to a network issue.');
                    break;                                                          
                case 'NotSupportedError':                                           
                    console.error('Font format is not supported.');                 
                    break;                                                          
                case 'InvalidModificationError':                                    
                    console.error('Invalid modification of a read-only font.');  
                    break;                                                          
                case 'TypeError':                                                   
                    console.error('Invalid or malformed font.');                    
                    break;                                                          
                default:                                                            
                    console.error('An unknown error occurred while loading the font.' + e); 
                    break;                                                          
            }                                                                       
        } else {                                                                    
            console.error('An unknown error occurred while loading the font.' + e); 
        }                                                                           
        return false;                                                               
    }                                                                               
} 
