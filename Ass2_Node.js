const os=require("os");
Console.log("\n operating system archictechture:" + os.arch());
Console.log("\n free memory of the os:" + os.freemem()/(1024*1024*1024));
Console.log("\n Total memory of os:" + os.totalmem()/(1024*1024*1024));
Console.log("\n os platform:" + os.platform());
Console.log("\n display info of current loggin user:");
Console.log(os.userInfo());
