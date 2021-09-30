// Setting Up Variable
let todoContainer = document.querySelector('.todo-container');

let theInput = document.querySelector('.todo-container .add-task input');
let theAddButton = document.querySelector('.todo-container .add-task .plus');


let tasksContainer = document.querySelector('.tasks-content');
let noTasksMsg = document.querySelector('.tasks-content .no-tasks-message');

let tasksCount = document.querySelector('.task-stats .tasks-count span');
let tasksCompleted= document.querySelector('.task-stats .tasks-completed span');


//Focus onload fn
window.onload = () => theInput.focus();

// All added taskes 
let AllTasks = [];
// Adding the task 

theAddButton.onclick = () => {
    if(theInput.value === ''){
        sweetAlert('Wrong!', 'You Cannot add empety task', 'error');
    } else {
        if( AllTasks.includes(theInput.value)){sweetAlert('Wrong!', 'You Cannot readd task', 'error');}
        else{
                AllTasks.push(theInput.value);
                
                console.log(...AllTasks);
                
                // bigen of fn
                
                noTasksMsg.remove();
                 
        let mainSpan = document.createElement('span');
        
        let deleteElement = document.createElement('span');
        
        let text = document.createTextNode(theInput.value);
        
        let deleteText = document.createTextNode('Delete');
        
        mainSpan.appendChild(text);
        
        mainSpan.className = 'task-box'; 
        
        deleteElement.appendChild(deleteText);
        
        deleteElement.className = 'delete';
        
        mainSpan.appendChild(deleteElement);
        
        tasksContainer.appendChild(mainSpan);
                
        theInput.value = '';
        
        theInput.focus();
                           
            
           
    
// Delete Task 
mainSpan.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        console.log(mainSpan.firstChild);
        AllTasks.splice(mainSpan.firstChild);
       e.target.parentNode.remove();
        
        
    if(tasksContainer.childElementCount == 0){
        let tempMsg = document.createElement('span');
            let tempMsgTxt = document.createTextNode('you deleted all tasks!');
            tempMsg.className = 'task-box temporary';
            tempMsg.appendChild(tempMsgTxt);
            tasksContainer.appendChild(tempMsg);
            setTimeout(()=> {tempMsg.remove()}, 3000);
            setTimeout(() => {tasksContainer.appendChild(noTasksMsg)}, 3000);
            setTimeout(() => {countTasks();}, 3000);
    }
        
        
        
    }
    
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished');
    }
    
    countTasks();
});
  countTasks();         
}}}






/////////////////////////////Adding delet bTN to all

let DeleteAllTasksBtn = document.querySelector('.delete-all-tasks-Btn');

DeleteAllTasksBtn.onclick = function() {
    if(tasksContainer.childElementCount >=1){
      if( document.body.contains(noTasksMsg) ){
          
          console.log('note: there is no tasks to remove');
          
        } else{
             let mostafa = document.querySelectorAll('.tasks-content .task-box');

            mostafa.forEach(el => el.remove());
            AllTasks.splice(AllTasks);
            
            
            let tempMsg = document.createElement('span');
            let tempMsgTxt = document.createTextNode('you delete all tasks!');
            
            tempMsg.className = 'task-box temporary';
            tempMsg.appendChild(tempMsgTxt);
            tasksContainer.appendChild(tempMsg);
            setTimeout(()=> {tempMsg.remove()}, 3000);
            setTimeout(() => {tasksContainer.appendChild(noTasksMsg)}, 3000);
            setTimeout(() => {countTasks();}, 3000);
            
      }  
    }
 countTasks();
      }
///////////////////End

// count tasks and completed tasks
function countTasks() {
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
    console.log(document.querySelectorAll('.tasks-content .task-box'));
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}


