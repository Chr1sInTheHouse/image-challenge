# Image Processing Code Challenge


Stream an image from a url to your computer and flip it along the Y and X axis.

## Usage


```bash
# To install the packages
npm install

# To run the test script
npm run test

# To run the app
npm run start
```

The final result will be store in the image folder.

## Proposed Solution


### Architecture

- app.js : Main file to run this app.
- image.js : Util file. Containing 2 function (getImage and flipImage).
- image(folder) : Destination for the result image.
- test(folder) : Containing files for test.

### Package used

This app is developed in node.js. Following packages are used in this work:

- axios : Http client to stream the image.
- jest : Test framework.
- sharp : Image processing package for flip the image.

### Functions

- **getImage(url : string) :**

    Stream an image from an url.

    Return type:  Promise<Buffer>

    ```jsx
    const image = await getImage('https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf')
    ```

- **flipImage(image : Buffer) :**

    Flip an image along the Y and X axis.

    Return type: Promise<Buffer>

    ```jsx
    const flipped_image = await flipImage(image)
    ```
