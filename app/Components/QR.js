import React from 'react';
import { useQRCode } from 'next-qrcode';

function QR(props) {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={JSON.stringify(props.data) || "test"}
      options={{
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF',
        },
      }}
    />
  );
}

export default QR;