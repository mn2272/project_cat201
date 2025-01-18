import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'

import logo from './logo.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_icon,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight",
        price: 100,
        image: [p_img1],
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S","M","L"],
        date: 1254789563,
        bestseller: true
    },
    {
        {
            _id: "aaaaa",
            name: "Women Round Neck Cotton Top",
            description: "A lightweight",
            price: 100,
            image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
            category: "Women",
            subcategory: "Topwear",
            sizes: ["S","M","L"],
            date: 1254789563,
            bestseller: true
        }
    }

]
