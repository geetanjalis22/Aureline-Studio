import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const articles = [
  {
    slug: "the-art-of-materiality",
    category: "Materials",
    date: "September 18, 2026",
    readTime: "5 min read",
    title: "The Art of Materiality",
    intro:
      "Texture, tactility and ageing are fundamental to how an interior is experienced. Materials do more than finish a space — they give it character.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90",
    body: [
  "A material is never simply a surface. Stone carries weight and permanence. Timber introduces warmth and variation. Fabric softens sound and creates intimacy. Plaster catches light differently throughout the day. The materials we choose influence not only how a room looks, but also how it feels to inhabit it.",

  "At Aureline Studio, material selection begins early in the design process. We consider how surfaces will feel, how they will age and how they will interact with the architecture around them. Rather than treating materials as a final decorative layer, we see them as an integral part of the architecture itself.",

  "The most successful interiors often use a restrained palette of materials rather than a long list of finishes. When each material has a clear purpose, the overall environment becomes quieter and more cohesive. A single stone can define a kitchen, a timber tone can bring continuity between rooms, and a carefully selected fabric can introduce softness without competing with the architecture.",

  "Natural materials are particularly important because they carry variation. No two pieces of stone are exactly alike. Timber changes in colour and character depending on its grain, age and exposure to light. These small differences prevent an interior from feeling overly manufactured and allow the space to develop its own identity.",

  "Light is another essential part of materiality. A polished stone surface may reflect morning light differently from the warm light of evening. Rough plaster can create subtle shadows across a wall as the sun moves through the room. Brushed metal can catch a narrow highlight, while matte surfaces absorb light and create a calmer atmosphere. Understanding these changes helps us select materials that continue to reveal something new throughout the day.",

  "Texture also plays an important role in creating balance. A room made entirely from smooth surfaces can feel cold or distant, while too many contrasting textures can make a space visually busy. We look for a relationship between rough and refined, soft and solid, warm and cool. These contrasts create depth while allowing the overall composition to remain restrained.",

  "The way a material ages matters just as much as how it looks when it is first installed. Stone can develop a patina through everyday use. Timber can become deeper and richer over time. Natural fabrics can soften with repeated use. These changes are not imperfections to be hidden; they can become part of the character of a home.",

  "For this reason, we often favour materials that can withstand everyday life without losing their visual integrity. Durability does not have to mean compromising on beauty. When selected thoughtfully, practical materials can become some of the most distinctive elements within an interior.",

  "Material samples are an important part of this process. A finish that appears perfect on a screen can feel completely different when placed next to another material and viewed under natural light. We study samples together, moving them through different spaces and observing their texture, colour and scale. This process allows relationships between materials to emerge before they become permanent decisions.",

  "Scale is equally important. A material can have a completely different presence depending on where and how it is used. A dramatic stone may work beautifully as a single kitchen island but become overwhelming when applied across every surface. Similarly, a delicate timber detail may have more impact when used selectively rather than repeated throughout an entire room.",

  "Craftsmanship brings these decisions together. The quality of a material can easily be lost through poor detailing, while careful execution can elevate even a relatively simple finish. Edges, joints, transitions and proportions all contribute to how a material is ultimately experienced. We pay particular attention to these moments because they are often where the character of a space becomes most visible.",

  "Materiality is also deeply connected to the everyday experience of a home. The coolness of stone under the hand, the texture of a linen curtain moving with the air, the warmth of timber beneath bare feet or the sound of a wooden door closing all contribute to a sense of place. These experiences may be subtle, but together they create an environment that feels considered and memorable.",

  "There is also a growing responsibility to think about where materials come from and how long they are expected to last. Choosing durable materials, working with local craftspeople where possible and avoiding unnecessary finishes can reduce waste while creating interiors with greater authenticity. Longevity becomes a design principle rather than an afterthought.",

  "Ultimately, materiality is about creating a relationship between architecture, people and time. The best material choices do not demand attention. They support the proportions of a room, respond to natural light and become more familiar as the space is lived in.",

  "At Aureline Studio, we believe that material richness does not come from abundance. It comes from choosing fewer elements and understanding them deeply. Stone, timber, fabric, metal and plaster each have their own language. When those languages are brought together with intention, an interior can feel calm, tactile and quietly expressive.",

  "A considered material palette gives a space more than visual character. It gives the interior a sense of permanence — an atmosphere that can evolve with its occupants while remaining connected to the architecture. This is where we believe the art of materiality truly begins."
],
  },
  {
    slug: "designing-with-natural-light",
    category: "Design Thinking",
    date: "September 08, 2026",
    readTime: "5 min read",
    title: "Designing With Natural Light",
    intro:
      "Light is one of the most powerful materials available to an interior designer. It changes atmosphere, proportion and perception throughout the day.",
    heroImage:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=90",
    body: [
  "The movement of daylight through a room can completely change its character. Morning light may emphasise texture while afternoon light creates longer shadows and deeper contrast. As the day progresses, the same interior can feel warm, expansive, intimate or contemplative without a single object being moved.",

  "Light is one of the first elements we consider when developing a space. Before selecting furniture or decorative details, we study the orientation of the building, the position of existing openings and the way sunlight enters throughout the day. These observations help establish a relationship between architecture and natural light from the beginning of the design process.",

  "Rather than treating lighting as something added at the end of a project, we consider it from the earliest stages of spatial planning. The position and proportion of windows can influence how a room is experienced, while ceiling heights, wall openings and circulation routes determine how far light can travel into an interior.",

  "Openings, ceiling heights, reflective surfaces and material choices all contribute to how light moves through a space. A carefully positioned opening can frame a view while bringing a controlled amount of daylight into a room. A larger opening may create a feeling of connection with the outdoors, while a smaller aperture can create a more focused and intimate experience.",

  "The quality of light matters as much as the quantity. A room flooded with direct sunlight is not necessarily more comfortable than one receiving softer, filtered light. Curtains, screens, blinds and architectural elements can help control intensity while maintaining a connection to the outdoors. We often look for ways to soften daylight rather than simply maximise it.",

  "Materials become particularly expressive under changing light. Natural stone can reveal subtle variations in colour and texture when sunlight moves across its surface. Timber can appear warmer in the evening, while plaster walls can develop delicate gradients of shadow throughout the day. Matte surfaces absorb light and create a quiet atmosphere, whereas reflective finishes can help distribute light into darker areas.",

  "This relationship between light and material is one of the reasons we prefer to study physical samples in the spaces where they will eventually be used. A material that appears neutral under artificial lighting can look completely different in direct sunlight. Observing these changes helps us make decisions that remain appropriate at different times of day.",

  "Shadows are equally important. They create depth, define edges and give architectural elements a sense of dimension. A deep window reveal may cast a changing shadow across a wall, while a textured surface can become almost sculptural when light moves across it. Rather than eliminating shadows, we use them as part of the composition.",

  "In residential interiors, natural light also has an important relationship with everyday routines. The quality of morning light in a bedroom can influence how the space feels at the beginning of the day. A dining area may become more intimate in the evening, while a reading corner can benefit from a softer afternoon glow. Designing with these moments in mind makes a space feel connected to the rhythm of daily life.",

  "Orientation can also influence how different rooms are positioned within a home. Spaces used primarily in the morning may benefit from eastern light, while living areas can be designed to respond to the warmer qualities of afternoon and evening light. These decisions are not rigid rules, but useful starting points for understanding how architecture can respond to its surroundings.",

  "Artificial lighting then becomes a supporting layer rather than a replacement for daylight. As natural light fades, carefully positioned sources can maintain the atmosphere established during the day. Wall lights, concealed lighting, pendants and low-level illumination can each create different moods without competing with the architecture.",

  "We are particularly interested in transitions between light and shadow. A successful interior rarely has the same level of brightness everywhere. Instead, variations create hierarchy and guide the eye through the space. Brighter areas can draw attention to important architectural features, while darker corners create moments of pause and intimacy.",

  "The experience of natural light is also closely connected to time. Unlike a static decorative element, daylight is constantly changing. Clouds alter its intensity, seasons change its angle and the movement of the sun transforms the atmosphere from one hour to the next. This unpredictability gives an interior a quality that cannot be fully replicated through artificial lighting.",

  "For us, designing with natural light is therefore less about creating bright interiors and more about creating responsive ones. We consider how light enters, where it rests, what it reveals and how it changes. The goal is not to control every aspect of the experience, but to create the conditions for light to become part of the architecture.",

  "The most successful spaces often use daylight quietly. There is no need for dramatic gestures when a well-positioned opening, carefully chosen material and thoughtful proportion can create an atmosphere that changes naturally throughout the day. Light becomes part of the character of the room rather than something noticed separately.",

  "At Aureline Studio, we see natural light as both an architectural resource and an everyday experience. It shapes how materials are perceived, how rooms connect and how people feel within them. When considered from the beginning, light can give an interior depth, rhythm and a sense of calm that continues to evolve long after the project is complete."
],
  },
  {
    slug: "the-value-of-restraint",
    category: "Studio",
    date: "August 24, 2026",
    readTime: "4 min read",
    title: "The Value of Restraint",
    intro:
      "A considered interior does not need more. It needs the right elements, carefully edited and thoughtfully placed.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=90",
    body: [
  "Restraint is not about creating empty spaces. It is about understanding which elements deserve attention and allowing them enough room to be appreciated. A restrained interior can still feel warm, expressive and deeply personal. The difference is that every decision has a reason behind it.",

  "We often begin a project by removing assumptions. What does the space actually need? Which architectural elements should remain visible? Which materials can create enough variation without visual noise? Asking these questions early allows the design to develop from the character of the space rather than from a predetermined collection of objects or finishes.",

  "The result is often quieter, but never lacking in character. Instead of filling every wall or corner, we create moments of focus and moments of pause. A carefully positioned chair, a single artwork or a beautifully detailed joinery element can have greater impact when it is given enough space around it.",

  "Restraint also begins with understanding proportion. A room can contain beautiful materials and furniture, yet still feel uncomfortable if the relationships between them are not considered carefully. We look at the scale of furniture in relation to the architecture, the height of openings, the width of circulation paths and the amount of visual space between individual elements.",

  "Material selection follows the same principle. Rather than introducing many different finishes, we often work with a smaller palette and allow each material to perform a specific role. Timber might provide warmth, stone might establish permanence and fabric might introduce softness. When these elements are repeated thoughtfully, they create continuity without becoming repetitive.",

  "Colour can also be approached with restraint. Neutral does not have to mean colourless. Warm whites, muted earth tones, natural timber and subtle variations in stone can create considerable depth when they are layered carefully. Small changes in tone become more noticeable when the overall palette remains controlled.",

  "One of the greatest advantages of restraint is that it allows architecture to remain visible. Instead of covering every surface with decoration, we allow structural proportions, windows, ceiling heights and material transitions to contribute to the identity of the space. The architecture becomes part of the experience rather than simply a background for furniture.",

  "This approach is particularly valuable in homes, where interiors need to support everyday life. A restrained environment creates room for people and their possessions to become part of the story. Books can accumulate, objects can change and furniture can move without the interior losing its sense of balance.",

  "Restraint does not mean avoiding personality. In fact, it can make personal details more powerful. A collection of ceramics, an inherited piece of furniture or an artwork with emotional significance can become a focal point when it is not competing with dozens of other visual elements.",

  "There is also a practical quality to editing a design carefully. Fewer unnecessary elements can mean fewer materials to maintain, fewer objects competing for attention and a clearer understanding of what needs to be repaired or replaced over time. Good design should not only look considered on completion day; it should continue to work as life changes.",

  "We therefore see editing as an ongoing part of the design process. Plans are reviewed, materials are compared, furniture is reconsidered and details are simplified when they do not contribute meaningfully to the overall experience. Sometimes the strongest design decision is the element that is deliberately left out.",

  "Ultimately, restraint creates space for what matters. It allows materials to age naturally, architecture to breathe and everyday objects to carry meaning. The goal is not minimalism for its own sake, but clarity — creating an environment where every element feels intentional and where nothing has been added simply because there was room for it.",

  "At Aureline Studio, we believe that a well-designed interior should feel effortless rather than empty. Its richness comes from proportion, material, light, craftsmanship and the people who inhabit it. When these elements are carefully balanced, the result can be quiet without being cold, minimal without being severe and timeless without feeling predictable."
],
  },
  {
    slug: "inside-the-material-library",
    category: "Materials",
    date: "August 11, 2026",
    readTime: "7 min read",
    title: "Inside the Material Library",
    intro:
      "Our material library is where colours, textures and surfaces are tested together before they become part of a project.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90",
    body: [
    "Material selection is an iterative process. Samples are viewed next to one another, under different lighting conditions and against the architecture they will eventually inhabit. What may appear subtle in isolation can become much more expressive when placed beside another surface, exposed to daylight or considered at a larger scale.",

    "At Aureline Studio, the material library is an important part of this process. It is not simply a collection of beautiful samples. It is a working space where ideas are tested, compared, edited and sometimes rejected. Stone, timber, metal, fabric, plaster, glass and paint are brought together to understand how they might eventually coexist within a room.",

    "We look closely at texture, scale, reflectivity and ageing. A beautiful material in isolation may behave very differently when combined with another surface. A polished stone may feel refined beside a soft textile but overly reflective when paired with another glossy finish. A warm timber can introduce depth into a neutral palette, while a rough plaster surface can soften the precision of detailed joinery.",

    "The library allows these relationships to be explored before decisions are translated into the built environment. This physical process gives us an opportunity to slow down and observe materials without the pressure of a finished space around them.",

    "Colour is one of the first relationships we examine. Rather than choosing colours independently, we consider them as part of a larger material composition. Warm whites can shift dramatically depending on the timber, stone or fabric placed beside them. A muted green may feel calm next to natural oak but considerably stronger against a darker stone.",

    "For this reason, colour decisions are rarely made from a single paint card. We build small palettes and observe how tones interact. The objective is not to create perfect matching, but to establish a sense of continuity. Slight differences in tone often create more depth than a collection of identical finishes.",

    "Texture is equally important. Interiors are experienced through more than sight, and materials contribute to the physical character of a room. The roughness of natural stone, the grain of timber, the softness of linen and the smoothness of metal each create a different sensory response.",

    "We often combine contrasting textures to prevent a restrained palette from becoming flat. A smooth stone surface can sit alongside tactile timber. A structured fabric can soften a precise architectural edge. Brushed metal can introduce a subtle change in reflectivity without becoming visually dominant.",

    "Scale is another consideration that can easily be overlooked when working with small samples. A stone with a delicate pattern may appear calm on a sample board but become much more expressive when used across a large floor or wall. Conversely, a strong pattern may work beautifully as a small detail but overwhelm a larger surface.",

    "This is why material samples are considered in relation to the dimensions of the architecture. We think about where a material will begin and end, how joints will align, how patterns will continue across surfaces and what happens when two different materials meet.",

    "Lighting also changes the way materials are perceived. Natural daylight reveals variations in colour and texture throughout the day, while artificial lighting can create warmer or cooler impressions depending on its temperature and position. A surface that feels quiet in the morning may become more dimensional in the evening as shadows begin to move across it.",

    "Whenever possible, materials are therefore tested under different lighting conditions. We look at them in direct light, softer ambient light and shadow. These observations help us understand whether a material will continue to feel appropriate beyond the controlled environment of a showroom.",

    "Ageing is another essential part of the conversation. Materials are not static. Timber develops character, stone can acquire a patina, metals change subtly and fabrics respond to use. Instead of expecting every surface to remain exactly as it was on the day of installation, we consider how it might look and feel several years later.",

    "This perspective often changes the decisions we make. A material that requires constant maintenance may not be appropriate for a heavily used space, even if it is visually appealing. Another material may become more beautiful with age and everyday contact. Longevity is therefore considered alongside appearance, performance and maintenance.",

    "The material library also helps us understand craftsmanship. A sample is not only a piece of material; it can demonstrate how that material might be fabricated or finished. We examine edge details, junctions, profiles and surface treatments to understand what is possible before final specifications are made.",

    "For example, a stone can have a honed, polished or brushed finish, and each treatment creates a different relationship with light. Timber can be left natural, stained, wire-brushed or finished with a subtle protective coating. Metal can be treated in ways that alter both its colour and tactile quality.",

    "These details may appear small, but they often determine how refined an interior ultimately feels. Good material selection is therefore closely connected to good detailing. The two cannot be separated easily.",

    "We also consider how materials move from one room to another. A home does not need every room to use exactly the same finishes, but there should be a sense of relationship between spaces. Repeating a timber tone, carrying a stone from one area into another or maintaining a consistent metal finish can create visual continuity without making the interiors feel repetitive.",

    "The library becomes especially valuable when several possibilities seem equally appropriate. Instead of making a decision based purely on a photograph or catalogue image, we can place the options together and observe them as a composition. Often, the strongest choice becomes clear only when alternatives are seen side by side.",

    "There is also a certain discipline in knowing when to stop. With so many materials available, it is easy to continue adding possibilities. A successful palette does not necessarily contain many different surfaces. In many projects, a small number of carefully selected materials can create greater depth because each one has enough space to be understood.",

    "We therefore edit the material palette continuously. Samples are removed when they do not contribute to the overall direction. Others are retained because they provide contrast, warmth, texture or continuity. The process becomes less about collecting options and more about finding the relationships that feel right.",

    "Sustainability also forms part of this evaluation. We consider durability, responsible sourcing, expected lifespan and whether a material can be repaired or maintained rather than replaced. Choosing a material that lasts well can often be more meaningful than selecting one simply because it is currently fashionable.",

    "Ultimately, the material library is a place for slowing down. It gives us permission to look closely, compare carefully and make decisions through observation rather than assumption. Every sample represents a possibility, but not every possibility needs to become part of the final design.",

    "The finished interior may appear effortless, but that simplicity is often supported by many rounds of testing and editing behind the scenes. Materials are considered not as individual objects, but as part of a larger relationship between architecture, light, furniture and everyday life.",

    "At Aureline Studio, we believe that material choices should become quieter as they become more considered. The goal is not to showcase how many materials have been selected, but to create an environment where each surface feels necessary and where colour, texture and light work together naturally.",

    "A material library is ultimately a collection of possibilities. The design process begins when those possibilities are brought together, questioned and refined. What remains is a material palette with clarity, character and the ability to age gracefully with the space around it."
  ],
  },
  {
    slug: "spaces-that-age-well",
    category: "Design Thinking",
    date: "July 29, 2026",
    readTime: "6 min read",
    title: "Spaces That Age Well",
    intro:
      "The most enduring interiors are designed with time in mind. They are allowed to evolve rather than remain frozen at completion.",
    heroImage:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2400&q=90",
    body: [
    "The most enduring interiors are rarely designed to look untouched. Instead, they are created with an understanding that spaces change as people live in them. Furniture moves, objects accumulate, materials develop character and rooms gradually become records of everyday life. A successful interior makes room for this evolution rather than resisting it.",

    "Natural materials often become more interesting as they age. Timber develops character, stone gains variation and textiles change through use. Small marks and subtle imperfections can become part of the identity of a space. Rather than treating these changes as defects, we consider them part of the material's life and the story of the interior.",

    "This way of thinking begins with material selection. We look beyond how a surface appears when it is new and consider how it might respond to years of light, touch, movement and maintenance. A material that becomes richer with age can contribute to a sense of permanence, while one that quickly shows wear may require a more careful application.",

    "Designing for longevity also means understanding how a space will actually be used. A beautiful material may not be appropriate for every environment. A family home, a quiet bedroom and a busy hospitality space all have different requirements. Durability, cleaning, movement and frequency of use become part of the design conversation from the beginning.",

    "We also consider maintenance as part of the architecture rather than as an afterthought. Surfaces should be practical enough to live with, and details should be designed so that they can be maintained without compromising the overall character of the space. The best interiors often make everyday care feel simple and intuitive.",

    "Adaptability is equally important. People's needs rarely remain exactly the same for decades. A child may eventually need a study area, a guest bedroom may become a workspace, or a living room may need to accommodate a different pattern of daily life. Designing flexible spaces allows an interior to respond without requiring a complete transformation.",

    "This does not necessarily mean creating rooms that can serve every possible function. Instead, we look for opportunities within the architecture that allow spaces to change naturally. Furniture can be moved, storage can be adapted and certain rooms can support more than one type of activity without losing their original purpose.",

    "Furniture itself plays an important role in how an interior ages. Pieces with strong proportions and simple construction can remain relevant even as tastes change. Rather than selecting everything as a single collection, we often consider how individual pieces might coexist over time, allowing new objects to be introduced without disrupting the original design language.",

    "The same principle applies to decorative objects. A home should have space for personal possessions to develop. Books, artwork, ceramics, photographs and objects collected through travel can gradually become part of the interior. These elements bring a sense of history that cannot be created through decoration alone.",

    "Light also contributes to how a space changes over time. Natural daylight shifts with the seasons, and materials respond differently depending on the hour and orientation of a room. A space that feels calm in the morning may become warmer and more atmospheric in the evening. Designing with these changes in mind gives an interior a quality that cannot be captured in a single photograph.",

    "Colour is another element that benefits from a long-term perspective. Trends can change quickly, but colours derived from natural materials tend to remain more adaptable. Warm neutrals, muted earth tones and subtle variations can provide a quiet foundation while allowing furniture, artwork and personal objects to change around them.",

    "We are also interested in the relationship between permanence and imperfection. A perfectly uniform surface may initially appear refined, but natural variation often creates greater depth over time. Veining in stone, differences in timber grain and small variations in handmade finishes give materials a quality that becomes increasingly apparent as the space is lived in.",

    "Craftsmanship becomes particularly important in this context. Well-made details have a greater chance of remaining relevant because they are designed with care rather than around a temporary trend. Joinery, handles, edges, transitions and junctions may occupy small areas of a room, but they are encountered repeatedly and therefore have a significant influence on the everyday experience.",

    "Designing for longevity also means resisting the pressure to follow every new trend. Trends can be useful sources of inspiration, but an interior built entirely around a particular moment can quickly feel dated. We prefer to establish a strong architectural and material foundation and allow contemporary elements to enter in more considered ways.",

    "This does not mean that a timeless interior has to be traditional or predictable. It can still feel contemporary, expressive and personal. The difference is that its character comes from proportion, material, light and craftsmanship rather than from relying entirely on what is currently fashionable.",

    "In many ways, designing for the future requires designing with less certainty. We cannot know exactly how a family will live ten years from now or which objects they will collect. What we can do is create an environment with enough clarity and flexibility to accommodate change.",

    "The most successful spaces therefore become richer rather than less relevant as time passes. Their materials develop patina, their objects gain meaning and their proportions continue to provide a stable framework for everyday life. The interior becomes something that grows with its occupants rather than something that remains fixed around them.",

    "At Aureline Studio, we believe that good design should not end when construction is complete. Completion is simply the point at which the space begins its next chapter. The marks of living, the changing light, the ageing materials and the objects brought into the home all become part of the design.",

    "Ultimately, spaces that age well are not those that remain perfectly preserved. They are spaces that are able to absorb change while retaining their sense of identity. They become familiar without becoming tired, personal without becoming cluttered and considered without feeling overly designed.",

    "Designing with time in mind means accepting that an interior has a life beyond its completion date. When materials, architecture and everyday life are given room to evolve together, a space can become more meaningful with every passing year."
  ],
  },
  {
    slug: "behind-the-project-casa-verde",
    category: "Projects",
    date: "July 16, 2026",
    readTime: "8 min read",
    title: "Behind the Project: Casa Verde",
    intro:
      "Casa Verde explores a restrained material palette, connected living spaces and a close relationship between architecture and landscape.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90",
    body: [
    "The project began with a simple ambition: create a home that feels connected to its surroundings while remaining calm and private. Casa Verde was conceived as a place where architecture would frame everyday life rather than compete with it. From the beginning, the design focused on creating a sense of openness, natural light and continuity between the interior and the landscape beyond.",

    "The site offered an opportunity to create a home that could respond to its surroundings without becoming overly exposed. The planning strategy therefore balanced openness with privacy. Views were carefully considered, openings were controlled and the relationship between solid and transparent surfaces became an important part of the architectural language.",

    "Rather than treating the landscape as something viewed only from specific rooms, we wanted it to become part of the experience of moving through the house. Glimpses of planting, changes in daylight and framed views were incorporated into the circulation so that the relationship with the outdoors would remain present throughout the day.",

    "The planning strategy uses connected living areas, controlled openings and a restrained palette of natural materials. The main living spaces are arranged to encourage movement and interaction while maintaining distinct zones for different activities. The result is a home that feels connected without becoming completely open or undefined.",

    "At the centre of the design is a sequence of spaces that gradually transition from more private areas to shared living zones. This creates a natural rhythm within the home. Spaces open and contract, views appear and disappear, and changes in ceiling height and material help define different moments without relying heavily on walls.",

    "Light became one of the most important materials in the project. Instead of introducing large openings everywhere, we considered where daylight would have the greatest impact. Openings were positioned to create moments of brightness, shadow and reflection throughout the day. This allowed the character of the house to change naturally as the sun moved across the rooms.",

    "The material palette was intentionally restrained. We wanted the architecture to feel warm and grounded rather than overly decorative. Natural timber, stone, plaster and carefully selected textiles form the foundation of the interiors. Each material was chosen for both its visual character and its ability to develop depth over time.",

    "Stone provides a sense of permanence within the spaces, while timber introduces warmth and variation. Plaster creates softer surfaces that respond subtly to changing light, and textiles bring acoustic softness and tactility. Together, these materials establish a quiet hierarchy without requiring excessive colour or ornament.",

    "Material transitions were carefully considered throughout the house. Where two surfaces meet, the junction becomes part of the architecture. Changes between timber and stone, wall and joinery or floor and wall were resolved with attention to proportion and detail. These moments may be subtle, but they contribute significantly to the overall sense of refinement.",

    "Custom joinery was developed alongside the architecture so that storage, furniture and architectural elements could read as one continuous language. Instead of treating storage as something added after the main design was complete, it became part of the spatial planning from the beginning.",

    "Built-in cabinetry follows the proportions of the rooms and provides practical storage while maintaining visual calm. Doors, handles, shelves and niches were considered as part of a single system. This approach reduces unnecessary visual interruptions and allows the architecture to remain legible.",

    "The kitchen was approached in a similar way. Rather than creating a purely functional workspace, the design treats the kitchen as part of the larger living environment. Materials and joinery continue from adjacent spaces, allowing the kitchen to feel integrated rather than visually separated.",

    "Furniture was selected with the same principle of restraint. The aim was not to fill every room, but to establish comfortable proportions and create enough space for movement. Sofas, chairs and tables were positioned to support conversation and everyday routines while maintaining clear visual connections between different areas.",

    "A small number of carefully selected pieces provide moments of contrast. Sculptural forms, textured fabrics and natural finishes add character without overwhelming the architectural framework. This allows personal objects and artwork to become part of the composition rather than competing with it.",

    "The relationship between furniture and architecture was particularly important in the living spaces. Low-profile pieces allow views to remain open, while larger architectural elements establish a sense of enclosure. The result is a balance between openness and intimacy.",

    "Privacy was another important consideration. A home connected to its landscape still needs spaces where occupants can retreat. Bedrooms and quieter areas were positioned to feel more protected, with openings carefully controlled to provide daylight without sacrificing a sense of enclosure.",

    "The transition between public and private areas was therefore designed gradually rather than as a sudden separation. Changes in material, light and proportion help communicate these shifts. The house feels connected as a whole, while each area retains its own atmosphere.",

    "Landscape plays an equally important role in creating this continuity. Planting was selected to complement the restrained architectural palette rather than compete with it. Greenery appears through openings, terraces and framed views, creating moments of softness against the more solid architectural surfaces.",

    "The connection with landscape also changes throughout the seasons. Plants, shadows and daylight introduce variation into an otherwise calm material environment. This gives the house a sense of movement even when the architecture itself remains relatively quiet.",

    "One of the challenges of the project was maintaining simplicity without allowing the spaces to feel empty. Restraint requires careful editing. Every element needs enough presence to contribute to the overall composition, but no single detail should dominate unnecessarily.",

    "This became particularly important when selecting finishes and decorative elements. Instead of introducing a large number of materials, we focused on subtle differences in texture, tone and reflectivity. Depth came from layering rather than variety.",

    "The same approach was applied to colour. The interiors are built around warm neutrals and natural tones, allowing the landscape to provide much of the visual variation. This creates a flexible background for artwork, furniture and objects that may change over time.",

    "The project also demonstrates the importance of designing details early. Joinery dimensions, lighting positions, material junctions and furniture layouts were considered together rather than independently. This helped prevent the common problem of individual elements competing for attention once construction begins.",

    "Lighting was integrated into the architecture wherever possible. Rather than relying entirely on visible fixtures, concealed and carefully positioned sources create layers of illumination. During the evening, the atmosphere shifts from daylight-driven openness toward a warmer and more intimate character.",

    "This change between day and night was an important part of the design. A successful home should not have only one identity. It should respond to different routines, seasons and moments of the day. Casa Verde was therefore designed to feel equally considered in bright morning light and quieter evening conditions.",

    "Throughout the project, the intention was to create architecture that feels natural rather than overly resolved. Not every surface needed to be perfectly uniform, and not every corner required a decorative gesture. The strongest moments often came from the interaction between simple materials, carefully controlled light and the surrounding landscape.",

    "Casa Verde also reflects a broader belief that residential architecture should support the rhythms of everyday life. The home needed to accommodate cooking, gathering, working, resting and spending time outdoors without requiring each activity to have a completely separate environment.",

    "This flexibility gives the house a sense of ease. Spaces can be used differently depending on the time of day, the number of people present or the season. The architecture establishes a framework, but the people living within it provide the changing character.",

    "Looking back at the project, the most important decisions were not necessarily the most visible ones. They were the decisions about proportion, material transitions, circulation, light and the relationship between interior and exterior. These choices created the foundation for everything else.",

    "Casa Verde ultimately became an exploration of how little can be added when the architecture, materials and landscape are allowed to work together. Its character comes from relationships rather than decoration: between light and surface, inside and outside, openness and privacy, permanence and everyday life.",

    "At Aureline Studio, we believe that the strongest residential projects are not designed simply to be photographed at completion. They are designed to be lived in. Casa Verde was developed with this principle at its centre — creating a home that can accommodate change, develop character and remain connected to its surroundings over time.",

    "The final result is a quiet architectural framework for living. Natural materials provide warmth, controlled openings establish connection and custom details bring continuity throughout the home. Most importantly, the spaces leave room for the people who inhabit them.",

    "Casa Verde is ultimately less about a particular style and more about an approach to design: considered, restrained and responsive. By allowing architecture, material and landscape to share the same language, the project creates an environment that feels calm in the present and capable of becoming richer with time."
  ],
},
  {
    slug: "objects-with-purpose",
    category: "Objects",
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "Objects With Purpose",
    intro:
      "Furniture and objects become part of architecture when they are selected with proportion, function and context in mind.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90",
    body: [
    "Objects have the ability to change how a room feels. A chair, lamp or artwork can introduce scale, colour, texture or rhythm. Even a relatively small object can influence how we perceive the space around it, particularly when it is positioned with intention.",

    "We approach furniture and objects as part of the larger composition rather than as decoration added at the end. Their proportions, materials and placement are considered alongside the architecture, lighting and material palette so that each element contributes to the atmosphere of the room.",

    "The strongest pieces often have a clear relationship with the architecture around them. A low chair can reinforce the horizontal character of a room, while a sculptural light can draw attention toward a particular ceiling height or architectural feature. Furniture can define spaces without necessarily enclosing them.",

    "Proportion is often the first consideration. A beautiful piece can feel completely wrong if its scale does not relate to the room. A large sofa may overwhelm a compact living area, while furniture that is too small can make a generous room feel disconnected. We therefore consider dimensions, circulation and sightlines before selecting individual pieces.",

    "This relationship becomes particularly important in open-plan spaces. Furniture can establish zones for conversation, dining, reading or working without the need for additional walls. A carefully positioned table or pair of chairs can create a sense of purpose within a larger room while allowing the overall architecture to remain visible.",

    "Function also influences the way objects are selected. A piece may be visually compelling, but it still needs to work within everyday life. Seating should feel comfortable, lighting should support the activities taking place beneath it and storage should be accessible without disrupting the visual calm of the interior.",

    "This balance between function and expression is what gives objects their purpose. We are interested in pieces that can perform their practical role while also contributing something more subtle to the atmosphere of a space.",

    "Material is another important part of the selection process. Timber introduces warmth, stone provides weight, metal can bring precision and textiles create softness. When these materials are considered alongside the architectural palette, furniture becomes a continuation of the interior rather than an independent layer.",

    "We often look for contrasts within a restrained palette. A soft fabric against a hard stone surface can create balance. A dark timber chair can give definition to a lighter room. A brushed metal detail can introduce a small amount of reflection without becoming visually dominant.",

    "Colour is treated with similar consideration. Not every object needs to match the room, and in many cases a subtle contrast can make the overall composition more interesting. A muted artwork, a deep-toned chair or a naturally coloured textile can provide a focal point without disturbing the calmness of the wider palette.",

    "Placement is just as important as selection. An object can have very different impact depending on where it is positioned. We consider what is seen when entering a room, what appears in the background of a view and how objects relate to one another when the space is experienced from different directions.",

    "Negative space is part of this process. Not every surface needs to be filled, and objects often become more meaningful when they have room around them. A single artwork on a quiet wall can have greater presence than a collection of pieces competing for attention.",

    "Personal objects are especially important in residential interiors. Books, photographs, ceramics, artwork and collected pieces give a home its individual character. These objects should not feel artificially arranged simply to complete a design. They should have space to exist naturally as part of the life of the people who live there.",

    "This is one reason we avoid designing interiors that feel completely finished. A home should be able to evolve. New objects may be collected, furniture may be replaced and artwork may move from one room to another. A strong architectural foundation can accommodate these changes without losing its identity.",

    "There is also value in choosing objects that can remain relevant over time. Rather than selecting pieces purely because they are currently fashionable, we look for strong proportions, good materials and craftsmanship. These qualities tend to remain meaningful even as trends change.",

    "Craftsmanship can make an object feel connected to the architecture in a particularly direct way. Hand-finished timber, carefully detailed joinery or a well-made piece of furniture can introduce a level of tactility that mass-produced objects often cannot provide.",

    "Lighting deserves particular attention because it functions as both an object and a source of atmosphere. A pendant can become a sculptural element during the day and transform the character of a room once illuminated at night. Floor and table lamps can create smaller pools of light that encourage intimacy within larger spaces.",

    "Artwork works in a similar way. It does not simply occupy a wall; it can influence the colour balance, scale and emotional character of the room. We consider how artwork interacts with surrounding materials and how it is experienced from different positions within the space.",

    "Ultimately, objects should support the architecture rather than compete with it. The most successful interiors are not necessarily those with the most furniture or the greatest number of decorative pieces. They are the ones where every element feels connected to the larger composition.",

    "At Aureline Studio, we believe that an object earns its place when it contributes to how a space is experienced. It may provide comfort, solve a practical need, introduce texture or simply create a moment of visual interest. When selected and positioned with care, even the smallest piece can become part of the architecture.",

    "Objects with purpose are therefore not about decoration for decoration's sake. They are about creating relationships between people, materials and space. When those relationships are carefully considered, furniture and objects become more than things within a room — they become part of the story of how the room is lived."
  ],
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-20 lg:pb-36 lg:pt-48">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/journal"
            className="mb-16 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6F6B64] transition-colors hover:text-[#171715]"
          >
            <ArrowLeft size={16} strokeWidth={1.2} />
            Back to Journal
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8A7560]">
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#8A7560]" />
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-[#8A7560]" />
            <span>{article.readTime}</span>
          </div>

          <h1 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.065em]">
            {article.title}
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-8 text-[#6F6B64] md:text-2xl">
            {article.intro}
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.4fr_1.6fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
              Aureline Journal
            </p>
          </div>

          <div className="max-w-3xl">
            {article.body.map((paragraph, index) => (
              <p
                key={index}
                className="mb-8 text-lg leading-9 text-[#4F4B46] md:text-xl md:leading-10"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-[#D8D3C9] px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
              Continue exploring
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.045em] md:text-6xl">
              More ideas from the studio.
            </h2>
          </div>

          <Link
            href="/journal"
            className="group flex w-fit items-center gap-3 border-b border-[#171715] pb-3 text-sm uppercase tracking-[0.2em]"
          >
            View all articles

            <ArrowUpRight
              size={18}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}