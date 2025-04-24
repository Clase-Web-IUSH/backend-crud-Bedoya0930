const Task=require('../Models/Task')

const getAllTasks = async (req, res)=>{
    try {
        const tasks = await Task.findAll();
        res.json(tasks)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};
const getTaskById=async(req,res)=>{
    try {
        const task = await Task.findByPk(req.params,id)
        if (!task){
            return res.status(404).json ({error:'Task not found'})
        }
        
        res.json(task)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const createTask=async(req,res)=>{
    try {
        const newTask= await Task.create(req.body)
        res.status(201).json(newTask)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTask=async(req,res)=>{
    try {
        const task = await Task.findByPk(req.params,id)
        if (!task){
            return res.status(404).json ({error:'Task not found'})
        }
        await task.destroy()
        res.json ({error:'Task eliminated'})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
const updateTask=async(req,res)=>{
    try {
        const task = await Task.findByPk(req.params,id)
        if (!task){
            return res.status(404).json ({error:'Task not found'})
        }
        await task.update(task)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports={
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTaskById

}