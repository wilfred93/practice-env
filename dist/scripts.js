const config = {
    type: 'carousel',
    perView: 6,
    gap:24,
    breakpoints: {
      1280: {
        perView: 5,
        peek: {
          before: 0,
          after: 0
        }
      },
      1024: {
        perView: 4,
        gap:18,
        peek: {
          before: 0,
          after: 0
        }
      },
      768: {
        perView: 3,
        peek: {
          before: 0,
          after: 0
        }
      },
      640: {
        perView: 2,
        gap:8,
        peek: {
          before: 0,
          after: 80
        }
      }
    }

  }
new Glide('.glide', config).mount()