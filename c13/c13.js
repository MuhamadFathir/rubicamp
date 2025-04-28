if (!process.argv[2]) {
    console.log('>>> JS TODO <<<')
    console.log('$ node todo.js <command>')
    console.log('$ node todo.js list')
    console.log('$ node todo.js task <task_id>')
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
    console.log('$ node todo.js list:outstanding asc|desc')
    console.log('$ node todo.js list:completed asc|desc')
    console.log('$ node todo.js tag <task_id> <task_name_1> <task_name_2> ... <task_name_N>')
    console.log('$ node todo.js filter:<tag-name>')
}

const { writeFileSync, readFileSync } = require('node:fs');

const task = require(`../c13/data.json`)
console.log(task[process.argv[3]].title)
if (process.argv[2] == "add") {
    task.push({ title: process.argv.slice(3).join(" ")})
    writeFileSync('data.json', JSON.stringify(task, null, 2), 'utf-8',)
    console.log(`"${process.argv.slice(3).join(" ")}" telah ditambahkan.`)
} else if (process.argv[2] == "list") {
    console.log("Daftar Pekerjaan")
    for (let i = 0; i < task.length; i++) {
        console.log(`${i + 1}. [ ] ${task[i].title}`)
    }
}else if(process.argv[2] == 'delete'){
    
    console.log('p')
}