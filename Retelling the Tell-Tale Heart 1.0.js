var storyContent = ﻿{"inkVersion":20,"root":[[{"#":"theme: dark"},{"#":"author: Dr. Kenton Taylor Howard, PhD"},"^This game explores possible variations on Edgar Allan Poe’s short story, “The Tell-Tale Heart.” You can follow the original story, or you can instead create an alternate version of the story by choosing from various options.","\n",{"->":"InfoPage"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"InfoPage":[["ev","str","^Get more information about Poe's story","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Get more information about ink","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Go to the game","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Edgar Allan Poe's short story is a classic mystery story.  It is a very short read, and I have linked to the original story on this game's itch.io page. ",{"->":".^.^.^"},"\n",{"#f":5}],"c-1":["\n","^ink is a scripting language for creating text-based digital stories that was created by inkle, a game design company.  It is designed to be simple and easy to learn, but can produce relatively complex games.  ink games can be created using the inky editor, which can be found on inkle's website. ink games can be played in a web browser, and ink can also be integrated with 2D and 3D game engines, such as Unreal and Unity. ",{"->":".^.^.^"},"\n",{"#f":5}],"c-2":[{"->":"GameStart"},"\n",{"#f":5}]}],{"#f":1}],"GameStart":[[{"#":"CLEAR"},"^Why hello! Some have called me mad, but I am happy to relate the story of what I did to the old man and how I ended up here. Could someone in the throes of madness remember such details and answer your questions so calmly and candidly? Of course not! Please, ask me anything you wish - perhaps you wonder about how I knew the old man?","\n","ev","str","^Were you employed by the old man?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Was he your father?","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Did you have a relationship with him?","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Actually, I'd rather it be a mystery!","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":[{"->":"Employed"},"\n",{"#f":5}],"c-1":[{"->":"Father"},"\n",{"#f":5}],"c-2":[{"->":"Relationship"},"\n",{"#f":5}],"c-3":[{"->":"Mystery"},"\n",{"#f":5}]}],{"#f":1}],"Employed":[["^Why yes! He was my employer! I lived with him and working with him for many years.","\n","ev","str","^Hmm, tell me more...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Motive"},{"#f":5}]}],{"#f":1}],"Father":[["^Why yes! He was my father! I was living with him to care for him in his old age.","\n","ev","str","^Hmm, tell me more...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Motive"},{"#f":5}]}],{"#f":1}],"Relationship":[["^Yes! We were lovers! We had been together for many years.","\n","ev","str","^Hmm, tell me more...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Motive"},{"#f":5}]}],{"#f":1}],"Mystery":[["ev",{"VAR?":"Poe"},1,"+","/ev",{"VAR=":"Poe","re":true},"^Yes, such details are not really interesting, are they?","\n","ev","str","^I'd prefer to know more about other details...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Motive"},{"#f":5}]}],{"#f":1}],"Motive":[[{"#":"CLEAR"},"^Ahh yes, of course you want to know more - it is quite an intriguing tale, and someone who is mad would not be able to explain their motives for such an act. So perhaps you are interested in knowing why I committed this dark deed?","\n","ev","str","^Did you do it for his gold?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Maybe you were seeking revenge...","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Was it a crime of passion?","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^I have heard it was because of his eye!","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":[{"->":"Gold"},"\n",{"#f":5}],"c-1":[{"->":"Revenge"},"\n",{"#f":5}],"c-2":[{"->":"Passion"},"\n",{"#f":5}],"c-3":[{"->":"Eye"},"\n",{"#f":5}]}],{"#f":1}],"Gold":[["^Yes, that was it! The old man’s gold always called to me, until one day my greed became overwhelming.","\n","ev","str","^And when did this occur?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Timeline"},{"#f":5}]}],{"#f":1}],"Revenge":[["^Why yes! I could no longer bear his insults and injuries, and my enmity grew toward the old man until one day I determined to take my vengence.","\n","ev","str","^And when did this occur?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Timeline"},{"#f":5}]}],{"#f":1}],"Passion":[["^Passion, yes! I both loved and hated the old man. On some days he was a wonderful person, but on others his actions were terrible, and my emotions were confused until one day I was drove to murder.","\n","ev","str","^And when did this occur?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Timeline"},{"#f":5}]}],{"#f":1}],"Eye":[["ev",{"VAR?":"Poe"},1,"+","/ev",{"VAR=":"Poe","re":true},"^Yes! That is it! It was because of the old man’s evil, blue, vexing eye! How it endlessly haunted me!","\n","ev","str","^And when did this occur?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Timeline"},{"#f":5}]}],{"#f":1}],"Timeline":[[{"#":"CLEAR"},"^Ahhh yes... madness often clouds the mind and makes it difficult to remember when things occured. Since I am not mad I can describe precisely the time frame in which the deed was done. But perhaps you'd like to speculate?","\n","ev","str","^I think you did it quickly... what did you use to do it?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^I think you watched him first...","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"Weapon"},"\n",{"#f":5}],"c-1":[{"->":"Stalk"},"\n",{"#f":5}]}],{"#f":1}],"Stalk":[[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Yes, I did watch him...",{"->":".^.^.17"},null],"s1":["pop","^Yes, I kept watching him...",{"->":".^.^.17"},null],"#f":5}],["ev","visit",7,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"ev","du",6,"==","/ev",{"->":".^.s6","c":true},"ev","du",7,"==","/ev",{"->":".^.s7","c":true},"nop",{"s0":["pop","^and on the first night...",{"->":".^.^.53"},null],"s1":["pop","^and on the second night...",{"->":".^.^.53"},null],"s2":["pop","^and on the third night...",{"->":".^.^.53"},null],"s3":["pop","^and on the fourth night...",{"->":".^.^.53"},null],"s4":["pop","^and on the fifth night...",{"->":".^.^.53"},null],"s5":["pop","^and on the sixth night...",{"->":".^.^.53"},null],"s6":["pop","^and on the seventh night...",{"->":".^.^.53"},null],"s7":["pop",{"->":"Stalk.EightNights"},{"->":".^.^.53"},null],"#f":5}],"\n","ev","str","^Was that when you attacked him?  What did you use?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^You kept watching, didn't you?",{"->":".^.^.17"},null],"s1":["pop","^You still kept watching...",{"->":".^.^.17"},null],"#f":5}],"/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"Weapon"},"\n",{"#f":5}],"c-1":[{"->":"Stalk"},"\n",{"#f":5}]}],{"EightNights":[["ev",{"VAR?":"Poe"},1,"+","/ev",{"VAR=":"Poe","re":true},"^Finally, on the eighth night, the old man's evil, vulture-like eye opened... and that was when I set upon him!","\n","ev","str","^That was when you attacked him?  What weapon did you use?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"Weapon"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"Weapon":[[{"#":"CLEAR"},"^Ahh yes, the weapon I used... of course, an important consideration. Madness might drive someone to choose a weapon rashly, but since I am not mad, I thought long about how to do the deed. I'm sure you have some idea of what I used?","\n","ev","str","^Maybe you used a knife?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Did you poison him?","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^You used your bare hands, didn't you?","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^I think you came up with something no one else would consider...","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":[{"->":"Knife"},"\n",{"#f":5}],"c-1":[{"->":"Poison"},"\n",{"#f":5}],"c-2":[{"->":"Strangled"},"\n",{"#f":5}],"c-3":[{"->":"Suffocated"},"\n",{"#f":5}]}],{"#f":1}],"Knife":[["^A knife, yes! I used the blade to carve out his eye, then, slashed him through the throat!","\n","ev","str","^What did you do then?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Finale"},{"#f":5}]}],{"#f":1}],"Poison":[["^Yes, poison in his cup... the old man always helped himself to a nightcap before bed...","\n","ev","str","^What did you do then?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Finale"},{"#f":5}]}],{"#f":1}],"Strangled":[["^With my bare hands, yes... Doing the deed with my bare hands satisfied my emotions...","\n","ev","str","^What did you do then?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Finale"},{"#f":5}]}],{"#f":1}],"Suffocated":[["ev",{"VAR?":"Poe"},1,"+","/ev",{"VAR=":"Poe","re":true},"^Yes! A most cunning method, I should think. I suffocated the old man using the bed he was sleepign in! No weapon to find, no poison on his lips, and no signs of choking upon his neck. Only the truly mad would choose such awful means - and since clearly I am not mad, no one would suspect me.","\n","ev","str","^What did you do then?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"Finale"},{"#f":5}]}],{"#f":1}],"Finale":[[{"#":"CLEAR"},"^Then I disposed of the body, of course; someone who is mad would never think to try to hide their crimes. I dismembered the old man, then concealed his remains beneath the floorboards of the house. This took some time, of course, but the evidence of the murder was well hidden, and I knew no one would find the corpse.","\n","ev","str","^Is that when you made your escape?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Is that when the police arrived?","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"Escape"},"\n",{"#f":5}],"c-1":[{"->":"Police"},"\n",{"#f":5}]}],{"#f":1}],"Escape":["ev",{"CNT?":"Suffocated"},"/ev",[{"->":".^.b","c":true},{"b":["^ Escape, yes... And of course, because there was no sign of the deed, it took them days to find the body... giving me enough time for you, my good friend, to come to my aid and ensure that I will never be found! ",{"->":"Escape.EscapeSuccess"},{"->":"Escape.4"},null]}],"nop","\n",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Escape, yes... And luckily I made good time and got to the port ahead of the police.. giving me enough time for you, my good friend, to come to my aid and ensure that I will never be found! ",{"->":"Escape.EscapeSuccess"},{"->":".^.^.17"},null],"s1":["pop","^Escape... yes, I attemped to escape, and I made it far... but they found the old man's body and they caught me just as I was boarding a ship at the port. ",{"->":"Escape.EscapeFailed"},{"->":".^.^.17"},null],"#f":5}],"\n",{"EscapeSuccess":[["ev","str","^Go to the ending.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"FinalEnding"},"\n",{"#f":5}]}],{"#f":1}],"EscapeFailed":[["ev","str","^Go to the ending.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"FinalEnding"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"Police":[["^Why yes... three police officers knocked at the door a few hours later, claiming that a neighbor had heard a scream in the night...","\n","ev","str","^Is that when you attacked them?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^And you lead them to the room where the corpse was hidden?","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"Attack"},"\n",{"#f":5}],"c-1":[{"->":"RevealEnding"},"\n",{"#f":5}]}],{"#f":1}],"Attack":["^Yes! I let them in, and then I fell upon them! I assaulted one viciously, knocking him to the floor!","\n","ev",{"CNT?":"Knife"},"/ev",[{"->":".^.b","c":true},{"b":[["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^I then pulled my blade, turning toward the others... ",{"->":"Attack.KnifeAttack"},{"->":".^.^.17"},null],"s1":["pop","^However, before I could draw my blade, one of the others clubbed me about the head, knocking me unconscious. ",{"->":"Attack.AttackFailed"},{"->":".^.^.17"},null],"#f":5}],{"->":"Attack.6"},null]}],"nop","\n",["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^However, before I could attack the others, one of them clubbed me about the head, knocking me unconcious. ",{"->":"Attack.AttackFailed"},{"->":".^.^.29"},null],"s1":["pop","^However, before I could attack the others, one of them clubbed me about the head, knocking me unconcious. ",{"->":"Attack.AttackFailed"},{"->":".^.^.29"},null],"s2":["pop","^However, before I could attack the others, one of them clubbed me about the head, knocking me unconcious. ",{"->":"Attack.AttackFailed"},{"->":".^.^.29"},null],"s3":["pop",{"->":"Attack.AttackSuccess"},{"->":".^.^.29"},null],"#f":5}],"\n",{"KnifeAttack":[["^and since I was armed, the element of surprise was on my side. I slashed another through the throat, then set upon the final officer viciously with my knife, stabbing him over and over until he fell. I finished them all three off, then dismemebered them just as I did with the old man. Realizing that my murder of the three officers would arouse further suspicions, I made plans for my escape... and luckily you, my good friend, were there to help me get away!","\n","ev","str","^Go to the ending.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"FinalEnding"},"\n",{"#f":5}]}],{"#f":1}],"AttackFailed":[["^My assault aroused further suspicions, and a search of the house was effected, soon revealing the corpse of the old man. I was arrested for his murder, but at least they are allowing me to see you, my good friend, one last time before I am executed for my crimes!","\n","ev","str","^Go to the ending.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"FinalEnding"},"\n",{"#f":5}]}],{"#f":1}],"AttackSuccess":[["^Though I was outnumbered, my hasty actions surprised them. I quickly turned to the another officer and attacked him as well, grabbing for his club and beating him upon the head with it. I struggled with the third officer, but was able to overcome him after a tussle.  With all of the officers down, I finished them off, then dismemebered them just as I did with the old man. Realizing that my murder of the three officers would arouse further suspicions, I made plans for my escape... and luckily you, my good friend, were there to help me get away!","\n","ev","str","^Go to the ending","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"FinalEnding"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"RevealEnding":[["ev",{"VAR?":"Poe"},1,"+","/ev",{"VAR=":"Poe","re":true},"^Yes... in my arrogance, I believed that no sign of my deed could be detected... But I did not account for the heart! That horrible, pulsing, beating heart, sounding in my ears even though the man was long dead! I could take it no longer, and I tore up the floorboards myself, revealing his corpse. I was arrested, of course... but at least they are allowing me to see you, my good friend, one last time before I am executed for my crimes!","\n","ev","str","^Go to the ending.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"FinalEnding"},"\n",{"#f":5}]}],{"#f":1}],"FinalEnding":[{"#":"CLEAR"},"^Here is a quick review of your choices throughout the story!","\n","^You decided that the narrator","ev",{"CNT?":"Employed"},"/ev",[{"->":".^.b","c":true},{"b":["^ was the old man's employee.",{"->":".^.^.^.8"},null]}],"nop","ev",{"CNT?":"Father"},"/ev",[{"->":".^.b","c":true},{"b":["^ was the old man's child.",{"->":".^.^.^.13"},null]}],"nop","ev",{"CNT?":"Relationship"},"/ev",[{"->":".^.b","c":true},{"b":["^ was the old man's lover.",{"->":".^.^.^.18"},null]}],"nop","ev",{"CNT?":"Mystery"},"/ev",[{"->":".^.b","c":true},{"b":["^'s relationship to the old man was ambigious.",{"->":".^.^.^.23"},null]}],"nop","\n","^You decided that the motive for the murder was ","ev",{"CNT?":"Gold"},"/ev",[{"->":".^.b","c":true},{"b":["^gold",{"->":".^.^.^.30"},null]}],"nop","ev",{"CNT?":"Revenge"},"/ev",[{"->":".^.b","c":true},{"b":["^revenge",{"->":".^.^.^.35"},null]}],"nop","ev",{"CNT?":"Passion"},"/ev",[{"->":".^.b","c":true},{"b":["^passion.",{"->":".^.^.^.40"},null]}],"nop","ev",{"CNT?":"Eye"},"/ev",[{"->":".^.b","c":true},{"b":["^the eye",{"->":".^.^.^.45"},null]}],"nop","^.","\n","^You decided that the murder method was ","ev",{"CNT?":"Knife"},"/ev",[{"->":".^.b","c":true},{"b":["^a knife",{"->":".^.^.^.53"},null]}],"nop","ev",{"CNT?":"Poison"},"/ev",[{"->":".^.b","c":true},{"b":["^poison",{"->":".^.^.^.58"},null]}],"nop","ev",{"CNT?":"Strangled"},"/ev",[{"->":".^.b","c":true},{"b":["^strangulation",{"->":".^.^.^.63"},null]}],"nop","ev",{"CNT?":"Suffocated"},"/ev",[{"->":".^.b","c":true},{"b":["^suffocation",{"->":".^.^.^.68"},null]}],"nop","^.","\n","^Your choices led to the story ending with ","ev",{"CNT?":"Escape.EscapeSuccess"},"/ev",[{"->":".^.b","c":true},{"b":["^the narrator's successful escape attempt.",{"->":".^.^.^.76"},null]}],"nop","ev",{"CNT?":"Escape.EscapeFailed"},"/ev",[{"->":".^.b","c":true},{"b":["^the narrator's failed escape attempt.",{"->":".^.^.^.81"},null]}],"nop","ev",{"CNT?":"Attack.KnifeAttack"},"/ev",[{"->":".^.b","c":true},{"b":["^the narrator murdering the police with a knife and escaping.",{"->":".^.^.^.86"},null]}],"nop","ev",{"CNT?":"Attack.AttackFailed"},"/ev",[{"->":".^.b","c":true},{"b":["^the narrator attacking the police unsuccessfully.",{"->":".^.^.^.91"},null]}],"nop","ev",{"CNT?":"Attack.AttackSuccess"},"/ev",[{"->":".^.b","c":true},{"b":["^the narrator attacking the police sucessfully and escaping.",{"->":".^.^.^.96"},null]}],"nop","ev",{"CNT?":"RevealEnding"},"/ev",[{"->":".^.b","c":true},{"b":["^the narrator revealing the body to the police.",{"->":".^.^.^.101"},null]}],"nop","\n","ev",{"VAR?":"Poe"},4,">","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your choices led your story to turn out the same way as Poe's original! Perhaps now you can create your own new story?","\n",{"->":".^.^.^.110"},null]}],[{"->":".^.b"},{"b":["\n","^Your choices led your story to turn out the differently than Poe's original! Perhaps now you can recreate Poe's story?","\n",{"->":".^.^.^.110"},null]}],"nop","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"Poe"},"/ev","end",null],"#f":1}],"listDefs":{}};