const mongoose = require('mongoose');

import { List } from '../model/list';
import { Result } from '../model/result';

let a = Result.find();

const query = () => {
    let result = Result.find();
    
    console.log(result);

    /* 
        Il faut reprendre le schema et le modifier pour
        le reinjecter dans la base
    */

    const data = List.find();
    data.forEach(element => {
        result.maj.map(res => {
            if (res.image == element.id) {
                res.votes += 1;
            }
        })
        result.total_votant += 1;
    });

    /*
        Description des autres algorithmes pour remplir la base 
        Scrutin par classement: 
        pour ce mode il existe plusieurs manière de voté: 
            • alternatif: 
                compte tous les 1er choix si qq'un a +50% alors il gagne
                on elimine le candidat le plus faible et on recommence 
        
        Attention il faut réduire le nb de votant. 
    */

    /*
            • Méthode Borda

            • Méthode Condorcet
    */
    
}