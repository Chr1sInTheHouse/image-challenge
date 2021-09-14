const { getImage, flipImage } = require('../images')
const sharp = require('sharp')
const fs = require('fs').promises

jest.mock('sharp', () => {
    const result = {
        toBuffer: jest.fn().mockReturnThis(),
        toFile: jest.fn().mockReturnThis(),
        flip: jest.fn().mockReturnThis(),
        flop: jest.fn().mockReturnThis(),
    }
    return jest.fn(() => result)
})

describe('test', () => {

    let local_image = null
    let local_flipped_image = sharp('./flipped_image.jpeg').toBuffer()
    let image = null
    let flipped_image = null

    it('test getImage', async () => {
        image = await getImage('https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf')
        local_image = await fs.readFile('./test/image.jpeg')
        await expect(image.equals(local_image)).toBe(true)
    })

    it('test flipImage', async () => {
        flipped_image = await flipImage(image)
        await expect(flipped_image).toEqual(local_flipped_image)
    })

    it('test final result', async () => {
        await sharp(flipped_image).toFile('./image/flipped_image.jpeg')
        let result = await sharp('./image/flipped_image.jpeg').toBuffer()
        await expect(result).toEqual(local_flipped_image)
    })
})
