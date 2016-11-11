 export class Bank {
   id : number;
   name : string;
   criterias : Array<Evaluation>
 }
 
 export class Evaluation {
 	label : string;
 	description : string;
 	value : number;

 	constructor(label : string, description : string, value : number){
 		this.label = label;
 		this.value = value;
 		this.description = description;
 	}
 }