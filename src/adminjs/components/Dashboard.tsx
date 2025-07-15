import React, { useEffect, useState } from 'react'
import { Box, H2, H3, Text, Illustration } from '@adminjs/design-system'
import { ApiClient, useCurrentAdmin } from 'adminjs'

export default function Dashboard() {
  const [resources, setResources] = useState<{ [key: string]: number }>()
  const [currentAdmin] = useCurrentAdmin()
  const api = new ApiClient()

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    const res = await api.getDashboard()
    
    if (typeof res.data === "object" && res.data !== null) {
      setResources(res.data as { [key: string]: number })
    }
  }

  const getBackgroundColor = (label: string) => {
    if (label.includes("Pendente")) return "orange" 
    if (label.includes("Confirmado")) return "green" 
    if (label.includes("Cancelado")) return "red"  
    return "#fff"
  }

  const isStatusCard = (label: string) =>
    label.includes("Agendamentos Pendente") ||
    label.includes("Agendamentos Confirmado") ||
    label.includes("Agendamentos Cancelado")

  return (
    <section style={{ padding: '2rem' }}>
      <H2 style={{ textAlign: "center" }}>Bem-vindo(a), {currentAdmin?.firstName}</H2>
      <section style={ { backgroundColor: "#111350", padding: "2rem", borderRadius: "20px" } }>
        <H2 style={{ color: "#FFF" }} >Dashboard</H2>
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'stretch',
          justifyContent: 'center',
          marginTop: '2rem',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto', 
        }}>
          {
            resources && Object.entries(resources).map(([resource, count]) => (
              <Box
                key={resource} 
                variant="gray"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: isStatusCard(resource) ? "2px solid #FFF" : "2px solid #111350",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: getBackgroundColor(resource),
                  width: "250px"
                }}
              >
                <Text style={{ 
                  fontSize: "3rem", 
                  padding: "1rem", 
                  fontWeight: "bold", 
                  color: isStatusCard(resource) ? "#FFFFFF" : "#111350" 
                }}>
                  {count}
                </Text>
                <Text 
                  variant="md" 
                  style={{
                    color: isStatusCard(resource) ? "#FFFFFF" : "#111350",
                    fontWeight: "bold"
                  }}>
                    {resource}
                </Text>
              </Box>
            ))
          }
        </div>
      </section>
    </section>
  )
}