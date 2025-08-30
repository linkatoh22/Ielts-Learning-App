const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const serviceAccount = require("../service-account.json")
const path = require("path");

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: path.join(__dirname, "../service-account.json"),
});

const PROPERTY_ID = process.env.PROPERTYID;

async function getLeadsStats() {

    const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [{ name: "eventName" }, { name: "date" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        stringFilter: { value: "lead", matchType: "EXACT" },
        fieldName: "eventName",
      },
    },
  });

  return response.rows.map((row) => ({
    date: row.dimensionValues[1].value,
    count: row.metricValues[0].value,
  }));
}

async function getTrafficStats() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
    metrics: [
      { name: "activeUsers" },
      { name: "sessions" },
      { name: "screenPageViews" },
    ],
    dimensions: [{ name: "date" }],
  });

  return response.rows.map((row) => ({
    date: row.dimensionValues[0].value,
    activeUsers: row.metricValues[0].value,
    sessions: row.metricValues[1].value,
    pageViews: row.metricValues[2].value,
  }));
}

module.exports = { getLeadsStats, getTrafficStats };
