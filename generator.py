import json
import random 

data = {}

inference_gpu_max = 12
inference_cpu_max = 34
training_max = 18

def truncate(f: float) -> float:
    return float(f"{f:.4f}")

for i in range(100):
    deadlines = {}
    execution_times = {}
    accuracies = {}
    ig = 'inference_gpu'
    ic = 'inference_cpu'
    t = 'training'
    deadlines[ig] = truncate(random.uniform(5,15))
    deadlines[ic] = truncate(random.uniform(20,40))
    deadlines[t] = truncate(random.uniform(5,30))
    execution_times[ig] = truncate(random.uniform(0.8, 0.99)*deadlines[ig]) if (deadlines[ig] < inference_gpu_max) else truncate(0.9999 * deadlines[ig])
    execution_times[ic] = truncate(random.uniform(0.8, 0.99)*deadlines[ic]) if (deadlines[ic] < inference_cpu_max) else truncate(0.9999 * deadlines[ic])
    execution_times[t] = truncate(random.uniform(0.8, 0.99)*deadlines[t]) if (deadlines[t] < training_max) else truncate(0.9999 * deadlines[t]) 
    accuracies[ig] = truncate(1.2 * deadlines[ig]/inference_gpu_max) if (deadlines[ig] < inference_gpu_max and deadlines[ig]/inference_gpu_max < 0.83) else 0.9999
    accuracies[ic] = truncate(1.2 * deadlines[ic]/inference_cpu_max) if (deadlines[ig] < inference_cpu_max and deadlines[ic]/inference_cpu_max < 0.83) else 0.9999
    accuracies[t] = truncate(1.2 * deadlines[t]/training_max) if (deadlines[ig] < training_max and deadlines[t]/training_max < 0.83) else 0.9999
    data[f'sample_{i+1}'] = {'deadlines': deadlines, 'execution_times': execution_times, 'accuracies': accuracies}

with open('data.json', 'w') as f:
    json.dump(data, f, indent=4)

print('Done.')
