export const translation = (search) => {
    switch (search) {
        case 'nugara':
            return search = 'back';
        case 'bicepsas':
        case 'dvigalvis':
            return search = "biceps";   
        case 'tricepsas':
        case 'trigalvis':
            return search = "triceps";   
        case 'kojos':
        case 'šlaunys':
        case 'keturgalvis':       
            return search = "quads";   
        case 'pečiai':
            return search  = "shoulders";    
        case ' ':
            return search  = " ";    
        case '':
            return search  = "";    
        case '':
            return search  = "";    
        case '':
            return search  = "";    
        case ' ':
            return search  = "  ";    
        case '':
            return search  = "";
        case '':
            return search = "";   
        case '':
            return search = "";   
        case '':
            return search = "";   
        case ' ':
            return search  = " ";    
        case ' ':
            return search  = " ";    
        case '':
            return search  = "";    
        case '':
            return search  = "";    
        case '':
            return search  = "";    
        case ' ':
            return search  = "  ";    
        case '':
            return search  = "";    
        case '':
            return search = "";   
        case '':
            return search = "";   
        case '':
            return search = "";   
        case ' ':
            return search  = " ";    
        case ' ':
            return search  = " ";    
        case '':
             return search  = "";    
        case '':
            return search  = "";    
        case '':
            return search  = "";    
        case ' ':
            return search  = "  ";    
        case '':
            return search  = "";
        case '':
            return search = "";   
        case '':
            return search = "";   
        case '':
            return search = "";   
        case ' ':
            return search  = " ";    
        case ' ':
            return search  = " ";    
        case '':
            return search  = "";    
        case '':
            return search  = "";    
        case '':
            return search  = "";    
        case ' ':
            return search  = "  ";    
        case '':
            return search  = "";    
    
        default:
            return search;        
    }
}
