const profiles = [
    {
        name: 'Mikhail Richies',
        country: 'United Kingdom',
        profile: 'Mikhail Richies are UK leaders in environmental and socially inclusive design across multiple sectors – including Housing, Education, Mixed-Use, Masterplanning, Leisure & Retrofit. Their combined expertise & experience sets them apart – and means they design buildings beautifully with sustainability as their DNA. They have 21 years of experience pushing the boundaries of sustainable architecture with particular expertise in environmental design that optimises natural assets to improve a building’s performance. Everyone at Mikhail Riches has the ability to shape and understand projects. All of the team are committed to developing their skills to deliver excellent sustainable design. They are aligned to a shared vision; to have a positive impact on the world and move the agenda forward through the quality of the work they deliver. Their culture is one of mutual respect, enthusiasm, rigor and kindness.',
        website: 'https://www.mikhailriches.com/'
    },
    {
        name: 'shedkm',
        country: 'United Kingdom',
        profile: 'Shedkm are not your average architects. They may appear relatively normal to look at – forget the clichés of black polo neck shirts and square-rimmed glasses – but the brains behind their ordinary exteriors are a different matter altogether. Since they set up in 1997 they’ve built a reputation for designing buildings with a strong and unique identity, from private housing developments to complex regeneration projects. Their innovation and creativity have been applauded all over the world, earning them numerous awards not just for looking pretty but making a positive impact on the world. We’ve worked with them since the day they set up, and in that time we’ve developed a healthy respect and intuitive understanding of each other’s strengths and processes.',
        website: 'https://www.shedkm.co.uk/'
    },
    {
        name: 'Proctor & Matthews',
        country: 'United Kingdom',
        profile: 'Proctor & Matthews describe themselves as architects, masterplanners, urban designers, place makers, problem solvers, researchers, artists and visualisers. They have over 30 years experience with an international portfolio that stretches across a broad range of sectors. PMA have an array of awards including RIBA’s Architect of the Year for their work at Abode, Great Kneighton – a development that intrigued and impressed us and fuelled our desire to bring the sophisticated architectural thinking and passionate attention to detail to our own team. Their approach is underpinned by an overarching commitment to imaginative design that responds to the specific cultural and social contexts in which they are working. They design places that are adaptable to change in order to create sustainable environments with both present and future needs in mind.',
        website: 'https://www.hawkinsbrown.com/'
    },
    {
        name: 'MaccreanorLavington',
        country: 'United Kingdom',
        profile: 'MaccreanorLavington’s work is the result of rigorous observation and investigation of each projects physical and cultural context. We make architecture that is both contemporary and timeless. Our interest in creating ‘ordinary’ places for living and working is expressed at different scales; from the careful design of public spaces to an inventive yet pragmatic use of materials and detailing. Sustainability is integrated within our work through sensible and value-focused principles. We actively develop close working relationships with clients and other design professionals to produce buildings and places of exceptional quality. Maccreanor Lavington was established in London and Rotterdam in the early nineties by Gerard Maccreanor and Richard Lavington. Our diverse portfolio ranges from individual buildings to large scale urban design. We have particular expertise in housing, public buildings and the regeneration of town centres and former industrial zones. The office has received numerous awards including the prestigious RIBA Stirling Prize (2008), Private Housing Architect of the Year (2008) and Masterplanner of the Year (2009).',
        website: 'https://www.maccreanorlavington.com/website/en/index.html'
    },
    {
        name: 'Civic Engineers',
        country: 'United Kingdom',
        profile: 'We are engineers with a passion and expertise in the design and delivery of high quality award winning buildings, structures and public spaces. We who care about people and the environments they occupy. We provide expertise to help developers and architects bring their plans to life – whether it is converting historic buildings, designing new buildings or creating new public spaces. We also work with artists to help realise their creative ambitions often complex installations.',
        website: 'https://civicengineers.com/'
    },
    {
        name: 'Studio Egret West',
        country: 'United Kingdom',
        profile: 'Studio Egret West was established in November 2004 by Christophe Egret and David West with a shared vision: To offer strategy with architectural specificity; and specificity within an overall strategy. Studio Egret West brings surprise and delight to place making. Architecture is too often seen in isolation from its urban context. Planning is too often seen as soulless, unspecific proposals that gather dust on shelves. We believe that the way forward is the osmosis between planning and architecture. Studio Egret West is just this.',
        website: 'https://egretwest.com/'
    },
    {
        name: 'Nick Moss Architects',
        country: 'United Kingdom',
        profile: 'Nick Moss Architects (previously known as Sixtwo Architects), is a Manchester architectural and urban design practice with a national reputation for design quality and client focused service. Set up in 2012, the practice has received many awards in this time, including the prestigious RIBA Emerging Practice award. With a progressive and responsive architectural approach, excellence comes as standard as they continue their passion for making brilliant homes and workspaces.',
        website: 'https://nickmossarchitects.com/'
    },
    {
        name: 'stephenson STUDIO',
        country: 'United Kingdom',
        profile: 'Established in 1979 by Roger Stephenson OBE, Stephenson Studio is an architectural and urban design practice born in Manchester. They have a long track record of creating inspiring buildings and spaces, and have spent the last 38 years designing the urban renaissance of the North West. Urban Splash first collaborated with Stephenson Studio (then Stephenson Bell) 25 years ago, with Smithfield Building, just around the corner in Manchesters hip Northern Quarter. Their philosophy and architectural ethos has resulted in the practice winning more than 150 national awards for architecture, and they have extensive experience of working with buildings of historical significance, like Avro. Smithfield Building served as the catalyst for the regeneration of this area, and helped to inspire a loft living revolution across the North West of England. Since that time, Stephenson Studio have completed many of Manchesters most significant buildings, including Hallé, St. Peters in Ancoats, the Free Trade Hall Hotel and Chethams School of Music, which was short-listed for the Stirling Prize.',
        website: 'http://www.stephenson-studio.com/'
    },
    {
        name: 'Hawkins\Brown',
        country: 'United Kingdom',
        profile: 'Hawkins\Brown asks questions, listens carefully and then thinks hard before putting pen to paper. Our broad experience of building has given us the skills, knowledge and drive to design and manage complex schemes like Park Hill in Sheffield, Corby Civic Hub and the design and construction of the New Biochemistry building for Oxford University. We are Hawkins\Brown: architects\ designers\ masterplanners\ researchers\ space planners\ interior designers\ collaborators\ makers\ negotiators\ artists\ visualisers\ problem solvers...',
        website: 'https://www.hawkinsbrown.com/'
    },
    {
        name: 'Foster + Partners',
        country: 'United Kingdom',
        profile: 'Foster + Partners architecture is driven by the pursuit of quality, a belief that our surroundings directly influence the quality of our lives, whether in the work place, at home or the public spaces in between. It is not just buildings but urban design that affects our well-being.',
        website: 'https://www.fosterandpartners.com/'
    },
    {
        name: 'Glenn Howells Architects',
        country: 'United Kingdom',
        profile: 'Glenn Howells Architects are an award-winning design studio with national and international reach. Underpinning the practice is an approach rooted in the constant exploration of ideas about how buildings and cities are made, built, and how they can improve the lives of individuals and communities. The Practice has secured a reputation for delivering high quality buildings across all sectors and masterplans which have transformed large parts of UK’s biggest cities. The Practice is currently working on Port Loop in Birmingham and has previously worked with Urban Splash on Timber Wharf and Burton Place in Manchester and Rotunda in Birmingham – a project which gave the design team the opportunity to give the next lease of life to a building that has defined Birmingham for the last 50 years.',
        website: 'https://glennhowells.co.uk/'
    },
    {
        name: 'Grant Associates',
        country: 'United Kingdom',
        profile: 'Grant Associates is a Landscape Architecture consultancy specialising in the creative design of both urban and rural environments. Established in 1997 the Practice has built up a reputation for innovative, ecologically based design and the ability to shape useful and sustainable landscapes with distinctive contemporary character. We’re inspired by the creative possibilities of sustainable landscapes and driven by the desire to connect people and nature.',
        website: 'https://grant-associates.uk.com/'
    },
    {
        name: 'Union North',
        country: 'United Kingdom',
        profile: 'Union North is a restless, creative and humanistic practice. We are not defined by a single issue or even several issues. Our concerns are; better housing, greater access and affordability; better public and cultural space, greater access and quality; better building design, greater sustainability, quality and creativity.'
    },
    {
        name: 'SimpsonHaugh',
        country: 'United Kingdom',
        profile: 'SimpsonHaugh is a practice that has established a design approach that generates creative solutions across a range of projects. Our passion for responsible, uplifting and beautiful design has informed our approach since 1987, when Rachel Haugh and Ian Simpson were united by a shared belief that innovative architectural thought has the power to shape and transform our cities. Reinforcing these guiding principles across a portfolio of work ranging from masterplans to interiors, we apply a creative and bespoke approach to every opportunity. Collaborating with our aspirational clients, communities and design teams, we harness their passion, knowledge and expertise to evolve powerful and pragmatic solutions. Remaining acutely aware of the impact of our decisions, we embrace the opportunity to show everyone that high quality design brings added value.',
        website: 'https://www.simpsonhaugh.com/'
    },
    {
        name: 'Studio Maurice Shapero',
        country: 'United Kingdom',
        profile: 'Studio Maurice Shapero began in Manchester in 2003. The principal and founder, Maurice Shapero, studied at the Royal College of Art (1993) in London and the Glasgow School of Art (1990). He set up Studio Maurice Shapero after many years of designing and overseeing the construction of high profile projects, working for David Chipperfield, Michael Wilford and Stephen Hodder. The practice tends to attract creative clients who have a strong desire to build something exceptional. Maurices work is published globally by magazines such as The Architects Journal, Dezeen and Building Design.',
        website: 'https://www.mauriceshapero.com/index.html'
    },
    {
        name: 'FAT',
        country: 'United Kingdom',
        profile: 'FAT is an architecture studio with an international reputation for delivering outstanding and award winning projects at a range of scales and for many different uses, specialising in architecture, cities and design. The studio is directed by three of Britains leading architectural and design figures: Sean Griffiths, Charles Holland and Sam Jacob, each of whom are committed to developing architectural culture both through practice and through design research at institutions including Yale and the Architectural Association. The directors are closely involved in the design of all projects which are managed by a project architect or leader in close contact with the client.',
        website: 'http://www.fashionarchitecturetaste.com/'
    },
    {
        name: 'David Morley Architects',
        country: 'United Kingdom',
        profile: 'David Morley Architects work on a wide range of projects, including sports and leisure facilities, health and research buildings, offices, residential and educational buildings as well as masterplanning. Our approach is contemporary and without over-elaboration; buildings are economical to construct, efficient to run and enjoyed by their users.'
    },
    {
        name: 'Ben Kelly Design',
        country: 'United Kingdom',
        profile: 'Ben Kelly Design was founded in the mid-1970s by principal Ben Kelly. BKD built their reputation producing high-profile and innovative spaces. BKD strive to retain the best features of any given site, while employing a comprehensive palette of materials, textures, finishes and colours. BKD are experienced in working at various scales for clients with a wide range of needs.'
    },
    {
        name: 'Will Alsop',
        country: 'United Kingdom',
        profile: 'Will Alsop is a prominent architect and artist who established aLL Design in 2011. Known for his bold, visionary architectural style, he has been awarded the RIBA Stirling Prize for Peckham Library, London and the first RIBA World Award for The Sharp Centre for Design (OCAD), Toronto, amongst numerous other prestigious accolades for a multitude of projects. Will has specialised in large-scale master plans and regeneration projects, including the master plan for New Islington in Manchester.',
        website: 'https://all.design/'
    },
    {
        name: 'dMFK',
        country: 'United Kingdom',
        profile: 'We are a 40 under 40 Award Winning architects set up in 1998 by Julian de Metz, Paul Forbes, and Ben Knight. Working across a range of sectors, our expertise is working with and around existing buildings, including many listed buildings. We provide a project specific architecture of the highest quality and treat every scheme as a new challenge.'
    },
    {
        name: 'Ferguson Mann Architects',
        country: 'United Kingdom',
        profile: 'Ferguson Mann Architects has a national reputation for award winning architecture, urban design and conservation. We have a proven track record in combining these areas of expertise to deliver regeneration projects ranging from individual buildings to major urban areas. Achieving a comprehensive understanding of our client’s values and aspirations is fundamental to our approach. Underpinning all our work is the need to respond to context and to produce solutions that are environmentally, socially and economically sustainable. Through close collaboration, we create and conserve distinctive buildings and places.',
        website: 'https://www.fm-architects.co.uk/'
    },
    {
        name: 'Gillespie Yunnie Architects',
        country: 'United Kingdom',
        profile: 'Gillespie Yunnie Architects are the South Wests leading specialists in the contemporary re-use and creative adaptation of existing, historic and listed buildings. It brings fresh thinking, energy and innovation. It has a pragmatic desire to create exciting, inspirational spaces no matter what the size of the project or budget.',
        website: 'https://www.gyarchitects.co.uk/'
    }
];

export default profiles;
