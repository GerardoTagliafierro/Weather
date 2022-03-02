export const parseBgAsIcon = (icon) => {
    switch (icon) {
        case "02d":
        case "02n":
        case "03d":
        case "04d":
        case "04d":
            return "url(https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)"
        case "01d":
        case "01n":
            return "url(https://images.unsplash.com/photo-1495511167051-13bb07bde85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
        case "13d":
            return "url(https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
        case "10d":
        case "13d":
        case "09d":
        case "11d":
            return "url(https://images.pexels.com/photos/1410224/pexels-photo-1410224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
        default:
            return "linear-gradient(to bottom right, #5374E7, #77B9F5)"
    }
}

export const parseGradientAsIcon = (icon) => {
    switch (icon) {
        case "02d":
        case "03d":
        case "04d":
        case "04d":
            return "linear-gradient(to bottom right, #464C64, #464C64)"
        case "01d":
        case "01n":
            return "linear-gradient(to bottom right, #5374E7, #77B9F5)"
        case "10d":
        case "13d":
        case "09d":
        case "11d":
            return "linear-gradient(to bottom right, #011354, #5B9FE3)"
        default:
            return "linear-gradient(to bottom right, #5374E7, #77B9F5)"
    }
}