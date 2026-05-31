const questionsData = [
  // PART 1 (WEEK 1): INTRODUCTION TO SEMANTICS, PRAGMATICS, AND SIGN TYPES
  {
    id: "q1_1",
    category: "week1",
    question: "What is the primary definition of Semantics as studied in linguistics?",
    options: {
      A: "The study of how sounds are produced by human vocal organs.",
      B: "The study of meaning that is used to understand human expression through language.",
      C: "The study of sentence structures and word formations.",
      D: "The study of how language is used in social contexts and conversations."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The study of how speech sounds are produced is Phonetics, not Semantics.",
      B: "Correct! Semantics is defined in the sources as the study of the meaning that is used to understand human expression through language.",
      C: "Incorrect. The study of sentence structure is Syntax, and word formation is Morphology.",
      D: "Incorrect. The study of language use in context and conversation is Pragmatics, which is distinguished from literal semantics."
    }
  },
  {
    id: "q1_2",
    category: "week1",
    question: "How does Semantics differ from Pragmatics?",
    options: {
      A: "Semantics deals with the grammatical rules, while Pragmatics deals with word meanings.",
      B: "Semantics deals with literal meaning and word combinations, while Pragmatics deals with speaker meaning and conversational context.",
      C: "Semantics only studies written language, whereas Pragmatics studies spoken language.",
      D: "Semantics focuses on ancient languages, whereas Pragmatics focuses on modern dialects."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Syntax deals with grammatical rules, and Semantics deals with meanings, not Pragmatics.",
      B: "Correct! Semantics deals with the literal meaning of words and their combinations, while Pragmatics deals with how literal meaning is refined, enriched, or extended based on the speaker's intent and context.",
      C: "Incorrect. Both fields study both written and spoken language; the division is based on literal vs. contextual meaning, not medium.",
      D: "Incorrect. Both fields study contemporary and historical languages; the difference is the level of meaning analyzed (literal vs. speaker context)."
    }
  },
  {
    id: "q1_3",
    category: "week1",
    question: "In a classroom setting, a teacher asks a student, 'What time is it?'. The teacher's actual meaning is 'You are late.' This is an example of:",
    options: {
      A: "Sentence meaning",
      B: "Speaker meaning",
      C: "Literal denotation",
      D: "Semantic anomaly"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The sentence meaning is a question requesting the current time ('Excuse me, could you tell me the time please?').",
      B: "Correct! Speaker meaning is what a speaker intends to convey, which in this context is the assertion 'You are late.'",
      C: "Incorrect. The literal denotation is the request for the numerical time, not the warning about being late.",
      D: "Incorrect. A semantic anomaly is a contradiction in meaning (like 'neither open nor closed'), whereas this utterance is perfectly meaningful in context."
    }
  },
  {
    id: "q1_4",
    category: "week1",
    question: "Which of the following is the best example of an iconic sign?",
    options: {
      A: "A photograph of a bicycle",
      B: "Smoke rising from a campfire",
      C: "The written word 'cat'",
      D: "The skull and crossbones symbol for danger"
    },
    correct: "A",
    explanations: {
      A: "Correct! An iconic sign has a physical resemblance to the meaning or the thing being represented (e.g., a photo resembles a bicycle).",
      B: "Incorrect. Smoke is an indexical sign (an index) because it represents fire by showing evidence or a physical connection, not a resemblance.",
      C: "Incorrect. The written word 'cat' is a symbolic sign because the link between the letters/sounds and the animal is arbitrary and conventional.",
      D: "Incorrect. A skull and crossbones is a symbolic sign (a symbol) because its association with poison/danger is a culturally learned convention."
    }
  },
  {
    id: "q1_5",
    category: "week1",
    question: "Why is the word 'five' or the numeral '5' classified as a symbolic sign (symbol)?",
    options: {
      A: "Because it physically resembles five separate objects.",
      B: "Because there is a natural, causal link between the symbol and the quantity.",
      C: "Because the relationship between the form and its meaning is arbitrary and must be culturally learned.",
      D: "Because it is used to indicate mathematical calculations in all animal communication systems."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. The shape of the digit '5' or the letters in 'five' do not resemble five items; they are abstract shapes.",
      B: "Incorrect. There is no physical or natural link (like smoke to fire) between '5' and the number five.",
      C: "Correct! Symbolic signs have an arbitrary link between form and meaning. A symbol has no resemblance between signifier and signified; it must be culturally learned.",
      D: "Incorrect. Animals do not use this numeric symbol; symbolic language is a customary sign system of humankind."
    }
  },
  {
    id: "q1_6",
    category: "week1",
    question: "According to the sources, every linguistic sign system has two parts. What are they?",
    options: {
      A: "Phonetics and Phonology",
      B: "Semantics and Pragmatics",
      C: "A Lexicon (inventory of signs) and a Grammar (rules for construction/combination)",
      D: "Icons and Indices"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Phonetics and Phonology deal with the sound system of language, not the two constituent parts of a sign system.",
      B: "Incorrect. Semantics and Pragmatics are subdisciplines that study meaning, not parts of the sign system itself.",
      C: "Correct! The sources state that every linguistic sign system consists of: 1. A Lexicon: the inventory of its signs, and 2. A grammar: the rules for the construction of its signs and their combination.",
      D: "Incorrect. Icons and indices are types of signs, not the structural components of a sign system."
    }
  },
  {
    id: "q1_7",
    category: "week1",
    question: "Which field of semantics deals with the meanings of individual words?",
    options: {
      A: "Sentential semantics",
      B: "Lexical semantics",
      C: "Pragmatic semantics",
      D: "Grammatical semantics"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sentential semantics deals with sentence meaning, not individual word meaning.",
      B: "Correct! Lexical semantics is the study of word meaning (lexical senses).",
      C: "Incorrect. 'Pragmatic semantics' is not a standard term used in the sources; pragmatics is distinguished from semantics.",
      D: "Incorrect. Grammatical meaning is structural, while word meaning is studied under lexical semantics."
    }
  },
  {
    id: "q1_8",
    category: "week1",
    question: "Which of the following is NOT one of the analytical tools mentioned in the sources as part of the study of Semantics?",
    options: {
      A: "Set theory",
      B: "Relations",
      C: "Acoustic spectrogram analysis",
      D: "Predicate logic"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Set theory is explicitly listed in Week 1 slides as an analytical tool we acquire in semantics.",
      B: "Incorrect. Relations (mathematical/logical) are listed in the slides as an analytical tool for semantics.",
      C: "Correct! Acoustic spectrogram analysis belongs to experimental phonetics, not semantics.",
      D: "Incorrect. Predicate logic is explicitly listed as a primary tool for formalizing how meaning is made in natural language."
    }
  },
  {
    id: "q1_9",
    category: "week1",
    question: "Ludwig Wittgenstein's philosophical work is introduced in the course to analyze which semantic concept?",
    options: {
      A: "The acoustic production of phonemes",
      B: "Family resemblances in words like 'game'",
      C: "The differences between British and American vowels",
      D: "The mathematical formula for truth conditions"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Wittgenstein did not work on phonetics or phonemes.",
      B: "Correct! Wittgenstein's concept of 'family resemblances' is introduced to explain words like 'game' that have no single feature common to all uses but share overlapping clusters of features.",
      C: "Incorrect. Wittgenstein did not study dialectal vowel differences; he was a philosopher of language.",
      D: "Incorrect. While truth conditions are studied in semantics, Wittgenstein's specific contribution discussed is family resemblances."
    }
  },
  {
    id: "q1_10",
    category: "week1",
    question: "A sign is best defined in linguistic semantics as:",
    options: {
      A: "Only a written symbol that represents an alphabet.",
      B: "A purely mental image with no physical realization.",
      C: "The intersection or relationship of form (concrete) and meaning (mental/cognitive).",
      D: "A natural consequence of weather patterns."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Signs can take many forms: words, numbers, sounds, photographs, paintings, and road signs.",
      B: "Incorrect. A sign must have a concrete form (writing, sound, gestures) linked to a mental meaning.",
      C: "Correct! The sources state that a sign is 'neither form nor meaning, but simultaneously both: the intersection or the relationship of form and meaning' where form is concrete and meaning is mental/cognitive.",
      D: "Incorrect. While some natural events act as indices (smoke for fire), linguistic signs are structured systems of humankind."
    }
  },

  // PART 2 (WEEKS 2 & 3): UTTERANCE, SENTENCE, PROPOSITION
  {
    id: "q2_1",
    category: "week2_3",
    question: "What is an UTTERANCE in linguistic semantics?",
    options: {
      A: "An abstract grammatical string of words stored in a dictionary.",
      B: "Any stretch of talk by one person before and after which there is silence on the part of that person.",
      C: "A unit of thought that cannot be spoken aloud.",
      D: "A sentence that has been translated into another language."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. That describes a sentence conceived abstractly, not an utterance.",
      B: "Correct! The sources define an utterance as 'any stretch of talk, by one person, before and after which there is silence on the part of that person.'",
      C: "Incorrect. An utterance is a physical, spoken event, so it must be voiced, not silent.",
      D: "Incorrect. A translation is just another sentence representing the same proposition, not the physical act of uttering."
    }
  },
  {
    id: "q2_2",
    category: "week2_3",
    question: "Which of the following is a key feature of an UTTERANCE?",
    options: {
      A: "It is abstract and has no physical existence.",
      B: "It is a physical event, is ephemeral, and 'dies on the wind'.",
      C: "It is always grammatically complete.",
      D: "It is not tied to any particular time or place."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Utterances are physical events (sound waves), not abstract entities.",
      B: "Correct! The sources state that utterances are physical events, are ephemeral, and 'die on the wind'.",
      C: "Incorrect. An utterance can consist of a single word ('Hello') or incomplete sentence fragments ('Not much').",
      D: "Incorrect. Because it is a physical event, an utterance is always tied to a particular speaker, time, and place."
    }
  },
  {
    id: "q2_3",
    category: "week2_3",
    question: "What is a SENTENCE in linguistic semantics?",
    options: {
      A: "A physical event produced by vocal cords.",
      B: "A string of words put together by the grammatical rules of a language, conceived abstractly.",
      C: "A private mental process unique to an individual.",
      D: "A single spoken sound bounded by silence."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. A physical event produced by vocal cords is an utterance, not a sentence.",
      B: "Correct! The sources define a sentence as 'conceived abstractly, a string of words put together by the grammatical rules of a language.'",
      C: "Incorrect. A private mental process describes a thought, whereas a sentence is an abstract linguistic entity.",
      D: "Incorrect. A spoken sound bounded by silence is an utterance."
    }
  },
  {
    id: "q2_4",
    category: "week2_3",
    question: "Linguistic conventions dictate how we represent sentences and utterances in written text. Which of the following is correct?",
    options: {
      A: "Sentences are written between double quotation marks, while utterances are in bold.",
      B: "Utterances are written between single quotation marks (e.g., 'Hello'), while sentences are italicized.",
      C: "Sentences are written in ALL CAPS, while utterances are lowercase.",
      D: "There is no convention; they are written identically."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Double quotes and bold are not the standard conventions defined in semantics textbooks.",
      B: "Correct! The sources state: 'anything written between single quotation marks represents an utterance, and anything italicized represents a sentence.'",
      C: "Incorrect. ALL CAPS is not the convention for sentences.",
      D: "Incorrect. Making a careful distinction in written text is vital, which is why these conventions are adopted."
    }
  },
  {
    id: "q2_5",
    category: "week2_3",
    question: "Consider the spoken expression 'Not much'. Can this represent an utterance? Can it represent a sentence?",
    options: {
      A: "It is neither an utterance nor a sentence.",
      B: "It is a sentence, but it cannot be an utterance.",
      C: "It is an utterance, but it is not a sentence.",
      D: "It is both a sentence and an utterance."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. It is a physical event when spoken, so it is an utterance.",
      B: "Incorrect. It lacks a verb and is grammatically incomplete, so it is not a sentence.",
      C: "Correct! When spoken, 'Not much' is an utterance (a physical event). However, it is not a sentence because it is grammatically incomplete (not a complete string of words expressing a complete thought).",
      D: "Incorrect. It is not a sentence because it lacks grammatical completeness."
    }
  },
  {
    id: "q2_6",
    category: "week2_3",
    question: "If a person speaks the sentence *Sincerity may frighten the boy* twice, how many sentences and how many utterances are involved?",
    options: {
      A: "One sentence and one utterance.",
      B: "Two sentences and one utterance.",
      C: "One sentence and two utterances.",
      D: "Two sentences and two utterances."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Two spoken events occurred, so there must be two utterances.",
      B: "Incorrect. Only one abstract sentence template was used, and two physical events took place.",
      C: "Correct! The same abstract sentence was realized in two separate physical events, resulting in one sentence and two distinct utterances.",
      D: "Incorrect. A sentence is an abstract entity; speaking it twice does not create a second sentence, only a second utterance."
    }
  },
  {
    id: "q2_7",
    category: "week2_3",
    question: "Why does it NOT make sense to say that a sentence was spoken in a particular accent (e.g., a Scottish accent)?",
    options: {
      A: "Because sentences can only be written, never spoken.",
      B: "Because accent and voice quality belong strictly to the physical realization (the utterance), not to the abstract sentence itself.",
      C: "Because all sentences are automatically in standard English.",
      D: "Because Scottish accents are not recognized in linguistics."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sentences can be realized as spoken utterances, but the accent belongs to the realization.",
      B: "Correct! The sources state: 'Accent and voice quality belong strictly to the utterance, not to the sentence uttered.' A sentence itself is only associated with phonetic characteristics through a speaker's act of uttering it.",
      C: "Incorrect. Sentences can exist in any language or dialect, not just standard English.",
      D: "Incorrect. All regional accents are recognized and studied in linguistics, but accent is a feature of utterances."
    }
  },
  {
    id: "q2_8",
    category: "week2_3",
    question: "What is a PROPOSITION in linguistic semantics?",
    options: {
      A: "A physical sound wave produced by a speaker.",
      B: "The part of the meaning of the utterance of a declarative sentence which describes some state of affairs.",
      C: "A grammatical rule that combines nouns and verbs.",
      D: "A sentence that has no meaning."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sound waves are utterances, not propositions.",
      B: "Correct! The sources define a proposition as 'that part of the meaning of the utterance of a declarative sentence which describes some state of affairs.'",
      C: "Incorrect. Grammatical rules are part of syntax, not propositions.",
      D: "Incorrect. Propositions represent the core meaning of declarative sentences, which must be meaningful."
    }
  },
  {
    id: "q2_9",
    category: "week2_3",
    question: "Which of the following is true regarding the relationship between propositions and languages?",
    options: {
      A: "A proposition belongs to a specific language and cannot be translated.",
      B: "Propositions, unlike sentences, do not belong to any particular language.",
      C: "Propositions only exist in English and French.",
      D: "Propositions change their truth values when translated."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Translating a sentence preserves the proposition; therefore, it is not bound to one language.",
      B: "Correct! The sources state: 'Propositions, unlike sentences, cannot be said to belong to any particular language.' Perfect translations (like *I am cold* and *J'ai froid*) correspond to the same proposition.",
      C: "Incorrect. Propositions exist in all human languages.",
      D: "Incorrect. A proposition's truth value remains constant across its translations because they describe the same state of affairs."
    }
  },
  {
    id: "q2_10",
    category: "week2_3",
    question: "How do we test if two sentences express DIFFERENT propositions?",
    options: {
      A: "If they have a different number of words.",
      B: "If there is any conceivable set of circumstances in which one sentence is true, while the other is false.",
      C: "If one is written in print and the other in cursive.",
      D: "If one has a question mark and the other does not."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sentences with different numbers of words can express the same proposition (e.g., *John gave Mary a book* and *Mary was given a book by John*).",
      B: "Correct! The sources state: 'if there is any conceivable set of circumstances in which one sentence is true, while the other is false, we can be sure that they express different propositions.'",
      C: "Incorrect. Typeface or script has no impact on semantic propositions.",
      D: "Incorrect. While sentence type (declarative vs. interrogative) affects assertion, the fundamental proposition test is based on truth values under specific circumstances."
    }
  },

  // PART 3 (WEEKS 4 & 5): SENSE, REFERENCE, DENOTATION
  {
    id: "q3_1",
    category: "week4_5",
    question: "What is DENOTATION in semantics?",
    options: {
      A: "The relationship between words inside a dictionary.",
      B: "The part of reality (in the world) that a linguistic expression is linked to.",
      C: "An abstract idea that cannot be pointed to.",
      D: "The phonetic spelling of a word."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Relationships inside the language/dictionary describe 'sense', not denotation.",
      B: "Correct! The sources state: 'The denotation of an expression is the part of reality the expression is linked to' (e.g., the word 'cow' denotes cows in the world).",
      C: "Incorrect. Denotations are linked to reality, and can often be pointed to (ostensive definition).",
      D: "Incorrect. Phonetic spelling is part of phonology, not semantics."
    }
  },
  {
    id: "q3_2",
    category: "week4_5",
    question: "What is the SENSE of an expression?",
    options: {
      A: "The physical objects in the world that the expression points to.",
      B: "Its place in a system of semantic relationships with other expressions in the language.",
      C: "The loudness of the voice when uttering the expression.",
      D: "The truth value of the sentence in a given year."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The physical objects in the world refer to the denotation or referent.",
      B: "Correct! The sources define the sense of an expression as 'its place in a system of semantic relationships with other expressions in the language' (relationships inside the language).",
      C: "Incorrect. Loudness is a physical feature of an utterance, not the semantic sense of an expression.",
      D: "Incorrect. Truth values relate to propositions, whereas sense is a properties of lexical items and expressions."
    }
  },
  {
    id: "q3_3",
    category: "week4_5",
    question: "What is the relationship between SENSE and DENOTATION?",
    options: {
      A: "They are completely identical concepts.",
      B: "Denotation is more basic than sense, and sense is dependent on denotation.",
      C: "Sense is more basic than denotation, and denotation is dependent on sense.",
      D: "Sense only applies to verbs, while denotation only applies to nouns."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Sense is internal to language (word relationships); denotation is external (language-to-world).",
      B: "Incorrect. Senses can exist without any denotation in reality, meaning denotation is not the primary basis.",
      C: "Correct! The sources state: 'Sense is more basic than denotation, and denotation is dependent on sense.'",
      D: "Incorrect. Both nouns and verbs (and other parts of speech) have sense and can denote actions/entities."
    }
  },
  {
    id: "q3_4",
    category: "week4_5",
    question: "In the sentence 'My son is in the beech tree', the relationship between the expression 'my son' and the actual boy in the tree is called:",
    options: {
      A: "Sense",
      B: "Reference",
      C: "Syncategorematic link",
      D: "Semantic anomaly"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sense is the abstract meaning inside the language system, not the connection to a specific boy.",
      B: "Correct! Reference is the relationship between parts of a language (referring expressions) and things outside the language in the world.",
      C: "Incorrect. 'Syncategorematic' refers to grammatical words like 'if' and 'and', which do not have referents.",
      D: "Incorrect. This sentence is perfectly normal and lacks any semantic anomaly."
    }
  },
  {
    id: "q3_5",
    category: "week4_5",
    question: "What are the three components of the 'Semantic Triangle' as introduced in the sources?",
    options: {
      A: "Utterance, Sentence, Proposition",
      B: "Symbol, Concept (Thought), Referent",
      C: "Icon, Index, Symbol",
      D: "Noun, Verb, Adjective"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. These are basic levels of semantic structure, not the semantic triangle.",
      B: "Correct! The semantic triangle describes how a Symbol (word) symbolizes a Concept (thought in the brain), which refers to a Referent (physical object in the world).",
      C: "Incorrect. These are the three types of signs, not the parts of the semantic triangle.",
      D: "Incorrect. These are grammatical parts of speech."
    }
  },
  {
    id: "q3_6",
    category: "week4_5",
    question: "Which of the following is an example of an expression with VARIABLE REFERENCE?",
    options: {
      A: "The moon",
      B: "The People's Republic of China",
      C: "The president of the USA",
      D: "Angola"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. 'The moon' has constant reference because it refers to the same celestial body in normal everyday conversation.",
      B: "Incorrect. 'The People's Republic of China' refers to a specific country and has constant reference.",
      C: "Correct! 'The president of the USA' has variable reference because its referent changes depending on time (e.g. Bill Clinton in 1996, George W. Bush in 2007, Joe Biden in 2021).",
      D: "Incorrect. 'Angola' is a proper name of a nation and has constant reference."
    }
  },
  {
    id: "q3_7",
    category: "week4_5",
    question: "Which of the following expressions is an example of CONSTANT REFERENCE?",
    options: {
      A: "This page",
      B: "The sun",
      C: "My left ear",
      D: "The table in the corner"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'This page' varies depending on which page of which book the speaker is pointing to.",
      B: "Correct! 'The sun' has constant reference because in normal everyday discourse, it always refers to the same unique star.",
      C: "Incorrect. 'My left ear' has variable reference because it refers to a different ear depending on who is saying it.",
      D: "Incorrect. 'The table in the corner' changes its referent depending on the room the conversation occurs in."
    }
  },
  {
    id: "q3_8",
    category: "week4_5",
    question: "Words like 'almost', 'probable', 'and', 'if', and 'above' are examples of expressions that have:",
    options: {
      A: "Constant reference only",
      B: "Variable reference only",
      C: "Sense but no reference (one-to-nothing relationship)",
      D: "No sense and no reference"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. These words do not refer to any physical entities in the world.",
      B: "Incorrect. They do not have variable referents; they do not have referents at all.",
      C: "Correct! The sources state: 'every expression that has meaning has sense, but not every expression has reference.' These words have sense/meaning but do not refer to anything in the physical world.",
      D: "Incorrect. They must have sense, otherwise they would be meaningless noises."
    }
  },
  {
    id: "q3_9",
    category: "week4_5",
    question: "In semantics, a 'referring expression' is defined as:",
    options: {
      A: "Any word that appears in a dictionary.",
      B: "Any expression used in an utterance to refer to something or someone with a particular referent in mind.",
      C: "Only proper nouns.",
      D: "Words that connect sentences together, like 'because'."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Many dictionary words (like 'and', 'if') cannot be referring expressions.",
      B: "Correct! The sources define a referring expression as 'any expression used in an utterance to refer to something or someone... used with a particular referent in mind.'",
      C: "Incorrect. Pronouns ('he', 'it') and descriptive noun phrases ('the man who lives next door') can also be referring expressions.",
      D: "Incorrect. Connectives are syncategorematic and do not have referents."
    }
  },
  {
    id: "q3_10",
    category: "week4_5",
    question: "The title 'Miss Egypt' has a constant sense (the title itself) but its denotation/referents vary over time. This illustrates that:",
    options: {
      A: "Sense is dependent on denotation.",
      B: "Sense is prior to and more basic than denotation.",
      C: "Titles are not recognized as grammatical expressions.",
      D: "Variables cannot be used in natural language."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. If sense depended on denotation, changing the referent would change the definition/sense of the title, which it does not.",
      B: "Correct! The course shows that since we understand the abstract sense of 'Miss Egypt', we can identify different physical referents for it across different years. Hence, sense is prior to denotation.",
      C: "Incorrect. Titles are noun phrases and are perfectly valid grammatical expressions.",
      D: "Incorrect. Natural language frequently uses variables (like pronouns and titles) to refer to different objects."
    }
  },

  // PART 4 (WEEKS 5 & 6): LEXICAL AND STRUCTURAL MEANING
  {
    id: "q4_1",
    category: "week5_6",
    question: "What are the two components that make up the meaning of a complex expression like a sentence?",
    options: {
      A: "Phonetic meaning and syntactic meaning.",
      B: "Lexical meaning (individual words) and Structural meaning (how words are combined).",
      C: "Symbolic meaning and indexical meaning.",
      D: "Stem meaning and affix meaning."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Phonetics deals with sounds, not the semantic meaning of sentences.",
      B: "Correct! The sources state that the meaning of a complex expression is composed of: 1. Lexical meaning (meaning of individual words), and 2. Structural meaning (meaning of the way words are combined).",
      C: "Incorrect. These are classes of signs, not sentence-meaning components.",
      D: "Incorrect. Stems and affixes are components of morpheme meaning, not whole sentences."
    }
  },
  {
    id: "q4_2",
    category: "week5_6",
    question: "The property of language that allows a finite vocabulary to generate infinitely many sentences by embedding phrases inside other phrases of the same kind is called:",
    options: {
      A: "Compositionality",
      B: "Recursiveness",
      C: "Ostensive definition",
      D: "Modality"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Compositionality is the property of being composed from parts, not the mechanism of infinite generation.",
      B: "Correct! Recursiveness is the property of embedding a phrase inside another phrase of the same kind, allowing sentences to be extended in length indefinitely.",
      C: "Incorrect. Ostensive definition is defining a word by pointing to its denotation.",
      D: "Incorrect. Modality expresses qualifications like possibility or necessity."
    }
  },
  {
    id: "q4_3",
    category: "week5_6",
    question: "Which of the following represents a recursive addition that lengthens a sentence?",
    options: {
      A: "Changing *The car broke down* to *A car broke down*.",
      B: "Changing *The car broke down* to *The car broke down because Tom forgot to fill the tank*.",
      C: "Changing *The car broke down* to *The blue car broke down*.",
      D: "Translating *The car broke down* to French."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. This is a lexical substitution (determiner swap), not recursion.",
      B: "Correct! By adding a subordinate clause ('because...'), a new sentence is formed containing another clause, showing syntactic recursion.",
      C: "Incorrect. Adding an adjective ('blue') modifies the noun but is not a clause-level recursive embedding.",
      D: "Incorrect. Translation changes the language form but does not represent structural recursion within a language."
    }
  },
  {
    id: "q4_4",
    category: "week5_6",
    question: "What is Compositionality in semantics?",
    options: {
      A: "The rule that sentences must contain exactly seven words.",
      B: "The property that linguistic meaning is composed from its parts.",
      C: "The requirement that all semantic rules must match dictionary entries.",
      D: "The study of how authors write essays."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sentences can be of any length; there is no seven-word limit.",
      B: "Correct! Compositionality is defined as the property of being composed from parts (i.e. the meaning of the whole is determined by the meanings of its parts and their rules of combination).",
      C: "Incorrect. Compositionality includes syntactic combination rules, which go beyond individual dictionary entries.",
      D: "Incorrect. Writing essays is literary composition, not linguistic semantic compositionality."
    }
  },
  {
    id: "q4_5",
    category: "week5_6",
    question: "What are CATEGOREMATIC expressions?",
    options: {
      A: "Grammatical words like 'and', 'if', and 'because'.",
      B: "Descriptive words (nouns, adjectives, adverbs, and verbs) whose senses provide a basis for categorization.",
      C: "Bound morphemes like the past-tense suffix '-ed'.",
      D: "Sentences that have no truth value."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'And', 'if', and 'because' are syncategorematic words.",
      B: "Correct! Categorematic expressions include the vast majority of words (nouns, adjectives, adverbs, verbs) and provide a basis for categorization (e.g. 'blue' categories blue things).",
      C: "Incorrect. Bound morphemes are syncategorematic units.",
      D: "Incorrect. Categorematic relates to word categorization, not sentence truth values."
    }
  },
  {
    id: "q4_6",
    category: "week5_6",
    question: "What are SYNCATEGOREMATIC expressions?",
    options: {
      A: "Descriptive words like 'cat' or 'run' that denote parts of reality.",
      B: "Words and inflections that do not have independent, easily paraphrasable meanings on their own, but serve to modify or combine other expressions.",
      C: "Proper nouns that refer to famous historical figures.",
      D: "Any sentence that contains a metaphor."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Words that denote parts of reality are categorematic.",
      B: "Correct! Syncategorematic expressions (such as conjunctions, prepositions, and grammatical inflections) lack independent referential meaning and must be defined in the context of the constructions they appear in.",
      C: "Incorrect. Proper nouns are referring expressions, which are categorematic.",
      D: "Incorrect. Syncategorematic is a classification of individual words and morphemes, not entire sentences."
    }
  },
  {
    id: "q4_7",
    category: "week5_6",
    question: "Tense markers (like '-ed' or 'will') are syncategorematic because:",
    options: {
      A: "They have a clear physical referent in the world that we can point to.",
      B: "They locate a state of affairs in time but do not stand alone; they must combine with a sentence to be interpreted.",
      C: "They are nouns.",
      D: "They can be translated into any language using ostensive definitions."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Tense is an abstract temporal relationship; you cannot physically point to 'past tense'.",
      B: "Correct! The sources state: 'Tense expressions (-ed, -s, will) do not stand alone, but must combine with a sentence to be given a particular interpretation.'",
      C: "Incorrect. Tense markers are grammatical affixes or auxiliary verbs, not nouns.",
      D: "Incorrect. You cannot use ostensive definitions (pointing) to define grammatical tense."
    }
  },
  {
    id: "q4_8",
    category: "week5_6",
    question: "Modal auxiliary verbs like 'might' and 'must' are used to:",
    options: {
      A: "Indicate if a noun is masculine or feminine.",
      B: "Express a qualification on whether or not there is a certain state of affairs.",
      C: "Connect nouns to prepositions in a sentence.",
      D: "Represent a physical object in the world."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Gender is marked by specific semantic features (e.g. MALE/FEMALE), not modal verbs.",
      B: "Correct! The sources state that the modal (might, must) expresses a qualification on whether or not there is such a state of affairs.",
      C: "Incorrect. Prepositions connect nouns; modal verbs modify the predicate.",
      D: "Incorrect. Modals are abstract syncategorematic words and do not refer to physical objects."
    }
  },
  {
    id: "q4_9",
    category: "week5_6",
    question: "Under the classification of morpheme meanings, 'free stems' (like 'man', 'cat', 'blue') represent:",
    options: {
      A: "Syncategorematic units with abstract meanings.",
      B: "Categorematic units with concrete meanings.",
      C: "Linguistic variables with no sense.",
      D: "Bound affixes."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Free stems have independent descriptive content, making them categorematic, not syncategorematic.",
      B: "Correct! Free stems as lexical words are categorematic units and have concrete meanings (descriptive content).",
      C: "Incorrect. They have clear senses (as found in dictionaries).",
      D: "Incorrect. Free stems can stand alone as words, whereas affixes are bound morphemes."
    }
  },
  {
    id: "q4_10",
    category: "week5_6",
    question: "Under the classification of morpheme meanings, 'bound affixes' (like the past tense suffix '{-ed}' or plural '{-s}') represent:",
    options: {
      A: "Categorematic units with concrete meanings.",
      B: "Syncategorematic units with abstract meanings.",
      C: "Free stems.",
      D: "Proper nouns."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Affixes do not have independent concrete descriptive meanings.",
      B: "Correct! Bound affixes are syncategorematic units with abstract grammatical meanings.",
      C: "Incorrect. They are bound, meaning they cannot stand alone, unlike free stems.",
      D: "Incorrect. Proper nouns are words like 'John', not grammatical affixes."
    }
  },

  // PART 5 (WEEKS 6 & 8): LEXICAL SENSES & RELATIONS
  {
    id: "q5_1",
    category: "week6_8",
    question: "The sentence 'The chicken is ready to eat' is semantically interesting because it exhibits:",
    options: {
      A: "Complementary antonymy",
      B: "Ambiguity (it has two distinct senses)",
      C: "Semantic anomaly",
      D: "Constant reference"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Antonymy relates to opposites (like dead/alive), not multi-meaning sentences.",
      B: "Correct! The sentence is ambiguous because it can mean: 1. The chicken is ready to consume food, or 2. The cooked chicken is prepared for someone to eat.",
      C: "Incorrect. It is a perfectly normal sentence with two valid interpretations, not an anomalous contradiction.",
      D: "Incorrect. The referent of 'the chicken' is variable depending on context, and the sentence itself has different senses."
    }
  },
  {
    id: "q5_2",
    category: "week6_8",
    question: "What are COMPLEMENTARY antonyms?",
    options: {
      A: "Opposites that allow a neutral middle ground (e.g. hot/cold).",
      B: "Opposites where the entities they apply to must be either one thing or the other, with no middle ground (e.g. dead/alive).",
      C: "Words that have the exact same spelling but different meanings.",
      D: "Words that are polite to each other."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Opposites with a middle ground are polar antonyms, not complementaries.",
      B: "Correct! Complementary antonyms (e.g. open/closed, dead/alive, hit/miss) divide a domain such that an entity is either one or the other.",
      C: "Incorrect. Words with same spelling but different meanings are homonyms or polysemes.",
      D: "Incorrect. This is a non-linguistic, literal interpretation of the word 'complementary'."
    }
  },
  {
    id: "q5_3",
    category: "week6_8",
    question: "Which of the following is a SEMANTIC ANOMALY (indicated by the `#` symbol in linguistics)?",
    options: {
      A: "#The water is neither hot nor cold.",
      B: "#The door is neither open nor closed.",
      C: "#He is neither short nor tall.",
      D: "#The performance was neither good nor bad."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Hot/cold are polar antonyms, so water can be lukewarm (neutral middle). This is not anomalous.",
      B: "Correct! Open/closed are complementary antonyms. A door must be either open or closed (even a slightly open door is open). Asserting it is neither is a semantic anomaly.",
      C: "Incorrect. Short/tall are polar antonyms, so someone can be of average height. This is not anomalous.",
      D: "Incorrect. Good/bad are polar antonyms, so a performance can be mediocre. This is not anomalous."
    }
  },
  {
    id: "q5_4",
    category: "week6_8",
    question: "What are POLAR antonyms?",
    options: {
      A: "Opposites that relate to the North and South poles.",
      B: "Opposites based on a scale with opposite poles and a neutral middle zone (e.g. hot/cold).",
      C: "Words that cannot have comparative forms.",
      D: "Binary terms with no middle ground, like dead/alive."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Polar refers to logical poles on a scale, not geographic poles.",
      B: "Correct! Polar antonyms (e.g., hot/cold, tall/short) describe a scale with a neutral middle zone.",
      C: "Incorrect. Polar antonyms are characterized by the generality of their comparative forms (e.g. taller, shorter).",
      D: "Incorrect. Binary terms with no middle ground are complementary antonyms."
    }
  },
  {
    id: "q5_5",
    category: "week6_8",
    question: "In polar antonyms, one term is often the 'neutral' term. What does this mean?",
    options: {
      A: "It means the word cannot be used in questions.",
      B: "It is the term that stands for the entire scale in simple questions, carrying no bias (e.g., 'long' in 'How long is it?').",
      C: "It is a word that has no antonym.",
      D: "It is the word representing the negative end of the scale."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Neutral terms are frequently used in questions.",
      B: "Correct! The question 'How long is it?' is neutral and has no bias, whereas 'How short is it?' expects the object to be short. Thus, 'long' is the neutral term.",
      C: "Incorrect. Neutral terms still have active antonyms (e.g., long/short).",
      D: "Incorrect. The neutral term is typically the positive or unmarked end of the scale (e.g. long, tall, heavy)."
    }
  },
  {
    id: "q5_6",
    category: "week6_8",
    question: "What are 'pseudocomparatives' in polar antonyms?",
    options: {
      A: "Comparatives that are grammatically incorrect.",
      B: "Comparisons like 'A is longer than B' which can be used naturally even if both objects are short.",
      C: "Comparisons that only apply to temperatures.",
      D: "Words that look like adjectives but function as verbs."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Pseudocomparatives are perfectly grammatical and natural.",
      B: "Correct! Polar comparatives are called pseudocomparatives because saying 'A is longer than B' is natural even if both are extremely short.",
      C: "Incorrect. They apply to all scale properties like length, weight, height, speed, etc.",
      D: "Incorrect. They are standard comparative adjective phrases."
    }
  },
  {
    id: "q5_7",
    category: "week6_8",
    question: "Word senses can be analyzed in terms of 'semantic features' (components). Under this system, what features define the word 'stallion'?",
    options: {
      A: "[+HUMAN, +MALE, +ADULT]",
      B: "[+EQUINE, +MALE, +ADULT] (or [+HORSE, +MALE, +ADULT])",
      C: "[+EQUINE, +FEMALE, +JUVENILE]",
      D: "[+PORCINE, +MALE, +ADULT]"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. [+HUMAN] defines 'man', not 'stallion'.",
      B: "Correct! A stallion is defined as an adult male horse. Its semantic features are [+EQUINE] (or [+HORSE]), [+MALE], and [+ADULT].",
      C: "Incorrect. A female juvenile horse is a filly, not a stallion.",
      D: "Incorrect. [+PORCINE] refers to pigs; an adult male pig is a boar."
    }
  },
  {
    id: "q5_8",
    category: "week6_8",
    question: "Why are features of 'bird' (like 'flies' or 'sings') classified as COGNITIVE CONCEPTS rather than strict SEMANTIC FEATURES of the word sense?",
    options: {
      A: "Because all birds fly and sing without exception.",
      B: "Because the statement 'This is a bird' does not strictly entail 'This flies' (e.g. penguins are birds but do not fly).",
      C: "Because 'bird' is a syncategorematic word.",
      D: "Because cognitive concepts are written in capital letters."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Penguins, ostriches, and injured birds do not fly, so it is not an absolute rule.",
      B: "Correct! A semantic feature must hold true in all instances of use (e.g. 'piglet' strictly entails 'juvenile'). Since a bird doesn't strictly have to fly, 'flies' is a feature of a cognitive prototype, not a semantic feature.",
      C: "Incorrect. 'Bird' is a noun, which is a categorematic word.",
      D: "Incorrect. Fasing in capitals is a notation for semantic features, not a differentiator of cognitive concepts."
    }
  },
  {
    id: "q5_9",
    category: "week6_8",
    question: "How did Ludwig Wittgenstein describe the word 'game'?",
    options: {
      A: "As having a single, precise semantic feature shared by all games.",
      B: "In terms of 'family resemblances', where games share overlapping clusters of features but no single feature is common to all.",
      C: "As a syncategorematic grammatical connector.",
      D: "As a word with constant reference."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Wittgenstein argued that there is no single feature (like rules, competition, or amusement) that is shared by all games.",
      B: "Correct! Wittgenstein proposed that the activities we call games are related by 'family resemblances', just like physical features among family members.",
      C: "Incorrect. 'Game' is a noun and a categorematic word.",
      D: "Incorrect. The referents of 'game' are highly diverse and variable."
    }
  },
  {
    id: "q5_10",
    category: "week6_8",
    question: "What is a POLYSEMOUS word?",
    options: {
      A: "A word that has only one sense.",
      B: "A word that has two or more distinct but related meanings (e.g. 'fork').",
      C: "A word that is written backwards.",
      D: "A word that exists in only one language."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. A word with only one sense is monosemous.",
      B: "Correct! A polysemous word has multiple related meanings (e.g., 'fork' can refer to a physical tool with tines or a Y-shape split in a road).",
      C: "Incorrect. Writing backwards is an orthographic play, not polysemy.",
      D: "Incorrect. Polysemy is a common property found in all human languages."
    }
  },

  // PART 6 (WEEKS 9 & 10): REFERRING EXPRESSIONS
  {
    id: "q6_1",
    category: "week9_10",
    question: "Under what condition is an expression classified as a 'referring expression' in a particular utterance?",
    options: {
      A: "It must be listed in a standard dictionary.",
      B: "The speaker must use it to refer to something or someone with a particular referent in mind.",
      C: "It must be written in italics.",
      D: "It must contain a verb."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Dictionary listing makes it a word, but context in an utterance determines if it refers.",
      B: "Correct! A referring expression requires that the speaker has a particular referent in mind on that occasion of utterance.",
      C: "Incorrect. Italics is the written convention for representing sentences, not referring expressions.",
      D: "Incorrect. Referring expressions are typically noun phrases, which do not need to contain verbs."
    }
  },
  {
    id: "q6_2",
    category: "week9_10",
    question: "In which of the following utterances is 'Fred' a referring expression?",
    options: {
      A: "'There is no Fred at this address.'",
      B: "'Fred hit me!'",
      C: "'He wants to name his dog Fred.'",
      D: "'The name Fred is of Germanic origin.'"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Here, 'Fred' does not refer to a specific person; the speaker is denying the existence of anyone named Fred at that location.",
      B: "Correct! In 'Fred hit me!', the speaker has a particular individual in mind when uttering the name 'Fred'.",
      C: "Incorrect. The speaker is referring to the name template itself, not a specific living referent.",
      D: "Incorrect. This refers to the linguistic word form, not a specific person."
    }
  },
  {
    id: "q6_3",
    category: "week9_10",
    question: "Can an indefinite noun phrase (like 'a man') function as a referring expression?",
    options: {
      A: "No, indefinite noun phrases can never be referring expressions.",
      B: "Yes, they are always referring expressions regardless of context.",
      C: "Yes, depending on context (e.g. referring in 'A man was in here looking for you' but not in 'no bigger than a man's hand').",
      D: "Only if the noun phrase is translated into French."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Indefinite NPs frequently function as referring expressions in declarative past-tense contexts.",
      B: "Incorrect. In many contexts (like conditional or generic statements), they are non-referring.",
      C: "Correct! Indefinite NPs can have a referring interpretation depending on context and speaker intent. 'A man' in 'A man was in here looking for you last night' refers to a specific man, whereas in generic descriptions it does not.",
      D: "Incorrect. Language translation does not govern the semantic properties of noun phrases."
    }
  },
  {
    id: "q6_4",
    category: "week9_10",
    question: "How can we disambiguate an indefinite noun phrase to force a referring interpretation?",
    options: {
      A: "By writing it in capital letters.",
      B: "By adding the word 'certain' immediately after the indefinite article (e.g. 'a certain car').",
      C: "By converting it to a plural form.",
      D: "By removing all adjectives from the sentence."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Capitalization does not change semantic referential status.",
      B: "Correct! The sources state that ambiguities in indefinite NPs can be resolved by using the word 'certain' (e.g., 'John is looking for a certain car' forces a referring interpretation).",
      C: "Incorrect. Plurals can still be ambiguous (e.g. 'forty buses').",
      D: "Incorrect. Adjectives often help narrow down referents, so removing them would not help force a referring interpretation."
    }
  },
  {
    id: "q6_5",
    category: "week9_10",
    question: "In the sentence 'Every man who owns a donkey beats it', why is the pronoun 'it' NOT a referring expression?",
    options: {
      A: "Because 'it' is a preposition, not a pronoun.",
      B: "Because 'it' functions as a bound variable whose referent changes for every man; there is no single donkey in mind.",
      C: "Because donkeys are animals, not humans.",
      D: "Because the sentence is grammatically incorrect."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'It' is grammatically a pronoun.",
      B: "Correct! The sources explain that in this type of sentence, 'it' is bound by the quantifier and does not refer to a particular, unique donkey in the world.",
      C: "Incorrect. Pronouns referring to animals can be referring expressions (e.g. 'I bought a dog and it is in my yard').",
      D: "Incorrect. The sentence is perfectly grammatical standard English."
    }
  },
  {
    id: "q6_6",
    category: "week9_10",
    question: "A detective walks into a room, finds a brutally mutilated body, and says, 'Smith's murderer must be insane'. If the detective has no idea who committed the crime, is 'Smith's murderer' a referring expression?",
    options: {
      A: "Yes, because it refers to the person who committed the murder.",
      B: "No, because the speaker does not have a particular individual in mind.",
      C: "Only if the murderer is currently in the room.",
      D: "Yes, because 'Smith' is a proper name."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. While there is a person in the world who did it, the speaker has no specific person in mind to refer to.",
      B: "Correct! The sources state that in this context, it could be argued that 'Smith's murderer' is not a referring expression because the speaker would not have a particular person in mind in uttering the words.",
      C: "Incorrect. The murderer's location does not determine the speaker's referential intent.",
      D: "Incorrect. Although 'Smith' is referring, the entire complex noun phrase 'Smith's murderer' is what is being analyzed."
    }
  },
  {
    id: "q6_7",
    category: "week9_10",
    question: "What is an OPAQUE CONTEXT in semantics?",
    options: {
      A: "A sentence that is hard to read because of poor font choices.",
      B: "A part of a sentence where substituting co-referring expressions (which refer to the same object) can yield sentences with different meanings or truth values.",
      C: "A grammatical structure that does not contain a verb.",
      D: "An equative sentence that cannot be reversed."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Opaque is a logical and semantic term, not a visual one.",
      B: "Correct! An opaque context is a part of a sentence where substitution of co-referring expressions (e.g. replacing 'the president' with 'the leader of the party') can change the truth value or meaning of the sentence.",
      C: "Incorrect. Opaque contexts are built around verbs (specifically mental state verbs).",
      D: "Incorrect. Opaque contexts are distinct from the reversal test of equatives."
    }
  },
  {
    id: "q6_8",
    category: "week9_10",
    question: "Which of the following verbs typically create an OPAQUE CONTEXT?",
    options: {
      A: "Physical verbs like 'kick', 'hit', and 'drop'.",
      B: "Mental state/intensional verbs like 'want', 'believe', 'think', and 'wonder about'.",
      C: "Linking verbs like 'is' and 'become'.",
      D: "Prepositions like 'under' and 'behind'."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Physical actions are transparent; if you kick the president, you kicked the party leader, regardless of what you believe.",
      B: "Correct! Verbs like 'want', 'believe', 'think', and 'wonder about' create opaque contexts because they block our view to the actual referent, making belief systems relevant.",
      C: "Incorrect. Linking verbs are transparent in simple declaratives (e.g., identity statements).",
      D: "Incorrect. Prepositions are not verbs and do not create opaque contexts."
    }
  },
  {
    id: "q6_9",
    category: "week9_10",
    question: "What is an EQUATIVE sentence?",
    options: {
      A: "A sentence that contains a mathematical equation.",
      B: "A sentence used to assert the identity of the referents of two referring expressions (i.e. they refer to the same thing).",
      C: "A sentence that has an exclamation mark.",
      D: "A sentence that cannot be translated."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. While equations assert equality, linguistic equative sentences assert identity between noun phrase referents.",
      B: "Correct! An equative sentence asserts that two referring expressions have the exact same referent (e.g., *Tony Blair is the Prime Minister*).",
      C: "Incorrect. Punctuation does not define equative status.",
      D: "Incorrect. Equative sentences can be translated across all human languages."
    }
  },
  {
    id: "q6_10",
    category: "week9_10",
    question: "Why is 'Ted is an idiot' NOT classified as an equative sentence?",
    options: {
      A: "Because 'Ted' is not a referring expression.",
      B: "Because it is a predication sentence that attributes a property ('idiot') to Ted, rather than asserting identity between two referring expressions.",
      C: "Because it contains a negative connotation.",
      D: "Because it cannot be reversed to 'An idiot is Ted'."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'Ted' is a proper name and is a referring expression.",
      B: "Correct! A sentence like 'Ted is an idiot' is a predication. 'An idiot' is not a referring expression here; it is a property being attributed to Ted. Therefore, it is not equative.",
      C: "Incorrect. Politeness or positive/negative connotations do not affect semantic equative classifications.",
      D: "Incorrect. Reversibility is a test, but the fundamental reason is that 'an idiot' is a property predication, not a referring expression."
    }
  },

  // PART 7 (WEEKS 10 & 11): PREDICATES, ARGUMENTS, AND SENSE RELATIONS
  {
    id: "q7_1",
    category: "week10_11",
    question: "What is the PREDICATOR in a simple declarative sentence?",
    options: {
      A: "The subject noun phrase of the sentence.",
      B: "The word (or group of words) which does not belong to any referring expression and makes the most specific contribution to the meaning of the sentence.",
      C: "The auxiliary verb 'be' in all its forms.",
      D: "The punctuation mark at the end of the sentence."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The subject noun phrase is an argument, not the predicator.",
      B: "Correct! The sources define a predicator as the word/group of words which does not belong to any referring expression and makes the most specific semantic contribution (state/process).",
      C: "Incorrect. The verb 'be' (is, was, are, am) is explicitly excluded from being the predicator in the sources.",
      D: "Incorrect. Punctuation has syntactic/orthographic function, not semantic predicator roles."
    }
  },
  {
    id: "q7_2",
    category: "week10_11",
    question: "Identify the PREDICATOR in the sentence: *Mummy is asleep*.",
    options: {
      A: "Mummy",
      B: "is",
      C: "asleep",
      D: "is asleep"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. 'Mummy' is a referring expression (an argument), not the predicator.",
      B: "Incorrect. The copula 'is' is a grammatical linking verb and is not the predicator.",
      C: "Correct! 'asleep' is the predicator because it describes the state Mummy is in and makes the specific semantic contribution.",
      D: "Incorrect. The predicator is the single lexical adjective 'asleep', not the verb phrase 'is asleep'."
    }
  },
  {
    id: "q7_3",
    category: "week10_11",
    question: "Which of the following parts of speech can NOT function as a predicate in a sentence?",
    options: {
      A: "Adjectives (e.g. 'asleep', 'hungry')",
      B: "Verbs (e.g. 'write', 'stink')",
      C: "Conjunctions (e.g. 'and', 'but', 'or')",
      D: "Prepositions (e.g. 'in', 'behind')"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Adjectives can function as predicates (e.g. 'John is hungry').",
      B: "Incorrect. Verbs are the most common predicates (e.g. 'John writes').",
      C: "Correct! Conjunctions (and, but, or) and articles (the, a) cannot serve as predicators, so they are not predicates.",
      D: "Incorrect. Prepositions can function as predicates (e.g. 'John is in the garden' -> 'in' is a 2-place predicate)."
    }
  },
  {
    id: "q7_4",
    category: "week10_11",
    question: "What are semantic 'arguments' in simple declarative sentences?",
    options: {
      A: "The disagreements between the speaker and the listener.",
      B: "The semantic roles played by the referring expressions in the sentence.",
      C: "The tense markers that indicate past and future.",
      D: "The words that cannot be translated."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. In semantics, arguments are logical components of sentence structure, not disputes.",
      B: "Correct! In the semantic analysis of simple sentences, referring expressions play the role of arguments (e.g. in *Juan arrested Pablo*, 'Juan' and 'Pablo' are arguments).",
      C: "Incorrect. Tense markers are syncategorematic modifications, not arguments.",
      D: "Incorrect. Arguments can be translated normally."
    }
  },
  {
    id: "q7_5",
    category: "week10_11",
    question: "What is the 'degree' of a predicate?",
    options: {
      A: "The complexity of the word spelling.",
      B: "The number of arguments it is normally understood to have in simple sentences.",
      C: "The level of temperature it describes.",
      D: "The grammatical tense (past, present, or future)."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Spelling length does not affect predicate degree.",
      B: "Correct! The degree of a predicate is the number of referring expression arguments it takes (e.g. asleep = 1-place, love = 2-place, give = 3-place).",
      C: "Incorrect. Temperature degrees are physical measures, not semantic concepts.",
      D: "Incorrect. Tense is separate from the argument structure degree of the predicate."
    }
  },
  {
    id: "q7_6",
    category: "week10_11",
    question: "What is the degree of the predicate 'under' in the sentence *Your marble is under my chair*?",
    options: {
      A: "Degree one (one-place predicate)",
      B: "Degree two (two-place predicate)",
      C: "Degree three (three-place predicate)",
      D: "It has no degree because it is a preposition."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. A one-place predicate only takes one argument (e.g. 'John is asleep').",
      B: "Correct! 'under' is a two-place predicate because it relates two arguments: 'Your marble' and 'my chair'.",
      C: "Incorrect. A three-place predicate requires three arguments (e.g., 'Herod gave Salome a present').",
      D: "Incorrect. Prepositions act as predicates and have degrees, typically degree two."
    }
  },
  {
    id: "q7_7",
    category: "week10_11",
    question: "What is SYNONYMY in lexical semantics?",
    options: {
      A: "The relationship between two predicates that have opposite meanings.",
      B: "The relationship between two predicates that have the same sense.",
      C: "The relationship between words that sound the same but are spelled differently.",
      D: "The grammatical classification of nouns."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Predicates with opposite meanings are antonyms.",
      B: "Correct! Synonymy is the relationship between two predicates that have the same sense (e.g., stubborn/obstinate, buy/purchase).",
      C: "Incorrect. Words that sound the same but differ in spelling are homophones.",
      D: "Incorrect. Synonymy is a semantic sense relationship, not a syntactic category."
    }
  },
  {
    id: "q7_8",
    category: "week10_11",
    question: "In lexical semantics, HYPONYMY is defined as a relationship where:",
    options: {
      A: "Two words have exactly the same sense.",
      B: "The meaning of one predicate is included in the meaning of the other (e.g. 'scarlet' is included in 'red').",
      C: "A word has two completely unrelated meanings.",
      D: "A sentence contradicts another sentence."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Words with the same sense are synonyms, not hyponyms.",
      B: "Correct! Hyponymy is an inclusion of meaning relationship. 'Red' is the superordinate (hypernym) and 'scarlet' is the hyponym.",
      C: "Incorrect. Words with unrelated meanings are homonyms.",
      D: "Incorrect. Contradiction is a sentence relation, not lexical hyponymy."
    }
  },
  {
    id: "q7_9",
    category: "week10_11",
    question: "Which of the following pairs shows the correct hyponymy direction (hyponym -> superordinate)?",
    options: {
      A: "Tree -> Beech",
      B: "Fear -> Emotion",
      C: "Strike -> Kick",
      D: "Pleasant -> Tasty"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'Tree' is the superordinate and 'Beech' is the hyponym (so the direction is reversed).",
      B: "Correct! 'Fear' is a specific kind of 'Emotion', so 'fear' is a hyponym of 'emotion'.",
      C: "Incorrect. 'Kick' is a specific kind of 'Strike', so the direction is reversed.",
      D: "Incorrect. 'Tasty' is a specific kind of 'Pleasant', so the direction is reversed."
    }
  },
  {
    id: "q7_10",
    category: "week10_11",
    question: "Complete this semantic analogy from the sources: Paraphrase is to SENTENCES as ________ is to PREDICATES.",
    options: {
      A: "Hyponymy",
      B: "Synonymy",
      C: "Entailment",
      D: "Antonymy"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Hyponymy matches with Entailment, representing inclusion, not sameness.",
      B: "Correct! The sources assert: 'Paraphrase is to SENTENCES as SYNONYMY is to PREDICATES.' Both describe the relationship of sameness of meaning.",
      C: "Incorrect. Entailment describes inclusion between sentences, matching with Hyponymy for words.",
      D: "Incorrect. Antonymy represents opposition, not sameness of meaning."
    }
  },

  // PART 1 — EXTRA QUESTIONS (11–20)
  {
    id: "q1_11",
    category: "week1",
    question: "What distinguishes an INDEXICAL sign (index) from iconic and symbolic signs?",
    options: {
      A: "It physically resembles what it represents.",
      B: "It has a natural, causal, or physical connection to its meaning (e.g., smoke indicates fire).",
      C: "Its link to meaning is arbitrary and culturally learned.",
      D: "It can only appear in written language."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Physical resemblance defines an iconic sign, not an index.",
      B: "Correct! An indexical sign points to its meaning through a causal or physical relationship — smoke does not look like fire, but it is naturally produced by it.",
      C: "Incorrect. An arbitrary, culturally learned link defines a symbolic sign.",
      D: "Incorrect. Indices appear in both spoken and non-linguistic contexts (e.g., a wet road is an index of rain)."
    }
  },
  {
    id: "q1_12",
    category: "week1",
    question: "Which of the following is the BEST example of an indexical sign?",
    options: {
      A: "A portrait painting of a person.",
      B: "The written word 'fire'.",
      C: "A rash on the skin indicating an allergic reaction.",
      D: "A red traffic light meaning 'stop'."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. A portrait resembles its subject — that makes it an iconic sign.",
      B: "Incorrect. The written word 'fire' has no physical connection to fire; it is a symbolic sign.",
      C: "Correct! A rash is causally produced by an allergy — it stands as evidence (an index) of the allergic reaction without resembling it.",
      D: "Incorrect. A red traffic light is a symbolic/conventional sign; 'stop' is a culturally agreed association, not a natural causal link."
    }
  },
  {
    id: "q1_13",
    category: "week1",
    question: "Ferdinand de Saussure divided the linguistic sign into two inseparable parts. What are they?",
    options: {
      A: "Denotation and Connotation.",
      B: "Signifier (sound-image / form) and Signified (concept / meaning).",
      C: "Utterance and Sentence.",
      D: "Phoneme and Morpheme."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Denotation and connotation relate to the type of meaning a word carries, not the internal structure of a sign.",
      B: "Correct! Saussure described the sign as a two-sided psychological entity: the signifier (the acoustic image or written form) and the signified (the mental concept it evokes). Neither side exists without the other.",
      C: "Incorrect. Utterance and sentence are the two levels of realisation, not the internal components of a sign.",
      D: "Incorrect. Phoneme and morpheme are units at different levels of linguistic analysis, not Saussure's sign components."
    }
  },
  {
    id: "q1_14",
    category: "week1",
    question: "Why are onomatopoeic words (like 'buzz' or 'meow') considered IMPERFECT iconic signs rather than fully iconic ones?",
    options: {
      A: "Because they are always verbs, never nouns.",
      B: "Because their sound-forms vary across languages (e.g., a dog says 'woof' in English but 'ouaf' in French), showing that even they are partly arbitrary and conventional.",
      C: "Because they are only found in children's literature.",
      D: "Because they have no stable meaning."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Onomatopoeic words can be nouns (e.g., 'cuckoo') or verbs (e.g., 'buzz'); part of speech is irrelevant.",
      B: "Correct! If onomatopoeia were purely iconic, all languages would use the same sound for the same animal or event. The cross-linguistic variation proves the form-meaning link is partly conventional.",
      C: "Incorrect. Onomatopoeia appears across all registers and genres, from poetry to everyday conversation.",
      D: "Incorrect. Onomatopoeic words have clear, stable meanings; it is their degree of iconicity that is in question."
    }
  },
  {
    id: "q1_15",
    category: "week1",
    question: "Which statement about the ARBITRARINESS of the linguistic sign is correct?",
    options: {
      A: "There is always a natural, motivated connection between a word's sound and its meaning.",
      B: "For most linguistic signs, the connection between form (signifier) and meaning (signified) is arbitrary — there is no inherent reason why the sounds /k æ t/ must mean 'cat'.",
      C: "Arbitrariness only applies to written language, not to spoken language.",
      D: "Symbols are arbitrary but icons are the default form for most words."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The relationship is arbitrary for the vast majority of words; motivated connections are the exception (onomatopoeia).",
      B: "Correct! The arbitrariness of the sign is a central Saussurean principle: the sounds that make up a word bear no natural resemblance to or connection with the concept they express.",
      C: "Incorrect. Arbitrariness applies to the form-meaning relationship regardless of whether the sign is spoken or written.",
      D: "Incorrect. Symbolic (arbitrary) signs form the overwhelming majority of human language; iconic words are the rare exception."
    }
  },
  {
    id: "q1_16",
    category: "week1",
    question: "What does it mean to say that human language has 'double articulation' (duality of patterning)?",
    options: {
      A: "Language can be used for two purposes: communication and decoration.",
      B: "Language is organised at two distinct levels: meaningless sound units (phonemes) that combine to form meaningful units (morphemes and words).",
      C: "Every word has exactly two meanings: a literal one and a figurative one.",
      D: "Language can be both written and spoken."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Double articulation is a structural property of language organisation, not a description of its functions.",
      B: "Correct! Double articulation means language is organised at two levels: a lower level of meaningless sounds (phonemes like /p/, /æ/, /t/) that combine into a higher level of meaningful units (words like 'pat').",
      C: "Incorrect. Having two types of meaning is polysemy, not double articulation.",
      D: "Incorrect. The spoken/written distinction is about medium, not structural organisation."
    }
  },
  {
    id: "q1_17",
    category: "week1",
    question: "Which of the following correctly describes the distinction between SENTENCE MEANING and SPEAKER MEANING?",
    options: {
      A: "Sentence meaning is what the speaker intends; speaker meaning is what the grammar dictates.",
      B: "Sentence meaning is the literal, grammatically encoded meaning; speaker meaning is the communicative intent the speaker conveys in a specific context.",
      C: "Sentence meaning only exists in written texts; speaker meaning only exists in speech.",
      D: "They are identical concepts in modern linguistics."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. These definitions are reversed: grammar encodes sentence meaning; speaker intent constitutes speaker meaning.",
      B: "Correct! Sentence meaning is what the sentence means by virtue of its linguistic form. Speaker meaning is what the speaker intends on a particular occasion, which may differ (e.g., 'Can you pass the salt?' is literally a question about ability, but the speaker means a request).",
      C: "Incorrect. Both meaning types apply to both spoken and written language.",
      D: "Incorrect. The distinction between sentence and speaker meaning is foundational to the field and central to separating Semantics from Pragmatics."
    }
  },
  {
    id: "q1_18",
    category: "week1",
    question: "What is a METALANGUAGE in the context of linguistics?",
    options: {
      A: "A language spoken in a different country from the one being studied.",
      B: "Language used to talk about or describe language itself (e.g., using English to define what a 'noun' is).",
      C: "The non-verbal gestures that accompany speech.",
      D: "A language that has no grammatical rules."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The geographic origin of a language is irrelevant to metalinguistic status.",
      B: "Correct! A metalanguage is a language used to describe or analyse another language (the object language). Semantic definitions and linguistic terminology constitute metalanguage.",
      C: "Incorrect. Non-verbal gestures are studied in paralinguistics and semiotics, but they are not a metalanguage.",
      D: "Incorrect. All known human languages have grammatical structure; no natural language is without grammar."
    }
  },
  {
    id: "q1_19",
    category: "week1",
    question: "Which branch of linguistics studies the rules governing how morphemes combine to form words (e.g., how 'un-' + 'happy' + '-ness' forms 'unhappiness')?",
    options: {
      A: "Pragmatics",
      B: "Semantics",
      C: "Morphology",
      D: "Phonetics"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Pragmatics studies how context shapes the interpretation of meaning in communication.",
      B: "Incorrect. Semantics studies meaning; while morphemes have meaning, the rules of their combination are morphological.",
      C: "Correct! Morphology is the branch of linguistics concerned with the internal structure of words — how morphemes are combined according to systematic rules.",
      D: "Incorrect. Phonetics studies the physical properties of speech sounds, not word-formation rules."
    }
  },
  {
    id: "q1_20",
    category: "week1",
    question: "Which of the following is a property that distinguishes HUMAN language from animal communication systems?",
    options: {
      A: "The use of sound waves to transmit signals.",
      B: "Productivity — the ability to produce and understand infinitely many novel sentences from a finite vocabulary and set of rules.",
      C: "The ability to communicate danger to other members of the group.",
      D: "The use of visible signals such as gestures or colours."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Many animals (birds, dolphins, whales) also use sound waves to communicate; this is not uniquely human.",
      B: "Correct! Productivity (or creativity) — the capacity to construct and interpret an unlimited number of novel utterances — is considered a defining feature of human language, enabled by recursion and compositionality.",
      C: "Incorrect. Many animals (vervet monkeys, bees) communicate danger; this alone does not distinguish human language.",
      D: "Incorrect. Visual signals are used by numerous species (e.g., cephalopods, fireflies); they do not define human language uniquely."
    }
  },

  // PART 2 — EXTRA QUESTIONS (11–20)
  {
    id: "q2_11",
    category: "week2_3",
    question: "What is the difference between a sentence TOKEN and a sentence TYPE?",
    options: {
      A: "A token is a written sentence; a type is a spoken sentence.",
      B: "A token is a specific physical instance of a sentence (an individual utterance of it); a type is the abstract pattern of which each instance is a member.",
      C: "A token is the meaning of a sentence; a type is its grammatical form.",
      D: "There is no meaningful distinction between token and type in linguistics."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The token/type distinction is not about medium (written vs. spoken) but about the abstract pattern vs. its concrete instances.",
      B: "Correct! Each time someone utters 'The cat sat on the mat', they produce a new token of the same sentence type. Types are abstract; tokens are physical events.",
      C: "Incorrect. The token/type distinction is not the same as the form/meaning distinction.",
      D: "Incorrect. The token/type distinction is well-established in linguistics and philosophy of language, and is closely related to the sentence/utterance distinction."
    }
  },
  {
    id: "q2_12",
    category: "week2_3",
    question: "Which of the following is a TAUTOLOGY — a sentence that is necessarily true under all possible circumstances?",
    options: {
      A: "*The bachelor is married.*",
      B: "*Either it is raining or it is not raining.*",
      C: "*The cat is on the mat.*",
      D: "*Colourless green ideas sleep furiously.*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'The bachelor is married' is a contradiction — necessarily false, not necessarily true.",
      B: "Correct! 'Either it is raining or it is not raining' is a logical tautology (p ∨ ¬p) — it is true in every conceivable state of affairs.",
      C: "Incorrect. 'The cat is on the mat' is a contingent sentence — it is true in some circumstances and false in others.",
      D: "Incorrect. This is Chomsky's example of a sentence that is grammatical but semantically anomalous, not a tautology."
    }
  },
  {
    id: "q2_13",
    category: "week2_3",
    question: "Which of the following is a SEMANTIC CONTRADICTION — a sentence necessarily false in all circumstances?",
    options: {
      A: "*John is tall.*",
      B: "*It is raining.*",
      C: "*The bachelor is married.*",
      D: "*The door is either open or closed.*"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. 'John is tall' is a contingent sentence — true if John happens to be tall, false otherwise.",
      B: "Incorrect. 'It is raining' is also contingent — true in some worlds, false in others.",
      C: "Correct! A bachelor is by definition an unmarried man, so 'the bachelor is married' contains a built-in contradiction and is necessarily false.",
      D: "Incorrect. 'The door is either open or closed' is actually a tautology for complementary antonyms — necessarily true."
    }
  },
  {
    id: "q2_14",
    category: "week2_3",
    question: "A proposition is said to be TRUE under a given set of circumstances when:",
    options: {
      A: "The sentence expressing it contains more than five words.",
      B: "The state of affairs it describes actually obtains in the world at the relevant time.",
      C: "The speaker is considered a reliable authority.",
      D: "It is written in formal academic style."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sentence length has no bearing on the truth value of a proposition.",
      B: "Correct! A proposition is true when the real-world state of affairs it describes actually holds. This is the foundation of truth-conditional semantics.",
      C: "Incorrect. The credibility of the speaker is a pragmatic concern; it does not determine the semantic truth conditions of a proposition.",
      D: "Incorrect. Register or style of writing is irrelevant to whether a proposition is true or false."
    }
  },
  {
    id: "q2_15",
    category: "week2_3",
    question: "Can an interrogative sentence (a yes/no question) express a proposition?",
    options: {
      A: "Yes — every sentence type expresses a proposition directly.",
      B: "No — propositions are expressed only by declarative sentences; interrogatives and imperatives do not directly express propositions.",
      C: "Only rhetorical questions express propositions.",
      D: "Only questions in the past tense express propositions."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Interrogatives, imperatives, and exclamations do not directly express propositions in the technical semantic sense.",
      B: "Correct! The sources specify that propositions are expressed by declarative sentences. Questions ask whether a proposition is true; imperatives request that a state of affairs be brought about — neither directly asserts a proposition.",
      C: "Incorrect. Rhetorical questions are pragmatically used to assert, but syntactically they are still interrogatives and the propositional content distinction still applies.",
      D: "Incorrect. Tense does not determine whether a sentence type expresses a proposition."
    }
  },

  {
    id: "q2_16",
    category: "week2_3",
    question: "Which pair of sentences expresses the SAME proposition (i.e., are perfect paraphrases of each other)?",
    options: {
      A: "*The dog bit the man* and *The man bit the dog*.",
      B: "*Mary loves John* and *John is loved by Mary*.",
      C: "*John is tall* and *John is short*.",
      D: "*It is raining* and *It is sunny*."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. These sentences describe entirely different events — who bit whom is reversed — so they express different propositions.",
      B: "Correct! An active sentence and its passive equivalent describe the same state of affairs and have the same truth conditions: if one is true, the other must be true, and vice versa.",
      C: "Incorrect. These sentences are contradictory — one is true only when the other is false.",
      D: "Incorrect. These sentences describe mutually exclusive weather conditions and express different propositions."
    }
  },
  {
    id: "q2_17",
    category: "week2_3",
    question: "A PERFORMATIVE utterance (e.g., a judge saying 'I hereby sentence you to five years') is semantically special because:",
    options: {
      A: "It is always in the passive voice.",
      B: "Its utterance constitutes the performance of the act it names, rather than merely describing an existing state of affairs.",
      C: "It contains two separate propositions.",
      D: "It cannot be translated into other languages."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Performatives can be in the active or passive voice.",
      B: "Correct! J.L. Austin distinguished performatives from constatives: saying 'I promise' does not describe a promise — it IS the act of promising. The utterance performs rather than reports.",
      C: "Incorrect. Performatives typically express a single speech act; the number of propositions is not what defines them.",
      D: "Incorrect. Performatives are found in all human languages and are fully translatable."
    }
  },
  {
    id: "q2_18",
    category: "week2_3",
    question: "The sentence *Snow is white* expresses a proposition. Under what condition is this proposition TRUE?",
    options: {
      A: "When it is spoken loudly and clearly.",
      B: "When snow is actually white in the real world.",
      C: "When it is spoken by a scientist.",
      D: "Only when written in English, not when translated."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Volume or clarity of delivery is a property of the utterance, not a truth condition of the proposition.",
      B: "Correct! The proposition expressed by 'Snow is white' is true if and only if snow is, in fact, white in the world. This is a basic application of truth-conditional semantics.",
      C: "Incorrect. The speaker's authority or occupation is a pragmatic concern and does not determine the truth conditions of the proposition.",
      D: "Incorrect. Propositions do not belong to any particular language; the proposition expressed by 'Snow is white' and its translation *La neige est blanche* have the same truth conditions."
    }
  },
  {
    id: "q2_19",
    category: "week2_3",
    question: "If there is NO conceivable situation in which sentences A and B differ in truth value (one true when the other is false), then A and B:",
    options: {
      A: "Express different propositions.",
      B: "Express the same proposition.",
      C: "Are both tautologies.",
      D: "Are both contradictions."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. If sentences always agree in truth value across all circumstances, they describe the same state of affairs — the same proposition.",
      B: "Correct! The test for same vs. different propositions is: if you cannot find any circumstance where one is true and the other false, they express the same proposition.",
      C: "Incorrect. They could both be contingent sentences that just happen to be necessarily equivalent; they need not be tautologies.",
      D: "Incorrect. Both being contradictions is one special case, but two ordinary equivalent contingent sentences also meet this criterion."
    }
  },
  {
    id: "q2_20",
    category: "week2_3",
    question: "Which of the following is a key FEATURE of propositions (as opposed to sentences or utterances)?",
    options: {
      A: "A proposition must contain a main verb.",
      B: "A proposition is abstract, language-neutral, and can be evaluated as true or false — unlike utterances which are physical events.",
      C: "A proposition can only be expressed once — re-uttering it creates a new proposition.",
      D: "A proposition dies on the wind like an utterance."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Propositions are abstractions; they do not have grammatical requirements like containing a verb.",
      B: "Correct! Propositions are abstract, not tied to any specific language or utterance event, and they have truth values — all properties that distinguish them from utterances (physical, ephemeral) and sentences (abstract but language-bound).",
      C: "Incorrect. The same proposition can be expressed on multiple occasions and in multiple languages; its expression does not create a new proposition.",
      D: "Incorrect. 'Dies on the wind' is a property of utterances — physical sound-wave events. Propositions are persistent abstract objects."
    }
  },

  // PART 3 — EXTRA QUESTIONS (11–20)
  {
    id: "q3_11",
    category: "week4_5",
    question: "What is the EXTENSION of a predicate like 'dog'?",
    options: {
      A: "The physical size range of all dogs.",
      B: "The complete set of all individuals in the world to which the predicate correctly applies.",
      C: "The dictionary definition of the word 'dog'.",
      D: "The sound pattern /dɒɡ/ associated with the word."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Physical size is an empirical property of dogs, not the semantic extension of the predicate.",
      B: "Correct! The extension of a predicate is the set of things it is true of — the extension of 'dog' is the set containing every dog in the world.",
      C: "Incorrect. A dictionary definition is closer to the intension (sense/meaning) of the word, not its extension.",
      D: "Incorrect. The sound pattern is the phonological form (signifier) of the word, not its extension."
    }
  },
  {
    id: "q3_12",
    category: "week4_5",
    question: "What is the INTENSION of an expression (as opposed to its extension)?",
    options: {
      A: "The set of all physical objects the expression applies to.",
      B: "The abstract sense or meaning — the set of properties that determine what the expression applies to across all possible situations.",
      C: "The emotional intensity a word provokes in the listener.",
      D: "The number of phonemes contained in the word."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. That describes the extension — the actual set of objects in the real world.",
      B: "Correct! Intension is the rule or property set that determines the extension — the 'meaning' in an abstract sense that could apply across any possible world. For example, the intension of 'even number' is the property of being divisible by two.",
      C: "Incorrect. Emotional responses are studied under connotation and pragmatics, not intension in the logical sense.",
      D: "Incorrect. Phoneme count is a phonological property, irrelevant to semantic intension."
    }
  },
  {
    id: "q3_13",
    category: "week4_5",
    question: "What is an OSTENSIVE DEFINITION?",
    options: {
      A: "A definition given in a foreign language to broaden understanding.",
      B: "A definition given by pointing to an example of the thing being defined (e.g., pointing to a red object and saying 'That colour is red').",
      C: "A definition that uses only synonyms of the word.",
      D: "A circular definition that uses the very word being defined."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Language of definition has nothing to do with ostensive definition.",
      B: "Correct! An ostensive definition uses pointing or demonstration to link a word to its referent. It is the most direct way to show what a word denotes.",
      C: "Incorrect. Defining via synonyms is a verbal definition, not an ostensive one.",
      D: "Incorrect. A circular definition restates the word; an ostensive definition bypasses words entirely in favour of direct reference."
    }
  },
  {
    id: "q3_14",
    category: "week4_5",
    question: "What is CO-REFERENCE?",
    options: {
      A: "When two words are antonyms of each other.",
      B: "When two different referring expressions in a text pick out the same entity in the world.",
      C: "When a verb simultaneously describes two different actions.",
      D: "When a word is used in both its literal and figurative senses in the same sentence."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Antonymy is a sense relation of opposition, unrelated to co-reference.",
      B: "Correct! Co-reference occurs when two expressions refer to the same individual or object. For example, in 'Einstein was a physicist. He was born in Germany', 'Einstein' and 'He' are co-referential.",
      C: "Incorrect. A verb describing two actions is a separate phenomenon (e.g., verbal ambiguity or zeugma).",
      D: "Incorrect. Using a word in literal and figurative senses is related to polysemy or metaphor, not co-reference."
    }
  },
  {
    id: "q3_15",
    category: "week4_5",
    question: "In the sentence *The king of France is bald*, the definite NP 'the king of France' triggers what kind of presupposition?",
    options: {
      A: "That France is a democracy.",
      B: "An existential presupposition — that there exists a unique king of France.",
      C: "That the speaker has personally met the king of France.",
      D: "That baldness is considered a negative trait in France."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The form of government is not entailed or presupposed by the NP.",
      B: "Correct! Definite noun phrases (with 'the') presuppose the existence and uniqueness of the entity they describe. If no such entity exists, the presupposition fails and the sentence lacks a normal truth value.",
      C: "Incorrect. The speaker's personal experience is not entailed by the use of a definite NP.",
      D: "Incorrect. Cultural attitudes toward baldness are entirely irrelevant to the semantic presupposition of a definite description."
    }
  },

  {
    id: "q3_16",
    category: "week4_5",
    question: "GENERIC reference (as in *Tigers are endangered*) differs from SPECIFIC reference because:",
    options: {
      A: "It refers to a specific, identifiable tiger in context.",
      B: "It makes a statement about the species or kind as a whole, not any particular individual.",
      C: "It requires the use of a proper noun.",
      D: "It only appears in scientific writing, not everyday conversation."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Generic reference does not pick out any particular tiger; it describes the entire category.",
      B: "Correct! Generic NPs express general truths or properties about a kind (e.g., 'Tigers are endangered' says something about all tigers as a species, not about a specific tiger).",
      C: "Incorrect. Generic reference is typically expressed with bare plural NPs (e.g., 'tigers') or singular definites (e.g., 'the tiger'), not necessarily proper nouns.",
      D: "Incorrect. Generic reference appears in everyday language ('Cats like to sleep'), not only in academic contexts."
    }
  },
  {
    id: "q3_17",
    category: "week4_5",
    question: "Which of the following expressions has SENSE but lacks a real-world REFERENT because it refers to a non-existent entity?",
    options: {
      A: "The moon",
      B: "The Eiffel Tower",
      C: "The present king of France",
      D: "Barack Obama"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. 'The moon' has both sense and a real referent (the Earth's natural satellite).",
      B: "Incorrect. The Eiffel Tower exists and has a clear referent.",
      C: "Correct! France is currently a republic with no king. 'The present king of France' has a clear sense (the concept is understood) but no referent — it is a reference failure.",
      D: "Incorrect. Barack Obama is a real person with a clear referent."
    }
  },
  {
    id: "q3_18",
    category: "week4_5",
    question: "Proper names like 'London' or 'Einstein' are semantically special because:",
    options: {
      A: "They have no sense and no reference.",
      B: "They have sense but no reference.",
      C: "They have direct reference to a specific individual or place but minimal descriptive sense of their own.",
      D: "Their reference changes with every speaker who uses them."
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Proper names clearly do refer — 'Einstein' picks out a specific physicist.",
      B: "Incorrect. Proper names do have reference; this is their primary semantic function.",
      C: "Correct! Proper names are primarily referential — 'Einstein' does not describe the man; it directly tags him. According to some theories (Kripke's direct reference), names are rigid designators with little descriptive content.",
      D: "Incorrect. Unlike pronouns or indexicals, proper names do not shift reference depending on who utters them."
    }
  },
  {
    id: "q3_19",
    category: "week4_5",
    question: "Two predicates are CO-EXTENSIVE if:",
    options: {
      A: "They are spelled the same way.",
      B: "They apply to exactly the same set of individuals in the world (same extension), even if their senses differ.",
      C: "They are both transitive verbs.",
      D: "They appear next to each other in the same sentence."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Spelling identity defines homographs, not co-extensiveness.",
      B: "Correct! Two predicates are co-extensive if their extensions (the sets of things they apply to) are identical, even when their intensions (senses/meanings) differ. For example, 'creature with a heart' and 'creature with kidneys' may be co-extensive in our world, but they have different meanings.",
      C: "Incorrect. Grammatical category has no bearing on co-extensiveness.",
      D: "Incorrect. Syntactic position does not determine semantic co-extensiveness."
    }
  },
  {
    id: "q3_20",
    category: "week4_5",
    question: "The expressions 'the morning star' and 'the evening star' both refer to the planet Venus. This illustrates that two expressions can have different:",
    options: {
      A: "References but the same sense.",
      B: "Senses (meanings) but the same reference (denotation).",
      C: "Grammatical categories but the same phonology.",
      D: "Speakers but the same utterance."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. It is the opposite — the two expressions share a referent (Venus) but have different senses.",
      B: "Correct! This is Frege's famous example illustrating the distinction between sense and reference. 'The morning star' and 'the evening star' are different descriptions (senses) that happen to pick out the same object (Venus) in the real world.",
      C: "Incorrect. The example is about semantic sense and reference, not phonology or grammar.",
      D: "Incorrect. The example concerns the meaning of expressions, not the identity of speakers."
    }
  },
  // PART 4 — EXTRA QUESTIONS (11–15)
  {
    id: "q4_11",
    category: "week5_6",
    question: "What is the difference between LEXICAL meaning and STRUCTURAL meaning?",
    options: {
      A: "Lexical meaning is the meaning of individual words; structural meaning is the meaning carried by the grammatical arrangement of those words.",
      B: "Lexical meaning is found in dictionaries; structural meaning is only found in grammar textbooks.",
      C: "Lexical meaning is constant; structural meaning changes depending on the speaker's accent.",
      D: "There is no difference; they are synonymous terms."
    },
    correct: "A",
    explanations: {
      A: "Correct! Lexical meaning is the semantic content of content words (nouns, verbs, adjectives). Structural (or grammatical) meaning is the meaning contributed by word order and grammatical morphemes (e.g., *Dog bites man* vs. *Man bites dog* have the same lexical words but different structural meanings).",
      B: "Incorrect. While dictionaries list word meanings, both lexical and structural meaning are properties of mental grammar, not reference books.",
      C: "Incorrect. Accent or phonetics does not determine the distinction between lexical and structural meaning.",
      D: "Incorrect. They represent two fundamentally different sources of meaning in composition."
    }
  },
  {
    id: "q4_12",
    category: "week5_6",
    question: "Which of the following is the best example of a sentence whose meaning violates the Principle of Compositionality (meaning it is non-compositional)?",
    options: {
      A: "*The red car drives fast.*",
      B: "*He spilled the beans.* (meaning he revealed the secret)",
      C: "*Every student loves a linguist.*",
      D: "*She smiled at the baby.*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The meaning of *The red car drives fast* is completely compositional, computed from the meaning of 'red', 'car', 'drives', and 'fast'.",
      B: "Correct! Idioms like *spill the beans* are non-compositional because the meaning of the phrase cannot be systematically predicted from the literal meanings of the individual words ('spill' and 'beans').",
      C: "Incorrect. While this sentence is ambiguous (scope ambiguity), its readings are still compositionally determined by its grammatical structures.",
      D: "Incorrect. This is a fully compositional sentence."
    }
  },
  {
    id: "q4_13",
    category: "week5_6",
    question: "What is the primary cause of LEXICAL AMBIGUITY in a sentence?",
    options: {
      A: "The sentence is too long to understand.",
      B: "A single word in the sentence has more than one meaning (e.g., 'bank' as a river edge vs. financial institution).",
      C: "The words can be grouped structurally in multiple ways.",
      D: "The speaker is using a foreign accent."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Sentence length does not create lexical ambiguity.",
      B: "Correct! Lexical ambiguity occurs when a sentence contains a word that has multiple senses (polysemy or homonymy), resulting in multiple possible interpretations of the sentence (e.g., *She went to the bank*).",
      C: "Incorrect. Multiple structural groupings cause structural (or syntactic) ambiguity, not lexical.",
      D: "Incorrect. Accent is phonological, not semantic lexical ambiguity."
    }
  },
  {
    id: "q4_14",
    category: "week5_6",
    question: "Which of the following sentences exhibits STRUCTURAL (syntactic) ambiguity?",
    options: {
      A: "*She saw the man with the binoculars.*",
      B: "*He deposited his money in the bank.*",
      C: "*The bachelor bought a house.*",
      D: "*This is a very sharp knife.*"
    },
    correct: "A",
    explanations: {
      A: "Correct! This is a classic case of structural ambiguity: did she use binoculars to see the man, or did the man have the binoculars? The prepositional phrase *with the binoculars* can attach either to the verb phrase (*saw*) or the noun phrase (*the man*).",
      B: "Incorrect. This sentence is lexically ambiguous (if 'bank' is ambiguous), but its structure is straightforward.",
      C: "Incorrect. This sentence has a single syntactic and lexical structure with no ambiguity.",
      D: "Incorrect. *Sharp* is polysemous (lexical), but the sentence's syntax is not structurally ambiguous."
    }
  },
  {
    id: "q4_15",
    category: "week5_6",
    question: "In semantic composition, what function do grammatical morphemes like the plural suffix '-s' or past tense '-ed' serve?",
    options: {
      A: "They represent content predicates with their own reference.",
      B: "They are grammatical modifiers that alter the semantic features or properties of nouns or verbs structurally.",
      C: "They are purely stylistic and carry no semantic meaning.",
      D: "They are only used in written English."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Grammatical morphemes are closed-class elements and do not have independent reference in the way nouns or verbs do.",
      B: "Correct! These inflectional morphemes provide systematic structural modifications — pluralizing a count noun changes its reference from a singular entity to a set/plurality; past tense shifts the time of the event relative to the utterance time.",
      C: "Incorrect. They are semantic operators that significantly change the truth conditions of sentences.",
      D: "Incorrect. They are fundamental parts of both spoken and written grammar."
    }
  },
  // PART 4 — EXTRA QUESTIONS (16–20)
  {
    id: "q4_16",
    category: "week5_6",
    question: "What is SCOPE AMBIGUITY in a sentence like *Every student loves a teacher*?",
    options: {
      A: "It means the words are written in a foreign language.",
      B: "It is an ambiguity arising from the relative semantic domain or 'scope' of two quantifiers (e.g., *every* and *a*).",
      C: "It is an ambiguity due to the pronunciation of 'loves'.",
      D: "It refers to whether the teacher is male or female."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Scope ambiguity is a structural semantic property of natural languages, unrelated to translation.",
      B: "Correct! The sentence has two readings depending on quantifier scope: either (1) for every student, there is some teacher they love (wide scope for *every*), or (2) there is one unique teacher whom all students love (wide scope for *a*).",
      C: "Incorrect. Pronunciation is a phonological property, not a quantifier scope issue.",
      D: "Incorrect. While 'teacher' is gender-neutral, this is underspecification, not semantic scope ambiguity."
    }
  },
  {
    id: "q4_17",
    category: "week5_6",
    question: "Which of the following is the key difference between HOMONYMY and POLYSEMY?",
    options: {
      A: "Homonyms have the same spelling; polysemous words have different spellings.",
      B: "Homonyms are unrelated words that happen to share a form; polysemous words represent a single word with multiple historically or conceptually related senses.",
      C: "Homonyms are always verbs; polysemous words are always nouns.",
      D: "There is no difference; the terms are interchangeable."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Homonyms can be homophones (same sound, different spelling like 'night/knight') or homographs (same spelling, different sound or meaning). Spelling is not the core semantic distinction.",
      B: "Correct! Homonyms are separate lexical entries that accidentally share the same form (e.g., financial *bank* vs. river *bank*). Polysemous words are single lexical entries with related senses (e.g., *mouth* of a river vs. *mouth* of a person).",
      C: "Incorrect. Both homonymy and polysemy occur across all major parts of speech.",
      D: "Incorrect. The distinction is crucial for structuring lexical databases like WordNet and dictionaries."
    }
  },
  {
    id: "q4_18",
    category: "week5_6",
    question: "How does an IDIOM (e.g., *kick the bucket*) differ from a COLLOCATION (e.g., *fast food*)?",
    options: {
      A: "Idioms are grammatically incorrect, while collocations are correct.",
      B: "Idioms have non-compositional, figurative meanings; collocations are combinations of words that co-occur with high frequency but retain their literal compositional meanings.",
      C: "Idioms are only used in informal speech, while collocations are strictly formal.",
      D: "Idioms contain only two words, while collocations can contain many."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Idiomatic phrases follow standard grammar and syntax rules.",
      B: "Correct! An idiom's meaning cannot be computed from its parts (e.g., 'kick the bucket' = die). A collocation is a conventional combination of words (e.g., 'fast food', 'heavy rain') that are highly natural together but remain literal and compositional.",
      C: "Incorrect. Both idioms and collocations occur across various registers of speech and writing.",
      D: "Incorrect. Both can vary in length."
    }
  },
  {
    id: "q4_19",
    category: "week5_6",
    question: "What is LEXICAL FIELD THEORY (or semantic field theory)?",
    options: {
      A: "The study of how words are printed on a page.",
      B: "The idea that vocabulary is organised into fields of words that are semantically related and define each other (e.g., temperature terms: *cold, cool, warm, hot*).",
      C: "The theory that language only describes agricultural fields.",
      D: "The study of word length distributions."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. This refers to typography or document design, not lexical semantics.",
      B: "Correct! Lexical field theory models vocabulary as a structured network where the meaning of a word depends on its relation to other words in the same domain (e.g., the meaning of 'warm' is defined relative to 'hot' and 'cool').",
      C: "Incorrect. It is a metaphorical use of 'field' in structural semantics.",
      D: "Incorrect. Word length is a statistical or morphological property, not a semantic field."
    }
  },
  {
    id: "q4_20",
    category: "week5_6",
    question: "Which of the following is a core claim of COGNITIVE SEMANTICS regarding meaning?",
    options: {
      A: "Meaning is completely independent of human cognition and perception.",
      B: "Meaning is embodied — it is deeply connected to our physical experience, conceptual systems, and bodily interactions with the world (e.g., conceptual metaphors like *HAPPY IS UP*).",
      C: "Meaning only exists in written dictionaries.",
      D: "Words have no stable meanings whatsoever."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Cognitive semantics explicitly rejects the view that meaning is independent of human cognition.",
      B: "Correct! Cognitive semantics (led by Lakoff, Langacker, etc.) asserts that linguistic meaning is not abstract logical symbols, but is rooted in human cognitive faculties, categorization, and physical, embodied experiences.",
      C: "Incorrect. Dictionaries record lexical conventions, but meaning is a psychological and cognitive reality.",
      D: "Incorrect. Meaning is highly structured and stable within conceptual systems, though it is flexible."
    }
  },
  {
    id: "q5_11",
    category: "week6_8",
    question: "Which of the following is the best definition of HYPONYMY?",
    options: {
      A: "A relationship where two words are spelled the same but have opposite meanings.",
      B: "A relationship of meaning inclusion where the meaning of a more specific term (hyponym) is included in a more general term (hypernym/superordinate).",
      C: "A relationship where two words sound the same but mean different things.",
      D: "A relationship of part-to-whole (e.g., branch to tree)."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Opposite meanings is antonymy; spelling identity is homography.",
      B: "Correct! Hyponymy is an asymmetrical relation of inclusion: for example, *tulip* is a hyponym of *flower*, meaning the set of tulips is a subset of the set of flowers.",
      C: "Incorrect. This describes homophony, not hyponymy.",
      D: "Incorrect. Part-to-whole is meronymy, not hyponymy."
    }
  },
  {
    id: "q5_12",
    category: "week6_8",
    question: "Which of the following pairs is a clear example of BINARY (complementary) antonyms?",
    options: {
      A: "*hot* / *cold*",
      B: "*dead* / *alive*",
      C: "*teacher* / *student*",
      D: "*buy* / *sell*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. *Hot* and *cold* are gradable antonyms because there are intermediate states (e.g., warm, cool).",
      B: "Correct! Binary (complementary) antonyms divide a domain exhaustively into two mutually exclusive outcomes: if something is alive, it cannot be dead; if it is dead, it cannot be alive. There is no middle ground.",
      C: "Incorrect. *Teacher* and *student* are relational converses, not complementary binary antonyms.",
      D: "Incorrect. *Buy* and *sell* are relational converses describing the same transaction from different perspectives."
    }
  },
  {
    id: "q5_13",
    category: "week6_8",
    question: "Which of the following pairs represents RELATIONAL CONVERSES (converseness)?",
    options: {
      A: "*dry* / *wet*",
      B: "*employer* / *employee*",
      C: "*pass* / *fail*",
      D: "*polite* / *rude*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. *Dry* and *wet* are binary/complementary antonyms.",
      B: "Correct! Converses describe a relationship between two entities from opposite viewpoints: if X is the employer of Y, then Y is the employee of X.",
      C: "Incorrect. *Pass* and *fail* are binary antonyms.",
      D: "Incorrect. *Polite* and *rude* are gradable antonyms."
    }
  },
  {
    id: "q5_14",
    category: "week6_8",
    question: "What distinguishes GRADABLE antonyms from binary ones?",
    options: {
      A: "Gradable antonyms cannot be used in comparative constructions.",
      B: "Gradable antonyms exist on a continuous scale, allow for intermediate states (e.g., 'warm' between 'hot' and 'cold'), and their denial does not necessitate the assertion of the other.",
      C: "Gradable antonyms are only used to describe physical sizes.",
      D: "Gradable antonyms are always nouns."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Gradable antonyms are easily compared (e.g., 'hotter', 'colder'), unlike binary antonyms (e.g., '?more dead').",
      B: "Correct! Gradable antonyms represent opposite poles of a scale (e.g., *tall/short*, *fast/slow*). Saying someone is 'not tall' does not automatically mean they are 'short' — they could be of average height.",
      C: "Incorrect. They describe many scales: temperature, speed, age, evaluation, etc.",
      D: "Incorrect. They are typically adjectives."
    }
  },
  {
    id: "q5_15",
    category: "week6_8",
    question: "Which of the following terms describes words that have the same spelling but different pronunciations and meanings (e.g., *lead* /liːd/ 'conduct' and *lead* /led/ 'metal')?",
    options: {
      A: "Homophones",
      B: "Homographs",
      C: "Synonyms",
      D: "Hyponyms"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Homophones sound the same but are spelled differently (e.g., *night* / *knight*).",
      B: "Correct! Homographs ('same writing') share the same orthographic spelling but have different sounds and meanings.",
      C: "Incorrect. Synonyms have different forms but similar meanings.",
      D: "Incorrect. Hyponyms are specific-to-general meaning relations."
    }
  },
  {
    id: "q5_16",
    category: "week6_8",
    question: "What is MERONYMY?",
    options: {
      A: "A relation of opposition.",
      B: "A part-to-whole relation, where the referent of one term is a physical part of the referent of another (e.g., *finger* is a meronym of *hand*).",
      C: "A relation of grammatical category sharing.",
      D: "A spelling variation."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Antonymy is the relation of opposition.",
      B: "Correct! Meronymy represents part-to-whole relationships: *wheel* is a meronym of *car*; *leaf* is a meronym of *tree*.",
      C: "Incorrect. Shared grammatical category is not meronymy.",
      D: "Incorrect. Meronymy is a semantic relation, not a spelling variance."
    }
  },
  {
    id: "q5_17",
    category: "week6_8",
    question: "Which of the following is a hypernym (superordinate) of *poodle*?",
    options: {
      A: "*animal*",
      B: "*dog*",
      C: "*canine*",
      D: "All of the above"
    },
    correct: "D",
    explanations: {
      A: "Incorrect. While *animal* is a hypernym, the other options are also hypernyms at different levels of hierarchical inclusion.",
      B: "Incorrect. While *dog* is a direct hypernym, the others are also valid superordinates.",
      C: "Incorrect. *Canine* is a hypernym, but so are the other options.",
      D: "Correct! Hyponymy is transitive: if A (*poodle*) is a hyponym of B (*dog*), and B is a hyponym of C (*canine*), and C is a hyponym of D (*animal*), then C, B, and D are all hypernyms of A."
    }
  },
  {
    id: "q5_18",
    category: "week6_8",
    question: "Two words are SYNONYMS if:",
    options: {
      A: "They have different forms but express the same or very similar senses.",
      B: "They are spelled identically.",
      C: "One is a physical part of the other.",
      D: "They have opposite meanings."
    },
    correct: "A",
    explanations: {
      A: "Correct! Synonymy is a relation of similarity or sameness of sense (e.g., *sofa* / *couch*, *buy* / *purchase*). Absolute synonymy is rare; most synonyms are partial and differ in collocation, register, or connotation.",
      B: "Incorrect. Identical spelling is homography, not synonymy.",
      C: "Incorrect. Part-to-whole is meronymy.",
      D: "Incorrect. Opposites are antonyms."
    }
  },
  {
    id: "q5_19",
    category: "week6_8",
    question: "Which of the following is an example of a COLLOCATIONAL RESTRICTION (selectional preference)?",
    options: {
      A: "We say *rancid butter* and *sour milk*, but not *rancid milk* or *sour butter*.",
      B: "A rule that nouns must precede verbs in English.",
      C: "We write sentences in capital letters.",
      D: "Every adjective must have an antonym."
    },
    correct: "A",
    explanations: {
      A: "Correct! Collocational restrictions are arbitrary co-occurrence limits on lexical items that share similar senses. Even though 'rancid' and 'sour' both mean spoiled/bad, they only license specific noun partners.",
      B: "Incorrect. This is a syntactic phrase-structure rule, not a lexical collocational restriction.",
      C: "Incorrect. This is an orthographic convention.",
      D: "Incorrect. Many adjectives (e.g., *wooden*) lack antonyms."
    }
  },
  {
    id: "q5_20",
    category: "week6_8",
    question: "Which semantic relation holds between *tree* and *forest*?",
    options: {
      A: "Hyponymy",
      B: "Member-collection relation",
      C: "Antonymy",
      D: "Synonymy"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. A tree is not a *kind* of forest, so it is not hyponymy.",
      B: "Correct! A tree is a member of the collection known as a forest. This is distinct from regular meronymy (finger-hand) because a collection shares properties differently than structured physical wholes.",
      C: "Incorrect. They are not opposites.",
      D: "Incorrect. They do not share a sense."
    }
  },
  {
    id: "q6_11",
    category: "week9_10",
    question: "What is an EQUATIVE sentence?",
    options: {
      A: "A sentence that contains a mathematical equation.",
      B: "A sentence that asserts that the referents of two referring expressions are the same unique entity (e.g., *Tony Blair is the former Prime Minister*).",
      C: "A sentence where all words have equal syllable count.",
      D: "A sentence that is both active and passive."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. While it asserts equivalence, it is a linguistic sentence, not a mathematical equation.",
      B: "Correct! An equative sentence (or identifying sentence) asserts identity between two referring expressions: the referent of expression A is identical to the referent of expression B.",
      C: "Incorrect. Syllable count is a phonological property, not a semantic class.",
      D: "Incorrect. Sentences cannot be both active and passive simultaneously."
    }
  },
  {
    id: "q6_12",
    category: "week9_10",
    question: "What is Keith Donnellan's distinction between the REFERENTIAL and ATTRIBUTIVE use of definite descriptions?",
    options: {
      A: "Referential describes a past event; attributive describes a future one.",
      B: "Referential use picks out a specific individual the speaker has in mind; attributive use refers to whoever or whatever fits the description (e.g., 'Smith's murderer, whoever they are, is insane').",
      C: "Referential uses pronouns; attributive uses adjectives.",
      D: "Referential is literal; attributive is metaphorical."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. The distinction relates to speaker intent and identification of referents, not time/tense.",
      B: "Correct! In the attributive use, the speaker says something about whoever fits the description (e.g., 'The winner of this race will get a medal' - whoever they turn out to be). In the referential use, the speaker uses the description to enable the audience to identify a specific entity they already have in mind.",
      C: "Incorrect. Both uses employ the exact same syntactic form (definite description NP), making it a semantic/pragmatic distinction.",
      D: "Incorrect. Both uses are literal."
    }
  },
  {
    id: "q6_13",
    category: "week9_10",
    question: "What is DEIXIS (or indexicality) in linguistics?",
    options: {
      A: "The spelling of ancient words.",
      B: "The phenomenon where the reference of an expression shifts systematically depending on the context of utterance (speaker, time, or location, e.g., *I*, *here*, *now*).",
      C: "The omission of vowels in rapid speech.",
      D: "A dialect spoken in Northern England."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Deixis is not about historical spelling.",
      B: "Correct! Deictic words (like *I*, *you*, *here*, *there*, *now*, *then*, *this*, *that*) have a fixed semantic rule of interpretation but their actual real-world referent shifts depending entirely on who says them, where, and when.",
      C: "Incorrect. Vowel omission is ellipsis or syncope (phonology/phonetics).",
      D: "Incorrect. Deixis is a universal property of human languages, not a specific dialect."
    }
  },
  {
    id: "q6_14",
    category: "week9_10",
    question: "Which of the following is the best example of ANAPHORA?",
    options: {
      A: "*Although she was tired, Mary finished the book.*",
      B: "*John went to the store. He bought some milk.* (where 'He' refers back to 'John')",
      C: "*Here is your key.*",
      D: "*I want to buy this car.*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. This is cataphora, where the pronoun ('she') precedes the noun phrase ('Mary') it corefers with.",
      B: "Correct! Anaphora is the semantic/syntactic relation where an expression (anaphor, e.g., 'He') refers back to a previously mentioned entity (antecedent, e.g., 'John').",
      C: "Incorrect. 'Here' is deictic/indexical, not anaphoric in this sentence.",
      D: "Incorrect. 'This' is deictic here, pointing to a physical entity in the context."
    }
  },
  {
    id: "q6_15",
    category: "week9_10",
    question: "Which of the following is a referring expression that has constant (unique) reference across almost all ordinary contexts?",
    options: {
      A: "*the table*",
      B: "*The Pacific Ocean*",
      C: "*he*",
      D: "*that man*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'The table' has variable reference; it refers to a different table depending on the room/context.",
      B: "Correct! 'The Pacific Ocean' is a proper name/definite description with a unique, constant referent in the real world, regardless of who utters it.",
      C: "Incorrect. 'He' is a pronoun with highly variable reference determined by context.",
      D: "Incorrect. 'That man' is deictic and variable, shifting with the speaker's gesture and focus."
    }
  },
  {
    id: "q6_16",
    category: "week9_10",
    question: "Why is the reference of the pronoun *I* considered context-dependent?",
    options: {
      A: "Because it changes spelling in the plural.",
      B: "Because its referent is always the person who is currently uttering it.",
      C: "Because it can refer to objects as well as people.",
      D: "Because it is only used in formal writing."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Plural forms (like 'we') represent grammatical changes, not the context-dependency of 'I'.",
      B: "Correct! *I* is a deictic pronoun whose referent shifts automatically depending on who is speaking: if John says 'I', it refers to John; if Mary says 'I', it refers to Mary.",
      C: "Incorrect. *I* refers to the speaker/agent, which is animate, not inert objects.",
      D: "Incorrect. *I* is extremely common in both spoken and informal contexts."
    }
  },
  {
    id: "q6_17",
    category: "week9_10",
    question: "What is an OPAQUE CONTEXT (referential opacity)?",
    options: {
      A: "A sentence where the font is difficult to read.",
      B: "A linguistic context (such as belief reports: *John believes that...*) where substituting one co-referential term for another can change the truth value of the sentence.",
      C: "A sentence that has no meaning.",
      D: "A sentence containing obscure jargon."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Referential opacity is a semantic concept, not a visual/typographical one.",
      B: "Correct! In opaque contexts (e.g. belief or attitude verbs), substitution of coreferential terms fails. For example, even if 'the morning star' is 'the evening star', John might believe 'the morning star is bright' but not believe 'the evening star is bright'.",
      C: "Incorrect. Opaque contexts have very clear meanings, they just block normal substitution rules.",
      D: "Incorrect. It is a logical-semantic property of syntax, not a matter of style/jargon."
    }
  },
  {
    id: "q6_18",
    category: "week9_10",
    question: "Which of the following is the best example of SPATIAL deixis?",
    options: {
      A: "*now* / *then*",
      B: "*this* / *that* (expressing proximity to the speaker)",
      C: "*I* / *you*",
      D: "*yesterday* / *tomorrow*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. *Now* and *then* are temporal (time) deixis.",
      B: "Correct! Spatial (space) deixis indicates relative physical location or distance from the speaker's deictic center (e.g., 'this' is close to me; 'that' is far from me).",
      C: "Incorrect. *I* and *you* are person deixis.",
      D: "Incorrect. These are deictic expressions of time (temporal deixis)."
    }
  },
  {
    id: "q6_19",
    category: "week9_10",
    question: "Which of the following expressions is typically used to introduce a new, indefinite discourse referent?",
    options: {
      A: "*the man*",
      B: "*a man*",
      C: "*John*",
      D: "*he*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. 'The man' is definite and presupposes an existing referent in the discourse.",
      B: "Correct! Indefinite noun phrases (using the indefinite article 'a/an') are typically used to introduce a brand-new referent into the discourse space (e.g., 'A man walked in'). Subsequent mentions will then use definite expressions ('The man was tall').",
      C: "Incorrect. Proper names introduce unique entities but carry definite status.",
      D: "Incorrect. Pronouns require a pre-existing antecedent in the discourse context."
    }
  },
  {
    id: "q6_20",
    category: "week9_10",
    question: "What is TEMPORAL deixis concerned with?",
    options: {
      A: "Locating events relative to the time of the utterance (e.g., using tense, *now*, *then*, *yesterday*).",
      B: "The speed of speaking.",
      C: "Measuring the length of a written text.",
      D: "The geographical dialect of the speaker."
    },
    correct: "A",
    explanations: {
      A: "Correct! Temporal deixis anchors the interpretation of time-related expressions relative to the moment the sentence is uttered. 'Yesterday' is the day before today, shifting every day.",
      B: "Incorrect. Speech rate is a phonetic/phonologic concern, not temporal deixis.",
      C: "Incorrect. Text length is irrelevant to deictic anchoring.",
      D: "Incorrect. Geographical dialects are studied in sociolinguistics and dialectology."
    }
  },
  {
    id: "q7_11",
    category: "week10_11",
    question: "In the proposition expressed by *John hit Bill*, what are the semantic arguments?",
    options: {
      A: "*hit*",
      B: "*John* and *Bill*",
      C: "The entire clause is a single argument.",
      D: "There are no arguments in this proposition."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. *Hit* is the predicate, not an argument.",
      B: "Correct! The predicate *hit* is a two-place relation that requires two arguments: the agent (*John*) and the patient (*Bill*). Arguments are the entities that fill the slots of the predicate.",
      C: "Incorrect. The clause represents the complete proposition; arguments are its sub-parts.",
      D: "Incorrect. Every predicate-argument structure must have arguments."
    }
  },
  {
    id: "q7_12",
    category: "week10_11",
    question: "What is the VALENCY (or arity) of the predicate *give* (as in *Mary gave John a book*)?",
    options: {
      A: "One-place (monadic)",
      B: "Two-place (dyadic)",
      C: "Three-place (triadic)",
      D: "Zero-place (avalent)"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Monadic predicates like *sneeze* require only one argument (*John sneezed*).",
      B: "Incorrect. Dyadic predicates like *kiss* require two arguments (*John kissed Mary*).",
      C: "Correct! The predicate *give* is a three-place predicate: it requires a giver (*Mary*), a recipient (*John*), and an object given (*a book*). Therefore, its semantic valency is 3.",
      D: "Incorrect. Zero-place predicates (like weather verbs in some languages) require no arguments."
    }
  },
  {
    id: "q7_13",
    category: "week10_11",
    question: "If sentence A ENTAILS sentence B, what is the relation between their truth values?",
    options: {
      A: "Whenever A is true, B must also be true.",
      B: "Whenever A is true, B must be false.",
      C: "Whenever B is true, A must be true.",
      D: "They must always have opposite truth values."
    },
    correct: "A",
    explanations: {
      A: "Correct! Entailment is a relation of logical necessity: A entails B (A ⊨ B) if and only if in every possible world where A is true, B is also true.",
      B: "Incorrect. That describes contradiction, not entailment.",
      C: "Incorrect. Entailment is unidirectional; B being true does not guarantee that A is true (e.g. *John owns a red car* entails *John owns a car*, but *John owns a car* does not entail *John owns a red car*).",
      D: "Incorrect. Opposites are contradictions or contraries."
    }
  },
  {
    id: "q7_14",
    category: "week10_11",
    question: "Which of the following represents a case of MUTUAL ENTAILMENT (symmetric entailment)?",
    options: {
      A: "*John is a bachelor* and *John is a man*.",
      B: "*The dog chased the cat* and *The cat was chased by the dog*.",
      C: "*John killed Harry* and *Harry died*.",
      D: "*All birds fly* and *This penguin flies*."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. This is unidirectional: *John is a bachelor* entails *John is a man*, but not vice-versa (John could be a married man).",
      B: "Correct! Active and passive sentences have mutual entailment: A entails B, and B entails A. If the dog chased the cat, the cat must have been chased by the dog, and vice-versa.",
      C: "Incorrect. Unidirectional: *John killed Harry* entails *Harry died*, but *Harry died* does not entail *John killed Harry* (Harry could have died of natural causes).",
      D: "Incorrect. This is a logical inference, not a mutual entailment."
    }
  },
  {
    id: "q7_15",
    category: "week10_11",
    question: "What is a MEANING POSTULATE?",
    options: {
      A: "A letter sent to a linguist proposing a new word meaning.",
      B: "A formal representation of semantic relations between lexical items (e.g., *∀x (Dog(x) → Animal(x))* expressing that all dogs are animals).",
      C: "A grammatical rule for subject-verb agreement.",
      D: "The speed at which a word is learned by a child."
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Meaning postulates are formal logical tools, not letters.",
      B: "Correct! Introduced by Rudolf Carnap, meaning postulates formalize relations between lexical senses in logical systems. For example, to encode that *bachelor* means *unmarried man*, we write a postulate stating that anything that is a bachelor is necessarily unmarried.",
      C: "Incorrect. This is a syntactic/morphological rule.",
      D: "Incorrect. That is a psycholinguistic acquisition metric."
    }
  },
  {
    id: "q7_16",
    category: "week10_11",
    question: "In propositional logic, if P is TRUE and Q is FALSE, what is the truth value of the conjunction (P ∧ Q)?",
    options: {
      A: "True",
      B: "False",
      C: "Indeterminate",
      D: "Both True and False"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Conjunction requires *both* conjuncts to be true to yield a true output.",
      B: "Correct! In propositional logic, a conjunction (P ∧ Q, read 'P and Q') is true if and only if both P and Q are true. Since Q is false, the conjunction is false.",
      C: "Incorrect. Propositional logic is bivalent; the truth value is fully determined.",
      D: "Incorrect. A statement cannot have two truth values simultaneously in standard bivalent logic."
    }
  },
  {
    id: "q7_17",
    category: "week10_11",
    question: "In propositional logic, if P is TRUE and Q is FALSE, what is the truth value of the disjunction (P ∨ Q)?",
    options: {
      A: "True",
      B: "False",
      C: "Indeterminate",
      D: "Neither True nor False"
    },
    correct: "A",
    explanations: {
      A: "Correct! An inclusive disjunction (P ∨ Q, read 'P or Q') is true if at least one of the disjuncts is true. Since P is true, the disjunction is true.",
      B: "Incorrect. It would only be false if both P and Q were false.",
      C: "Incorrect. The result is mathematically determined.",
      D: "Incorrect. The result must be either True or False."
    }
  },
  {
    id: "q7_18",
    category: "week10_11",
    question: "A relation R is SYMMETRIC if for all x and y, if xRy is true, then yRx must also be true. Which of the following predicates represents a symmetric relation?",
    options: {
      A: "*be the father of*",
      B: "*love*",
      C: "*be married to*",
      D: "*be taller than*"
    },
    correct: "C",
    explanations: {
      A: "Incorrect. Asymmetric: if x is the father of y, y is definitely not the father of x.",
      B: "Incorrect. Non-symmetric: if x loves y, y may or may not love x.",
      C: "Correct! Symmetric: if x is married to y, then y is necessarily married to x.",
      D: "Incorrect. Asymmetric: if x is taller than y, y cannot be taller than x."
    }
  },
  {
    id: "q7_19",
    category: "week10_11",
    question: "A relation R is TRANSITIVE if for all x, y, and z, if xRy and yRz are true, then xRz must be true. Which of the following predicates represents a transitive relation?",
    options: {
      A: "*be the mother of*",
      B: "*be taller than*",
      C: "*like*",
      D: "*be next to*"
    },
    correct: "B",
    explanations: {
      A: "Incorrect. Non-transitive: if x is the mother of y, and y is the mother of z, x is the grandmother of z, not the mother.",
      B: "Correct! Transitive: if x is taller than y, and y is taller than z, then x must be taller than z.",
      C: "Incorrect. Non-transitive: if x likes y, and y likes z, x does not necessarily like z.",
      D: "Incorrect. Non-transitive: if x is next to y, and y is next to z, x could be next to z, or x could be on the other side of y."
    }
  },
  {
    id: "q7_20",
    category: "week10_11",
    question: "Which of the following semantic connections represents an entailment based on lexical HYPONYMY?",
    options: {
      A: "*John bought a poodle* ⊨ *John bought a dog*",
      B: "*John bought a dog* ⊨ *John bought a poodle*",
      C: "*John loves Mary* ⊨ *Mary loves John*",
      D: "*The cup is clean* ⊨ *The cup is dirty*"
    },
    correct: "A",
    explanations: {
      A: "Correct! Since *poodle* is a hyponym of *dog*, any positive declarative sentence containing *poodle* entails the corresponding sentence with *dog* substituted (in non-negative, non-opaque contexts).",
      B: "Incorrect. Dog does not entail poodle because John could have bought a beagle.",
      C: "Incorrect. This is not an entailment; love is non-symmetric.",
      D: "Incorrect. This is a contradiction/contrary relation, not an entailment."
    }
  }
];

// If running in browser or node, make it available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionsData };
} else {
  window.questionsData = questionsData;
}
