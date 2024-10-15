let orders = ["101:Joker","123:NandiniGupta","124:Arham","127:Faizu","129:Dipti"];
//Added New Orders 
orders.unshift("134:Anshu","136:Prabhat","140:Aman");
orders.pop();
orders.pop();
function process(queue){
    for(let i=0;i<queue.length;i++){
    let seperate = queue[i].split(":");
    let OrderId = seperate[0];
    let customerName = seperate[1];
    console.log("Processing Order Id" ,OrderId + " for",customerName);
   // console.log("for",customerName);
}
}
process(orders);
console.log("Unprocessed Orders: ", orders);

let longest = "";
for(let i=0;i<orders.length;i++){
    let customerName = orders[i].split(":")[1];
    if(customerName.length > longest.length){
        longest = customerName;
        
    }
}

console.log("Customer with longest Name is: ", longest);
