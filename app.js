'use strict'

const { getImage, flipImage } = require('./images')
const fs = require('fs').promises

const app = async () => {
    const image = await getImage('https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf')
    const flipped_image = await flipImage(image)
    await fs.writeFile('./image/flipped_image.jpeg', flipped_image)
}

app()

