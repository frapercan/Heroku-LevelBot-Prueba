// External Dependancies
const mongoose = require('mongoose')

const empresaSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    permalink: {
        type: 'String'
    },
    crunchbase_url: {
        type: 'String'
    },
    homepage_url: {
        type: 'String'
    },
    blog_url: {
        type: 'String'
    },
    blog_feed_url: {
        type: 'String'
    },
    twitter_username: {
        type: 'String'
    },
    category_code: {
        type: 'String'
    },
    number_of_employees: {
        type: 'Number'
    },
    founded_year: {
        type: 'Number'
    },
    founded_month: {
        type: 'Number'
    },
    founded_day: {
        type: 'Number'
    },
    deadpooled_year: {
        type: 'Number'
    },
    tag_list: {
        type: 'String'
    },
    alias_list: {
        type: 'String'
    },
    email_address: {
        type: 'String'
    },
    phone_number: {
        type: 'String'
    },
    description: {
        type: 'String'
    },
    created_at: {
        $date: {
            type: 'Number'
        }
    },
    updated_at: {
        type: 'Date'
    },
    overview: {
        type: 'String'
    },
    image: {
        available_sizes: {
            type: [
                'Array'
            ]
        }
    },
    products: [{
        name: { type: 'String', required: true
    },
        permalink: { type: 'String'}
    }],
    relationships: {
        type: [
            'Mixed'
        ],
        required: true
    },
    competitions: {
        type: [
            'Mixed'
        ]
    },
    providerships: {
        type: 'Array'
    },
    total_money_raised: {
        type: 'String'
    },
    funding_rounds: {
        type: [
            'Mixed'
        ]
    },
    investments: {
        type: 'Array'
    },
    acquisition: {
        price_amount: {
            type: 'Number'
        },
        price_currency_code: {
            type: 'String'
        },
        term_code: {
            type: 'String'
        },
        source_url: {
            type: 'String'
        },
        source_description: {
            type: 'String'
        },
        acquired_year: {
            type: 'Number'
        },
        acquired_month: {
            type: 'Number'
        },
        acquired_day: {
            type: 'Number'
        },
        acquiring_company: {
            name: {
                type: 'String'
            },
            permalink: {
                type: 'String'
            }
        }
    },
    acquisitions: {
        type: 'Array'
    },
    offices: {
        type: [
            'Mixed'
        ]
    },
    milestones: {
        type: [
            'Mixed'
        ]
    },
    video_embeds: {
        type: 'Array'
    },
    screenshots: {
        type: [
            'Mixed'
        ]
    },
    external_links: {
        type: [
            'Mixed'
        ]
    },
    partners: {
        type: 'Array'
    }
},)

module.exports = mongoose.model('Empresa', empresaSchema)


