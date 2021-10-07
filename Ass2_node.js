const os=require("os");
console.log("\n operating system architechture:" + os.arch());
console.log("\n free memory of the os:" + os.freemem()/(1024*1024*1024));
console.log("\n Total memory of os:" + os.totalmem()/(1024*1024*1024));
console.log("\n os platform:" + os.platform());
console.log("\n display info of current loggin user:");
console.log(os.userInfo());

