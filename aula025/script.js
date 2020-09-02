function returnsTime(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    // É executado quando não há erros
    const date = new Date();
    const displayHours = returnsTime(date);
    console.log(displayHours);
} catch(err) {
    // É executado quando há erros
    // tratamento de Erro
} finally {
    // Sempre é executado
    console.log('Tenha um bom dia!');
}
