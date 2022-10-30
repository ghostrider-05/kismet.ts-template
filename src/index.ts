import { KismetFile } from '@kismet.ts/core'
import { Actions, Events } from '@kismet.ts/items'

// Create a new project reference. The name will be used in future releases
const project = new KismetFile({ projectName: 'template' })

const addBall = new Actions.AddGameBall()
    .setPosition({ x: 200, y: 0 })
    .setComment({ comment: 'Hello world!' })

// If you want to fix the 'Outdated version' warning, add this for all actions / conditions
// Issue tracking: https://github.com/ghostrider-05/kismet.ts/issues/13
// addBall.rawData.ObjInstanceVersion = 1
// or after adding all items:
// project.mainSequence.items.forEach(item => item.isSequenceActionNode() ? item.rawData.ObjInstanceVersion = 1 : null)

const onStart = new Events.LevelLoaded()
    .on('Loaded and Visible', {
        name: 'Add',
        item: addBall
    })

project.mainSequence.addItems([addBall, onStart])

console.log(project.toString())