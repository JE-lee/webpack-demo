import _ from 'lodash'
export function pick(obj){
  const keys = ['name', 'id', 'label']
  return _.pick(obj, keys)
  

}