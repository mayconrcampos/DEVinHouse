from empresa import Empresa


empresa = Empresa("WEG S.A")

empresa.adicionar_funcionario(nome="Zé Canarinho")
empresa.adicionar_funcionario(nome="Mauro Mauricio")
empresa.adicionar_funcionario(nome="Guido Mantega")
empresa.adicionar_funcionario(nome="Faustão")
empresa.adicionar_funcionario(nome="Zezé di Camargo e Luciano")
empresa.adicionar_funcionario(nome="Xitãozinho e Xororó")

empresa.listar_funcionarios()
