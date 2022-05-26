console.log(process.argv);
let args = process.argv.slice(2);
console.log(args);
let arr = args.slice(2,args.length).map(Number);
console.log(arr);

function calculate(){
    checkValidInput();
    let op = args.at(1);
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
    if(arr.length > 0){
        arr.forEach(ele => {
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
    let sum = arr.reduce((a,b) => (a+b));
    console.log(sum);
}

function mul(){
    console.log('Operation: Multiplication');
    let prod = arr.reduce((a,b) => (a*b));
    console.log(prod); 
}

function sub(){
    if(arr.length!=2){
        console.error('For subtraction enter only two numbers');
    }else{
        let diff = arr.reduce((a,b) => (a-b));
        console.log('Operation: Subtraction\n',diff);
    }
}

function div(){
    if(arr.length!=2){
        console.error('For division enter only two numbers');
    }else{
        let quotient = arr.reduce((a,b) => (a/b));
        console.log('Operation: Division\n',quotient);
    }
}

calculate();