// function Task(title, priority) {
//     this.title = title;
//     this.priority = priority;
//     this.status = false; 

//     Object.defineProperty(this,"TaskStatus", {
//         get :function(){
//             return this.status;
//         },

//         set : function(value) {
//             this.status = value;
//         }
//     })
// }

class Task{
    constructor(title,priority) {
        this.title = title;
        this.priority = priority;
        this.status = false;
    }

    complete() {
        this.status = true;
    }

    toggle() {
        this.status = !this.status;
    }

    getInfo() {
        return `Title : ${this.title}, Priority : ${this.priority}, Status : ${this.status}`;
    }
}




let t1 = new Task("Learning JS","high");

// t1.complete();

// console.log(t1.getInfo());

// t1.toggle();

// console.log(t1.getInfo());

class TaskManager{
    constructor(){
        this.tasks=[];
    }

     addTask(newTask){
        for(let task of this.tasks) {
            if(task.title===newTask.title){
                console.log("Task already exist");
                return ;
            }
        }
    
        this.tasks.push(newTask);
        console.log(`Task added to Task Manager`)    
    }

    removeTask(title){
        this.tasks = this.tasks.filter(task => task.title !== title);
        
    }

    getAllTasks(){
        console.log("All Tasks in Task Manager")
        for(let task of tasks) {
                console.log(task);           
        }
    }

    getCompletedTasks(){
        console.log("Completed Tasks in Task Manager")
        for(let task of tasks) {
            if(task.status === true) {
                console.log(task);           
            }
        }
    }

    getTaskByPriority(priority) {
        console.log(`getting tasks by priority ${priority}`);
        return tasks = this.tasks.filter(task => task.priority === priority);
    }

    sortTasks(){
        const priority = {
            high : 1,
            medium : 2,
            low : 3,
        }

        this.tasks.sort((a,b) =>{
            return priority[a.priority] - priority[b.priority];
        })
    }

    getStats(){
        let total=this.tasks.length;
        let completed= this.tasks.filter(task => task.status).length;
        let pending= total - pending;

        return {total, completed, pending};
    }
}

    


let manager = new TaskManager();

manager.addTask(t1);
manager.addTask(new Task("Project Completion","medium"));
manager.addTask(new Task("Prototype Learning","high"));

console.log(manager.getAllTasks());

t1.toggle();

manager.getCompletedTasks();

manager.getTaskByPriority("high");

manager.getStats();


