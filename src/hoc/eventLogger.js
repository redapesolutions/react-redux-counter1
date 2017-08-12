import {withHandlers} from 'recompose'

export default (...propNames) => withHandlers(originalProps => {
    let loggingProps = {}
    propNames.forEach(name => {
      loggingProps[name] = _ => function() {
        console.log('Function being executed: %c%s', "font-weight: bold; color:orange;", name);
        console.log('With arguments', ...arguments)
        return originalProps[name](...arguments)
      }
    })
    return loggingProps
})
