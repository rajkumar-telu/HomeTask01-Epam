console.log(process.argv);
let [,,,op,...args] = process.argv;
console.log(args);
args = args.map(Number);


function calculate(){
    checkValidInput(); 
    switch(op){
        case 'addition':
            add();
            break;
        case 'subtraction':
            sub();
            break;
        case 'multiply':
            mul();
            break;
        case 'division':
            div();
            break;
        default:
            console.log('Invalid operation');
    }
}

function checkValidInput(){
    if(args.length > 0){
        args.forEach(ele => {
            if(isNaN(ele)){
                console.error('Invalid input given');
                return;
            }
        });
    }else{
        console.error('Must provide atleast two values to perform the operation');
        return;
    }
}

function add(){
    console.log('Operation: Addition');
    let sum = args.reduce((a,b) => (a+b));
    console.log(sum);
}

function mul(){
    console.log('Operation: Multiplication');
    let prod = args.reduce((a,b) => (a*b));
    console.log(prod); 
}

function sub(){
    if(args.length!=2){
        console.error('For subtraction enter only two numbers');
    }else{
        let diff = args.reduce((a,b) => (a-b));
        console.log('Operation: Subtraction\n',diff);
    }
}

function div(){
    if(args.length!=2){
        console.error('For division enter only two numbers');
    }else{
        let quotient = args.reduce((a,b) => (a/b));
        console.log('Operation: Division\n',quotient);
    }
}

calculate();