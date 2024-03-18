 let tasks =[{
    taskname:""

    
 }]
 
 const alltasks = (res,req)=>{
    res.json({
        message:"All tasks"
    })
 }

 const taskDelete =(res,req)=>{
    res.json({
        message:"Task deleted"
    })
 }

 const newTask = (res,req)=>{
    res.json({
        message:"input new task"
    })
 }

 module.exports ={newTask,taskDelete,alltasks}