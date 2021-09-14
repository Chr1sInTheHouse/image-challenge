const { default: axios } = require('axios')
const sharp = require('sharp')

const getImage = async (url) => {
    const res = await axios.get(url, { responseType: 'arraybuffer' })
    const image = Buffer.from(res.data, 'utf-8')
    return image
}

const flipImage = async (image) => {
    const flipped_image = await sharp(image)
    .flip()
    .flop()
    .toBuffer()
    return flipped_image
}

module.exports = { getImage, flipImage }