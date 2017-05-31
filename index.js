const postcss = require('postcss')

module.exports = postcss.plugin('checkbox-pseudos', ({
    BOX_PSEUDO = 'input-box',
    MARK_PSEUDO = 'input-mark'
  } = {}) => {

  return (root) => root.walkRules(rule => {
    if(
      rule.selector.indexOf('::'+MARK_PSEUDO) === -1 &&
      rule.selector.indexOf('::'+BOX_PSEUDO)  === -1
    ) { return }

    const selectors = rule.selector.split(',')
      .map(selector => selector.trim())
      .map(selector =>
        selector.replace(RegExp('::'+BOX_PSEUDO+'$'), ':not(checked) + label::before')
                .replace(RegExp('::'+MARK_PSEUDO+'$'), ':not(checked) + label::after')
      )

    rule.selector = selectors.join(', ')
  })

})
