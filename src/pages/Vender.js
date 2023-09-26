import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/MyButton.js';
import SendIconComponent from '@mui/icons-material/Send'
import axios from 'axios';
import MyInput from '../components/MyInput.js'
import Container from '@mui/material/Container'
import StyledText from '../components/StyledText'

const modelos = [
  { value: 'X', label: "iPhone X" },
  { value: '11', label: "iPhone 11" },
  { value: '12', label: "iPhone 12" },
  { value: '13', label: "iPhone 13" },
  { value: '14', label: "iPhone 14" },
  { value: '15', label: "iPhone 15" }
];
const memoria = [
  { value: '64', label: '64 Gb' },
  { value: '128', label: '128 Gb' },
  { value: '256', label: '256 Gb' },
  { value: '512', label: '512 Gb' }
];
const estadoUso = [
  { value: 'Excelente', label: 'Excelente' },
  { value: 'Muito Bom', label: 'Muito Bom' },
  { value: 'Bom', label: 'Bom' },
  { value: 'Regular', label: 'Regular' }
];
const opcao = [
  { value: true, label: 'Sim' },
  { value: false, label: 'Não' },
];
const inputs = [
  { type: 'select', name: 'modelo', label: 'Modelo', options: modelos },
  { type: 'select', name: 'memoria', label: 'Memória', options: memoria },
  { type: 'number', name: 'saude', label: 'Saúde da bateria' },
  { type: 'select', name: 'estado_uso', label: 'Estado de Uso', options: estadoUso },
  { type: 'select', name: 'cabo', label: 'Cabo', options: opcao },
  { type: 'select', name: 'cabo_original', label: 'Cabo original', options: opcao },
  { type: 'select', name: 'carregador', label: 'Carregador', options: opcao },
  { type: 'select', name: 'carregador_original', label: 'Carregador original', options: opcao },
  { type: 'select', name: 'fone', label: 'Fone', options: opcao },
  { type: 'number', name: 'capinha', label: 'Capinhas' },
  { type: 'number', name: 'preco', label: 'Preço' }
];
const cep = { type: 'text', name: 'cep', label: 'CEP' };

const buttonProps = {
  text: 'Enviar',
  icon: <SendIconComponent />,
  iconRotation: -45,
  textBefore: true,
};

export default function Cadastrar() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = async (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (name === 'cep' && value.length === 8) {
      var url = 'http://viacep.com.br/ws/' + value + '/json/';
      try {
        const response = await axios.get(url);
        if (response.data.erro) {
          window.alert("CEP inexistente!")
          setFormData((prevData) => ({
            ...prevData,
            [name]: '',
          }));
        } else {
          const { localidade, uf } = response.data;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            cidade: localidade,
            estado: uf,
          }));
        }
      } catch (error) {
        console.error('An error occurred while making the request:', error);
      }
    }
  };

  const handleSubmit = async (form) => {
    const formData = new FormData()
    formData.append('modelo', form.modelo);
    formData.append('memoria', form.memoria);
    formData.append('saude', form.saude);
    formData.append('estado_uso', form.estado_uso);
    formData.append('cabo', form.cabo);
    formData.append('cabo_original', form.cabo_original);
    formData.append('carregador', form.carregador);
    formData.append('carregador_original', form.carregador_original);
    formData.append('fone', form.fone);
    formData.append('capinha', form.capinha);
    formData.append('cep', form.cep);
    formData.append('cidade', form.cidade);
    formData.append('estado', form.estado);
    formData.append('preco', form.preco);

    const url = 'http://localhost:5000/produto';
    try {
      await axios.post(url, formData);
      window.alert('iPhone anunciado!')
      navigate('/');
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h3>Preencha os campos abaixo para colocar seu iPhone à venda.</h3></div>
      {inputs.map((input) => (
        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MyInput
            key={input.name}
            name={input.name}
            label={input.label}
            type={input.type}
            options={input.options}
            onChange={handleInputChange}
            value={formData[input.name] !== undefined ? formData[input.name] : ''}
          />
        </Container>
      ))}
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MyInput
          key={cep.name}
          name={cep.name}
          label={cep.label}
          type={cep.type}
          options={cep.options}
          onChange={handleInputChange}
          value={formData[cep.name] || ''}
        />
      </Container>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginBottom: '1rem' }}>
        {formData.cidade &&
          <StyledText key='cidade' label='Cidade' value={formData['cidade']} />}
      </Container>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginBottom: '1rem' }}>
        {formData.estado &&
          <StyledText key='estado' label='Estado' value={formData['estado']} />}
      </Container>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginBottom: '1rem' }}>
        <MyButton type="submit"
          text={buttonProps.text}
          icon={buttonProps.icon}
          iconRotation={buttonProps.iconRotation}
          textBefore={buttonProps.textBefore}
          onClick={() => handleSubmit(formData)} />
      </Container>
    </div>

  );
}