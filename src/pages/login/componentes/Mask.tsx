export function cpf(e: { currentTarget: { maxLength: number; value: any } }) {
    e.currentTarget.maxLength = 14
    let value = e.currentTarget.value
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1-$2")
        e.currentTarget.value = value
    }
    return e
}

export function dataDeNascimento(e: { currentTarget: { maxLength: number; value: any } }) {
    e.currentTarget.maxLength = 10
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
    e.currentTarget.value = value

    return e
}
