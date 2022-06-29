from cliente import Cliente

cliente = Cliente(nome="Maycon")
cliente.cadastrar_endereco(cidade="Imbituba", estado="SC")
cliente.cadastrar_endereco(cidade="Floripa", estado="SC")
cliente.listar_enderecos()