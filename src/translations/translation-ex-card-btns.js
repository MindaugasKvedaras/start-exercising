export const translationBodyPart = (exercise) => {
    switch (exercise.bodyPart) {
        case 'all':
            return exercise.bodyPart = 'Visi';
        case 'back':
            return exercise.bodyPart = "Nugara";   
        case 'cardio':
            return exercise.bodyPart = "Kardio";   
        case 'chest':
            return exercise.bodyPart = "Krūtinė";   
        case 'lower arms':
            return exercise.bodyPart  = "Apatinė rankų dalis";    
        case 'lower legs':
            return exercise.bodyPart  = "Apatinė kojų dalis";    
        case 'neck':
            return exercise.bodyPart  = "Kaklas";    
        case 'shoulders':
            return exercise.bodyPart  = "Pečiai";    
        case 'upper arms':
            return exercise.bodyPart  = "Viršutinė rankų dalis";    
        case 'upper legs':
            return exercise.bodyPart  = "Viršutinė kojų dalis";    
        case 'waist':
            return exercise.bodyPart  = "Liemuo";    
        default:
            return exercise.bodyPart;        
    }
}

export const translationMuscle = (exercise) => {
    switch (exercise.target) {
        case 'abductors':
            return exercise.target = 'Atitraukėjai';
        case 'abs':
            return exercise.target = "Pilvo presas";   
        case 'adductors':
            return exercise.target = "Pritraukėjai";   
        case 'biceps':
            return exercise.target = "Bicepsas";   
        case 'calves':
            return exercise.target  = "Blauzdos";    
        case 'cardiovascular system':
            return exercise.target  = "ŠKS sistema";    
        case 'delts':
            return exercise.target  = "Deltinis";    
        case 'forearms':
            return exercise.target  = "Dilbiai";    
        case 'glutes':
            return exercise.target  = "Sėdmenys";    
        case 'hamstrings':
            return exercise.target  = "Užpakaliniai šlaunies raumenys";    
        case 'lats':
            return exercise.target  = "Platusis nugaros raumuo";
        case 'levator scapulae':
            return exercise.target  = "Mentės keliamasis raumuo";    
        case 'pectoralis':
             return exercise.target  = "Krūtinė";    
        case 'quads':
            return exercise.target  = "Keturgalvis";    
        case 'serratus anterior':
            return exercise.target  = "Priekinis dantytasis raumuo";    
        case 'spine':
            return exercise.target  = "Stuburas";    
        case 'traps':
            return exercise.target  = "Trapecija";    
        case 'triceps':
            return exercise.target  = "Trigalvis";    
        case 'upper back':
            return exercise.target  = "Viršutinė nugaros dalis";         
        default:
            return exercise.target;        
    }
}

export const translationExerciseName = (exercise) => {
    switch (exercise.name) {
        case 'archer push up':   
            return exercise.name = 'Lankininko atsispaudimas';
        case '3/4 sit-up':
            return exercise.name = "Atsilenkimai";   
        case '45° side bend':
            return exercise.name = "45° šoninis lenkimas";   
        case 'air bike':
            return exercise.name = "Įstrižiniai atsilenkimai";   
        case 'all fours squad stretch':
            return exercise.name  = "Keturgalvio tempimas ant keturių";    
        case 'alternate heel touchers':
            return exercise.name  = "Šoninis lenkimas gulint ant nugaros";    
        case 'alternate lateral pulldown':
            return exercise.name  = "Šoninis traukimas";    
        case 'ankle circles':
            return exercise.name  = "Čiurnos sukimas";    
        case 'archer pull up':
            return exercise.name  = "Lankininko prisitraukimas";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";
        case '':
            return exercise.name  = "";    
        case '':
             return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";
        case '':
            return exercise.name = '';
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";
        case '':
            return exercise.name = '';
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";
        case '':
            return exercise.name  = "";    
        case '':
             return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";
        case '':
            return exercise.name = '';
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";         
        case '':
            return exercise.name = '';
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";
        case '':
            return exercise.name  = "";    
        case '':
             return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";
        case '':
            return exercise.name = '';
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name = "";   
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case '':
            return exercise.name  = "";    
        case ' ':
            return exercise.name  = " ";         
         
                 
        default:
            return exercise.name;        
    }
}
