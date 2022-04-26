let newTodo = document.querySelector('#source');
let addTodo = document.querySelector('#listbutton1');
let deleteTodo = document.querySelector('.delete');
let newList = document.getElementById('mylist')
let todo = [];
addTodo.addEventListener('click', () => {
    if (newTodo.value != '') {
        todo.push(newTodo.value)

        let newTodo_list = document.createElement('div')
        newTodo_list.className = 'item'

        for (let i = 0; i < todo.length; i++) {
            newTodo_list.innerHTML = newTodo.value;
            newList.appendChild(newTodo_list)
        }
        if (todo.length > 0) {
            let item = document.querySelectorAll('.item')

            for (let j = 0; j < item.length; j++) {
                let delete_Todo = document.createElement('div')
                delete_Todo.className = 'clean'
                delete_Todo.innerHTML = `<img src="./button image/Group 77.png" alt="" onmousemove="this.src='./button image/Group 70.png'" onmouseout="this.src='./button image/Group 77.png'">`
                item[j].appendChild(delete_Todo)

                delete_Todo.addEventListener('click', () => {
                    newList.removeChild(item[j])
                })
            }
        }
        newTodo.value = ''
    }else if (newTodo.value==''){
        alert('The list is empty')
    }{

    }
})
const del = document.querySelector('.delete')
del.addEventListener('click', () => {
    newTodo.value = " "

})

const vector = document.querySelector('#vectorbutton')
vector.addEventListener('click', () => {
    let list = []
    let listLetters = []
    let lists = newList.children 
    
    for (let i = 0; i < lists.length; i++) {
        list[i] = lists[i]
        listLetters[i] = lists[i].innerText
    }

    listLetters.sort()

    list.map((item, index) => {
        item.innerText = listLetters[index]
    })
    
    for(let i = 0; i < lists.length; i++) {
        lists[i] =  list[i]
    } 
})