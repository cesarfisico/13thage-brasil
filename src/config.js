const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);

export default [
    {
        name: 'enableCompendiumTranslation',
        data: {
            name: 'Traduzir Compêndio',
            hint: 'Requer o módulo Babele. Se alterado, o Foundry será recarregado.',
            scope: 'client',
            type: Boolean,
            config: true,
            default: true,
            onChange: debouncedReload
        }
    }
];