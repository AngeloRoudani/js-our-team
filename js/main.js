/* 1  creo un array con all'interno gli oggetti contenenti le informazioni
      delle persone del team
   2  stampo a console le informazioni di ogni membro del team
   3  modifico il codice affinchè le info vengano stampate nel DOM     



/*Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg*/

const ourTeam = [
    {
        'name': 'Wayne Barnett',
        'position': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'position': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'position': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'position': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'position': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'position': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    }
];


const memberListDom = document.getElementById('member_list');

for (let i = 0; i < ourTeam.length;i++) {
    
    const teamElement = ourTeam[i];
    const memberCard = document.createElement('div');
    memberCard.classList.add('member_card');

    for (let key in teamElement) {
        memberCard.append(key + ':' + teamElement[key]);
    
    }

    memberListDom.append(memberCard);
}

