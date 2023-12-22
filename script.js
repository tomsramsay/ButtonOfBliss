const quotes = [
  "Is it true? - Byron Katie",
  "You compare, you lose - Byron Katie",
  "Life is simple. Everything happens for you, not to you. Everything happens at exactly the right moment, neither too soon nor too late. You don't have to like it... it's just easier if you do. - Byron Katie",
  "As long as you think that the cause of your problem is 'out there'—as long as you think that anyone or anything is responsible for your suffering—the situation is hopeless. It means that you are forever in the role of victim, that you’re suffering in paradise. - Byron Katie",
  "A thought is harmless unless we believe it. It’s not our thoughts, but our attachment to our thoughts, that causes suffering. Attaching to a thought means believing that it’s true, without inquiring. A belief is a thought that we’ve been attaching to, often for years. - Byron Katie",
  "Don't believe every thing you think. - Byron Katie",
  "All I have is all I need and all I need is all I have in this moment. - Byron Katie",
  "How do you react when you think you need people's love? Do you become a slave for their approval? Do you live an inauthentic life because you can't bear the thought that they might disapprove of you? Do you try to figure out how they would like you to be, and then try to become that, like a chameleon? In fact, you never really get their love. You turn into someone you aren't, and then when they say 'I love you,' you can't believe it, because they're loving a facade. They're loving someone who doesn't even exist, the person you're pretending to be. It's difficult to seek other people's love. It's deadly. In seeking it, you lose what is genuine. This is the prison we create for ourselves as we seek what we already have. - Byron Katie",
  "Placing the blame or judgment on someone else leaves you powerless to change your experience; taking responsibility for your beliefs and judgments gives you the power to change them - Byron Katie",
  "Our parents, our children, our spouses, and our friends will continue to press every button we have, until we realize what it is that we don't want to know about ourselves, yet. They will point us to our freedom every time. - Byron Katie",
  "Nothing comes ahead of its time, and nothing ever happened that didn't need to happen. - Byron Katie",
  "All the advice you ever gave your partner is for you to hear - Byron Katie",
  "Peace doesn't require two people; it requires only one. It has to be you. The problem begins and ends there. - Byron Katie",
  "Seeking love keeps you from the awareness that you already have it—that you are it. - Byron Katie",
  "The miracle of love comes to you in the presence of the uninterpreted moment. If you are mentally somewhere else, you miss real life. - Byron Katie",
  "Don't be careful. You could hurt yourself. - Byron Katie",
  "When we stop opposing reality, action becomes simple, fluid, kind, and fearless. - Byron Katie",
  "When you argue with reality, you lose, but only 100% of the time. - Byron Katie",
  "It is easy to be swept away by some overwhelming feeling, so it’s helpful to remember that any stressful feeling is like a compassionate alarm clock that says, “You’re caught in the dream.” Depression, pain, and fear are gifts that say, “Sweetheart, take a look at your thinking right now. You’re living in a story that isn’t true for you. - Byron Katie",
  "In my experience, we don't make thoughts appear, they just appear. One day, I noticed that their appearance just wasn't personal. Noticing that really makes it simpler to inquire. - Byron Katie",
  "Isn’t it marvelous to discover that you’re the one you’ve been waiting for? That you are your own freedom? - Byron Katie",
  "Life is so simple: We walk; we sit; we lie horizontal. That's about it. Everything else is a story about what's going on while we're doing it. - Byron Katie",
  "The world is your perception of it. Inside and outside always match - they're reflections of each other. The world is a mirror image of your mind. - Byron Katie",
  "God, spare me from the desire for love, approval, or appreciation. Amen. - Byron Katie",
  "Thoughts are like the breeze or the leaves on the trees or the raindrops falling. They appear like that, and through inquiry, we can make friends with them. Would you argue with a raindrop? Raindrops aren’t personal, and neither are thoughts. Once a painful concept is met with understanding, the next time it appears you may find it interesting. What used to be the nightmare is now just interesting. The next time it appears, you may find it funny. The next time, you may not even notice it. This is the power of loving what is. - Byron Katie",
  "Everyone is doing his job. No one is more valuable than another. The things in the world that we think are so terrible are actually great teachers. There’s no mistake, and there’s nothing lacking. We’re always going to get what we need, not what we think we need. Then we come to see that what we need is not only what we have, it’s what we want. Then we come to want only what is. That way we always succeed, whatever happens. - Byron Katie",
  "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it. - Rumi",
  "Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about. - Rumi",
  "The wound is the place where the Light enters you. - Rumi",
  "Stop acting so small. You are the universe in ecstatic motion. - Rumi",
  "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. - Rumi",
  "What you seek is seeking you. - Rumi",
  "Don’t grieve. Anything you lose comes round in another form. - Rumi",
  "The minute I heard my first love story, I started looking for you, not knowing how blind that was. Lovers don't finally meet somewhere. They're in each other all along. - Rumi",
  "Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood. Dance when you're perfectly free. - Rumi",
  "Don't be satisfied with stories, how things have gone with others. Unfold your own myth. - Rumi",
  "When you do things from your soul, you feel a river moving in you, a joy. - Rumi",
  "Forget safety. Live where you fear to live. Destroy your reputation. Be notorious. - Rumi",
  "Silence is the language of God, all else is poor translation. - Rumi",
  "Sell your cleverness and buy bewilderment. - Rumi",
  "Where there is ruin, there is hope for a treasure. - Rumi",
  "Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation. - Rumi",
  "Be empty of worrying. Think of who created thought! Why do you stay in prison When the door is so wide open? - Rumi",
  "Sorrow prepares you for joy. It violently sweeps everything out of your house, so that new joy can find space to enter. It shakes the yellow leaves from the bough of your heart, so that fresh, green leaves can grow in their place. It pulls up the rotten roots, so that new roots hidden beneath have room to grow. Whatever sorrow shakes from your heart, far better things will take their place. - Rumi",
  "Let the beauty we love be what we do. There are hundreds of ways to kneel and kiss the ground. - Rumi",
  "Come, come, whoever you are. Wanderer, worshiper, lover of leaving. It doesn't matter. Ours is not a caravan of despair. come, even if you have broken your vows a thousand times. Come, yet again, come, come. - Rumi",
  "Be melting snow. Wash yourself of yourself. - Rumi",
  "You have to keep breaking your heart until it opens. - Rumi",
  "Step into the fire of self-discovery. This fire will not burn you, it will only burn what you are not. - Mooji",
  "Dying to your own attachments is a beautiful death. Because this death release you into real life. You have to die as a seed to live as a tree. - Mooji",
  "If you make human company too important you will not discover your true Self. Relationships not based in truth are never entirely reliable and are rarely enduring. Taking time to discover yourself is the best use of time. Prioritize this. One should not excessively seek partners or friends, one should seek to know and be oneself. As you begin to awaken to the Truth, you start noticing how well life flows by itself and how well you are cared for. Life supports the physical, emotional, mental and spiritual needs of the one who is open to self-discovery. Trust opens your eyes to the recognition of this. Surrender allows you to merge in your own eternal being. - Mooji",
  "Surrender is not a weakness it is strength. It takes tremendous strength to surrender life to the supreme - to the cosmic unfolding. - Mooji",
  "I don’t have to be anything at all. I don’t even have to be myself, because there is no such thing as not being myself. I am inescapably myself. - Mooji",
  "Don’t be a storehouse of memories. Leave past, future and even present thoughts behind. Be a witness to life unfolding by itself. Be free of all attachments, fears and concerns by keeping your mind inside your own heart. Rest in being. Like this, your life is always fresh and imbued with pure joy and timeless presence. Be happy, wise and free. - Mooji",
  "Never assume that you have attained truth. Don't make any claim to knowledge. Form no conclusion or evaluation concerning truth. The minute you do, your downfall is assured. Whenever you imagine you know something, you cease being open to the living exploration. You have closed a door and cut off the oxygen to the breathing truth. - Mooji",
  "Don't worry about anything at all. You are not here by accident. This form is just a costume for a while. But the one who is behind the costume, this one is eternal. You must know this. If you know this and trust this, you don't have to worry about anything. This world is so full of love. And your heart, your being, is so full of love, so full of peace. You don't have to go to some place else to find peace. It is right where you are. - Mooji",
  "Once you begin to recognise the divine gifts in life, you come to see that there are so many. Your life is abundant. - Mooji",
  "We are never without grace. We can never be abandoned, it is always there. God can never abandon mankind. From just one candle, you can light a million candles without putting strain on the first candle. From one awakened being, you can set light into a million souls, so powerful is the light. If you go into a room full of light, but outside is darkness, and you open the curtain, that darkness won't come in. But if you go into a room which is dark and you open up a little tiny bit of a curtain, it will fill the whole room with light. Such is the power of the light. We are this light and we must discover this... - Mooji",
  "Realizing that nothing has to be ‘swept under the rug,’ that everything can be faced and honestly looked at without running, hiding, or pretending - inside and outside of us - is the act of stepping into a friendly universe - Tom Compton",
  "Notice your presence - your beingness - when you’re open to complete helplessness - Tom Compton",
  "The world is full of magic things, patiently waiting for our senses to grow sharper. - W. B. Yeats",
  "When you are old and grey and full of sleep, And nodding by the fire, take down this book, And slowly read, and dream of the soft look Your eyes had once, and of their shadows deep; How many loved your moments of glad grace, And loved your beauty with love false or true, But one man loved the pilgrim soul in you, And loved the sorrows of your changing face; And bending down beside the glowing bars, Murmur, a little sadly, how Love fled And paced upon the mountains overhead And hid his face amid a crowd of stars. - W. B. Yeats",
  "I will arise and go now, and go to Innisfree, And a small cabin build there, of clay and wattles made; Nine bean-rows will I have there, a hive for the honey-bee, And live alone in the bee-loud glade. And I shall have some peace there, for peace comes dropping slow, Dropping from the veils of the morning to where the cricket sings; There midnight’s all a glimmer, and noon a purple glow, And evening full of the linnet’s wings. I will arise and go now, for always night and day I hear lake water lapping with low sounds by the shore; While I stand on the roadway, or on the pavements grey, I hear it in the deep heart’s core. - W. B. Yeats",
  "We can make our minds so like still water that beings gather about us that they may see, it may be, their own images, and so live for a moment with a clearer, perhaps even with a fiercer life because of our quiet. - W. B. Yeats",
  "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another. - Carl Sagan",
  "Science is not only compatible with spirituality; it is a profound source of spirituality. - Carl Sagan",
  "For small creatures such as we the vastness is bearable only through love. - Carl Sagan",
  "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself. - Carl Sagan",
  "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every 'superstar,' every 'supreme leader, every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam. - Carl Sagan",
 "Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge. - Eckhart Tolle",
  "The primary cause of unhappiness is never the situation but your thoughts about it. - Eckhart Tolle",
  "Life will give you whatever experience is most helpful for the evolution of your consciousness. How do you know this is the experience you need? Because this is the experience you are having at the moment. - Eckhart Tolle",
  "Time isn’t precious at all, because it is an illusion. What you perceive as precious is not time but the one point that is out of time: the Now. That is precious indeed. The more you are focused on time—past and future—the more you miss the Now, the most precious thing there is. - Eckhart Tolle",
  "Life isn't as serious as the mind makes it out to be. - Eckhart Tolle",
  "I have lived with several Zen masters -- all of them cats. - Eckhart Tolle",
  "Life is the dancer and you are the dance. - Eckhart Tolle",
  "Anything that you resent and strongly react to in another is also in you. - Eckhart Tolle",
  "Whatever you fight, you strengthen, and what you resist, persists. - Eckhart Tolle",
  "Death is a stripping away of all that is not you. The secret of life is to 'die before you die' --- and find that there is no death. - Eckhart Tolle",
  "All negativity is caused by an accumulation of psychological time and denial of the present. Unease, anxiety, tension, stress, worry - all forms of fear - are caused by too much future, and not enough presence. Guilt, regret, resentment, grievances, sadness, bitterness, and all forms of nonforgiveness are caused by too much past, and not enough presence. - Eckhart Tolle",
  "Worry pretends to be necessary but serves no useful purpose. - Eckhart Tolle",
  "Always say 'yes' to the present moment. What could be more futile, more insane, than to create inner resistance to what already is? What could be more insane than to oppose life itself, which is now and always now? Surrender to what is. Say 'yes' to life — and see how life suddenly starts working for you rather than against you. - Eckhart Tolle",
  "This, too, will pass. - Eckhart Tolle",
  "When you don't cover up the world with words and labels, a sense of the miraculous returns to your life that was lost a long time ago when humanity, instead of using thought, became possessed by thought. - Eckhart Tolle",
  "Being must be felt. It can't be thought. - Eckhart Tolle",
  "To recognize one's own insanity is, of course, the arising of sanity, the beginning of healing and transcendence. - Eckhart Tolle",

];



function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.textContent = quotes[randomIndex];
}
