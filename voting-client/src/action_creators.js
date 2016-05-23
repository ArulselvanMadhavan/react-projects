export function setState(state){
    return {
        type:'SET_STATE',
        state:state
    }
}

export function vote(entry){
    return {
        meta: {remote: true},
        type:'VOTE',
        entry:entry
    }
}

export function next() {
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
}
