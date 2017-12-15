'use strict'

const tape = require('tape')
const views = require('./index')

const moment = require('moment')
const isDate = require('lodash.isdate')

tape('wikimedia-page-views', async (t) => {
	const startDate = moment.utc().subtract(30, 'day').startOf('day').toDate()
	const endDate = moment.utc().subtract(10, 'day').startOf('day').toDate()
	const data = await views('Karl Marx', 'de.wikipedia', startDate, endDate)

	t.ok(data.length === 21, 'length')
	const day = data[0]
	t.ok(day.site === 'de.wikipedia', 'site')
	t.ok(day.page === 'Karl_Marx', 'page')
	t.ok(isDate(day.date) && +day.date === +startDate, 'date')
	t.ok(day.views > 0, 'views')
	t.end()
})
