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

const getNextId = () => {
  const lastId = teams.reduce((acc, team) => {
    return team.id > acc ? team.id : acc
  }, 0)

  return lastId + 1
}

const saveNewTeam = (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response
      .status(400)
      .send('The following fields are required: location, mascot, abbreviation, conference, division')
  }

  const newTeam = {
    location, mascot, abbreviation, conference, division, id: getNextId()
  }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
