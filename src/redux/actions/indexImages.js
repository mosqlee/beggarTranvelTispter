
export function getIndexImages() {
    return {
        promise: client => client.get('/api/indexSrc')
    }
}