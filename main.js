var story;
function antigoneAge(name, age) {
  var difference = Math.abs(age - 17);
  if (age !== 17) {
    return `Welcome ${name}! ${age} years old huh? Fun fact: That means you and Antigone share a difference of roughly ${difference} years. The tragedy does not mention a specific age that Antigone was, thus many speculate she was a young girl, late teen years. Please choose continue, and we will get the ball rolling`;
  } else {
    return `Welcome ${name}!, ${age} years old! That's about how old Antigone was! The tragedy does not mention a specific age that Antigone was, thus many speculate she was a young girl, late teen years. Please choose continue, and we will get the ball rolling`;
  }
}
function getStory(name, age) {
  return {
    //   User only has one choice to start so just add a next button
    currentScene: "start",
    start: {
      title: "",
      story: antigoneAge(name, age),
      choices: [
        {
          choice: "Continue",
          destination: "context",
        },
        {
          choice:
            "Nah I don't want to do my own story. Just spoon-feed me the myth, thanks.",
          destination: "specialEnding",
        },
      ],
    },
    context: {
      title: "Some Context",
      story: `<p>Before we get into the story, here is the context. You will be taking the role as a domesticated dog. You also have an owner named Creyawn (he calls the shots). You have a dog brother named Phido, a dog sister named Ismean, along with the other pets that live with you. Creyawn had enacted a new house rule that no funny business should be going on (such as stealing milkbones from the cubbard, horsing around, etc). He is a pretty strict owner: if you are caught doing any of these things, you will cast to the kennel indefinitely. If you are caught showing sympathy for the culprit, you will suffer the same consequence.</p>
        <p>These are the following characters: <br><br>
         <span class="green">${name}</span>, you are the main character. (Antigone) <br>
         <span class="blue">Creyawn</span> is the head honcho <br>
         <span class="blue">Phido</span> and <span class="blue">Ismean</span> are your doggo siblings.<br>
         <span class="red">Cat Henchmen</span> are the house cats. You may be able to conclude that I do not like cats that much. You are correct.
         </p>
          `,
      choices: [
        {
          choice: "Continue",
          destination: "sceneOne",
        },
      ],
    },
    sceneOne: {
      title: "Chat with Ismean",
      story: `You have just learned your brother <span class="blue">Phido</span> has been put in the kennel as punishment for taking a milkbone out of the cabinet, and eating it. It is forbidden to do this. You see <span class="blue">Ismean</span> strut across the living room, and you paw her aside to discuss the situation. What do you say to her?`,
      choices: [
        {
          choice: `"We need to break out Phido. I know what he did was wrong under the rules of the house, but no dog should be kept in kennels as punishment! Let alone our own!"`,
          destination: "antigoneTypeResponse1",
        },
        {
          choice: `"Phido locked up huh? Gee-whiz. Well I suppose he broke the rules..."`,
          destination: "nonAntigone1",
        },
      ],
    },
    antigoneTypeResponse1: {
      title: "Defying the Paw Laws",
      story: `What an Antigone-like response there! <span class="blue">Ismean</span> responds with: "Break <span class="blue">Phido</span> out? Go against <span class="blue">Creyawn</span>? I mean.. We are just dogs! We must recall that we are only dogs. We should not disobey the hooman." Well, you were already set on freeing <span class="blue">Phido</span>. However, as she leaves, you are left to think about what to do. I mean, this is pretty serious after all. Soo....... what do you do?`,
      choices: [
        {
          choice: `Break out Phido`,
          destination: "antigoneTypeResponse2",
        },
        {
          choice: `Leave Phido (Got cold paws)`,
          destination: "leavePhidoEnding",
        },
      ],
    },
    nonAntigone1: {
      title: "Rules are Rules",
      story: `Ok <span class="green">${name}</span>, I see where you're going with this. Yes <span class="blue">Phido</span> is locked up, but he did something that was not right. <span class="blue">Creyawn</span> can't be seen giving favoritism to <span class="blue">Phido</span>! Imagine what the house cats and the house birds would think! <span class="blue">Ismean</span> repsonds with "I agree, <span class="green">${name}</span>! The rules are the rules! we should not act about this. I mean, what can we do? as animals of this house, we don't have much say now do we? No." After Ismean says this, she exits the scene. So, you debate with yourself some more. Finally, you come to a conclusion. What are you going to do, <span class="green">${name}</span>?`,
      choices: [
        {
          choice: `Break out Phido`,
          destination: "antigoneTypeResponse2",
        },
        {
          choice: `Leave Phido`,
          destination: "leavePhidoEnding",
        },
      ],
    },
    antigoneTypeResponse2: {
      title: "Defying the Paw Laws",
      story: `Wow <span class="green">${name}</span>! What made you decide to break out <span class="blue">Phido</span>?`,
      choices: [
        {
          choice: `Hooman Law does not have a higher precedence than that of the divine dog law (no dog should be punished as such)`,
          destination: "antigoneTypeResponse3",
        },
        {
          choice: `Phido is my family! As a sibling of Phido, I will not stand idly by.`,
          destination: "antigoneTypeResponse3",
        },
        {
          choice: `All of the above`,
          destination: "antigoneTypeResponse3",
        },
        {
          choice: `None of the above, I like the adrenaline.`,
          destination: "antigoneTypeResponse4",
        },
      ],
    },
    antigoneTypeResponse3: {
      title: "Defying the Paw Laws",
      story: `Based on your choice, <span class="green">${name}</span>, you and Antigone would be best friends! You <span class="red">break out Phido</span>. The <span class="red">Henchmen</span> strut along by the kennel and notice <span class="blue">Phido</span> missing! Unfortunately, you tend to shed a lot, so they found tons of your fur back at the crime scene: they know it was you. The <span class="red">Henchmen</span> meow at <span class="blue">Creyawn</span>, making him aware of the situation. You have a chat with <span class="blue">Creyawn</span>, and it is determined you will be sentenced to the same fate as <span class="blue">Phido</span>. Now, from here, you will have a choice as to decide your fate. You will become <span class="blue">Creyawn</span>, ONLY FOR A MOMENT. If not, well..... hope you like the kennel.`,
      choices: [
        {
          choice: `Suffer my fate`,
          destination: "kennelEnding",
        },
        {
          choice: `Take over as Creyawn and decide your fate`,
          destination: `creyawnTakeover`
        }
      ],
    },
    antigoneTypeResponse4: {
      title: "You Broke out Phido for Funsies.",
      story: `Interesting choice... Just for fun huh? Well... that's ok too. Not really what Antigone had in mind, but eitehr way, you are breaking Creyawn's house rule in so many ways. So, ${name}, you <span class="red">break out Phido</span>. The <span class="red">Henchmen</span> strut along by the kennel and notice <span class="blue">Phido</span> missing! Unfortunately, you tend to shed a lot, so they found tons of your fur back at the crime scene: they know it was you. They meow at <span class="blue">Creyawn</span>, making him aware of the situation. You have a chat with <span class="blue">Creyawn</span>, and it is determined you will be sentenced to the same fate as <span class="blue">Phido</span>. OR WILL YOU? Now, from here, you will have a choice as to decide your fate. What is <span class="blue">Creyawn</span>, going to do here? You will become <span class="blue">Creyawn</span>, ONLY FOR A MOMENT. If not, well..... hope you like the kennel.`,
      choices: [
        {
          choice: `suffer my fate`,
          destination: "kennelEnding2",
        },
        {
          choice: `Take over as Creyawn and decide your fate`,
          destination: `creyawnTakeover`
        }
      ],
    },
    creyawnTakeover: {
      title: "CHOOSE YOUR FATE",
      story: `"${name}, my dawg. How dare you break out <span class="blue">Phido</span>. I knew that you did once my precious <span class="red">cats</span> meowed at me. ${name}, I am very disappointed with your actions. What will I do with you.... well I must: "`,
      choices: [
        {
          choice: `Lock ${name} up`,
          destination: "kennelEnding3",
        },
        {
          choice: `Let ${name} go`,
          destination: `freeDawg`
        }
      ],
    },
    kennelEnding: {
      title: "Ending: you are cast to the kennel INDEFINITELY",
      story: `Well <span class="green">${name}</span>, you chose to break out <span class="blue">Phido</span>. You were caught, and now you suffer his same consequence. Additionally, This is somewhat similar to what happens to Antigone. You could not withstand the thought of <span class="blue">Phido</span> to be trapped in a kennel. It was your belief that as a brother to <span class="blue">Phido</span> (as well as recognizing the wrongful nature of being locked up), you should free him. At any rate, here is the actual version of the story: <br><br>
      After Antigone's brothers kill each other in a battle for the throne of Thebes, Creon saw the perfect oppurtunity to take the throne. King Creon (their uncle and Antigone's uncle) decrees that Polyneices, who had fought against Thebes, is not to be given a proper burial. Antigone defies this decree and buries her brother's body, believing that it is her duty as a sister and as a devout believer in the gods to honor the dead. Creon orders Antigone to be punished for her disobedience, and she is sentenced to death. As for Creon: well his entire family dies. The burden of losing Antigone became too strong to withstand.Thus, his wife Eurydice and his son Haemon (who was to marry Antigone), both take their own lives.`,
      defaultDestination: "start",
      buttonText: "Back to the start!",
    },
    kennelEnding2: {
      title: "Ending: you are cast to the kennel INDEFINITELY",
      story: `Well <span class="green">${name}</span>, you chose to break out <span class="blue">Phido</span>. You were caught, and now you suffer his same consequence. However, you chose to break Phido out for the adrenaline, so that does not really align with what Antigone had in mind. Her choice was more noble. She believed it was her duty as a sister to Polynices, and as a follower of the gods, to bury her brother. Yours was....well.... it was a choice alright. At any rate, here is the actual version of the story: <br><br>
      After Antigone's brothers kill each other in a battle for the throne of Thebes, Creon saw the perfect oppurtunity to take the throne. King Creon (their uncle and Antigone's uncle) decrees that Polyneices, who had fought against Thebes, is not to be given a proper burial. Antigone defies this decree and buries her brother's body, believing that it is her duty as a sister and as a devout believer in the gods to honor the dead. Creon orders Antigone to be punished for her disobedience, and she is sentenced to death. As for Creon: well his entire family dies. The burden of losing Antigone became too strong to withstand.Thus, his wife Eurydice and his son Haemon (who was to marry Antigone), both take their own lives.`,
      defaultDestination: "start",
      buttonText: "Back to the start!",
    },
    kennelEnding3: {
      title: "Ending: you are cast to the kennel INDEFINITELY",
      story: `Gimminy crickets ${name}!! You chose to lock yourself up after you had the chance to roam free: A FREE DAWG. I am guessing you want to follow the actual story more closely. Creon showed no mercy for Antigone. First off, Creon was not about to let a woman be let go, free of charge. He was also favoring the state law over the divine law. Although the divine law was morally right, Creon had his reasons as to lock up his own niece. Imagine if Creon did not sentence Antigone to death? Well then the tragedy would cease to be a tragedy. Creon would have his family together. Or, perhaps, the city would be thrown into disarray. The public could not live with the thought of Creon letting a woman go un-punished (especially since they are related). At any rate, here is the actual version of the story: <br><br>
      After Antigone's brothers kill each other in a battle for the throne of Thebes, Creon saw the perfect oppurtunity to take the throne. King Creon (their uncle and Antigone's uncle) decrees that Polyneices, who had fought against Thebes, is not to be given a proper burial. Antigone defies this decree and buries her brother's body, believing that it is her duty as a sister and as a devout believer in the gods to honor the dead. Creon orders Antigone to be punished for her disobedience, and she is sentenced to death. As for Creon: well his entire family dies. The burden of losing Antigone became too strong to withstand.Thus, his wife Eurydice and his son Haemon (who was to marry Antigone), both take their own lives.`,
      defaultDestination: "start",
      buttonText: "Back to the start!",
    },
    leavePhidoEnding: {
      title: "Ending: you chose not to save Phido",
      story: `Well <span class="green">${name}</span>, you did not break out <span class="blue">Phido</span>... so life goes on for you and <span class="blue">Creyawn</span>. Hey, I guess this does not end in tragedy. I mean, the rules are the rules. We can't have the animals running around angry because <span class="blue">Phido</span> recieved favoritism. I mean, he also did ignore the rules! Anyways. The key Difference between your version and the actual version: Antigone had a strong belief on what was right, and was firm on choosing divine law over human law. She was firm on choosing her family, against the laws of the state. Thus, if you were to rescue Phido, you would be in line with Antigone in some sense. At any rate, here is the actual version of the story: <br><br>
      After Antigone's brothers kill each other in a battle for the throne of Thebes, Creon saw the perfect oppurtunity to take the throne. King Creon (their uncle and Antigone's uncle) decrees that Polyneices, who had fought against Thebes, is not to be given a proper burial. Antigone defies this decree and buries her brother's body, believing that it is her duty as a sister and as a devout believer in the gods to honor the dead. Creon orders Antigone to be punished for her disobedience, and she is sentenced to death. As for Creon: well his entire family dies. The burden of losing Antigone became too strong to withstand.Thus, his wife Eurydice and his son Haemon (who was to marry Antigone), both take their own lives.`,
      defaultDestination: "start",
      buttonText: "Back to the start!",
    },
    freeDawg: {
      title: "Ending: You are a FREE DAWG",
      story: `Congrats <span class="green">${name}</span>! You are a free doggo! On a darker note, <span class="blue">Creyawn</span> would have never done that! He would have most certainly locked you up. Not only that, Creon also did not let Antigone go. She was a woman, who broke the law. Therefore, you version is wildly different than that of the actual myth. At any rate, here is the actual version of the story: <br><br>
      After Antigone's brothers kill each other in a battle for the throne of Thebes, Creon saw the perfect oppurtunity to take the throne. King Creon (their uncle and Antigone's uncle) decrees that Polyneices, who had fought against Thebes, is not to be given a proper burial. Antigone defies this decree and buries her brother's body, believing that it is her duty as a sister and as a devout believer in the gods to honor the dead. Creon orders Antigone to be punished for her disobedience, and she is sentenced to death. As for Creon: well his entire family dies. The burden of losing Antigone became too strong to withstand.Thus, his wife Eurydice and his son Haemon (who was to marry Antigone), both take their own lives.`,
      defaultDestination: "start",
      buttonText: "Back to the start!",
    },
    specialEnding: {
      title: "The Boring ending",
      story: `Wow ${name}! I guess you did not want to do the story yourself! Well. Okay. You totally missed out. I will just tell you what happens I guess... (that's kind of boring though). So basically: After Antigone's brothers kill each other in a battle for the throne of Thebes, King Creon (their uncle and Antigone's uncle) decrees that Polyneices, who had fought against Thebes, is not to be given a proper burial. Antigone defies this decree and buries her brother's body, believing that it is her duty as a sister and as a devout believer in the gods to honor the dead. Creon orders Antigone to be punished for her disobedience, and she is sentenced to death. As for Creon: well his entire family dies. The burden of losing Antigone became too strong to withstand. Thus, his wife Eurydice and his son Haemon (who was to marry Antigone), both take their own lives.`,
      defaultDestination: "start",
      buttonText: "Let's try this again",
      image: "Boring.png"
    },
  };
}

