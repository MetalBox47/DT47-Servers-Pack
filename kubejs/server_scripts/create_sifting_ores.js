ServerEvents.recipes(event => {

    function sift(tag, tiers) {
        // tiers = { string:x, andesite:x, zinc:x, brass:x, adv:x, steel:x, netherite:x, draconic:x }

        if (tiers.string)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.string)], 'minecraft:gravel', 'createsifter:string_mesh');

        if (tiers.andesite)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.andesite)], 'minecraft:gravel', 'createsifter:andesite_mesh');

        if (tiers.zinc)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.zinc)], 'minecraft:gravel', 'createsifter:zinc_mesh');

        if (tiers.brass)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.brass)], 'minecraft:gravel', 'createsifter:brass_mesh');

        if (tiers.adv)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.adv)], 'minecraft:gravel', 'createsifter:advanced_brass_mesh');

        if (tiers.steel)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.steel)], 'minecraft:gravel', 'kubejs:steel_mesh');

        if (tiers.netherite)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.netherite)], 'minecraft:gravel', 'kubejs:netherite_mesh');

        if (tiers.draconic)
            event.recipes.createsifter.sifting([Output.of(tag, tiers.draconic)], 'minecraft:gravel', 'kubejs:draconic_mesh');
    }

    // -----------------------------
    // EARLY GAME (String → Andesite)
    // -----------------------------
    sift("#forge:raw_materials/iron",     { string:0.05, andesite:0.10, zinc:0.15 });
    sift("#forge:raw_materials/copper",   { string:0.05, andesite:0.10, zinc:0.15 });
    sift("#forge:raw_materials/gold",     { andesite:0.08, zinc:0.12 });

    sift("#forge:raw_materials/tin",      { string:0.05, andesite:0.10, zinc:0.15 });
    sift("#forge:raw_materials/lead",     { andesite:0.08, zinc:0.12 });
    sift("#forge:raw_materials/silver",   { andesite:0.07, zinc:0.10 });
    sift("#forge:raw_materials/nickel",   { andesite:0.06, zinc:0.09 });
    sift("#forge:raw_materials/aluminum", { string:0.05, andesite:0.10, zinc:0.15 });
    sift("#forge:raw_materials/zinc",     { string:0.05, andesite:0.10, zinc:0.15 });

    // Gems
    sift("#forge:gems/ruby",      { andesite:0.05, zinc:0.08 });
    sift("#forge:gems/sapphire",  { andesite:0.05, zinc:0.08 });
    sift("#forge:gems/topaz",     { andesite:0.05, zinc:0.08 });
    sift("#forge:gems/amethyst",  { andesite:0.06, zinc:0.10 });
    sift("#forge:gems/fluorite",  { andesite:0.07, zinc:0.12 });

    // -----------------------------
    // MID GAME (Zinc → Brass)
    // Diamond-tier ores
    // -----------------------------
    sift("#forge:raw_materials/osmium",   { zinc:0.08, brass:0.12 });
    sift("#forge:raw_materials/platinum", { zinc:0.07, brass:0.10 });
    sift("#forge:raw_materials/titanium", { zinc:0.06, brass:0.09 });
    sift("#forge:raw_materials/tungsten", { zinc:0.05, brass:0.08 });

    // -----------------------------
    // LATE MID GAME (Brass → Advanced Brass)
    // Nether-tier ores
    // -----------------------------
    sift("#forge:raw_materials/uranium",  { brass:0.08, adv:0.12 });
    sift("#forge:raw_materials/cobalt",   { brass:0.07, adv:0.10 });

    // Twilight Forest
    sift("#forge:ingots/fiery",           { brass:0.06, adv:0.10 });
    sift("#forge:ingots/knightmetal",     { brass:0.06, adv:0.10 });

    // -----------------------------
    // LATE GAME (Advanced Brass → Steel)
    // End-tier, magic-tier
    // -----------------------------
    sift("#forge:dusts/starmetal",        { adv:0.05, steel:0.08 });
    sift("#forge:crystals/starlight",     { adv:0.06, steel:0.10 });

    sift("#forge:gems/zanite",            { brass:0.08, adv:0.12, steel:0.15 });
    sift("#forge:gems/ambrosium",         { brass:0.10, adv:0.15, steel:0.18 });

    // -----------------------------
    // ENDGAME (Steel → Netherite)
    // -----------------------------
    sift("#forge:dusts/draconium",        { steel:0.05, netherite:0.08 });
    sift("#forge:raw_materials/orinium",  { steel:0.04, netherite:0.06 });
    sift("#forge:raw_materials/aetherite",{ steel:0.05, netherite:0.07 });

    // -----------------------------
    // ULTRA-LATE GAME (Netherite → Draconic)
    // -----------------------------
    sift("#forge:crystals/honey",         { netherite:0.10, draconic:0.15 });
    sift("#forge:dusts/draconium_awakened",{ draconic:0.05 });

});
