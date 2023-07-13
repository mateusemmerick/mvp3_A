import React from 'react'
import MyForm from '../components/MyForm.js';
import SendIconComponent from '@mui/icons-material/Send'

const services = [
    { value: 'service1', label: 'Faxina' },
    { value: 'service2', label: 'Lavanderia' },
    { value: 'service3', label: 'Jardinagem' },
    { value: 'service4', label: 'Hidráulica' },
    { value: 'service5', label: 'Elétrica' },
    { value: 'service6', label: 'Alvenaria' },
    { value: 'service7', label: 'Marcenaria' },
  ];
  const inputs = [
    { type: 'text', name: 'nome', label: 'Nome' },
    { type: 'text', name: 'mail', label: 'Email' },    
    { type: 'text', name: 'cidade', label: 'Cidade' },    
    { type: 'text', name: 'phone', label: 'Telefone' },   
    { type: 'select', name: 'servico', label: 'Serviço', options: services },     
  ];

    const buttonProps = {
    text: 'Enviar',
    icon: <SendIconComponent />,
    iconRotation: -45,
    textBefore: true,
  };

export default function Cadastrar() {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3>Preencha os campos abaixo para cadastrar uma oferta de serviço.</h3></div>
    <MyForm inputs={inputs} buttonProps={buttonProps} />
    </div>
  );
}