document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector("#start-button");
  var content = document.querySelector("#content");
  button.addEventListener("click", function () {
    var name = document.querySelector("#name-input");
    var age = parseInt(document.querySelector("#age-input").value);
    console.log(age);
    story = getStory(name.value, age);
    renderScene();
  });
});

function renderScene() {
  var text = "Next";
  var image = "";

  if (story[story.currentScene].image) {
    image = "<img></img>"
  }

  if (story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText;
  }
    //getInputs() --> radio buttons for choice
  content.innerHTML = `
  <h1>${story[story.currentScene].title}</h1>
  <p>${story[story.currentScene].story}</p>
  ${image}
  ${getInputs()}
  <button id = "submit-button">${text}</button>
  `;

  if (story[story.currentScene].image) {
    document.querySelector("img").src = `./img/${story[story.currentScene].image}`
  }
  var button = document.querySelector("#submit-button");
  if (button) {
    button.addEventListener("click", function () {
      getInputValue();
    });
  }
}

function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      story.currentScene = inputs[i].getAttribute("data-destination");
      renderScene();
      return;
    }
  }
  story.currentScene = story[story.currentScene].defaultDestination;
  renderScene();
}

function getInputs() {
  var input = "";
  if (!story[story.currentScene].choices) {
    return "";
  }
  for (var i = 0; i < story[story.currentScene].choices.length; i++) {
    input += `
        <div>
          <input data-destination="${
            story[story.currentScene].choices[i].destination
          }" id="radio${i}" type="radio" name="choices" />
          <label for="radio${i}">${
      story[story.currentScene].choices[i].choice
    }</label>
        </div>`;
  }
  return input;
}
