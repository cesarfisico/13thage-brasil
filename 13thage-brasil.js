import ModConfig from './src/config.js';
import * as Util from './src/util.js';

const module_id = '13thage-brasil';
const module_lang = 'pt-br';

Hooks.once('ready', () => {
    // Create settings
    ModConfig.forEach((cfg) => {
        // Skip settings not applicable for this system version
        if ('onlyUntilSystemVersionIncluding' in cfg &&
            isNewerVersion(game.system.data.version,
                cfg.onlyUntilSystemVersionIncluding)) {
            return;
        } else {
            game.settings.register(module_id, cfg.name, cfg.data);
        }
    });

    if (game.i18n.lang !== 'pt-br' || !CONFIG.ARCHMAGE) {
      return;
    }

    Util.setAllIfExist(CONFIG.ARCHMAGE.powerSources, {
         'class': 'Classe',
        'race': 'Raça',
        'item': 'Item',
        'other': 'Outro'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.powerTypes, {
        'power': 'Poder',
        'feature': 'Característica',
        'talent': 'Talento',
        'flexible': 'Ataque Flexível',
        'spell': 'Magia',
        'other': 'Outro'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.powerUsages, {
        'at-will': 'À Vontade',
        'once-per-battle': 'Por Batalha',
        'recharge': 'Recarga',
        'daily': 'Diário',
        'other': 'Outro'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.equipUsages, {
        'daily': 'Diário',
        'recharge': 'Recarga',
        'once-per-battle': 'Por Batalha',
        'other': 'Outro'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.actionTypes, {
        'standard': 'Padrão',
        'move': 'Movimento',
        'quick': 'Rápida',
        'free': 'Livre',
        'interrupt': 'Interrupção'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.actionTypesShort, {
        'standard': 'PAD',
        'move': 'MOV',
        'quick': 'RAP',
        'free': 'LIV',
        'interrupt': 'INT'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.creatureTypes, {
        'aberration': 'Aberração',
        'beast': 'Besta',
        'celestial': 'Celestial',
        'construct': 'Constructo',
        'demon': 'Demônio',
        'devil': 'Diabo',
        'dragon': 'Dragão',
        'elemental': 'Elemental',
        'fey': 'Feerico',
        'giant': 'Gigante',
        'humanoid': 'Humanoide',
        'monstrosity': 'Monstruoso',
        'ooze': 'Limo',
        'plant': 'Planta',
        'spirit': 'Espírito',
        'undead': 'Morto-Vivo'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.creatureSizes, {
        'normal': 'Normal',
        'large': 'Grande',
        'huge': 'Imenso',
        'double': 'Força Dobrada',
        'triple': 'Força Triplicada',
        'weakling': 'Fraca',
        'elite': 'Elite'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.creatureRoles, {
        'archer': 'Arqueiro',
        'blocker': 'Bloqueador',
        'caster': 'Conjurador',
        'leader': 'Líder',
        'mook': 'Capanga',
        'spoiler': 'Sabotador',
        'troop': 'Soldado',
        'wrecker': 'Destruidor'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.raceList, {
        'darkelf': "Elfo Negro",
        'dragonspawn': "Draconato",
        'dragonic': "Dracônico",
        'dwarf': "Anão",
        'dwarfforged': "Forjanato",
        'forgeborn': "Forjado",
        'gnome': "Gnomo",
        'halfelf': "Meio-Elfo",
        'halforc': "Meio-Orc",
        'halfling': "Halfling",
        'highelf': "Alto Elfo",
        'holyone': "Sagrado",
        'aasimar': "Aasimar",
        'human': "Humano",
        'tiefling': "Tiefling",
        'demontouched': "Profanado",
        'woodelf': "Elfo da Floresta"
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.classList, {
        'barbarian': 'Bárbaro',
        'bard': 'Bardo',
        'cleric': 'Clérigo',
        'fighter': 'Guerreiro',
        'paladin': 'Paladino',
        'ranger': 'Ranger',
        'rogue': 'Ladino',
        'sorcerer': 'Feiticeiro',
        'wizard': 'Mago',
        'chaosmage': 'Mago do Caos',
        'commander': 'Comandante',
        'druid': 'Druída',
        'monk': 'Monge',
        'necromancer': 'Necromante',
        'occultist': 'Ocultista'
    });

    // Register Babele compendium translations if module is present
    if (typeof Babele !== 'undefined' &&
        game.settings.get(module_id, 'enableCompendiumTranslation')) {
        Babele.get().register({
            module: module_id,
            lang: module_lang,
            dir: 'compendium'
        });
    }

});
