import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import logoImg from '../../assets/github_explorer.svg'

export const Header = () => {
  return (
    <Container>
      <img src={logoImg} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
    </Container>
  )
}
