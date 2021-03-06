// models/campaign.js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES    = require('./campaign-types');

const CampaignSchema = new Schema({
  title         : { type: String, required: true },
  description   : { type: String, required: true },
  category      : { type: String, enum: TYPES, required: true },
  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  goal          : { type: Number, required: true },
  backerCount   : { type: Number, default: 0 },
  totalPledged  : { type: Number, default: 0 },
  deadline      : { type: Date, required: true },
});

// models/campaign.js
CampaignSchema.virtual('timeRemaining').get(function () {
  let remaining = moment(this.deadline).fromNow(true).split(' ');
  let [days, unit] = remaining;
  return { days, unit };
});

// models/campaign.js

// other code
CampaignSchema.virtual('inputFormattedDate').get(function(){
  return moment(this.deadline).format('YYYY-MM-DD');
});

/* Do not write */

// campaign.inputFormattedDate
// 2017-01-31
// other code

// fromNow(true) prints the date without a suffix.

// moment(yesterday).fromNow()
// => 1 day ago

// moment(yesterday).fromNow(true)
// => 1 day

module.exports = mongoose.model('Campaign', CampaignSchema);
