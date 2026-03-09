// ! this file has the function that parses the vue string source into sapaarate html and css strings
const parseVueSource = (source) => {
  // Extract template
  const templateMatch = source.match(/<template[^>]*>([\s\S]*?)<\/template>/)

  const template = templateMatch ? templateMatch[1].trim() : ''

  // Extract ALL style blocks (scoped or not)
  const styleMatches = [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)]

  const styles = styleMatches.map((match) => match[1].trim()).join('\n\n')

  return {
    template,
    styles,
  }
}

export default parseVueSource
