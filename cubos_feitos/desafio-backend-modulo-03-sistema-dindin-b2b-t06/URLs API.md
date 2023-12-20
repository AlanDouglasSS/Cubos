Cadastro de Usuário:
    • Método: POST
    • URL: http://localhost:3000/usuarios
    • Corpo (JSON):
      json
    • {
        "nome": "Nome do Usuário",
        "email": "usuario@email.com",
        "senha": "senha123"
      }

• Login de Usuário:
    • Método: POST
    • URL: http://localhost:3000/usuarios/login
    • Corpo (JSON):
      json
    • {
        "email": "usuario@email.com",
        "senha": "senha123"
      }

• Listar Categorias:
    • Método: GET
    • URL: http://localhost:3000/categorias
    • Listar Transações:
    • Método: GET
    • URL: http://localhost:3000/transacoes
    • Cadastrar Categoria:
    • Método: POST
    • URL: http://localhost:3000/categorias
    • Corpo (JSON):
      json
    • {
        "nome": "Nome da Categoria"
      }

• Cadastrar Transação:
    • Método: POST
    • URL: http://localhost:3000/transacoes
    • Corpo (JSON):
      json
    • {
        "descricao": "Descrição da Transação",
        "valor": 100.00,
        "categoria": "Nome da Categoria"
      }
      
• Detalhar Transação:
    • Método: GET
    • URL: http://localhost:3000/transacoes/:id (substitua :id pelo ID da transação desejada)
