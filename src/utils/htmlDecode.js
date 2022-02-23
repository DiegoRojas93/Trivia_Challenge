export const htmlDecode = ( data ) => {
  let parser = new DOMParser().parseFromString( data , 'text/html')
  return parser.documentElement.textContent;
}