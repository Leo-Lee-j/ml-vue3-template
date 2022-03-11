import { App } from 'vue'

const filterHtml = (value:string) => {
  if (value) {
    return value.replace(/<[^>]+>/g, '')
  }
}

const registerFilters = (app: App<Element>) => {
  app.config.globalProperties.$filters = {
    filterHtml
  }
}

export default registerFilters
