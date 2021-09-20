'use strict'

const { getImage, flipImage } = require('./images')
const fs = require('fs')

const app = async () => {
    const image = await getImage('https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf')
    const flipped_image = flipImage(image)
    let stream = fs.createWriteStream('./image/flipped_image.jpeg')
    stream.write(await flipped_image, 'utf-8')
    stream.end()
}

app()

