import { createGlobalStyle } from 'styled-components'

export const IconGlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1553610461063'); /* IE9 */
  src: url('iconfont.eot?t=1553610461063#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVMAAsAAAAAChQAAAT/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHOIYVATYCJAMUCwwABCAFhG0HQxucCBHVo7uRfTFgN8q3gqhgSdvgzKJXR8vlR89Ki6TMzNzB8/1+v1/7yOVyHiZeRSueGCJJLEHyjCe8iU4Xy7+ZRNOqP7Srf9WirYFbCoMV2Xxoav0JnaQrT1yc88BG5cKM5NzZD349SArjNCc3OA04T7DEM015xgPg4Jjp0jewPJvNJasoGnA04IFlfmMk6GOA/INx1DB2YQInQwBHGiVIS2yyHHAMyjQBZKimqgTwkAqTgxd8qZey1oAsg8VXM+g9YMl+fflMleCAwmpQ5nYMxpRD+Dvrr53Y8P8Z6DcRwG7PAFCbQAMlgAGZSDUNgbmhEjROeD8tGgAcPgr1Ludz6ee6r53//4PIm5HEqey5fOBpFIgHiigEYhuEZuXYOhUC71xYaWJfSIWGDxkqFEbbyQ6IAakFZA5gUx5HoTCExHCEQhyXkgKBBOfxDMQoYmHUo6RezitfrJA/G1U8f/dSaNTsSOuLMdXLlcGjjsqfreiSn3/O42cZIlcgL5+9Rl70KUHS8PNO1YUX7NMBvlNy5EQdmZPLmBKL+tklZ0k14IS45OgHMqJSjRB0sOLYLpg5JNVXBWng0QcMka0v27nXnxxh5qTy2KMUmNmQ8lmWQpaf1BEEzSAIu1NjQ7IUxW6Xwvq6kkQ2pB1NZkszMmSEVWuAmXWJiiYYhg1dQGZgvYWgd8zLZCPUwlk7Ui3dvlsKrMeojm3KYWk7CPU8CmEYGUFLNkCvKBUEcFBeC9TwD2HnJPINUpO5fdbRGyRzs6dsY5mIoGqKlyNxY3dKYzQsK2Oohb12ceyCzJRZoIIPpXz8mDd3ejZ3dDR7aXSL7xmYX1shFnZkfflC4ldRH2JKq7gIV1XK45e4qJLF8Pua88qtLQKdOnZsCg0fUp4Vfl7rz5vzeVGbfy/U/r/UrwSXKuMe20c/ruD9L728qA1NU6CRpTWhL83vTLZf93dDtCNcmxyUNdwCMik88OOAqv2ugfQ3c78pDfZaBdRb/2pyfGrJsHtMEn4n8e0ras7jXHX7hgXN+/TuBFPppVfwObyUUL2JaL203bJLRZTqzp203OS1hdPK2aKHT+to6c7x53QxfLb4MihV0ms6y+P/HbASktwqPPOdVht1t2lu1XKPeBamixt0+5Q5bndFhKrwVq7GU4iiJw918jRR6DkMLqXQRZdY9lfPWqdvu36w0mDTkZzcrmrH8zV3tr785az/WVOHpzMLFOP7Wo23Lcatsbu0eerddPGNfApFrc5YfNnfZHg+OKEXsgHgP4090a7A///6kiYjp7FGLP3JfBsuxrDNRfzgXyC1AOD5pdcru+T/sBboGeDxElOa/RyyS7YYkauoreHLdRZvsTxcY5ESehzw9NmieNuOJLZ0Jgg+sT4ogkgFjU8O0mBLwBKgBjx86sFRTPvmANFMgCFGD6CIRQBCBOegCOMGNBE8QhrsG7DE8RU8IgQDR5+I9wyQJ7A5XBgLwRrKP5hq6EnTysHJTlC924KDXJvwRHbGC6EXRKMP7JHbWOA+KhIhIB46uIPTYdsOMPJgsRJPi4yx71PaDXnV0M0OswtjIVhD+QdTDT2Z3eUQe/kE1bstOKeiQPtEdqZ/CL2gBPIh6ktVHMtg91GRCOFJxEMHd2jAVg0NMKaPsliJp2sExthHnaisyOtf0h1j9k9QVbkGO1eixYgVj43Dgiu9cqPpF6diVRprZjMA') format('woff2'),
  url('iconfont.woff?t=1553610461063') format('woff'),
  url('iconfont.ttf?t=1553610461063') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1553610461063#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconsearch:before {
  content: "\e624";
}

.iconspin:before {
  content: "\e851";
}

.iconAa:before {
  content: "\e636";
}

.iconbiji:before {
  content: "\e62d";
}
`
