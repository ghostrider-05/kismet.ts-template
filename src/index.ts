import { KismetFile } from '@kismet.ts/core'
import { Items } from '@kismet.ts/items'

// Create a new project reference. The name will be used in future releases
const project = new KismetFile({ projectName: 'template' })

const addBall = new Items.Actions.AddGameBall()
    .setPosition({ x: 200, y: 0 })
    .setComment('Hello world!')

const onStart = new Items.Events.LevelLoaded()
    .on('Loaded and Visible', {
        name: 'Add',
        item: addBall
    })

project.mainSequence.addItems([addBall, onStart])

console.log(project.toString())