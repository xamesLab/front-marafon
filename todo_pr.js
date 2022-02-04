const list = [
              { name: 'create a post', status: 'In progress', priority: 'low'  },
              { name: 'test', status: 'ToDo', priority: 'high'  }
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

function deleteTask(task) {
    for(let i=0; i<list.length; i++) {
        if (list[i].name === task) {
            list.splice(i, 1)
            return
        }
    }
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

function checkEmpty(displayMethod, resultObj){
    const temp = {status:STATUS, priority:PRIORITY}
    const keysArr = Object.values(temp[displayMethod])

    for(let i of keysArr){
        if(!(i in resultObj)){
            resultObj[i] = ' -\n'
        }
    }
    return resultObj
}

function showBy(displayMethod){
    let result = {}

    for(let i of list){
        const displayKey = i[displayMethod]

        if(!result[displayKey]) {
            result[displayKey] = ` ${i.name}\n`
        } else {
            result[displayKey] += ` ${i.name}\n`
        }
    }

    result = checkEmpty(displayMethod, result)
    //output
    for(let k in result){
        console.log(k)
        console.log(result[k])
    }
}

//tests
addTask('push to git')
addTask('add to chat')
changeStatus('push to git', 'In progress')
changePriority('create a post', 'high')
changePriority('test', 'low')
deleteTask('create a post')

//output
showBy('priority')
showBy('status')
