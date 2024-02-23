# App

GymPass style app.

## Rfs (Requisitos funcionais)
- [X] Deve ser possível se cadastrar
- [X] Deve ser possível se autenticar
- [X] Deve ser possível obter o perfil de um usuário logado
- [X] Deve ser possível obter o numero de check ins realizados pelo usuário logado
- [X] Deve ser possível o usuário obter seu histórico de check ins
- [X] Deve ser possível o usuário buscar academias próximas (ate 10km)
- [X] Deve ser possível o usuário buscar academias pelo nome
- [X] Deve ser possível o usuário realizar check in em uma academia
- [] Deve ser possível validar o check in de um usuário.  
- [X] Deve ser possível cadastrar uma academia.

## RNs (Regra de negocio)
- [X] O usuário nao deve poder se cadastrar com um email duplicado
- [X] O usuário nao deve poder fazer 2 check in no mesmo dia
- [X] O usuário nao deve poder fazer check in se nao estiver perto (100m) da academia
- [] O checkin so pode ser validado ate 20 minutos apos criado
- [] O check in so pode ser validado por admins
- [] A academia so pode ser cadastrada por admins

## RNFs (Requisitos nao funcionais)
- [X] A senha do usuário precisa estar criptografada
- [X] Os dados da aplicação precisam estar persistidos em um banco Postgres
- [X] Todas as listas de dados precisam estar paginadas com 20 items por pagina
- [] O usuário deve ser identificado por um JWT
