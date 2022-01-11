const emojipedia = [
  {
    link: "https://www.emojimeanings.net/img/emojis/grinning-face_1f600.png",
    title: "Grinning Face",
    desc: "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth_1f603.png",
    title: "Smiling Face With Open Mouth",
    desc: "Typical smiley face with open mouth and oval eyes. Is in a positive mood, shows its teeth and laughs cheerfully. Expresses enthusiasm: from a cheerful greeting to boundless joy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png",
    title: "Smiling Face With Open Mouth And Smiling Eyes",
    desc: "Smiley's mouth is wide open, its eyes squeezed shut with joy. Laughs loudly, cheerfully and heartily. Only the typical emoji eyes distinguish it from the classical smiley face. Can also be used for sarcasm.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/grinning-face-with-smiling-eyes_1f601.png",
    title: "Grinning Face With Smiling Eyes",
    desc: "Happy face with a mischievous laugh. Represents lightheartedness and exuberance. Full of joy due to an event, excited and agitated or just a bit embarrassed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png",
    title: "Smiling Face With Open Mouth And Closed Eyes",
    desc: "Emoji is on the verge of a fit of laughter because something is so silly or incredibly funny. Also, mischievous or bitchy laughter about an event, or something that happened to another person.. Means the same as \u201cXD\u201c and \u201cX\u201c as a text-based emoticon.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth-and-cold-sweat_1f605.png",
    title: "Smiling Face With Open Mouth & Cold Sweat",
    desc: "Sweaty smile. Relief that a tight situation went well or was coped with positively, e.g. an important appointment. A difficult event is imminent and you are already nervous.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-tears-of-joy_1f602.png",
    title: "Face With Tears of Joy",
    desc: "I am laughing to hard that I can hardly keep myself on my chair! Something is so incredibly funny that you cry laughing. Gets the giggles and can hardly contain himself. This emoji is the most popular and was named Word of the Year 2015.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-tear_1f972.png",
    title: "Smiling face with tear",
    desc: "Smile, even in difficult times. Instead of being really happy, you smile despite the pain. The real feelings are hidden behind a smile. Someone is going through difficult times or has a lot of problems.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rolling-on-the-floor-laughing_1f923.png",
    title: "Rolling On The Floor, Laughing",
    desc: "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of \u201crofl\u201c. Stands for \u201erolling on the floor, laughing\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-smiling-face_263a.png",
    title: "Smiling Face",
    desc: "I am as merry as a lark! Completely satisfied and speechless. Expression of bliss. Shy grin in response to a nice compliment or something great that happened.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-smiling-eyes_1f60a.png",
    title: "Smiling Face With Smiling Eyes",
    desc: "Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-halo_1f607.png",
    title: "Smiling Face With Halo",
    desc: "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/slightly-smiling-face_1f642.png",
    title: "Slightly Smiling Face",
    desc: "A light smile means you are satisfied with yourself and the world. Can make a statement sound friendlier than it might have been meant. Or have a sarcastic meaning when a smile does not actually fit the content.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/upside-down-face_1f643.png",
    title: "Upside-Down Face",
    desc: "Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/winking-face_1f609.png",
    title: "Winking Face",
    desc: "Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/relieved-face_1f60c.png",
    title: "Relieved Face",
    desc: "Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-heart-shaped-eyes_1f60d.png",
    title: "Smiling Face With Heart-Eyes",
    desc: "Happily beaming face with heart-shaped eyes. Insanely in love: with a person, a place or an object. Expresses the extent of love and affection as well as gratitude and is often part of romantic messages. Just does not know what to do with all the luck.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-smiling-eyes-and-three-hearts_1f970.png",
    title: "Smiling face with smiling eyes and three hearts",
    desc: "You are in love, sitting on cloud number nine. The romantic emoji with the enamored expression of the face stands for affairs of the heart.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-throwing-a-kiss_1f618.png",
    title: "Face Throwing a Kiss",
    desc: "Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kissing-face_1f617.png",
    title: "Kissing Face",
    desc: "The face sends kisses to another person. The open eyes and the neutral face are not so much a sign of an intimate kiss but rather a kiss to a friend or relative. \u201cThank you\u201c, \u201cHello\u201c or \u201cGoodbye\u201c. Could also stand for \u201cwhistling\u201d or \u201cduck face\u201d.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kissing-face-with-smiling-eyes_1f619.png",
    title: "Kissing Face With Smiling Eyes",
    desc: "Relaxed face expression, smiling eyes and kissing lips. A kiss to friends or \u201cWe hug and kiss you\u201c to relatives. Can also be used for whistling.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kissing-face-with-closed-eyes_1f61a.png",
    title: "Kissing Face With Closed Eyes",
    desc: "Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-savouring-delicious-food_1f60b.png",
    title: "Face Savouring Delicious Food",
    desc: "Bon appetit! Smiley is licking the corner of its mouth with its tongue. Is hungry, just cooked something very delicious or eaten a whole dish. Often interpreted as a grimace, with tongue outstretched, and used after a funny message or when fooling around.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-stuck-out-tongue_1f61b.png",
    title: "Face With Stuck-Out Tongue",
    desc: "Horseplay with friends, weakening an ironic remark and making sure that the other does not take seriously what has been said. Making fun of others: I knew you'd screw it up.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-stuck-out-tongue-and-tightly-closed-eyes_1f61d.png",
    title: "Face With Stuck-Out Tongue & Tightly Closed Eyes",
    desc: "Making fun of someone, annoying or jokingly offending someone. In provocative news, crude or black humor as well as with glee.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-stuck-out-tongue-and-winking-eye_1f61c.png",
    title: "Face With Stuck-Out Tongue & Winking Eye",
    desc: "Smiley boldly sticks out the tongue, winking with one eye. Has made a joke or wants to flirt with the chat partner. Is carefree and does not mean it seriously.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/grinning-face-with-one-large-and-one-small-eye_1f92a.png",
    title: "Crazy Face",
    desc: "Something is insanely funny. The mood is exuberant - you are totally silly and crazy. Totally freaking out with enthusiasm or joy. Maybe someone has even told an indecent joke.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-one-eyebrow-raised_1f928.png",
    title: "Face With a Raised Eyebrow",
    desc: "With the questioning look on the face, resembles the actor \u201cThe Rock\u201c (Dwayne Johnson). Can be used to express skepticism, disbelief or disapproval.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-monocle_1f9d0.png",
    title: "Face With Monocle",
    desc: "A monocle is a visual aid with only one glass. At the end of the 19th century it was a status symbol. Something seems suspicious! The smiley makes a warning look around. The \u201cupper-class\u201c version of the pondering smiley.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/nerd-face_1f913.png",
    title: "Nerd Face",
    desc: "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-sunglasses_1f60e.png",
    title: "Face With Sunglasses",
    desc: "I'm the king of the world! Mr. Cool Smiley with sunglasses. Is totally self-assured and relaxed. Everything is absolutely easy and cool. Also a symbol for sun, summer holidays, and holidays on the beach.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/grinning-face-with-star-eyes_1f929.png",
    title: "Smirking Face With Starry Eyes",
    desc: "Is very excited about something and already full of anticipation. Overwhelmed and speechless after meeting someone you like a lot. Fascinated by the glory and the world of the stars.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-party-horn-and-party-hat_1f973.png",
    title: "Face with party blower and party hat",
    desc: "That was a wild party or \u201cLet's celebrate\u201c. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smirking-face_1f60f.png",
    title: "Smirking/Whimsical Face",
    desc: "Half a smile that oozes with complacency. Represents irony, coolness or playfulness. Be careful: Somebody could be up to something. Used as an offensive look for flirting or sexual innuendo.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/unamused-face_1f612.png",
    title: "Unamused Face",
    desc: "The grumpy, sullen gaze expresses dissatisfaction. Is not enthusiastic about a thing and shows that. Expression of disinterest and disapproval.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/disappointed-face_1f61e.png",
    title: "Disappointed Face",
    desc: "Face is drooping and directed downwards. Smiley is very sad and frustrated and gives a disappointed impression. Represents sorrow, remorse and regret.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pensive-face_1f614.png",
    title: "Pensive Face",
    desc: "A pensive expression on the face. Emoji looks downwards and needs time to think. Represents melancholy, general dissatisfaction and frustration.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/worried-face_1f61f.png",
    title: "Worried Face",
    desc: "Worried looking face due to a complicated situation or important event. Feels anxious, insecure and uncomfortable.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/confused-face_1f615.png",
    title: "Confused Face",
    desc: "Is confused or does not agree with something. Is uncertain or disappointed, had imagined this in a different way.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/slightly-frowning-face_1f641.png",
    title: "Slightly frowning face",
    desc: "\u201eI\u2019m sorry to hear that\u201c or \u201eWhat you\u2019re saying annoys me a little bit\u201c. The frown can show rejection and anger or a person is surprised, anxious.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-frowning-face_2639.png",
    title: "Frowning Face",
    desc: "Face with very sad mouth angle. Emoji seems unhappy and disgruntled. Dissatisfied with the weather, small mistakes or the behavior of a person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/persevering-face_1f623.png",
    title: "Suffering Face",
    desc: "Emoji is struggling and suffering. After a hard day, ready to throw in the towel. However, has to endure the situation and will have worked it through some day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/confounded-face_1f616.png",
    title: "Confounded Face",
    desc: "How on earth could that happen? Smiley is extremely dismayed and bewildered. Or damn angry: That's almost the final straw!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tired-face_1f62b.png",
    title: "Tired Face",
    desc: "Overtired emoji with narrowed eyes and open mouth. Because of too little sleep, because of what is going on around you, from a person or situation. Is very exhausted and broken. Now needs peace first.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/weary-face_1f629.png",
    title: "Weary Face",
    desc: "Leave me alone! Reluctant smiley with raised eyebrows and mouth downturned, moaning about grueling, unpleasant but inevitable things. Is weepy, upset and completely exhausted, mentally or physically.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-pleading-eyes_1f97a.png",
    title: "Face with begging eyes",
    desc: "The big eyes are shining, devoted facial expression. The emoji is entreatingly begging for something: wants to borrow some money or the car. If you cannot get ahead by asking for something, puppy dog eyes are the last resort to get what you want.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crying-face_1f622.png",
    title: "Crying Face",
    desc: "Smiley with drooping eyebrows is sad and crying. A tear drop is running down the cheek. A picture of misery. Not so much general sadness, but rather pain over one thing. It still hurts to remember a certain event.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/loudly-crying-face_1f62d.png",
    title: "Loudly Crying Face",
    desc: "Emoji is both very sad and distraught, or is dying of laughter. Tears are pouring out of the eyes like a waterfall. Represents injury, pain or defeat. Is also used ironically or something is so funny that you die of laughter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-look-of-triumph_1f624.png",
    title: "Face With Look of Triumph",
    desc: "White steam clouds are coming out of the smiley's nose. Is snorting contemptuously as a sign of superiority. Is proud and triumphing over someone else.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/angry-face_1f620.png",
    title: "Angry Face",
    desc: "Smiley is upset, angry, and totally furious. Reaction to something unfavorable or a sign of rejection. You had better keep out of the person's way.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pouting-face_1f621.png",
    title: "Pouting Face",
    desc: "The pouting face expresses displeasure with a person or situation. Beware, danger of explosion! Furious emoji face. Is annoyed and already sulking with a deep-red face.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/serious-face-with-symbols-covering-mouth_1f92c.png",
    title: "Face With Symbols Over The Mouth",
    desc: "The symbols over the mouth represent cursing. The serious-looking smiley is really upset and keeps using four-letter words. Represents a sudden outburst of fury or frustration.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shocked-face-with-exploding-head_1f92f.png",
    title: "Face With Exploding Head",
    desc: "I cannot believe it. or \u201cThat will blow you away.\u201c Something is very exciting or surprising. The exploding head can also be used to express shock or awe.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flushed-face_1f633.png",
    title: "Flushed Face",
    desc: "Person is shocked, in an uncomfortable situation or has made a mistake. Expresses shame; something is very embarrassing. Reacts to a compliment or a flattering message that the person did not want to receive.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/overheated-face_1f975.png",
    title: "Overheated face",
    desc: "It is so hot, I will get a heat stroke right away! Bright red head, the tongue is hanging from the mouth and drops of sweat are on the forehead. The hottest place in the world lies in Iran: In 2005, the highest temperature of 70.7\u00a0\u00b0C was measured in the Dasht-e Lut desert.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/freezing-face_1f976.png",
    title: "Freezing face",
    desc: "It is so cold, you are about to freeze to death. The smile is almost frozen. Already totally blue in the face from the cold temperature, tortured facial expression. Only a cup of tea, coffee, or the hot tub can help now.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-screaming-in-fear_1f631.png",
    title: "Face Screaming in Fear",
    desc: "Horror-stricken face with two hands, screaming. Is scared stiff, feeling nothing but fear and panic. The creepy emoji can also be used ironically or as a symbol for Halloween.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fearful-face_1f628.png",
    title: "Fearful Face",
    desc: "Scared smiley is frightened and stunned. Seems to be deeply shocked and surprised by an ominous event or intense experience.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-open-mouth-and-cold-sweat_1f630.png",
    title: "Face With Open Mouth & Cold Sweat",
    desc: "Smiley with a blue forehead is shocked and worried. Cold sweat is dripping from the forehead and the mouth is open, dumbfounded. Sweating due to physical or mental stress.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/disappointed-but-relieved-face_1f625.png",
    title: "Disappointed but Relieved Face",
    desc: "Is relieved that something is over, but also disappointed. Has experienced a stressful situation with an unpleasant outcome, for example, a test. Has gotten out of a difficult or delicate situation, but not without bumps and bruises.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-cold-sweat_1f613.png",
    title: "Face With Cold Sweat",
    desc: "Stress or worry about a bad experience. Things went different than they should have. The school is stressing or there is still so much to do in the office. You are tired, but still have so much work to do.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hugging-face_1f917.png",
    title: "Hugging Face",
    desc: "Smiley with red cheeks is stretching out its hands toward you. Wants to hug you. It's an open and cordial gesture and an expression of warmth and friendliness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/thinking-face_1f914.png",
    title: "Thinking Face",
    desc: "The thinker's pose: Thoughtful face with the characteristic hand on the chin. Puts a statement, a person's intelligence, or an idea into question. Is mulling over something or thinking about a brilliant idea.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-smiling-eyes-and-hand-covering-mouth_1f92d.png",
    title: "Face With Hand Over The Mouth",
    desc: "Expresses shock, surprise, or a sudden perception. Typical gesture, which shows that the other person is not telling the truth. Thinks he's being lied to.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-finger-covering-closed-lips_1f92b.png",
    title: "Exhorting Face",
    desc: "Shhh! is meant to silence others. Or someone is confiding a secret that should not be retold. Nicely telling your counterpart to shut up.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lying-face_1f925.png",
    title: "Lying Face",
    desc: "As with Pinocchio, the nose becomes longer with each lie, which exposes him as a liar. Symbol of a falsehood, boast, or an unlikely story.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-without-mouth_1f636.png",
    title: "Face Without Mouth",
    desc: "Emoji without a mouth. Is speechless, has no words. Someone does not want to or cannot say anything about a specific topic. Used in difficult, embarrassing or bad conversations. Imagine what it would say if it had a mouth!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-in-clouds_1f636-200d-1f32b.png",
    title: "Face in clouds",
    desc: "This is nebulous! The face is surrounded by fog or clouds. Those who have their heads in the clouds are either dreamy or do not want to admit reality. The view of something is blurred. There may also be a state of confusion or bliss.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/neutral-face_1f610.png",
    title: "Neutral Face",
    desc: "Pokerface: Expressionless face with a neutral look. Unimpressed, awkward or indifferent.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/expressionless-face_1f611.png",
    title: "Expressionless Face",
    desc: "Face without any emotional expression, with closed eyes and mouth. Tired, annoyed, emotionless, no patience, the end of the flagpole is reached. The right words are missing to continue a conversation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/grimacing-face_1f62c.png",
    title: "Grimacing Face",
    desc: "This is really embarrassing for me now! Expression of nervousness, awkwardness or embarrassment. Scared and guilty smile: Someone has done something stupid and tries to resolve the tense situation by grimacing.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-rolling-eyes_1f644.png",
    title: "Face With Rolling Eyes",
    desc: "Smiley is rolling its eyes. Finds the current situation or a person boring or annoying. Will disregard the message.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-exhaling_1f627-200d-1f4a8.png",
    title: "Smiley exhaling audibly",
    desc: "The emoji exhales noisily. Maybe with relief (phew, that was a close thing!) or with disappointment. There is something we may not like at all. Can also mean that the day was very exhausting and now you feel fatigue.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hushed-face_1f62f.png",
    title: "Speechless Face",
    desc: "Oh my goodness! The unpleasantly surprised face is lost for words due to a shocking affair. In response to bad behavior or a rude message. Nothing can be added to what has just been said.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/frowning-face-with-open-mouth_1f626.png",
    title: "Frowning Face With Open Mouth",
    desc: "I cannot believe you did that! Expresses horror as well as fear, worry and mistrust. In response to a negative surprise. Got caught red-handed and just feels totally taken by surprise.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/anguished-face_1f627.png",
    title: "Anguished Face",
    desc: "Something unexpected happened! Face with raised eyebrows, open eyes and open mouth. A mixture of shock and disappointment. Represents fear, frustration, horror and unexpected, negative surprises.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-open-mouth_1f62e.png",
    title: "Face With Open Mouth",
    desc: "Wow, I'm impressed! Perplexed smiley is looking completely puzzled. Is positively or negatively surprised: from mildly astonished to completely steamrolled.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/astonished-face_1f632.png",
    title: "Astonished Face",
    desc: "That's incredible, I had no idea! Astonished face with wide open mouth and eyes: overwhelmed with surprise, completely shocked or sheer incredulity. Can hardly believe what just happened!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sleeping-face_1f634.png",
    title: "Sleeping Face",
    desc: "Good night and sweet dreams! In comics or cartoons, zZz above the head stands for sleeping characters. The emoji is tired, wants to go to bed or is just about to fall asleep from boredom.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/drooling-face_1f924.png",
    title: "Drooling Face",
    desc: "Slobbering face, the saliva flowing from the corner of the mouth. Represents desire for a person, delicious food, the new car, or the anticipation of an event. Expression of extreme interest and desire.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sleepy-face_1f62a.png",
    title: "Sleepy Face",
    desc: "Emoji is dead tired and would love to sleep now. The bubble emerging from the nose is a typical manga symbol for a sleeping character. Or as an expression that a conversation or excursion is extremely boring and drowsy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dizzy-face_1f635.png",
    title: "Dizzy Face",
    desc: "I feel dizzy! Smiley with crossed eyes and open mouth is totally dazed. Is confused and so dizzy it doesn't know which side is up. Also symbolizes strong emotions or drunkenness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-spiral-eyes_1f635-200d-1f4ab.png",
    title: "Face with spiral eyes",
    desc: "The mouth is open, the eyes are spirals. The emoji has circulatory problems and is dizzy. Something or someone has cast a spell over us, we are hypnotized. There may be disorientation, e.g. in a foreign city or in a department store.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/zipper-mouth-face_1f910.png",
    title: "Zipper-Mouth Face",
    desc: "Smiley with zipper instead of a mouth is keeping a secret for itself. Lips are closed or chat partner's lips should remain closed. Can also mean silence because you cannot find the right words.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-uneven-eyes-and-wavy-mouth_1f974.png",
    title: "Face with unequal eyes and wavy mouth",
    desc: "Eyes half open, half closed, slanted mouth, flushed cheeks. The emoji has a confused facial expression: due to tiredness or the currently confused emotional world. Also known as drunken face.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/nauseated-face_1f922.png",
    title: "Nauseated Face",
    desc: "Disgusted smiley, which is already green with sickness and nausea. Might mean disgust, reluctance, or aversion, or stand for sickness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-open-mouth-vomiting_1f92e.png",
    title: "Face With Open Mouth, Throwing Up",
    desc: "I could almost throw up. Might show how drunk the person was last night. The puking smiley can also state what you think of something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sneezing-face_1f927.png",
    title: "Sneezing Face",
    desc: "A sneezing face with eyes closed, blowing its nose into a handkerchief. I caught a cold! Shows that someone is ill or feels uncomfortable.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-medical-mask_1f637.png",
    title: "Face With Medical Mask",
    desc: "The mask is for protection. Either to protect yourself or others from infection. Someone is in the hospital, has to go to the doctor or has caught a disease. Wearing the masks is widely spread in Asia.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-thermometer_1f912.png",
    title: "Face With Thermometer",
    desc: "The sad face with the thermometer in the mouth expresses illness. Caught a flu or other illness that is associated with fever. Or is worried about getting sick.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/yawning-face_1f971.png",
    title: "Yawning face",
    desc: "I am dog-tired! The eyes are closed and the hand covers a yawn. The night was too short, you couldn't get enough sleep. Indication that a topic or a person is not of interest, but rather boring.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-head-bandage_1f915.png",
    title: "Face With Head Bandage",
    desc: "Sad looking face with head bandage: Someone is ill, had an accident, or is in hospital. The bandage symbolizes health problems.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/money-mouth-face_1f911.png",
    title: "Money-Mouth Face",
    desc: "Smiley has dollar signs in its eyes, the tongue is a banknote. Could have won something or is sensing a financial chance. Implicates a sense of wealth.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-cowboy-hat_1f920.png",
    title: "Face With Cowboy Hat",
    desc: "Howdy! Typical American smiley with cowboy hat from the Wild West. Stands for freedom, nature, and hard work.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/disguised-face_1f978.png",
    title: "Disguised face",
    desc: "Face with funny glasses and false eyebrows, bulbous nose and mustache stuck on. Someone wants to hide himself or their intentions. As a disguise: You want to get to the bottom of something unrecognized. Symbolic for carnival.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-face-with-horns_1f608.png",
    title: "Smiling Face With Horns",
    desc: "Mischievously grinning goblin smiley with small devil horns. Wants to cause trouble, is a real teaser or planning something ugly just now.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/imp_1f47f.png",
    title: "Goblin",
    desc: "The goblin is frowning, looking grim, and does not feel like joking. You should be particularly careful. Represents mischievous acts or remarks as well as treachery.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/japanese-ogre_1f479.png",
    title: "Japanese Ogre \u201cNamahage\u201c",
    desc: "The Oni represents a demon and spirit of hell in Japanese mythology. An ugly figure with horns, chasing evil souls. Traditional disguise on New Year's Eve to ward off evil spirits.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/japanese-goblin_1f47a.png",
    title: "Japanese Goblin",
    desc: "The Tengu (literally: heavenly dog) is an evil and magical being from Japan. Has supernatural powers and brings forth disaster. The red mask has eyebrows and a beard and a noticeably long nose.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clown-face_1f921.png",
    title: "Clown Face",
    desc: "Stop fooling around! Made-up clown face from the circus world. Stands for fun and entertainment, but can also trigger fears in certain people - at least since Stephen King's horror movie \u201cIt\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pile-of-poo_1f4a9.png",
    title: "Pile of Poo",
    desc: "Crap, oh no! Such a sh**! The comic version of a pile of feces. Can describe a situation, replace the swear word, or criticize a statement of the chat partner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ghost_1f47b.png",
    title: "Ghost",
    desc: "The funny-smiling ghost is too cute to frighten others or cause harm. Symbol for Halloween or jokingly for creepy things, e.g. movies.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/skull_1f480.png",
    title: "Skull",
    desc: "This is extremely dangerous! The skull emoji is used in unpleasant situations or to symbolize terrible things. Can stand for a real threat, but can also be used sarcastically or humorously.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/skull-and-crossbones_2620.png",
    title: "Skull and Crossbones",
    desc: "Be careful! The death's head with crossed bones is a symbol of death. A warning sign for toxic substances and hazards.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/extraterrestrial-alien_1f47d.png",
    title: "Alien",
    desc: "The aliens are here! Symbol for an extraterrestrial being. However, smiles friendly and comes in peace.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/robot-face_1f916.png",
    title: "Robot Face",
    desc: "The mouth of the robot face resembles a grimace. It's like being remotely controlled and working like a robot. Can also be used for deadhearted people or refer to artificial intelligence and sci-fi movies.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/jack-o-lantern_1f383.png",
    title: "Pumpkin lantern",
    desc: "Trick or treat! A candle is placed in a hollowed-out pumpkin with a grimace. The Halloween tradition was brought to the US by Irish immigrants. The emoji is usually sent as a symbol for Halloween.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-cat-face-with-open-mouth_1f63a.png",
    title: "Smiling Cat Face With Open Mouth",
    desc: "Laughing cat with open mouth. Means fun and smirking, mostly used by cat lovers. The cattiness might stand for femininity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/grinning-cat-face-with-smiling-eyes_1f638.png",
    title: "Grinning Cat Face With Smiling Eyes",
    desc: "Cat face, which is in a good mood. The eyes are smiling, it's grinning broadly and very satisfied. The chat partner can have fun with this cat.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cat-face-with-tears-of-joy_1f639.png",
    title: "Cat Face With Tears of Joy",
    desc: "Cat emoji with clenched eyes and open mouth. Is enthusiastic and helpless with laughter. Something is extremely funny or silly. You are relieved and have tears of joy in your eyes.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smiling-cat-face-with-heart-shaped-eyes_1f63b.png",
    title: "Smiling Cat Face With Heart-Eyes",
    desc: "Overjoyed, laughing cat face with hearts on the eyes. Is very much in love or very grateful for a friendly service. Likes something very much and expresses admiration that way.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cat-face-with-wry-smile_1f63c.png",
    title: "Cat Face With Wry Smile",
    desc: "Cat is laughing daringly with boldly raised corners of the mouth. It mocks you, is sarcastic or having fun at your expense. Might fancy a flirt. However, you had better be cautious.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kissing-cat-face-with-closed-eyes_1f63d.png",
    title: "Kissing Cat Face With Closed Eyes",
    desc: "Cat with red cheeks and eyes closed. Its lips are pointed and it wants to kiss you. Cats have a reputation for being very choosy and tend to show affection rather reluctantly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/weary-cat-face_1f640.png",
    title: "Weary Cat Face",
    desc: "Cat is tired and exhausted. It has got hollow, white eyes and is holding its paws next to the mouth. Needs a break right now. Reaction to something scandalous or shocking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crying-cat-face_1f63f.png",
    title: "Crying Cat Face",
    desc: "Cat face with down-turned eyebrows and corners of the mouth. A tear is running down the cheek. Just received bad news. Expression of empathy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pouting-cat-face_1f63e.png",
    title: "Pouting Cat Face",
    desc: "Pouting face of a grumpy cat. The corners of the mouth and the whiskers are pointing downwards. Is in a bad mood, frustrated, and has turned away angrily. Known as the Grumpy Cat, a grumpy-looking cat that became an Internet phenomenon.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/palms-up-together_1f932.png",
    title: "Holding hands up, palms against each other",
    desc: "I'm praying that everything will go smoothly today or \u201cCan you lend me some money please?\u201c The upturned palms represent a form of praying or asking for handouts. In American sign language, the symbol of an open book.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/open-hands-sign_1f450.png",
    title: "Open Hands",
    desc: "The two opened hands are stretched toward the counterpart. Represents affection and openness. Could also stand for a hug.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-raising-both-hands-in-celebration_1f64c.png",
    title: "Person Raising Both Hands In Celebration",
    desc: "Hallelujah! Hands are stretched upwards to celebrate. Is having a party, dancing wildly and friskily. Is in a good mood or having a lot of fun. Can also stand for \u201cBanzai\u201d, a Japanese cheer that brings luck and joy for 10,000 years.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clapping-hands-sign_1f44f.png",
    title: "Clapping Hands",
    desc: "Bravo, very well done! Emoji shows two clapping hands. Is mostly used for expressing consent and appreciation. Can also be used sarcastically, if something truly doesn't deserve any applause!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/handshake_1f91d.png",
    title: "Handshake",
    desc: "Shake on it! The handshake can stand for a greeting or farewell, a sign of agreement or for a deal. Two people are holding hands or, in a figurative sense, to give someone a helping hand.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/thumbs-up-sign_1f44d.png",
    title: "\u201cThumbs-Up\u201d Sign",
    desc: "Well done! Hand with thumb turned up. Stands for commitment, agreement and approval! Caution: In Arab countries, this is interpreted as showing the two fingers.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/thumbs-down-sign_1f44e.png",
    title: "Thumbs Down Sign",
    desc: "That was really bad! Thumb turned down stands for rejection, disapproval and dislike. Also known as the false death myth meaning with Roman gladiators.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fisted-hand-sign_1f44a.png",
    title: "Fist Hand",
    desc: "The stretched-out fist means \u201cCheck!\u201c an encouragement. Welcome between friends or gesture of agreement. Can also be interpreted as a threatening punch.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/raised-fist_270a.png",
    title: "Raised Fist",
    desc: "I can do it! The raised fist implies power and strength. Stands for something you believe in. also meant as a political gesture and symbol of defiance, solidarity and resistance.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/left-facing-fist_1f91b.png",
    title: "Fist Pointing Left",
    desc: "In conjunction with other emojis a sign of a hit. Casual form of greeting. The gesture \ud83e\udd1c\ud83e\udd1b is known as fist check, fist greeting or colloquially as a ghetto fist.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/right-facing-fist_1f91c.png",
    title: "Fist Pointing Right",
    desc: "A hand clenched in a fist pointing to the right. The hand gesture is used to greet friends as a sign of respect as well as approval or congratulation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hand-with-index-and-middle-fingers-crossed_1f91e.png",
    title: "Hand With Crossed Fingers",
    desc: "The closed fist with crossed index and middle fingers is used to wish someone luck. Children usually use this gesture to annihilate a promise or oath.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/victory-hand_270c.png",
    title: "Victory Hand",
    desc: "No offense! Symbol of peace, which became known in the 60s by the hippies. \u201cV\u201d hand signal stands for victory. In Great Britain, can be seen in an insulting way as a woman with spread-out legs.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/i-love-you-hand-sign_1f91f.png",
    title: "I Love You Gesture",
    desc: "In the American sign language, the fist with outstretched little finger, index finger and thumb means \u201cI love you\u201c. The ILY sign mainly conveys a general, positive message.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sign-of-the-horns_1f918.png",
    title: "Sign of the Horns",
    desc: "Rock on! Little finger and forefinger are forming horns. The metal horn is a gesture of metal rock fans. Can have many meanings, such as unfaithfulness (by horny husband/wife), sign to ward off misfortune, devil's salutation or sacred gesture in Buddhism.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ok-hand-sign_1f44c.png",
    title: "Ok Hand Sign",
    desc: "Thumb and forefinger form an O. Symbol for \u201cOkay!\u201c Sign of approval, agreement or that everything is okay. Careful, in some countries it is considered offensive and insulting (\u201cyou a**hole\u201c).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pinching-hand_1f90f.png",
    title: "Pinching hand",
    desc: "Just this tiny bit is missing! Thumb and forefinger are close together to grab a small object. Indication that something is small or only available in small quantities.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pinched-fingers_1f90c.png",
    title: "Pinched fingers",
    desc: "What do you want?! \u201cMa che vuoi\u201d is one of the most famous gestures in Italy. Universally applicable when someone asks for something or when you wish for something yourself. The more often the gesture is used, the more impatient or frustrated the other person is.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-left-pointing-backhand-index_1f448.png",
    title: "Back Of Hand Pointing To The Left",
    desc: "Right this way! Trigger finger shows to the left. Is meant to point in a certain direction, indicate something or mark the important part of a message.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-right-pointing-backhand-index_1f449.png",
    title: "Back Of Hand Pointing To The Right",
    desc: "Trigger finger shows to the right. Draws your attention to something following or wants to remind you of something. Can also be an admonishing wiggling of the trigger finger.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-up-pointing-backhand-index_1f446.png",
    title: "Back Of Hand Pointing Upwards",
    desc: "Lifting the forefinger up as a warning or to emphasize a statement. Can also mean \u201cI've got time\u201c or \u201cI'm in it\u201c. Wants to draw attention to something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-down-pointing-backhand-index_1f447.png",
    title: "Back Of Hand Pointing Downwards",
    desc: "Hand with raised forefinger pointing down. You want to draw attention to something: look at the text below! Or you don't feel well, you are feeling down.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-up-pointing-index_261d.png",
    title: "Up Pointing Index",
    desc: "The raised forefinger stands for a threat: Beware! Could also be a gesture of instruction. Someone has an announcement to make or something important to say.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/raised-hand_270b.png",
    title: "Raised Hand",
    desc: "Emoji shows a raised palm with fingers. It stands for a welcome or farewell as well as for \u201cStop, I've had enough!\u201c High five want to congratulate or celebrate a success.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/raised-back-of-hand_1f91a.png",
    title: "Raised Back of Hand",
    desc: "A raised hand, which is shown in reverse position (back of the hand is in the front). Someone wants to draw attention to himself, e.g. to ask something or to signalize his participation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/raised-hand-with-fingers-splayed_1f590.png",
    title: "Raised Hand With Fingers Splayed",
    desc: "\u201cDon't come closer\u201d or \u201cStop, wait!\u201d The spread out hand can also indicate the number 5 or a high five.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/raised-hand-with-part-between-middle-and-ring-fingers_1f596.png",
    title: "Mr. Spock Greeting",
    desc: "Fingers are spread between the ring and middle finger, creating a \u201cV\u201c. A hand sign based on sacred Jewish letters. The gesture has become known by the series \u201cStar Trek\u201c and Mr. Spock: Live long and in peace.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/waving-hand-sign_1f44b.png",
    title: "Waving Hand",
    desc: "Hello and goodbye! Have a good trip! A friendly waving hand. Can be used as a welcome or farewell. Or sarcastically, if you wished someone or something would disappear.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/call-me-hand_1f919.png",
    title: "\u201cCall Me\u201d Hand Sign",
    desc: "The closed fist with abducted thumb and little finger has a phone-like shape. \u201cCall me\u201c or \u201cLet's have a call soon\u201c. Similar to the surfer greeting \u201cHang loose\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flexed-biceps_1f4aa.png",
    title: "Tense Biceps",
    desc: "\u201cYou can do that!\u201d or \u201cI feel strong!\u201d Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mechanical-arm_1f9be.png",
    title: "Mechanical arm",
    desc: "Be as strong as a robot! The high-tech arm prosthesis enables amputees to move their arms and hands. Expresses enthusiasm for Star Wars, robot technology, bionics or science fiction.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/reversed-hand-with-middle-finger-extended_1f595.png",
    title: "Reversed Hand With Middle Finger Extended",
    desc: "In western culture, the middle finger smiley is used as a rude and offensive gesture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/writing-hand_270d.png",
    title: "Writing Hand",
    desc: "Right hand writing with a pen. Is related to writing. I'll contact you and write a message to you. There will be a test in school. You're writing a poem for your honey.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-with-folded-hands_1f64f.png",
    title: "Person With Folded Hands",
    desc: "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a \u201chigh five\u201d or to say thank you.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/foot_1f9b6.png",
    title: "Foot",
    desc: "Finally walking barefoot again. You are standing on your own feet or would like to receive a foot massage from your sweetheart. Some like feet, others hate them, some have smelly feet and others have their feet well-tended. Our feet carry us and are the symbolic foundation of our body.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/leg_1f9b5.png",
    title: "Leg",
    desc: "You have got great legs or \u201cI am going to do leg training tomorrow\u201c. In the course of our lives, our legs carry us for 130.000 km. That is about three times around the earth. Man, as the only creature, is moving on two legs. The leg contains our body's largest bone, the largest joint and the largest muscle.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mechanical-leg_1f9bf.png",
    title: "Mechanical leg",
    desc: "We're watching RoboCop! In connection with leg amputees or accessibility. Expresses an interest in science fiction or robot technology. The legs are as stiff as those of a robot: the soccer or leg training in the studio was too hard.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lipstick_1f484.png",
    title: "Lipstick",
    desc: "I'll dress up! The lipstick beautifies millions of women's lips worldwide. The signal color red is associated with passion, liveliness and attractiveness. Stands for parties, fashion and fun. Often also combined with e.g. the dancing emoji \ud83d\udc84\ud83d\udc83 to plan a fun evening.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kiss-mark_1f48b.png",
    title: "Kiss Mark",
    desc: "Red sensual lip print. Would like to give you a kiss, thereby leaving an imprint of the lipstick. Can mean \u201cYou're so nice\u201d or \u201cMany thanks!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mouth_1f444.png",
    title: "Mouth",
    desc: "A slightly opened mouth and red, full lips have a strong, attractive signaling effect on both sexes. \u201cI'll send you a kiss\u201c or \u201cTonight I'm going to sing at a party\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tooth_1f9b7.png",
    title: "Tooth",
    desc: "I have got a toothache or someone is getting a bit long in the tooth. You need to brush your teeth now or you indulge in your sweet tooth. Enamel is the hardest material in the human body. 22 million bacteria live in a mouth.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bone_1f9b4.png",
    title: "Bone",
    desc: "I am chilled to the bone. You work your fingers to the bone or you are skin and bones. Dog treat or part of the body. The human skeleton consists of 200 bones weighing about 15 % of the total body weight.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tongue_1f445.png",
    title: "Tongue",
    desc: "Sticking out the tongue is a naughty gesture and a childish sign of defiance. Can be used to reinforce a joke or to tease and provoke. I am in a good mood and ready for jokes!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ear_1f442.png",
    title: "Ear",
    desc: "The ear emoji can mean \u201cI can hear something\u201d or \u201cYou have my full attention\u201d. The ear is also one of the erotic zones of man and woman.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ear-with-hearing-aid_1f9bb.png",
    title: "Ear with hearing aid",
    desc: "I cannot hear you! 466 million people worldwide are hard of hearing. Hearing aids improve the quality of life. Perhaps you have a hearing aid yourself, are hearing impaired, or don't want to hear certain things at all.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/nose_1f443.png",
    title: "Nose",
    desc: "The nose generally stands for the olfactory sense. Emoji indicates that something has a strong scent. Depending on the context, this may be nice or unpleasant.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/footprints_1f463.png",
    title: "Footprints",
    desc: "Two footprints suggest difficulties, which will soon be overcome by your own efforts. Also used as a symbol for a baby's feet, or: I'm on the way!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eye_1f441.png",
    title: "Eye",
    desc: "I have an eye on you! Something is interesting to watch or is being observed. In ancient cultures often a religious sign, such as the eye of Horus or the evil eye in the Orient.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eyes_1f440.png",
    title: "Eyes",
    desc: "Beware, someone is watching you! Two eyes are looking to the left. Something is being watched or checked. You're under observation!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/brain_1f9e0.png",
    title: "Brain",
    desc: "Use your brain!, \u201cI am taxing my brain right now\u201c, or \u201cbrainwashing someone\u201c. Our most important organ controls our body and personality. The human brain weighs 1.3 kg, consists of 60 % fat and consumes 20 % of the basal metabolic rate.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/anatomical-heart_1fac0.png",
    title: "Anatomical heart",
    desc: "You\u2019ve got a big heart! The heart symbolizes love but also life. The heart beats around 3 billion times in the course of a lifetime. The lifelike image is often used in connection with a doctor or health.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lungs_1fac1.png",
    title: "Lungs",
    desc: "I should stop smoking! Anatomically correct image of the lungs. The vital organ is responsible for breathing. In connection with the respiratory tract, health or doctors.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/speaking-head-in-silhouette_1f5e3.png",
    title: "Talking Head",
    desc: "The silhouette of a talking face. Can refer to rumors or to a person who likes to talk a lot. The news is already circulating!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bust-in-silhouette_1f464.png",
    title: "Silhouette of a Bust",
    desc: "Silhouette of a person, a shadow. Represents anonymity, secrets and unknown things. Is often used as a symbol for a user or a guest profile in software or with computers.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/busts-in-silhouette_1f465.png",
    title: "Silhouette Of Two Busts",
    desc: "The silhouette of two people. A friend you can rely on is standing behind you. Also symbolizes a community or group.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/people-hugging_1fac2.png",
    title: "People hugging",
    desc: "We\u2019ll always be there for one another! You could use some affection or as a gesture that you would like to hug the other person. A hug expresses physical closeness, affection, comfort and security.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baby_1f476.png",
    title: "Baby",
    desc: "A baby face with a ringlet. Emoji can indicate an imminent pregnancy or the desire for a child.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/girl_1f467.png",
    title: "Girl",
    desc: "Face of a smiling girl with cute pigtails. Represents youth and a happy childhood. \u201cDon't be girlish\u201c or \u201cgirl Friday\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/child_1f9d2.png",
    title: "Child",
    desc: "I want to have many children in the future! The gender-neutral variant of a child's face. Someone behaves childish or immature and should grow up urgently!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/boy_1f466.png",
    title: "Boy",
    desc: "Male child, between eight and twelve years old. Is related to children, childhood and family. Can also be used to signal that someone is behaving childishly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman_1f469.png",
    title: "Woman",
    desc: "She is a great woman! The emoji shows an adult female face. Refers to gender and can be used for a mother through a businesswoman to the female neighbor.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/adult_1f9d1.png",
    title: "Adult",
    desc: "The adults are in the majority today! The gender-neutral version of an adult person. It's about a group or an individual whose gender does not matter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man_1f468.png",
    title: "Man",
    desc: "Male adult face with mustache. Simple and common emoji. Can generally be used for men, e.g. you talk about someone whose name you do not know.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-red-haired_1f469-200d-1f9b0.png",
    title: "Red-haired woman",
    desc: "Julianne Moore, Nicole Kidman or Pippi Longstocking. In Germany, only two percent have naturally red hair, worldwide about one percent, and the rest had a little help. You are proud of your hair color or would like to announce that you have been at the hairdresser's.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-red-haired_1f468-200d-1f9b0.png",
    title: "Red-haired man",
    desc: "Prince Harry, Vincent van Gogh, Boris Becker or Robert Redford. Red hair is rare: Only about one to two percent of the world's population have this hair color. Mostly in combination with fair skin and freckles. At 13 %, Scotland has the highest proportion of redheads, followed by Ireland and Wales.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-curly-haired_1f469-200d-1f9b1.png",
    title: "Curly-haired woman",
    desc: "Woman with curly hair. The emoji illustrates how one self or other people look like. You have just come from the hairdresser's or want to change your hair into a head of curls for the party. It is genetically determined if someone has straight or curly hair.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-curly-haired_1f468-200d-1f9b1.png",
    title: "Curly-haired man",
    desc: "A man with curly hair: Australian surfer boy or guy with pompadour. This emoji illustrates the look of the new boyfriend, colleague or neighbor. Only 15% of the people of European descent have curls.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/blonde-woman_1f471-200d-2640-fe0f.png",
    title: "Blond woman",
    desc: "Marilyn Monroe or Pamela Anderson. Blond angel, choir girl, blond bombshell, silly or sexpot: No other hair color is more tainted with stereotype. Worldwide, only 2% are naturally blond, though, the rest had a little help.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/blond-man_1f471-200d-2642-fe0f.png",
    title: "Blond man",
    desc: "The attractive Swede, the stereotype of a surfer, Daniel Craig or the nice new neighbor. Only 2% of the world's population is blond. Most blondies live in Northern Europe. Men rarely stay blond, their hair gets darker with increasing age.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-white-haired_1f469-200d-1f9b3.png",
    title: "White-haired woman",
    desc: "This has given me a lot of gray hairs! Or \u201cI need to dye my hair!\u201c Gray hair stands for wisdom, kindness and happiness. Dyed \u201cgranny hair\u201c is a trend. Natural gray is a taboo, at least with the celebrities.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-white-haired_1f468-200d-1f9b3.png",
    title: "White-haired man",
    desc: "Aging with dignity or growing gray hair because of stress. Due to genetic factors or external influences, the hair becomes gray. Fact: Eight out of every 10 women find gray-haired men attractive. Represents maturity and experience.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-bald_1f469-200d-1f9b2.png",
    title: "Bald woman",
    desc: "Sin\u00e9ad O'Connor or Britney Spears. The clear-cut can stand for a fashion statement, expression of sexual determination but also for a serious illness. Also a trend in the social media (#boldandbadchallenge).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-bald_1f468-200d-1f9b2.png",
    title: "Bald man",
    desc: "I am slowly getting bald! Vin Diesel, Bruce Willis or Jason Statham \u2013 many action heroes are bald. Represents strength and dominance. 66% of all men over the age of 35 are affected by loss of hair. Symbol of the aging process. But there can also be a serious illness behind the hair loss.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bearded-person_1f9d4.png",
    title: "Bearded person",
    desc: "He is a real nature-boy or \u201cYou look like a hipster\u201c. Full beard, goatee beard, mustache or three-day beard. Symbol of maturity, masculinity and wisdom of the age.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-beard_1f9d4-200d-2640-fe0f.png",
    title: "Woman with beard",
    desc: "The long-haired woman has a beard. Perhaps due to genetic predisposition or a hormonal disorder. She had to be a \u201cman\u2019s man\u201d, that is, meet the expectations that are placed on men in particular. A beard stands for power, strength and self-confidence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-beard_1f9d4-200d-2642-fe0f.png",
    title: "Man with beard",
    desc: "Man with long hair and hair growing on his face. With this, beard lovers express individuality, but above all potency and masculinity. Formerly a typical symbol of a barbarian, now a fashion trend.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/older-woman_1f475.png",
    title: "Elderly Woman",
    desc: "Go to the granny farm! A friendly elderly woman with glasses and a bun. Can refer to a family member or the nice, elder neighbor.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/older-adult_1f9d3.png",
    title: "Elderly adult",
    desc: "This rather concerns the older generation! Not yet old, but neither young anymore. Gender-neutral version of an older person. It is about people of mature age in general, where gender does not matter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/older-man_1f474.png",
    title: "Old Man",
    desc: "Friendly looking elderly gentleman with wrinkles and bald head. Represents aging in general, a father figure, the grandfather, possibly a teacher. The emoji can express how you feel after a hard day or call your chat partner old-fashioned.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-with-gua-pi-mao_1f472.png",
    title: "Man with Chinese cap",
    desc: "The Asian man is wearing a traditional Chinese headgear, called gau pi mao. Was worn during the Qing dynasty 1616-1912, China\u2019s last dynasty. In the context of China: culture, people, country.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-with-turban_1f473.png",
    title: "Person with turban",
    desc: "Stories from One Thousand and One Nights! Several long strips of fabric are wrapped around the head using a special technique. Symbol of the Orient and Muslim countries. The turban also has a protective function, it protects against sand and sun and is a fashionable accessory.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-with-headscarf_1f9d5.png",
    title: "Person with scarf",
    desc: "Triangular or suitably folded fabric for headgear. Is worn for practical, religious, cultural or fashionable reasons. The inventor of the emoji is a 16-year-old girl from Vienna who has since been on the list of the most influential teenagers in 2017.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-police-officer_1f46e-200d-2640-fe0f.png",
    title: "Police woman",
    desc: "Wanted by the police! Occupationally, the woman in the police uniform has to do with the fight against crime or she carries out private investigations. Beware, someone is watching over law and order!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/police-officer_1f46e.png",
    title: "Policeman",
    desc: "Your friendly police department. Often used in police context. Got caught driving faster than a speeding bullet. Or is investigating a case, getting to the bottom of something!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/construction-worker_1f477.png",
    title: "Builder",
    desc: "This emoji shows a construction worker with helmet and safety vest. Used in connection with hard physical work.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/guardsman_1f482.png",
    title: "Guardsman",
    desc: "I will watch over it! The guardsmen with bearskin caps and red uniforms are a symbol of England. The changing of the guard at Buckingham Palace is as popular with tourists as the latter's trying to elicit a response from the guards.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-sleuth_1f575-fe0f-200d-2640-fe0f.png",
    title: "Female detective",
    desc: "I am getting on to the track of the truth! Trench coat, hat and dark sunglasses: The woman is investigating in secrecy. She reveals secrets and exposes bad intentions. Enough with the secrets!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sleuth-or-spy_1f575.png",
    title: "Detective",
    desc: "An undercover agent with the distinctive coat and hat. Sometimes he uses a magnifying glass to closely inspect evidence. The covered face stands for confidentiality or secrecy. I will solve the mystery!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-health-worker_1f469-200d-2695-fe0f.png",
    title: "Female staff in public health",
    desc: "My medical studies are really exhausting! The woman in a white lab coat and stethoscope symbolizes healthcare. Can illustrate the profession or stand for health or illness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-health-worker_1f468-200d-2695-fe0f.png",
    title: "Male staff in public health",
    desc: "Please send for the doctor! Symbolizes healthcare and can represent a doctor, nurse, therapist or surgeon. Someone has health problems or has an appointment with the doctor.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-farmer_1f469-200d-1f33e.png",
    title: "Female farmer",
    desc: "We are going on a farm holiday! Nature, animals, meadows and fields. The woman in a straw hat and dungarees works in agriculture, grows fruit and vegetables or is nature-loving.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-farmer_1f468-200d-1f33e.png",
    title: "Male farmer",
    desc: "We are going to the countryside! The man wears a straw or cowboy hat and dungarees. Refers to rural life, agriculture, horticulture or stock farming. Represents a close affinity to nature or a self-supporter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-cook_1f469-200d-1f373.png",
    title: "Female cook",
    desc: "I'm going to convince you of my cooking skills tonight! The woman with the characteristic chef's working clothes is a gourmet chef or an amateur cook, works in the catering trade or might not have any cooking talent at all.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-cook_1f468-200d-1f373.png",
    title: "Male cook",
    desc: "Too many cooks spoil the broth! The man is wearing a chef's jacket as well as a chef's hat and is responsible for the preparation of tasty food. Whereas men are often only able to \u201ccook\u201c fried eggs at home, you can find more men than women in professional kitchens.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-student_1f469-200d-1f393.png",
    title: "Female student",
    desc: "The swotting was worth the trouble, now the celebration can start! The school, vocational training, further education or the studies were successfully completed. Represents education and knowledge.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-student_1f468-200d-1f393.png",
    title: "Male student",
    desc: "A brand new university graduate! At some colleges, cap and gown or doctoral cap are worn at graduation ceremonies following the American example. Symbol for (further) education.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-singer_1f469-200d-1f3a4.png",
    title: "Female singer",
    desc: "You can buy this for a song! Whether in the car or on the grand stage, the female singer at the microphone loves the show and enjoys entertaining her audience. Can also stand for the lust for life, lightheartedness and a carefree time.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-singer_1f468-200d-1f3a4.png",
    title: "Male singer",
    desc: "You are a born entertainer! The man at the microphone is either a pop star, singing in the shower or he enjoys singing his own praises. Depending on the version, the singer looks like David Bowie or Prince.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-teacher_1f469-200d-1f3eb.png",
    title: "Female teacher",
    desc: "A woman with class: the teacher. A woman is standing in front of a blackboard in order to teach. Two thirds of all educators are female. Hardly any other profession is confronted with more prejudices.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-teacher_1f468-200d-1f3eb.png",
    title: "Male teacher",
    desc: "I wish I was a teacher! You are very happy with the new lecturer, teacher or professor. Symbolizes any kind of educational institution where teaching takes place. It can also be used jokingly if you teach the other person or play the eager beaver.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-factory-worker_1f469-200d-1f3ed.png",
    title: "Female factory worker",
    desc: "I'm an amateur craftswoman now! The woman is wearing protective goggles and clothing and is holding a going welding apparatus in her hand. You are a worker in manufacturing or in the metal industry, interested in physics and chemistry or like to repair things.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-factory-worker_1f468-200d-1f3ed.png",
    title: "Male factory worker",
    desc: "This will weld us together! During welding, parts are permanently interconnected. For protection, special goggles and resistant clothing must be worn. The man works in manufacturing, in a factory or is an amateur craftsman.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-technologist_1f469-200d-1f4bb.png",
    title: "Female technologist",
    desc: "You spend too much time online! A computer freak, student, blogger or online shopping enthusiast. The woman spends a lot of time in front of the computer because of her hobby, her education or her job.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-technologist_1f468-200d-1f4bb.png",
    title: "Male technologist",
    desc: "I find new technologies exciting! The man is sitting in front of the computer or laptop and is working, either as a developer or IT expert. Someone is spending too much time online playing video games.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-office-worker_1f469-200d-1f4bc.png",
    title: "Female office worker",
    desc: "I'll stay in the office longer today! The woman in business attire works as an employee, businesswoman, assistant or manager in an office.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-office-worker_1f468-200d-1f4bc.png",
    title: "Male office worker",
    desc: "Represents pencil pushers or suits. Whether employee, director, manager or businessman: The clothes indicate an office job. Or the man is dressing up and wearing the new suit.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-mechanic_1f469-200d-1f527.png",
    title: "Female mechanic",
    desc: "I can do that myself! or \u201cI need to bring my car to the garage!\u201c The woman is wearing a boiler suit for her profession or wants to emphasize her ability to repair things.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-mechanic_1f468-200d-1f527.png",
    title: "Male mechanic",
    desc: "I'm going to work on the car later! or \u201cI can fix everything!\u201c The man in the boiler suit could be working as an electrician, craftsman, plumber or mechanic. Stands for manual skills or maybe for their absence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-scientist_1f469-200d-1f52c.png",
    title: "Female scientist",
    desc: "I'm experimenting a little! With the color of my hair, in the kitchen or in the laboratory. Goggles and lab coat indicate a female biologist, chemist, physicist or scientist. Shows an interest in chemistry or illustrates that a solution is being searched for.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-scientist_1f468-200d-1f52c.png",
    title: "Male scientist",
    desc: "What will be the outcome of it? The man is wearing goggles and a lab coat and works as a scientist or researcher in a laboratory. Something is still in the experimental stage, but they are already researching the solution.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-artist_1f469-200d-1f3a8.png",
    title: "Female artist",
    desc: "Don't paint a gloomy picture of everything! A woman with the stereotypical beret on her head and with a paintbrush and painter's palette in her hand. She is an artist by profession, has discovered a new hobby for herself or is painting the apartment. Expression of creativity and self-realization.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-artist_1f468-200d-1f3a8.png",
    title: "Male artist",
    desc: "Don't always paint everything in black and white or gray and drab! A painter with a paintbrush and painter's palette in his hand. Represents creative talent, originality and self-realization.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-firefighter_1f469-200d-1f692.png",
    title: "Female firefighter",
    desc: "Firefighters advance when something is burning. A hot discussion is going on, a childhood dream job is coming true, there is a fire somewhere or the kitchen fire from your last attempt to cook could be extinguished by yourself.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-firefighter_1f468-200d-1f692.png",
    title: "Male firefighter",
    desc: "What's the fire? The firefighters' protective clothing protects firefighters from the high temperatures. The fire department extinguishes fires, saves lives and sometimes cats from trees. Used in conjunction with safety, fire protection and the job profile.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-pilot_1f469-200d-2708-fe0f.png",
    title: "Female pilot",
    desc: "Welcome on board, this is your pilot speaking! The woman in a uniform, epaulettes with stripes and a cap navigates a plane. Represents dreams, change and freedom. In 1988 a female co-pilot was in a cockpit for the first time, in 2000 the first female captain.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-pilot_1f468-200d-2708-fe0f.png",
    title: "Male pilot",
    desc: "This is your captain speaking, we are entering our final approach! The man with a uniform, brevet and cap is a (future) pilot. Refers to flying or navigating and aircraft in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-astronaut_1f469-200d-1f680.png",
    title: "Female astronaut",
    desc: "Discover new things, reach unexpected heights or leave everything behind! The female astronaut (Lat. star traveler) is going on an exploring expedition to space. The childhood dream of many. Often used in connection with the universe.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-astronaut_1f468-200d-1f680.png",
    title: "Male astronaut",
    desc: "As a kid I wanted to become an astronaut! The astronaut in a space suit explores the universe in a spaceship. Also used to express interest in space travel and planets. Represents the desire to discover something new and to increase the expansion of the mind.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/female-judge_1f469-200d-2696-fe0f.png",
    title: "Female judge",
    desc: "Woman is wearing a black robe and holding a judge's gavel. The task of judges is jurisprudence. Can be used in connection with courts or the judiciary. A decision must be made or justice must prevail!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/male-judge_1f468-200d-2696-fe0f.png",
    title: "Male judge",
    desc: "Guilty as charged! or \u201cNo plaintiff, no judge\u201c. The judge stands for law as well as for justice.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bride-with-veil_1f470.png",
    title: "Bride",
    desc: "I'm getting married! Refers to the bride herself, a marriage or a soon-to-be wedding. Can be used for invitations, wedding anniversary, planning a celebration or looking for a wedding dress.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-with-veil_1f470-200d-2642-fe0f.png",
    title: "Man with veil",
    desc: "We are going to marry! The bridal veil is a fashion accessory and once was a symbol of virginity. Can be used for cross-dressing, a homosexual wedding, or jokingly for a feminine man.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-in-tuxedo_1f935-200d-2640-fe0f.png",
    title: "Woman in tuxedo",
    desc: "It's going to be glamorous tonight! In the 1920s, style icon Marlene Dietrich made the tuxedo socially acceptable. In the 1960s, Yves Saint Laurent added \u201cLe Smoking\u201d to his collection. Fashionable symbol of emancipation and women's movement.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-in-tuxedo_1f935.png",
    title: "Man in a tuxedo",
    desc: "Today is a big day! The tuxedo consists of a jacket, a vest and trousers. Particularly elegant and suitable for sophisticated occasions. Symbolically, the emoji stands for an official occasion or celebration, for example, a banquet or your own wedding. The tuxedo also illustrates affectionate appointments and reunions.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/princess_1f478.png",
    title: "Princess",
    desc: "A beautiful, distinguished and aristocratic princess with a crown or a diadem. The dream of all little girls. You can be happy if a man sends you this emoji, because then you are his princess.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/prince_1f934.png",
    title: "Prince",
    desc: "A prince (from the Latin princeps = the first one) with crown. Title of nobility as the descendant of a king. The emoji is also used ironically for a show off or for a wealthy, good-looking man. The prince is considered a general symbol of luck and represents reason, intellect and masculinity. Your wishes will come true.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-superhero_1f9b8-200d-2640-fe0f.png",
    title: "Superhero",
    desc: "With superhuman powers, they fight evil and thus protect humanity. The costume is used for the recognition factor but also for the protection of their identity. They are characterized by a high morality, great courage and sense of justice as well as the unconditional commitment to others. But every superhero is also vulnerable and has his or her underbelly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-supervillain_1f9b9-200d-2640-fe0f.png",
    title: "Super villain",
    desc: "The super villain is the evil adversary of the superhero, e.g. Lex Luther and Superman or Joker and Batman. They usually have superhuman abilities, a high intelligence and suffer from megalomania. The villain acts out his or her evil side and enjoys it.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mother-christmas_1f936.png",
    title: "Mary Christmas",
    desc: "The friendly elderly woman with a red and white cap and glasses is Santa Claus\u2019 wife. First mentioned in the short story \u201cA Christmas Legend\u201c (1849) by James Rees. Represents the feast of Christmas and the contemplative pre-Christmas period.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/father-christmas_1f385.png",
    title: "Santa Claus",
    desc: "Merry Christmas! The plump, friendly elderly gentleman with a red cap and a white beard lives up in the north. On Christmas Eve, he slips through the chimney to put the presents under the Christmas tree for the good children.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mx-claus_1f9d1-200d-1f384.png",
    title: "Christmas person",
    desc: "I love Christmas! Gender-neutral alternative to Santa Claus and Mrs. Claus. With regard to Christmas. Symbolic figure for Christmas gifts: Bring presents to the good children, the bad ones get the birching.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mage_1f9d9.png",
    title: "Magician",
    desc: "This is just hocus-pocus or \u201cI'm not a magician!\u201c Someone wants to watch fantasy movies or has an idea for a carnival costume. Whether real magician or magical personality: It's about supernatural magic.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/elf_1f9dd.png",
    title: "Elf",
    desc: "My favorite movie is Lord of the Rings! The small, graceful nature spirits with the pointed ears are mediators between nature and humans. The mythical creatures have supernatural abilities, can fly and become invisible. Represent timidity, delicateness and a close affinity to nature.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/vampire_1f9db.png",
    title: "Vampire",
    desc: "I am a creature of the night or \u201cyou bloodsucker\u201c! Dark cloak and pointed fangs: The undead in man-shape leave their graves at night to drink blood, preferably of the human kind. Have supernatural powers. The most famous vampire is probably Count Dracula.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/zombie_1f9df.png",
    title: "Zombie",
    desc: "Walking around like a zombie, playing \u201cResident Evil\u201c or watching \u201cThe Walking Dead\u201c! Fictional creature from horror movies: a walking dead person, deprived of his or her soul. Mostly bad, scary and out for revenge. Represents will-less, dependent people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/genie_1f9de.png",
    title: "Genie",
    desc: "Tales from Thousand and One Nights, I Dream of Jeannie or Aladdin and the Magic Lamp. Character from oriental fairy tales: Locked in a bottle or lamp for punishment, the genie must satisfy three wishes for everyone who frees him. Metaphor for self-inflicted danger.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/merperson_1f9dc.png",
    title: "Mermaid",
    desc: "The female mythical creature lives underwater and is a mixture of female and fish body. Only a man's love can free the mermaid from her fate. Walt Disney's \u201cArielle\u201c is well-known.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fairy_1f9da.png",
    title: "Fairy",
    desc: "You still believe in the tooth fairy or \u201cI love Peter Pan films\u201c. The mostly beautiful mythical creatures have magic powers. They can be female as well as male, good or bad. They symbolize magic, purity and childishness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ninja_1f977.png",
    title: "Ninja",
    desc: "I have never been here! Dressed in black, masked and armed with a throwing star or sword. Japanese martial artist and master of camouflage and deception. Stands for espionage, supernatural abilities and dark fascination.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baby-angel_1f47c.png",
    title: "Baby Angel",
    desc: "I am innocent or \u201cYou are an angel!\u201c The baby angel emoji with a halo around its head often stands for a miracle, hope or faith.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pregnant-woman_1f930.png",
    title: "Pregnant woman",
    desc: "Someone is expecting a visit from the stork. The pregnant woman who is holding her belly is going to have a baby! The roly-poly belly can also stand for weight gain or you ate too much (\u201cfood baby\u201c).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/breast-feeding_1f931.png",
    title: "Breastfeeding",
    desc: "I woke up every two hours last night! A woman breastfeeding a baby. According to a study, about 80% of the mothers in Germany breastfeed their child for about 7 months. Breastfeeding in public is a controversial topic and triggered a trend in social media in 2017.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-feeding-baby_1f469-200d-1f37c.png",
    title: "Woman feeding baby",
    desc: "I am babysitting! A woman is feeding a baby with the bottle. Expression of motherliness and care. Jokingly for a mother\u2019s boy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-feeding-baby_1f468-200d-1f37c.png",
    title: "Man feeding baby",
    desc: "He is on parental leave! The man is bottle feeding the baby on his arm. The family has grown or you are a proud father. They can also be siblings.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-feeding-baby_1f9d1-200d-1f37c.png",
    title: "Person feeding baby",
    desc: "My sibling is born! The person is feeding the baby in their arms and smilingly looks at the infant. It's about your own child or sibling love, childcare or parental leave.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-bowing-deeply_1f647.png",
    title: "Person Bowing Deeply",
    desc: "A person who is bowing to you. Is grateful because of something and deeply bows to you. Can also be an offering of reverence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/information-desk-person_1f481.png",
    title: "Information Desk Person",
    desc: "How can I assist? The service-oriented and friendly woman at the information desk answers a customer's question and uses a hand gesture. Can be used as a question at the end of a message: \u201cWhat do you think?\u201c or \u201cI do not care.\u201c",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-no-good-gesture_1f645.png",
    title: "Face With No Good Gesture",
    desc: "Stop this immediately! Woman with crossed arms. Defensive posture. Shows that something is wrong and disruptive. A signal to stop.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-with-ok-gesture_1f646.png",
    title: "Face With Ok Gesture",
    desc: "Everything is okay! Woman with hands above her head (OK sign). Wants to tell you that everything is fine. Represents advocacy and approval. Because of the posture also known as ballerina.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/happy-person-raising-one-hand_1f64b.png",
    title: "Happy Person Raising One Hand",
    desc: "Person is cheerful and lifts a hand. Wants to be noticed and to say that he or she has a question or an answer.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/deaf-person_1f9cf.png",
    title: "Deaf person",
    desc: "I am deaf! A person moves the index finger between ear and mouth. In American sign language, the sign for deaf. 360 million people worldwide are hearing impaired or deaf, that is 0.1% of the total population.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-palm_1f926.png",
    title: "Man Grabbing His Head",
    desc: "Facepalm describes a gesture that became popular through the Star Trek series. \u201cThat cannot be true!\u201c is what you think when facing the stupidity of other people. Can also be used if you are embarrassed for someone else.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shrug_1f937.png",
    title: "Person Shrugs",
    desc: "\u201cI don't know how I can help you\u201d or \u201cSuch is life\u201d . The shrug of the shoulders shows ignorance, confusion or the lack of interest in something. Text version: \u00af\\_(\u30c4)_/\u00af",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-with-pouting-face_1f64e.png",
    title: "Pouting Person",
    desc: "I am dissatisfied! Emoji pouts and openly shows its displeasure. Could be an indication that someone is angry and annoyed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-frowning_1f64d.png",
    title: "Frowning Person",
    desc: "Emoji shows a woman with a frown. Her expression is very distressed and sad. Could indicate sad news.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/haircut_1f487.png",
    title: "Person at the hairdresser's",
    desc: "I have to go to the hairdresser's! A change in style is planned or a big event is upcoming. Men visit the hairdresser's more often than women. However, women pay more than men. Symbol of beauty and vanity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/face-massage_1f486.png",
    title: "Person is being massaged",
    desc: "Whether appointment at the hairdresser's, visit to the beautician or wellness day: The person enjoys a head or facial massage. Maybe the day was stressful, you are assailed by a headache and you just want to relax.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-in-steamy-room_1f9d6.png",
    title: "Person in Steam Sauna",
    desc: "Let's relax! The steam sauna is heated to 80 to 105\u00a0\u00b0C with a sauna heater. The use of a sauna serves for relaxation and promotes good health. In Scandinavia and Russia, it even serves for cultivating social contacts.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/nail-polish_1f485.png",
    title: "Nail Polish",
    desc: "Woman painting her fingernails is preparing for a special occasion or is dressing up to go out. Can stand for beauty in general, femininity or a manicure appointment. Represents casualness and carefreeness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/selfie_1f933.png",
    title: "Selfie",
    desc: "Let me take a selfie first! The extended arm holds a cell phone to take a selfie. Often used for self-marketing and a mass phenomenon on social media. Figuratively for a narcissistic person or self-promoter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dancer_1f483.png",
    title: "Dancing",
    desc: "\u201cI want to party\u201d or \u201cI'm so excited!\u201d The dancing woman in the red dress is also often associated with salsa. In general stands for fun and joy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-dancing_1f57a.png",
    title: "Dancing Man",
    desc: "I had so much fun at the party! Someone had a great time or would like to party in a club. Represents events of all kinds that can be danced at.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-with-bunny-ears_1f46f.png",
    title: "Women With Bunny Ears",
    desc: "Two Playboy Bunnies with rabbit ears. These models represent the American Playboy magazine for men and globally stand for attractiveness. The emoji is also used as a symbol for ballet as well as for \u201cLet's party!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-in-business-suit-levitating_1f574.png",
    title: "Hovering Man in Suit",
    desc: "Hovering man in hat and suit. Mix of exclamation marks and the logo of the seventies band \u201cThe Specialists\u201c. Can be used as a symbol for a ghost.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-in-manual-wheelchair_1f469-200d-1f9bd.png",
    title: "Woman in wheelchair",
    desc: "Is the place accessible? A wheelchair enables a person with impaired mobility to lead a self-determined life. In 1869 the first patent for a wheelchair was granted in the USA. Today there are around 600 variations.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-in-manual-wheelchair_1f468-200d-1f9bd.png",
    title: "Man in wheelchair",
    desc: "We're watching a wheelchair basketball game! Whether due to physical disabilities or injuries, the vehicle enables mobility. In connection with accessibility.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-in-motorized-wheelchair_1f469-200d-1f9bc.png",
    title: "Woman in motorized wheelchair",
    desc: "Grandma wants an electric vehicle! To stay mobile and to cover longer distances. Suitable for seniors or for people who are limited in walking. Often seen in the US or in American films.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-in-motorized-wheelchair_1f468-200d-1f9bc.png",
    title: "Man in motorized wheelchair",
    desc: "The electromobile can be controlled using a joystick. For bridging distances for people who are limited in walking. As a joke, because you currently feel very old or move very slowly due to tiredness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pedestrian_1f6b6.png",
    title: "Pedestrian",
    desc: "A person is on foot or going for a walk. Can also be used to tell others to cool their jets or to slow things down.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-with-probing-cane_1f469-200d-1f9af.png",
    title: "Woman with white cane",
    desc: "Please be careful, visually impaired person. The white cane is an official indicator for blind people. With the help of the long stick, the ground can be scanned for obstacles. For orientation and mobility.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-with-probing-cane_1f468-200d-1f9af.png",
    title: "Man with white cane",
    desc: "Soon I'll be as blind as a bat! The white cane supports visually impaired people in their mobility. By swinging it, obstacles or height differences are recognized.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kneeling-person_1f9ce.png",
    title: "Kneeling person",
    desc: "One person is kneeling on both knees. Represents a person who is resting or praying. Kneeling down can be a gesture of humility, express religious worship or a meditation posture. Diverted as an emoji for oral sex.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/runner_1f3c3.png",
    title: "Runner",
    desc: "The person is very athletic and goes jogging regularly. Someone is late or in a hurry and is running to quicker get from one place to another. \u201cI am on the way!\u201c",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/standing-person_1f9cd.png",
    title: "Standing person",
    desc: "\u201cHe's standing out against others\u201d or \u201cShe\u2019s standing above them!\u201d The full body image of a standing person, face forward and without movement. Can be used for a person in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/man-and-woman-holding-hands_1f46b.png",
    title: "Man and Woman Holding Hands",
    desc: "With you, all worries are gone! Couple in love is standing side by side. Man and woman are holding hands, beaming happily.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/two-women-holding-hands_1f46d.png",
    title: "Two Women Holding Hands",
    desc: "Two women are holding hands. They could be best friends or siblings. Emoji could also explicitly stand for the same-sex female love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/two-men-holding-hands_1f46c.png",
    title: "Two Men Holding Hands",
    desc: "We are a great team! Two men holding hands. Can stand for friendship or represent a gay couple.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1.png",
    title: "People holding hand",
    desc: "We\u2019re walking through life hand in hand! Two people holding hands. Expression of affection, whether in a friendship or a relationship. Symbolic for \u201cI stand by you\u201d or \u201cYou can always count on me\u201d.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/couple-with-heart_1f491.png",
    title: "Couple With Heart",
    desc: "I'm so happy with you! A couple in love (man and woman) next to each other. Both are happy and laughing. The heart represents love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/couple-with-heart-man-man_1f468-200d-2764-fe0f-200d-1f468.png",
    title: "Couple with heart: man, man",
    desc: "Two men standing close together, a heart hovering between them. Love is in the air. Whether newly in love or already in a relationship. The emoji stands for deep feelings and romance.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/couple-with-heart-woman-woman_1f469-200d-2764-fe0f-200d-1f469.png",
    title: "Couple with heart: woman, woman",
    desc: "Two women with a heart floating in the air between them. The heart represents the romantic relationship between them. It\u2019s either young love or they already heard the wedding bells. Symbolic for same-sex love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kiss_1f48f.png",
    title: "Kiss",
    desc: "Man and woman with closed eyes and lips pointed to kiss. They would love to kiss now. The pink heart stands for love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kiss-woman-woman_1f469-200d-2764-fe0f-200d-1f48b-200d-1f469.png",
    title: "Kiss: woman, woman",
    desc: "The eyes are closed, the women are kissing or are about to kiss. The two are in a romantic relationship and feel for each other. The heart stands for their feelings and symbolizes love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kiss-man-man_1f468-200d-2764-fe0f-200d-1f48b-200d-1f468.png",
    title: "Kiss: man, man",
    desc: "Two men with their eyes closed just before they kiss. The two are in a romantic relationship and are in love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family_1f46a.png",
    title: "Family",
    desc: "Can refer to the classical constellation of father, mother, child(ren), or to a close relationship within the family. You start a family or are invited to a party in the inner circle.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-woman-boy_1f469-200d-1f466.png",
    title: "Family: woman, boy",
    desc: "My little brother is annoying! The woman is the sister or mother of a little boy. Represents family ties. May mean the woman is a single parent.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-woman-girl_1f469-200d-1f467.png",
    title: "Family: woman, girl",
    desc: "My daughter is like me or \u201cI like spending time with my sister\u201c. Used by the mother, it can refer to the daughter or vice versa. Represents family ties. May mean the woman is a single parent.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-woman-girl-boy_1f469-200d-1f467-200d-1f466.png",
    title: "Family: woman, girl, boy",
    desc: "The man is working, his wife spends the day alone with the children. Can refer to a particular mother with her children, to a single parent, or to motherly love in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-woman-boy-boy_1f469-200d-1f466-200d-1f466.png",
    title: "Family: woman, boy, boy",
    desc: "My sons are great or \u201cI am a mother of twins\u201c. Can stand for motherly love in general or for kinship.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-woman-girl-girl_1f469-200d-1f467-200d-1f467.png",
    title: "Family: woman, girl, girl",
    desc: "A mere women's household is great! Mother of two daughters or twins. Can also be an aunt with her nieces, or sisters.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-man-boy_1f468-200d-1f466.png",
    title: "Family: man, boy",
    desc: "Like father, like son or \u201cHe takes completely after the father\u201c. Symbolizes a family (father and son, brothers, cousins) and a close relationship. May stand for a father and son trip, love among brothers and sisters or a single parent.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-man-girl_1f468-200d-1f467.png",
    title: "Family: man, girl",
    desc: "I'm raising my daughter on my own or \u201cMy little sister is my one and all\u201c. The persons are related or in a close relationship with each other.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-man-girl-boy_1f468-200d-1f467-200d-1f466.png",
    title: "Family: man, girl, boy",
    desc: "Single father or the wife is out and about and the husband is looking after the children. A proud father who spends time with his children or an older brother who takes care of his siblings.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-man-boy-boy_1f468-200d-1f466-200d-1f466.png",
    title: "Family: man, boy, boy",
    desc: "Family man with his sons or the big brother with his younger brothers. Whether related by blood or not, there is a close emotional relationship. Illustrates a father's love, an excursion with his sons or a single father.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/family-man-girl-girl_1f468-200d-1f467-200d-1f467.png",
    title: "Family: man, girl, girl",
    desc: "I guard my daughters jealously! Girls are often daddy's girls and fathers would love to lay the world at their princesses' feet. The father is spending time with his daughters or is a single parent.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ball-of-yarn_1f9f6.png",
    title: "Ball of wool",
    desc: "Untangle the ravel in your head! The fur of sheep, goats and camels is made into wool. By rolling it up to a ball the wool does not get entangled. It warms you, is cuddly and is used for crocheting or knitting. As ball of fur, can be the nickname for fluffy baby animals.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spool-of-thread_1f9f5.png",
    title: "Thread reel",
    desc: "You are losing the thread, pull the string or dangle on the string. Something is running like a golden thread through a story. A thread of fibers is rolled up on the reel. Used for handicrafts, such as sewing.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/coat_1f9e5.png",
    title: "Coat",
    desc: "It is raining, I'll put on a coat! The days are getting colder or it's already winter. The coat protects against rain and chill and is a fashionable accessory.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lab-coat_1f97c.png",
    title: "Laboratory coat",
    desc: "Later on, I will have to go to the doctor! The knee-length coat made of white or light fabric is used as working garment in the chemical or medical industry. Symbol of cleanliness and purity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/safety-vest_1f9ba.png",
    title: "Safety vest",
    desc: "My new workwear is here! The vest in signal colors serves for better visibility. Used by construction workers, airport employees or stadium stewards, as well as in the event of breakdowns in road traffic.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/womans-clothes_1f45a.png",
    title: "Woman's Clothes",
    desc: "I am dressing up today! The feminine garment can be worn on many occasions. Whether casually in your leisure time or businesslike at work. The blouse can represent fashion and femininity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/t-shirt_1f455.png",
    title: "T-Shirt",
    desc: "It is getting warmer outside, you can wear short sleeves again. You need new t-shirts, the girlfriend wants to go shopping. At the so-called wet t-shirt contest the female participants are soused with water.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/jeans_1f456.png",
    title: "Jeans",
    desc: "The cult trousers are extremely popular with both sexes. As dungarees, because of the robustness or as casual wear, because of the offhandedness. The blue jeans can stand for fashion, casual look or shopping.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/briefs_1fa72.png",
    title: "Underpants",
    desc: "Briefs, panties, knickers. Whether underwear or swimming trunks, this model is scanty and tight. Men have an average of 23 underpants in their closets. Four out of five men buy their underwear themselves and the most popular color is black.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shorts_1fa73.png",
    title: "Shorts",
    desc: "Pack your swimming trunks! We\u2019re going to the lake or on vacation. The comfortable item of clothing can be swimming trunks, boxer shorts, Bermuda shorts or slacks.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/necktie_1f454.png",
    title: "Shirt With Tie",
    desc: "A shirt with a matching tie is often worn for work and formal occasions. There is something to celebrate and the man is dressing up.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dress_1f457.png",
    title: "Dress",
    desc: "Symbol of femininity. Whether dress with spaghetti straps in summer, evening dress for the chic event or party dress for the club. Represents fashion, shopping or beauty.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bikini_1f459.png",
    title: "Bikini",
    desc: "I want to go swimming and to bathe in the sun! The bikini is a symbol of summer, sun and fun. Can also mean \u201cYou look great, sexy bikini!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kimono_1f458.png",
    title: "Kimono",
    desc: "Traditional Japanese garment. The kimono is worn by both men and women. Symbol of Japanese culture or cuisine as well as travel to Japan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sari_1f97b.png",
    title: "Sari",
    desc: "The wrap robe is a traditional piece of clothing. The colorful fabric is between 5 and 9 m long. Expresses the preference for Bollywood films or fashion and represents Hinduism or India.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/one-piece-swimsuit_1fa71.png",
    title: "One-piece swimsuit",
    desc: "Summer can come! With swimwear you associate hot summer days, swimming in the lake or vacationing by the sea. Maybe a new swimsuit is needed or you may have discovered swimming for yourself.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/thong-sandal_1fa74.png",
    title: "Thongs",
    desc: "Summer, sun, sea! Leisure sandals for the summer. Sandals are the oldest type of shoes in the world and have been around for 3,000 years. In the 1950s, the plastic variant was spread over the world from Japan via the USA. Synonym for the beach lifestyle.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flat-shoe_1f97f.png",
    title: "Ballerina",
    desc: "I am going to put on ballerinas for our city stroll! The ballerina is a flat, girlish shoe to slip in. The name comes from the visual resemblance to the shoes used in ballet. Ballerinas are very popular, can be perfectly combined and are comfortable.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/high-heeled-shoe_1f460.png",
    title: "High-Heeled Shoe",
    desc: "Attention, here comes a vamp! Men are sexually attracted by red high heels. Wants to go out and experience something exciting.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/womans-sandal_1f461.png",
    title: "Woman's Sandal",
    desc: "The fashionable, open lady's shoe can only be worn in spring or summer. Represents beautiful and warm days, balmy summer nights or holidays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/womans-boots_1f462.png",
    title: "Ladies\u2019 boots",
    desc: "I\u2019ve got great new boots or I'm dressing up today! The days are getting cooler and eventually we can wear boots again. Maybe the other person wants to go shopping for new boots: On average, women buy six pairs of shoes per year.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mans-shoe_1f45e.png",
    title: "Man's Shoe",
    desc: "I bought new shoes! The men's shoe can be worn at work, for going out or in leisure time. On average, men own 8 pairs of shoes, women 17.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/athletic-shoe_1f45f.png",
    title: "Sports shoe",
    desc: "We are going jogging! A special shoe for sports activities, for example, for the gym or for golfing, or a sneaker as a fashionable item. The emoji symbolizes a healthy and active lifestyle.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hiking-boot_1f97e.png",
    title: "Hiking boot",
    desc: "Let's go hiking! The robust shoes protect the foot and provide stability, shock absorption and surefootedness. In the past, hiking was considered boring, but it is becoming a trend sport now. Out into nature!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/socks_1f9e6.png",
    title: "Socks",
    desc: "\u201cThis knocked his socks off!\u201d, \u201cPut a sock in it!\u201d or \u201cNow pull your socks up!\u201d Socks protect our feet from the cold and help to avoid blisters. A status symbol till the Middle Ages, a bulk good today. If you aren't careful, they are eaten by the washing machine or the dog!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/gloves_1f9e4.png",
    title: "Gloves",
    desc: "It's cold, I need my gloves! Accessory, protection or winter clothing. Gloves protect hands from coldness, humidity and dirt.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/scarf_1f9e3.png",
    title: "Scarf",
    desc: "Wrap up warm, it's cold outside! Part of winter clothing on cold days. Whether winter holiday or fashion accessory, the scarf protects you against wind, is cuddly and keeps your neck warm.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/top-hat_1f3a9.png",
    title: "Top Hat",
    desc: "In Great Britain, the top hat is worn on traditional occasions like a wedding. Also known from Monopoly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/billed-cap_1f9e2.png",
    title: "Baseball cap",
    desc: "We are following the games of the Major League! The baseball cap with the sun visor is a fashionable headgear and protects against the sun. The cap has its origin with the baseball players in the United States. Today it is part of casual wear.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/womans-hat_1f452.png",
    title: "Woman's Hat",
    desc: "On the one hand, the hat is a sunscreen, on the other hand a fashionable accessory. Often made of straw, with wide brim and ribbon. Symbol for summer and vacation. In many cultures symbol of social status.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/graduation-cap_1f393.png",
    title: "Alumnus Hat",
    desc: "The graduation ceremony will be tomorrow! The black, square hat with a tassel is also called graduation hat, bachelor hat or scholar hat. The graduates collectively toss up their hats at the ceremony after having obtained their academic degrees. Symbol for graduation of school or examinations, and for education.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/helmet-with-white-cross_26d1.png",
    title: "Rescue Worker's Helmet",
    desc: "In Japan, the white cross is used as a safety notice on construction sites. The protective helmet can refer to rescue workers or people working in emergency services.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/military-helmet_1fa96.png",
    title: "Military helmet",
    desc: "I will fight for you! The camouflage helmet is part of the uniform and protects the wearer. In connection with the military or the soldier's profession. Jokingly for an authoritarian person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crown_1f451.png",
    title: "Crown",
    desc: "\u201cThis is top\u201d or \u201cYou are the best!\u201d The crown embellished with precious jewels represents power and luxury. Is also known as king emoji.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ring_1f48d.png",
    title: "Ring",
    desc: "Will you marry me? Also \u201cI'm spoken for!\u201d The ring is set with a diamond, the most precious gem ever. Is mostly used in conjunction with relationships or for expressing approval.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pouch_1f45d.png",
    title: "Clutch",
    desc: "Let's go out tonight! The small, chic bag only offers space for the bare essentials and is carried in the hand. This stylish accessory is perfect for parties, business events or other important events.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/purse_1f45b.png",
    title: "Wallet",
    desc: "After the shopping trip, the money has run out or the wallet was forgotten at home. The accessory keeps loose money but also credit cards or make-up. Can refer to shopping or money and stand for femininity and everything girlish.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/handbag_1f45c.png",
    title: "Handbag",
    desc: "I really need a new handbag! Fashion accessory and for carrying personal belongings. Women spend 76 days of their lives on finding items in their handbag. The handbag also stands for privacy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/briefcase_1f4bc.png",
    title: "Briefcase",
    desc: "He\u2019s got a business appointment! Business papers, files or the laptop are transported in the briefcase. Stands for seriousness and professional life. Some success or career advancement can be placed in the plus column.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/school-satchel_1f392.png",
    title: "Satchel",
    desc: "We\u2019re going back to school or we have vacation time! There is room in the satchel for books, notebooks and lunch. The emoji is mostly used in connection with school and education but also for traveling.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/luggage_1f9f3.png",
    title: "Suitcase",
    desc: "I pack my bags and take with me... I am going on a journey! Symbol of wanderlust, freedom and vacation. We usually fetch our suitcase only during the holiday season. Women pack in an organized way with a list, yet often taking too much with them while men tackle packing in a relaxed manner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eyeglasses_1f453.png",
    title: "Glasses",
    desc: "I'll take a close look at this! The glasses help people with poor eyesight to better see their environment. Some people wear glasses to look intellectual or intelligent. Symbol for bookworms or nerds.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dark-sunglasses_1f576.png",
    title: "Dark Sunglasses",
    desc: "I've got the swag! Symbol for hot, sunny days but also for coolness and distinctive mark of agents. With dark glasses, other people can be watched unnoticed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/goggles_1f97d.png",
    title: "Safety glasses",
    desc: "I need new ski goggles or \u201cWe wear safety goggles in the lab\u201c. The safety glasses protect the eyes from dust, water, dirt, splinters and other harmful influences.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/closed-umbrella_1f302.png",
    title: "Closed umbrella",
    desc: "It\u2019s going to rain, take an umbrella with you! The emoji can refer to the weather (clouds are coming up) or the umbrella itself. The umbrella is already 1,000 years old and was originally designed to protect people against the sun.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dog-face_1f436.png",
    title: "Dog Face",
    desc: "A sweet dog face with a panting tongue and floppy ears. Stands for unconditional loyalty and attention. Can refer to your own pet (\u201cI love my dog.\u201c) or to people (\u201cYou sly dog!\u201c).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cat-face_1f431.png",
    title: "Cat face",
    desc: "The cute, playful and fluffy walkers on velvet paws are one of the most popular pets, especially in big cities. Cats are considered independent, stubborn, with the seventh sense. They symbolize wisdom, luck, individuality as well as affection and tenderness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mouse-face_1f42d.png",
    title: "Mouse face",
    desc: "Mice are considered small and cute but also shy and helpless. An unremarkable, shy and modest person is referred to as a mousy person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hamster-face_1f439.png",
    title: "Hamster Face",
    desc: "I like you! Sweet hamster with pink ears and gray-orange face. Mostly a popular pet for children. It hoards provisions and laps in the spinning wheel. It symbolizes inner peace and contentment.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rabbit-face_1f430.png",
    title: "Bunny Face",
    desc: "Cute bunny face in cartoon style with two long ears. Can be used for easter or for spring in general. Many people associate it with cuddly fur, family spirit and an active sex life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fox-face_1f98a.png",
    title: "Fox Face",
    desc: "You sly old fox! The red fox with the fluffy tail is a family animal. It is considered particularly cunning and smart. In fairy tales, it exploits the weaknesses of others, deceives and is treacherous.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bear-face_1f43b.png",
    title: "Bear",
    desc: "A cute teddy bear. Is considered cuddly. The bear can stand on two legs like a human. Is admired for its strength and power, but also feared.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/polar-bear_1f43b-200d-2744-fe0f.png",
    title: "Polar bear",
    desc: "It can't be cold enough! Predator of the bear family. Lives in the northern polar region. The light fur serves for camouflage in the ice and snow. The King of the Arctic is a loner, fearless and a great hunter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/panda-face_1f43c.png",
    title: "Panda",
    desc: "I'm going to a Cro concert! Pandas come from China, feed on bamboo and are threatened with extinction. You find something totally cute or as an expression of affection within friendships.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/koala_1f428.png",
    title: "Koala",
    desc: "The koala stands for cuteness or amiability and awakens protective instincts. The second best-known animal in Australia feeds on eucalyptus and sleeps 20 hours a day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tiger-face_1f42f.png",
    title: "Tiger Face",
    desc: "The magnificent animal stands for strength, felinity and appetite. Central importance in Asia. There, the tiger is considered a wise leader (Buddhism) and national animal (India), it is a symbol of bravery and strength (China) and a Chinese zodiac.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pig-face_1f437.png",
    title: "Pig Head",
    desc: "Pigs might fly! At New Year's Eve the pig is one of the favorite lucky charms, apart from the chimney sweep. Represents prosperity and wealth.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pig-nose_1f43d.png",
    title: "Pig\u2019s snout",
    desc: "This looks like a pigpen. The pig's snout resembles a socket. Someone is a bit dirty and messy (You little pig!) or can eat really much (You\u2019re eating like a pig.).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lion-face_1f981.png",
    title: "Lion Face",
    desc: "A cute lion face, the king of animals and the jungle. A powerful, dangerous predator, a sublime ruler over its pack and a symbol of power.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cow-face_1f42e.png",
    title: "Cow face",
    desc: "The productive livestock provides man with milk and meat. The cow is a working animal and a sacred animal in India. Also used as a swear word for a clumsy, slow-witted person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/frog-face_1f438.png",
    title: "Frog Face",
    desc: "I have a frog in the throat! In mythology, stands for fertility, death and rebirth. Can also be seen in connection with prince charming (kiss the frog). Also known as Kermit, the frog from the Muppet Show.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/monkey-face_1f435.png",
    title: "Monkey Face",
    desc: "That's monkey business! \u201cYou are a cheeky monkey!\u201c or \u201cReal brass monkey weather!\u201c. Can also be used in a playful way, while fooling around or referring to the animal itself.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/see-no-evil-monkey_1f648.png",
    title: "See-No-Evil Monkey",
    desc: "Monkey with two hands in front of its eyes. Closes its eyes to the world so as not to see anything bad or cruel, or is embarrassed. Mizaru is one of the three wise monkeys. In a sense, ignoring bad things.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/speak-no-evil-monkey_1f64a.png",
    title: "Speak-No-Evil Monkey",
    desc: "Monkey is holding both hands over its mouth. Keeps a secret, will not talk about something, wants to speak no evil or what it just said slipped out of its mouth. Iwazaru is part of the three wise monkeys.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hear-no-evil-monkey_1f649.png",
    title: "Hear-No-Evil Monkey",
    desc: "Monkey is holding both hands over its ears. Doesn't want to hear anything unpleasant or negative. Avoids the truth and does not listen. Kikazaru is one of the three wise monkeys.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/monkey_1f412.png",
    title: "Monkey",
    desc: "Softly, softly catchee monkey! The naughty monkey stands for activity, joy, playfulness. Term of endearment for foolish persons and children who climb a lot. May also mean \u201cDon\u2018t monkey about!\u201c or \u201cI'm chilling at home\u201c. Often used in the context of animals, zoos and forests.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chicken_1f414.png",
    title: "Chicken",
    desc: "In general, stands for fear and cowardice (\u201cYou are a chicken\u201c). Appears in many phrases: \u201cTo get up with the chickens\u201c, \u201cTo dance the funky chicken\u201c, \u201cTo feel like a spring chicken\u201c or \u201cto chicken out\u201c. Chinese zodiac sign in the horoscope.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/penguin_1f427.png",
    title: "Penguin",
    desc: "The penguin is a symbol of coldness. Tells a person that he or she is particularly awkward, gawkish or clumsy. Also symbolizes balance and reason. Can also announce an addition to the family.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bird_1f426.png",
    title: "Bird",
    desc: "Tell me about the birds and the bees. Flip someone the bird or to be a bird brain. Bird emoticon stands for freedom and fantasy. Can also symbolize the soul on a spiritual level.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baby-chick_1f424.png",
    title: "Chick",
    desc: "Clumsy body, fluffy down feathers, big head and ungainly gait \u2013 like most baby animals, the chick is extremely cute. A person is clumsy, Easter is just around the corner or a symbol of a rural idyll.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hatching-chick_1f423.png",
    title: "Chick in Eggshell",
    desc: "A sweet fledgling is hatching from its egg. Popular symbol for Easter. Stands for recommencement, cuteness or the birth of a baby.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/front-facing-baby-chick_1f425.png",
    title: "Chick in Frontal View",
    desc: "An oversized head, yellow feathers, beak and big eyes. The cute, newly hatched chick expresses innocence and ignorance. \u201cI had no idea\u201c or \u201cI cannot help it.\u201c",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/duck_1f986.png",
    title: "Duck",
    desc: "You lame duck! Popular pond dweller in parks. The duck has colonized all continents except the Antarctic. Can also stand for duck soup (easy tasks) or false reports (canard). Furthermore, the duck is a symbol of prosperity and reputation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eagle_1f985.png",
    title: "Eagle",
    desc: "The king of the skies! Predator with sharp claws and eagle eyes. Symbol of the USA as well as desire of freedom, dignity and the pursuit of higher things.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/owl_1f989.png",
    title: "Owl",
    desc: "A symbol of wisdom. The nocturnal owl cannot shake off a negative superstition. In spooky scenes in movies you can often hear the characteristic call of the owl.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bat_1f987.png",
    title: "Bat",
    desc: "Emoji for Batman. The nocturnal bat served as a template for Bram Stoker's Dracula. The only mammal that can fly. Represents immortality and reincarnation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wolf-face_1f43a.png",
    title: "Wolf Face",
    desc: "The lonely wolf howling at the moon. In fairytales like \u201cLittle Red Riding Hood\u201c or \u201cThe Wolf and the Seven Little Goats\u201c often an evil character, like a wolf in sheep's clothing. Symbol for independence, but also strong family spirit.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/boar_1f417.png",
    title: "Boar",
    desc: "We saw a boar! The bristly boars are adaptive and omnivores. They are shy and nocturnal. Favorite dish of Obelix. Truffle seeker in France. A tracker boar of the police even made it into the Guinness Book of Records. The emoji can also symbolize aggressiveness and recklessness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/unicorn-face_1f984.png",
    title: "Unicorn",
    desc: "The unicorn: a white horse with magical powers and a horn on its forehead. The mythical creatures represent uniqueness, innocence, virginity, and childlike naivety. Symbol for the good.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lady-beetle_1f41e.png",
    title: "Ladybug",
    desc: "I wish you luck! The red ladybug with the black dots is considered a lucky symbol and is often found on birthday cards.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mosquito_1f99f.png",
    title: "Mosquito",
    desc: "You are as nerve-racking as a mosquito! There are 3600 species worldwide, around 100 of those can be found in Germany. You will meet the annoying pests mostly in the evening hours and in the proximity of water. Only the female mosquitoes bite, they need a blood meal for their egg production.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cricket_1f997.png",
    title: "Cricket",
    desc: "Campfire, balmy summer evenings. The chirring animals might be crickets, grasshoppers or house crickets. One of the ten biblical plagues, animal feed and nutritional trend of the future. Also represents a gloomy mood, crazy ideas (\u201cJiminy cricket!\u201c), quirks or a greedy person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/horse-face_1f434.png",
    title: "Horse Face",
    desc: "Horses are considered loyal and smart. Popular as farm animals and means of transportation. Inspirational and powerful. Insult to people with less attractive face and pronounced jaw as well as loudly laughing people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spider_1f577.png",
    title: "Spider",
    desc: "Worldwide, the sight of the spider is associated with fear and disgust. Chat partner wants to shock you or annoy you badly. Symbol for Halloween or Spiderman.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spider-web_1f578.png",
    title: "Cobweb",
    desc: "Someone has been netted! The web spun with spider silk is primarily used for catching prey. May indicate a trap or danger. Symbol for Halloween and scary things.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/turtle_1f422.png",
    title: "Turtle",
    desc: "Turtles live to be between 40 and 100 years old and they move very slowly. You have a quiet day, you are moving or somebody dresses up in carnival as a Teenage Mutant Ninja Turtle.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/snake_1f40d.png",
    title: "Snake",
    desc: "The hissing snake stands for furtiveness and deception. A person pretends to be your friend, but is badmouthing you behind your back. Also represents a zodiac sign in the Chinese horoscope.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lizard_1f98e.png",
    title: "Lizard",
    desc: "Dragon in small format. The reptile likes to bask on stones. Lizards live in Europe, Africa and Asia. The cute, nimble animals can throw off the tail in case of danger and it will grow back. August 14th is the International Lizard Day (World Lizard Day). Symbolizes longevity, adaptability and also envious persons you should be wary of.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/t-rex_1f996.png",
    title: "T-Rex",
    desc: "Let's watch the new Jurassic Park movie! Tyrannosaurus Rex \u2013 the carnivorous dinosaur with its short arms is the best known. Its name means \u201cking of lizards\u201c. In movies often the aggressive predator who stands for threat and spreads fear and terror.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sauropod_1f995.png",
    title: "Sauropod",
    desc: "He is vegetarian or \u201cWe're going to a natural history museum\u201c! Herbivorous dinosaur with a long neck, massive physique and a relatively small head. With a length of up to 30 meters and a weight of 70 tons, it is the largest terrestrial animal that ever lived. One of the most popular dinosaurs. They became extinct at the end of the Cretaceous period, 66 million years ago.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/scorpion_1f982.png",
    title: "Scorpion",
    desc: "Eight legs, two pincers and a poison sting. In sagas and myths, the scorpion is usually a dangerous and deadly creature. They are prevalent worldwide and only a few species are dangerous. One of the twelve zodiac signs.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/octopus_1f419.png",
    title: "Octopus",
    desc: "The octopus has up to eight arms, including a favorite arm and is considered smart. Is also used in a kitschy way because of its cute appearance, e.g., \u201cI want to snuggle up to you.\u201c In connection with traveling and diving or the ability to do many things at the same time.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squid_1f991.png",
    title: "Squid",
    desc: "Do not mess with me! Sea creature with tentacles. They hold their prey with the suckers. Squids change color depending on their mood (angry, excited, aggressive) and during the mating season. When in danger, they eject a cloud of ink. Popular delicacy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shrimp_1f990.png",
    title: "Prawn",
    desc: "The sea creature is a popular delicacy. Prawns are gray and turn pink when cooked. Refers to a dish (I love paella) or a restaurant that serves seafood.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lobster_1f99e.png",
    title: "Lobster",
    desc: "We are having a good time with lobster and champagne! The red sea creatures live to get up to 100 years old and cover 160 km annually. Represents holidays, the sea and exquisite dinners.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crab_1f980.png",
    title: "Crab",
    desc: "Prawns and hermit crabs can stand for isolation and loneliness. Represent the sea, the underwater world or also food. Could also mean: You only move sideways!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/blowfish_1f421.png",
    title: "Puffer Fish",
    desc: "Careful, I'm dangerous! Puffer fish can inflate in case of danger and raise its quills. This makes it almost impossible for the enemy to scoff it. As a warning: do not mess with me! Despite its poison, a delicacy in Japan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tropical-fish_1f420.png",
    title: "Tropical fish",
    desc: "Diving into a colorful underwater world, warm water temperatures, sun and beach. The colorful fish live in tropical waters. Symbol of vacation and relaxation as well as the need for freedom, independence and boundlessness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fish_1f41f.png",
    title: "Fish",
    desc: "That's a bit fishy! Fishing for compliments or being neither fish nor fowl. Fish are masters of camouflage and adaptation. Also used in connection with eating fish, with swimming, or the sea.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dolphin_1f42c.png",
    title: "Dolphin",
    desc: "Flipper! An American children's series. Dolphins are highly intelligent mammals. They live together in families.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spouting-whale_1f433.png",
    title: "Whale blowing out",
    desc: "Moby Dick! Whales must come to the surface to breathe. When they exhale, the air is blown out through a blowhole. The fountain can be up to 12 m high. The emoji is used in connection with the underwater world, whale watching or as an insult for overweight people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/whale_1f40b.png",
    title: "Whale",
    desc: "Very large marine mammal with massive body. The whale has no natural enemies. They are among the oldest animals in the world and are considered to be guardians of knowledge. Insult for overweight people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shark_1f988.png",
    title: "Shark",
    desc: "You\u2019re facing a shark tank or someone jumped the shark. 500 different types are known. They feed on plankton or marine animals. Feared as a killer through films like \u201cJaws\u201d, although attacks on people are very rare.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/seal_1f9ad.png",
    title: "Seal",
    desc: "He's a water rat! The seal is seen as merry, playful and has many tricks up its sleeve. The acrobats of the sea can swim up to 35 km/h, can sleep on land as well as under water and dive up to 200 m deep.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crocodile_1f40a.png",
    title: "Crocodile",
    desc: "Shedding big crocodile tears. With 230 million years of age, the saurian is the oldest animal group in the world. Crocodiles live in tropical regions in the water and on land. They are considered inactive and are strong hunters. Can refer to a country or region, e.g. Australia or Florida. Figuratively, the crocodile also stands for greed and hypocrisy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tiger_1f405.png",
    title: "Tiger",
    desc: "Three cheers and a tiger! Widespread in Asia, the predator with the strikingly striped fur is considered the largest cat species. King of the jungle. The tiger combines grace, courage, strength, wild beauty and sexual power. Likewise, it stands for a ballsy, freedom-loving and fearsome person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/leopard_1f406.png",
    title: "Leopard",
    desc: "The leopard is one of the fastest and most graceful big cats and symbolizes wildness, elegance, beauty and power. Can stand for a vacation in Asia or Africa. Or you want to buy new leggings with the typical pattern.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/zebra-face_1f993.png",
    title: "Zebra",
    desc: "Lives in Africa, resembles the horse and has black and white stripes. Or white and black stripes? Everything has two sides, there is not only bright and dark. Negative and positive things are kept balanced.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/gorilla_1f98d.png",
    title: "Gorilla",
    desc: "Don\u2019t mess with me! Standing, up to 1.75 m tall and weighing up to 200 kg: Gorillas are the largest apes. The gentle giants are vegetarians and endangered. Pejorative for a primitive or uncivilized person. Symbolizes strength, power, but also aggressiveness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/orangutan_1f9a7.png",
    title: "Orangutan",
    desc: "We\u2019re visiting the great apes in Indonesia! The term orangutan comes from the Malay language and means man of the forest. The intelligent, peaceful apes do not like rain and live in trees.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/elephant_1f418.png",
    title: "Elephant",
    desc: "This house is a white elephant, you are the elephant in the room or you are seeing pink elephants. The heaviest surviving land mammal stands for wisdom. We are going on holiday: to a safari in Africa or to Asia. Unflattering symbol for an overweight person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hippopotamus_1f99b.png",
    title: "Hippopotamus",
    desc: "We're going on a safari to the Kruger National Park! The hippopotamus is the second-heaviest land mammal after the elephant. The herbivores can show a very aggressive behavior. Due to its barrel-shaped physique, it is also used for people in an unflattering way.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rhinoceros_1f98f.png",
    title: "Rhinoceros",
    desc: "A fool and jerk is pejoratively referred to as a rhinoceros. The rhino has a strong body, short limbs and a large head with one or two horns. Primeval survivor, vegetarian and critically endangered. Symbolizes impetuous rage and assertiveness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dromedary-camel_1f42a.png",
    title: "Dromedary",
    desc: "A difficult journey is approaching! The single-humped camel lives in Africa and Arabia. As a pack animal and mount, it can live in the desert and do without water for weeks. Characteristic features are the long neck, the long eyelashes and the swinging gait. A dromedary symbolizes luck but also worries and hard work.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bactrian-camel_1f42b.png",
    title: "Camel",
    desc: "You\u2019re as dumb as a camel! The two-humped camel lives in Central Asia. Camels are adapted to extreme habitats (ship of the desert). Symbol of stamina, will to survive, staying power and resilience.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/giraffe-face_1f992.png",
    title: "Giraffe",
    desc: "The animal with the longest neck is native to Africa. Giraffes are up to 6 meters tall, have a maximum weight of 1,600 kilograms and reach a speed of up to 55\u00a0k.p.h. Symbol of farsightedness and gentleness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kangaroo_1f998.png",
    title: "Kangaroo",
    desc: "We are going to the other end of the world! Apart from the koala, the kangaroo is the most famous animal in Australia. The world's largest marsupial has even made it to the Australian coat of arms. Kangaroos are walking with their tail, they cannot run backwards and they do not sweat.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/honeybee_1f41d.png",
    title: "Honeybee",
    desc: "As busy as a bee or to have a bee in your bonnet. Bees are structured like a social community. Each has its own fixed task and contributes its part to the success of the colony. Caution: A bee can also annoy and sting!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bug_1f41b.png",
    title: "Caterpillar",
    desc: "The Very Hungry Caterpillar. Caterpillars hatch from an egg, eat their way through all groceries, pupate and become a butterfly. As a larva usually thick and hairy, therefore also used to express aversion: That is disgusting and fulsome!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/butterfly_1f98b.png",
    title: "Butterfly",
    desc: "Symbol of a positive transformation: from the unimpressive caterpillar to the beautiful butterfly. You are in love, have butterflies in your stomach. Summer is here!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/snail_1f40c.png",
    title: "Snail",
    desc: "Being as slow as a snail, moving at a snail's pace, sending letters by snail mail. Represents slowness and also vulnerability because of the fragile snail shell. Causes revulsion in many people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/beetle_1fab2.png",
    title: "Beetle",
    desc: "I am afraid of insects! Loud humming, clumsy flying. Nickname for a car, delicacy in Asia and the subject of phobias. Distributed all over the world, except in Antarctica. The thick armature protects the beetle from enemies.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cockroach_1fab3.png",
    title: "Cockroach",
    desc: "I am hard to beat! The crawling insect is often accompanied with disgust and panic. The cockroach feeds on pretty much anything, can transmit diseases and cause allergies. It is sung about in songs and a swearword.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fly_1fab0.png",
    title: "Mosquito",
    desc: "You're a pain in the ass or \u201cBuzz off!\u201c The obtrusive tormentors make noise, sting and can transmit diseases. Symbol of tenacity and impermanence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/worm_1fab1.png",
    title: "Worm",
    desc: "The early bird catches the worm! You want to worm a secret out of someone. Some worms, such as the tapeworm, can cause disease, while others, such as the earthworm, are useful.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spiral-shell_1f41a.png",
    title: "Sea Shell",
    desc: "During vacation, the shell can be found on the beach. If we hold a spiral shell to the ear, we can hear the sound of the sea. Refers to the coast or the ocean.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bison_1f9ac.png",
    title: "Bison",
    desc: "The wild cattle occurs in North America (bison) and Europe (European bison). The herbivore is up to 3.80 m long and weighs up to 900 kg. Due to the pronounced hump an imposing appearance. Emblematic of the American prairie or a tall, strong guy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mammoth_1f9a3.png",
    title: "Mammoth",
    desc: "\u201cThis is a mammoth task\u201d or \u201cI urgently need to go to the hairdresser\u2019s!\u201d Mammal belonging to the elephant genus, extinct around 4,000 years ago. The herbivore was up to 4 m long, weighed between 5 and 15 t and had 2 m long tusks.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/water-buffalo_1f403.png",
    title: "Water buffalo",
    desc: "The buffalo stands for stability and endurance and is a symbol of male sexuality and strength. In Asian countries kept as pack animal and for the plowing of rice fields. It appears in myths and legends, rescues Mowgli from the Tiger Shere Khan in the Jungle Book and is one of the 12 zodiac signs.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ox_1f402.png",
    title: "Ox",
    desc: "I'm as strong as an ox! Powerful, tame working animal. Represents agriculture and rural areas. The ox roast is a symbol of the Bavarian \u201cWiesn\u201d. We're going to the Oktoberfest!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cow_1f404.png",
    title: "Cow",
    desc: "Female cattle symbolize fertility, prosperity and blessing in many cultures. Cows are considered affectionate and innocent. On the alpine cows are found in the pastures. Also swearword that aims at weight or intelligence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/horse_1f40e.png",
    title: "Horse",
    desc: "\u201cWild horses couldn\u2019t drag me there.\u201d Horses symbolize beauty, elegance, passion and nature. Former workhorse and means of transportation, today riding is a popular hobby. Symbolically, the horse can also point to eroticism and sexuality.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pig_1f416.png",
    title: "Pig",
    desc: "One of the twelve zodiac signs in the Chinese horoscope. Represents pork on menus. Can also mean dirty, greedy or disgusting and be used pejoratively (\u201cYou sweat like a pig\u201c).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ram_1f40f.png",
    title: "Ram",
    desc: "You stubborn ram! The male sheep with sinuous horns is a symbol of fertility: The ram can carry out copulation up to 50 times a day. Strong fighter with a will to win. It symbolizes masculinity, potency and stamina as well as strength.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sheep_1f411.png",
    title: "Sheep",
    desc: "Counting sheep as a sleeping aid, separate the sheep from the goats, be a wolf in sheep's clothing or make sheep\u2019s eyes at someone. Sheep blindly follow the flock and are considered good-natured and simple-minded. A gentle, easily manipulable and naive person is often referred to as sheep.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/llama_1f999.png",
    title: "Llama",
    desc: "We are going to Peru! Llamas live in the South American Andes and belong to the animal family of camels. Cute facial expression, big eyes and cuddly fur. But beware: If danger threatens, it spits you in the face. Has replaced the unicorn as the new trend animal: \u201cNo dramas with llamas\u201c, \u201cNo probllamas\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/goat_1f410.png",
    title: "Goat",
    desc: "\u201cThat gets my goat!\u201d or \u201cSort out the sheep from the goats\u201d. Wild animal in the mountains and productive livestock on farms. Goats are considered as omnivores with a strong odor. In fairy tales often a symbol of a caring mother. The billy goat embodies animal instinct, lasciviousness and sexual vitality (\u201cold goat\u201d).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/deer_1f98c.png",
    title: "Deer",
    desc: "The deer is an antlered mammal and king of the forest. The doe belongs to the family of deer. Christmas symbol (Rudolph Reindeer) or famous character of the Disney movie Bambi. In mythology, both the deer and the unicorn are representations of soul and mind. In popular belief, the deer has also an erotic meaning.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dog_1f415.png",
    title: "Dog",
    desc: "I need to walk the dog! May also mean a barking dog never bites or someone feels dog-tired. The dog is man\u2019s best friend and stands for unconditional love, obedience, reliability and loyalty.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/poodle_1f429.png",
    title: "Poodle",
    desc: "Looking like a handbag poodle or loyal and devoted friends stand by your side. Due to the extravagant appearance a fashion dog, lap dog and circus dog in former times. Poodles are friendly, lively and intelligent family dogs.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/guide-dog_1f9ae.png",
    title: "Guide dog",
    desc: "We\u2019re training guide dogs for the blind! Specially trained companions for visually impaired people. The training lasts 18 months from birth. The dog retires after 7 to 10 years.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/service-dog_1f415-200d-1f9ba.png",
    title: "Assistance dog",
    desc: "My dog makes my everyday life easier! Assistance dogs support people with disabilities. They are trained to recognize emergencies (e.g. in the case of epilepsy) and to get help. Assistance dogs increase the quality of life and promote mobility.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cat_1f408.png",
    title: "Cat",
    desc: "Let the cat out of the bag or \u201cYou think you're the cat's whiskers!\u201c. Symbol for the cat lover or your own pet. The cat is said to have seven lives.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-cat_1f408-200d-2b1b.png",
    title: "Black cat",
    desc: "She is very superstitious! The kitty cat is a popular pet, but is also considered a bad omen. Due to an old superstition, black cats bring bad luck. Revered by the ancient Egyptians, a lucky charm in Japan and a symbol of evil in the Middle Ages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rooster_1f413.png",
    title: "Rooster",
    desc: "A new day is breaking in or there is new important news. You are a cock of the walk or cock-a-hoop. Male chicken with red comb on the head. The rooster crows when the sun rises. Is considered full of hot air, territorial, protective and aggressive. Is also a symbol of the man and male intentions.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/turkey_1f983.png",
    title: "Turkey",
    desc: "Happy Thanksgiving! The turkey lives in North and South America. It is a symbol of emotional security and proximity to the earth. Traditional food on Thanksgiving and Christmas. The turkey is easily irritable and then blurts out angry sounds.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dove-of-peace_1f54a.png",
    title: "Dove",
    desc: "Let's get rid of disputes and conflicts! White dove with olive branch in beak. The dove is a symbol of peace all over the world.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/peacock_1f99a.png",
    title: "Peacock",
    desc: "He is flouncing around like a peacock! In order to attract females, the peacock raises its feathers into a fan. Symbol of beauty, wealth and love. Also the epitome of vanity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/parrot_1f99c.png",
    title: "Parrot",
    desc: "You parrot everyone or \u201cShe put her parrot make-up on\u201c. The tropical bird with the bright colors is able to repeat words and even imitate telephone ringing.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/swan_1f9a2.png",
    title: "Swan",
    desc: "From the ugly duckling to the beautiful swan. The graceful bird with a long neck and brilliant white plumage appears in many myths and fairy tales. The swan commits itself to its partner for life. Symbolizes loyalty and purity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flamingo_1f9a9.png",
    title: "Flamingo",
    desc: "You bird of paradise! The colorful water bird in the typical posture, standing on one leg. The flamingo owes its feathers\u2019 color to its favorite food, crabs. Trend animal and a synonym for grace and extravagance.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dodo_1f9a4.png",
    title: "Dodo",
    desc: "You are so dumb! Giant bird that lived on the island of Mauritius. Known through \u201cAlice in Wonderland\u201c and \u201cIce Age\u201c. The flightless bird with the thick beak is considered gawky, clumsy and good-natured. Probably extinct around 1690.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rabbit_1f407.png",
    title: "Bunny",
    desc: "Happy Easter or \u201cThat's cute!\u201c The bunny is usually sent on Easter and in spring. In addition, the bunny is in fourth place of the Chinese zodiac signs and is used to wish a happy New Year. The next year of the bunny is 2023.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/raccoon_1f99d.png",
    title: "Raccoon",
    desc: "There is a raccoon in the attic! Zorro on four paws. The cute, masked small bear with a striking black and white face originally comes from North America. The loner is nocturnal, color-blind and a good climber.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/skunk_1f9a8.png",
    title: "Skunk",
    desc: "Careful, I can defend myself! The black and white striped skunk lives in America. In case of danger, they spray the opponent with a foul smelling secretion. Something or someone stinks, literally or figuratively.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/beaver_1f9ab.png",
    title: "Beaver",
    desc: "He likes working with wood! The rodent sometimes builds gigantic dams and is considered the best lumberjack in the world. Beavers are loyal and monogamous. On land, the aquatic animal becomes clumsy and gawky.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/badger_1f9a1.png",
    title: "Badger",
    desc: "You are smart and quick! The white stripe on its head is characteristic of the badger. The nocturnal animal spends most of its time in underground caves, which it digs itself. Badgers are brave, live in packs and hibernate in winter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/otter_1f9a6.png",
    title: "Otter",
    desc: "You water rat! The animals are not only cute, but also some of the most intelligent animals. The otter stands for curiosity, playfulness and joie de vivre.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sloth_1f9a5.png",
    title: "Sloth",
    desc: "This weekend I'm just not going to do anything! The relaxed jungle animals spend most of their lives hanging from a branch. Sloths feed on leaves, sleep 15 to 20 hours a day and move extremely little. If at all, they move very slowly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mouse_1f401.png",
    title: "Mouse",
    desc: "Poor as a church mouse or to play cat and mouse with someone. Can also refer to someone who is small, quiet and unobtrusive.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rat_1f400.png",
    title: "Rat",
    desc: "Easily confused with the mouse emoji. The rat is one of the twelve zodiac signs in the Chinese horoscope. It is also used negatively as an insult (\u201cto rat on someone\u201c) for traitors and untrustworthy persons.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chipmunk_1f43f.png",
    title: "Chipmunk",
    desc: "Alvin and the Chipmunks. The cute animals live in America and in contrast to the squirrel they have stripes. It can store its food in the thick cheeks to feed on it later unhurriedly. Let's go for a walk in the park!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hedgehog_1f994.png",
    title: "Hedgehog",
    desc: "Small and cute, but can fight back! Raises its quills if in danger. I want to coil up like a hedgehog! The hedgehog hibernates and perks up only at dusk. The most famous (blue) hedgehog from the Sonic video game runs as fast as the sound and collects rings.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/paw-prints_1f43e.png",
    title: "Paw Prints",
    desc: "\u201cFollow the trail\u201d or \u201cI have a new pet\u201d. The imprints can indicate an animal with paws such as dogs, cats, bears, lions, etc. The emoji is mostly used in conversations relating to animals.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ant_1f41c.png",
    title: "Ant",
    desc: "The diligent animals live in a colony, are organized and can carry many times their body weight. Ants are found worldwide and they can grow between 1 mm and 7 cm. Are seen as the health police of the forest. Symbol of zeal and diligence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dragon_1f409.png",
    title: "Dragon",
    desc: "This is terrible or fantastic! As the master of all elements of nature, the dragon is a mythical figure in the Japanese and Chinese traditions. Can also be found in company logos.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dragon-face_1f432.png",
    title: "Dragon face",
    desc: "We\u2019re celebrating the Chinese New Year. In myths, fairy tales and movies, the dragon is often a terrifying monster: scaly, with 4 legs, big wings and fire-breathing. Symbol for China and Chinese culture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/potted-plant_1fab4.png",
    title: "Potted plant",
    desc: "You have a green thumb! The plants have to be repotted or gardening is your new favorite pastime. You say it with flowers and send a flower greeting for a birthday or anniversary.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cactus_1f335.png",
    title: "Cactus",
    desc: "I love the old western movies! On our next vacation, we are going to a hot desert region or someone wants to go to a Mexican restaurant! Can also refer to a stubborn person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/christmas-tree_1f384.png",
    title: "Christmas Tree",
    desc: "Happy and merry holidays! Decorating the tree with balls, tinsel and fairy lights is part of the traditional Christmas season. Represents the holidays and is often used in Christmas greetings.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/evergreen-tree_1f332.png",
    title: "Evergreen Tree",
    desc: "Evergreen coniferous trees do not lose their needles even in winter. In China and Japan bonsai is a form of artistic garden design. Symbol of strength and immortality.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/deciduous-tree_1f333.png",
    title: "Deciduous Tree",
    desc: "Represents the forest and nature in general. Can be used for the invitation for a walk. In autumn, the leaves change color before the tree loses its leaves. Symbol for rebirth and the victory of life over death.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/palm-tree_1f334.png",
    title: "Palm Tree",
    desc: "Summer, sun, the sea ... symbol of holidays and travel to tropical or warm regions. Or something victorious, you win the palm.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/seedling_1f331.png",
    title: "Seedling",
    desc: "I love gardening! Most plants are dibbled in spring. The delicate plant needs to be nourished and cared for. Can symbolize growth or a fresh start.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/herb_1f33f.png",
    title: "Herbs",
    desc: "Small twig with green leaves. Can represent nature or cooking with natural ingredients and flavors. Herbs are also found in medicines.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shamrock_2618.png",
    title: "Shamrock",
    desc: "The green plant with the three heart-shaped leaves stands for Ireland and St. Patrick's Day. Symbol for the cross and the Trinity, nature and Ireland. The English term \u201cshamrock\u201c comes from the Irish word for plant (seamr\u00f3g).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/four-leaf-clover_1f340.png",
    title: "Four Leaf Clover",
    desc: "I wish you luck! The four-leaf clover was taken by Eve as a souvenir from paradise. Someone is keeping his fingers crossed for you.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pine-decoration_1f38d.png",
    title: "Pine Decoration",
    desc: "In Japan, house entrances are embellished with a pine decoration on Shogatsu (New Year's Day) to thank the gods for their protection.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tanabata-tree_1f38b.png",
    title: "Tanabata Tree",
    desc: "Traditional Japanese tanabata tree. It is utilized to attach written wishes to it. On the day of the festival, two stars meet each other in the sky: according to Chinese tradition, two lovers who are separated by the Milky Way for the rest of the year.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/leaf-fluttering-in-wind_1f343.png",
    title: "Leaf Fluttering in the Wind",
    desc: "\u201cFall is approaching\u201d or \u201cIt's windy!\u201d Fluttering leaves in the wind can also be a warning sign and indicate disappointment, loss, or a personal misfortune.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/feather_1fab6.png",
    title: "Feather",
    desc: "She is as light as a feather! The plumage serves birds to fly and to protect them from water and cold. The filigree feather embodies tenderness and lightness. Expresses the love for the animal world or old literature (quill).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/maple-leaf_1f341.png",
    title: "Maple Leaf",
    desc: "The maple leaf is the emblem of Canada. The autumnal colors of the leaf can also stand for the season and nature.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mushroom_1f344.png",
    title: "Mushroom",
    desc: "Let\u2019s go on a mushroom foray! To spring up like mushrooms! An extra life with Super Mario. The mushroom with the red umbrella and the white dots is the poisonous fly agaric. Can refer to fall as well as to a healthy diet.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ear-of-rice_1f33e.png",
    title: "Ear Of Rice",
    desc: "Emoji shows a rice panicle. It stands for solidarity and the commitment to a human being. It also symbolizes wealth, happiness and prosperity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hibiscus_1f33a.png",
    title: "Hibiscus",
    desc: "Delicate, fragile beauty. Hibiscus is very colorful and extremely attractive for bees and butterflies. Symbolizes wealth and power in Asian countries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tulip_1f337.png",
    title: "Tulip",
    desc: "A tulip is the harbinger of spring. It is often posted as a courtesy. Worldwide, splendid tulip festivals are organized. Can be understood as the awakening of nature.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rose_1f339.png",
    title: "Rose",
    desc: "You have won my heart! The red rose is a sign of love and romance. It is usually sent on Valentine's or Mother's Day. Caution: Every rose has its thorn!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wilted-flower_1f940.png",
    title: "Withered Flower",
    desc: "The flower has withered due to lack of water or sun. Represents sorrow, disillusionment and hopelessness. Symbolizes the end of a love, faded feelings or the current depressive state of mind.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bouquet_1f490.png",
    title: "Bouquet",
    desc: "\u201cThank you\u201d or \u201cAll the best!\u201d The beautiful, colorful bouquet is usually sent on Mother's Day and Valentine's Day as well as at weddings and other celebrations. It is meant to express congratulations and acknowledgement. Also used as a symbol of nature.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cherry-blossom_1f338.png",
    title: "Cherry Blossom",
    desc: "The bright pink cherry blossom is deeply rooted in the Japanese tradition (Hanami). It stands for beauty and transience.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/blossom_1f33c.png",
    title: "Blossom",
    desc: "In full bloom or \u201cA girl blossoms into a woman\u201c. The blooming flower does not show a specific species, but stands for flowers in general, for spring and the awakening of nature.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sunflower_1f33b.png",
    title: "Sunflower",
    desc: "You make the sun rise! The \u201chigh spirits flower\u201c conjures a smile on every face. Represents joie de vivre, happiness and warmth. Sunflowers are a symbol of the summer.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rosette_1f3f5.png",
    title: "Rosette",
    desc: "Outstanding! Flower decoration in the form of a blossom. Belongs to the decorative culture of European and Indian art. Today rosettes are still used as a military award for particularly good achievements.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sun-with-face_1f31e.png",
    title: "Sun With Face",
    desc: "The sun is shining so beautifully! Yellow sun with friendly grin on its face. Expresses joy about the great weather, stands for the summer or the sunny mind of a person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/full-moon-with-face_1f31d.png",
    title: "Full Moon With Face",
    desc: "Smiling full moon face. Symbol of wholeness and magical power. Is delighted about your happiness and wishes you success.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/first-quarter-moon-with-face_1f31b.png",
    title: "Waxing crescent moon with face",
    desc: "Crescent moon with face looking to the left. With the waxing crescent moon, the right half of the moon is lighted. The emoji is related to the night and nightlife. The man in the moon is a fairy tale as well as a hit song.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/last-quarter-moon-with-face_1f31c.png",
    title: "Waning crescent moon with face",
    desc: "Good night and sleep well! Crescent moon with face looking right. The waning crescent moon is the last phase in the lunar cycle. Lullaby for children. Refers to the night, romance and dreams.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/new-moon-with-face_1f31a.png",
    title: "New Moon With Face",
    desc: "New moon with face. Is usually perceived as creepy and eerie. Can also symbolize the man in the moon.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/new-moon-symbol_1f311.png",
    title: "New Moon",
    desc: "At new moon, the moon is between the sun and the earth. Is the first of four phases in the lunar cycle. Represents a fresh start. According to the lunar calendar, this is a good time to sow plants, carry out the wish for a baby, or start a new project.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/waxing-crescent-moon-symbol_1f312.png",
    title: "Waxing crescent moon",
    desc: "The first quarter of the waxing moon. The moon rises around noon and sets around midnight. The waxing moon brings more energy and is suitable for tackling projects.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/first-quarter-moon-symbol_1f313.png",
    title: "Waxing half moon",
    desc: "With the waxing half moon, the right half of the moon is lighted. This phase represents activity and challenges that we need to face. The time of doing.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/waxing-gibbous-moon-symbol_1f314.png",
    title: "Waxing moon",
    desc: "Moon phase between the waxing half moon and full moon. More than half of the moon is lighted. It rises in the afternoon and is visible until the early morning hours. The waxing moon brings new energy and the time to achieve new goals.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/full-moon-symbol_1f315.png",
    title: "Full Moon",
    desc: "I wish you success! The full moon promises happiness in any circumstance. You will arrive at your destination, but you should remain modest.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/waning-gibbous-moon-symbol_1f316.png",
    title: "Waning moon",
    desc: "Phase between the full moon and waning half moon. More than half of the moon\u2019s left side is brightly lighted. Energy decreases, time to complete and reflect on current projects.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/last-quarter-moon-symbol_1f317.png",
    title: "Waning half moon",
    desc: "Around the end of the lunar cycle (in total: 29.53 days), the left half of the moon is lighted. The phase of the waning half moon is good for tackling or completing things. Can also stand for balance, contrast or duality.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/waning-crescent-moon-symbol_1f318.png",
    title: "Waning crescent moon",
    desc: "The left side of the moon is lighted around the end of the lunar cycle (last quarter). The moon rises around midnight and sets at noon. Energy decreases, time to make room for something new.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crescent-moon_1f319.png",
    title: "Crescent Moon",
    desc: "I wish you a good night! The moon forms a crescent in the night sky. This may indicate the beginning or the end of a journey.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/earth-globe-americas_1f30e.png",
    title: "Globe with America",
    desc: "Our next destination is America! View from space of the continent of America with North and South America. Refers to the continent, a single country or the earth in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/earth-globe-europe-africa_1f30d.png",
    title: "Globe with Europe and Africa",
    desc: "We\u2019re going to South Africa! A view from space of the continents of Europe and Africa. Can refer to the earth itself, the environment or a country within Europe or Africa.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/earth-globe-asia-australia_1f30f.png",
    title: "Globe With Asia and Australia",
    desc: "The view from space, when astronauts look at the continents of Asia and Australia. The holiday was approved, you go Down Under to the kangaroos.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ringed-planet_1fa90.png",
    title: "Ringed planet",
    desc: "The solar system fascinates me! The planet with a ring is Saturn, the second largest planet. The gas planet is visible to the naked eye. Symbolic for reliability and stability.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-medium-star_2b50.png",
    title: "White Medium Star",
    desc: "Stars are the source of light or brightness and stand for protection as well as accompaniment. Symbol of fame and fortune, outstanding talent or achievements. Reach for the stars.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/glowing-star_1f31f.png",
    title: "Sparkling Star",
    desc: "Three decoratively sparkling stars. It glitters and sparkles, can stand for, e.g.: I have shined the car or apartment. Something is beautiful or almost magical.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dizzy-symbol_1f4ab.png",
    title: "Dizzy Symbol",
    desc: "My head is spinning! Swinging star. Means, I'm totally dazed (drunken) and only see stars.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sparkles_2728.png",
    title: "Sparkles",
    desc: "Three decoratively sparkling stars. For example, can mean: I polished my car or my apartment to mirror finish.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/high-voltage-sign_26a1.png",
    title: "High Voltage",
    desc: "Symbol as a warning of high voltage. The flash is often used for stormy weather. Or to say that something is extremely dangerous, exciting or out of control.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fire_1f525.png",
    title: "Fire",
    desc: "You're as hot as a volcano! The fire emoji is often used as a compliment and also in connection with \u201cto be enlightened\u201d, or for spicy food.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/comet_2604.png",
    title: "Comet",
    desc: "The comet stands for special events like success. Is associated with luck and misfortune. Indicates a change in life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-sun-with-rays_2600.png",
    title: "(Black) Sun With Rays",
    desc: "Symbolizes life energy on the earth as well as warm and sunny days.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sun-behind-cloud_26c5.png",
    title: "Sun behind cloud",
    desc: "What\u2019s the weather forecast? The sky is full of clouds but the sun is peering from behind a cloud. Can refer to someone\u2019s view of things, for example: You are optimistic (the sun is appearing) or pessimistic (clouds are gathering).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-sun-behind-cloud-with-rain_1f326.png",
    title: "Sun behind rain cloud",
    desc: "The day is sunny with short rain showers. Often the emoji refers to the weather but also to the mood: Better times are approaching. When the sun shines on the retreating rain cloud, a rainbow appears in the sky.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cloud-with-rain_1f327.png",
    title: "Cloud with rain",
    desc: "It\u2019s raining, take an umbrella with you. The weather forecast predicts rainy weather. Can also have a mood-related meaning or symbolize crying.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/thunder-cloud-and-rain_26c8.png",
    title: "Thunderstorm cloud and rain",
    desc: "Storm is gathering or is brewing. Can refer to the weather (the weather could really be better) or to one\u2019s mood (I\u2019m so angry).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cloud-with-lightning_1f329.png",
    title: "Cloud with lightning",
    desc: "A thunderstorm and stormy weather are gathering, there is already lightning. Tension is in the air and about to unleash. The atmosphere is emotionally charged, someone is angry or upset.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cloud-with-snow_1f328.png",
    title: "Cloud with snow",
    desc: "It\u2019s snowing! Emoji describes the weather or serves as an expression of anticipation of the upcoming winter season. It symbolizes the winter, the cold, the season(s) or the Christmas season.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rainbow_1f308.png",
    title: "Rainbow",
    desc: "After every low comes a high! The rainbow is a symboli of peace and unification. It is also a sign of happiness and hope.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cloud_2601.png",
    title: "Cloud",
    desc: "Dark clouds are gathering or something casts a cloud over something. Meant rather negatively. Represents bad weather, bad mood or doom.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/snowman_2603.png",
    title: "Snowman in Snow",
    desc: "It's winter, the snow is falling outside. The snowman stands for the cold season. The season starts as soon as the first snowflake falls.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/snowman-without-snow_26c4.png",
    title: "Snowman Without Snowflakes",
    desc: "Let's build a snowman! The snowman typically has eyes made of pebbles, a carrot nose and wears a hat. It is a symbol of winter, snow and the Christmas season.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/snowflake_2744.png",
    title: "Snowflake",
    desc: "Symbol of frost. Represents the winter: it is cold or it is snowing. Stands for uniqueness, because no snowflake is exactly like the other. After the Disney movie \u201cFrozen\u201c the emoji undoubtedly gained in popularity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/collision-symbol_1f4a5.png",
    title: "Collision Symbol",
    desc: "Wow! Something is (positively or negatively) surprising, great or it just exploded. The concert was awesome, the new project hit the roof or you had a rear-end collision.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wind-blowing-face_1f32c.png",
    title: "Wind Blowing Face",
    desc: "Symbol of Mother Nature, of all fertile and creative things. Generates wind by blowing air from the mouth. In the context of the weather (it is windy outside) or in the figurative sense (blowing away problems or memories).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dash-symbol_1f4a8.png",
    title: "Dash Symbol",
    desc: "I'm already gone! Emoticon shows that someone has to hurry and move quickly. Person has already darted off.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cloud-with-tornado_1f32a.png",
    title: "Cloud With Tornado",
    desc: "A tornado is a tremendous natural phenomenon, leaving a trail of devastation. It symbolizes danger. In a figurative sense, for restlessness or turbulent situations: failures and disappointments are possible.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/water-wave_1f30a.png",
    title: "Water Wave",
    desc: "The wave emoji can be interpreted as a symbol of the power of life. Also has other meanings such as surfing and swimming in the sea, or \u201cSomething lies ahead of you\u201d.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/droplet_1f4a7.png",
    title: "Droplet",
    desc: "Single-drop emoji. Could be water or drops of perspiration. Can stand for inconvenience or discomfort, but is also used as a sign for drizzle and rain.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/splashing-sweat-symbol_1f4a6.png",
    title: "Splashing Sweat Symbol",
    desc: "The drops represent splashing sweat. Somebody is making either a physical or a mental effort right now. In sexual contact for body fluids or excitement.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/umbrella-with-rain-drops_2614.png",
    title: "Umbrella with raindrops",
    desc: "It looks like it\u2019s going to rain or you are already walking in the rain. Besides weather, can also be used to express bad temper or a tense atmosphere. Unofficial safer sex emoji.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/umbrella_2602.png",
    title: "Open Umbrella",
    desc: "It is raining or it is going to rain. You had better take an umbrella with you. In Asia, it not only protects from rain, but also from the sun.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fog_1f32b.png",
    title: "Mist",
    desc: "The view is limited. It\u2019s impossible to see clearly and orientation is difficult. Can stand for the weather, for smog but also for confusion and ambiguity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/green-apple_1f34f.png",
    title: "Green Apple",
    desc: "Logo of one of the most well-known companies. \u201cAn apple a day keeps the doctor away.\u201c Represents health and is the Germans' favorite fruit. The green apple is also a symbol of friendship.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/red-apple_1f34e.png",
    title: "Red Apple",
    desc: "Of symbolic importance: stands for love, temptation, the fall of mankind and the expulsion from paradise. In Latin, apple means \u201cbad, fatal, evil\u201c. Snow White is poisoned by the queen with a red apple. Is also used in its direct meaning or for a healthy lifestyle.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pear_1f350.png",
    title: "Pear",
    desc: "The healthy pear is one of the most popular fruits. The shape of the pear reminds us of the female figure and was the eponym for the pear case. It is popularly associated with being blessed with children.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tangerine_1f34a.png",
    title: "Tangerine",
    desc: "Tangerines sweeten the winter time. The popular citrus fruit has its own holiday on January 4th. Reminds us of the sun and symbolizes the Chinese New Year as well as abundance and happiness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lemon_1f34b.png",
    title: "Lemon",
    desc: "It left a sour taste! If life gives you a lemon, make lemonade! He\u2019s a real lemon! The yellow citrus fruit of the lemon tree grows in warm climate. It is healthy and refreshing due to the citric acid. Juice and peel are used in cocktails, for cooking or baking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/banana_1f34c.png",
    title: "Banana",
    desc: "Someone goes bananas or has a banana problem. For many cultures, the banana is a delicacy and part of a healthy diet. Can also be a sign for fertility or a phallic symbol.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/watermelon_1f349.png",
    title: "Watermelon",
    desc: "The juicy fruit stands for hot summer days, stone spitting contests, healthy eating and holidays. The emoticon of the watermelon promises bliss of love. It is also said to have a positive effect on potency.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/grapes_1f347.png",
    title: "Grapes",
    desc: "The grapes are hanging too high, wishes are unattainable or goals unreachable. The grape is traditionally interpreted as a sign of good health. Christian symbol and raw material for wine.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/blueberries_1fad0.png",
    title: "Blueberries",
    desc: "We're going to pick blueberries in the forest! The blue summer fruit is one of the local super-foods. They make your tongue blue. Whether in a fruit salad, as a topping for muesli or in a cake. Often related to healthy eating.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/strawberry_1f353.png",
    title: "Strawberry",
    desc: "Something or someone is extremely sweet! The strawberry stands for sunny days and summer holidays. (Together with champagne, flowers and chocolate) symbol of sensuality as well as romance and wonderful hours for a couple.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/melon_1f348.png",
    title: "Melon",
    desc: "The juicy melon is considered a symbol for eroticism and lucky love. Can also be interpreted as a bad omen.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cherries_1f352.png",
    title: "Cherries",
    desc: "She is always cherry-picking. You are the cherry on the cake! The summer fruit can also stand for love because of the heart shape. People often see it as a symbol of full lips and the kiss. Cherries are also known as the forbidden fruit. In Japan, they are a symbol for self-discovery.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/peach_1f351.png",
    title: "Peach",
    desc: "Soft skin, juicy and sweet pulp, aromatic smell: the peach is considered a seductive fruit. Due to the characteristic shape, the most commonly used emoji for the female butt.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mango_1f96d.png",
    title: "Mango",
    desc: "I love Indian food! Ripe fruit of a tropical mango. The exotic fruit is sweet, juicy, delicious and is seen as one of the superfoods. In Indian legends the food of the gods.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pineapple_1f34d.png",
    title: "Pineapple",
    desc: "Queen of fruits. Cultivated as a fruit plant in the tropics near the equator. The juicy and sweet pineapple stands for joie de vivre and enjoyment. \u201cPineapple face\u201c is an unfriendly way of describing someone with many scars or pimples in the face.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/coconut_1f965.png",
    title: "Coconut",
    desc: "We are drinking Pi\u00f1a Colada! The coconut is the fruit of the palm tree. It triggers dreams of holidays and is a symbol of tropical beaches and idyllic islands. The coconut is healthy and considered one of the new superfoods.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kiwifruit_1f95d.png",
    title: "Kiwi",
    desc: "I love exotic fruits! In connection with healthy eating or foreign countries. The sweet vitamin bomb has a brownish skin, green pulp and black seeds. The kiwi originally comes from China.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/avocado_1f951.png",
    title: "Avocado",
    desc: "Is either hated or loved because of the special taste. You eat healthy or vegan. Stands for a special lifestyle; super-food is totally hip.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/broccoli_1f966.png",
    title: "Broccoli",
    desc: "Childhood trauma, healthy lifestyle or vegan diet. Related to the cauliflower, it contains few calories and valuable ingredients. Green, healthy but not very popular.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/leafy-green_1f96c.png",
    title: "Leafy vegetables",
    desc: "I eat healthy food or \u201cToday I am going to cook an Asian dish\u201c. Be it diet, vegetarian nutrition or side dish with a steak. With this type of vegetables you eat both stem and leaf. Can be used for salad, chard, spinach, or Chinese cabbage.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cucumber_1f952.png",
    title: "Cucumber",
    desc: "I\u2019ll have just salad today! The vegetable is low in calories and represents a healthy diet. As a beauty recipe, the slices of the cut cucumber can be placed on swollen eyes.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bell-pepper_1fad1.png",
    title: "Sweet pepper",
    desc: "Colorful and healthy! The sweet pepper comes from Central and South America. An integral part of the kitchen either as a vegetable or spice. Related to healthy eating and cooking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tomato_1f345.png",
    title: "Tomato",
    desc: "I like BLT sandwiches (bacon, lettuce and tomato)! or \u201cI drink tomato juice - in Bloody Mary!\u201c In earlier times, the audience threw rotten tomatoes at actors whom they did not like. Often connected with Italy and Italian cuisine. The tomato is a love symbol. It can be understood as a subtle message of a secret new love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/aubergine_1f346.png",
    title: "Eggplant",
    desc: "The eggplant is associated with the male sex. It is one of the sex symbols. Is hated and loved on Instagram #freetheeggplant.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ear-of-maize_1f33d.png",
    title: "Corncob",
    desc: "As a side dish on the grill or as popcorn when at the movies. Corn is native to Mexico and staple food in many countries. Can relate to cooking or healthy nutrition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/carrot_1f955.png",
    title: "Carrot",
    desc: "The carrot stands for healthy food. Can also be used in connection with rabbits or vegetarians. Due to its form, belongs to the phallic symbols of the food category.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/garlic_1f9c4.png",
    title: "Garlic",
    desc: "She has a bad garlic breath! Good for health, talisman, popular cooking ingredient, medicinal plant and protects against vampires. When it comes to its odor, however, opinions differ.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/onion_1f9c5.png",
    title: "Onion",
    desc: "I always cry when I cut onions! Healthy vegetable, flavor enhancer for cooking and medicinal plant of the year 2015. The onion came to Europe 5000 years ago. The largest producers include China and India.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hot-pepper_1f336.png",
    title: "Red Pepper",
    desc: "The red hot pepper has its origin in Mexico. In restaurants often stands for the heat of a dish. A person or a new trend is \u201chot\u201c and \u201csexy\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/olive_1fad2.png",
    title: "Olive",
    desc: "Antipasti, favorite topping on the pizza or dry martini. Stone fruit from the Mediterranean area. Loved or hated for its bitter taste. Olive trees grow some 2000 years old.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/potato_1f954.png",
    title: "Potato",
    desc: "He dropped me like a hot potato! The Spanish explorers brought the potato from South America to Europe. Someone is a couch potato, just lying around and watching TV.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/roasted-sweet-potato_1f360.png",
    title: "Roasted Sweet Potato",
    desc: "The Japanese love to eat it in cold seasons (also known as Yakiimo). Similar to pumpkins over here.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/croissant_1f950.png",
    title: "Croissant",
    desc: "Vacation in France or an invitation to breakfast. Sweet or savory filled puff pastry. The croissant is an integral part of French food culture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bagel_1f96f.png",
    title: "Bagel",
    desc: "I am having an American breakfast today! Palm-sized round yeast pastry with a hole in the middle. Bagels were brought to the United States by Jewish immigrants and are now considered typical American. The topping is either sweet or spicy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bread_1f35e.png",
    title: "Bread",
    desc: "Man does not live by bread alone or you should know which side your bread is buttered on! Staple food in Europe and North America. Consists of flour, water and a raising agent. Bread has a symbolic meaning and is part of many traditions, e.g. bringing bread and salt for a move-in in Germany.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baguette-bread_1f956.png",
    title: "Baguette",
    desc: "I'm making myself a sandwich! The baguette, often with cheese and wine, stands for France. Can refer to the country, food or bread in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flatbread_1fad3.png",
    title: "Flatbread",
    desc: "Roti, naan, chubz, tarte flambee, pita, focaccia or tortilla. The baked grain pulp is known worldwide. Original form of all bread. As a side dish or filled or topped. You're hungry, want a sandwich or would like to go to a new Indian restaurant.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pretzel_1f968.png",
    title: "Pretzel",
    desc: "Let's go to Munich, to the Oktoberfest! Symmetrically entangled pretzels, dredged with salt. Emblem of the bakery trade, Bavarian veal sausage breakfast or New Year's pretzel. The pretzel is a German cultural asset with a long tradition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cheese-wedge_1f9c0.png",
    title: "Chunk Of Cheese",
    desc: "I love cheese or \u201cHard cheese!\u201c Can also be used for dairy products in general. \u201cCheese\u201c: Standard command of the photographer for everyone to smile on the picture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/egg_1f95a.png",
    title: "Hen\u2019s egg",
    desc: "Which was first, the chicken or the egg? Popular food for cooking and baking. Can refer to shopping: do we have enough eggs left? Jokingly for a person (you egghead!) or a careful person (I\u2019m walking on eggshells).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cooking_1f373.png",
    title: "Fried Egg in Frying Pan",
    desc: "A fried egg is sizzling in the pan. This emoji is a symbol for cooking. I'm cooking something!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/butter_1f9c8.png",
    title: "Butter",
    desc: "She\u2019s buttering me up! You\u2019re missing butter in the refrigerator or doing without it as part of a diet. The natural product serves as a flavor carrier and is used in many dishes.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pancakes_1f95e.png",
    title: "Pancake",
    desc: "A plate of pancakes: an American-style breakfast with melted butter and maple syrup. You want to express your preference for desserts (\u201cI have a sweet tooth\u201d).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/waffle_1f9c7.png",
    title: "Waffle",
    desc: "I love waffles for breakfast! The waffle comes from Belgium and the Netherlands. Is baked in a special iron. The oldest pastry in Europe. Popular dish at fairs and as a dessert.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bacon_1f953.png",
    title: "Bacon",
    desc: "I must save my bacon! Crispy fried bacon strips. Component of many hearty dishes, such as burgers or sandwiches. Together with eggs, part of a traditional American breakfast.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cut-of-meat_1f969.png",
    title: "Piece of meat",
    desc: "We're having a barbecue or \u201cMeat is my vegetables\u201c! On average, men eat twice as much meat as women and twice the amount that is healthy. \u201cOne man's meat is another man's poison\u201d or \u201cThat's meat and potatoes!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/poultry-leg_1f357.png",
    title: "Chicken legs",
    desc: "I\u2019m hungry! We\u2019re going to KFC! Crispy on the outside, juicy on the inside: The bottom part of a poultry is grilled, baked or fried. Popular fast food dish.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/meat-on-bone_1f356.png",
    title: "Meat on a bone",
    desc: "We\u2019re going to the Oktoberfest! Knuckles of pork are a very popular dish. Someone is eating like a Neanderthal, wants to appease his appetite for meat or invites you to a barbecue.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hot-dog_1f32d.png",
    title: "Hot dog",
    desc: "I love junk food! Fast food dish: A hot sausage in a rather long bread roll is the basis. Is a must-have when going to that Swedish furniture store chain or a basketball game.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hamburger_1f354.png",
    title: "Hamburger",
    desc: "I love American food! The fast food classic par excellence: sesame rolls topped with a kind of ground beef steak, tomato, onion slices and lettuce. Used in connection with the United States or food in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/french-fries_1f35f.png",
    title: "French fries",
    desc: "We're going to the chippy! Ingredient of national dishes, for instance, with mussels in France or fish and chips in the UK. Fast food, as a side dish and globally a popular frozen product.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/slice-of-pizza_1f355.png",
    title: "Slice Of Pizza",
    desc: "Pizza salami is the most popular pizza in Germany. Many people associate it with a cozy evening with friends. Or to fight a hangover after an evening of convivial drinking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sandwich_1f96a.png",
    title: "Sandwich",
    desc: "Fancy a snack? Two or more (toasted) slices of bread topped with cold meat, cheese, salad and mayonnaise. Classically without the crust and cut in triangles. A quick meal, a sandwich, for a picnic or the occasional hunger while out and about. Sandwich method (wrapping negative things in a praise) or the sandwich child.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/stuffed-flatbread_1f959.png",
    title: "Filled pita",
    desc: "We're going for a kebab! A filled flatbread or pita with salad, meat or falafel and sauce. It can also be a gyros sandwich or shawarma. Refers to food or fast food. Might represent hunger.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/falafel_1f9c6.png",
    title: "Falafel",
    desc: "Dinner tonight at the Turkish restaurant? Popular oriental food. Fried balls made from pureed chickpeas. Originally from Egypt. Fast food variant and vegetarian alternative to kebab.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/taco_1f32e.png",
    title: "Taco",
    desc: "Viva la Mexico! I feel like Mexican food! Popular Mexican fast food dish. Crunchy corn or wheat tortilla filled with minced meat, salad, cheese and salsa.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/burrito_1f32f.png",
    title: "Burrito",
    desc: "We\u2019re going to the new Mexican restaurant! Soft wheat tortilla stuffed with rice, beans, minced meat, salad and cheese. Mexican (fast food) dish from the Mexican and Tex Mex cuisine.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tamale_1fad4.png",
    title: "Tamale",
    desc: "I love Mexican food! Traditional Central American dish. Corn dough, meat and other ingredients are steamed in corn or banana leaves. In connection with travel, exotic cuisine or the preferred food.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/green-salad_1f957.png",
    title: "Lettuce",
    desc: "I'm on a diet! A bowl of lettuce, tomatoes, and onions. Can refer to a healthy lifestyle or eating habits (vegetarian, vegan) and express a preference for salad.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shallow-pan-of-food_1f958.png",
    title: "Flat pan with food",
    desc: "I am going on vacation to Spain! The traditional national dish paella is prepared in a metal pan: saffron rice, vegetables and meat or fish. Can be used for a dinner with friends or cooking in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/canned-food_1f96b.png",
    title: "Can",
    desc: "Today we only have canned food or \u201cI'll take some canned food with me to go camping\u201c. The can contains food that has been preserved by heating up, such as fruits, vegetables or soups.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spaghetti_1f35d.png",
    title: "Spaghetti",
    desc: "I love pasta! Spaghetti with tomato sauce is an Italian classic. Very popular with young and old people. Shows your own fondness for pasta and stands for Italy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/steaming-bowl_1f35c.png",
    title: "Steaming Bowl",
    desc: "Japanese dish with ramen noodles. Traditionally served with chopsticks. The steaming bowl can also represent a warm, cooked meal such as soup.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pot-of-food_1f372.png",
    title: "Pot of food",
    desc: "I'm so hungry! A pot filled with food. Could be a stew or a soup dish. Measured by the pot size, a filling meal for more than one person. Emoji is related to food and cooking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/curry-and-rice_1f35b.png",
    title: "Curry and rice",
    desc: "I love the Asian cuisine! Asian curry dish served in a bowl. The base is a usually a creamy sauce with various spices and meat or fish and vegetables, between super hot and mild.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sushi_1f363.png",
    title: "Sushi",
    desc: "Sushi is a Japanese dish. Boiled vinegar rice is rolled up with raw fish and vegetables and served in bite-sized pieces. In addition to soy sauce, it is usually served with wasabi and pickled ginger.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bento-box_1f371.png",
    title: "Bento box",
    desc: "I brought something for my lunch break! Bento refers to a Japanese box with practical compartments. This way, lunch or dinner can be well prepared and transported. Can refer to Japan, food in general or the trend meal prep.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dumpling_1f95f.png",
    title: "Stuffed Pasta",
    desc: "General term for a dish, with different fillings. Depending on the country, the stuffed pasta has different names: Dumpling (China), Empanada (Spain), Gyoza (Japan), Jiaozi (Korea), or Pierogi (Poland).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/oyster_1f9aa.png",
    title: "Oyster",
    desc: "The world is my oyster! Decadent and aphrodisiac food, manufacturer of pearls and symbol of sexuality and fertility. The hard shell protects the clam from enemies.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fried-shrimp_1f364.png",
    title: "Fried Prawn",
    desc: "The prawn fritter (ebi furai) is a popular food in Japan. Appears in connection with a holiday in Asia, a visit to a Japanese restaurant, or with small male genitals.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rice-ball_1f359.png",
    title: "Rice Ball",
    desc: "\u201cI've ordered Japanese food\u201d or \u201cI'm hungry!\u201d Rice balls with edible seaweed leaves. Like rice crackers, they are part of the most popular Japanese food.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cooked-rice_1f35a.png",
    title: "Cooked Rice",
    desc: "Traditionally, cooked rice is said to have a magic power. Means that better living conditions are waiting for you or that you will be served a delicious rice dish.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rice-cracker_1f358.png",
    title: "Rice Cracker",
    desc: "Let's go to an Asian restaurant! Rice cracker with an edible seaweed leaf. Is a very popular snack in Japan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fish-cake-with-swirl-design_1f365.png",
    title: "Fish Cake With Swirl Design",
    desc: "Japanese fish burger \u201cNarutomaki\u201d with pink spiral pattern. For example, as a topping in ramen noodle soup. Emoji is also known as a synonym of the \u201c@\u201d sign.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fortune-cookie_1f960.png",
    title: "Fortune cookie",
    desc: "Belief is able to move mountains! Aphorism or prophecy: The fortune cookie is known from Chinese restaurants in the US or Europe. You cannot read the banner within the sweet pastry before you break the biscuit open. Stands for Far Eastern philosophy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/moon-cake_1f96e.png",
    title: "Moon cake",
    desc: "The Chinese moon cake is traditionally eaten in autumn during the Moon Festival (Mid-Autumn Festival). The small sweet or spicy cakes are given away to relatives. Are said to be the precursors of fortune cookies. Symbol of autumn and harvest.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/oden_1f362.png",
    title: "Oden",
    desc: "Typical Japanese winter dish. Oden consists of several ingredients, such as boiled egg, potatoes, seafood and tofu. Served as a stew or on a spit for dipping in sauce. Often used in conjunction with Japan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dango_1f361.png",
    title: "Dango",
    desc: "Dangos are steamed dumplings made of rice flour and water. Often they are served on a spit. In this variant, the balls are colored with red beans, egg yolk, and matcha.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shaved-ice_1f367.png",
    title: "Scraped ice",
    desc: "I love ice on hot summer days! Food trend from Japan and very popular in Hawaii. Ice blocks consisting of water and fruits or syrup are scraped. Refreshing and very soft texture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ice-cream_1f368.png",
    title: "Ice creme",
    desc: "Let's have some ice cream! One or more scoops of ice cream in a cup, often garnished with crumble, fruit, waffle rolls, chocolate sauce and cream. Symbol for the summer and popular refreshment on hot days.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/soft-ice-cream_1f366.png",
    title: "Soft ice",
    desc: "Summer, sun, ice cream. The ice cream gets its soft texture through being frothed by overpressure. Soft ice cream is mainly distributed via fast food chains. The emoji can also be used for an ice cream in a waffle or frozen yogurt.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pie_1f967.png",
    title: "Pie",
    desc: "I love cake or \u201cAmerican Pie is my favorite movie\u201c! Ingredients stewed under a cover of dough, savory or sweet. Crispy outside, juicy inside: Pies are popular in the English and American areas.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shortcake_1f370.png",
    title: "Piece Of Cake",
    desc: "Shortcake is a typical American dessert. The tea cake is traditionally made with strawberries in summer. Can be used for invitations, e.g. for coffee and cake, or to express the desire for something sweet.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cupcake_1f9c1.png",
    title: "Cupcake",
    desc: "A case for the calorie police! As sweet as sugar and beautiful to look at. The small decorated mini tarts are usually made of batter with a topping, such as mousse or cream and sugar pearls. American pet name.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/birthday-cake_1f382.png",
    title: "Birthday Cake",
    desc: "Traditionally, the cake with the burning candles is a birthday cake. The birthday child blows out the candles and wishes for something. Generally for celebrations and congratulations.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/custard_1f36e.png",
    title: "Pudding",
    desc: "I definitely want another dessert! Mixture cooked in a water bath, mostly made of eggs, milk and sugar, served with caramel sauce. Can also be used for flan, creme caramel, English cream or desserts in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lollipop_1f36d.png",
    title: "Lollipop",
    desc: "You're so sweet! or \u201cI want candy!\u201c The lollipop conveys fun and reminds us of our childhood. Also used to conciliate a person or in a sexual context. Popular emoji of food bloggers.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/candy_1f36c.png",
    title: "Candy",
    desc: "You are so sweet! Symbol of childishness and cuteness. The bonbon (from the French \u201cbon\u201d, good) is a candy made of sugar for sucking. Also used as a synonym for an encore or a reward. Are given to children on Halloween.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chocolate-bar_1f36b.png",
    title: "Chocolate bar",
    desc: "\u201cI love chocolate\u201c or \u201cchocolate makes you happy\u201c! An emoji for all chocolate lovers. Main ingredients are cocoa products from the cocoa tree as well as sugar. The most chocolate is eaten in Europe and North America.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/popcorn_1f37f.png",
    title: "Popcorn",
    desc: "I'll get the popcorn! You are preparing for verbal slander and mud-wrestling, you expect to enjoy reading a thread, or a special event is awaited with anticipation. The popcorn emoji can be used to invite someone to the cinema or to a cozy evening in front of the TV.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/doughnut_1f369.png",
    title: "Doughnut",
    desc: "You crave for something sweet! Policemen are constantly eating doughnuts in American movies, and they are also known to be Homer Simpson's favorite food. Because of its shape, there could also be a sexual meaning behind it.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cookie_1f36a.png",
    title: "Cookie",
    desc: "Cookies! Not only the Cookie Monster from Sesame Street loves them. With their National Cookie Day in December, Americans even have a holiday for the sweet pastries. \u201cThat's the way the cookie crumbles!\u201c",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chestnut_1f330.png",
    title: "Chestnut",
    desc: "Pull the chestnuts out of the fire. The fruit of the chestnut tree ripens in a spiny capsule. In September, the ripe fruit falls off the tree and the capsule bursts. Roasted chestnuts can be eaten. They are used in medicine and by children to do handicrafts. Symbol for autumn.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/peanuts_1f95c.png",
    title: "Peanuts",
    desc: "That\u2019s peanuts! It's a bagatelle, just small potatoes. People like to nosh the legume or eat it in the form of peanut butter. Peanuts originally come from South and Central America.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/honey-pot_1f36f.png",
    title: "Honey pot",
    desc: "\u201cThe land of milk and honey\u201c or \u201cYou catch more flies with honey than with vinegar\u201c. Made by bees, desired by bears. Emoji also stands for: afacility within computer networks to watch hackers, a swimming device for Pooh Bear as well as place of setting in Harry Potter novels.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/glass-of-milk_1f95b.png",
    title: "Glass of milk",
    desc: "Popular drink among children. Hot milk with honey is considered a sleep aid. The glass is filled with cow's milk or a plant-based alternative, such as soy or almond milk. Someone lives on vegan food or suffers from lactose intolerance.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baby-bottle_1f37c.png",
    title: "Baby Bottle",
    desc: "I have to feed the baby. Generally refers to babies and feeding. Can also be used disparagingly, if someone behaves childishly or immaturely.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hot-beverage_2615.png",
    title: "Hot Beverage",
    desc: "Used as coffee or tea emoji. Can be used for any type of hot drink. Someone urgently needs a coffee to wake up or wants to read a book while having an unhurried cup of tea.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/teacup-without-handle_1f375.png",
    title: "Teacup without handle",
    desc: "Matcha is my favorite tea! Cup with green tea. Green tea differs from other tea types in the preparation, ingredients, effect and taste. Represents tea ceremonies in Japan, healthy diet (trend drink) and the preference for tea.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/teapot_1fad6.png",
    title: "Teapot",
    desc: "We\u2019re reading tea leaves! Popular hot drink: pure enjoyment and relaxation. The tea holds its temperature better in the bulbous teapots. China, Japan, England but also South America and East Friesland are known for their tea ceremony and culture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bubble-tea_1f9cb.png",
    title: "Bubble tea",
    desc: "Cold tea with milk, syrup and sweetened tapioca pearls. Invented in Taiwan in the 1980s, a trend in Asia and the USA in the 1990s and a cult drink in Europe in 2010. In connection with bubble tea or Asia.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/beverage-box_1f9c3.png",
    title: "Beverage box",
    desc: "I'm packing the children's lunch box! Portion packs with a straw, usually with a soft drink or fruit juice. Popular thirst quencher for school and leisure.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cup-with-straw_1f964.png",
    title: "Cup with straw",
    desc: "I'm drinking a shake! Soft-drinks are served in fast-food restaurants in disposable drinking cups with lids and flexible straws.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sake-bottle-and-cup_1f376.png",
    title: "Sake Jar And Cup",
    desc: "Ceramic sake jar with small bowl, in which Sake is served. The wine made of fermented rice is a popular alcoholic drink in Japan. Is drunk hot or cold. Represents Japan itself as well as the culture and the cuisine.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/beer-mug_1f37a.png",
    title: "Beer Mug",
    desc: "Fancy a glass of beer? Let's go to the Oktoberfest! According to the German Purity Law, only hops, malt, water and yeast may be used for brewing. Due to the variety, it would take anyone 13 years to try a different German beer every day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clinking-beer-mugs_1f37b.png",
    title: "Beer Mugs",
    desc: "Two beer mugs, which are clinked. An old tradition: You raise your mugs and drink to each other's health and a digestible beer. You have something to celebrate or you enjoy drinking together during an evening with friends.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clinking-glasses_1f942.png",
    title: "Champagne Glasses",
    desc: "Congratulations or \u201cHappy New Year\u201c. There is an occasion to toast or celebrate. The symbol is often found on invitations for birthdays, New Year's Eve or weddings.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wine-glass_1f377.png",
    title: "Wine Glass",
    desc: "Wine and dine! This is new wine in old bottles. Goes well with many occasions when drinking alcohol: parties, birthdays, restaurant visits or simply a cozy evening with friends.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tumbler-glass_1f943.png",
    title: "Drinking Glass",
    desc: "Straight glass with a thick bottom: The typical glass form for drinking and tasting whiskey and rum. We've got something to celebrate! You want to go to a bar with friends.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cocktail-glass_1f378.png",
    title: "Cocktail Glass",
    desc: "From the glasses with the conical shape you usually drink martini or cocktails. \u201cShaken, not stirred!\u201c is how James Bond mostly enjoys his favorite drink.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tropical-drink_1f379.png",
    title: "Tropical beverage",
    desc: "We\u2019re relaxing by the pool with a cocktail! Mixed beverage, mostly with alcohol, served in a cocktail glass with small parasol. Represents an exotic place, a party or holiday.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mate-drink_1f9c9.png",
    title: "Mate",
    desc: "Mate tea is very popular in South America! The leaves of the mate bush give the infusion a green color. Traditionally drunk from a mate cup, the calabash, and a drinking straw with a sieve. Mate tea stands for revitalizing effects, health benefits and tradition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bottle-with-popping-cork_1f37e.png",
    title: "Bottle With Popping Corks",
    desc: "Let the corks pop! Symbol for celebrations of all kinds, such as birthday, wedding or New Year's Eve. Can also be used for a personal success, such as an achieved aim or a passed exam.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ice-cube_1f9ca.png",
    title: "Ice cube",
    desc: "It's so hot outside, I need to cool down. In summer, ice cubes provide cool and refreshing drinks. An invitation to relax (stay cool) or you are totally easy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spoon_1f944.png",
    title: "Spoon",
    desc: "Cutlery for spooning up soft or liquid food, such as ice cream, cereal, soup or dessert. Refers to a meal, someone is hungry! Someone got the wooden spoon, colloquial for being the last one in the competition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fork-and-knife_1f374.png",
    title: "Fork and knife",
    desc: "I'm hungry! Fork and knife are the most widely used utensils for food consumption in Western cultures. Symbol for restaurants and indication that you can eat something in this place.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fork-and-knife-with-plate_1f37d.png",
    title: "Fork and knife with plate",
    desc: "Tonight we\u2019re going to a nice restaurant! The setting of plates, cutlery and glasses always follows a certain order. The more upscale the ambiance, the stricter the realization. Emoji is associated with serving food, whether at home or in a restaurant or while waiting for the dish.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bowl-with-spoon_1f963.png",
    title: "Bowl with spoon",
    desc: "There is no milk for breakfast or it is cold and you want a hot soup! A bowl or dish with a spoon and no special content. It's about foods that are eaten from a bowl, such as cereals, rice pudding or noodle soup.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/takeout-box_1f961.png",
    title: "Fast food box",
    desc: "I'll fetch something from the Chinese snack stand! If you order Asian food to take away, you often get it in a folded cardboard box with handle for an easy transport.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fondue_1fad5.png",
    title: "Fondue",
    desc: "We\u2019re having fondue! Culinary event and Swiss specialty. Pieces of white bread are dipped in cheese, pieces of meat in hot oil or fruit in melted chocolate. You eat it in company and often in the cold winter months.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chopsticks_1f962.png",
    title: "Chopsticks",
    desc: "Represents a holiday in Southeast Asia or a taste for Asian food. The use of chopsticks requires coordination and some practice. Eating utensils used in pairs by East Asians.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/salt-shaker_1f9c2.png",
    title: "Salt",
    desc: "\u201cThe soup needs a pinch of salt!\u201d or \u201cThe Salt of the Earth\u201d. Rub salt into someone's wounds. Without salt, humans would not survive. Spice, preservative agent and very precious in the Middle Ages (white gold).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/soccer-ball_26bd.png",
    title: "Soccer Ball",
    desc: "I want to play soccer or \u201cThe game is starting!\u201c The black-and-white ball is mostly used in conjunction with European soccer.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/basketball-and-hoop_1f3c0.png",
    title: "Basketball",
    desc: "Let's shoot some hoops! Two teams are trying to shoot the ball into the opponent's basket. There is a World Cup every four years. Professional players are among the highest salaried professional athletes.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/american-football_1f3c8.png",
    title: "American football",
    desc: "Touchdown! Popular ball sport in the US. Two teams try to get the ball into the opposing end zone. The emoji is used in connection with the sport, the Superbowl or the United States.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baseball_26be.png",
    title: "Baseball",
    desc: "I would like to watch a baseball game! The white ball with the red stitching is typical for the ball game. National sport in the US as well as in Latin American and East Asian countries. Symbol for USA and sports in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/softball_1f94e.png",
    title: "Softball",
    desc: "I love ball sports! Softball is a variant of baseball and popular in the US. Among other things, the difference lies in the size of the ball and the playing field. Softball is predominantly played by women, baseball predominantly by men.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tennis-racquet-and-ball_1f3be.png",
    title: "Tennis",
    desc: "Grand Slam tournament! The ball game is played by two or four players. Due to the light clothing of the players, tennis is also called the \u201cwhite sport\u201c. Formerly the sport of the rich, today a popular sport. In a figurative sense, the emoji can also stand for two sides of a certain topic someone is struggling with.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/volleyball_1f3d0.png",
    title: "Volleyball",
    desc: "Beach volleyball during vacation, volleyball in school sports or Summer Olympics discipline. The aim of this team sport is to get the ball across the net onto the opposing ground. Represents the sport.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rugby-football_1f3c9.png",
    title: "Rugby football",
    desc: "The team sport originated in England. The ball is carried or kicked past the opponent to score points. Refers to the ball, a player or the sport. Can also point to a reckless behavior of the conversational partner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flying-disc_1f94f.png",
    title: "Frisbee",
    desc: "We are going to play frisbee in the park! The plastic discus is popular as a beach toy and sports equipment for individual and team sports. Also dogs love to catch the disc.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/boomerang_1fa83.png",
    title: "Boomerang",
    desc: "Australia is my dream country! Aboriginal throwing weapon and sports equipment. A boomerang always comes back to the thrower. In a figurative sense or as a warning: this will come back to you at some point!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/billiards_1f3b1.png",
    title: "Billiards",
    desc: "The black billiard ball with the number 8 may only be potted when all other balls are already gone. Represents the only remaining one (last man standing), a difficult situation, a risk-taking player. Fatal motive: With this emoji, the opposite effect is meant to be achieved.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/yo-yo_1fa80.png",
    title: "Yo-yo",
    desc: "I hope I can avoid the yo-yo effect! The yo-yo is a popular childhood game of skill. Metaphor for unwanted weight gain after a diet or for an up and down in, for example, stock prices.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/table-tennis-paddle-and-ball_1f3d3.png",
    title: "Table tennis racket and ball",
    desc: "Let\u2019s play table tennis! Table tennis, colloquially called ping-pong, is an Olympics discipline and a popular pastime. The ball sport has its origin in England.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/badminton-racquet-and-shuttlecock_1f3f8.png",
    title: "Badminton racket and shuttlecock",
    desc: "I love badminton! The goal is to get the shuttlecock in the opposing field without leaving a possibility to beat it back. Competitive sport and popular leisure activity. Symbolically, badminton can point to the need for greater personal involvement.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ice-hockey-stick-and-puck_1f3d2.png",
    title: "Hockey stick and puck",
    desc: "Stanley Cup (world\u2019s most important hockey trophy)! In this fast and hard ball sport, players move over the ice on skates and try to play the puck into the opponent's goal. Has its origins in Canada.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/field-hockey-stick-and-ball_1f3d1.png",
    title: "Field hockey stick and ball",
    desc: "We are watching the Olympic field hockey tournaments! The ball game is played with hockey sticks on grass. The aim of this team sport is to hit the ball into the opponent's goal. In this sport, women wear skirts.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lacrosse-stick-and-ball_1f94d.png",
    title: "Lacrosse stick and ball",
    desc: "The fastest game on two legs! Tactics, team spirit, speed and stamina are connected to the team sport. Aim: to use the stick to get the ball into the opponent's goal. College sport and popular in the USA and Canada.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cricket-bat-and-ball_1f3cf.png",
    title: "Cricket bat and ball",
    desc: "Cricket is a rounders game with two teams. Resembles baseball. The only sport with an official lunch break as well as tea breaks. In the spiritual sense, cricket stands for a balanced social life and deep friendship, but also for competitive situations and rivalries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/goal-net_1f945.png",
    title: "Goal net",
    desc: "Someone scored! Whether in football or figuratively in a professional or private sense. A goal has been achieved or a success can be recorded, e.g. the new job is under your belt!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flag-in-hole_26f3.png",
    title: "Flag in hole",
    desc: "The aim of a fairway in golf is to hole the put out. The flag helps to spot the hole from afar. The ball is no longer hit at this point, but rolled into the hole over the grass.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kite_1fa81.png",
    title: "Kite",
    desc: "We\u2019re flying kites! Popular leisure activity for children on windy autumn days. Mentioned first in China 2500 years ago, the aircraft came to Europe in the 16th century. Related to fall, fun and family or childhood.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bow-and-arrow_1f3f9.png",
    title: "Bow And Arrow",
    desc: "Cupid is aiming at you! Bow and arrow are often associated with a love arrow. Can also stand for archery. Symbolic meaning: point to an event or hit the target.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fishing-pole-and-fish_1f3a3.png",
    title: "Fishing Rod With Fish",
    desc: "Fishing for compliments or \u201cI have other fish to fry!\u201c A popular recreational sport that means relaxation for many people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/diving-mask_1f93f.png",
    title: "Diving mask",
    desc: "\u201cI love skin-diving\u201d or \u201cWe booked our diving holiday!\u201d Basic equipment for snorkelers and diving enthusiasts to discover the fascinating and colorful underwater world. Popular activity on vacation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/boxing-glove_1f94a.png",
    title: "Boxing glove",
    desc: "\u201cYou better not upset me\u201d or \u201cWe're watching the boxing match\u201d. The padded glove is used for protection during boxing and various martial arts. Can relate to the new hobby. Wham, a tricky task has been mastered!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/martial-arts-uniform_1f94b.png",
    title: "Martial arts suit",
    desc: "Training is up tonight! The traditional clothing consists of a jacket, trousers and a belt. People wear the tracksuit in martial arts such as judo or karate. Symbolic for martial arts.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/running-shirt-with-sash_1f3bd.png",
    title: "Running shirt with sash",
    desc: "Someone is participating in the marathon, jogging regularly or needs a new running shirt. At a competition or a running event the runners can be identified based on the color or the number on the sash.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/skateboard_1f6f9.png",
    title: "Skateboard",
    desc: "Let's go to the skate park! The skateboard is a board with two axles and four wheels. Not so much a means of transportation, but a hobby, sport and distinct culture. \u201cAsphalt surfing\u201c was born in the 60s in California.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/roller-skate_1f6fc.png",
    title: "Roller skates",
    desc: "Hurry up! Leisure activity, competitive sport and a way to move forward quickly. The 80s cult still inspires children and adults today. Balance, perseverance and skill are required.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sled_1f6f7.png",
    title: "Sleigh",
    desc: "Fancy sledging? Coasting or sledging is a wintry mode of transport and a popular activity in the snow. A great pleasure for young and old people. Linked with childhood and Christmas.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ice-skate_26f8.png",
    title: "Skate",
    desc: "We\u2019re going skating! The skid under the shoe allows you to glide on ice surfaces. Be it figure skating, hockey or skating in a hall or on the frozen lake. A popular activity in the colder season. The emoji indicates balance, skill and self-restraint.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/curling-stone_1f94c.png",
    title: "Curling stone",
    desc: "We have tickets for the Winter Olympics! A winter sport played on ice. Two teams compete against each other, the team with the highest total score wins. Wiping the ice influences the curling stone's direction.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ski-and-ski-boot_1f3bf.png",
    title: "Ski And Ski Boots",
    desc: "Winter sports are very popular. This emoji can refer to a person who skis. Or to a place where people can go skiing. Maybe you still have to buy some equipment or lend it locally.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/skier_26f7.png",
    title: "Skier",
    desc: "Let's go on a skiing holiday! Since the 1950s, alpine skiing has become a leisure sport. The Alps are a popular destination. A lift transports the skiers to the slopes.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/snowboarder_1f3c2.png",
    title: "Snowboarder",
    desc: "The person is sliding over the snow standing on a snowboard. In 1900, the predecessor of today's snowboard was invented by an Austrian. Symbol for winter: whether vacation, sports, activities or mountains.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/parachute_1fa82.png",
    title: "Parachute",
    desc: "We're going skydiving or \u201cYou make me feel secure!\u201c In spite of the great height, you land safely back on earth with a parachute. Stands for adrenaline, a thirst for adventure and freedom.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/weight-lifter_1f3cb.png",
    title: "Weightlifter",
    desc: "Are we going to work out a little at the gym tomorrow? Athletic sports serve to build up physical strength and muscles. Either for competitions or to toughen the body. Symbol for the gym, a fitness lifestyle and sports nutrition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wrestlers_1f93c.png",
    title: "Wrestler",
    desc: "Do you want to wrestle with me? Wrestling is a full-body martial art. Olympic discipline, part of the military close combat training. Wrestling with someone else or with a problem.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-doing-cartwheel_1f938.png",
    title: "Person is doing a cartwheel",
    desc: "Laterally executed rollover on a line or the balance beam. Acrobatic gymnastics and one of the techniques in artistic gymnastics. Someone recently started to go to gymnastics or is currently very silly, happy and frolicsome.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/woman-with-ball_26f9-fe0f-200d-2640-fe0f.png",
    title: "Person Dribbling Ball",
    desc: "I'm doing sports now! Female person dribbling a basketball. Emoji is a symbol for sport and activity. Can be the invitation to a game.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fencer_1f93a.png",
    title: "Fencer",
    desc: "Fight for something or rush one\u2019s fences. Person in fencing clothes with mask and weapon. Martial arts, settling a duel. En garde! Beware, your opponent is striking a fighting position. Illustrates revenge, retribution and signalizes dispute and tough demands.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/handball_1f93e.png",
    title: "Handball",
    desc: "Two teams try to throw the ball into the opponent's goal. The counterpart to football is a well-known and popular team sport. Stands for stamina, speed and coordination.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/golfer_1f3cc.png",
    title: "Person playing golf",
    desc: "Do you have time to play golf? Golfer at the tee. A ball should be played from the tee into the hole with as few hits as possible. Traditional ball sport. Formerly being the sport of the rich and powerful, golf has long turned into a mass sport.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/horse-racing_1f3c7.png",
    title: "Horse Race",
    desc: "A jockey is riding a horse. Professional riders must complete a three-year training. Horse racing is one of the oldest sports. Can be used in conjunction with a competition, e.g., who will be home quicker.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-in-lotus-position_1f9d8.png",
    title: "Person in the lotus position",
    desc: "Similar to the cross-legged seat, but in the lotus position the feet are lying on the thighs. Classical sitting posture of the yogi and sitting position in meditation. Represents inner balance, even temper, flexibility, calmness and strength.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/surfer_1f3c4.png",
    title: "Surfer",
    desc: "Surfing the perfect wave or the Internet. On a special board you let yourself be carried over the water by the impetus of a wave. Surfing is a popular water sport. Sun, sea, Hawaii and a very specific way of life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/swimmer_1f3ca.png",
    title: "Swimmer",
    desc: "Swimming is suitable for everyone regardless of age and condition. The person can swim in the swimming pool, a lake or in the sea. Let's go for a swim!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/water-polo_1f93d.png",
    title: "Water polo player",
    desc: "Go get your bathing suit! In the ball game in water, players of two teams try to throw the ball into the opponent's goal. Professional sport, Olympic discipline or activity in the swimming pool.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rowboat_1f6a3.png",
    title: "Rowing boat",
    desc: "We are all in the same boat! Leisure activity, professional or amateur sport, family excursion or a romantic date. Rowing the boat works best on calm waters.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/person-climbing_1f9d7.png",
    title: "Person is climbing",
    desc: "You climbed to the summit, the goal has been reached. The person is secured and climbing on a mountain face. Popular leisure activity and full-body sport. Requires physical strength, coordination and courage.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mountain-bicyclist_1f6b5.png",
    title: "Mountain biker",
    desc: "Let's take a tour of the mountains! With a mountain bike, a type of off-road bike, you can discover trails off the paved roads. Stands for sports activities and excursions in the nature.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bicyclist_1f6b4.png",
    title: "Bicyclist",
    desc: "Fancy a bike tour? Means of transport, leisure activity or sporting activity. Cycling is a popular way of avoiding traffic jams, losing some weight or going on a tour.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/trophy_1f3c6.png",
    title: "Cup",
    desc: "A shiny cup, usually with an engraving. A symbol of success and recognition of the performance of an individual or a team. We won!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/first-place-medal_1f947.png",
    title: "First Place Medal",
    desc: "I won! The winner of a competition is awarded the gold medal. In the figurative sense, can also refer to a person who considers himself/herself a winner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/second-place-medal_1f948.png",
    title: "Second Place Medal",
    desc: "We are second! The silver medal stands for the second place in competitions, the so-called first loser. In sports traditionally the first three places are called winners.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/third-place-medal_1f949.png",
    title: "Third Place Medal",
    desc: "We got bronze! The bronze medal is the award for the third place (mostly) in an athletic competition. The medal is hanging on a ribbon and is worn around the neck during the award.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sports-medal_1f3c5.png",
    title: "Sport Medal",
    desc: "The other side of the coin. Who will win the most medals? The award is given at many important sports events, e.g. the Olympic Games.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/military-medal_1f396.png",
    title: "Military medal",
    desc: "You deserve a medal for that! The ribbon with medallion is a medal for military success and merit. Serves as a reminder of personal achievements and abilities.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/reminder-ribbon_1f397.png",
    title: "Reminder Ribbon",
    desc: "Symbol of solidarity. As a sign of the (politically independent) support of military personnel or to draw attention to the disease endometriosis.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sewing-needle_1faa1.png",
    title: "Sewing needle",
    desc: "Can you mend my shirt, please? The threaded needle is used for sewing or manual work. Clothing needs to be mended, a dress needs to be tailored, or fabrics need to be sewn together. Or the wound has been stitched up by a doctor.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/knot_1faa2.png",
    title: "Knot",
    desc: "The knot has been untied! A knot can symbolize a connection but also the solving of a difficult task. Someone is in a confusing situation or feels support and a strong connection.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ticket_1f3ab.png",
    title: "Ticket",
    desc: "We got the tickets! Emoji points to an event. This could be a stage performance, a sports event, a movie night or a festival. The tickets have already been bought or still need to be procured.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/admission-tickets_1f39f.png",
    title: "Admission tickets",
    desc: "I've got two tickets for the football match! \u201cAdmit one\u201c grants a person entrance. Among others, these tickets are required for events, the cinema, the swimming pool or for a joyride.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/circus-tent_1f3aa.png",
    title: "Big top",
    desc: "Let the show begin! Circular big top with flag. A circus is usually a group of performers who entertain the audience with various artistic performances, such as acrobatics or magic. Emoji is often used as an invitation to the circus or to draw attention to the silly behavior of a person.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/juggling_1f939.png",
    title: "Juggler",
    desc: "Bread and circuses! An artist who performs feats by throwing things in the air and catching them. Jugglers are dexterous, playful and focused. They master multitasking and are ready to take risks.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/performing-arts_1f3ad.png",
    title: "Performing Arts",
    desc: "Would you like to go to the theater with me? The two masks have their origin in the tragicomedy of the ancient Greek theater. One face smiles, the other one frowns. Represents the drama of the story, the good and the bad character, the hero of the story and his opponent.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/magic-wand.png",
    title: "Magic wand",
    desc: "\u201cI'll do the job with ease\u201d or \u201cSomething magical will happen!\u201d A wand is an element of supernatural powers. Stands for illusions, magic, fantasy, and for positive as well as negative influence on others.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ballet-shoes_1fa70.png",
    title: "Ballet shoes",
    desc: "\u201cTomorrow is my performance\u201d or \u201cShe looks like a prima ballerina!\u201d Hair in a bun, body with tutu and ballet shoes. Related to dance, girlishness, grace and perfectionism.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/artist-palette_1f3a8.png",
    title: "Painter's palette",
    desc: "It's time to get creative! When painting, the artist uses a palette to mix colors. Refers to art, painting itself, creativity or a new hobby.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clapper-board_1f3ac.png",
    title: "Clapperboard",
    desc: "\u201cAnd action!\u201c, \u201cLet's start again\u201c or \u201cThat's it, it's a wrap!\u201c The clapperboard is used in shooting to match sound and image later when cutting the material. Serves as a symbol for cinema or shooting.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/microphone_1f3a4.png",
    title: "Microphone",
    desc: "\u201cWe're going to the karaoke bar\u201c or \u201cThe concert was amazing!\u201c Emoji is associated with speaking or singing in front of several people, for example at events. May also indicate a person's talkativeness or the craving for recognition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/headphone_1f3a7.png",
    title: "Headphones",
    desc: "Speakers instead of sneakers. Represents a certain lifestyle, e.g. hipsters like to wear huge headphones. Can generally be used for music: is currently listening to a great album or podcast.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/musical-score_1f3bc.png",
    title: "Full score",
    desc: "We\u2019re rehearsing with the orchestra! Represents music, a symphony, a concert or classical music. The written music combination contains all the information for musicians to play the composition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/musical-keyboard_1f3b9.png",
    title: "Keyboard",
    desc: "An electronic keyboard instrument that is neither a piano nor a grand piano. Often used by solo or other entertainers because of the auto accompaniment. Is also associated with control or manipulation of other people's emotions.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/accordion_1fa97.png",
    title: "Accordion",
    desc: "I love shanties! Versatile instrument for different styles of music. The accordion made it into the Guinness Book of Records: The largest in the world weighs 200 kg, is almost 2.50 m high and 1.90 m long.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/drum-with-drumsticks_1f941.png",
    title: "Drum",
    desc: "Rataplan! It's going to be exciting, an announcement or an event is imminent. Refers to the instrument or music in general. Someone plays the drums well or there is live music in a bar.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/long-drum_1fa98.png",
    title: "Barrel drum",
    desc: "Rhythm is it! One of the oldest musical instruments in the world. Is played by hitting your hands on it. Widely used in dance music. The origins can be found in Africa.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/saxophone_1f3b7.png",
    title: "Saxophone",
    desc: "Do you want to go to the jazz club? The musical instrument with a smooth tone is made of brass. The saxophone has a long tradition in the wind ensemble, in classical music, but also in Rock'n'Roll, for instance. As a symbol, it is often associated with intellectual capabilities, communication skills and news, but also with a warning.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/trumpet_1f3ba.png",
    title: "Trumpet",
    desc: "I need your attention! Someone is musical and even plays an instrument himself or likes music. Trumpets are also known from folk music, the wind ensemble or parades. Formerly, the musical instrument made of tin was reserved for kings and heavenly legions, such as angels with trumpets.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/guitar_1f3b8.png",
    title: "Guitar",
    desc: "The musical instrument is displayed as either acoustic or electric guitar. Represents music, concerts and festivals. The guitar has been around for 5000 years by now.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/banjo_1fa95.png",
    title: "Banjo",
    desc: "I love country music! Musical instrument with four to eight strings, a long neck and a hollow, round body. Originally of West African origin.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/violin_1f3bb.png",
    title: "Violin",
    desc: "String the bows to one's violin, \u201cHe fiddles with money\u201c or \u201cShe is as fit as a fiddle.\u201c Can also stand for the string instrument itself or classical music.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/game-die_1f3b2.png",
    title: "Dice",
    desc: "The die is cast. Dice are used in many board games and in the casino. Luck or destiny will decide on how the hexagonal die will fall.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-chess-pawn_265f.png",
    title: "Chess piece",
    desc: "That was a clever (chess) move, \u201ccheckmate\u201c, or \u201ctreat someone like a chess piece\u201c. Strategic board game for two people with 16 pieces each in light and dark color. Symbol of intelligence and power, but also the fight between good and evil.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/alien-monster_1f47e.png",
    title: "Alien Monster",
    desc: "Let's play something! The monster smiley is known from Arcade and computer games. Is also often interpreted as an alien.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/direct-hit_1f3af.png",
    title: "Direct Hit",
    desc: "Smash hit! \u201cYou got it to the point\u201d or \u201cI agree with you\u201d. A blue arrow right in the dartboard's bullseye. Is also used to indicate a dart game.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bowling_1f3b3.png",
    title: "Ninepins",
    desc: "Shall we go bowling? Sport and popular pastime with friends or family. Something went well, a challenge was mastered successfully and you hit a strike.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/video-game_1f3ae.png",
    title: "Game console",
    desc: "Let's play! Invitation to friends to play together. A new video game is on the market and you will be busy in the near future. Be it fantasy or adventure game or car racing: console games are a popular pastime.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/slot-machine_1f3b0.png",
    title: "One-armed bandit",
    desc: "We are going to Vegas! The slot machine is operated with a lever, that is, one arm, and, like a bandit, takes away your money. The number 7 is considered a lucky number. If the same symbol appears in each display, the machine spits out the winnings.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pinata_1fa85.png",
    title: "Pi\u00f1ata",
    desc: "We\u2019re celebrating children's birthday! Papier m\u00e2ch\u00e9 figure filled with candy or toys. Children beat the pi\u00f1ata blindfolded till it breaks open. Common in Central America at Christmas and children's birthdays and in Spain at Easter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/nesting-dolls_1fa86.png",
    title: "Matryoshka",
    desc: "I have many layers! Five to seven wooden dolls of different sizes that are nested one inside the other. As a warning: Be careful, he has many faces! Popular children's toy and symbol of Russia.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/jigsaw-puzzle-piece_1f9e9.png",
    title: "Puzzle piece",
    desc: "It is tricky, \u201cHow does this all fit together?\u201c or \u201cYou are the missing piece\u201c. Be it a game or a leisure activity: The puzzle pieces are reassembled into a complete picture. Can be an expression of confusion or mystery. Trains the senses of sight and touch as well as logical but also abstract thinking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/automobile_1f697.png",
    title: "Automobile",
    desc: "I'm on the road! Red (Android: blue) car. Red things seem to move faster (known from Doppler effect). Stimulates the release of adrenaline and feelings like excitement or intensity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/taxi_1f695.png",
    title: "Taxi",
    desc: "We\u2019ll call a taxi! A taxi is a means of public transportation for occasional passenger transportation. Taxis are available worldwide, most of them in major cities. The emoji can indicate a fast and comfortable transport.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/recreational-vehicle_1f699.png",
    title: "Camper",
    desc: "We\u2019re going on a road trip! The emoji shows a vehicle used for leisure time, such as a camper or mobile home. Can also represent an SUV (sport utility vehicle) with increased chassis clearance. Figuratively, the emoji could stand for a difficult journey.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pickup-truck_1f6fb.png",
    title: "Pickup truck",
    desc: "Mud, gravel roads and sunsets in the wilderness. All-wheel-drive vehicle with an open loading area for transporting heavy objects. From a commercial vehicle to a lifestyle car. Clich\u00e9 and prejudice: a big car compensates for possible deficits.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bus_1f68c.png",
    title: "Omnibus",
    desc: "I'm going by bus! The bus is used as a public means of transport for the transport of many people within cities, in the countryside or as a school bus.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/trolleybus_1f68e.png",
    title: "Trolleybus",
    desc: "Emoticon of a trolley bus, a hybrid of bus and tram. Can be used as a smiley for public transport.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/racing-car_1f3ce.png",
    title: "Racing car",
    desc: "The race has started! Usually, a racing car is exclusively designed for racing, e.g. for Formula 1. Can also refer to cars in general, the driving style of a person or to high speed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/police-car_1f693.png",
    title: "Police Car",
    desc: "Side view of a police car. Warns of an illegal intent. Stands for morality and similar norms as well as your own conscience.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ambulance_1f691.png",
    title: "Ambulance",
    desc: "An ambulance transports non-critically ill people to a hospital. On the other hand, a mobile intensive care unit is usedforemergency ambulance service.Emoji is related to injuries, illnesses, accidents and medicaltopics.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fire-engine_1f692.png",
    title: "Fire engine",
    desc: "Where\u2019s the fire? Is there an emergency? In case of fire, the fire brigade advances with a fire engine to fight the flames. Among other things, the fire department helps in cases of fire, accidents and floods.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/minibus_1f690.png",
    title: "Minibus",
    desc: "A minibus, unlike the normal bus, can only carry a few people. Can symbolize the wish to go on vacation: \u201cLet's go camping\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/delivery-truck_1f69a.png",
    title: "Delivery van",
    desc: "The parcel will be delivered today! I need to bring you something! A delivery truck weighs less than 3.5 tons, its design resembles that of a truck (cargo space larger than the passenger compartment) and it carries goods from A to B.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/articulated-lorry_1f69b.png",
    title: "Articulated vehicle",
    desc: "I need a semitrailer for the move! Truck tractor and semitrailer. Often used in long-distance freight. The emoji usually refers to the job description or the transport of heavy cargo.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tractor_1f69c.png",
    title: "Tractor",
    desc: "A tractor or traction engine is a slow but very powerful towing vehicle. Represents fresh country air, the profession of the farmer, a farm or agriculture in general. Townsfolk often have a romantic view of rural life. Pejorative for hillbillies.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/probing-cane_1f9af.png",
    title: "White cane",
    desc: "To be blind as a bat or to be blind to something. The white cane facilitates locomotion and mobility for visually impaired or blind people. Symbolic of a person who closes their eyes or acts blindfold.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/manual-wheelchair_1f9bd.png",
    title: "Wheelchair",
    desc: "Are there any places for wheelchair users? The wheelchair supports people who are impaired in walking. Symbolic for disability and accessibility.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/motorized-wheelchair_1f9bc.png",
    title: "Motorized wheelchair",
    desc: "Electric wheelchair or electric vehicle, powered by an electric motor drive. For getting around outside or for people with additional deficits in their arms. Disability or mobility symbol.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/scooter_1f6f4.png",
    title: "Scooter",
    desc: "My child gets the first scooter! Loved by children and rediscovered by adults. Driven through muscle power. For bridging short distances or as a fun leisure activity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bicycle_1f6b2.png",
    title: "Bicycle",
    desc: "We\u2019re going on a biking trip! Means of transport to get from A to B or as a leisure or sports activity. There are twice as many bicycles as cars worldwide. Amsterdam is seen as the bicycle stronghold. Emoji can symbolize a healthy lifestyle as well as environmental awareness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/motor-scooter_1f6f5.png",
    title: "Motor scooter",
    desc: "\u201cWith this traffic, I prefer the scooter\u201d or \u201cI ride my moped to school\u201d. A popular means of transport in large cities or Asian countries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/racing-motorcycle_1f3cd.png",
    title: "Motorcycle",
    desc: "\u201cI'm on the way!\u201c or \u201cWe're going on a motorcycle trip\u201c. A racing motorcycle participates in races or world championships of road racing. The MotoGP is considered the top class. The emoji is used in conjunction with motorcycles and speed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/auto-rickshaw_1f6fa.png",
    title: "Electric rickshaw",
    desc: "I would love to take a rickshaw! Three-wheeled vehicle in Asia. Motorized version of a traditional rickshaw. Related to taxis, getting around, adventure and distant countries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/oncoming-police-car_1f694.png",
    title: "Arriving police car",
    desc: "The police are already here! Police vehicle. The policemen in the patrol car are on their way or have already arrived. Someone needs help, a criminal offense is resolved or a villain is arrested.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/oncoming-bus_1f68d.png",
    title: "Arriving bus",
    desc: "The bus is arriving! The bus is a popular means of transportation for traveling, be it for the transport from one place to another or a holiday trip. This emoji shows the front view of a bus, so can refer to arrival.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/oncoming-automobile_1f698.png",
    title: "Arriving car",
    desc: "\u201cWe'll be right there\u201c, \u201cI almost got hit today\u201c or \u201cOut of the way!\u201c The emoji shows a car in front view. Can refer to one's own vehicle, the mode of locomotion or to trends, such as autonomous driving.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/oncoming-taxi_1f696.png",
    title: "Arriving taxi",
    desc: "The taxi is here! The front view of a taxi. Depending on the country, recognizable through the color, the imprint and/or a sign on the roof. Worldwide, taxis carry people from A to B. Refers to the type of transport, to city life or metropolises like New York.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/aerial-tramway_1f6a1.png",
    title: "Cable railway",
    desc: "We\u2019ll meet at the summit! The cable car symbolizes success that can be achieved without much effort. It carries people from the valley to a mountain peak: to go hiking, skiing or to enjoy the view.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mountain-cableway_1f6a0.png",
    title: "Mountain cable railway",
    desc: "\u201cThe view of the mountains was spectacular\u201c or \u201cI'm moving up!\u201c Mountain railways surmount large acclivities. The means of transport carries people to the mountain peak for winter sports or for hiking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/railway-car_1f683.png",
    title: "Railway wagon",
    desc: "Which compartment are we in? A wagon on a rail pulled by a locomotive and carrying goods or people. Emoji refers to transportation or travel.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tram-car_1f68b.png",
    title: "Streetcar",
    desc: "The wagon of a streetcar or tram. In big cities, it runs on the road and carries people on rather short routes. Is used in connection with transport or public service vehicles.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mountain-railway_1f69e.png",
    title: "Mountain railway",
    desc: "A fantastic journey to the mountains! Train ride through a mountain landscape with a great panorama. The emoji may also indicate a particular country, e.g. Switzerland.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/suspension-railway_1f69f.png",
    title: "Suspension railway",
    desc: "There is difficult terrain ahead of us! I have never gone by suspension railway! The suspension railway is only found in a few, densely populated cities, such as Memphis, Wuppertal or Tokyo. Unlike regular trains, it doesn\u2019t run on rails but hangs from a track.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/monorail_1f69d.png",
    title: "Monorail",
    desc: "Disneyland, we are coming! Resembles a train, but is running on one single, very narrow track. The monorail carries people to tourist destinations, in amusement parks but also in big cities like Moscow or Seattle.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/high-speed-train_1f684.png",
    title: "High-speed train",
    desc: "\u201cI'll take the fast train\u201c or \u201cI'll be right there\u201c! A train of the railway traffic that covers great distances at high speed (at least 190 km/h). Currently, high-speed trains achieve 350 km/h in regular operation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/high-speed-train-with-bullet-nose_1f685.png",
    title: "High-speed train with bullet nose",
    desc: "A bullet train with an aerodynamic nose reminiscent of a bullet. The train travels long distances at high speed. Is also used for Japanese high-speed trains (Shinkansen) due to the streamlined look.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/light-rail_1f688.png",
    title: "City railway",
    desc: "I will be late, I missed the suburban train! Public means of transport on rails for the local passenger traffic in major cities and suburbs. Germans use the \u201cS-Bahn\u201d, the British have their Tube and the Americans travel by subway.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/steam-locomotive_1f682.png",
    title: "Steam locomotive",
    desc: "Make headway at full speed! The old-fashioned steam locomotive is powered by steam. This type of locomotive dominated rail traffic until the mid-20th century. Symbolizes industrialization and technical progress.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/train_1f686.png",
    title: "Train",
    desc: "\u201cShe\u2019s getting on the gravy train\u201d, \u201cHe\u2019s snoring like a freight train\u201d or \u201cJumping on the bandwagon\u201d. Popular means of travel and transportation for short and long distances.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/metro_1f687.png",
    title: "Subway",
    desc: "A subway, also called tube. Rail transport system in public mass passenger transport. The emoji can refer to the means of transport itself or to cities with a large subway network, such as Paris.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tram_1f68a.png",
    title: "Tram",
    desc: "We\u2019ll take the tram! A tram is a rail-bound means of transportation. It is powered by electrical energy. Often runs on roads that are also used by cars and bicycles. Popular in cities for mastering short distances.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/station_1f689.png",
    title: "Station",
    desc: "\u201cI'll meet you at the platform\u201c or \u201cThe train has left\u201c! People get on or off the train at a stop or a station. A billboard informs them about the departure times and delays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/police-cars-revolving-light_1f6a8.png",
    title: "Police Cars Revolving Light",
    desc: "I need your help! The red, rotating alarm light with loud siren represents the police, an ambulance, or the fire department. Might stand for an emergency situation and can be used playfully or seriously. Indicates something important or wants to warn.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/airplane_2708.png",
    title: "Airplane",
    desc: "You want to get away from here and would like to go on holiday by plane. Or the mobile phone is in flight mode. Flying is one of the safest means of transportation, only the elevator is safer.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/airplane-departure_1f6eb.png",
    title: "Plane departure",
    desc: "Ready for takeoff! We\u2019re leaving! The plane is departing. Someone is going to another city or country by plane, be it on vacation or on a business trip. May also mean I am ready for a holiday and just want to leave. Or someone is setting off quickly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/airplane-arriving_1f6ec.png",
    title: "Airplane landing",
    desc: "I'll take the plane back tomorrow or \u201cWe've touched down safely again\u201c! The plane is in the approach for landing: Someone is coming home.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/small-airplane_1f6e9.png",
    title: "Small aircraft",
    desc: "We\u2019re taking the private jet! Symbolizes a luxury trip, the new hobby or departures from remote provincial airports. Small or light planes are lighter in weight than standard aircraft. Emoji can also stand for the lifestyle of the beautiful and the rich as well as for wanderlust and holidays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/seat_1f4ba.png",
    title: "Seat",
    desc: "I reserved seats! This type of immovable seats can be found on the plane, train or bus. Can be used in connection with transportation or travel. Erect your backrest, we'll lift off!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rocket_1f680.png",
    title: "Rocket",
    desc: "A rocket is shot into space. \u201cCome on, this is easy. It's not rocket science!\u201c Or like Buzz Lightyear of Toy Story said: To infinity and much farther.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flying-saucer_1f6f8.png",
    title: "Flying Saucer",
    desc: "The aliens are coming! The UFO emoji can be a warning for the chat partner to better come down to earth again.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/helicopter_1f681.png",
    title: "Chopper",
    desc: "We\u2019re taking a sightseeing flight! I'm on the quickest way to you! Helicopters do not need a runway because they take off and land vertically. Used in emergency situations (e.g. by the police, fire brigade or hospitals) or to monitor road traffic.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/canoe_1f6f6.png",
    title: "Canoe",
    desc: "We're going on a canoe tour! The boat is moved with paddles in the direction of view. Popular for exploring the great outdoors or for moving with the rapids on wild rivers. Can be used for water sports or activities.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sailboat_26f5.png",
    title: "Sailboat",
    desc: "Let's sail around the world! The sailboat is run by wind power. It serves the locomotion on water. Sailing yachts also have a kitchen and living space. The emoji depicts wanderlust and thoughts of lonely islands, sun and sea.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/speedboat_1f6a4.png",
    title: "Speedboat",
    desc: "A watercraft powered by an engine. For recreational purposes, such as water skiing or boat racing. The fastest boat in the world can do 320 km/h. Emoji stands for water sports, travel and holidays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/motor-boat_1f6e5.png",
    title: "Motorboat",
    desc: "Represents lifestyle and luxury! The watercraft is powered by one or more combustion or electric motors. Used for recreational purposes, for pulling water skiers and a symbol of the lifestyle of the beautiful and the rich.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/passenger-ship_1f6f3.png",
    title: "Passenger liner",
    desc: "We booked a cruise! A passenger ship transports people over inland or coastal waters and across the ocean. The largest ship can carry 6,800 people. Emoji is also used in the context of seasickness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ferry_26f4.png",
    title: "Ferry",
    desc: "\u201cLet's take the ferry\u201c or, in a figurative sense: \u201cOff to new shores!\u201c The ferry goes to the island mostly every day. A ferry carries people, cars or goods across water.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ship_1f6a2.png",
    title: "Ship",
    desc: "\u201cAbandon a sinking ship\u201c, \u201cRock the boat\u201c, \u201cBurn one's boats\u201c or \u201cTitanic is my favorite movie\u201c. A cruise or vacation trip lies ahead, but also used as a warning: I'm quickly getting seasick!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/anchor_2693.png",
    title: "Anchor",
    desc: "The anchor is a marine object and prevents a boat from drifting due to wind, currents or waves. Symbolizes hope, faithfulness, security and stability.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fuel-pump_26fd.png",
    title: "Fuel pump",
    desc: "I have to refuel! The vehicle to be refueled is filled with fuel through an apparatus at a gas station. Can refer to a gas station or, in a figurative sense, stand for someone who has gasoline in the veins.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/construction-sign_1f6a7.png",
    title: "Construction sign",
    desc: "The construction sites have kept me back! Indicates construction work on buildings or roads. There may be delays or traffic problems. Also possible: A website is being worked on or in maintenance mode, or a project is still under construction.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/vertical-traffic-light_1f6a6.png",
    title: "Vertical traffic light",
    desc: "The colors of the traffic lights regulate the traffic flow and prevent dangerous traffic situations. The first traffic light, which was operated by gas light, was erected in London in 1868 and exploded shortly thereafter. Emoji can refer to the traffic, be an excuse for a delay or represent traffic light labeling in the food sector.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/horizontal-traffic-light_1f6a5.png",
    title: "Horizontal traffic light",
    desc: "Be careful, my traffic light will shortly switch to red! Traffic lights regulate the traffic flow. They are meant to optimize and defuse danger zones. The horizontal attachment is rather uncommon in Germany, unlike in Thailand or the US.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bus-stop_1f68f.png",
    title: "Bus stop",
    desc: "We\u2019ll meet at the bus stop! When does the bus leave? This sign indicates where the bus will stop on the road. Only here, passengers can get on or off. Is used in connection with transport as well as public transport in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/world-map_1f5fa.png",
    title: "World Map",
    desc: "The \u201cblue planet\u201c Earth. A world map depicts the entire earth's surface. The main function of maps is orientation. Someone wants to go on a world tour or has already traveled all countries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/statue-of-liberty_1f5fd.png",
    title: "Statue of Liberty",
    desc: "I love the American way of life! Female statue (Lady Liberty), a flare in one hand and the declaration of independence in the other. New York landmark and symbol for freedom and independence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tokyo-tower_1f5fc.png",
    title: "Tokyo Tower",
    desc: "Tokyo is my favorite city! The television tower is modeled on the Eiffel Tower in Paris. The landmark of Japan's capital Tokyo. Scene in films, e.g. Godzilla and Mangas, e.g. Sailor Moon.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/european-castle_1f3f0.png",
    title: "European castle",
    desc: "The old fortresses of Europe are a popular destination. The medieval architecture inspires by its impressive appearance and its history. Symbolizes defense and protection.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/japanese-castle_1f3ef.png",
    title: "Japanese castle",
    desc: "I am fascinated by Asian architecture! The building is a traditional Japanese castle. Formerly fortress, today cultural heritage. Emoji stands in the context of an upcoming journey, architecture in general, or Asian culture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/stadium_1f3df.png",
    title: "Stadium",
    desc: "We're going to the football game on Saturday! Sports competitions are held in a stadium. They are also used for big events or concerts.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ferris-wheel_1f3a1.png",
    title: "Ferris wheel",
    desc: "Popular fun ride in the amusement park, at the fair or at a folk festival. The showplace is fun for all ages. Offers a great view and is the landmark of several cities, such as the London Eye. Can symbolize lust for life and easiness as well as the ups and downs of life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/carousel-horse_1f3a0.png",
    title: "Carousel horse",
    desc: "We're going to the fair! The lacquered wooden horses of a carousel are a popular ride for children at the fair or in amusement parks. Brings back memories of the childhood. Represents exuberance, lightheartedness and joy of life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fountain_26f2.png",
    title: "Fountain",
    desc: "We\u2019ll meet at the fountain! Part of city architecture, gardens or parks. Fountains are often found in picturesque squares and are popular meeting places, not only on hot summer days.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/umbrella-on-ground_26f1.png",
    title: "Open Parasol",
    desc: "A parasol provides protection from the sun on hot days on the beach or in the park. Represents relaxed summer days or beach holidays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/beach-with-umbrella_1f3d6.png",
    title: "Beach With Parasol",
    desc: "The parasol on a beach section by the sea stands for beach holidays and hot weather. Let's go to the lake and enjoy the sun!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/desert-island_1f3dd.png",
    title: "Desert Island",
    desc: "I desperately need a break! Lonely or deserted islands have always fascinated people. They play an important role in adventure novels or movies (such as Robinson Crusoe or Cast Away).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/desert_1f3dc.png",
    title: "Desert",
    desc: "You got your just deserts! Low-moisture and low-vegetation desert landscape with mostly extreme temperatures. Represents holidays, heat. but also exhaustion.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/volcano_1f30b.png",
    title: "Volcano",
    desc: "Active, erupting volcano with smoke and lava. Might express unbearable heat, danger or emotional state. I'm so mad, I could almost explode!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mountain_26f0.png",
    title: "Mountain",
    desc: "Be able to move mountains, make a mountain out of a molehill or ascend a mountain! Can refer to a place or vacation in the mountains or is meant metaphorically for something big.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/snow-capped-mountain_1f3d4.png",
    title: "Snow-Capped Mountain",
    desc: "A high mountain or located in the north whose peaks are covered with snow. Is related to camping, hiking, mountaineering, and nature in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mount-fuji_1f5fb.png",
    title: "Mount Fuji",
    desc: "The emoji shows a snow-covered mountain peak. Mount Fuji, the highest mountain in Japan served as a template. Can be used as a symbol for winter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rock_1faa8.png",
    title: "Rock",
    desc: "You are my solid rock! Neither wind nor weather can harm a rock, nothing disturbs it. It is firmly anchored and can last for centuries. Or something is very old and no longer up to date.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wood_1fab5.png",
    title: "Wood",
    desc: "Knock on wood! The new furniture is made of wood or firewood is required for the fireplace. May refer to the profession of forester or carpenter, tree felling, woodwork or the forest in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/camping_1f3d5.png",
    title: "Camping",
    desc: "Represents outdoor activities, camping with campfires or weekend trips. Camping is a popular way of spending your holidays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tent_26fa.png",
    title: "Tent",
    desc: "We're going to a festival over the weekend. During camping holidays, you set up your tent on the campsite. The transportable shelter protects you against wind and rain and can accommodate several people, depending on its size. The emoji can also be understood as an invitation to go camping together.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hut_1f6d6.png",
    title: "Hut",
    desc: "We will stay in small huts! Cozy hut in the mountains, traditional dwelling in Africa or made of palm leaves on a South Sea island. Jokingly or pejoratively for a cramped or simple home.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/house-building_1f3e0.png",
    title: "House",
    desc: "Home, sweet home! The friends arrived safely at home. Can also refer to a house: have it built, move in or furnish it.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/house-with-garden_1f3e1.png",
    title: "House With Garden",
    desc: "Suburban idyll with house and a garden with trees or shrubs. Can refer to the neighborhood or a district. You are dreaming of a house in the countryside.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/house-buildings_1f3d8.png",
    title: "Housing Complex",
    desc: "Geographical place where many people have settled. Refers to a development area or housing complex. We're moving!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/derelict-house-building_1f3da.png",
    title: "Derelict House",
    desc: "Derelict house with collapsed roof and broken, boarded-up windows. Represents deserted areas or buildings and desolation. Can also be used for repair or renovation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/building-construction_1f3d7.png",
    title: "Construction Of A Building",
    desc: "Symbol of construction work. Represents the construction of buildings of any kind, from skyscrapers to office buildings. Might say that you are just starting over or working on a project.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/factory_1f3ed.png",
    title: "Factory building",
    desc: "We're going to the festival on the old factory site! Building of an industrial site with big chimneys. The emoji can refer to the work in a factory or industrialization as such or to environmental problems and exhaust fumes.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/office-building_1f3e2.png",
    title: "Office Building",
    desc: "I have to go back to the office! A tall building that houses offices. Usually found in larger cities. Represents work in general or life in the big city.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/department-store_1f3ec.png",
    title: "Department store",
    desc: "I need to go and buy something! A large retail store offering goods of a specific product group, such as textiles, furniture or electrical appliances. You want to buy a specific item or just go shopping.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/firework-sparkler_1f387.png",
    title: "Firework Sparkler",
    desc: "A scintillating sparkler, which is lit. Symbolizes joy, a celebration or a happy event.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fireworks_1f386.png",
    title: "Fireworks",
    desc: "Emoji shows a glittering fireworks display in the night sky. Can be used for New Year's Eve or an intoxicating party.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/japanese-post-office_1f3e3.png",
    title: "Japanese Post Office",
    desc: "A traditional Japanese post office building. Recognizable by the Japanese stamp on the front.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/european-post-office_1f3e4.png",
    title: "Post Office",
    desc: "I have to go to the post office! In many European countries, the post office can be found in buildings with a post horn on the facade.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hospital_1f3e5.png",
    title: "Hospital",
    desc: "I'm not feeling well! A hospital with a red cross. We go there if we are seriously ill or injured. Can be a metapher indicating an accident or strong discomfort.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hotel_1f3e8.png",
    title: "Hotel",
    desc: "I need to book a hotel! Be it holiday or business trip. Maybe it\u2019s even an invitation for some romantic days. Could also symbolize the request for an emergency shelter. Do you have a hideout for me?",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/convenience-store_1f3ea.png",
    title: "Convenience store",
    desc: "Often larger than a supermarket and with a wider assortment, from food to electronics to household items. Usually longer open than regular markets, in some countries even around the clock. Can refer to shopping or a person, e.g. I am available 24 hours a day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/school_1f3eb.png",
    title: "School",
    desc: "I am studying right now or I am at school or at the university. Emoji shows a place of education. Symbolic meaning: learn from experiences or master new tests of life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/love-hotel_1f3e9.png",
    title: "Love Hotel",
    desc: "Emoticon does not represent a simple hotel. The heart indicates a \u201chotel by the hour\u201d. Might stand for a secret affair.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wedding_1f492.png",
    title: "Wedding",
    desc: "We are going to marry! Church in which a wedding is celebrated. Is often used for an invitation or for the announcement of the wedding.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/classical-building_1f3db.png",
    title: "Ancient Building",
    desc: "Today, ancient buildings, mostly with columns and ornaments, can still be found worldwide. Represents culture, e.g. visiting a museum or architecture in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/church_26ea.png",
    title: "Church",
    desc: "As poor as a church mouse! Christian building. The church represents weddings, baptism, worship, and funerals. Also used for religion and holidays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mosque_1f54c.png",
    title: "Mosque",
    desc: "The religious building with a dome-shaped roof and minaret is a place of communal prayer of Islam and social meeting place. Can relate to religion, travel or architecture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/synagogue_1f54d.png",
    title: "Synagogue",
    desc: "The building with the Star of David is a synagogue: a place of assembly and common Jewish worship service. Most important institution in Judaism. The emoji is used in the context of religion and Israel.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hindu-temple_1f6d5.png",
    title: "Hindu temple",
    desc: "India is my dream travel destination! Temple for religious and spiritual activities. In Hinduism, the temple stands for the cosmos: the world of the gods and the world of humans connect to each other. The earliest Hindu temples date from the 4th-8th centuries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/kaaba_1f54b.png",
    title: "Kaaba",
    desc: "Emoticon represents the Kaaba, the central sanctuary of Islam in Mecca. Destination of the great pilgrimage (Hajj) for every Muslim.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shinto-shrine_26e9.png",
    title: "Shinto shrine",
    desc: "Religious Japanese architecture. Serves for the worship of a deity. Shintoism (Japanese for the way of the gods) is practiced almost exclusively in Japan. The religion is characterized by nature and ancestor worship.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/railway-track_1f6e4.png",
    title: "Railroad track",
    desc: "A railroad track through a beautiful landscape. The railway connects two places by rail. Emoji is used in connection with the means of transport, a train station or possible delays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/motorway_1f6e3.png",
    title: "Highway",
    desc: "We\u2019re driving on the highway! I\u2019ll take the fastest way! A wide multi-lane road with road sign from the driver's point of view. The state road consists of two lanes with several traffic lanes. Represents fast transport and goods deliveries.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/silhouette-of-japan_1f5fe.png",
    title: "Map Of Japan",
    desc: "Shows the outline of the insular state of Japan in East Asia. Mangas are part of everyday culture. Homeland of the emojis. Almost exclusively stands for the country itself: for travel or the culture.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/moon-viewing-ceremony_1f391.png",
    title: "Moon Viewing Ceremony",
    desc: "The moon show \u201cTsukimi\u201d is a Japanese festival to the honor of the harvest moon. Emoji shows the traditional ceremony with Japanese pampas grass, Dango (Japanese dumpling), and the moon in the background.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/national-park_1f3de.png",
    title: "National Park",
    desc: "Picturesque landscape with mountains, rivers, lakes and untouched nature. Represents outdoor activities such as hiking, rafting, camping or nature reserves.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sunrise_1f305.png",
    title: "Sunrise",
    desc: "Dawn is followed by the sunrise. The rising sun crosses the horizon announcing a new day. The earliest sunrise is mid-June, the latest in mid-December. Symbol for awakening and (new) beginning.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sunrise-over-mountains_1f304.png",
    title: "Sunrise Above Mountains",
    desc: "The early bird catches the worm. In the distance, the sun is slowly rising behind the mountains. The sunrise in the idyllic landscape can stand for nature or vacation in the mountains.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shooting-star_1f320.png",
    title: "Falling Star",
    desc: "If you see a falling star and wish for something, the wish will come true. Symbol for romantic and magical moments. Something or someone is special and valuable.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sunset-over-buildings_1f307.png",
    title: "Sunset In The City",
    desc: "The sun is setting slowly on the horizon, painting the city skyline in warm colors. Night is falling, the parties begin. A daily phenomenon. Symbolizes the end of a day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cityscape-at-dusk_1f306.png",
    title: "View of city at dusk",
    desc: "Dusk immerses the buildings of a big city in an orange light. The last moments of daylight before the night breaks. Emoji means that a day is coming to an end, it is already quite late or someone wants to go out in the evening.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cityscape_1f3d9.png",
    title: "Skyline",
    desc: "Let's go to town! Panorama of a city with its tallest buildings in front of the horizon. Skylines have a high recognition value. One of the most beautiful ones in the world is New York's.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/night-with-stars_1f303.png",
    title: "Night with stars",
    desc: "A city at night with a clear sky in which stars are visible. Can relate to nightlife or stand for a romantic date or the life in a big city in general. The starry sky has always exerted a strong fascination on people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/milky-way_1f30c.png",
    title: "Milky Way",
    desc: "A milky-bright band in the sky - a galaxy of billions of stars. Represents the beauty of the night and the experience of miracles. You are planning a romantic date with your sweetheart.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bridge-at-night_1f309.png",
    title: "Bridge at night",
    desc: "We\u2019ve arrived in San Francisco! An illuminated bridge at night, similar to the Golden Gate Bridge in the US. Refers to a great nighttime view, nightlife or a romantic date.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/foggy_1f301.png",
    title: "Misty",
    desc: "The fog is lifting or to be in a mist! A fog-shrouded bridge, similar to the Golden Gate Bridge. Things are only vaguely recognizable through the gray veil. Fog differs from clouds only by the ground contact.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/watch_231a.png",
    title: "Watch",
    desc: "\u201cI need to hurry\u201d or \u201cWhen will you be there?\u201d Timekeeper and status symbol. Emoji is used in a time-related context, e.g. dates, deadlines, appointments or delays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mobile-phone_1f4f1.png",
    title: "Mobile Phone",
    desc: "This emoji refers less to the mobile phone itself. It is more commonly used in connection with calls: \u201cPick up the phone!\u201c or \u201cI need to make a quick call\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mobile-phone-with-rightwards-arrow-at-left_1f4f2.png",
    title: "Mobile Phone With Rightwards Arrow at Left",
    desc: "Mobile phone with a pointing arrow. Stands for an incoming call or another action on the mobile phone.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/personal-computer_1f4bb.png",
    title: "Laptop",
    desc: "Emoji represents the MacBook. Can generally be used in the context of computers or work. \u201cI have to finish this\u201c or \u201cI want a new laptop\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keyboard_2328.png",
    title: "Keyboard",
    desc: "It\u2019s time to write a new chapter! You have been sitting in front of the computer all day, are doing office work or writing something, for example, a book, a blog article or your thesis. The keyboard can act as a tool or, just like the computer, symbolize one\u2019s personal talent potential.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/desktop-computer_1f5a5.png",
    title: "Desktop Computer",
    desc: "Take a look at the screen! In general, stands for working on the computer or computer games. Can also mean \u201cI bought a new computer\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/printer_1f5a8.png",
    title: "Printer",
    desc: "I need to print something! The printer stands for office work in general, for the colleague who again caused a paper jam, or for the technology of 3D printers. And it\u2019s always good to carefully read the fine print.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/three-button-mouse_1f5b1.png",
    title: "Computer Mouse",
    desc: "Emoticon shows a white computer mouse with three-button operation (Apple only with one button). Can be used for general computer work.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/trackball_1f5b2.png",
    title: "Trackball",
    desc: "Trackball to operate the computer. Works like a trackpad or a mouse. Often used in connection with computer games or equipment. Chat partner is busy working on the computer.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/joystick_1f579.png",
    title: "Joystick",
    desc: "I want to gamble another round! Joystick of a slot machine in amusement arcades. Generally refers to computers, consoles and everything that has to do with electronic games.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/compression_1f5dc.png",
    title: "Compression",
    desc: "I'll apply a headlock on you! A metal screw clamp with C-clamp symbolizes the pinching of objects or even people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/minidisc_1f4bd.png",
    title: "Mini disk",
    desc: "I found an old Walkman! Once the revolution in sound recordings, the audio and data storage format was discontinued and replaced by MP3 players. The mini disk was the most common in Japan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/floppy-disk_1f4be.png",
    title: "Disk",
    desc: "I will save that! Meanwhile obsolete, but a popular data storage format for the PC from 1970 to the 90s. Symbol of the function \u201csave\u201d in computer programs.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/optical-disc_1f4bf.png",
    title: "Digital CD",
    desc: "For a long time, the CD was considered the most common way to store data and play music and movies. Almost replaced by the streaming technology. Symbolically, it stands for the availability of a huge amount of information.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dvd_1f4c0.png",
    title: "DVD",
    desc: "We\u2019ve got the movie on DVD! Data storage format for playing movies or music albums. May also refer to Blue Ray or (obsolete) technology in general. A DVD movie could mean that someone is in need of recreation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/videocassette_1f4fc.png",
    title: "Video Cassette",
    desc: "Let's watch a movie at home tonight. The video cassette is a nostalgic relic from the 80s. Was very popular until the late 90s. The format was replaced by the DVD.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/camera_1f4f7.png",
    title: "Camera",
    desc: "A new camera is required, a shooting is due or the processing of the pictures is still going on. Emoji shows a classic camera that takes pictures. Symbol for shooting, photographers or photo credit. The camera also stands for one\u2019s memory, it reminds you of stored experiences that you should make use of.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/camera-with-flash_1f4f8.png",
    title: "Camera With Flash",
    desc: "Can you take a picture of me? Refers to photography. The fired flash indicates that a picture is being taken. You want to visit a landmark and take pictures there.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/video-camera_1f4f9.png",
    title: "Video camera",
    desc: "Someone is watching holiday videos, has made a video of the last night or a new video is being uploaded to social media. In the 80s and 90s, home videos were shot with the video camera. Symbolically, the video camera stands for alertness, the desire for change, self-reflection, objectivity and for changing one's own perspective.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/movie-camera_1f3a5.png",
    title: "Film camera",
    desc: "And action! Another part has just been shot! The classic, professional film camera is used in the context of motion picture films, the film industry or the filming of broadcasts. The emoji can also be used as an invitation to shoot your own (dirty) film.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/film-projector_1f4fd.png",
    title: "Film projector",
    desc: "Roll it! Do you feel like watching a movie? The cinematograph projects a movie onto a screen. Expresses the preference or interest in movies and often serves as an invitation to a cozy evening.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/film-frames_1f39e.png",
    title: "Filmstrip",
    desc: "Is this reality or just a movie? Incidents are happening like in a movie or someone is a real movie nut! In the past, filmstrips were used for the development of moving images, hence films. From 1930, there was also sound with the pictures. From 1970, most of the films were in color.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/telephone-receiver_1f4de.png",
    title: "Earphone",
    desc: "I am going to call you shortly! Earphone of an old-fashioned, classical landline telephone. Someone is talking on the phone or wants to call the other one. Popular icon in smartphones or graphics for everything around telephony.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-telephone_260e.png",
    title: "Telephone",
    desc: "Someone will call you later, call you back quickly or has been making phone calls all day. A classic landline telephone. Also serves as a symbol for the phone number.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pager_1f4df.png",
    title: "Pager",
    desc: "It can happen any moment! Message receiving device used by emergency services. Popular communication tool of the 90s. Emoji may be an invitation to be on call in case an event occurs. Also used for professional standby duty and alertness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fax-machine_1f4e0.png",
    title: "Fax machine",
    desc: "I\u2019ve got news! Common communication device of the 80s and 90s for transferring documents. Is considered old-fashioned, but still used in companies. Symbolically, it stands for trouble-free communication, the establishment of a contact, the longing for communication, or something needs quick settlement and remedy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/television_1f4fa.png",
    title: "TV set",
    desc: "A cozy TV evening is coming up or you are watching a live broadcast such as a football game. Old-fashioned CRT TV, popular before the introduction of flat screen TVs in the 90s. Refers to television or the device. The emoji can also be used as a symbol of too easy-going and lazy behavior. You are missing out on many things.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/radio_1f4fb.png",
    title: "Radio",
    desc: "I just heard it on the radio! An old-fashioned, portable radio for receiving broadcasts or music. Refers to listening to music, news or sports. Symbolically, it stands for communication, exchange and knowledge.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/studio-microphone_1f399.png",
    title: "Studio microphone",
    desc: "The microphone is used for radio or studio recordings. For the radio, for music or other recordings. The microphone ensures that music or a moderation finds its way to many ears. It can be a symbolic indication that you should not keep something to yourself, but communicate it in public \u2013 even if this is not easy (and perhaps embarrassing).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/level-slider_1f39a.png",
    title: "Slider",
    desc: "An album is being recorded in the recording studio or you\u2019re having a gig as a DJ. The slider can be used to tune the sound on the mixing console. Can refer to recording or the processing of music as well as music productions.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/control-knobs_1f39b.png",
    title: "Control dial",
    desc: "We are back in the studio! The control dials can be used to adjust the sound on the mixing console. The emoji is related to audio engineering, events or music productions. May also mean: I am capable of multitasking!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/compass_1f9ed.png",
    title: "Compass",
    desc: "Which direction should I take? The maritime symbol indicates the geographic direction and serves for orientation and navigation. Stands for self-realization and goal-oriented action but also for being rooted at home and for protection during a journey.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/stopwatch_23f1.png",
    title: "Stopwatch",
    desc: "Someone is stopping the time, wondering how long it will take or has only got little time left. The meter measures the time between start and stop. The watch is used, for example, during sports or competitions.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/timer-clock_23f2.png",
    title: "Timer clock",
    desc: "You haven\u2019t got much time left! The food is almost ready. The timer counts down a preset time. After the time has elapsed, an alarm sounds. Time is almost over! Refers to temporal processes such as time specification or deadlines.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/alarm-clock_23f0.png",
    title: "Alarm Clock",
    desc: "\u201cWhen shall we meet?\u201d or \u201cDon't forget our date!\u201d The alarm clock often serves as a reminder or to indicate a deadline or urgency.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mantelpiece-clock_1f570.png",
    title: "Mantel clock",
    desc: "You are old-fashioned! The decorative clock can often be found on a fireplace. Subject of a classic interior design or a rather old-fashioned environment. Symbolic of a conservative attitude.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hourglass_231b.png",
    title: "Sand glass",
    desc: "Time is up! Timing device since the beginning of the 14th century. Stands for time but also for transience. Someone is too late, time has passed quickly or you cannot wait any longer.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hourglass-with-flowing-sand_23f3.png",
    title: "Hourglass With Flowing Sand",
    desc: "Time flies ... Represents elapsing time in a particular matter. Can be used as a reminder of something or a warning: \u201cYour time is running out\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/satellite-antenna_1f4e1.png",
    title: "Satellite dish",
    desc: "I've got you on my radar! For receiving radio programs such as radio or television. It's about sending signals and communicating. We receive your voice clearly and distinctly! Can also stand for extraterrestrial life or science fiction.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/battery_1f50b.png",
    title: "Battery",
    desc: "You need to charge your own batteries, someone needs a break. Or the opposite is the case: You are bursting with energy! Also notification icon on the phone regarding the battery level.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/electric-plug_1f50c.png",
    title: "Power plug",
    desc: "I need a charge of energy! Refers to the power supply of electrical equipment, to the power outlet or your own physical energy supply. The charging cable was forgotten at home or the electrician is due.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/nut-and-bolt_1f529.png",
    title: "Bolt And Nut",
    desc: "I'm stuck like a limpet! A metal screw and a matching nut. The emoji is also used in connection with an upcoming repair.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/gear_2699.png",
    title: "Gear",
    desc: "Emoji symbolically shows that something should be fuelled or set in motion. Can also mean \u201cYou wheel me in my life!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/brick_1f9f1.png",
    title: "Brick",
    desc: "Currently, our house is still a construction site! Clay bricks are the oldest building material for building houses or castles. Artificially made stone of fired clay or ceramic. May mean joy and happiness or a new beginning.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/electric-light-bulb_1f4a1.png",
    title: "Electric Light Bulb",
    desc: "The switched-on light bulb means: It just dawned on me! I have just had a brilliant idea!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/electric-torch_1f526.png",
    title: "Flashlight",
    desc: "The flashlight illuminates dark areas. \u201cThere is no electricity\u201c, \u201cYou're being X-rayed\u201c, or \u201cI know the truth.\u201c The emoji is also used to symbolize camping and night walks.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/candle_1f56f.png",
    title: "Candle",
    desc: "Power outage, light a candle (in the church), bring something to light or romantic dinner. The illuminant with a wick is usually made of wax. Represents enlightenment, awareness and insight.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/diya-lamp_1fa94.png",
    title: "Diya lamp",
    desc: "The oil lamp has its origin in India. Light source in houses but also used ceremonially, in temples or during the Hindu festival of lights Diwali. An Indian holiday or a trip is coming up.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fire-extinguisher_1f9ef.png",
    title: "Fire extinguisher",
    desc: "It is getting pretty hot or someone is playing with fire. The chat partner needs a cooling-down! The fire extinguisher serves as a precautionary measure to fight against a fire.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/oil-drum_1f6e2.png",
    title: "Oil barrel",
    desc: "Metal barrel for the storage or transport of oil. The car is leaking oil and must be taken to the garage, you ate too much and feel like a barrel or something is dangerous and can explode in your face like a bursting barrel.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/money-with-wings_1f4b8.png",
    title: "Money With Wings",
    desc: "A stack of banknotes with wings. Chat partner was on shopping tour and spent a lot. The money just flies away.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/banknote-with-dollar-sign_1f4b5.png",
    title: "Dollar banknote",
    desc: "Bundled stack of banknotes. The dollar is the currency of the United States and an important lead currency. Used in conjunction with money in general and the US. In rap videos used as an expression of lavish wealth and luxury.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/banknote-with-yen-sign_1f4b4.png",
    title: "Yen banknote",
    desc: "In 1871, the Japanese currency yen was introduced. The 500 yen coin is the most valuable circulating coin in the world (about 4.20 euros). The emoji represents the country or money and fortune in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/banknote-with-euro-sign_1f4b6.png",
    title: "Euro Banknote",
    desc: "A wad of euro banknotes with package band. The official currency in most European countries. You live in the lap of luxury, spend money like water, or you can have a real good time on vacation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/banknote-with-pound-sign_1f4b7.png",
    title: "Pound banknote",
    desc: "Fancy a trip to England? The British pound is the currency of the United Kingdom. Refers to the country, currency or money in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/gem-stone_1f48e.png",
    title: "Gem Stone",
    desc: "Diamonds are a girl's best friends. You are important to me and as precious as a diamond. Diamonds are for eternity. Symbol of luxury and wealth.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/scales_2696.png",
    title: "Scales",
    desc: "The scales are balanced \u2013 both sides weigh the same. It is difficult to come to a decision, neither advantages nor disadvantages predominate. Symbol of Justitia (goddess of justice) and the legal system as well as the zodiac sign Libra.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/toolbox_1f9f0.png",
    title: "Tool box",
    desc: "I need to call a craftsman or \u201cNo problem, I will fix it myself!\u201c Practical box for storing and transporting a collection of tools. To announce that you are technically skilled and practically-minded, or that you are in need of (professional) help.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wrench_1f527.png",
    title: "Wrench",
    desc: "The car has to go to the workshop, the leaky faucet has to be repaired or craftsmen are coming to your house. The screwing tool can be found in every tool case. Stands for maintenance, repair or refers to the profession, e.g. plumber or mechanic.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/screwdriver_1fa9b.png",
    title: "Screwdriver",
    desc: "Will you help me assemble the shelf? Mechanical tool for tightening or loosening screws. In a figurative sense, for a connection that needs to be strengthened or loosened.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hammer_1f528.png",
    title: "Hammer",
    desc: "Using the sledge hammer method or hit the nail on the head. A hammer builds something up or tears it down. Something goes under the hammer, is auctioned. Symbol of strength.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hammer-and-pick_2692.png",
    title: "Hammer and pick",
    desc: "He's really skilled in his craft! Hammer and pick are the traditional tools of the miner. Stands for work in general and for \u201cin operation\u201d. Mining symbol and miner's coat of arms (mallet and iron).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hammer-and-wrench_1f6e0.png",
    title: "Hammer and wrench",
    desc: "Something needs to be fixed: the relationship, the roof or the car! Hammer and wrench can be found in the tool case. A difficult project is being tackled. Stands for manual skills or a profession.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pick_26cf.png",
    title: "Pickax",
    desc: "Work tool used by miners, gardeners or gold diggers. For working on stone, ice or hard ground. \u201cI'll do it myself!\u201d Icon for video games like Minecraft.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/carpentry-saw_1fa9a.png",
    title: "Hand saw",
    desc: "We build the furniture ourselves! Tool for working wood. Can relate to the carpenter's profession or express manual dexterity. Sawing a tree trunk as a popular wedding game.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hook_1fa9d.png",
    title: "Hook",
    desc: "Are you coming fishing with me? An object for fishing or a device for hanging things. You want something by hook or by crook. Or you hook up with someone or let someone off the hook.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ladder_1fa9c.png",
    title: "Ladder",
    desc: "Someone moves up in their job, climbs the job ladder or is already in a high position. A ladder is used for painting the ceiling, hanging up a lamp or harvesting fruit. As a warning: whoever climbs high can fall deep.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pistol_1f52b.png",
    title: "Pistol",
    desc: "To hold a pistol to someone's head. Originally presented as a weapon, now appears as a toy gun. The gun can cause great damage. Is posted if someone is very angry or as a threat.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/money-bag_1f4b0.png",
    title: "Moneybag",
    desc: "A tightly filled moneybag with dollar sign. Used very often in well-known comics, such as those of Scrooge McDuck or the Beagle Boys. Caution! If the emoji is used, the conversation is about money.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/credit-card_1f4b3.png",
    title: "Credit card",
    desc: "The bill is on me! Have no money on you or make your credit card red hot when shopping. The back of a credit card has a magnetic strip, signature and security code. May relate to online trading, credit card theft or payment transactions in general. Furthermore, it symbolizes easy access to resources.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/coin_1fa99.png",
    title: "Coin",
    desc: "\u201cDo you have a few coins for the parking meter?\u201d Or \u201cI'll toss a coin!\u201d A means of payment with mostly low monetary value or commemorative coin as a collector's item. The first finds come from the Mediterranean region around 2,000 BC.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chains_26d3.png",
    title: "Chain",
    desc: "Stop yanking my chain! or \u201cA chain is only as strong as its weakest link\u201c. Symbol for things that are interconnected.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/magnet_1f9f2.png",
    title: "Magnet",
    desc: "You are like a magnet to me! or \u201cThe band mates are babe magnets\u201c. A magnet always has two poles: Opposing poles attract each other, the same ones repel each other. Someone or something exerts a strong pull.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bomb_1f4a3.png",
    title: "Bomb",
    desc: "\u201eLet's bomb down the motorway!\u201c, \u201eThis place looks like it's been hit by a bomb.\u201c or \u201eThanks a bomb\u201c! Emoticon of a bomb that will explode any moment. Could mean anger or a very tense feeling on the side of the chat partner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/firecracker_1f9e8.png",
    title: "Fireworks",
    desc: "You are a grenade! or \u201cBeware, explosive!\u201c Firecrackers or bangers denote the pyrotechnic object that produces a bang. Fireworks for New Year's Eve, signal ammunition or artistic performances (stage bang).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/axe_1fa93.png",
    title: "Ax",
    desc: "We need firewood! Tool for chopping or splitting wood and cutting trees. The emoji for nature boys, horror films or a layoff (he got the ax).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hocho_1f52a.png",
    title: "Japanese Kitchen Knife",
    desc: "A Hocho is a Japanese kitchen knife. Used for mincing food. You are belligerent or something is terrifying. Known idioms are e.g. \u201cto get one's knife out\u201c in disputes or \u201cto stab someone in the back\u201c in betrayal.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dagger-knife_1f5e1.png",
    title: "Dagger",
    desc: "Attack or defense! Thrusting weapon with a blade sharpened on both sides. Often in connection with the Middle Ages or fantasy. Someone is sharp sighted or fighting at the sharp end.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crossed-swords_2694.png",
    title: "Crossed swords",
    desc: "Don\u2019t come too close! In the past, the sword was a weapon but also a status symbol. The crossed swords can stand for a battle or war, either in real life or in a computer game, for instance. They also symbolize that someone prefers the direct route or a friend died in war.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shield_1f6e1.png",
    title: "Shield",
    desc: "We must protect ourselves! The buckler emoji conveys protection and security. This symbol can often be found with antivirus software.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mouse-trap_1faa4.png",
    title: "Mousetrap",
    desc: "I love the Tom & Jerry cartoons! Classic trap with a piece of cheese. As a warning not to fall into someone's trap. Colloquially for a space from which there is no escape.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/headstone_1faa6.png",
    title: "Headstone",
    desc: "We're going to the cemetery! To commemorate the dead and to mark the resting place. As a reminder of a loved one or an expression of condolences. Jokingly or as a warning to be careful and watch out.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/smoking-symbol_1f6ac.png",
    title: "Cigarette",
    desc: "\u201cI'm going to have a smoke\u201d or \u201cI'm nervous.\u201d The cigarette is a symbol of enjoyment of life and inspiration. Can also mean that smoking is permitted here.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/coffin_26b0.png",
    title: "Coffin",
    desc: "Rest in peace! Can indicate a case of death in the family or in the circle of friends. In addition, it symbolizes the valediction from things long gone.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/funeral-urn_26b1.png",
    title: "Urn",
    desc: "Receptacle that contains the ashes of a deceased person. Can stand for bereavement but also for your current mood. In chats also (jokingly) used as a threat on what will happen if the other person does not comply with a request.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/amphora_1f3fa.png",
    title: "Amphora",
    desc: "A holiday in Greece is just around the corner, you are interested in the ancient world or would like to go shopping for some decoration! The jug with a narrow neck is an antique vase and a unit of measurement. The amphora holds about 26 liters. The name originates from Greek and means jug with two handles.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crystal-ball_1f52e.png",
    title: "Crystal Ball",
    desc: "What will happen? The crystal ball symbolizes supernatural perceptions. Is used to look ahead and predict the future.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/prayer-beads_1f4ff.png",
    title: "Prayer Beads",
    desc: "A prayer chain, which is used by many religions. Stands for prayer, meditation, or religious spirituality.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/nazar-amulet_1f9ff.png",
    title: "Nazar amulet",
    desc: "Someone is superstitious or is going to Turkey on vacation. A relationship or a person is toxic. The blue, eye-shaped amulet can be found in oriental countries. It is believed to ward off the evil eye, which brings mischief.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/barber-pole_1f488.png",
    title: "Barber pole",
    desc: "I have to go to the barbershop! The rotating red-white-blue cylinder is the barbers\u2019 craft symbol. Located at the entrance of an American barbershop. A barber is mainly responsible for the hair of the beard. The emoji is mostly used in the context of shaving.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/alembic_2697.png",
    title: "Alembic",
    desc: "Glass vessel with long downward neck. Used by chemists to distill liquids. Can mean that someone loves experiments or is brewing something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/telescope_1f52d.png",
    title: "Telescope",
    desc: "We are watching you! A telescope allows to observe far away things. In seafaring, for observing wild animals or stars or distant planets in an observatory. Can stand for clairvoyance.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/microscope_1f52c.png",
    title: "Microscope",
    desc: "I will look carefully at the details! Possible fraud or deceit is exposed. Used in school or in a laboratory. Often related to science and research.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hole_1f573.png",
    title: "Hole",
    desc: "Deep, black hole means: I am very embarrassed about something and feeling awkward. I just want to sink into a hole right now.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/adhesive-bandage_1fa79.png",
    title: "Adhesive bandage",
    desc: "I hurt myself! For wound care for injuries and basic equipment in the first aid kit. Something or someone serves as a consolation, that is, reparation or satisfaction.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/stethoscope_1fa7a.png",
    title: "Stethoscope",
    desc: "Please remove your top! Distinguishing feature of the doctor. Medical instrument for listening to the heart, lungs or internal organs. A doctor's appointment or a visit to the hospital is due, someone has fallen ill or is training to be a nurse.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pill_1f48a.png",
    title: "Pill",
    desc: "Swallow the bitter pill. Symbol for medicine: I'm not feeling well! Represents illness or indisposition.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/syringe_1f489.png",
    title: "Syringe",
    desc: "Syringe with reddish contents. Can mean: I have to go to the doctor (blood test). Also used as a symbol for drug consumption.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/drop-of-blood_1fa78.png",
    title: "Drop of blood",
    desc: "\u201cHe cut his finger\u201d, \u201cWe're going to donate blood\u201d or \u201cI have my monthlies\u201d! The body fluid is a symbol of life. Something is defended to the last drop of blood.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/microbe_1f9a0.png",
    title: "Microbe",
    desc: "Beware, contagious or \u201cBiology is my favorite subject\u201c. Microbe is the short form of microorganism. Among the microscopic creatures are, e.g. bacteria, fungi or viruses. Most microorganisms are useful and only a few cause disease.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/dna-double-helix_1f9ec.png",
    title: "DNA double helix",
    desc: "We want a baby! Greatly enlarged, the deoxyribonucleic acid (DNA) looks like a twisted rope ladder. It is located in every single cell of a living being and contains the genetic information (genes). Symbol for genetics, evolution and life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/petri-dish_1f9eb.png",
    title: "Petri dish",
    desc: "Biology is my favorite subject or \u201cI have a bacterial infection\u201d. Flat, round, transparent dish with lid, mostly used in chemistry, biology or medicine. For the cultivation of microorganisms or cell cultures.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/test-tube_1f9ea.png",
    title: "Test tube",
    desc: "You had better not dare any experiments or \u201cThere is a good chemistry between the two of us\u201c. The small tubes made of glass are open on one side and are used in laboratories. Represents chemistry lessons, experiments or tests.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/thermometer_1f321.png",
    title: "Thermometer",
    desc: "It\u2019s getting warm or you don\u2019t feel well, maybe you developed a fever. The meter determines temperatures, e.g. of the body but also of the air. Can also provide information about the emotional state or the temperament of the sender. Often associated with passion and desire.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/broom_1f9f9.png",
    title: "Broom",
    desc: "He is as daft as a brush, \u201cNew brooms sweep clean\u201c or \u201cI got the brush-off\u201d. The cleaning instrument brings order (to the house, to your life) and it sweeps away rubbish and dirt (or worries). Symbol of superstition and magic, e.g. the witches' broom.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/basket_1f9fa.png",
    title: "Basket",
    desc: "The ballplayer made a basket, \u201cLet's have a picnic\u201c or \u201cI have to wash my clothes\u201c. The braided basket is mostly made of wood and used for storage, protection, or transport.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bucket_1faa3.png",
    title: "Bucket",
    desc: "He kicked the bucket! Household item for storage, for transporting items or as an aid for cleaning the floor. You might need some assistance, e.g. with carrying things.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/roll-of-paper_1f9fb.png",
    title: "Paper roll",
    desc: "Go shopping, please or \u201cYou can wipe your butt with it\u201c. Be it kitchen roll, toilet paper or paper towels \u2013 mostly intended for single use and serving for cleaning and hygiene.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/toilet_1f6bd.png",
    title: "Toilet",
    desc: "I'm in the john, don't disturb me! or \u201cHe is joyriding the porcelain bus.\u201c November 19 of each year is World Toilet Day. Approximately 60% of the world's population do not have a toilet at home.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/plunger_1faa0.png",
    title: "Plunger",
    desc: "We have to call the plumber! Clogged drains can be fixed with the tool by alternately generating positive and negative pressure. Someone doesn't want to get their hands dirty. May relate to the profession or to household incidents.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/potable-water-symbol_1f6b0.png",
    title: "Potable water",
    desc: "The faucet in the bathroom is dripping, you drink a glass of water to quench your thirst or the plants have to be watered. The tap, often with a full glass, is the symbol for drinking water. From a psychological point of view, the everyday object stands for the control and regulation of emotions.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shower_1f6bf.png",
    title: "Shower",
    desc: "I'll take a quick shower! To cleanse the body or conscience \u2013 dirt or feelings of guilt are washed off. Also to cool down your mind: you urgently need a cold shower!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bathtub_1f6c1.png",
    title: "Bathtub",
    desc: "A hot bath is so relaxing at the end of the day! Place of personal hygiene but also to rest your mind. Bathtubs have been used for more than 3000 years.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bath_1f6c0.png",
    title: "Person taking a bath",
    desc: "Relaxing in the bathtub with candlelight, a book or a glass of wine after a busy day. Status symbol for luxury. A place for purification and body care or for relaxation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mirror_1fa9e.png",
    title: "Mirror",
    desc: "Mirror, mirror on the wall, who's the fairest of them all? In fairy tales, the mirror often has a magical meaning. Symbol of self-awareness (\u201chold up the mirror to someone\u201d). A person is superficial or narcissistic and too self-confident.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bar-of-soap_1f9fc.png",
    title: "Bar of soap",
    desc: "You are watching your favorite soap opera or want to whitewash your reputation. Soap is mainly used for body cleansing. Represents cleanliness and hygiene.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sponge_1f9fd.png",
    title: "Sponge",
    desc: "Sponge on others or throw in the sponge. The sponge is used for washing and cleaning the home, the body, or the car.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/razor_1fa92.png",
    title: "Razor",
    desc: "\u201cHe has a beard now\u201d or \u201cI have to go to the barber again\u201d! Old fashioned razor for trimming hair on the face or head. On average, men spend around 3,300 hours shaving.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/toothbrush_1faa5.png",
    title: "Toothbrush",
    desc: "I have an appointment at the dentist\u2019s! Related to dental health and oral hygiene. 3000 BC, a chewing stick was used to clean the teeth. In 1500 there were toothbrushes with bristles in China. As a subtle hint to someone with bad breath.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lotion-bottle_1f9f4.png",
    title: "Lotion bottle",
    desc: "I have to go to the drugstore or \u201cLet's have a spa day again\u201c. The pump bottle may contain various lotions, e.g. moisturizing cream for your hands and the body, or sunscreen. Represents body care, pampering and well-being.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bellhop-bell_1f6ce.png",
    title: "Service bell",
    desc: "I need your attention now! The bell is often found at an unoccupied reception, e.g. in a hotel. Ringing it will alert the staff. Emoji symbolizes expectation and is a call for support.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/key_1f511.png",
    title: "Key",
    desc: "Golden key as an object: \u201cI need my keys\u201d or \u201cDo not forget your keys\u201d. Symbolic meaning: \u201cThis is very important!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/old-key_1f5dd.png",
    title: "Antique Key",
    desc: "A decorated old key that can be used to open chests or antique doors. Has more symbolic meaning, can also be used in the context of fairy tales and stories.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/door_1f6aa.png",
    title: "Door",
    desc: "Knock, knock... anyone at home? Metaphorically for the transition into a new phase of life or the end: \u201cNew doors are opening\u201d or \u201cI'm leaving you!\u201d My door is always open for you, you are ready to talk or you close the door behind you forever.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chair_1fa91.png",
    title: "Chair",
    desc: "First sit down! It\u2019s been a hard day, you want to rest. Or as an invitation to calm down. You\u2019re about to move home, helpers are needed or you have to buy seating furniture. The back hurts from sitting too much.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/couch-and-lamp_1f6cb.png",
    title: "Couch and lamp",
    desc: "It's always best at home! A cozy TV evening is coming up or the new couch is so comfortable that you don't even want to leave it. In connection with coziness, resting or lazing around.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bed_1f6cf.png",
    title: "Bed",
    desc: "I am confined to bed or \u201cIt's time to go to bed\u201c. The cozy bed is one of the most important pieces of furniture. It represents rest, relaxation and sleep.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sleeping-accommodation_1f6cc.png",
    title: "Sleep accommodation",
    desc: "We still have to look for a place to sleep! Symbol of a sleep accommodation, e.g. a guesthouse or a hotel. Can also refer to the bedroom or everything around sleep.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/window_1fa9f.png",
    title: "Window",
    desc: "That\u2019s just window-dressing! The window is slightly open, the curtains are blowing in the wind and the sun is shining in. Looking dreamily out of the window, letting your eyes travel, daydreaming. Symbolic of the connection between the inside of the house and the world outside.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/teddy-bear_1f9f8.png",
    title: "Teddy bear",
    desc: "The stuffed animal is a popular toy for children and a childhood companion. The cuddly teddy bear is a symbol of nostalgia, of beautiful memories as well as security and protection.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/frame-with-picture_1f5bc.png",
    title: "Framed Picture",
    desc: "This work of art in the frame can point to the photo of a person or that the chat partner is going to take photos. Also used to indicate art or a visit to the museum.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shopping-bags_1f6cd.png",
    title: "Shopping bags",
    desc: "Let's go shopping! The city stroll was successful, the credit card is still burning. Women love shopping, which is often annoying for men. May also relate to clothing, food or other consumer goods.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/shopping-trolley_1f6d2.png",
    title: "Shopping cart",
    desc: "I'm in the supermarket right now! The weekend shopping has yet to be done. Refers to shopping, mostly of groceries. Icon for shopping cart when shopping online.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wrapped-present_1f381.png",
    title: "Wrapped present",
    desc: "Congratulations! Be it at Christmas, for a birthday or other occasions: Gifts are usually delivered beautifully wrapped and with a bow. Can refer to the gift itself or a special occasion, such as a wedding.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bookmark_1f516.png",
    title: "Bookmark",
    desc: "The bookmark flags the last read page in a book. Means: I am done with reading. The emoji is also known as a price label.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/moyai_1f5ff.png",
    title: "Moai",
    desc: "Moai are stone figures on Easter Island. There is also such a statue in Tokyo. Serve as the connecting link to the hereafter. They represent traveling, the miracles of the world, and myths of mankind.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/balloon_1f388.png",
    title: "Balloon",
    desc: "Let's be happy and have fun! The red balloon is a symbol of joy. Can also symbolize your own uniqueness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/izakaya-lantern_1f3ee.png",
    title: "Izakaya Paper Lantern",
    desc: "Traditional Japanese Izakaya lantern. These lanterns are often found at the front door of traditional Japanese restaurants. The emoji can be understood as an invitation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ribbon_1f380.png",
    title: "Ribbon",
    desc: "A bow is typically used to decorate and beautify something, such as a gift. The pink ribbon stands for femininity and romance or girlishness. Also known as a symbol for the knowledge of breast cancer.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/confetti-ball_1f38a.png",
    title: "Confetti Ball",
    desc: "Congratulations! Symbol of all kinds of celebration: from birthday to the wedding to New Year's Eve. At the end of the event, a confetti ball has opened, colorful confetti are falling out: let's party! Expression of joy, fun, and community.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/party-popper_1f389.png",
    title: "Party Popper",
    desc: "Happy Birthday! The confetti bomb explodes in a fountain of paper streamers and confetti. A party might be in progress or someone has been successful and is very happy about something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/japanese-dolls_1f38e.png",
    title: "Japanese Dolls",
    desc: "At the annual unofficial Japanese holiday Hina-Matsuri (girls' festival) dolls are set up. They are meant to banish evil spirits and bring the girls good health as well as luck with their mate choice. Symbol of Japan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wind-chime_1f390.png",
    title: "Wind Chime",
    desc: "The Japanese wind chime (Furin) made of glass is a symbol of the summer. In light wind delicate tones sound. Not just a decoration, but a lucky charm in Asia. Used in Feng Shui to maximize chi and life energy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/red-gift-envelope_1f9e7.png",
    title: "Red gift envelope",
    desc: "I wish for money for my birthday! At Chinese festivals or weddings people almost always present gifts of money in red envelopes (Hong Bao). Symbol of prosperity, destiny and happiness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/envelope_2709.png",
    title: "Envelope",
    desc: "A closed envelope stands for receiving or sending e-mails, messages or a letter. \u201cI received a message\u201c or \u201cI have to write an e-mail\u201c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/envelope-with-downwards-arrow-above_1f4e9.png",
    title: "Envelope with down arrow at top",
    desc: "Pay attention to what's in the message! Usually refers to electronic messages and stands before the email address. Symbol for a sent email or note on the content of a specific message.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/incoming-envelope_1f4e8.png",
    title: "Incoming envelope",
    desc: "The letter just arrived! In the office, the incoming mail is often collected in an in-tray or box. Refers to (business) letters, mail or the sending of messages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/e-mail-symbol_1f4e7.png",
    title: "Email",
    desc: "You have got mail! Symbol for the email, recognizable by the @ sign. The emoji serves as a request to read the mails or as an indication to transmit something electronically.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/love-letter_1f48c.png",
    title: "Love Letter",
    desc: "The white envelope, sealed with a heart, contains a love letter. With a heartfelt message. Symbolizes love and romance. Expresses affection or invites to a date.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/inbox-tray_1f4e5.png",
    title: "Inbox",
    desc: "I'm almost done with the documents! The incoming mail is collected in the inbox for further processing. The emoji represents downloads or incoming emails. Often serves as an indication from the other party to check the received messages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/outbox-tray_1f4e4.png",
    title: "Outbox",
    desc: "The paperwork is done for today or business letters still need to be processed. A tray or basket for filing or the outbox. As an icon on the computer for uploading or sharing files. Is also used as a symbol for sent messages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/package_1f4e6.png",
    title: "Parcel",
    desc: "\u201cBeing part and parcel of something\u201d or \u201cThe parcel is being delivered!\u201d A gift is on the way, an online order has been made or someone packed things for a move. A package can mean both pleasant and unpleasant messages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/label_1f3f7.png",
    title: "Label",
    desc: "Glued or pinned information sign. Provides information on content, price, expiration date, etc. for goods or items. You can also 'label' people and place them in a specific category, e.g. superficial.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/placard_1faa7.png",
    title: "Placard",
    desc: "The demo is on the weekend! Something is advertised or announced on placards. Used by protesters to express what they are in favor of or disapprove of. Attention please, an important message is being delivered!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/closed-mailbox-with-lowered-flag_1f4ea.png",
    title: "Closed mailbox with lowered flag",
    desc: "I\u2019m expecting your letter! For the residents, the lowered flag means that no mail has been delivered. The postman does not have to take any mail with him. In the US, the mailbox is used to receive and send letters.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/closed-mailbox-with-raised-flag_1f4eb.png",
    title: "Closed mailbox with raised flag",
    desc: "The letter must get out today! In the US, mailboxes are not just for receiving but also for sending mail. The raised flag shows the postman that he should take mailable letters with him.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/open-mailbox-with-lowered-flag_1f4ed.png",
    title: "Open mailbox with lowered flag",
    desc: "\u201cI'm waiting for your message\u201d or \u201cYou never write to me!\u201d The lowered flag means that no mail arrived today. The outgoing mail was already taken by the postman.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/open-mailbox-with-raised-flag_1f4ec.png",
    title: "Open mailbox with raised flag",
    desc: "Your letter arrived today! The raised flag shows that there is mail or should be taken by the postman. The emoji can be used for mail in general or for the sending and receiving of messages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/postbox_1f4ee.png",
    title: "Mailbox",
    desc: "Did you drop the letter? A mailbox contains letters for distribution. Introduced in the 19th century. The news is on the way! Used in connection with mail or correspondence.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/postal-horn_1f4ef.png",
    title: "Post horn",
    desc: "\u201cThe mail has arrived\u201d or \u201cThere are important news!\u201d Symbol for the post, e.g. on mailboxes or at post offices. The post horn was used by stage coach drivers as a signal instrument in the early Middle Ages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/scroll_1f4dc.png",
    title: "Scroll",
    desc: "I have something to announce! Labeled and rolled up papyrus scroll or pell. Typical book form, successor of the clay tablet and predecessor of codex (labeled wood or wax tablets). Once symbol of education. The scroll is often associated with surprises, agreements, adaptability as well as life experience and growth.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/page-with-curl_1f4c3.png",
    title: "Sheet with rolled-up edge",
    desc: "\u201cThe document has arrived\u201d or \u201cWe'll soon get the school certificates!\u201d The printed sheet of paper is rolled up at the bottom. Could be an official document or letter.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/page-facing-up_1f4c4.png",
    title: "Sheet with typeface upwards",
    desc: "You have to fill this in! Printed document with rolled-up edge or dog ear. Can refer to a letter, book or orientation (face up!).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bookmark-tabs_1f4d1.png",
    title: "Page marker",
    desc: "\u201cThis one is important\u201d or \u201cI need to learn for the exam\u201d. Be it in the office or while studying: Most colored sticky notes mark important passages in a document or fields for the signature. Symbolic indication of an urgent event.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/receipt_1f9fe.png",
    title: "Sales receipt",
    desc: "I paid my dues!, \u201cCan you pick up the bill for me?\u201c or \u201cI have to exchange those jeans again\u201c. The receipt serves as proof that a product or service has been purchased or paid for.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bar-chart_1f4ca.png",
    title: "Bar Chart",
    desc: "Charts can be used to visualize information. They are usually clearer than text and are used for comparison: the higher the bar, the larger the number. Can be used in conjunction with school or work.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chart-with-upwards-trend_1f4c8.png",
    title: "Chart With Uptrend",
    desc: "A line chart helps to show developments over time. For stocks or finances, an uptrend is a good sign. Also: the business is going well. Can generally be used to signal: Things are looking up!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chart-with-downwards-trend_1f4c9.png",
    title: "Chart with downwards trend",
    desc: "The financial prospects are less good! The diagram shows a falling trend over a period of time. Generally seen as negative. The stock price or even your mood is going down.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spiral-note-pad_1f5d2.png",
    title: "Spiral notebook",
    desc: "I always have my notepad with me! Offers space for shopping lists, thoughts, to-do's, sketches and everyday notes. Nothing can be forgotten anymore. Symbolic for journalism or education.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/spiral-calendar-pad_1f5d3.png",
    title: "Spiral calendar",
    desc: "I\u2019ll enter it in the family planner! Calendar with spiral binding, mostly with a compact monthly overview. Reminds you of important dates and helps you plan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/calendar_1f4c5.png",
    title: "Calendar",
    desc: "Please save the date! A date on a calendar sheet. Symbolic for an upcoming event or a commemoration day. Planning begins or the monthly calendar is already very full.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/tear-off-calendar_1f4c6.png",
    title: "Tear off calendar",
    desc: "I\u2019m counting the days! The calendar not only reminds you of the current date, but also helps you plan your appointments. The time flies by! The date shown is WhatsApp\u2019s founding day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wastebasket_1f5d1.png",
    title: "Wastepaper basket",
    desc: "That's rubbish! A trash can for paper trash, often found it in offices. A message or a plan immediately ends up in the trash. The folder for deleted files on computers.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/card-index_1f4c7.png",
    title: "Index card holder",
    desc: "I am on a business trip! Business cards can be organized alphabetically in an index card holder. Often in a business context, with networks or contacts. Desk utensil in offices.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/card-file-box_1f5c3.png",
    title: "Index card box",
    desc: "A tidy mind is half the battle! The multi-colored index card tabs sort and organize documents in the box. You are included in a card index as a customer or patient or you\u2019re learning for school or university with the help of the cards.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ballot-box-with-ballot_1f5f3.png",
    title: "Ballot box with ballot paper",
    desc: "\u201cI have made my choice\u201d, \u201cThe ballot will be soon\u201d or \u201cGo and vote!\u201d The emoji is used in connection with politics and governments or as an approval for a statement/idea. It also illustrates inner conflicts, decisions, the sense of justice and the trust in people.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/file-cabinet_1f5c4.png",
    title: "File cabinet",
    desc: "I keep that under lock and key! Important documents can be stored in the lockable cabinet. Old files are dug out again or a secret is kept safe!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clipboard_1f4cb.png",
    title: "Clipboard",
    desc: "Too many things to do! The clipboard allows you to take notes. Serves as a firm writing surface for appointments outside the office, for example for doctors or mechanics.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/file-folder_1f4c1.png",
    title: "Folder",
    desc: "Paperwork on end! The folder with papers or correspondence is in the filing cabinet in the office. Filing has to be done and organized, documents must be archived. Icon on computers for a file folder.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/open-file-folder_1f4c2.png",
    title: "Open file folder",
    desc: "The desk needs to be tidied up or someone is looking for a file on the computer. Documents are stored in a file folder, whether in the office or on the computer. Used in connection with filing, organization or work.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/card-index-dividers_1f5c2.png",
    title: "Card index dividers",
    desc: "Muddle makes trouble! The dividers help organize documents and quickly find what you need. Refers to computer files, office work, accounting, or college.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rolled-up-newspaper_1f5de.png",
    title: "Rolled-up newspaper",
    desc: "\u201cHas the newspaper already arrived?\u201d or \u201cDo you have any new information?\u201d Can refer to a side job, the distribution of newspapers, breaking news and publications or journalism as a career aspiration.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/newspaper_1f4f0.png",
    title: "Newspaper",
    desc: "There is news! Printed product or Internet magazine. Refers to news, the media or journalism. The first newspaper was released in 1605 in Strasbourg. Symbolically, it refers to knowledge, revelations, possibilities and dangers as well as to the public.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/notebook_1f4d3.png",
    title: "Notebook",
    desc: "I need to take that down! Be it checklists, thoughts, appointments, ideas \u2013 the book sorts the notes so you won\u2019t forget them. It is also used as a clue to tackle untidiness and forgetfulness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/notebook-with-decorative-cover_1f4d4.png",
    title: "Notebook with decorative cover",
    desc: "I found an old diary! The blank pages of the bound book can be filled with notes or sketches. The decorative cover may indicate a diary or a notebook. The emoji could also be a reminder of an event.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ledger_1f4d2.png",
    title: "Ledger",
    desc: "\u201cThe documents must be brought to the tax accountant\u201d or \u201cI have to do the bookkeeping!\u201d All business transactions in the company are listed in the general ledger. Refers to the profession of accountant, bookkeeping or finances.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/closed-book_1f4d5.png",
    title: "Closed book",
    desc: "You are a bookworm! Reading is one of the favorite pastimes, the book is almost finished or the book circle is going to meet up. Symbol for knowledge, culture and education.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/green-book_1f4d7.png",
    title: "Green book",
    desc: "Can I have the notes? The bound notebook is used in connection with reading, writing, learning or education. Homework for the school needs to be done or something must be prepared for the university or for work.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/books_1f4da.png",
    title: "Books",
    desc: "What am I trying to find out? Where can I find the information? The stack of books is growing. Someone was in the library or the bookstore, has to study or do something for school/university. Refers to reading in general, to literature and education. Books symbolize the quest for knowledge and the ability to learn from the opinions and experiences of others.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/open-book_1f4d6.png",
    title: "Opened book",
    desc: "\u201cI just cannot put the book down\u201d or \u201cHe's an open book to me!\u201d Refers to reading as such or to a book. Popular emoji of the bookworm. Could also be a hint to get to the bottom of something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/safety-pin_1f9f7.png",
    title: "Safety pin",
    desc: "My pants are ripped! The safety pin is the savior in distress. Has been helping to close clothes for thousands of years. Was the diaper holder and precursor of the brooch. Jewelry in the punk scene and symbol of solidarity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/link-symbol_1f517.png",
    title: "Chain links",
    desc: "I feel very connected to you! Two links in a silver chain. Icon for a link to a website. There is a strong romantic or social and inseparable bond.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/paperclip_1f4ce.png",
    title: "Paper clip",
    desc: "Paperwork is so boring! The paper clip holds papers together for better clarity or organization. Invented in Oslo in 1866. Icon in mail programs for adding an attachment.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/linked-paperclips_1f587.png",
    title: "Linked paper clips",
    desc: "Nothing can separate us! Paper clips hold documents together. They can also be used to reset electronic devices, remove SIM cards, pick locks or clean fingernails.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/triangular-ruler_1f4d0.png",
    title: "Set square",
    desc: "Math is my favorite subject! The geometry triangle helps with drawing figures and measuring lengths and angles. Stands for accuracy and a mathematical or technical understanding.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/straight-ruler_1f4cf.png",
    title: "Ruler",
    desc: "I have to remeasure! A ruler is used to draw straight lines or to measure distances. The oldest ruler comes from India and is over 4000 years old. In connection with school or work, e.g. architectural draftsman.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/abacus_1f9ee.png",
    title: "Abacus",
    desc: "I have to calculate that first! The board with the sliding pieces serves as a calculation help for children today. Allows you to perform the basic arithmetic operation. Was widespread in the Middle Ages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pushpin_1f4cc.png",
    title: "Push pin",
    desc: "I'll remember this idea! Sticky notes can be attached to a pin board with push pins. Something important should be kept in mind!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/round-pushpin_1f4cd.png",
    title: "Round Pushpin",
    desc: "I mustn't forget! Red drawing pin with round plastic head. Used to indicate your own position during navigation. Can also represent sewing.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-scissors_2702.png",
    title: "Scissors",
    desc: "Snippety snip! The scissors can be used to correct or cut to size. You part with your hair at the hairdresser\u2019s or with useless things. A clean separation or a clear cut. Symbolic for the hairdressing profession.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/crossed-flags_1f38c.png",
    title: "Crossed Flags",
    desc: "Two crossed Japanese flags. They are a sign of solidarity toward their origin. The red dot on white background symbolizes the rising sun.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lower-left-ballpoint-pen_1f58a.png",
    title: "Ball-pen",
    desc: "You should have written it down! A common writing device for everyday writing. In connection with work, the office, university or school. The popular promotional item was invented in 1838.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lower-left-fountain-pen_1f58b.png",
    title: "Fountain pen",
    desc: "I'm doing a calligraphy class! The fountain pen stands for handwriting. Important documents or personal correspondence, such as a letter, are often signed with a fountain pen.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-nib_2712.png",
    title: "Black quill",
    desc: "We\u2019re signing the contract! A fountain pen writes on paper with ink. Related to writing, school, or calligraphy. It's about something special, like a letter or an important signature.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lower-left-paintbrush_1f58c.png",
    title: "Paintbrush",
    desc: "Adding a splash of color or painting everything gray and drab! Paint or oil can be applied to a canvas with a paintbrush. Symbolic for art, inspiration and creativity. Or she brushed him off.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lower-left-crayon_1f58d.png",
    title: "Crayon",
    desc: "I\u2019m letting off steam creatively! Children use wax crayons to draw or write. Can represent childhood or a childish person. You\u2019re making fun of yourself and your non-existent painting skills.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pencil_270f.png",
    title: "Pencil",
    desc: "My child is going to school! The writing instrument is often used by writing beginners, but also for drawings, sketches, shorthand or notes.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/memo_1f4dd.png",
    title: "Memo",
    desc: "\u201cDon't forget\u201d, \u201cWrite it down\u201d or \u201cThat'll be on my notepad\u201d! A note or an appointment is noted on the paper. Something that was said or that you heard must be remembered.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/left-pointing-magnifying-glass_1f50d.png",
    title: "Magnifier tilted to the left",
    desc: "The truth will be revealed! An event is closely monitored and inspected. With poor eyesight, the magnifying glass serves as a support. Taking a close look at something can bring new insights. Symbolically, the magnifier advises you against taking a matter too lightly. Trivia should not be overrated.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/right-pointing-magnifying-glass_1f50e.png",
    title: "Magnifier tilted to the right",
    desc: "I'll take a closer look! Through the magnifying glass, even small objects can be viewed. May stand for an investigator, detective or a curious person. Search and zoom icon on computers.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lock-with-ink-pen_1f50f.png",
    title: "Lock With Ink Pen",
    desc: "Blocked padlock with fountain pen. Confidential data is encrypted and secure, sensitive information has been digitally signed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/open-lock_1f513.png",
    title: "Open Lock",
    desc: "An open padlock. \u201cSomething is open to you or available\u201d, or: \u201cI'm going to uncover something that has been a secret up to now\u201d. Also possible: \u201cCaution, this information is not secure!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/lock_1f512.png",
    title: "Lock",
    desc: "Closed padlock. The object or the information is not available to you, or you keep it safe and protected. Caution! A symbol of confidentiality!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/closed-lock-with-key_1f510.png",
    title: "Closed Lock With Key",
    desc: "Symbol of security. \u201cThe information is safe\u201d or \u201cNobody else will find out!\u201d A friend confides a secret to you and counts on your keeping it safe in your hands.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heavy-black-heart_2764.png",
    title: "Red Heart",
    desc: "The red heart is the classical symbol of love. Expression of passion and romance. But also in the non-romantic context for friendship and strong bonds.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/orange-heart_1f9e1.png",
    title: "Orange Heart",
    desc: "The heart shape is the symbol of love. The orange heart may represent a half-hearted love or you do not want to have a relationship but just be friends.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/yellow-heart_1f49b.png",
    title: "Yellow Heart",
    desc: "A heart of gold. Represents cordial love and purity of the heart. Not so much in the romantic context, but rather for happiness, friendship and the joy of life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/green-heart_1f49a.png",
    title: "Green Heart",
    desc: "Expression of life or lifestyle (e.g. healthy diet) and closeness to nature. Also known as the jealous heart, it may indicate relationship issues or the hope for reconciliation. Often used on the Irish St. Patrick's Day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/blue-heart_1f499.png",
    title: "Blue Heart",
    desc: "I have full confidence in you! Represents platonic love, faithfulness, loyalty and friendship. But also: support of the awareness of autism, love of water sports or expression of a fetish.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/purple-heart_1f49c.png",
    title: "Purple Heart",
    desc: "Expression of understanding and compassionate love. Represents affection and care. For Mother's Day or in messages between parents and children. Used by fashion-conscious people or celebrities as an expression of glamor or wealth. In the US, military medal for wounded soldiers.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-heart_1f5a4.png",
    title: "Black Heart",
    desc: "The black heart shows a dark and twisted sense of humor. It can reflect the dark side of the soul. Also used to express grief and sorrow.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-heart_1f90d.png",
    title: "White heart",
    desc: "The heart is an international symbol of love, affection and compassion. A white heart can symbolize the purity, kindness and innocence of a relationship or friendship.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/brown-heart_1f90e.png",
    title: "Brown heart",
    desc: "A heart not only represents love, but also life. The brown heart can express a closeness to the environment or nature as well as a preference for chocolate. Brown is a warm color and stands for warmth, security and comfort.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/broken-heart_1f494.png",
    title: "Broken Heart",
    desc: "I am desperately unhappy! The broken red heart expresses sadness and suffering. Someone is love sick at the moment.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heavy-heart-exclamation-mark-ornament_2763.png",
    title: "Heavy Heart Exclamation Mark Ornament",
    desc: "I totally agree with that! A heart with a dot below forms a decorative exclamation mark. This gesture comes from the heart and emphasizes that you really like something or someone.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/two-hearts_1f495.png",
    title: "Two Hearts",
    desc: "Love is in the air! Not so much in the passionate context, but rather a decoration. In romantic texts an expression of affection for someone or friendships among girls.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/revolving-hearts_1f49e.png",
    title: "Revolving Hearts",
    desc: "Two hearts circling around each other represent the love between two persons. Someone wants to win your heart.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/beating-heart_1f493.png",
    title: "Beating Heart",
    desc: "I love you so much! The beating heart symbolizes a strong connection and expresses strong feelings for someone or something. Is also a symbol of life: A baby is on the way.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/growing-heart_1f497.png",
    title: "Growing Heart",
    desc: "The three hearts in one another are to convey an ever-growing heart. The feelings are getting deeper and deeper, the love is growing. The heartbeat increases and the heart is filled with joy after an emotional conversation or a great experience.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sparkling-heart_1f496.png",
    title: "Sparkling Heart",
    desc: "You are simply great! A sparkling heart means someone is doting on you. Persistence will be rewarded now!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heart-with-arrow_1f498.png",
    title: "Heart With Arrow",
    desc: "Cupid's arrow hit you - you're hopelessly in love! Expresses romantic feelings in messages. Often used around Valentine's Day.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heart-on-fire_2764-fe0f-200d-1f525.png",
    title: "Heart on fire",
    desc: "My heart is on fire for you! Somebody sparked our heart or we are burning for something. We\u2019re full of enthusiasm, we\u2019re catching fire. Expression of strong love with a lot of passion.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heart-with-ribbon_1f49d.png",
    title: "Heart With Ribbon",
    desc: "You have my love. The box in a heart shape with a ribbon could contain chocolates or jewelry. Popular on Valentine's Day or on birthdays. Or someone gives you his heart.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heart-decoration_1f49f.png",
    title: "Heart Decoration",
    desc: "A decorative variation of the heart symbol. Stands for love, attention and affection of your conversation partner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/peace-symbol_262e.png",
    title: "Peace symbol",
    desc: "Love, peace and harmony. Symbol of nuclear power protest in the 1960s, now globally known as the peace sign. Can symbolize the inner balance. A dispute shall be settled or the chat partner is asked to be peaceful.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/latin-cross_271d.png",
    title: "Latin cross",
    desc: "Everyone has to bear their own cross! Christianity symbol. Represents the connection between the earthly (earth) and the divine (heaven). Refers to a religious person, the church or God.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/star-and-crescent_262a.png",
    title: "Star and half moon",
    desc: "We're going to Turkey by plane or \u201cRamadan is starting\u201c. Hilal (Arabic for the rising moon's crescent) and the five-pointed star together form an important Muslim symbol. Also found on many national flags.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/om-symbol_1f549.png",
    title: "Om Symbol",
    desc: "Om (Sanskrit). The mantra is considered sacred in religions such as Buddhism and Hinduism. Primeval sound of the origin of the universe. Also known as the Namaste symbol. Emoji stands for spiritual development, meditation and yoga.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wheel-of-dharma_2638.png",
    title: "Wheel Of Dharma",
    desc: "Wheel of the doctrine. An important sign in Hinduism and Buddhism. It reminds us of the eight ways of perception and of the fact that only the body dies, but the spirit continues in another form.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/star-of-david_2721.png",
    title: "Star Of David",
    desc: "The Star of David is an important symbol of the people of Israel and the Jewish religion. This is why it can also be seen on the ensign. It is usually sent during the festival of lights, Chanukkah.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/six-pointed-star-with-middle-dot_1f52f.png",
    title: "Hexagram With Dot",
    desc: "The six-pointed star with a dot in the middle unites two triangles; connection of opposites. Multifaceted symbolism: Freemasons, union of spirit and matter, expulsion of evil spirits and demons.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/menorah-with-nine-branches_1f54e.png",
    title: "Menorah",
    desc: "The Chanukkia is a nine-armed candlestick and is lit only at the Jewish Chanukka festival. Each candle stands for one day of the eight-day festival. With the ninth candle the others are ignited, respectively.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/yin-yang_262f.png",
    title: "Yin Yang",
    desc: "Yin and yang emoji expresses the shared identity of actually opposing things such as body and mind. Stands for balance and stability.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/orthodox-cross_2626.png",
    title: "Orthodox Cross",
    desc: "Through the additional bar, the Russian-Orthodox symbol is an extension of the cross known from Christianity. With the \u201cfoot rest\u201d, it is meant to remind us of the crucifixion of Jesus.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/place-of-worship_1f6d0.png",
    title: "Place of Worship",
    desc: "The kneeling person under a roof symbolizes a place of prayer. This could be a church or a mosque. The sign can be found at airports, for example.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ophiuchus_26ce.png",
    title: "Ophiuchus",
    desc: "The astronomical sign for the constellation of Ophiuchus (Latin for serpent bearer). One of the 48 constellations of the Greek ancient world and the subject of Greek myths. In some circles, is considered the unknown 13th zodiac sign.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/pisces_2653.png",
    title: "Pisces",
    desc: "People with the zodiac sign Pisces (20 February to 20 March) are characterized by a strong sensitivity. They are good listeners and faithfully stand by your side.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-id_1f194.png",
    title: "ID Key",
    desc: "The capital letters ID in a square are the abbreviation for identification number. This number allows a direct correlation to an object, to people or an item.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/atom-symbol_269b.png",
    title: "Atom symbol",
    desc: "The superimposed ellipses represent the atom symbol. Stylized representation of an atom: electrons orbit the atomic nucleus. An atom is the smallest part of an element. Refers to something very small, or to nuclear power, nuclear deals, or science.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/radioactive-sign_2622.png",
    title: "Radioactive sign",
    desc: "\u201cMy knee is being X-rayed\u201d or \u201cI'm watching a documentary about Chernobyl\u201d! The black fan against a yellow background warns of radioactive rays. International warning sign. Warns of a threat! If the atomic nucleus decays, rays with great energy are released.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/biohazard-sign_2623.png",
    title: "Biohazard",
    desc: "The biohazard sign warns of biological substances that pose a threat to humans and the environment. Someone goes to work sick and is contagious.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mobile-phone-off_1f4f4.png",
    title: "Mobile Phone Off",
    desc: "Mobile phones should be switched off, e.g. in the cinema or in the hospital. Can also be used to signalize: I am unavailable!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/aries_2648.png",
    title: "Aries",
    desc: "The astrological symbol shows Aries. This zodiac sign is described as fierce, dynamic and spontaneous, and often is the more dominant partner in love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/taurus_2649.png",
    title: "Taurus",
    desc: "The Taurus (21 April to 20 May) is persevering and has a good taste for beautiful things. You should not tell a Taurus what to do. People in this zodiac sign like to do things in their own rhythm.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/gemini_264a.png",
    title: "Gemini",
    desc: "The zodiac sign Gemini lies between 21 May and 21 June. The urge for variety and movement is typical for Gemini. They are driven by an extraordinary curiosity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cancer_264b.png",
    title: "Cancer",
    desc: "The zodiac sign Cancer from the zodiac calendar. Those born under the zodiac of Cancer are described as gentle, helpful and modest.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/leo_264c.png",
    title: "Leo",
    desc: "I'm a lion! The zodiac sign Leo lies between 23 July and 23 August. A Leo is self-assured, kind, and generous.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/virgo_264d.png",
    title: "Virgo",
    desc: "Symbol of the astrological star sign Virgo. A Virgo knows what she wants and how to achieve it.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/libra_264e.png",
    title: "Libra",
    desc: "The zodiac sign Libra. Libra is regarded as being in need of harmony, balanced, and diplomatic. You can score points with a Libra by showing polite manners and etiquette.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/scorpius_264f.png",
    title: "Scorpius",
    desc: "The Scorpius is the eighth sign of the zodiac and lies between 24 October and 22 November. People with this star sign want to scrutinize and explore everything. They are fastidious and prefer honesty.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sagittarius_2650.png",
    title: "Sagittarius",
    desc: "In astrology, the arrow symbol with a horizontal line stands for the zodiac sign Sagittarius. These people are independent, generous and optimistic.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/capricorn_2651.png",
    title: "Capricorn",
    desc: "As the tenth zodiac sign, the Capricorn lies in the period between 22 December and 20 January. People in this star sign only believe what they can see. Therefore you should not fool a Capricorn!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/aquarius_2652.png",
    title: "Aquarius",
    desc: "The symbol of the star sign Aquarius. People born between the 21st of January and the 19th of February are inventive contemporaries, open to new ideas and they love the variety.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-flower_1f4ae.png",
    title: "White Flower",
    desc: "White flower with Japanese inscription \u201cVery well done\u201d. Used in schools in Japan as a stamp for very good achievements.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mahjong-tile-red-dragon_1f004.png",
    title: "Mahjong Game Stone \u201cRed Dragon\u201d",
    desc: "A symbol (the red dragon) from the Japanese Mahjong game. The player wins the game who first has all the stones with figures and a pair. The red dragon is one of these figures.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/circled-ideograph-accept_1f251.png",
    title: "Acceptable",
    desc: "That's OK for me! Emoji is pronounced \u201cka\u201d in Japanese and \u201cke\u201d in Chinese. Roughly means: possible, appropriate, or permissible.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/vibration-mode_1f4f3.png",
    title: "Vibration Mode",
    desc: "Emoji shows a smartphone, which is muted and merely vibrates. This could be the request not to disturb, or a demand to respond.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-6709_1f236.png",
    title: "Subject To Fees",
    desc: "This is not free! Emoji shows a Japanese and Chinese phrase. Means \u201ctoll\u201d, \u201ccharge\u201d, or \u201cproperty\u201d.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-7121_1f21a.png",
    title: "Without Fees",
    desc: "Emoji is known as the symbol for the free broadcasting service in Japan. Stands for an offer without liability to charges. Can also mean \u201cI don't own anything\u201d. Opposite emoji: [ \u201cSubject To Fees\u201d \ud83c\ude36]",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-55b6_1f23a.png",
    title: "Open",
    desc: "We are open! Japanese symbol shows that a business is operable and open, or a service is offered.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-7533_1f238.png",
    title: "Application",
    desc: "Emoji is used in Japan for the identification marking of requests and forms. In the Chinese zodiac, it can also refer to the monkey.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-6708_1f237.png",
    title: "Monthly/Moon Sign",
    desc: "The Chinese (yue) and Japanese (tsuki) meaning of this sign is \u201cmonthly\u201d or \u201cmoon\u201d. For instance, people are reminded of a monthly due amount with it.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eight-pointed-black-star_2734.png",
    title: "Eight-Pointed Star",
    desc: "The eight-pointed star is usually utilized as a decorative element. It is meant to express joy, breeziness, and exuberance.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-vs_1f19a.png",
    title: "VS Button",
    desc: "The VS (versus) symbol is mostly used to compare two things or circumstances. For example, hamburger vs. pizza, Klitschko vs. Tyson. Can also mean \u201cObjection!\u201d",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/circled-ideograph-advantage_1f250.png",
    title: "Bargain",
    desc: "You can grab a bargain here! In Japan, the symbol indicates special offers and discounts.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/circled-ideograph-secret_3299.png",
    title: "Secret",
    desc: "Keep this for you! In Japan and China, the symbol is used to point to a secret.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/circled-ideograph-congratulation_3297.png",
    title: "Congratulations",
    desc: "I wish you luck! Sign for best wishes and blessings. Also used on national holidays.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-5408_1f234.png",
    title: "Passed",
    desc: "This is an agreement! This Japanese emoji can stand for a union, such as in a partnership. It can also hint at a meeting. The symbol is also used when an exam or a test has been passed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-6e80_1f235.png",
    title: "Full",
    desc: "A Japanese character in white with a red background. It stands for full absorption capability and capacity. The sign is used, for instance, for \u201cfilling up the car tank\u201d or for displaying hotel rooms. Opposite emoji: [ free & unoccupied \ud83c\ude33]",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-5272_1f239.png",
    title: "Discount",
    desc: "The Japanese symbol for \u201csale\u201d. In the event of discount campaigns, it is hanged in front of the shop door, so that the customer can spot the opportunity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-7981_1f232.png",
    title: "Prohibition",
    desc: "Caution, prohibited! This Japanese symbol indicates a prohibition or restriction. A certain action or behavior is not desired.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/negative-squared-latin-capital-letter-a_1f170.png",
    title: "Blood group A",
    desc: "We're going to donate blood! People with blood group A can donate to people with blood group A or AB and can only tolerate blood group A or 0. In ancient times, it was assumed that body fluids determined a person's temperament. Blood group A is most common in Europe, with 40% worldwide.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/negative-squared-latin-capital-letter-b_1f171.png",
    title: "Blood group B",
    desc: "My blood donation card is here! Blood group B occurs 11% worldwide. It is the most common blood type in certain areas of Asia. In Japan, people believe that the blood type is an indicator of whether an applicant is suitable for a management position.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/negative-squared-ab_1f18e.png",
    title: "Blood group AB",
    desc: "He needs an IV! In 1930, the Viennese physician Karl Landsteiner received the Nobel Prize for the uniform designation of the blood groups. Blood group AB is one of the rarest blood groups in the world.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cl_1f191.png",
    title: "CL button",
    desc: "Can you delete this? CL on the button stands for Clear. On older cell phones, this button deleted the text. Something is no longer used or needed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/negative-squared-latin-capital-letter-o_1f17e.png",
    title: "Blood group 0",
    desc: "I'm on a blood type diet! People with blood group 0 are so-called universal donors. This blood group is compatible with all others. From a global perspective, blood group 0 is the most common.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-sos_1f198.png",
    title: "SOS button",
    desc: "We could use some help here! International emergency signal in Morse code. SOS stands for \u201csave our souls\u201d. The sequence of letters calls for help in an emergency and can be found on emergency telephones or on lifebuoys.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cross-mark_274c.png",
    title: "Cross Mark",
    desc: "\u201cThis is not allowed!\u201d or \u201cDon't do this!\u201d This large red cross is usually utilized when something is undesired. Can also be a sign of multiplication or kissing.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heavy-large-circle_2b55.png",
    title: "Red hollow circle",
    desc: "That is correct! The red hollow circle is used in Japan to tick something off. Represents approval. Opposite emoji:\u274c.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/octagonal-sign_1f6d1.png",
    title: "Octagonal sign",
    desc: "The conversation is over! The octagonal red sign is a stop sign in many countries. The warning signal regulates the traffic and means stop.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/carp-streamer_1f38f.png",
    title: "Carp Streamer",
    desc: "A flagpole with self-tinkered Japanese wind cones in carp shape (Koi-Nobori). At the children's festival two large carps are suspended for the parents and small ones for the children.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/no-entry_26d4.png",
    title: "No Entry",
    desc: "So far and no further! Symbol for \u201cno admittance\u201d, \u201ckeep out\u201d, or \u201cno entry\u201d. Is also used if your chat partner is angry.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/name-badge_1f4db.png",
    title: "Name Badge",
    desc: "Name badge emoji is used for identification, e.g., at work. The tulip-shaped design is typical of Japanese kindergartens.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/no-entry-sign_1f6ab.png",
    title: "No Admittance",
    desc: "So far and no further! The admittance to buildings or rooms is prohibited. Similar to a prohibition sign, e.g. no smoking.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/anger-symbol_1f4a2.png",
    title: "Anger Symbol",
    desc: "Comic and Manga symbol (often with the words \u201cBam\u201c) indicates where a punch landed. The chat partner is very angry. Emoticon is a warning sign: Beware, you have gone too far.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hot-springs_2668.png",
    title: "Hot Springs",
    desc: "A hot thermal spring with rising steam. Symbol on Japanese cards. I want to relax with you, or let's go swimming!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-question-mark-ornament_2753.png",
    title: "Question Mark Ornament",
    desc: "I beg your pardon? A bright-red question mark, which underlines the high importance of the question asked. Chat partner expects an immediate response.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-question-mark-ornament_2754.png",
    title: "White Question Mark",
    desc: "A question must be answered! The more question marks, the more urgent. However, the white question mark is less punchy than the red question mark.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heavy-exclamation-mark-symbol_2757.png",
    title: "Exclamation Mark",
    desc: "Thick (red) symbol for an exclamation mark. Is used to express a concern or to yell a desire for something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-exclamation-mark-ornament_2755.png",
    title: "White Exclamation Mark",
    desc: "The white exclamation mark shall draw attention to something. Due to the light color, it is less dramatic than the red exclamation mark.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/double-exclamation-mark_203c.png",
    title: "Double Exclamation Mark",
    desc: "The signal color red and the double number of exclamation marks clarify the meaning of a statement. May also emphasize the urgency. You attach particular importance to what has been said or you are shocked by a message.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/low-brightness-symbol_1f505.png",
    title: "Dim button",
    desc: "Symbol for the brightness on technical devices. Button for dimming the light. The brightness decreases, the light appears warmer, the room atmosphere changes. We\u2019ll have a cozy evening tonight!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/high-brightness-symbol_1f506.png",
    title: "Brightness button",
    desc: "Brightness symbol. Can refer to light, the sun, brightness, as well as positive energy. Someone has bright eyes or a bright smile. Take your sunglasses with you, the sun is shining brightly!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/hundred-points-symbol_1f4af.png",
    title: "Hundred Points Symbol",
    desc: "Number 100 in red, double underlined. Can mean: I'm proud, everything is perfect. I agree 100% with it. I got full score in the exam.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/trident-emblem_1f531.png",
    title: "Trident Emblem",
    desc: "The trident is used for attack, defense or as a hunting weapon. Often seen in the hands of statues of gods. Can be a warning sign.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/fleur-de-lis_269c.png",
    title: "Fleur-De-Lis",
    desc: "Stylized blossom of the iris, usually in the colors gold or yellow, is considered chivalrous. Symbol from the French coat of arms art (heraldry). The decorative symbol can be found in many logos or in the emblem of the world organization of the scout movement.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/part-alternation-mark_303d.png",
    title: "Part Alternation Mark",
    desc: "The curved M is a Japanese punctuation mark that indicates the singer's start in a song. Also used as a symbol for McDonald's.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/warning-sign_26a0.png",
    title: "Warning",
    desc: "Take this as a warning! The black exclamation mark in the yellow triangle is a universal warning symbol. Is symbolic for potential danger or someone is entering dangerous grounds.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/children-crossing_1f6b8.png",
    title: "Caution Children",
    desc: "Sign for motorists to drive with particular care and to watch out for children who might suddenly run onto the road. Near schools or on the way to school.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/japanese-symbol-for-beginner_1f530.png",
    title: "Japanese symbol for beginner",
    desc: "He's just got his driver's license! In Japan, the yellow-green sign (Shoshinsha label) must be visibly attached to the car for one year. Symbol for novice drivers and mandatory in Japan since 1972.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-universal-recycling-symbol_267b.png",
    title: "Recycling Symbol",
    desc: "Green recycling symbol consisting of three counterclockwise arrows. Indicates that something can be reused. Can often be found on packages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-heavy-check-mark_2705.png",
    title: "Check mark button",
    desc: "Everything is alright! The tick stands for an add-on or an approval. A task has been completed successfully. The signal color green is usually seen positive: someone has a green thumb. Or you give someone the green light. As positive feedback on a plan or intention: go ahead!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-6307_1f22f.png",
    title: "Reserved",
    desc: "In Chinese, this symbol is pronounced \u201czhi\u201c and in Japanese \u201cyubi\u201c. Stands for a finger or a toe, which is pointing at a certain place or in a direction.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/chart-with-upwards-trend-and-yen-sign_1f4b9.png",
    title: "Chart with uptrend and yen sign",
    desc: "This is a good rate to exchange money! The chart shows the price of the Japanese yen. In this case an upward trend, of the economy or the trade.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sparkle_2747.png",
    title: "Sparkle",
    desc: "The eyes are sparkling with joy, the floor is shining with cleanliness or the new ring is glittering and gleaming. For everything that shines and sparkles. Can also be used decoratively.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eight-spoked-asterisk_2733.png",
    title: "Asterisk button",
    desc: "The asterisk is the typographical symbol for a footnote or a note and a special key on the keyboard. Placeholder in words you don\u2019t want to write out: He\u2019s an a...! Also known as gender asterisk.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/globe-with-meridians_1f310.png",
    title: "Globe With Meridians",
    desc: "The planet earth with latitude and longitude (meridian). Symbol for internationalization, such as global movements or the worldwide web. On iOS devices, icon for changing the keyboard language.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/diamond-shape-with-a-dot-inside_1f4a0.png",
    title: "Diamond Shape With a Dot Inside",
    desc: "Represents the Japanese term Kawaii. Translated, it means lovable, sweet, cute, adorable. A lifestyle that puts the childish and cute side in the foreground. Resembles a flower in its shape.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/circled-latin-capital-letter-m_24c2.png",
    title: "Encircled Latin capital M",
    desc: "I'll meet you at the subway station! This sign can usually be found in big cities and serves as a guide in local public transport. Because subways, outside of Germany usually called Metro, run underground. This sign indicates where a station is located.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cyclone_1f300.png",
    title: "Cyclone",
    desc: "Symbol for a cyclone (violent hurricane in the tropics). Might mean: Beware, you are in for something. The spiral shape can also be used in a decorative way. In its original meaning the symbol for dizziness (I feel dizzy).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/sleeping-symbol_1f4a4.png",
    title: "Symbol for sleeping",
    desc: "I'll go to bed early tonight! In comics, the Zzz illustrates that someone is sleeping. Can represent drowsiness but also stand for disinterest and boredom.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/elevator_1f6d7.png",
    title: "Elevator",
    desc: "I hope there is an elevator! In 1853, the American Elisha Graves Otis invented the fall-proof elevator. The longest elevator shaft with approx. one kilometer is located in the Jeddah Tower. May relate to the fear of getting stuck in an elevator.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/automated-teller-machine_1f3e7.png",
    title: "Symbol teller machine",
    desc: "ATM stands for Automatic Teller Machine. With the help of a credit card, you can withdraw cash abroad. ATM icon. In connection with finances or travel.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/water-closet_1f6be.png",
    title: "Water Closet",
    desc: "I'm going to the toilet! The abbreviation comes from the English water closet. In German, you say loo or \u201cquiet place\u201d. In some countries, this symbol points to the toilet in public buildings.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wheelchair-symbol_267f.png",
    title: "Wheelchair symbol",
    desc: "Is there barrier-free access? Accessibility symbol. The wheelchair is a means of transport for people with disabilities. Information sign in restaurants or to mark parking spaces.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/negative-squared-latin-capital-letter-p_1f17f.png",
    title: "P button",
    desc: "Where shall we park the car? or \u201cI'm looking for a parking space\u201d! The white P on a blue background is a parking space sign and indicates places where the car can be parked. Parking lot symbol.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cjk-unified-ideograph-7a7a_1f233.png",
    title: "Vacancy",
    desc: "There is something still available here. Japanese emoji for vacancy or availability. Among other things, it is used to indicate free parking spaces and hotel rooms.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-katakana-sa_1f202.png",
    title: "Free Of Charge",
    desc: "Emoji indicates a free offer, mostly in connection with a service. In Japan, it calls attention to e.g. a free meal or drink.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/passport-control_1f6c2.png",
    title: "Passport control",
    desc: "Remember your passport! Passport control icon. The information sign can be found at airports or border crossings. Depending on the country, a specific identification document is required for entry, such as an identity card or passport. Usually refers to a trip or a stay abroad.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/customs_1f6c3.png",
    title: "Customs",
    desc: "The package is stuck in customs or the suitcase is lost! Customs control icon. Information sign at airports or border crossings. A customs officer inspects the baggage, checks whether, for example, goods are being imported illegally.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baggage-claim_1f6c4.png",
    title: "Baggage claim",
    desc: "We have landed and are waiting for the suitcases! A suitcase lying on a baggage conveyor belt. Icon for baggage claim at airports, train stations or bus terminals. Can represent a lost suitcase or travel in general.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/left-luggage_1f6c5.png",
    title: "Baggage Room",
    desc: "Sign pointing to luggage lockers where luggage can be safely stored for a fee. Can be found, for example, at airports or at bus stations in Japan.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/mens-symbol_1f6b9.png",
    title: "Men symbol",
    desc: "\u201cI have to see a man about a dog\u201d or \u201cI am in the john\u201d. The symbol explains to gentlemen which toilet door is the right one. Men spend more time in the bathroom than women, but they do not go there as often.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/womens-symbol_1f6ba.png",
    title: "Ladies' Washroom",
    desc: "The female stick figure often points to the ladies' room. It is still a popular mystery why women go to the bathroom together. Can generally be used as a symbol for the female gender.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/baby-symbol_1f6bc.png",
    title: "Baby",
    desc: "The symbol indicates a suitable room with baby changing table to change the baby's diapers. Refers to newborns or as an indication of pregnancy.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/restroom_1f6bb.png",
    title: "Restroom symbol",
    desc: "Is there a restroom nearby? Public toilet symbol. Mostly a unisex toilet: can be used by everyone regardless of sexual identity.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/put-litter-in-its-place-symbol_1f6ae.png",
    title: "Paper basket symbol",
    desc: "Tidy up now! The symbol shows a person throwing their rubbish into a trash can. The sign can be seen in parks or on hiking trails. Informs people not to simply throw away litter, but to dispose of it correctly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cinema_1f3a6.png",
    title: "Cinema",
    desc: "Want to watch a movie? Film projector or cinema screen with curtains. Emoji represents the cinema.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/antenna-with-bars_1f4f6.png",
    title: "Signal strength",
    desc: "My reception is bad, I'll get back to you later! Bar-shaped signal strength display. The more bars, the better the connection. As an explanation of why you did not answer or the telephone connection was suddenly interrupted.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-katakana-koko_1f201.png",
    title: "Japanese for \u201chere\u201c",
    desc: "What is this place called? Japanese written language for emphasis and as an eye-catcher, e.g. on signs. The sign means \u201chere\u201d (koko) and refers to location information.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/input-symbol-for-symbols_1f523.png",
    title: "Input Symbol",
    desc: "Emoji shows a Japanese post office, a music note, the ampersand, and a percent sign. Icon for switching from the alphabetic to the numeric keyboard or to the keyboard with symbols or special characters.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/information-source_2139.png",
    title: "Information",
    desc: "Can you provide any information about this? The small \u201ci\u201d stands for information. The sign points to a tourist information office. Is used for orientation in parks or zoos and provides information about the region when on vacation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/input-symbol-for-latin-letters_1f524.png",
    title: "Input button Latin letters",
    desc: "We are learning Latin! As a key, it switches the keyboard to letters. Abc is an identifier for the alphabet. The old Latin alphabet, in existence since 700 BC, comprised 23 instead of the current 26 letters.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/input-symbol-for-latin-small-letters_1f521.png",
    title: "Input button Latin lowercase letters",
    desc: "It is really that simple! Pressing the key changes the keyboard to lower case. Can relate to school, the children are rehearsing the ABC.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/input-symbol-for-latin-capital-letters_1f520.png",
    title: "Input button Latin uppercase letters",
    desc: "The key can be used to switch to capitalization. The emoji shows the first four letters of the Latin alphabet in capital letters. The child is learning to write or to express: It is extremely easy!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-ng_1f196.png",
    title: "NG Button",
    desc: "This is not OK! NG stands for \u201cNo Good\u201d and is used as the colloquial antonym of \u201cOK\u201d in Japan. Chat partner wants to save you from a mistake or warn you about something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-ok_1f197.png",
    title: "OK button",
    desc: "I agree! As a question, consent or confirmation. Short for \u201cokay\u201d. So everything is correct!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-up-with-exclamation-mark_1f199.png",
    title: "UP button",
    desc: "Things are looking up! Originally intended to illustrate moving up to the next level of a game. There is also an upward trend in life: a promotion is pending at work or the next class has been reached.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-cool_1f192.png",
    title: "Cool button",
    desc: "\u201cI consent to this\u201d or \u201cI like that\u201d! Expresses admiration or appreciation. Keeping calm. Once a buzzword in the language of young people, today an arbitrary word for anything that pleases.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-new_1f195.png",
    title: "New button",
    desc: "We're going to New York! New apartment, new hairstyle, new job or new partner. Also in the sense of novel, unused or freshly baked.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/squared-free_1f193.png",
    title: "Free button",
    desc: "Free and unbound. Can also mean for nothing or at no charge. The books are for free or you can have your second coffee at no charge in your favorite cafe.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-zero_30-fe0f-20e3.png",
    title: "Zero Key",
    desc: "Keyboard key with rounded corners and the number 0 in the middle. The freezing point of water. Someone gets from naught to sixty!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-one_31-fe0f-20e3.png",
    title: "One Key",
    desc: "Square with rounded corners and the number 1 in the middle. Looks like a keyboard key. Can be used to emphasize numerical data, e.g. year dates.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-two_32-fe0f-20e3.png",
    title: "Two Key",
    desc: "Square with rounded corners and the number 2 in the middle. Similar to a keyboard key. Symbol of opposites, e.g. man and woman or yin and yang.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-three_33-fe0f-20e3.png",
    title: "Three button",
    desc: "The number three is used in education (\u201cI'm counting to three!\u201d) or is a stimulus for another attempt (\u201cAll good things come in threes\u201d). We often count down from three to ring in a start.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-four_34-fe0f-20e3.png",
    title: "Four Key",
    desc: "Keyboard key with rounded corners and the number 4 in the middle. Four cardinal directions, four seasons. Stands for luck in the western world (shamrock) and is an unlucky number in Asia.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-five_35-fe0f-20e3.png",
    title: "Five button",
    desc: "You give someone a high five, or you bought something in a five-and-dime. The restaurant gets a five star rating. There\u2019s a five o\u2019clock shadow in your face. The number can be highlighted with the emoji.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-six_36-fe0f-20e3.png",
    title: "Six button",
    desc: "The sixth sense, an unconscious perception, has helped in an ambiguous situation. The new neighbor shows his six-pack. He\u2019s six feet under. In tarot, the number six stands for love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-seven_37-fe0f-20e3.png",
    title: "Seven Key",
    desc: "Keyboard key with the number 7 in the middle. Number of days of a week. Often occurs in fairy tales, e.g. Snow White and the Seven Dwarfs, the Valiant Little Tailor slays seven (flies) in one go.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-eight_38-fe0f-20e3.png",
    title: "Eight button",
    desc: "Meeting at eight! Highlights a number or a countdown: my vacation starts in eight weeks! A lucky number in Chinese. He has one over the eight or he\u2019s behind the eight ball.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-digit-nine_39-fe0f-20e3.png",
    title: "Nine button",
    desc: "Let\u2019s play nine men\u2019s morris! She\u2019s a nine day wonder or I\u2019m on cloud nine. The emoji puts a countdown or number in the foreground. \u201cMy child is already 9 years old\u201d or \u201cOur cat has nine lives\u201d!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-ten_1f51f.png",
    title: "Ten button",
    desc: "10... 9... 8... Usually the countdown starts from 10 and counts backwards. Brings the number to the fore: It's our 10th anniversary! For scales, 10 is often the highest threshold. Full score achieved!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/input-symbol-for-numbers_1f522.png",
    title: "Input button numbers",
    desc: "Can you please write down the number for me! This key changes the keyboard from letters to numbers. Math is your favorite subject or tutoring would be necessary.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-number-sign_23-fe0f-20e3.png",
    title: "Keycap Number Sign",
    desc: "Can I mark you? Emoji represents the hash key on a keyboard. Known as the hashtag, it is used to communicate within social platforms such as Twitter and Facebook. Is also used e.g. for credit checks with the mobile phone.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/keycap-asterisk_2a-fe0f-20e3.png",
    title: "Asterisk button",
    desc: "I want to note something! The asterisk indicates additional information or comments in a text. Serves as part of the USSD code for switching on a function, e.g. the activation of the mailbox.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eject-symbol_23cf.png",
    title: "Eject button",
    desc: "I'm out before I get in trouble! The button interrupts the connection to the computer or a media player and ejects the CD, DVD or USB stick.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-right-pointing-triangle_25b6.png",
    title: "Play button",
    desc: "Here we go! Play symbol: The button starts a song or video. Someone is watching a movie and doesn't want to be disturbed.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/double-vertical-bar_23f8.png",
    title: "Pause button",
    desc: "I need a break! From everyday life, a stressful person, a conversation, during the workday or from a relationship. The pause button temporarily pauses a song or video. A request to briefly interrupt the current activity and listen.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-right-pointing-triangle-with-double-vertical-bar_23ef.png",
    title: "Play or pause button",
    desc: "Shall we take a short break or will we continue straight away? Pressing this button pauses or plays the current song or video. Can you pause the film so we can talk on the phone? Can stand for a short break.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-square-for-stop_23f9.png",
    title: "Stop button",
    desc: "\u201cWe're stopping now\u201d or \u201cCan we stop here\u201d? Pressing the button pauses or interrupts something, e.g. a ride, a video or a song. Can mean that someone is bored or annoyed or wants to be left alone. Get away with you!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-circle-for-record_23fa.png",
    title: "Record button",
    desc: "The record button flashes, the camera is on. Now it's time to watch out what you say or do! Everything is recorded. Pressing the button starts recording of sound and (moving) images. You would like to capture a special scene or situation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-right-pointing-double-triangle-with-vertical-bar_23ed.png",
    title: "Next title button",
    desc: "Can we move on to the next topic? Two triangles to the right with bars. Button to go to the next video or music track. I would like to skip this day entirely!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-left-pointing-double-triangle-with-vertical-bar_23ee.png",
    title: "Previous title button",
    desc: "The button with the two triangles to the left gets you to the previous video or music track. An event, a vacation or a situation was so great that you\u2019d love to go back and experience it one more time.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-right-pointing-double-triangle_23e9.png",
    title: "Fast-forward button",
    desc: "Can we get to the basics? Two triangles pointing to the right. Fast forward within the song or video. You want to fast forward or even skip or speed up something because of boredom, lack of interest or time pressure.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-left-pointing-double-triangle_23ea.png",
    title: "Rewind button",
    desc: "The button can be used to rewind current music tracks or videos to a specific point. Something happened too quickly or was not captured properly. Can we come back to that for a moment?",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-up-pointing-double-triangle_23eb.png",
    title: "Fast upwards button",
    desc: "Step it up a notch! Similar to the fast forward or rewind button, but rotated 90\u00b0 upwards. The other person speaks too slowly. Reference to the high pitch of a woman's voice. If a video or music track is accelerated, the voices sound like cartoon characters.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-down-pointing-double-triangle_23ec.png",
    title: "Fast downwards button",
    desc: "I would like to see that in slow motion! The button with the two triangles pointing down slows down a video or song. The distorted sound makes the voice pitch sound lower and music can sound scary.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-left-pointing-triangle_25c0.png",
    title: "Back button",
    desc: "Can you say that again? Or \u201cI would like to go back there\u201d! The button with the triangle to the left takes you back to the previous video, song or channel. You want to go back, relive the day or an event.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/up-pointing-small-red-triangle_1f53c.png",
    title: "Upwards button",
    desc: "By pressing the button on the remote control you can change the channel or increase the volume. Can also draw attention to something: Look up, the starry sky! The triangle stands for an entity and for the elements of air and fire.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/down-pointing-small-red-triangle_1f53d.png",
    title: "Downward Button",
    desc: "Geometric sign with a downward pointing triangle. Can be used for navigation (down) or give more emphasis to a communication.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-rightwards-arrow_27a1.png",
    title: "Right Arrow",
    desc: "Next please! An arrow pointing to the right may refer to the next person in a group or an object. Can also indicate the direction to the chat partner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/leftwards-black-arrow_2b05.png",
    title: "Left Arrow",
    desc: "To the west. This arrow is used to indicate a direction. Someone is asked to look left. Often this also refers to a previously made statement.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/upwards-black-arrow_2b06.png",
    title: "Up Arrow",
    desc: "The arrow indicates the direction: symbolically or literally. \u201cThings are looking up again!\u201c Or \u201cI already told you in my previous message.\u201c",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/downwards-black-arrow_2b07.png",
    title: "Downwards arrow",
    desc: "The day was really bad or everything is down the drain! The arrow points down or south. Can stand for disapproval or for directions. Come downstairs right now!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/north-east-arrow_2197.png",
    title: "North-east arrow",
    desc: "I\u2019m hyped up! The arrow points upwards to the right or in a northeasterly direction. Refers to directions or for driving routes. Can indicate something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/south-east-arrow_2198.png",
    title: "South-east arrow",
    desc: "It goes downhill: with our mood or our finances. The arrow points down to the right or to the southeast. Can refer to driving routes or directions, e.g. we are going to Southeast Asia by plane.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/south-west-arrow_2199.png",
    title: "South-west arrow",
    desc: "Stands for the cardinal point or the direction to southwest. May refer to a city or country in a south-westerly direction. Draws attention to something in that direction. The shirt is in the closet at the bottom left!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/north-west-arrow_2196.png",
    title: "North-west arrow",
    desc: "It\u2019s in the closet at the top left! The arrow points up to the left or to the northwest. Can refer to the cardinal point or serve as a route description. It\u2019s the house on the left!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/up-down-arrow_2195.png",
    title: "Arrow upwards and downwards",
    desc: "The arrow points in two opposite directions, up and down. As a symbol, indicates the height. Movement upwards stands for growth and life, movement downwards for descent and change.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/left-right-arrow_2194.png",
    title: "Arrow left and right",
    desc: "I don't know where to go! The arrowheads point in opposite directions. Can stand for a length specification or for interchangeability. An arrow to the left means the past, to the right means the future.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/rightwards-arrow-with-hook_21aa.png",
    title: "Arrow bent to the right",
    desc: "We\u2019re turning around! The left arrow turns in the other direction. Similar to the symbol for reversing. Something or someone comes back to you.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/leftwards-arrow-with-hook_21a9.png",
    title: "Arrow bent to the left",
    desc: "Please answer my message! The arrow turns to the left. Reply icon in emails. Something is to be undone or taken back. Can refer to a direction specification.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/arrow-pointing-rightwards-then-curving-upwards_2934.png",
    title: "Arrow bent upwards",
    desc: "Things are looking up! The arrow turns and points upwards. Can be used for directions: Follow the road. Shows an upward trend. The day is going well or to show that it can only get better.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/arrow-pointing-rightwards-then-curving-downwards_2935.png",
    title: "Arrow bent downwards",
    desc: "Things are not going so well! In a bad mood, the day did not go so well. The arrow turns and points down. For directions or to indicate a downward trend.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/twisted-rightwards-arrows_1f500.png",
    title: "Shuffle button",
    desc: "Let's try something else! Two right arrows that cross each other. Random play symbol: The music tracks are played in a random order. Can also mean changing places with someone or swapping something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clockwise-rightwards-and-leftwards-open-circle-arrows_1f501.png",
    title: "Replay button",
    desc: "\u201cI watched the replay\u201d or \u201cI listen to the new album on an infinite loop\u201d! Clockwise circular arrows symbolize repetition. Metaphorical for the recurring cycles of life.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clockwise-rightwards-and-leftwards-open-circle-arrows-with-circled-one-overlay_1f502.png",
    title: "Replay once button",
    desc: "Just once more! Two arrows rotate clockwise with the number 1. A music track or album is only repeated once instead of in an infinite loop.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/anticlockwise-downwards-and-upwards-open-circle-arrows_1f504.png",
    title: "Anticlockwise Open Circle Arrows",
    desc: "Counterclockwise rotating arrows. Can be found on the Internet to refresh the page. Can be used as a symbol for a restart or new start. Or to express that something is recurring.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/clockwise-downwards-and-upwards-open-circle-arrows_1f503.png",
    title: "Vertical arrows clockwise",
    desc: "Vertical clockwise arrows can represent recycling or reuse, environmental issues, repetition or regeneration, and cycles. The day was terrific, we must do that again!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/musical-note_1f3b5.png",
    title: "Note",
    desc: "Excerpt from a printed piece of music: Two eighth notes connected to a bar. Refers to a song or to listening to music, e.g. on the radio.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/multiple-musical-notes_1f3b6.png",
    title: "Music notes",
    desc: "I love music! The music notes are part of a song and used in connection with music or singing. Someone is in a great mood singing to himself. Symbol for the pursuit of harmony.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heavy-dollar-sign_1f4b2.png",
    title: "Dollar sign",
    desc: "You\u2019ve already got dollar signs in your eyes! Symbol of wealth and valuable things. May also refer to non (or not sufficiently) existing or lent money. Much was spent when shopping or something is quite expensive.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/currency-exchange_1f4b1.png",
    title: "Currency Exchange",
    desc: "Emoticon with dollar and yen currency symbols with arrows. Sometimes with euro and British pound. Stands for money exchange between two currencies.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/trade-mark-sign_2122.png",
    title: "Registered Trademark",
    desc: "Circle with a T and M in the middle. Writing \u201ctrademark\u201d after a brand name comes from the US. Use cannot be made without explicit permission. Is often jokingly used in a chat with a fictitious name, e.g. tomatosauceleavesbeautifulspots'shirt\u2122.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/copyright-sign_a9.png",
    title: "Copyright Symbol",
    desc: "Circle with a C in the middle. The C stands for copyright. The creator's rights of a work are protected by law. Only he or she can decide on publication, distribution or duplication.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/registered-sign_ae.png",
    title: "Registered Logo",
    desc: "Circle with an R in the middle. The R stands for registered. The labeling may only be used for registered trademarks. Trademark law thus protects goods or services from imitators.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/wavy-dash_3030.png",
    title: "Wavy Dash",
    desc: "In Asian character sets, the wavy line has the same meaning as a hyphen in Latin-based standard languages.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/curly-loop_27b0.png",
    title: "Curly Loop",
    desc: "The \u201ccurly loop\u201c originates from Japan. Looks like an astrological symbol and is also used as a secret code. Shhh, do not tell anyone!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/double-curly-loop_27bf.png",
    title: "Double Curly Loop",
    desc: "The double \u201ccurly loop\u201c is known as a symbol for a toll-free number in Japan. Looks like the symbol of a cassette recorder or answering machine.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/negative-squared-cross-mark_274e.png",
    title: "Cross mark field",
    desc: "The checkbox allows you to select several options, be it online or on paper-based questionnaires. Would you prefer to go to the cinema or to a concert? The color green is seen as positive and can indicate approval or confirmation.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/ballot-box-with-check_2611.png",
    title: "Checkbox with check mark",
    desc: "The checkbox is marked with a tick if it applies or one agrees. I agree with the terms and conditions on the Internet or the plans for the evening. To select different options or to confirm that missing groceries have been purchased.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heavy-multiplication-x_2716.png",
    title: "Heavy Multiplication X",
    desc: "I cannot agree with that! Emoji can be used to characterize a false statement. Is often used as a symbol for the word \u201cagainst\u201d in sport.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/permanent-paper-sign_267e.png",
    title: "Infinity",
    desc: "My love for you is eternal! The lying eight is a mathematical sign for an infinite number. Can have different meanings. Symbol for vicious circle, e.g. a snake is biting its own tail. Stands for entirety in tarot cards. Means eternal bond in friendship and love.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/eye-in-speech-bubble_1f441-fe0f-200d-1f5e8-fe0f.png",
    title: "Eye in Speech Bubble",
    desc: "The eye in the speech bubble represents the anti-bullying campaign \u201cI Am A Witness\u201d, which agitates against online abuse.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/end-with-leftwards-arrow-above_1f51a.png",
    title: "END With Left Arrow Above",
    desc: "The relationship is over or \u201cThe offer ends soon!\u201c The left-pointing arrow with the word \u201cEND\u201c may also ask you to go to the end of a song, a movie, etc. It can also express an emotional state, such as \u201cI'm at the end of my tether!\u201c",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/back-with-leftwards-arrow-above_1f519.png",
    title: "BACK With Left Arrow",
    desc: "A left-pointing arrow with the word \u201cBACK\u201c underneath. Can be used literally or metaphorically. \u201cTurn around and take the other way\u201c. Start over or return to something.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/on-with-exclamation-mark-with-left-right-arrow-above_1f51b.png",
    title: "On arrow",
    desc: "An arrow pointing to the left and to the right with the word \u201cOn\u201c underneath. It's business as usual or it's time to move on. The main thing is to get started, no matter which direction, because both ways bring you closer to the goal.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/top-with-upwards-arrow-above_1f51d.png",
    title: "Top Arrow",
    desc: "That's TOP! Emoji literally and symbolically points upwards. Often thought of as an invitation to deal with the above again.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/soon-with-rightwards-arrow-above_1f51c.png",
    title: "Soon Arrow",
    desc: "I'll be right there! A sign with the word \u201csoon\u201d and an arrow. Something will be accomplished soon, or as soon as possible.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/heavy-check-mark_2714.png",
    title: "Bold Tick",
    desc: "Consider this matter ticked off! A task has been successfully completed or all preparations have been made. Everything is fine and working perfectly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/radio-button_1f518.png",
    title: "Radio Button",
    desc: "Hey, listen to the new hit! The radio button is usually applied when talking about music. Is one of the least used symbols.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/large-red-circle_1f534.png",
    title: "Large Red Circle",
    desc: "The red circle is usually applied to highlight a text message. Has no negative or positive connotation. Also used as a symbol for kickball (resembling baseball).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/large-blue-circle_1f535.png",
    title: "Blue circle",
    desc: "The circle is a symbol of the perfect. We associate the color blue with the sky or the water. Blue is one of the favorite colors worldwide and is perceived as positive.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/medium-black-circle_26ab.png",
    title: "Black Circle",
    desc: "Picture of a perfect black circle. The geometric shape can stand for a blackout or a total eclipse. The color black usually expresses negative feelings or aversions.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/medium-white-circle_26aa.png",
    title: "White Circle",
    desc: "Can stand for an engagement, because the white circle's round shape resembles a ring. Symbol for asexual or genderless (gender).",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/up-pointing-red-triangle_1f53a.png",
    title: "Red triangle pointing up",
    desc: "The A-shape of the triangle is seen as positive and stands for growth and success. The color red is associated with temperament, warmth and vitality. Directs your view or indicates something: Take a close look at my previous message!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/down-pointing-red-triangle_1f53b.png",
    title: "Red triangle pointing down",
    desc: "I'm coming down with the elevator! We associate the color red with passion but also with aggression. In China, red is the color of luck and fortune. The V-shape of the triangle with the tip pointing downwards symbolizes descent or danger.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/small-orange-diamond_1f538.png",
    title: "Small orange diamond",
    desc: "The world's largest orange diamond has 14.82 carats and was auctioned off in 2013 for a record EUR 30 million. Are known for their brilliancy and their brightness. Nitrogen is responsible for the orange coloration.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/small-blue-diamond_1f539.png",
    title: "Small Blue Diamond",
    desc: "The diamond stands for invincibility and purity. Blue diamonds are very rare and the best known is the Hope Diamond. It is allegedly cursed and brings misfortune to its owner.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-square-button_1f533.png",
    title: "White Square Key",
    desc: "The black square with the white border represents a push-button. Can also be used as a geometric shape or as a decoration.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-square-button_1f532.png",
    title: "Black square button",
    desc: "A square with straight edges and right angles expresses balance and stability. Black is the color of darkness and can be threatening as well as fascinating. The opposite of black is white, the color of brightness.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-medium-square_25fc.png",
    title: "Black Medium Square",
    desc: "I do not feel well today! The meaning of this square depends on the context. For example, is also used in connection with black outfits.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/white-medium-square_25fb.png",
    title: "White (medium-size) square",
    desc: "The square stands for symmetry and order. The color white stands for purity, cleanliness and perfection. While in western cultures brides are dressed in white, the color stands for mourning and death in eastern cultures.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/speaker_1f508.png",
    title: "Loudspeaker",
    desc: "There has just been an announcement over the speaker! Can also refer to a conversation or to music. The emoji is often associated with nightlife.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/speaker-with-cancellation-stroke_1f507.png",
    title: "Mute speaker",
    desc: "Quiet now! The volume is muted. Someone is asked to be quiet or stop talking right away. Maybe someone is at the cinema or in the library and needs to mute the telephone right now.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/speaker-with-three-sound-waves_1f50a.png",
    title: "Speaker with three sound waves",
    desc: "\u201cI cannot hear you\u201d or \u201cThat's way too loud\u201d! The volume is not optimal and should be adjusted accordingly. Icon on technical devices to increase the volume.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bell_1f514.png",
    title: "Bell",
    desc: "I will get back to you later! The golden bell symbolizes notifications on cell phones or stands for ringtones. Can also be used as a Christmas bell.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/bell-with-cancellation-stroke_1f515.png",
    title: "Bell with slash",
    desc: "The phone is muted! The crossed-out bell can be a hint. Someone is in a quiet area, e.g. a cinema or library, and needs to mute the cell phone.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/cheering-megaphone_1f4e3.png",
    title: "Megaphone",
    desc: "Let's go, team! Be it to cheer someone on at a sports event, at demonstrations or for announcements of the police or fire department. The funnel shape directs the sound, thus making spoken words understandable over long distances.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/public-address-loudspeaker_1f4e2.png",
    title: "Speaker for public announcements",
    desc: "I have an announcement to make! A loudspeaker used to make announcements in public areas, e.g. on sports fields or at events.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/speech-balloon_1f4ac.png",
    title: "Speech Balloon",
    desc: "We need to talk about it! Speech bubble smiley with three dots. Can also mean: Just a second, I'm in a conversation at the moment.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/thought-balloon_1f4ad.png",
    title: "Thought Balloon",
    desc: "In comics, the thought bubble indicates that the character is thinking. Can point to an inner dialogue, a procedure must be considered or a decision yet to be made. Represents daydreaming ...",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/right-anger-bubble_1f5ef.png",
    title: "Angry speech bubble",
    desc: "Gosh darn it, where are you? In comics, the serrated edge of the speech bubble indicates loud, furious speech. Someone is screaming, upset or arguing.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-spade-suit_2660.png",
    title: "Spade Suit",
    desc: "I still have an ace up my sleeve! Is mostly used in conjunction with poker and card games. In bridge, the spade is the most valuable symbol, in skat the second most valuable.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-club-suit_2663.png",
    title: "Clubs playing card",
    desc: "The symbol of the clubs playing card is a trifoliate cloverleaf. Refers to card games, mostly poker. Be it an invitation to a cozy round at home or a trip to a casino. The trifoliate clover also symbolizes the unity of body, mind and soul.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-heart-suit_2665.png",
    title: "Heart Suit",
    desc: "One of the four colors in the card game. Generally, the heart represents feelings and love relationships. Opportunities should be seized and risks taken.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/black-diamond-suit_2666.png",
    title: "Diamonds playing card",
    desc: "Fancy a round of poker? Diamonds is a color value on the French hand. Cards are also used for soothsaying, with diamonds being a sign of blessing and material wealth.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/playing-card-black-joker_1f0cf.png",
    title: "Joker Playing Card",
    desc: "I still have a joker up my sleeve! The Joker occurs in various games and can replace any card. Usually a court jester is pictured, hiding his face behind a mask.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/flower-playing-cards_1f3b4.png",
    title: "Japanese Flower Card",
    desc: "Japanese playing cards (Hanafuda) with floral motifs. For each month there are different cards with different values, a total of 48 cards. The full moon card is assigned to the month of August.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/no-one-under-eighteen-symbol_1f51e.png",
    title: "No One Under Eighteen",
    desc: "A warning sign with the crossed number 18. Caution! Only adults are welcome here!",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/no-pedestrians_1f6b7.png",
    title: "Pedestrians prohibited",
    desc: "I would like to be alone today! The traffic sign can be found on cycle paths or roads with heavy traffic and is used to protect pedestrians.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/no-bicycles_1f6b3.png",
    title: "Bicyclists prohibited",
    desc: "Better leave your bike behind or \u201cBicycles are not allowed in the pedestrian zone\u201d! Traffic control sign: Cyclists are not allowed to ride here.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/non-potable-water-symbol_1f6b1.png",
    title: "Non-potable water",
    desc: "Take something along to drink! Prohibition sign is intended to prevent damage to health from drinking water that is non-potable. Can be found at fountains or on campsites.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/do-not-litter-symbol_1f6af.png",
    title: "Do not litter",
    desc: "Garbage belongs in the garbage can! Sign against litter in public places such as streets or parks. Garbage must not be left lying around or carelessly thrown away, but must be disposed of correctly.",
  },
  {
    link: "https://www.emojimeanings.net/img/emojis/no-smoking-symbol_1f6ad.png",
    title: "No Smoking",
    desc: "Smoking is not allowed here or I quit smoking! In places with this sign you must not reach for a cigarette. Among other reasons, non-smoking-rules serve to protect against health impairments of present people.",
  },
];

export default emojipedia;
