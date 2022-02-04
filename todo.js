// Хранилищем будет объект, а имена задач - ключами.
//     const list = {
//     "create a new practice task": "In Progress",
//     "make a bed": "Done",
//     "write a post": "To Do",
// }
//
// Функция changeStatus - будет менять статус задачи
// changeStatus("write a post", "Done")
//
// Функция addTask - добавляет новую задачу
// addTask('have a walk')
//
// Функция deleteTask - удаляет задачу
// deleteTask('have a walk')
//
// Функция showList будет выводить весь список дел в виде
// Todo:
//     "create a new practice task",
//         "make a bed",
//         In Progress:
//     "write a post"
// Done:
//     -
//Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль

const list = {
    // storage
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",

    // methods
    addTask: function (newTask) {
        this[newTask] = "To Do";
    },
    changeStatus: function (task, newStatus) {
        if (this[task]) this[task] = newStatus;
    },
    deleteTask: function (task) {
        delete this[task];
    },

    // method for output
    showList: function () {
        const result = { "Todo:": "", "In Progress:": "", "Done:": "" };
        // result string
        for (let k in this) {
            switch (this[k]) {
                case "In Progress":
                    result["In Progress:"] += ` ${k}\n`;
                    break;
                case "To Do":
                    result["Todo:"] += ` ${k}\n`;
                    break;
                case "Done":
                    result["Done:"] += ` ${k}\n`;
                    break;
            }
        }
        // output
        for (let i in result) {
            console.log(i);
            console.log(result[i] || " -\n");
        }
    },
};

// tests
list.addTask("have a walk");
list.addTask("push to Git");
list.changeStatus("test", "In Progress");
list.changeStatus("write a post", "Done");
list.deleteTask("have a walk");
list.deleteTask("testDel");

// output
list.showList();
