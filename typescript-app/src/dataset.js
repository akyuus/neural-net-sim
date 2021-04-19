export let inference_gpu_execution_data = [];
export let inference_gpu_accuracy_data = [];
export let inference_cpu_execution_data = [];
export let inference_cpu_accuracy_data = [];
export let training_execution_data = [];
export let training_accuracy_data = [];

const ig_max = 12;
const ic_max = 34;
const t_max = 18;

/**
 * 
 * @param {Number} f 
 * @returns {Number}
 */
 function roundTo4(f) {
    return Math.round(f*10000)/10000.0;
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
function getRandomArbitrary(min, max) {
    return roundTo4(Math.random() * (max - min) + min);
}

export function generateData() {
    inference_gpu_execution_data = [];
    inference_gpu_accuracy_data = [];
    inference_cpu_execution_data = [];
    inference_cpu_accuracy_data = [];
    training_execution_data = [];
    training_accuracy_data = [];
    for(let i = 0; i < 100; i++) {
        let name = i+1;
        let ig_deadline = getRandomArbitrary(5, 15);
        let ic_deadline = getRandomArbitrary(20, 40);
        let t_deadline = getRandomArbitrary(5, 30);
        let ig_exec = (ig_deadline < ig_max) ? roundTo4(getRandomArbitrary(0.8, 0.99) * ig_deadline) : roundTo4(0.9999 * ig_deadline);
        let ig_exec_ns = (ig_deadline < ig_max) ? 0 : ig_max;
        let ic_exec = (ic_deadline < ic_max) ? roundTo4(getRandomArbitrary(0.8, 0.99) * ic_deadline) : roundTo4(0.9999 * ic_deadline);
        let ic_exec_ns = (ic_deadline < ic_max) ? 0 : ic_max;
        let t_exec = (t_deadline < t_max) ? roundTo4(getRandomArbitrary(0.8, 0.99) * t_deadline) : roundTo4(0.9999 * t_deadline);
        let t_exec_ns = (t_deadline < t_max) ? 0 : t_max;
        let ig_acc = (ig_deadline < ig_max && ig_deadline/ig_max < 0.83) ? roundTo4(1.2 * ig_deadline/ig_max) : 0.9999;
        let ig_acc_ns = (ig_deadline < ig_max) ? 0 : 0.9999;
        let ic_acc = (ic_deadline < ic_max && ic_deadline/ic_max < 0.83) ? roundTo4(1.2 * ic_deadline/ic_max) : 0.9999;
        let ic_acc_ns = (ic_deadline < ic_max) ? 0 : 0.9999;
        let t_acc = (t_deadline < t_max && t_deadline/t_max < 0.83) ? roundTo4(1.2 * t_deadline/t_max) : 0.9999;
        let t_acc_ns = (t_deadline < t_max) ? 0 : 0.9999;
    
        inference_gpu_execution_data.push({
            name: `${name}`, 
            deadline: ig_deadline, 
            exec: ig_exec, 
            exec_ns: ig_exec_ns,
        });
        inference_gpu_accuracy_data.push({
            name: `${name}`,
            acc: ig_acc,
            acc_ns: ig_acc_ns
        });
        inference_cpu_execution_data.push({
            name: `${name}`, 
            deadline: ic_deadline, 
            exec: ic_exec, 
            exec_ns: ic_exec_ns,
        });
        inference_cpu_accuracy_data.push({
            name: `${name}`,
            acc: ic_acc,
            acc_ns: ic_acc_ns
        });
        training_execution_data.push({
            name: `${name}`, 
            deadline: t_deadline, 
            exec: t_exec, 
            exec_ns: t_exec_ns,
        });
        training_accuracy_data.push({
            name: `${name}`,
            acc: t_acc,
            acc_ns: t_acc_ns
        });
    }
}