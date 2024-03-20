const tasks = [
   { id: 1, taskTitle: 'Eat' },
   { id: 2, taskTitle: 'code' },
   { id: 3, taskTitle: 'code' },
 ];
 

function getAll(req, res) {   //controller for getting all tasks 
   res.json(tasks);
 }

 function addNew(req,res){  // for adding new tasks 
    const newTask = {
      id: 4,
      taskTitle: 'Send Email',
    };
    tasks.push(newTask);
    res.json(tasks)
 }





//  function delete



module.exports= getAll
module.exports= addNew


