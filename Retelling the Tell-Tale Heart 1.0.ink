//Hello!  This version of my ink story has comments like this throughout the inky editor file.  These comments are designed to help guide you through the story.
# theme: dark
# author: Dr. Kenton Taylor Howard, PhD
//Lines marked with hashtags like this are used for specific web functionality - my comments will not focus on explaining these.
VAR Poe = 0
//The line above establishes a variable called "Poe" that can be tracked and updated throughout the story. Right now this variable is set to a numerical value of 0.
This game explores possible variations on Edgar Allan Poe’s short story, “The Tell-Tale Heart.” You can follow the original story, or you can instead create an alternate version of the story by choosing from various options. 
->InfoPage 
//Above you will see a "Divert," which allows you to "jump" to any other point in the story. Note that this one happens without the user clicking or doing anything because I placed it at the end of the paragraph; the program displays the paragraph, then immediately jumps to the next section of the story.
    ==InfoPage==
//Above you will see a "Knot," which allows you to mark a place in your story.  You can then do things like using a divert to move the user to that knot.
        +[Get more information about Poe's story]
            Edgar Allan Poe's short story is a classic mystery story.  It is a very short read, and I have linked to the original story on this game's itch.io page.->InfoPage
//Above you will see a "Choice," - something the user can click on.  When the user clicks on it, anything inside that choice happens - so when the user clicks on t his choice, forexample, it displays the text below and then loops back to the InfoPage section. Using a + symbol before the choice means it does not get "used up" - it will appear again if the user returns to that section of the story. Putting [] brackets around a choice means the actual text of the choice will not display when the user clicks on it - if you want the user to see his or her "responses" you can leave these out.
        +[Get more information about ink]
            ink is a scripting language for creating text-based digital stories that was created by inkle, a game design company.  It is designed to be simple and easy to learn, but can produce relatively complex games.  ink games can be created using the inky editor, which can be found on inkle's website. ink games can be played in a web browser, and ink can also be integrated with 2D and 3D game engines, such as Unreal and Unity.->InfoPage
        +[Go to the game]->GameStart 
    ==GameStart
     #CLEAR
        Why hello! Some have called me mad, but I am happy to relate the story of what I did to the old man and how I ended up here. Could someone in the throes of madness remember such details and answer your questions so calmly and candidly? Of course not! Please, ask me anything you wish - perhaps you wonder about how I knew the old man?
        *[Were you employed by the old man?]->Employed
        *[Was he your father?]->Father
        *[Did you have a relationship with him?]->Relationship
        *[Actually, I'd rather it be a mystery!]->Mystery
//Take a look at the difference between the way the choices above are set up compared to the previous ones: they use a * symbol instead of a + symbol.  Choices with a * symbol get "used up" - once they have been clicked, they cannot be clicked again.  If the user is not going to return to a particular part of the story again, you can use these * choices instead of the + choices. 
    ==Employed
        Why yes! He was my employer! I lived with him and working with him for many years.
        *[Hmm, tell me more...]
       ->Motive
    ==Father
        Why yes! He was my father! I was living with him to care for him in his old age.
        *[Hmm, tell me more...]
        ->Motive
    ==Relationship
        Yes! We were lovers! We had been together for many years.
        *[Hmm, tell me more...]
        ->Motive
    ==Mystery
    ~ Poe = Poe + 1
        Yes, such details are not really interesting, are they?
        *[I'd prefer to know more about other details...]
        ->Motive
    ==Motive==
    #CLEAR
        Ahh yes, of course you want to know more - it is quite an intriguing tale, and someone who is mad would not be able to explain their motives for such an act. So perhaps you are interested in knowing why I committed this dark deed?
        *[Did you do it for his gold?]->Gold
        *[Maybe you were seeking revenge...]->Revenge
        *[Was it a crime of passion?]->Passion
        *[I have heard it was because of his eye!]->Eye
    ==Gold
        Yes, that was it! The old man’s gold always called to me, until one day my greed became overwhelming.
        *[And when did this occur?]
        ->Timeline
    ==Revenge 
        Why yes! I could no longer bear his insults and injuries, and my enmity grew toward the old man until one day I determined to take my vengence.
        *[And when did this occur?]
        ->Timeline
    ==Passion
        Passion, yes! I both loved and hated the old man. On some days he was a wonderful person, but on others his actions were terrible, and my emotions were confused until one day I was drove to murder.
         *[And when did this occur?]
        ->Timeline
    ==Eye
    ~ Poe = Poe + 1
    //The line above updates the "Poe" variable that was created earlier by adding 1 to it - so if it was previously equal to 0, now it will be equal to 1.  You will see this happen several more times throughout this code and each time this happens the Poe variable will increase by 1.
        Yes! That is it! It was because of the old man’s evil, blue, vexing eye! How it endlessly haunted me!
          *[And when did this occur?]
        ->Timeline
    ==Timeline
    #CLEAR
        Ahhh yes... madness often clouds the mind and makes it difficult to remember when things occured. Since I am not mad I can describe precisely the time frame in which the deed was done. But perhaps you'd like to speculate?
        *[I think you did it quickly... what did you use to do it?]->Weapon
        *[I think you watched him first...]->Stalk
    ==Stalk
        {Yes, I did watch him...|Yes, I kept watching him...}{and on the first night...|and on the second night...|and on the third night...|and on the fourth night...|and on the fifth night...|and on the sixth night...|and on the seventh night...|->EightNights}
//ADVANCED: Above you will see an "Alternative." Alternatives are marked with {} brackets; inside, you can put any text or code you want, and use | brackets to mark off chunks of text and code.  Once yot have done so, you can use various logic functions to tell the alternative what to show your user.  If you do not use any logic functions at all, it creates a "Sequence:" The first time the user visits the section the user will see the first set of content, the second time the user visits they see the second set of content, and so on... when the user reaches the last set of text, the sequence will keep displaying that set. In this example, I use the sequence to keep looping the same set of content until the user waits seven times, and then it goes on to the next section of story.
        +[Was that when you attacked him?  What did you use?]->Weapon
        +[{You kept watching, didn't you?|You still kept watching...}]->Stalk
        =EightNights
        ~ Poe = Poe + 1
            Finally, on the eighth night, the old man's evil, vulture-like eye opened... and that was when I set upon him!
            *[That was when you attacked him?  What weapon did you use?]->Weapon
    ==Weapon
        #CLEAR
        Ahh yes, the weapon I used... of course, an important consideration. Madness might drive someone to choose a weapon rashly, but since I am not mad, I thought long about how to do the deed. I'm sure you have some idea of what I used?
        *[Maybe you used a knife?]->Knife
        *[Did you poison him?]->Poison
        *[You used your bare hands, didn't you?]->Strangled
        *[I think you came up with something no one else would consider...]->Suffocated
    ==Knife
        A knife, yes! I used the blade to carve out his eye, then, slashed him through the throat!
        *[What did you do then?]
        ->Finale
    ==Poison
        Yes, poison in his cup... the old man always helped himself to a nightcap before bed...
         *[What did you do then?]
        ->Finale
    ==Strangled
        With my bare hands, yes... Doing the deed with my bare hands satisfied my emotions...
         *[What did you do then?]
        ->Finale
    ==Suffocated
    ~ Poe = Poe + 1
        Yes! A most cunning method, I should think. I suffocated the old man using the bed he was sleepign in! No weapon to find, no poison on his lips, and no signs of choking upon his neck. Only the truly mad would choose such awful means - and since clearly I am not mad, no one would suspect me.
         *[What did you do then?]
        ->Finale
    ==Finale
    #CLEAR
        Then I disposed of the body, of course; someone who is mad would never think to try to hide their crimes. I dismembered the old man, then concealed his remains beneath the floorboards of the house. This took some time, of course, but the evidence of the murder was well hidden, and I knew no one would find the corpse.
        *[Is that when you made your escape?]->Escape
        *[Is that when the police arrived?]->Police
    ==Escape
        {Suffocated: Escape, yes... And of course, because there was no sign of the deed, it took them days to find the body... giving me enough time for you, my good friend, to come to my aid and ensure that I will never be found!->EscapeSuccess}
        {~Escape, yes... And luckily I made good time and got to the port ahead of the police.. giving me enough time for you, my good friend, to come to my aid and ensure that I will never be found!->EscapeSuccess|Escape... yes, I attemped to escape, and I made it far... but they found the old man's body and they caught me just as I was boarding a ship at the port.->EscapeFailed}
//In this alternative I used a "Conditional."  A conditional displays content in an alternative based on whether or not the user has accessed a certain knot or stich.  In this example, the alternative checks to see if the user has seen the "Suffocated" knot; if so, it displays the alternative marked "Suffocated." If not, it displays the other alternative. I've also used a "shuffle" in that second alternative, which allows for randomization - there is an equal chance of each outcome happening, so that code creates a 50 / 50 chance for either a successful escape or a failed escape.
        =EscapeSuccess
            *[Go to the ending.]->FinalEnding
        =EscapeFailed
            *[Go to the ending.]->FinalEnding
//Above you will see "Stiches" - they are marked by a single = sign instead of the == sign used by a Knot.  Stiches work exactly the same way as knots, but you can think of them as "knots within knots:" they are mostly used for story organization so that you can next complicated sections of content inside a bigger section.
    ==Police
        Why yes... three police officers knocked at the door a few hours later, claiming that a neighbor had heard a scream in the night...
        *[Is that when you attacked them?]->Attack
        *[And you lead them to the room where the corpse was hidden?]->RevealEnding
    ==Attack
        Yes! I let them in, and then I fell upon them! I assaulted one viciously, knocking him to the floor! 
        {Knife:{~I then pulled my blade, turning toward the others...->KnifeAttack|However, before I could draw my blade, one of the others clubbed me about the head, knocking me unconscious.->AttackFailed}}
        {~However, before I could attack the others, one of them clubbed me about the head, knocking me unconcious.->AttackFailed|However, before I could attack the others, one of them clubbed me about the head, knocking me unconcious.->AttackFailed|However, before I could attack the others, one of them clubbed me about the head, knocking me unconcious.->AttackFailed|->AttackSuccess}
        =KnifeAttack
            and since I was armed, the element of surprise was on my side. I slashed another through the throat, then set upon the final officer viciously with my knife, stabbing him over and over until he fell. I finished them all three off, then dismemebered them just as I did with the old man. Realizing that my murder of the three officers would arouse further suspicions, I made plans for my escape... and luckily you, my good friend, were there to help me get away!
            *[Go to the ending.]->FinalEnding
        =AttackFailed
            My assault aroused further suspicions, and a search of the house was effected, soon revealing the corpse of the old man. I was arrested for his murder, but at least they are allowing me to see you, my good friend, one last time before I am executed for my crimes!
            *[Go to the ending.]->FinalEnding
        =AttackSuccess
            Though I was outnumbered, my hasty actions surprised them. I quickly turned to the another officer and attacked him as well, grabbing for his club and beating him upon the head with it. I struggled with the third officer, but was able to overcome him after a tussle.  With all of the officers down, I finished them off, then dismemebered them just as I did with the old man. Realizing that my murder of the three officers would arouse further suspicions, I made plans for my escape... and luckily you, my good friend, were there to help me get away!
            *[Go to the ending]->FinalEnding
    ==RevealEnding
    ~ Poe = Poe + 1
        Yes... in my arrogance, I believed that no sign of my deed could be detected... But I did not account for the heart! That horrible, pulsing, beating heart, sounding in my ears even though the man was long dead! I could take it no longer, and I tore up the floorboards myself, revealing his corpse. I was arrested, of course... but at least they are allowing me to see you, my good friend, one last time before I am executed for my crimes!
        *[Go to the ending.]->FinalEnding
    ==FinalEnding
    #CLEAR
        Here is a quick review of your choices throughout the story!
        You decided that the narrator{Employed: was the old man's employee.}{Father: was the old man's child.}{Relationship: was the old man's lover.}{Mystery:'s relationship to the old man was ambigious.} 
        You decided that the motive for the murder was {Gold:gold}{Revenge:revenge}{Passion:passion.}{Eye:the eye}.
        You decided that the murder method was {Knife:a knife}{Poison:poison}{Strangled:strangulation}{Suffocated:suffocation}.
        Your choices led to the story ending with {Escape.EscapeSuccess:the narrator's successful escape attempt.}{Escape.EscapeFailed:the narrator's failed escape attempt.}{Attack.KnifeAttack:the narrator murdering the police with a knife and escaping.}{Attack.AttackFailed:the narrator attacking the police unsuccessfully.}{Attack.AttackSuccess:the narrator attacking the police sucessfully and escaping.}{RevealEnding:the narrator revealing the body to the police.}
   {Poe > 4:
   Your choices led your story to turn out the same way as Poe's original! Perhaps now you can create your own new story?
   - else:
    Your choices led your story to turn out the differently than Poe's original! Perhaps now you can recreate Poe's story?
   }
//The section above probably looks complicated, but it is essentially just a series of alternatives with conditionals inside: each chunk of code is checking to see what knots / stiches the user visited and then displaying ending text based on that.  This is not the only way to make an ending, but it is nice if you want to do a "review" of the chocices your user made! There is also some special code that checks the value of the "Poe" variable and displays a different ending if it is above 4; the "else" is used to display different text if that value isn't above 4.
        ->END
//This is the end of an Ink story!  You should put one of these after your endings so that the file knows things are over!