import {v4 as uuid} from 'uuid';
type Tasktype ={
  id:string,
  title:string,
  complated:boolean,
  createAt:Date
}

const  list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector('.new-task-form') as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

const tasks:Tasktype[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener('submit',(e)=>{
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;
  const newTask = {
    id: uuid(),
    title:input.value,
    complated:true,
    createAt: new Date()
  }
  tasks.push(newTask);
  saveTasks();
  addListItem(newTask);
  input.value = "";

})

function addListItem(task:Tasktype){
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change',()=>{
    task.complated = checkbox.checked;
  })
  checkbox.type = 'checkbox';
  checkbox.checked = task.complated;
  label.append(checkbox,task.title);
  item.append(label);
  list?.append(item);
  return;
}

function saveTasks(){
  localStorage.setItem('TASKITEMS',JSON.stringify(tasks));
}

function loadTasks():Tasktype[]{
  const taskJSON = localStorage.getItem('TASKITEMS')
  if (taskJSON == null) return []
  return JSON.parse(taskJSON);
}