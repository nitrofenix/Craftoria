ClientEvents.lang('en_us', e => {
  /** @type {Object.<Special.LangKey, string>} */
  let langEntries = {
    'lef_tier.extended_industrialization.modern_industrialization.superconductor_coil': 'Superconductor',
    'rei_categories.modern_industrialization.electric_blast_furnace_superconductor_coil': 'EBF (Superconductor Tier)',
    'ebf_tier.modern_industrialization.superconductor_coil': 'Superconductor',
    'pyro_tier.industrialization_overdrive.modern_industrialization.superconductor_coil': 'Superconductor',

    'block.modern_industrialization.replicator': 'Replicator Mk II',
    'machine_casing.modern_industrialization.sky_stone_brick_casing': 'Sky Stone Brick Casing',

    // Renaming IF gears
    'item.industrialforegoing.iron_gear': 'Crude Iron Gear',
    'item.industrialforegoing.gold_gear': 'Crude Gold Gear',
    'item.industrialforegoing.diamond_gear': 'Crude Diamond Gear',

    // Gateways
    'craftoria.endless/boss': 'Endless Boss Gateway',
    'craftoria.bomd': 'Trials of Awaken',

    // Guidebooks
    'craftoria.guide_name': 'Craftoria Guidebook',

    // Lang fixes
    'chemical.mekanism_extras.radiance': 'Radiance',
    'chemical.mekanism_extras.thermonuclear': 'Thermonuclear',
    'chemical.mekanism_extras.shining': 'Shining',
    'chemical.mekanism_extras.spectrum': 'Spectrum',

    // Keybinds
    'category.craftoria.building': 'Building',
    'category.craftoria.tools': 'Tools',
    'category.craftoria.guides': 'Guides',
    'category.craftoria.ftb': 'FTB',
    'key.excavein.excavein.modifier.none': '[Modifier] None',
    'key.excavein.excavein.modifier.side': '[Modifier] Side',
    'key.excavein.excavein.modifier.surface': '[Modifier] Surface',
    'key.excavein.excavein.shape.diagonal_tunnel': '[Shape] Diagonal Tunnel',
    'key.excavein.excavein.shape.excavate': '[Shape] Excavate',
    'key.excavein.excavein.shape.large_tunnel': '[Shape] Large Tunnel',
    'key.excavein.excavein.shape.selection': '[Shape] Selection',
    'key.excavein.excavein.shape.tunnel': '[Shape] Tunnel',
    'key.excavein.excavein.shape.vein': '[Shape] Vein',
    'key.excavein.modifier_scroll': 'Modifier Scroll',
    'key.excavein.next_modifier': 'Next Modifier',
    'key.excavein.next_shape': 'Next Shape',
    'key.excavein.prev_modifier': 'Previous Modifier',
    'key.excavein.prev_shape': 'Previous Shape',
    'key.excavein.selection_activation': 'Activate',
    'key.theurgy.category': 'Theurgy',
    'keybind.advancedperipherals.description': '[Adv Peripherals] Show Description',
    'key.ars_nouveau.open_documentation': '[Ars] Open Documentation',
    'key.guideme.guide': '[GuideMe] Open Guide for Items',
    'key.trashslot.delete': '[TrashSlot] Delete Item',
    'key.trashslot.delete_all': '[TrashSlot] Delete All Items of Type',
    'key.trashslot.toggle': '[TrashSlot] Show/Hide Slot',
    'key.trashslot.toggle_lock': '[TrashSlot] Lock Slot',
    'key.lighty.enable': '[Lighty] Open Light Overlay Menu',
    'key.lighty.toggle': '[Lighty] Toggle Light Overlay',
    'key.ars_nouveau.head_curio_hotkey': '[Ars] Head Curio Menu',
    'key.extendedae.viewpattern': '[ExAE] View Pattern',
    'justdirethings.key.toggle_tool': '[JDT] Toggle Tool Abilities',
    'justdirethings.key.toolUI': '[JDT] Open Tool Settings',
    'mininggadgets.text.open_gui': '[Mining Gadgets] Open Gadget Settings',
  };

  // Adding custom MI machines to lang entries
  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    let langKey = `${machine.mod ?? 'modern_industrialization'}.${id}`;
    if (machine.lang) {
      for (let [key, value] of Object.entries(machine.lang)) {
        langEntries[`${key}.${langKey}`] = value;
      }
    } else {
      langEntries[`block.${langKey}`] = machine.name;
      langEntries[`rei_categories.${langKey}`] = machine.name;
    }
  }

  for (let [id, hatch] of Object.entries(global.customMIHatches)) {
    let { name, types } = hatch;
    let key = `block.modern_industrialization.${id}`;

    Object.keys(types).forEach(type => {
      ['input', 'output'].forEach(io => {
        let langKey = `${key}_${type}_${io}_hatch`;
        langEntries[langKey] = toMcCase(`${name} ${type} ${io} Hatch`);
      });
    });
  }

  for (const [k, v] of Object.entries(langEntries)) {
    /** @type {Array<string>} */
    let langParts = k.split('.');
    let mod = langParts.find(part => global.modList.contains(part));
    // console.log(`${mod} ${k} -> ${v}`);
    e.add(mod, k, v);
  }

  // Special cases
  e.add('chattoggle', 'Toggle', 'Toggle Team Chat');
  e.add('mcjtylib', 'key.openManual', '[RFTools] Open Manual');
});
