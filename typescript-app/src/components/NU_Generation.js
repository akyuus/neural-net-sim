
export function generateData2() {
    let inference_time = [];
    let training_time = [];

    for(let i = 1; i <= 10; i++) {
        let fraction = (i/10);
        let ig_time = 96 - 109.881*fraction + 1747.669*Math.pow(fraction,2) - 3357.809*Math.pow(fraction,3) + 2902.098*Math.pow(fraction,4) - 769.2308 *Math.pow(fraction,5);
        let ic_time = 541.734 * Math.pow(fraction, 0.2269899);
        let accuracy = 0.7784677 + 0.5072611*fraction - 0.8448718*Math.pow(fraction,2) + 0.4615385 * Math.pow(fraction,3);
        let tg_time = -11.53333 + 351.6373*fraction - 1366.958*Math.pow(fraction,2) + 2440.793*Math.pow(fraction,3) - 1763.403 * Math.pow(fraction,4) + 410.2564 * Math.pow(fraction,5);
       
        inference_time.push({
            network_utilization: fraction, 
            "GPU (L)": ig_time, 
            "CPU (L)": ic_time, 
            "Accuracy (R)": accuracy,
        });
        training_time.push({
            network_utilization: fraction,
            "GPU (single train-iteration)": tg_time,
        });
        
    }

    return [inference_time, training_time ];
}