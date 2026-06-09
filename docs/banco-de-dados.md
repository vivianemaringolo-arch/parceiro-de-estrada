# Banco de Dados - Parceiro da Estrada

## CLIENTE
- id
- nome
- telefone
- whatsapp
- endereco
- observacoes

## SERVICO
- id
- cliente_id
- data
- hora
- origem
- destino
- valor
- status

## AJUDANTE
- id
- nome
- telefone
- observacoes

## AJUDANTE_SERVICO
- id
- servico_id
- ajudante_id
- valor_pago (definido no serviço)

## CAMINHAO
- id
- placa
- modelo
- ano
- quilometragem

## MANUTENCAO
- id
- caminhao_id
- tipo
- data
- quilometragem
- valor

## ABASTECIMENTO
- id
- caminhao_id
- data
- litros
- valor
- quilometragem