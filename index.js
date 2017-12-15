'use strict'

const got = require('got')

const isString = require('lodash.isstring')
const isDate = require('lodash.isdate')
const moment = require('moment')

const transformEntry = (e) => ({
    site: e.project,
    page: e.article,
    date: moment.utc(e.timestamp, 'YYYYMMDD00').toDate(),
    views: e.views
})

const views = async (page, site, start, end) => {
    if(!isString(page) || page.length === 0) throw new Error('`page` must be a string with length > 0')
    if(!isString(site) || site.length === 0) throw new Error('`site` must be a string with length > 0')
    if(!isDate(start)) throw new Error('`start` must be a date object')
    if(+start > +new Date()) throw new Error('`start` must be in the past')
    if(!isDate(end)) throw new Error('`end` must be a date object')
    if(+end > +new Date()) throw new Error('`end` must be in the past')

    const startDate = moment.utc(start).format('YYYYMMDD00')
    const endDate = moment.utc(end).format('YYYYMMDD00')

    const data = await got.get(`https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/${site}/all-access/all-agents/${page}/daily/${startDate}/${endDate}`, {json: true}).then((res) => res.body)

    return data.items.map(transformEntry)
}

module.exports = views
