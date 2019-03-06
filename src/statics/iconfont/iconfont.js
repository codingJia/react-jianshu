import { createGlobalStyle } from 'styled-components'

export const IconGlobalStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1551879693167'); /* IE9 */
    src: url('iconfont.eot?t=1551879693167#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUMAAsAAAAACYAAAATAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqGSIU1ATYCJAMQCwoABCAFhG0HPBsbCBHVozmRfY0xkaF3JaFet6ACMyWuUEta0CN8d8a8D1QKv4IEAAAAAIiH7/f7/dr3HOxCMgmJeZFqFr2RSGaJ5tmnExqhEgpRPNqXkDH+53bfb4ZaEo08KqXR8qisY1qq2NacAzZil5EtyZ7vPPqHPJXzGU2ca/UVibunaJCIoN3jcK8bv0YCPkFhJNYPv6tejWu8Wy1Afx3Y3DmexW9+sYfEDIKmYu5/APxx7/SP8gKbz7Jc1lxU51EXYDS2BjbGpiWUFrAUc8PY5UXuJ0CppSJGkzklUEvThwWItUF7I9QmdHQFOVBpC+ZmEGdQhcV89JaJU+/z8VcRBBRMAn3sVDe1BQZf1i9hkvh/bMFBgD+cBWwRJFBBhlgqtC0CKYhVJL7cOZuiFkkYqsX3S9j//0iwFRmNvzwIioSoBl3WgIi98QSfVotJwKePVyRHoU6B8Ty4FjQSTSAmAbH79gUtbFZTSeAZvbkypbU0Q4Wj9WQZ9XRm9gmZfkRkHl9zGdbETx96Ms49peIvRaQfkQKsjFvC7uZUFjk77GBR0XgSN4EysHMlfQecXl4+HaNjSg9tg/3tuOkiiPTy6T1WyP1pinf53gT7u9oO3dPCPkvo1jyFnB6gmE9zCMJvZV3xNUXxmwm4YspwhMHbkW40RyIL3sSCfca8nMY4jhfPiH24SsHoLStIcjq18qQ7nhCbtxPgytzwbCqbRgyDJOMoZMWR2NKcgXmwLIOBC6jgldTTp7mJaF7CELbiLpcUxlwUjrmlcanbtT/ap6X+/FYileV5kqNW7nRP51eSdtxKKmZf7qdHBhsLGhgdHQg22a44KDa+q9XMMFr89d2VvDZ+NG9q1yBSe5NW3BhgjV8JPt3UfWfK/Q7/f54Mg/mlaFKzM+6p9Hd/HLkc8EdMor/fs6xTU8vJDkd9qsuN3FQRv2uXb509XKfqqXfKi10ZeY3TAlKzlTc63r3sYtXqi+WuafqBXaobdVRB0wWmqGxil58jo3Mr83g51sQQjzqtC96gHuJuUCnnyaUKUScqJEqh4TwwKxpxO0Eb/x1gIjZnyHDie21p0ADXgSFpQOKjkIKWE6HNXpv9kGx5wpCGDTKg8ui+MS2bjJ6SwAOp8yn8NREmwaVg0+UtZbnuQGXVeIfX6c4bi9O/7/gfzHv75xXVls7aNWSzaVX6EvdzK3fv8fqVsgKVziccv66fWp2OyZyCLQB+pQfJz/OebpOUKPXBBb9XP3zaR23qdTG/iD/eoqfVh4c9vzI0k/tH+I35PxO/YU5WhLo+Z0lk8VRH9n9XQwpQ8sEvlKLRxxCKlsbpBCpGUHCakFAbzcQxVAlMoBrNoDQysbhe3g6QiKwC6HECQMi4ASnlDUrGHaqJ72CU/AcrEwp8c9BszUA3VL9DKBg1yD941XfGNPLOz7yhfTeC4kKP8kKKPgh5kqWTV+yQhpgQP7ZgNmCob6ECh2HT9DBQH1Bx4piHMk1N0ZMS1beTHYSCUYP8g1d9Z5zCvMu8/4b23QiqyCqzvpCibx/yJGuAXmVdo6xL6Rw/tmA2eJChvoUKWrAxYj0Mxb0CKk5ch8hQpiifaSpLple0d7gKSvo1OYpIkaPKdlGQcrOLRT74yQQ=') format('woff2'),
    url('iconfont.woff?t=1551879693167') format('woff'),
    url('iconfont.ttf?t=1551879693167') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1551879693167#iconfont') format('svg'); /* iOS 4.1- */
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

  .iconAa:before {
    content: "\e636";
  }

  .iconbiji:before {
    content: "\e62d";
  }
`
