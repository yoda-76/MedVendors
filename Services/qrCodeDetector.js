import jsQR from 'jsqr';
import jpeg from  'jpeg-js';
export default async function qrCodeDetector(image){
  const decodeImage = Buffer.from(image, 'base64');
  const rawImageData = jpeg.decode(decodeImage);
  const clampedArray = new Uint8ClampedArray(rawImageData.data.length);
  for (let i = 0; i < rawImageData.data.length; i++) {
      clampedArray[i] = rawImageData.data[i];
  }
  return jsQR(clampedArray, 640, 480);
}