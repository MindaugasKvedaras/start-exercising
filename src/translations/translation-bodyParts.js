export const translation = (item) => {
    switch (item) {
        case 'all':
            return item = 'Visi';
        case 'back':
            return item = "Nugara";   
        case 'cardio':
            return item = "Kardio";   
        case 'chest':
            return item = "Krūtinė";   
        case 'lower arms':
            return item  = "Apatinė rankų dalis";    
        case 'lower legs':
            return item  = "Apatinė kojų dalis";    
        case 'neck':
            return item  = "Kaklas";    
        case 'shoulders':
            return item  = "Pečiai";    
        case 'upper arms':
            return item  = "Viršutinė rankų dalis";    
        case 'upper legs':
            return item  = "Viršutinė kojų dalis";    
        case 'waist':
            return item  = "Liemuo";    
        default:
            return item;        
    }
}
