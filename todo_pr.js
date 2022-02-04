const list = [
              { name: 'create a post', status: 'In progress', priority: 'low'  },
              { name: 'test', status: 'Done', priority: 'high'  }
              ]

const STATUS = {
    TODO: 'ToDo',
    IN_PROGRESS: 'In progress',
    DONE: 'Done'
}

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
}

function addTask(task){
    list.push({
        name: task,
        status: STATUS.TODO,
        priority: PRIORITY.HIGH
    })
}

function changeStatus(task, status){
    list.forEach(i=>{
        if(i.name === task){
            i.status = status
        }
    })
}

function changePriority(task, priority){
    list.forEach(i=>{
        if(i.name === task){
            i.priority = priority
        }
    })
}

function showBy(displayMethod){
    const result = {}

    for(let i of list){
        const displayKey = i[displayMethod]

        if(!result[displayKey]) {
            result[displayKey] = ` ${i.name}\n`
        } else {
            result[displayKey] += ` ${i.name}\n`
        }
    }

    for(let k in result){
        console.log(k)
        console.log(result[k])
    }
}

//tests
addTask('push to git')
addTask('add to chat')
changeStatus('push to git', 'Done')
changePriority('create a post', 'high')
changePriority('test', 'low')

//output
showBy('priority')
showBy('status')
