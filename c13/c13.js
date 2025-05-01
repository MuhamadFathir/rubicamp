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
    process.exit(0);
}

const { writeFileSync } = require('node:fs');

let task = require(`../c13/data.json`)

if (process.argv[2] == "add") {
    task.push({ title: `${process.argv.slice(3).join(" ")}`, complete: false, tags: [] })
    writeFileSync('data.json', JSON.stringify(task, null, 2), 'utf-8',)
    console.log(`"${process.argv.slice(3).join(" ")}" telah ditambahkan.`)
} else if (process.argv[2] == "list") {
    console.log("Daftar Pekerjaan")
    for (let i = 0; i < task.length; i++) {
        console.log(`${i + 1}. ${task[i].complete ? '[x]' : '[ ]'} ${task[i].title}`)
    }
} else if (process.argv[2] == 'delete') {
    console.log(`'${task[process.argv[3] - 1].title}' telah dihapus dari daftar`)
    task.splice(task[`${process.argv[3] - 1}`].title, 1)
    writeFileSync('data.json', JSON.stringify(task, null, 2), 'utf-8',)
} else if (process.argv[2] == 'complete') {
    console.log(`"${task[process.argv[3] - 1].title}" telah selesai`)
    task[process.argv[3] - 1].complete = true
    writeFileSync('data.json', JSON.stringify(task, null, 2), 'utf-8',)
} else if (process.argv[2] == 'uncomplete') {
    console.log(`"${task[process.argv[3] - 1].title}" status selesai dibatalkan`)
    task[process.argv[3] - 1].complete = false
    writeFileSync('data.json', JSON.stringify(task, null, 2), 'utf-8',)
} else if (process.argv[2] == 'list:outstanding') {
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < task.length; i++) {
        if (process.argv[3] == "asc" && task[i].complete == false) {
            console.log(`${i + 1}. ${task[i].complete ? '[x]' : '[ ]'} ${task[i].title}`)
        }
    }
    for (let i = task.length - 1; i >= 0; i--) {
        if (process.argv[3] == "desc" && task[i].complete == false) {
            console.log(`${i + 1}. ${task[i].complete ? '[x]' : '[ ]'} ${task[i].title}`)
        }
    }
} else if (process.argv[2] == 'list:completed') {
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < task.length; i++) {
        if (process.argv[3] == "asc" && task[i].complete == true) {
            console.log(`${i + 1}. ${task[i].complete ? '[x]' : '[ ]'} ${task[i].title}`)
        }
    }
    for (let i = task.length - 1; i >= 0; i--) {
        if (process.argv[3] == "desc" && task[i].complete == true) {
            console.log(`${i + 1}. ${task[i].complete ? '[x]' : '[ ]'} ${task[i].title}`)
        }
    }
} else if (process.argv[2] == 'tag') {
    console.log(`Tag '${process.argv.slice(4)}' telah ditambahkan ke daftar '${task[process.argv[3] - 1].title}'`)
    for (let i = 4; i < process.argv.length; i++) {
        task[process.argv[3] - 1].tags.push(process.argv[i])
        writeFileSync('data.json', JSON.stringify(task, null, 2), 'utf-8',)
    }
} else if (process.argv[2].startsWith('filter:')) {
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < task.length; i++) {
        if (task[i].tags.includes(`${(process.argv[2].slice(7))}`) == true) {
            console.log(`${i + 1}. ${task[i].complete ? '[x]' : '[ ]'} ${task[i].title}`)
        }

    }
}