import { Tag } from '~/api/product/interfaces/Product'

export default function getTagClassByName(name: Tag) {
    const nameToClassMap = {
        [Tag.NOVELTY]: 'novelty',
        [Tag.HIT]: 'hit',
        [Tag.BUYERS_CHOICE]: 'buyers-choice',
    }
    return nameToClassMap[name] || 'novelty'
}
