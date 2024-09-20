SELECT c.id AS codigo, c.razao_social, t.numero AS telefone
FROM CLIENTE c
JOIN ESTADO e ON c.estado_id = e.id
LEFT JOIN TELEFONE t ON c.id = t.cliente_id
WHERE e.sigla = 'SP'
ORDER BY c.razao_social, t.numero;