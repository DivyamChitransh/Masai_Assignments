let tasks = ["task1","task2","task3","task4","task5"];
tasks.shift();
tasks.unshift("High_priority1","High_priority2");
tasks[tasks.length-1] = "New task";
console.log(tasks);