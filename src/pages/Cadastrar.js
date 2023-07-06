import React from 'react'
import MyForm from '../components/MyForm.js';

const services = [
    { value: 'service1', label: 'Service 1' },
    { value: 'service2', label: 'Service 2' },
    { value: 'service3', label: 'Service 3' },
  ];
const inputs = [
    { type: 'text', name: 'nome', label: 'Nome' },
    { type: 'text', name: 'cidade', label: 'Cidade' },
    { type: 'select', name: 'servico', label: 'Serviço', options: services },
    { type: 'textarea', name: 'escrevaAqui', label: 'Escreva Aqui' },
  ];

export default function Cadastrar() {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3>Preencha os campos abaixo para cadastrar uma oferta de serviço.</h3></div>
    <MyForm inputs={inputs} />
    </div>
  );
}


// what to do here:
// Colocar os seguintes inputs:
// Nome, email, cidade, preencher os Servicos, telefone