import { login, BoasVindas } from "./login"

describe('login', () => {
    const mockBoasVindas = jest.fn()
    jest.mock('./login', () => ({
        ...jest.requireActual('./login'),
        BoasVindas: mockBoasVindas,
    }));

    it("deve chamar a função BoasVindas", () => {
        login()
        expect(mockBoasVindas).toHaveBeenCalled()
    })
})

describe("BoasVindas", () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        BoasVindas()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})