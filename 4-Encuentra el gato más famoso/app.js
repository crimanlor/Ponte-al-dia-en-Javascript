function findFamousCat(cats){
    let famousCats = {
        catsNames: [],
        maxNumOfFollowers: 0
    }
    cats.forEach((cat) => {
        const totalFollowers = cat.followers.reduce((acum, currentVal) => acum + currentVal, 0)
        if (totalFollowers === famousCats.maxNumOfFollowers){
            famousCats.catsNames.push(cat.name)
        }
        if (totalFollowers > famousCats.maxNumOfFollowers){
            famousCats.catsNames = [cat.name]
            famousCats.maxNumOfFollowers = totalFollowers
        }
    })
    return famousCats.catsNames
}

findFamousCat(cats)