function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther']

    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us, ${hero}`);
            }
        }
        inner();

    }

    cryForHelp();
}


bankRobbery();