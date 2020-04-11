const models = require('../models')

const getAllTeams = async (request, response) => {
  try {
    const teams = await models.Teams.findAll()

    return response.send(teams)
  } catch (error) {
    return response.status(500).send('Unable to retrieve team list, please try again')
  }
}

const getTeamById = async (request, response) => {
  try {
    const { id } = request.params

    const matchingTeam = await models.Teams.findOne({ where: { id } })

    return matchingTeam
      ? response.send(matchingTeam)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve team, please try again')
  }
}

const saveNewTeam = async (request, response) => {
  try {
    const {
      location, mascot, abbreviation, conference, division
    } = request.body

    if (!location || !mascot || !abbreviation || !conference || !division) {
      return response
        .status(400)
        .send('The following fields are required: location, mascot, abbreviation, conference, division')
    }

    const newTeam = await models.Teams.create({
      location, mascot, abbreviation, conference, division
    })

    return response.status(201).send(newTeam)
  } catch (error) {
    return response.status(500).send('Unable to save team, please try again')
  }
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
