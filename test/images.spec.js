const { getImage, flipImage } = require('../images')
const fs = require('fs').promises

jest.setTimeout(15000)

describe('test', () => {

    let local_image = null
    let local_flipped_image = fs.readFile('./test/flipped_image.jpeg')
    let image = null
    let flipped_image = null

    it('test getImage', async () => {
        image = await getImage('https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf')
        local_image = await fs.readFile('./test/image.jpeg')
        await expect(image).toEqual(local_image)
    })

    it('test flipImage', async () => {
        flipped_image = await flipImage(image)
        await fs.writeFile('./test/result.jpeg', flipped_image)
        const result = await fs.readFile('./test/result.jpeg')
        await expect(result).toEqual(await local_flipped_image)
    })

})
