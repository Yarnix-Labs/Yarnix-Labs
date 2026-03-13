import { useState, useEffect } from 'react'
import { contactService } from '../services/contactService'
import { ContactInfo } from '../types'

export const useContact = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchContactInfo = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await contactService.getAllContactInfo()
      setContactInfo(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch contact information')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContactInfo()
  }, [])

  return {
    contactInfo,
    loading,
    error,
    refetch: fetchContactInfo
  }
}
