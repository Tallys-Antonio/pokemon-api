
async function getAbilities(abilities) {
    if (!abilities) {
      return []
    }
    const abilitie = await Promise.all(
      abilities.map(async (item) => {
        const url = item.ability.url
        const response = await fetch(url)
        return await response.json()
      })
    )
    const abilidadesData = abilitie.map((item) => {
      return item?.effect_entries
    })
    const dataEffect = abilidadesData.map((item) => {
      return item.filter((item) => item.language.name ==='en')
    })
    return dataEffect.map((item) => {
      return item[0].effect
    })
}

export default getAbilities