const calcQuadEqu = document.getElementById("calcQuadEqu")

const calcQuadEquation = () => {
	const a = document.getElementById("a").value
	const b = document.getElementById("b").value
	const c = document.getElementById("c").value
    const result = document.getElementById("result");
	const d = Math.pow(b, 2) - 4 * a * c
	const e = 2 * a
	let quadraticformula1 = (-b + Math.sqrt(d)) / e;

	let quadraticformula2 = (-b - Math.sqrt(d)) / e;
	if (a == 0) {
        result.innerText = `0`;
	}else if (isNaN(quadraticformula1) || isNaN(quadraticformula2)) {
        result.textContent = `Answer: x = 0`;
    }else {
        result.textContent = `Answer : X = ${quadraticformula1} or ${quadraticformula2}`;
    }
}

calcQuadEqu.addEventListener("click", calcQuadEquation); 


const calcQuad = () => {
    let equation = document.getElementById("equation").value;
    //equation = equation.replace(/(^|[^0-9])x/g, "$11x");
    let coefficients = equation.match(/-?\d+/g);
    let a = parseInt(coefficients[0]);
    let b = parseInt(coefficients[1]);
    let c = parseInt(coefficients[2]);

    let discriminant = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.getElementById("answer").innerText = "The solutions are x1 = " + x1 + " and x2 = " + x2;
}

calculate.addEventListener("click", calcQuad);

//x^2 + 4x-5=0

/*
let a = 1;
let b = 4;
let c = -5;

let discriminant = b * b - 4 * a * c;

let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);

let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

console.log(`Solutiona are x1= ${x1} and x2= ${x2}`);
*/