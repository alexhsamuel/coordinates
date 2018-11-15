import Vue from 'vue'
import Vuex from 'vuex'

import { searchEvents } from '@/api'
import { date, formatDate } from '@/date'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    statuses: [],
    users: [],
    events: [],
    date: null,
  },

  _updateDate() {
    this.setTime()
    // Update every second, on the second.
    window.setTimeout(() => this._tick(), 1000 - this.state.time % 1000) 
  },

  mutations: {
    setDate(state, date) {
      console.log('setDate', date)
      state.date = date
    },

    setStatuses(state, statuses) {
      state.statuses = statuses
    },

    setUsers(state, users) {
      state.users = users
    },

    addEvent(state, event) {
      state.events.push(event)
    },

    refreshEvents(state, events) {
      state.events = events
    }

  },

  actions: {

  },

})

function rollDate() {
  const now = new Date()
  const today = date(now)
  store.commit('setDate', formatDate(today))
  const timeToMidnight = 86400000 - (now - today)
  console.log('timeToMidnight', timeToMidnight)
  window.setTimeout(rollDate, timeToMidnight)
}

rollDate()

searchEvents().then(events => { 
  store.commit('refreshEvents', events)
})

export default store
