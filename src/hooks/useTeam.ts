import { useState, useEffect } from 'react'
import { teamService } from '../services/teamService'
import { TeamMember } from '../types'

export const useTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTeamMembers = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await teamService.getAllTeamMembers()
      setTeamMembers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch team members')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeamMembers()
  }, [])

  return {
    teamMembers,
    loading,
    error,
    refetch: fetchTeamMembers
  }
}
