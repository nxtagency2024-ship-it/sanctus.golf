// ===============================
// Sanctus Golf
// Premium Interactions
// ===============================

// ===============================
// Hamburger Menu
// ===============================

const sgDevotionals = [
      { day: 1, verse: "Now faith is the substance of things hoped for, the evidence of things not seen.", reference: "Hebrews 11:1", golf: "You can't see the ball land in the cup from 150 yards out — you trust your swing and commit." },
      { day: 2, verse: "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.", reference: "Hebrews 11:6", golf: "Diligent practice, done in faith, is rewarded — on the range and in life." },
      { day: 3, verse: "Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.", reference: "Mark 11:24", golf: "Stand over the putt already believing it will drop." },
      { day: 4, verse: "...if ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.", reference: "Matthew 17:20", golf: "A small seed of belief can move a big obstacle — even a 200-yard carry over water." },
      { day: 5, verse: "So then faith cometh by hearing, and hearing by the word of God.", reference: "Romans 10:17", golf: "Faith in your swing grows the same way skill does — through repetition and instruction." },
      { day: 6, verse: "For we walk by faith, not by sight.", reference: "2 Corinthians 5:7", golf: "Trust your yardage and your gut, not just what your eyes tell you about a tricky lie." },
      { day: 7, verse: "But let him ask in faith, nothing wavering. For he that wavereth is like a wave of the sea driven with the wind and tossed.", reference: "James 1:6", golf: "A wavering decision over the ball — changing clubs mid-swing-thought — produces a wavering shot." },
      { day: 8, verse: "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.", reference: "Psalm 37:5", golf: "Commit to the shot shape you picked and trust the process." },
      { day: 9, verse: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", reference: "Proverbs 3:5-6", golf: "Overthinking a shot ruins it — trust your preparation more than your nerves." },
      { day: 10, verse: "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.", reference: "Isaiah 26:3", golf: "A calm mind over the ball is a steady swing." },
      { day: 11, verse: "God is our refuge and strength, a very present help in trouble.", reference: "Psalm 46:1", golf: "When you're in the rough, help and calm are still available." },
      { day: 12, verse: "The LORD is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1", golf: "Fear of a bad shot is often worse than the shot itself." },
      { day: 13, verse: "Have not I commanded thee? Be strong and of a good courage, be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", reference: "Joshua 1:9", golf: "Courage on 18 with the match on the line." },
      { day: 14, verse: "I can do all things through Christ which strengtheneth me.", reference: "Philippians 4:13", golf: "The strength for the last hole is the same strength for the first." },
      { day: 15, verse: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.", reference: "Philippians 4:6-7", golf: "Anxiety over a shot is best released, not gripped." },
      { day: 16, verse: "Casting all your care upon him; for he careth for you.", reference: "1 Peter 5:7", golf: "Let go of the last bad hole before you tee up the next one." },
      { day: 17, verse: "What time I am afraid, I will trust in thee.", reference: "Psalm 56:3", golf: "Nerves on the first tee are normal — trust is the answer to fear, not its absence." },
      { day: 18, verse: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.", reference: "Isaiah 41:10", golf: "Even the toughest pin position isn't played alone." },
      { day: 19, verse: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", reference: "2 Timothy 1:7", golf: "A sound mind clubs correctly; fear clubs short." },
      { day: 20, verse: "And we know that all things work together for good to them that love God, to them that are called according to his purpose.", reference: "Romans 8:28", golf: "Even a bad bounce can set up the best up-and-down of the round." },
      { day: 21, verse: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", reference: "Jeremiah 29:11", golf: "Trust the long game — a bad front nine doesn't define the round." },
      { day: 22, verse: "And they that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee.", reference: "Psalm 9:10", golf: "Confidence built over time doesn't abandon you under pressure." },
      { day: 23, verse: "It is better to trust in the LORD than to put confidence in man.", reference: "Psalm 118:8", golf: "Trust your own preparation more than the crowd's opinion of your chances." },
      { day: 24, verse: "Some trust in chariots, and some in horses: but we will remember the name of the LORD our God.", reference: "Psalm 20:7", golf: "Some trust in the newest driver; trust your fundamentals first." },
      { day: 25, verse: "...the just shall live by his faith.", reference: "Habakkuk 2:4", golf: "A round is lived shot by shot, in trust, not in anxiety about the scorecard." },
      { day: 26, verse: "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.", reference: "Romans 1:17", golf: "Faith isn't a single swing thought — it compounds round after round." },
      { day: 27, verse: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me...", reference: "Galatians 2:20", golf: "Let go of the ego swing and play the shot the course gives you." },
      { day: 28, verse: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.", reference: "Ephesians 2:8", golf: "A good round is often a gift of favorable bounces as much as skill." },
      { day: 29, verse: "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.", reference: "1 John 5:4", golf: "Overcoming a tough course starts with belief before the first tee shot." },
      { day: 30, verse: "Let not your heart be troubled: ye believe in God, believe also in me.", reference: "John 14:1", golf: "Don't let a troubled heart follow you from the last hole to this one." },
      { day: 31, verse: "...blessed are they that have not seen, and yet have believed.", reference: "John 20:29", golf: "You haven't seen the putt drop yet — believe it will before you stroke it." },
      { day: 32, verse: "...If thou canst believe, all things are possible to him that believeth.", reference: "Mark 9:23", golf: "The par-5 in two is possible for the golfer who believes it first." },
      { day: 33, verse: "For with God nothing shall be impossible.", reference: "Luke 1:37", golf: "The impossible up-and-down has been made before." },
      { day: 34, verse: "...with men this is impossible; but with God all things are possible.", reference: "Matthew 19:26", golf: "Some shots look impossible from the fairway — until they're not." },
      { day: 35, verse: "And he believed in the LORD; and he counted it to him for righteousness.", reference: "Genesis 15:6", golf: "Belief itself has value, even before the result is known." },
      { day: 36, verse: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.", reference: "Psalm 91:1-2", golf: "A quiet, settled mind before the shot is a kind of shelter." },
      { day: 37, verse: "O taste and see that the LORD is good: blessed is the man that trusteth in him.", reference: "Psalm 34:8", golf: "Enjoy the game itself, not just the score." },
      { day: 38, verse: "Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us.", reference: "Psalm 62:8", golf: "Trust doesn't pause on the back nine when you're tired." },
      { day: 39, verse: "Commit thy works unto the LORD, and thy thoughts shall be established.", reference: "Proverbs 16:3", golf: "Commit fully to a swing thought and let the rest follow." },
      { day: 40, verse: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary...", reference: "Isaiah 40:31", golf: "Patience through a slow start renews energy for a strong finish." },
      { day: 41, verse: "When thou passest through the waters, I will be with thee... when thou walkest through the fire, thou shalt not be burned...", reference: "Isaiah 43:2", golf: "Water hazards and bunkers don't have to define the round." },
      { day: 42, verse: "The LORD is good, a strong hold in the day of trouble: and he knoweth them that trust in him.", reference: "Nahum 1:7", golf: "A tough lie in the rough is still a day you can trust your preparation." },
      { day: 43, verse: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.", reference: "Psalm 121:1-2", golf: "Look up from the ball to the horizon before you commit to the shot." },
      { day: 44, verse: "Cause me to hear thy lovingkindness in the morning; for in thee do I trust: cause me to know the way wherein I should walk.", reference: "Psalm 143:8", golf: "An early tee time is a fresh chance to walk the course well." },
      { day: 45, verse: "...Be not afraid nor dismayed by reason of this great multitude; for the battle is not yours, but God's.", reference: "2 Chronicles 20:15", golf: "The gallery's expectations aren't yours to carry." },
      { day: 46, verse: "Ye shall not need to fight in this battle: set yourselves, stand ye still, and see the salvation of the LORD...", reference: "2 Chronicles 20:17", golf: "Sometimes the best move is to set up, stay still, and let the swing happen." },
      { day: 47, verse: "...the battle is the LORD's...", reference: "1 Samuel 17:47", golf: "A single round isn't a verdict on your worth as a player or person." },
      { day: 48, verse: "The LORD shall fight for you, and ye shall hold your peace.", reference: "Exodus 14:14", golf: "Overworking a swing thought mid-round can undo good preparation." },
      { day: 49, verse: "Be strong and of a good courage, fear not, nor be afraid of them... the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.", reference: "Deuteronomy 31:6", golf: "Courage doesn't require the absence of nerves." },
      { day: 50, verse: "And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed.", reference: "Deuteronomy 31:8", golf: "You've prepared for this moment — trust the work already done." },
      { day: 51, verse: "I laid me down and slept; I awaked; for the LORD sustained me.", reference: "Psalm 3:5", golf: "Rest before a big round matters as much as the range session." },
      { day: 52, verse: "I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.", reference: "Psalm 4:8", golf: "Peace the night before a tournament round steadies the hands the next day." },
      { day: 53, verse: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me...", reference: "Psalm 23:4", golf: "Even a disaster hole doesn't have to shake your composure for the rest of the round." },
      { day: 54, verse: "Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD.", reference: "Psalm 27:14", golf: "Waiting for a green to clear, or for your turn to hit, is its own discipline of patience." },
      { day: 55, verse: "Be of good courage, and he shall strengthen your heart, all ye that hope in the LORD.", reference: "Psalm 31:24", golf: "Courage strengthens under pressure, it isn't only present before it." },
      { day: 56, verse: "Behold, the eye of the LORD is upon them that fear him, upon them that hope in his mercy.", reference: "Psalm 33:18", golf: "Play as though every shot matters, because it does." },
      { day: 57, verse: "I sought the LORD, and he heard me, and delivered me from all my fears.", reference: "Psalm 34:4", golf: "Naming your nerves out loud can loosen their grip on your swing." },
      { day: 58, verse: "Trust in the LORD, and do good; so shalt thou dwell in the land, and verily thou shalt be fed.", reference: "Psalm 37:3", golf: "Play the course honestly and the results tend to follow." },
      { day: 59, verse: "Blessed is that man that maketh the LORD his trust...", reference: "Psalm 40:4", golf: "Trusting your training over your temper is a daily choice." },
      { day: 60, verse: "My soul, wait thou only upon God; for my expectation is from him.", reference: "Psalm 62:5", golf: "Expectation of a good outcome is healthier than demanding one." },
      { day: 61, verse: "For thou art my hope, O Lord GOD: thou art my trust from my youth.", reference: "Psalm 71:5", golf: "The habits you build early in the game carry you for a lifetime." },
      { day: 62, verse: "O LORD of hosts, blessed is the man that trusteth in thee.", reference: "Psalm 84:12", golf: "Trust brings its own kind of blessing, win or lose." },
      { day: 63, verse: "He shall not be afraid of evil tidings: his heart is fixed, trusting in the LORD.", reference: "Psalm 112:7", golf: "A bad scorecard update from a playing partner shouldn't rattle your next shot." },
      { day: 64, verse: "They that trust in the LORD shall be as mount Zion, which cannot be removed, but abideth for ever.", reference: "Psalm 125:1", golf: "A settled mind is an unmovable one, even in wind." },
      { day: 65, verse: "The fear of man bringeth a snare: but whoso putteth his trust in the LORD shall be safe.", reference: "Proverbs 29:25", golf: "Playing to impress the gallery is a trap; playing your own game is safety." },
      { day: 66, verse: "Behold, God is my salvation; I will trust, and not be afraid...", reference: "Isaiah 12:2", golf: "Trust and fear can't occupy the same swing." },
      { day: 67, verse: "...In returning and rest shall ye be saved; in quietness and in confidence shall be your strength.", reference: "Isaiah 30:15", golf: "Quietness before the swing is strength, not weakness." },
      { day: 68, verse: "...let him trust in the name of the LORD, and stay upon his God.", reference: "Isaiah 50:10", golf: "On a dark scorecard day, lean on what you know is true about your game." },
      { day: 69, verse: "It is of the LORD's mercies that we are not consumed... they are new every morning: great is thy faithfulness.", reference: "Lamentations 3:22-23", golf: "Every new hole is a fresh mercy, whatever happened on the last one." },
      { day: 70, verse: "Therefore I will look unto the LORD; I will wait for the God of my salvation: my God will hear me.", reference: "Micah 7:7", golf: "Keep looking ahead to the next shot, not backward at the last one." },
      { day: 71, verse: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy...", reference: "Zephaniah 3:17", golf: "Play with joy, not just grim determination." },
      { day: 72, verse: "...he that believeth on me shall never thirst.", reference: "John 6:35", golf: "Chasing the next great shot forever leaves you thirsty; contentment in the process satisfies." },
      { day: 73, verse: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", reference: "Romans 15:13", golf: "Hope for the back nine even after a rough front nine." },
      { day: 74, verse: "He that walketh uprightly walketh surely: but he that perverteth his ways shall be known.", reference: "Proverbs 10:9", golf: "Call the penalty on yourself even when no one is watching." },
      { day: 75, verse: "The integrity of the upright shall guide them: but the perverseness of transgressors shall destroy them.", reference: "Proverbs 11:3", golf: "Honest scoring guides a golfer's whole career; cheating quietly ruins it." },
      { day: 76, verse: "The just man walketh in his integrity: his children are blessed after him.", reference: "Proverbs 20:7", golf: "How you play when unwatched teaches your kids more than any lesson." },
      { day: 77, verse: "God forbid that I should justify you: till I die I will not remove mine integrity from me.", reference: "Job 27:5", golf: "Keep your standards the same on hole 1 and hole 18." },
      { day: 78, verse: "LORD, who shall abide in thy tabernacle?... He that walketh uprightly, and worketh righteousness, and speaketh the truth in his heart.", reference: "Psalm 15:1-2", golf: "Truth in your heart about your lie and your lie count." },
      { day: 79, verse: "Let integrity and uprightness preserve me; for I wait on thee.", reference: "Psalm 25:21", golf: "Integrity protects your reputation long after the round ends." },
      { day: 80, verse: "Judge me, O LORD; for I have walked in mine integrity...", reference: "Psalm 26:1", golf: "You know your true score even if no one else does." },
      { day: 81, verse: "And as for me, thou upholdest me in mine integrity, and settest me before thy face for ever.", reference: "Psalm 41:12", golf: "An honest round is worth more than a low one earned by a fudged number." },
      { day: 82, verse: "...no good thing will he withhold from them that walk uprightly.", reference: "Psalm 84:11", golf: "Playing it straight rarely costs you what it seems to." },
      { day: 83, verse: "I will behave myself wisely in a perfect way... I will walk within my house with a perfect heart.", reference: "Psalm 101:2", golf: "How you act in the clubhouse matters as much as on the course." },
      { day: 84, verse: "Put away from thee a froward mouth, and perverse lips put far from thee. Let thine eyes look right on...", reference: "Proverbs 4:24-25", golf: "Watch your words after a bad shot — a club thrown or a curse muttered says more than the score." },
      { day: 85, verse: "A false balance is abomination to the LORD: but a just weight is his delight.", reference: "Proverbs 11:1", golf: "An honest scorecard is its own kind of just weight." },
      { day: 86, verse: "Lying lips are abomination to the LORD: but they that deal truly are his delight.", reference: "Proverbs 12:22", golf: "\"I found it in bounds\" should always be true." },
      { day: 87, verse: "Righteousness keepeth him that is upright in the way: but wickedness overthroweth the sinner.", reference: "Proverbs 13:6", golf: "Playing by the rules protects you from the slow erosion of small cheats." },
      { day: 88, verse: "A just weight and balance are the LORD's: all the weights of the bag are his work.", reference: "Proverbs 16:11", golf: "Even the small things — a correctly dropped ball — matter." },
      { day: 89, verse: "To do justice and judgment is more acceptable to the LORD than sacrifice.", reference: "Proverbs 21:3", golf: "A fair ruling on yourself matters more than a good number on the card." },
      { day: 90, verse: "A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.", reference: "Proverbs 22:1", golf: "A reputation for fair play outlasts any trophy." },
      { day: 91, verse: "For there is not a just man upon earth, that doeth good, and sinneth not.", reference: "Ecclesiastes 7:20", golf: "Nobody plays a perfect round — grace for your own mistakes is part of integrity too." },
      { day: 92, verse: "...what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", reference: "Micah 6:8", golf: "Justice, mercy, and humility fit on a scorecard as much as anywhere." },
      { day: 93, verse: "These are the things that ye shall do; Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates.", reference: "Zechariah 8:16", golf: "Tell your playing partners the truth about your lie, your strokes, your ruling." },
      { day: 94, verse: "But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.", reference: "Matthew 5:37", golf: "A simple, honest \"that moved\" or \"that didn't\" beats a self-serving explanation." },
      { day: 95, verse: "He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much.", reference: "Luke 16:10", golf: "How you mark a two-inch putt reveals how you'd handle a two-stroke penalty." },
      { day: 96, verse: "If therefore ye have not been faithful in the unrighteous mammon, who will commit to your trust the true riches?", reference: "Luke 16:11-12", golf: "Small honesty in a casual round builds the trust for bigger stakes later." },
      { day: 97, verse: "And ye shall know the truth, and the truth shall make you free.", reference: "John 8:32", golf: "An honest handicap frees you from playing a lie to yourself." },
      { day: 98, verse: "Recompense to no man evil for evil. Provide things honest in the sight of all men.", reference: "Romans 12:17", golf: "Don't retaliate against a rival's gamesmanship with your own." },
      { day: 99, verse: "Providing for honest things, not only in the sight of the Lord, but also in the sight of men.", reference: "2 Corinthians 8:21", golf: "Play so that both your conscience and your playing partners can vouch for you." },
      { day: 100, verse: "Wherefore putting away lying, speak every man truth with his neighbour: for we are members one of another.", reference: "Ephesians 4:25", golf: "Your foursome depends on each other's honesty to make the round fair." },
      { day: 101, verse: "...whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure... think on these things.", reference: "Philippians 4:8", golf: "Fill your pre-shot thoughts with what's true and clean, not shortcuts." },
      { day: 102, verse: "Lie not one to another, seeing that ye have put off the old man with his deeds.", reference: "Colossians 3:9", golf: "An improved lie in the rough, unreported, is still a lie." },
      { day: 103, verse: "That ye may walk honestly toward them that are without, and that ye may have lack of nothing.", reference: "1 Thessalonians 4:12", golf: "Playing honestly earns respect even from strangers in your group." },
      { day: 104, verse: "Holding faith, and a good conscience; which some having put away concerning faith have made shipwreck.", reference: "1 Timothy 1:19", golf: "A guilty conscience over a fudged score can wreck your enjoyment of the whole game." },
      { day: 105, verse: "In all things shewing thyself a pattern of good works: in doctrine shewing uncorruptness...", reference: "Titus 2:7", golf: "Be the playing partner others want to be paired with for the right reasons." },
      { day: 106, verse: "Pray for us: for we trust we have a good conscience, in all things willing to live honestly.", reference: "Hebrews 13:18", golf: "A clean conscience after the round is worth more than a clean scorecard achieved by cheating." },
      { day: 107, verse: "...let your yea be yea; and your nay, nay; lest ye fall into condemnation.", reference: "James 5:12", golf: "Say what happened plainly — \"it was out of bounds,\" full stop." },
      { day: 108, verse: "Having your conversation honest among the Gentiles... they may by your good works... glorify God.", reference: "1 Peter 2:12", golf: "Your behavior on the course is a kind of testimony, whether you intend it or not." },
      { day: 109, verse: "Having a good conscience; that... they may be ashamed that falsely accuse your good conversation in Christ.", reference: "1 Peter 3:16", golf: "Play so that even a skeptic can't accuse you of cutting corners." },
      { day: 110, verse: "Every man shall kiss his lips that giveth a right answer.", reference: "Proverbs 24:26", golf: "A straight answer about your score earns real respect." },
      { day: 111, verse: "Better is the poor that walketh in his uprightness, than he that is perverse in his ways, though he be rich.", reference: "Proverbs 28:6", golf: "A high honest score beats a low dishonest one." },
      { day: 112, verse: "Whoso walketh uprightly shall be saved: but he that is perverse in his ways shall fall at once.", reference: "Proverbs 28:18", golf: "Cutting corners on the rules eventually catches up with you." },
      { day: 113, verse: "...he still holdeth fast his integrity, although thou movedst me against him...", reference: "Job 2:3", golf: "Hold your standards even when a bad break tempts you to cut a corner." },
      { day: 114, verse: "Let me be weighed in an even balance, that God may know mine integrity.", reference: "Job 31:6", golf: "Ask to be judged by the honest weight of your play, not a favorable rounding." },
      { day: 115, verse: "And if thou wilt walk before me, as David thy father walked, in integrity of heart, and in uprightness...", reference: "1 Kings 9:4", golf: "Consistency of character matters more than a single great round." },
      { day: 116, verse: "I know also, my God, that thou triest the heart, and hast pleasure in uprightness...", reference: "1 Chronicles 29:17", golf: "The heart behind the scorecard is seen even when the card looks clean." },
      { day: 117, verse: "...for he was a faithful man, and feared God above many.", reference: "Nehemiah 7:2", golf: "Be known as the golfer whose word about a ruling can be trusted." },
      { day: 118, verse: "...judge me, O LORD, according to my righteousness, and according to mine integrity that is in me.", reference: "Psalm 7:8", golf: "Ask to be measured by your true effort, not your best excuse." },
      { day: 119, verse: "The LORD rewarded me according to my righteousness; according to the cleanness of my hands hath he recompensed me.", reference: "Psalm 18:20", golf: "Clean hands — no moved ball, no forgotten stroke — bring their own peace." },
      { day: 120, verse: "He that hath clean hands, and a pure heart... shall receive the blessing from the LORD.", reference: "Psalm 24:4", golf: "A pure approach to the game outlasts a single good scorecard." },
      { day: 121, verse: "So he fed them according to the integrity of his heart; and guided them by the skilfulness of his hands.", reference: "Psalm 78:72", golf: "Skill and honest character work together, not against each other." },
      { day: 122, verse: "Blessed are the undefiled in the way, who walk in the law of the LORD.", reference: "Psalm 119:1", golf: "Playing strictly by the rules of golf is its own kind of blessing." },
      { day: 123, verse: "He layeth up sound wisdom for the righteous: he is a buckler to them that walk uprightly.", reference: "Proverbs 2:7", golf: "Wisdom protects the golfer who plays it straight, round after round." },
      { day: 124, verse: "...but his secret is with the righteous.", reference: "Proverbs 3:32", golf: "There's a quiet trust extended to those known for fair play." },
      { day: 125, verse: "The way of the LORD is strength to the upright...", reference: "Proverbs 10:29", golf: "Integrity is strength, not weakness, under pressure." },
      { day: 126, verse: "The lip of truth shall be established for ever: but a lying tongue is but for a moment.", reference: "Proverbs 12:19", golf: "A true account of your round holds up; a fudged one doesn't survive scrutiny." },
      { day: 127, verse: "He that walketh in his uprightness feareth the LORD: but he that is perverse in his ways despiseth him.", reference: "Proverbs 14:2", golf: "Reverence for the game shows in how carefully you follow its rules." },
      { day: 128, verse: "The eyes of the LORD are in every place, beholding the evil and the good.", reference: "Proverbs 15:3", golf: "Nobody is really playing \"unwatched.\"" },
      { day: 129, verse: "Better is a little with righteousness than great revenues without right.", reference: "Proverbs 16:8", golf: "A modest, honest score beats an inflated one earned by ignoring the rules." },
      { day: 130, verse: "Better is the poor that walketh in his integrity, than he that is perverse in his lips...", reference: "Proverbs 19:1", golf: "A high score played straight is worth more than a low one talked around." },
      { day: 131, verse: "Even a child is known by his doings, whether his work be pure, and whether it be right.", reference: "Proverbs 20:11", golf: "Junior golfers learn the game's honor code by watching adults play it." },
      { day: 132, verse: "A wicked man hardeneth his face: but as for the upright, he directeth his way.", reference: "Proverbs 21:29", golf: "Own your bad shots openly rather than putting on a hard face about them." },
      { day: 133, verse: "He that walketh righteously... he shall dwell on high: his place of defence shall be the munitions of rocks...", reference: "Isaiah 33:15-16", golf: "A well-earned reputation is a kind of defense in itself." },
      { day: 134, verse: "...hath walked in my statutes, and hath kept my judgments, to deal truly; he is just, he shall surely live...", reference: "Ezekiel 18:9", golf: "Truthful dealing in every ruling is the mark of a just player." },
      { day: 135, verse: "But let judgment run down as waters, and righteousness as a mighty stream.", reference: "Amos 5:24", golf: "Let fairness flow through every call you make on yourself." },
      { day: 136, verse: "Take heed that ye do not your alms before men, to be seen of them...", reference: "Matthew 6:1", golf: "Play honestly for its own sake, not for the audience's approval." },
      { day: 137, verse: "Therefore all things whatsoever ye would that men should do to you, do ye even so to them...", reference: "Matthew 7:12", golf: "Give a competitor the same benefit of the rules you'd want for yourself." },
      { day: 138, verse: "...ye have omitted the weightier matters of the law, judgment, mercy, and faith...", reference: "Matthew 23:23", golf: "Don't let a technical win overshadow fair and merciful play." },
      { day: 139, verse: "...thou teachest the way of God in truth...", reference: "Mark 12:14", golf: "Teach the next generation the true way to play, not the shortcuts." },
      { day: 140, verse: "...Behold an Israelite indeed, in whom is no guile!", reference: "John 1:47", golf: "Be the player others describe as having no guile in their game." },
      { day: 141, verse: "And herein do I exercise myself, to have always a conscience void of offence toward God, and toward men.", reference: "Acts 24:16", golf: "Train your conscience the same way you train your swing." },
      { day: 142, verse: "Which shew the work of the law written in their hearts, their conscience also bearing witness...", reference: "Romans 2:15", golf: "Your conscience knows the true lie of the ball even before a ruling is called." },
      { day: 143, verse: "Let us walk honestly, as in the day...", reference: "Romans 13:13", golf: "Play as if every hole is in full daylight, because to your own conscience, it is." },
      { day: 144, verse: "But have renounced the hidden things of dishonesty, not walking in craftiness, nor handling the word of God deceitfully...", reference: "2 Corinthians 4:2", golf: "No hidden improved lies, no craftiness with the rules." },
      { day: 145, verse: "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.", reference: "Galatians 6:7", golf: "A habit of small cheats eventually produces a harvest you don't want." },
      { day: 146, verse: "In hope of eternal life, which God, that cannot lie, promised before the world began.", reference: "Titus 1:2", golf: "Truthfulness is a character trait modeled after something unshakable." },
      { day: 147, verse: "Know ye not that they which run in a race run all, but one receiveth the prize? So run, that ye may obtain.", reference: "1 Corinthians 9:24", golf: "Practice with the same purpose as someone running to win, not just to finish." },
      { day: 148, verse: "And every man that striveth for the mastery is temperate in all things... they do it to obtain a corruptible crown; but we an incorruptible.", reference: "1 Corinthians 9:25", golf: "The discipline of diet, rest, and practice all serve the swing you want on Sunday." },
      { day: 149, verse: "But I keep under my body, and bring it into subjection: lest that by any means... I myself should be a castaway.", reference: "1 Corinthians 9:27", golf: "Discipline the habits — tempo, routine, temper — before they undermine you." },
      { day: 150, verse: "And if a man also strive for masteries, yet is he not crowned, except he strive lawfully.", reference: "2 Timothy 2:5", golf: "Winning within the rules is the only win that counts." },
      { day: 151, verse: "...let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us.", reference: "Hebrews 12:1", golf: "Lay aside distractions before the round — a clear mind runs the course better." },
      { day: 152, verse: "Now no chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness...", reference: "Hebrews 12:11", golf: "Hours on the range don't feel fun in the moment, but they pay off on the course." },
      { day: 153, verse: "Whoso loveth instruction loveth knowledge: but he that hateth reproof is brutish.", reference: "Proverbs 12:1", golf: "A golfer who welcomes coaching improves; one who resents it stalls." },
      { day: 154, verse: "Poverty and shame shall be to him that refuseth instruction: but he that regardeth reproof shall be honoured.", reference: "Proverbs 13:18", golf: "Take the lesson, fix the flaw, and your game — and reputation — grow." },
      { day: 155, verse: "He that refuseth instruction despiseth his own soul: but he that heareth reproof getteth understanding.", reference: "Proverbs 15:32", golf: "Ignoring a coach's feedback only slows your own progress." },
      { day: 156, verse: "He that hath no rule over his own spirit is like a city that is broken down, and without walls.", reference: "Proverbs 25:28", golf: "A temper with no rule leaves your whole round defenseless." },
      { day: 157, verse: "...sober, just, holy, temperate.", reference: "Titus 1:8", golf: "Temperance under a bad bounce is a discipline worth practicing." },
      { day: 158, verse: "...add to your faith virtue; and to virtue knowledge; And to knowledge temperance; and to temperance patience...", reference: "2 Peter 1:5-6", golf: "Build skills in layers — knowledge, then self-control, then patience." },
      { day: 159, verse: "He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city.", reference: "Proverbs 16:32", golf: "Staying calm after a shank is a bigger win than any birdie." },
      { day: 160, verse: "For a just man falleth seven times, and riseth up again...", reference: "Proverbs 24:16", golf: "A quadruple bogey doesn't end the round — the next tee shot does." },
      { day: 161, verse: "Go to the ant, thou sluggard; consider her ways, and be wise... provideth her meat in the summer...", reference: "Proverbs 6:6-8", golf: "Steady, unglamorous practice in the off-season pays off in-season." },
      { day: 162, verse: "He becometh poor that dealeth with a slack hand: but the hand of the diligent maketh rich.", reference: "Proverbs 10:4", golf: "Skipping practice makes for a \"poor\" short game later." },
      { day: 163, verse: "The hand of the diligent shall bear rule: but the slothful shall be under tribute.", reference: "Proverbs 12:24", golf: "Diligent practice earns command over your shots; laziness leaves you at their mercy." },
      { day: 164, verse: "The soul of the sluggard desireth, and hath nothing: but the soul of the diligent shall be made fat.", reference: "Proverbs 13:4", golf: "Wanting to break 80 isn't enough — the diligent practicer actually does." },
      { day: 165, verse: "The thoughts of the diligent tend only to plenteousness; but of every one that is hasty only to want.", reference: "Proverbs 21:5", golf: "A rushed pre-shot routine tends toward a poor result; a careful one toward a good one." },
      { day: 166, verse: "Seest thou a man diligent in his business? he shall stand before kings...", reference: "Proverbs 22:29", golf: "Diligence in your craft eventually gets noticed." },
      { day: 167, verse: "Whatsoever thy hand findeth to do, do it with thy might...", reference: "Ecclesiastes 9:10", golf: "Whether it's a tap-in or a 300-yard drive, give it full attention." },
      { day: 168, verse: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", reference: "Colossians 3:23", golf: "Practice the same way whether someone's watching or not." },
      { day: 169, verse: "...exercise thyself rather unto godliness. For bodily exercise profiteth little: but godliness is profitable unto all things...", reference: "1 Timothy 4:7-8", golf: "Physical fitness matters, but character discipline shapes the whole life around the game." },
      { day: 170, verse: "I have fought a good fight, I have finished my course, I have kept the faith.", reference: "2 Timothy 4:7", golf: "Finish the round the same way you started it — with full effort." },
      { day: 171, verse: "I press toward the mark for the prize of the high calling of God in Christ Jesus.", reference: "Philippians 3:14", golf: "Keep pressing toward the target line, not the trouble on either side." },
      { day: 172, verse: "...No man, having put his hand to the plough, and looking back, is fit for the kingdom of God.", reference: "Luke 9:62", golf: "Don't look back at the last shot mid-swing on the next one." },
      { day: 173, verse: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.", reference: "Galatians 6:9", golf: "Keep grinding through a slump — the improvement often comes right after you almost quit." },
      { day: 174, verse: "Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life...", reference: "James 1:12", golf: "Enduring the temptation to give up on a tough hole builds real character." },
      { day: 175, verse: "...the trying of your faith worketh patience. But let patience have her perfect work, that ye may be perfect and entire, wanting nothing.", reference: "James 1:2-4", golf: "A hard course tests patience — and patience is what completes a golfer." },
      { day: 176, verse: "...tribulation worketh patience; And patience, experience; and experience, hope.", reference: "Romans 5:3-4", golf: "Bad rounds, endured well, build the experience that produces confidence later." },
      { day: 177, verse: "Thy word have I hid in mine heart, that I might not sin against thee.", reference: "Psalm 119:11", golf: "Keep your swing keys close at hand, ready before every shot." },
      { day: 178, verse: "So teach us to number our days, that we may apply our hearts unto wisdom.", reference: "Psalm 90:12", golf: "Count your shots honestly and apply what each round teaches you." },
      { day: 179, verse: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.", reference: "Proverbs 1:7", golf: "Respect for the game's difficulty is the beginning of real improvement." },
      { day: 180, verse: "My son, despise not the chastening of the LORD... for whom the LORD loveth he correcteth...", reference: "Proverbs 3:11-12", golf: "A tough lesson from a coach is a form of care, not punishment." },
      { day: 181, verse: "Give instruction to a wise man, and he will be yet wiser: teach a just man, and he will increase in learning.", reference: "Proverbs 9:9", golf: "The best golfers keep taking lessons even after they're good." },
      { day: 182, verse: "Hear counsel, and receive instruction, that thou mayest be wise in thy latter end.", reference: "Proverbs 19:20", golf: "Listen to your caddie or coach — their outside view sees what you can't." },
      { day: 183, verse: "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.", reference: "Proverbs 27:17", golf: "A good practice partner pushes you further than practicing alone." },
      { day: 184, verse: "Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord...", reference: "1 Corinthians 15:58", golf: "Stay steady through a bad stretch of holes rather than unraveling." },
      { day: 185, verse: "Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day...", reference: "Ephesians 6:13", golf: "Prepare fully before a tournament so pressure doesn't catch you unarmed." },
      { day: 186, verse: "...I have learned, in whatsoever state I am, therewith to be content... I know both how to be abased, and how to abound.", reference: "Philippians 4:11-12", golf: "Learn contentment whether you're three-under or three-over." },
      { day: 187, verse: "...be ye therefore sober, and watch unto prayer.", reference: "1 Peter 4:7", golf: "Stay clear-headed under the pressure of a close match." },
      { day: 188, verse: "Be sober, be vigilant... your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour.", reference: "1 Peter 5:8", golf: "Stay alert late in the round when fatigue tempts sloppy shots." },
      { day: 189, verse: "Keep thy heart with all diligence; for out of it are the issues of life.", reference: "Proverbs 4:23", golf: "Guard your mindset carefully — it shapes every swing that follows." },
      { day: 190, verse: "To every thing there is a season, and a time to every purpose under the heaven.", reference: "Ecclesiastes 3:1", golf: "There's a time to be aggressive and a time to lay up — discipline knows the difference." },
      { day: 191, verse: "The sluggard will not plow by reason of the cold; therefore shall he beg in harvest, and have nothing.", reference: "Proverbs 20:4", golf: "Skip the cold-weather practice, and you'll wish you hadn't come spring." },
      { day: 192, verse: "So built we the wall... for the people had a mind to work.", reference: "Nehemiah 4:6", golf: "Consistent daily effort, not bursts of motivation, builds a solid game." },
      { day: 193, verse: "...he kneeled upon his knees three times a day, and prayed... as he did aforetime.", reference: "Daniel 6:10", golf: "A steady, unchanging routine holds up under pressure because it's already a habit." },
      { day: 194, verse: "He that is faithful in that which is least is faithful also in much...", reference: "Luke 16:10a", golf: "Discipline on the practice green with three-footers shows up on the course." },
      { day: 195, verse: "...Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things...", reference: "Matthew 25:21", golf: "Faithful, unglamorous practice earns bigger opportunities later." },
      { day: 196, verse: "But he that shall endure unto the end, the same shall be saved.", reference: "Matthew 24:13", golf: "Finishing strong matters as much as starting strong." },
      { day: 197, verse: "...though our outward man perish, yet the inward man is renewed day by day.", reference: "2 Corinthians 4:16", golf: "Even as the body tires late in a round, mental discipline can stay fresh." },
      { day: 198, verse: "Rejoicing in hope; patient in tribulation; continuing instant in prayer.", reference: "Romans 12:12", golf: "Patience through a rough patch of holes, hope for the next good one." },
      { day: 199, verse: "But ye, brethren, be not weary in well doing.", reference: "2 Thessalonians 3:13", golf: "Keep the same effort on the 400th ball of the practice session as the first." },
      { day: 200, verse: "Fight the good fight of faith, lay hold on eternal life...", reference: "1 Timothy 6:12", golf: "Compete hard, but for the right reasons and in the right spirit." },
      { day: 201, verse: "The righteous also shall hold on his way, and he that hath clean hands shall be stronger and stronger.", reference: "Job 17:9", golf: "Consistent honest effort compounds into real strength over a season." },
      { day: 202, verse: "...his delight is in the law of the LORD; and in his law doth he meditate day and night... he shall be like a tree planted by the rivers of water...", reference: "Psalm 1:2-3", golf: "Daily study of the fundamentals roots a golfer deeply." },
      { day: 203, verse: "The steps of a good man are ordered by the LORD... though he fall, he shall not be utterly cast down...", reference: "Psalm 37:23-24", golf: "A bad hole doesn't cast down a well-prepared golfer for long." },
      { day: 204, verse: "Thy word is a lamp unto my feet, and a light unto my path.", reference: "Psalm 119:105", golf: "A clear plan for the round lights the way through tricky holes." },
      { day: 205, verse: "Without counsel purposes are disappointed: but in the multitude of counsellors they are established.", reference: "Proverbs 15:22", golf: "A caddie's advice, taken seriously, prevents avoidable mistakes." },
      { day: 206, verse: "A man's heart deviseth his way: but the LORD directeth his steps.", reference: "Proverbs 16:9", golf: "Plan your strategy for the hole, then stay flexible to what the course gives you." },
      { day: 207, verse: "The heart of the prudent getteth knowledge; and the ear of the wise seeketh knowledge.", reference: "Proverbs 18:15", golf: "Keep learning — read the greens, study the yardage book, ask questions." },
      { day: 208, verse: "Be thou diligent to know the state of thy flocks, and look well to thy herds.", reference: "Proverbs 27:23", golf: "Know your own tendencies and stats well enough to manage them." },
      { day: 209, verse: "He giveth power to the faint; and to them that have no might he increaseth strength...", reference: "Isaiah 40:29-31", golf: "Even a tired golfer on the back nine can find fresh strength." },
      { day: 210, verse: "The LORD God is my strength, and he will make my feet like hinds' feet, and he will make me to walk upon mine high places.", reference: "Habakkuk 3:19", golf: "Sure footing on tough terrain comes from trained strength, not luck." },
      { day: 211, verse: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", reference: "Matthew 6:33", golf: "Put first things first, and the score tends to take care of itself." },
      { day: 212, verse: "For which of you, intending to build a tower, sitteth not down first, and counteth the cost...", reference: "Luke 14:28", golf: "Plan the round — club selection, pace, strategy — before you swing." },
      { day: 213, verse: "Let all things be done decently and in order.", reference: "1 Corinthians 14:40", golf: "A consistent pre-shot routine brings order to a chaotic mind." },
      { day: 214, verse: "See then that ye walk circumspectly, not as fools, but as wise, Redeeming the time...", reference: "Ephesians 5:15-16", golf: "Use practice time wisely rather than wasting reps on bad habits." },
      { day: 215, verse: "Walk in wisdom toward them that are without, redeeming the time.", reference: "Colossians 4:5", golf: "Every practice session is time that can be redeemed for real improvement." },
      { day: 216, verse: "Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee...", reference: "2 Timothy 1:6", golf: "Natural talent still needs to be stirred up through daily work." },
      { day: 217, verse: "All scripture is given by inspiration of God, and is profitable for doctrine... That the man of God may be perfect, throughly furnished unto all good works.", reference: "2 Timothy 3:16-17", golf: "Sound instruction, well applied, furnishes a golfer for any course." },
      { day: 218, verse: "The horse is prepared against the day of battle: but safety is of the LORD.", reference: "Proverbs 21:31", golf: "Prepare thoroughly, then trust the process on tournament day." },
      { day: 219, verse: "In the morning sow thy seed, and in the evening withhold not thine hand: for thou knowest not whether shall prosper...", reference: "Ecclesiastes 11:6", golf: "Keep grinding on both the range and the course — you never know which rep pays off." },
      { day: 220, verse: "Charity suffereth long, and is kind; charity envieth not... beareth all things, believeth all things, hopeth all things, endureth all things.", reference: "1 Corinthians 13:4-7", golf: "Be kind to a struggling playing partner instead of envying their good rounds." },
      { day: 221, verse: "And now abideth faith, hope, charity, these three; but the greatest of these is charity.", reference: "1 Corinthians 13:13", golf: "Of all the traits a golfer can have, kindness to others outlasts them all." },
      { day: 222, verse: "And above all things have fervent charity among yourselves: for charity shall cover the multitude of sins.", reference: "1 Peter 4:8", golf: "Grace toward a playing partner's mistake covers a lot of tension in a round." },
      { day: 223, verse: "A new commandment I give unto you, That ye love one another... By this shall all men know that ye are my disciples, if ye have love one to another.", reference: "John 13:34-35", golf: "How you treat your group says more than your scorecard ever will." },
      { day: 224, verse: "This is my commandment, That ye love one another, as I have loved you.", reference: "John 15:12", golf: "Cheer for a competitor's great shot the way you'd want them to cheer for yours." },
      { day: 225, verse: "Be kindly affectioned one to another with brotherly love; in honour preferring one another.", reference: "Romans 12:10", golf: "Let a nervous junior golfer hit first off the tee." },
      { day: 226, verse: "Owe no man any thing, but to love one another...", reference: "Romans 13:8", golf: "A generous word to a rookie golfer costs nothing and means a lot." },
      { day: 227, verse: "...by love serve one another.", reference: "Galatians 5:13", golf: "Carry an extra glove or tee for whoever forgot theirs." },
      { day: 228, verse: "For all the law is fulfilled in one word, even in this; Thou shalt love thy neighbour as thyself.", reference: "Galatians 5:14", golf: "Treat your fellow competitor the way you'd want to be treated after a bad round." },
      { day: 229, verse: "Bear ye one another's burdens, and so fulfil the law of Christ.", reference: "Galatians 6:2", golf: "Help a struggling playing partner find their ball without judgment." },
      { day: 230, verse: "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.", reference: "Ephesians 4:32", golf: "Forgive a slow playing partner instead of stewing about pace of play." },
      { day: 231, verse: "Put on therefore, as the elect of God... bowels of mercies, kindness, humbleness of mind, meekness, longsuffering...", reference: "Colossians 3:12", golf: "Patience with a beginner in your group reflects real character." },
      { day: 232, verse: "And above all these things put on charity, which is the bond of perfectness.", reference: "Colossians 3:14", golf: "Kindness holds a foursome together better than any shared skill level." },
      { day: 233, verse: "Wherefore comfort yourselves together, and edify one another...", reference: "1 Thessalonians 5:11", golf: "Encourage your partner after a shanked shot instead of piling on." },
      { day: 234, verse: "See that none render evil for evil unto any man; but ever follow that which is good...", reference: "1 Thessalonians 5:15", golf: "Don't needle a rival after their bad break — root for the game to be fair." },
      { day: 235, verse: "And let us consider one another to provoke unto love and to good works.", reference: "Hebrews 10:24", golf: "Give genuine, specific compliments on a partner's swing improvements." },
      { day: 236, verse: "But to do good and to communicate forget not: for with such sacrifices God is well pleased.", reference: "Hebrews 13:16", golf: "Share your extra balls, tees, or sunscreen without being asked." },
      { day: 237, verse: "If ye fulfil the royal law according to the scripture, Thou shalt love thy neighbour as thyself, ye do well.", reference: "James 2:8", golf: "Treat the beginner in your group as well as you'd treat the club champion." },
      { day: 238, verse: "But whoso hath this world's good, and seeth his brother have need... let us not love in word... but in deed and in truth.", reference: "1 John 3:17-18", golf: "If someone needs a lesson they can't afford, offer real help, not just sympathy." },
      { day: 239, verse: "Beloved, let us love one another: for love is of God; and every one that loveth is born of God...", reference: "1 John 4:7", golf: "Genuine warmth toward your group changes the whole tone of a round." },
      { day: 240, verse: "Beloved, if God so loved us, we ought also to love one another.", reference: "1 John 4:11", golf: "Extend grace to others the way you hope they'll extend it to you." },
      { day: 241, verse: "And as ye would that men should do to you, do ye also to them likewise.", reference: "Luke 6:31", golf: "Repair your divots and rake your bunkers for the group behind you." },
      { day: 242, verse: "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over...", reference: "Luke 6:38", golf: "Generosity with your time — teaching a new golfer — often comes back around." },
      { day: 243, verse: "Blessed are the merciful: for they shall obtain mercy.", reference: "Matthew 5:7", golf: "Give a mulligan graciously and you'll likely be shown the same grace." },
      { day: 244, verse: "Give to him that asketh thee, and from him that would borrow of thee turn not thou away.", reference: "Matthew 5:42", golf: "Lend a club or a ball to someone who's short, without keeping score of favors." },
      { day: 245, verse: "...let not thy left hand know what thy right hand doeth: That thine alms may be in secret...", reference: "Matthew 6:2-4", golf: "Quietly cover a green fee for someone without making it a story." },
      { day: 246, verse: "Therefore all things whatsoever ye would that men should do to you, do ye even so to them...", reference: "Matthew 7:12", golf: "Give the same benefit of the doubt on a close ruling that you'd want." },
      { day: 247, verse: "For I was an hungred, and ye gave me meat... I was a stranger, and ye took me in...", reference: "Matthew 25:35-36", golf: "Welcome the new member or first-time visitor to your home club." },
      { day: 248, verse: "...Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.", reference: "Matthew 25:40", golf: "Kindness to the least-skilled golfer in the group matters as much as to the best." },
      { day: 249, verse: "For even the Son of man came not to be ministered unto, but to minister...", reference: "Mark 10:45", golf: "Offer to caddie or carry an extra bag for someone who needs it." },
      { day: 250, verse: "But a certain Samaritan... had compassion on him, And went to him, and bound up his wounds...", reference: "Luke 10:33-34", golf: "Stop to help an injured or struggling golfer, even a stranger, on the course." },
      { day: 251, verse: "...It is more blessed to give than to receive.", reference: "Acts 20:35", golf: "The joy of teaching someone the game beats the joy of any personal round." },
      { day: 252, verse: "Distributing to the necessity of saints; given to hospitality.", reference: "Romans 12:13", golf: "Host a beginner's round graciously, covering the small costs along the way." },
      { day: 253, verse: "Rejoice with them that do rejoice, and weep with them that weep.", reference: "Romans 12:15", golf: "Celebrate a partner's hole-in-one as if it were your own." },
      { day: 254, verse: "We then that are strong ought to bear the infirmities of the weak, and not to please ourselves.", reference: "Romans 15:1", golf: "Slow your pace for a beginner rather than rushing them." },
      { day: 255, verse: "...he which soweth bountifully shall reap also bountifully... God loveth a cheerful giver.", reference: "2 Corinthians 9:6-7", golf: "Give generously of your time teaching juniors — it comes back multiplied." },
      { day: 256, verse: "Being enriched in every thing to all bountifulness, which causeth through us thanksgiving to God.", reference: "2 Corinthians 9:11", golf: "Generosity on the course creates gratitude that spreads beyond it." },
      { day: 257, verse: "...in lowliness of mind let each esteem other better than themselves. Look not every man on his own things, but every man also on the things of others.", reference: "Philippians 2:3-4", golf: "Care about your partner's round going well, not just your own scorecard." },
      { day: 258, verse: "Look not every man on his own things, but every man also on the things of others.", reference: "Philippians 2:4", golf: "Help your partner find their lost ball before searching for yours." },
      { day: 259, verse: "That they do good, that they be rich in good works, ready to distribute, willing to communicate...", reference: "1 Timothy 6:18", golf: "Be the golfer who's generous with equipment, tips, and encouragement." },
      { day: 260, verse: "And let ours also learn to maintain good works for necessary uses, that they be not unfruitful.", reference: "Titus 3:14", golf: "Volunteer at a junior clinic or charity tournament — small acts, real impact." },
      { day: 261, verse: "Withhold not good from them to whom it is due, when it is in the power of thine hand to do it.", reference: "Proverbs 3:27", golf: "If you can help a struggling golfer with advice, don't withhold it out of pride." },
      { day: 262, verse: "There is that scattereth, and yet increaseth... The liberal soul shall be made fat...", reference: "Proverbs 11:24-25", golf: "Generosity with your knowledge of the game tends to enrich you too." },
      { day: 263, verse: "He that despiseth his neighbour sinneth: but he that hath mercy on the poor, happy is he.", reference: "Proverbs 14:21", golf: "Include, don't exclude, the golfer who can't afford the nicest gear." },
      { day: 264, verse: "He that hath pity upon the poor lendeth unto the LORD; and that which he hath given will he pay him again.", reference: "Proverbs 19:17", golf: "Sponsoring a junior's entry fee is never really wasted money." },
      { day: 265, verse: "He that hath a bountiful eye shall be blessed; for he giveth of his bread to the poor.", reference: "Proverbs 22:9", golf: "Look for who in your club could use encouragement or an invitation to play." },
      { day: 266, verse: "If thine enemy be hungry, give him bread to eat; and if he be thirsty, give him water to drink.", reference: "Proverbs 25:21", golf: "Offer water to a rival who's struggling in the heat, even mid-competition." },
      { day: 267, verse: "Cast thy bread upon the waters: for thou shalt find it after many days.", reference: "Ecclesiastes 11:1", golf: "Teaching someone the game today may return kindness you don't expect for years." },
      { day: 268, verse: "And if thou draw out thy soul to the hungry, and satisfy the afflicted soul; then shall thy light rise in obscurity...", reference: "Isaiah 58:10", golf: "Encouragement to a discouraged golfer can turn their whole day around." },
      { day: 269, verse: "Thou shalt surely give him, and thine heart shall not be grieved when thou givest unto him...", reference: "Deuteronomy 15:10", golf: "Give generously of your time coaching, without resentment." },
      { day: 270, verse: "...thou shalt love thy neighbour as thyself: I am the LORD.", reference: "Leviticus 19:18", golf: "Root for your competitor's success as much as your own, within the rules." },
      { day: 271, verse: "Blessed is he that considereth the poor: the LORD will deliver him in time of trouble.", reference: "Psalm 41:1", golf: "Look out for the golfer who's new, nervous, or underequipped." },
      { day: 272, verse: "A good man sheweth favour, and lendeth: he will guide his affairs with discretion.", reference: "Psalm 112:5", golf: "Lend your rangefinder or extra glove freely." },
      { day: 273, verse: "He hath dispersed, he hath given to the poor; his righteousness endureth for ever...", reference: "Psalm 112:9", golf: "Generosity around the game outlasts any single round's memory." },
      { day: 274, verse: "I was eyes to the blind, and feet was I to the lame. I was a father to the poor...", reference: "Job 29:15-16", golf: "Be a mentor to someone who doesn't have anyone teaching them the game." },
      { day: 275, verse: "...let fall also some of the handfuls of purpose for her, and leave them, that she may glean them...", reference: "Ruth 2:15-16", golf: "Leave room for a beginner to succeed rather than showing off at their expense." },
      { day: 276, verse: "...send portions unto them for whom nothing is prepared: for this day is holy unto our Lord...", reference: "Nehemiah 8:10", golf: "Share what you have — clubs, time, tips — with someone who has less." },
      { day: 277, verse: "Learn to do well; seek judgment, relieve the oppressed, judge the fatherless, plead for the widow.", reference: "Isaiah 1:17", golf: "Advocate fairly for a playing partner in a dispute, even if it doesn't benefit you." },
      { day: 278, verse: "...to do justly, and to love mercy, and to walk humbly with thy God?", reference: "Micah 6:8", golf: "Mercy toward a struggling partner is as important as justice in a ruling." },
      { day: 279, verse: "...shew mercy and compassions every man to his brother: And oppress not the widow, nor the fatherless, the stranger, nor the poor...", reference: "Zechariah 7:9-10", golf: "Welcome the outsider at the club, not just the regulars." },
      { day: 280, verse: "...against those that oppress the hireling in his wages...", reference: "Malachi 3:5", golf: "Tip the caddie and course staff fairly and promptly." },
      { day: 281, verse: "He that hath two coats, let him impart to him that hath none; and he that hath meat, let him do likewise.", reference: "Luke 3:11", golf: "If you have two of something — gloves, balls, rain gear — share with who needs one." },
      { day: 282, verse: "Sell that ye have, and give alms; provide yourselves bags which wax not old...", reference: "Luke 12:33", golf: "Invest in people and community around the game, not just gear." },
      { day: 283, verse: "...call the poor, the maimed, the lame, the blind: And thou shalt be blessed; for they cannot recompense thee...", reference: "Luke 14:13-14", golf: "Invite someone to play who could never repay the favor." },
      { day: 284, verse: "...this poor widow hath cast in more than they all: For all these have of their abundance cast in... but she of her want did cast in all...", reference: "Luke 21:1-4", golf: "A small act of generosity from someone with little means more than a big gesture from someone with plenty." },
      { day: 285, verse: "...neither said any of them that ought of the things which he possessed was his own; but they had all things common.", reference: "Acts 4:32", golf: "Share equipment and knowledge freely within your club or group." },
      { day: 286, verse: "...he that giveth, let him do it with simplicity; he that ruleth, with diligence; he that sheweth mercy, with cheerfulness.", reference: "Romans 12:8", golf: "Give a compliment or lesson cheerfully, not grudgingly." },
      { day: 287, verse: "For if there be first a willing mind, it is accepted according to that a man hath, and not according to that he hath not.", reference: "2 Corinthians 8:12", golf: "You don't need to be a scratch golfer to offer meaningful help to a beginner." },
      { day: 288, verse: "...ye sent once and again unto my necessity.", reference: "Philippians 4:15-16", golf: "Consistent small support — a ride to the course, a spare glove — adds up." },
      { day: 289, verse: "Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye.", reference: "Colossians 3:13", golf: "Let go of a rules dispute from last week's round." },
      { day: 290, verse: "...trust in the living God, who giveth us richly all things to enjoy; That they do good, that they be rich in good works...", reference: "1 Timothy 6:17-18", golf: "Enjoy the game, and let that enjoyment overflow into generosity toward others." },
      { day: 291, verse: "For God is not unrighteous to forget your work and labour of love, which ye have shewed toward his name, in that ye have ministered to the saints...", reference: "Hebrews 6:10", golf: "Quiet acts of kindness around the course aren't wasted, even if unnoticed." },
      { day: 292, verse: "...thou doest faithfully whatsoever thou doest to the brethren, and to strangers... which have borne witness of thy charity before the church.", reference: "3 John 1:5-6", golf: "Hospitality to visiting golfers reflects well on your whole club." },
      { day: 293, verse: "Humble yourselves in the sight of the Lord, and he shall lift you up.", reference: "James 4:10", golf: "Own your bad round honestly rather than making excuses, and confidence returns faster." },
      { day: 294, verse: "...God resisteth the proud, but giveth grace unto the humble.", reference: "James 4:6", golf: "Bragging after a good round tends to invite a humbling one next time." },
      { day: 295, verse: "...be clothed with humility: for God resisteth the proud, and giveth grace to the humble. Humble yourselves therefore under the mighty hand of God...", reference: "1 Peter 5:5-6", golf: "Let a great round make you grateful, not arrogant." },
      { day: 296, verse: "When pride cometh, then cometh shame: but with the lowly is wisdom.", reference: "Proverbs 11:2", golf: "Overconfidence before a big match often precedes a rough one." },
      { day: 297, verse: "Pride goeth before destruction, and an haughty spirit before a fall.", reference: "Proverbs 16:18", golf: "Getting cocky after a hot streak often sets up the very next blow-up hole." },
      { day: 298, verse: "Better it is to be of an humble spirit with the lowly, than to divide the spoil with the proud.", reference: "Proverbs 16:19", golf: "A modest, gracious winner is better company than a boastful one." },
      { day: 299, verse: "Before destruction the heart of man is haughty, and before honour is humility.", reference: "Proverbs 18:12", golf: "Real honor in golf tends to follow humility, not arrogance." },
      { day: 300, verse: "By humility and the fear of the LORD are riches, and honour, and life.", reference: "Proverbs 22:4", golf: "Respect for the game and for opponents brings its own reward." },
      { day: 301, verse: "Let another man praise thee, and not thine own mouth; a stranger, and not thine own lips.", reference: "Proverbs 27:2", golf: "Let your scorecard speak for itself instead of announcing it." },
      { day: 302, verse: "A man's pride shall bring him low: but honour shall uphold the humble in spirit.", reference: "Proverbs 29:23", golf: "A humble golfer tends to be respected long after a proud one is forgotten." },
      { day: 303, verse: "...to walk humbly with thy God?", reference: "Micah 6:8", golf: "Humility isn't weakness on the course — it's clear-eyed self-awareness." },
      { day: 304, verse: "Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.", reference: "Philippians 2:3", golf: "Don't play for the highlight reel — play for the game itself." },
      { day: 305, verse: "Let this mind be in you, which was also in Christ Jesus... he humbled himself, and became obedient...", reference: "Philippians 2:5-8", golf: "True greatness in the game is often marked by humility, not showmanship." },
      { day: 306, verse: "And whosoever shall exalt himself shall be abased; and he that shall humble himself shall be exalted.", reference: "Matthew 23:12", golf: "The golfer who talks up their game the most often has the furthest to fall." },
      { day: 307, verse: "For whosoever exalteth himself shall be abased; and he that humbleth himself shall be exalted.", reference: "Luke 14:11", golf: "Let your play do the talking; let others do the praising." },
      { day: 308, verse: "...every one that exalteth himself shall be abased; and he that humbleth himself shall be exalted.", reference: "Luke 18:14", golf: "A humble attitude after victory wears better than a boastful one." },
      { day: 309, verse: "...God, I thank thee, that I am not as other men are... I fast twice in the week... the publican... would not lift up so much as his eyes unto heaven, but smote upon his breast, saying, God be merciful to me a sinner.", reference: "Luke 18:9-14", golf: "Don't compare your good round to someone else's bad one to feel superior." },
      { day: 310, verse: "...not to think of himself more highly than he ought to think; but to think soberly...", reference: "Romans 12:3", golf: "Know your handicap honestly — neither inflated by ego nor deflated by doubt." },
      { day: 311, verse: "Be of the same mind one toward another. Mind not high things, but condescend to men of low estate...", reference: "Romans 12:16", golf: "Play a casual round with a beginner as graciously as you would with a scratch golfer." },
      { day: 312, verse: "...what hast thou that thou didst not receive? now if thou didst receive it, why dost thou glory, as if thou hadst not received it?", reference: "1 Corinthians 4:7", golf: "Natural talent is itself a gift, not something to boast about." },
      { day: 313, verse: "Wherefore let him that thinketh he standeth take heed lest he fall.", reference: "1 Corinthians 10:12", golf: "A comfortable lead can vanish fast — stay humble and focused to the last putt." },
      { day: 314, verse: "But by the grace of God I am what I am...", reference: "1 Corinthians 15:10", golf: "Give credit to your coaches, your parents, your practice partners — not just yourself." },
      { day: 315, verse: "Not that we are sufficient of ourselves to think any thing as of ourselves; but our sufficiency is of God.", reference: "2 Corinthians 3:5", golf: "Even your best rounds rest on more preparation and help than you alone provided." },
      { day: 316, verse: "...My strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities...", reference: "2 Corinthians 12:9", golf: "Your weaknesses, honestly faced, are where real improvement happens." },
      { day: 317, verse: "For if a man think himself to be something, when he is nothing, he deceiveth himself.", reference: "Galatians 6:3", golf: "Overestimating your game leads to poor course management." },
      { day: 318, verse: "But God forbid that I should glory, save in the cross of our Lord Jesus Christ...", reference: "Galatians 6:14", golf: "Find your identity in more than your scoring average." },
      { day: 319, verse: "With all lowliness and meekness, with longsuffering, forbearing one another in love.", reference: "Ephesians 4:2", golf: "Patience with a slower or less skilled partner reflects real humility." },
      { day: 320, verse: "Put on therefore... bowels of mercies, kindness, humbleness of mind, meekness, longsuffering.", reference: "Colossians 3:12", golf: "Meekness under a bad ruling shows more strength than an outburst." },
      { day: 321, verse: "...Christ Jesus came into the world to save sinners; of whom I am chief.", reference: "1 Timothy 1:15", golf: "The best golfers still remember their worst rounds honestly." },
      { day: 322, verse: "Finally, be ye all of one mind, having compassion one of another... be courteous.", reference: "1 Peter 3:8", golf: "Simple courtesy on the course reflects a humble heart." },
      { day: 323, verse: "The meek will he guide in judgment: and the meek will he teach his way.", reference: "Psalm 25:9", golf: "A teachable spirit learns faster than a defensive one." },
      { day: 324, verse: "My soul shall make her boast in the LORD: the humble shall hear thereof, and be glad.", reference: "Psalm 34:2", golf: "Let your gladness after a good round come from gratitude, not superiority." },
      { day: 325, verse: "But the meek shall inherit the earth; and shall delight themselves in the abundance of peace.", reference: "Psalm 37:11", golf: "A meek, unbothered golfer plays with more peace than an anxious perfectionist." },
      { day: 326, verse: "Though the LORD be high, yet hath he respect unto the lowly: but the proud he knoweth afar off.", reference: "Psalm 138:6", golf: "Respect for the game and its traditions matters more than personal glory." },
      { day: 327, verse: "The LORD lifteth up the meek: he casteth the wicked down to the ground.", reference: "Psalm 147:6", golf: "Quiet, steady humility tends to be rewarded over time." },
      { day: 328, verse: "For the LORD taketh pleasure in his people: he will beautify the meek with salvation.", reference: "Psalm 149:4", golf: "There's real beauty in a humble golfer's steady game." },
      { day: 329, verse: "...I dwell in the high and holy place, with him also that is of a contrite and humble spirit...", reference: "Isaiah 57:15", golf: "A humble spirit after a mistake opens the door to real improvement." },
      { day: 330, verse: "...to this man will I look, even to him that is poor and of a contrite spirit, and trembleth at my word.", reference: "Isaiah 66:2", golf: "A teachable, contrite attitude after errors is worth more than raw talent." },
      { day: 331, verse: "Seek the LORD, all ye meek of the earth... seek righteousness, seek meekness...", reference: "Zephaniah 2:3", golf: "Seek fair play and modesty as actively as you seek a lower score." },
      { day: 332, verse: "Blessed are the meek: for they shall inherit the earth.", reference: "Matthew 5:5", golf: "Quiet confidence beats loud bravado, round after round." },
      { day: 333, verse: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.", reference: "Matthew 11:29", golf: "A humble approach to learning brings real rest from the pressure to perform." },
      { day: 334, verse: "...Except ye be converted, and become as little children... Whosoever therefore shall humble himself as this little child, the same is greatest...", reference: "Matthew 18:3-4", golf: "Keep a child's simple joy in the game even as your skill grows." },
      { day: 335, verse: "...If any man desire to be first, the same shall be last of all, and servant of all.", reference: "Mark 9:35", golf: "The best club members are often the ones quietly helping everyone else." },
      { day: 336, verse: "...whosoever will be great among you, shall be your minister... whosoever of you will be the chiefest, shall be servant of all.", reference: "Mark 10:43-44", golf: "Leadership in a club or team shows up in service, not status." },
      { day: 337, verse: "He must increase, but I must decrease.", reference: "John 3:30", golf: "Let a teammate's success be celebrated as much as your own." },
      { day: 338, verse: "If I then, your Lord and Master, have washed your feet; ye also ought to wash one another's feet...", reference: "John 13:14-15", golf: "Even the best player in the group can rake a bunker or fix a divot for someone else." },
      { day: 339, verse: "Serving the Lord with all humility of mind...", reference: "Acts 20:19", golf: "Serve your club, your group, your team with a humble attitude, not for recognition." },
      { day: 340, verse: "Be not wise in your own conceits.", reference: "Romans 12:16b", golf: "Take advice on your swing even when you think you already know best." },
      { day: 341, verse: "...not many wise men after the flesh, not many mighty, not many noble, are called... that no flesh should glory in his presence.", reference: "1 Corinthians 1:26-29", golf: "Some of the best lessons come from unlikely teachers — stay open." },
      { day: 342, verse: "...Knowledge puffeth up, but charity edifieth. And if any man think that he knoweth any thing, he knoweth nothing yet as he ought to know.", reference: "1 Corinthians 8:1-2", golf: "No matter how much you know about the swing, the course can still humble you." },
      { day: 343, verse: "Charity... vaunteth not itself, is not puffed up.", reference: "1 Corinthians 13:4", golf: "Don't let a good round turn into bragging at the clubhouse." },
      { day: 344, verse: "But he that glorieth, let him glory in the Lord. For not he that commendeth himself is approved, but whom the Lord commendeth.", reference: "2 Corinthians 10:17-18", golf: "Let your consistency over years speak louder than your self-praise after one round." },
      { day: 345, verse: "But what things were gain to me, those I counted loss... that I may win Christ.", reference: "Philippians 3:7-8", golf: "Hold your golfing achievements loosely — they aren't the measure of your worth." },
      { day: 346, verse: "Let no man beguile you of your reward in a voluntary humility...", reference: "Colossians 2:18", golf: "True humility isn't false modesty — it's honest self-assessment." },
      { day: 347, verse: "...the servant of the Lord must not strive; but be gentle unto all men... In meekness instructing those that oppose themselves...", reference: "2 Timothy 2:24-25", golf: "Correct a rules mistake gently, without making someone feel small." },
      { day: 348, verse: "To speak evil of no man, to be no brawlers, but gentle, shewing all meekness unto all men.", reference: "Titus 3:2", golf: "Keep club gossip and course trash-talk out of your game." },
      { day: 349, verse: "Who can have compassion on the ignorant, and on them that are out of the way; for that he himself also is compassed with infirmity.", reference: "Hebrews 5:2", golf: "Remember your own early mistakes when a beginner makes theirs." },
      { day: 350, verse: "Look on every one that is proud, and bring him low; and tread down the wicked in their place.", reference: "Job 40:12", golf: "Arrogance on the course tends to get quietly corrected by the course itself." },
      { day: 351, verse: "I have heard of thee by the hearing of the ear: but now mine eye seeth thee. Wherefore I abhor myself, and repent...", reference: "Job 42:5-6", golf: "A humbling round can teach you more about your real game than ten easy ones." },
      { day: 352, verse: "...to humble thee, and to prove thee, to know what was in thine heart...", reference: "Deuteronomy 8:2-3", golf: "A hard course reveals character as much as skill." },
      { day: 353, verse: "If my people, which are called by my name, shall humble themselves... then will I hear from heaven...", reference: "2 Chronicles 7:14", golf: "Real change starts with an honest, humble look at your own game." },
      { day: 354, verse: "Notwithstanding Hezekiah humbled himself for the pride of his heart...", reference: "2 Chronicles 32:26", golf: "It's never too late in a round — or a career — to correct a prideful mindset." },
      { day: 355, verse: "...he humbled himself greatly before the God of his fathers...", reference: "2 Chronicles 33:12", golf: "Even a golfer with a bad reputation can turn it around through genuine humility." },
      { day: 356, verse: "Because thine heart was tender, and thou didst humble thyself before God...", reference: "2 Chronicles 34:27", golf: "A tender, humble heart after failure is where real growth begins." },
      { day: 357, verse: "...to afflict ourselves before our God, to seek of him a right way...", reference: "Ezra 8:21", golf: "Honest self-examination before a big event beats overconfidence." },
      { day: 358, verse: "...from the first day that thou didst set thine heart to understand, and to chasten thyself before thy God, thy words were heard...", reference: "Daniel 10:12", golf: "Diligence paired with humility is a powerful combination." },
      { day: 359, verse: "LORD, thou hast heard the desire of the humble: thou wilt prepare their heart...", reference: "Psalm 10:17", golf: "A humble golfer's honest desire to improve tends to get met with real growth." },
      { day: 360, verse: "The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.", reference: "Psalm 51:17", golf: "A humbled heart after a bad round isn't wasted — it's where learning starts." },
      { day: 361, verse: "The humble shall see this, and be glad: and your heart shall live that seek God.", reference: "Psalm 69:32", golf: "Genuine gladness after a round comes easier to the humble than the proud." },
      { day: 362, verse: "LORD, my heart is not haughty, nor mine eyes lofty: neither do I exercise myself in great matters, or in things too high for me.", reference: "Psalm 131:1", golf: "Play within yourself — don't force a hero shot your game doesn't support." },
      { day: 363, verse: "Surely he scorneth the scorners: but he giveth grace unto the lowly.", reference: "Proverbs 3:34", golf: "Mocking a struggling opponent reflects worse on you than on them." },
      { day: 364, verse: "The fear of the LORD is the instruction of wisdom; and before honour is humility.", reference: "Proverbs 15:33", golf: "Respect for the game precedes real growth in it." },
      { day: 365, verse: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", reference: "Micah 6:8 (closing)", golf: "At the end of every round, on every course, it comes back to playing justly, showing mercy, and walking humbly — the same swing thoughts that shape a life well lived." }
    ];

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    document.querySelectorAll("nav ul a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("open");
        });
    });
}

// ===============================
// Scroll Reveal
// ===============================

const revealElements = document.querySelectorAll("section");

function reveal() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 60) {
        header.style.background = "rgba(10,10,10,.92)";
    } else {
        header.style.background = "rgba(15,17,21,.75)";
    }

});

// ===============================
// Hero Fade
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-content");

    if (!hero) return;

    hero.style.opacity = 1 - window.scrollY / 700;

});

// ===============================
// Button Hover Animation
// ===============================

document.querySelectorAll("a").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0px)";
    });

});

// ===============================
// Daily Scripture
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    function getDayOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    const today = new Date();
    const day = getDayOfYear(today);

    const devotion = sgDevotionals.find(item => item.day === day);

    if (!devotion) {
        console.error("No devotion found for day:", day);
        return;
    }

    const verseText = document.getElementById("verse-text");
    const verseReference = document.getElementById("verse-reference");
    const golfThought = document.getElementById("golf-thought");

    if (verseText) {
        verseText.textContent = `"${devotion.verse}"`;
    }

    if (verseReference) {
        verseReference.textContent = devotion.reference;
    }

    if (golfThought) {
        golfThought.textContent = devotion.golf;
    }

});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll("nav ul a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}
