const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const { id } = request.params

  const matchingTeams = teams.find((team) => team.id === parseInt(id))

  return matchingTeams
    ? response.send(matchingTeams)
    : response.sendStatus(404)
}

module.exports = { getAllTeams, getTeamById }
