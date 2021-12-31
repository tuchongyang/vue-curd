module.exports ={
    css: {
        postcss: {
          plugins: [
              {
                postcssPlugin: 'internal:charset-removal',
                AtRule: {
                  charset: (atRule) => {
                    if (atRule.name === 'charset') {
                      atRule.remove();
                    }
                  }
                }
              }
          ],
        },
    }
    
}