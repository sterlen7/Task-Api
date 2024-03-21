const tasks = [
   { id: 1, taskTitle: 'Eat',createdAt:new Date(),completed :false },
   { id: 2,  taskTitle: 'code',createdAt:new Date(),completed :false  },
   { id: 3, taskTitle: 'sleep' , createdAt:new Date(),completed :false },
 ];
 

function getAll(req, res){   // for getting all tasks 
   res.json(tasks);
 }

 function addNew(req,res){  // for adding new tasks 
    const newTask = {id: 4,taskTitle: 'Send Email',createdAt:new Date(),completed :false };
    tasks.push(newTask);
    res.json(tasks)
 }

 function getOneTask(req, res){ // for single tasks
   const taskId = parseInt(req.params.id); 
   const task = tasks.find((task) => task.id === taskId);
 
   if (task) {
     res.json(task);
   } else {
     res.status(404).json({ message: "Task not found" }); 
   }

 }


function deleteTask(req, res){// to delete task
   const taskId = parseInt(req.params.id); 
    const taskToDelete = tasks.find((task)=> task.id === taskId);
    
    if (taskToDelete !== -1) {
      tasks.splice(taskToDelete, 1);
      res.json('Task deleted'); 
      
   }else{
      res.status(404).send("Task not found"); 
   }
  
}



module.exports= {getAll,addNew,getOneTask,deleteTask}

// module.exports=deleteTask




