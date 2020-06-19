import { isString } from '@/helpers/typeChecker'

const NO_IMAGE_PATH = '/img/no-image.jpg'

export default function (imgPath, defaultPath = NO_IMAGE_PATH) {
  if (isString(imgPath)) {
    const HTMLElementImg = new Image()
    HTMLElementImg.src = imgPath
    HTMLElementImg.style.display = 'none'
    document.body.appendChild(HTMLElementImg)

    return new Promise((resolve) => {
      HTMLElementImg.onload = function () {
        resolve(this.src)
        document.body.removeChild(HTMLElementImg)
      }
      HTMLElementImg.onerror = function () {
        resolve(defaultPath)
        document.body.removeChild(HTMLElementImg)
      }
    })
  }

  return Promise.resolve(defaultPath)
}
