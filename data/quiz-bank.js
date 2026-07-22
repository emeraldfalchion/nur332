/* ============================================================
   quiz-bank.js - "Build Your Own Exam" question bank.
   Organized by topic; each topic has three practice sets:
     - mustKnow: questions copied (not moved) from data/exam-1.js /
       data/exam-2.js that test a point on the "Must Know Quick
       Reference" page (exam-hints.html). Kept in sync with the exams
       manually if either changes.
     - extraPractice: the original quiz-bank question pool for that
       topic, minus anything that duplicates a mustKnow question
       (there was no overlap as of 2026-07-21 — the quiz bank was
       already de-duplicated against every exam question in an
       earlier session).
     - eaq: questions imported 2026-07-21 from the user's external EAQ
       (Elsevier Adaptive Quizzing) bank (3 source files, 150 questions
       total, 94 landed in the 9 topics above). 5 were dropped outright
       as exact duplicates of an existing mustKnow/extraPractice/exam-1/
       exam-2 question (Naegele's-rule calculation, contraction-
       frequency definition, high-AFP→neural-tube-defect). The
       remaining 45 didn't match any of the 9 topics; of those, 6
       (after dropping cross-file literal repeats) test content that
       only lives on a Week 4 page and were routed into two dedicated
       eaq-only topic entries below (`week4labor`, `week4complications`
       — mustKnow/extraPractice intentionally empty, since per the
       user's standing instruction no Exam-Prep content reflects Week 4
       until its live lecture arrives); the other 34 (after dropping
       cross-file literal repeats) aren't taught anywhere on the site
       and were routed into a final `other` topic entry ("Other EAQ
       Questions" — also eaq-only). See CLAUDE.md for the full
       orphan/duplicate list and topic-by-topic counts.
   Every question carries `topic` (matches data/exam-1.js /
   data/exam-2.js for the 9 lecture topics, or the Week 4 page title /
   "Other EAQ Questions" for the 3 eaq-only entries) and `source`
   ("exam-1", "exam-2", "quiz-bank", or "eaq") so future breakdown/
   report changes don't require re-reading and re-categorizing every
   question.
   Internal ids/filenames still say "quiz" (quiz-builder.html,
   window.QUIZ_BANK, assets/quiz.js) — only user-facing text was
   renamed to "Build Your Own Exam".
   ============================================================ */
window.QUIZ_BANK = {
  topics: [
    {
      id: "reproductive",
      label: "Anatomy & Physiology",
      week: 1,
      sets: {
        mustKnow: [
          {
            stem: "A patient asks about the vessels in the umbilical cord. Which statement by the nurse is accurate?",
            options: ["Two veins carry oxygenated blood to the fetus","One artery carries waste away and two veins deliver oxygen","Two arteries carry waste away, and one vein delivers oxygenated blood to the baby","All three vessels carry oxygenated blood"],
            answer: 2,
            rationale: "The cord has two arteries (carry waste/deoxygenated blood away) and one vein (delivers oxygenated blood to the fetus) — \"backwards\" from adult circulation.",
            topic: "Anatomy & Physiology",
            source: "exam-1"
          }
        ],
        extraPractice: [
          {
            stem: "Which uterine ligament is the chief uterine support and helps prevent uterine prolapse?",
            options: ["Broad ligament","Round ligament","Cardinal ligament","Ovarian ligament"],
            answer: 2,
            rationale: "The cardinal ligament is the chief uterine support and helps prevent prolapse. The round ligament pulls the uterus down and forward; the broad ligament keeps it centrally placed.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "Which uterine ligament pulls the uterus down and forward (helping the presenting part enter the cervix) and is a common source of pain in pregnancy?",
            options: ["Broad ligament","Round ligament","Cardinal ligament","Suspensory ligament"],
            answer: 1,
            rationale: "The round ligament pulls the uterus down and forward and is a common source of round ligament pain. The broad ligament keeps the uterus centrally placed; the cardinal ligament is the chief support.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "What is the function of the vaginal fornices (the spaces around the cervix)?",
            options: ["They produce cervical mucus","They allow semen to pool, aiding sperm transport","They anchor the ovaries","They secrete estrogen"],
            answer: 1,
            rationale: "The anterior and posterior fornices are spaces around the cervix that allow semen to pool, aiding sperm transport toward the cervical os.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "Which hormone stabilizes the uterus for implantation and thickens cervical mucus?",
            options: ["Estrogen","Progesterone","FSH","Oxytocin"],
            answer: 1,
            rationale: "Progesterone stabilizes the uterus for implantation, thickens cervical mucus, and supports lactation.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "During which ovarian phase does an immature egg mature under FSH, ending in ovulation?",
            options: ["Luteal","Follicular","Secretory","Ischemic"],
            answer: 1,
            rationale: "In the follicular phase the egg matures under FSH and ends in ovulation (~day 13-15). The luteal phase follows ovulation.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "Which substances are fatty acids that relax and constrict smooth muscle and are relevant to labor induction and increasing contractions?",
            options: ["Prostaglandins","Prolactin","Relaxin","Aldosterone"],
            answer: 0,
            rationale: "Prostaglandins are fatty acids that relax and constrict smooth muscle; they are used in labor induction and to increase contractions.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "An amniotic fluid index (AFI) of less than 5 (oligohydramnios) is most associated with:",
            options: ["Maternal diabetes","Fetal GI or swallowing problems","Maternal perfusion problems (e.g., hypertension) or fetal kidney problems","Multiple gestation"],
            answer: 2,
            rationale: "Oligohydramnios (<400 mL, or AFI <5; normal AFI 5-25) is linked to maternal perfusion problems such as hypertension and to fetal kidney or bladder problems. Polyhydramnios is the one linked to diabetes and multiple gestation.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "What is the function of the prostate gland in the male reproductive system?",
            options: ["Produces sperm","Stores mature sperm","Secretes fluid that protects sperm from the acidic vaginal environment","Regulates testicular temperature"],
            answer: 2,
            rationale: "The prostate encircles the urethra and secretes fluid that protects sperm from the acidic vaginal environment. The testes produce sperm, the epididymis stores it, and the scrotum regulates temperature.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "At approximately which point in development does the fetal heart begin to beat?",
            options: ["Week 4","Week 12","Week 20","Week 28"],
            answer: 0,
            rationale: "The heart begins to beat around week 4, often before the mother knows she is pregnant.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "Which statements about meiosis (versus mitosis) are true? Select all that apply.",
            options: ["It produces eggs and sperm","Its cells contain only half the genetic material","Oogenesis is complete at birth","Spermatogenesis begins at puberty","It produces exact copies of cells for tissue repair"],
            answers: [0, 1, 2, 3],
            rationale: "Meiosis produces gametes with half the genetic material; oogenesis is complete at birth and spermatogenesis begins at puberty. Producing exact copies for growth/repair describes mitosis.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "At which point during a human pregnancy does the embryo become a fetus?",
            options: ["During the 8th week of the pregnancy","At the end of the 2nd week of pregnancy","When the fertilized egg becomes implanted","When the products of conception are seen on the ultrasound"],
            answer: 0,
            rationale: "During the 8th week of pregnancy the organ systems and other structures are developed to the extent that they take the human form; at this time the embryo becomes a fetus and remains so until birth. At the end of the 2nd week of pregnancy, the developing cells are called an embryo. At the time of implantation, the group of developing cells is called a blastocyst. The embryo can be visualized on ultrasound before it becomes a fetus.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          },
          {
            stem: "Which factor explains why a multiple-gestation pregnancy is considered high risk?",
            options: ["Postpartum hemorrhage is an expected complication.","Greater metabolic demands and increased risk of fetal malpositioning","Adjustment to multiple gestation and birth is longer.","Maternal mortality is higher during the prenatal period in the setting of multiple gestation."],
            answer: 1,
            rationale: "Perinatal morbidity and mortality rates are higher with multiple-gestation pregnancies, because the greater metabolic demands and the possibility of malpositioning of one or more fetuses increase the risk for complications. Although postpartum hemorrhage does occur more frequently after multiple births, it is not an expected occurrence. Adjustment to a multiple gestation and birth is individual; the time needed for adjustment does not place the pregnancy at high risk. Maternal mortality during the prenatal period is not increased in the presence of a multiple gestation.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          },
          {
            stem: "The nurse is teaching a family planning class about ovulation and conception. For which period of time in hours would the nurse inform the class that the ovum is capable of being fertilized after ovulation?",
            options: ["1 - 6","8 - 10","12 - 24","36 - 48"],
            answer: 2,
            rationale: "The ovum is capable of being fertilized for 12-24 hours after ovulation. The optimal window does not close in 1-6 or 8-10 hours – fertilization is still possible during those times. After 24 hours, the - ovum is no longer viable, and by 36 48 hours after ovulation, the egg has died.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          },
          {
            stem: "A primigravida in the first trimester tells the nurse that she has heard that hormones play an important role in pregnancy. Which hormone would the nurse tell the client maintains pregnancy?",
            options: ["Prolactin","Estrogen","Progesterone","Somatotropin"],
            answer: 2,
            rationale: "Produced by the ovaries and placenta, progesterone is a female sex hormone that prepares the endometrium for implantation of the fertilized ovum, maintains pregnancy, and plays a role in the development of the mammary glands. Prolactin is secreted by the anterior lobe of the pituitary gland; it is responsible for initiating and maintaining milk secretion from the mammary glands. Estrogen is a female sex hormone that starts to prepare the endometrium for implantation and promotes development of secondary sex characteristics. Somatotropin is a growth hormone secreted by the anterior pituitary gland.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          },
          {
            stem: "Which time during the menstrual cycle would the nurse stress as the optimal time to achieve pregnancy?",
            options: ["Midway between periods","Immediately after a period ends","14 days before the next period is expected","14 days after the beginning of the last period"],
            answer: 2,
            rationale: "Ovulation occurs 14 days before the onset of menses. Midway between cycles is appropriate only if the client has a regular 28-day cycle. Immediately after the end of the period means that ovulation occurs on approximately day 5 of the menstrual cycle, which is not factual. Variations in the cycle occur in the preovulation period; it is not as accurate as counting 14 days before the next expected menses.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "disorders",
      label: "Disorders & Genetics",
      week: 1,
      sets: {
        mustKnow: [
          {
            stem: "A patient arrives in labor with an active genital herpes lesion. Which delivery plan does the nurse anticipate?",
            options: ["Vaginal delivery with IV antibiotics","Cesarean birth","Vacuum-assisted vaginal delivery","Tocolytics until the lesion resolves"],
            answer: 1,
            rationale: "An active HSV lesion at delivery requires a cesarean birth; vaginal exposure can cause a fatal systemic infection in the newborn. (Acyclovir is started at 36 weeks to suppress outbreaks.)",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A father has an autosomal DOMINANT disorder and is heterozygous (Dd). The mother is unaffected (dd). Using a Punnett square, what does the nurse teach about each pregnancy?",
            options: ["25% of children will be affected","50% of children will be affected","75% of children will be affected","No children affected, but all will be carriers"],
            answer: 1,
            rationale: "Dd × dd yields 50% Dd (affected). In an autosomal dominant disorder only ONE abnormal allele is needed, so there is no silent carrier.",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A menstruating patient who uses super-absorbent tampons presents with fever, hypotension, vomiting, and a sunburn-like rash on her trunk. The nurse recognizes this as:",
            options: ["A benign, self-limiting condition","Toxic shock syndrome — a medical emergency needing hospitalization, IV fluids, and antibiotics","A yeast infection that can be treated at home","Normal premenstrual symptoms"],
            answer: 1,
            rationale: "Toxic shock syndrome (a Staph aureus toxin linked to super-absorbent tampons) is a medical emergency that can progress to shock and death.",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A pregnant patient is diagnosed with gonorrhea. Untreated, the nurse knows this most importantly can cause which complication in the newborn?",
            options: ["Neonatal eye infection and blindness","Neural tube defects","Macrosomia","Cleft palate"],
            answer: 0,
            rationale: "Untreated gonorrhea (and chlamydia) can cause neonatal conjunctivitis and blindness. Gonorrhea is treated with ceftriaxone (Rocephin) plus azithromycin.",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A maternal serum alpha-fetoprotein (AFP) level comes back HIGH. Which fetal concern is most associated with this result?",
            options: ["Down syndrome","An open neural tube defect such as spina bifida","Trisomy 18","Turner syndrome"],
            answer: 1,
            rationale: "HIGH AFP is associated with open neural tube defects (spina bifida, anencephaly), and also multiples and diabetes. LOW AFP is linked to Down syndrome or trisomy 18.",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A patient develops pelvic inflammatory disease after an untreated chlamydia infection. Which long-term complication is most important to include in teaching?",
            options: ["Cervical cancer","Tubal damage and infertility","Osteoporosis","Gestational diabetes"],
            answer: 1,
            rationale: "PID can scar the fallopian tubes and cause infertility, which is why untreated chlamydia and gonorrhea are such a concern.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "Which diagnostic test and treatment are correct for syphilis in pregnancy?",
            options: ["Diagnosed by wet mount; treated with metronidazole","Diagnosed by RPR or VDRL; treated with penicillin","Diagnosed by pH paper; no treatment needed","Diagnosed by culture; treated with fluconazole"],
            answer: 1,
            rationale: "Syphilis is screened with RPR or VDRL (RPR preferred) and treated with penicillin. Congenital syphilis can cause IUGR, preterm birth, and stillbirth.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "Both parents are carriers for cystic fibrosis, an autosomal recessive disorder. Using a Punnett square, what does the nurse teach about each pregnancy?",
            options: ["50% of children will be affected","All children will be carriers","25% affected, 50% carriers, 25% unaffected","All children will be affected"],
            answer: 2,
            rationale: "A carrier × carrier cross (Bb × Bb) yields 25% affected (bb), 50% unaffected carriers (Bb), and 25% completely unaffected (BB) for each pregnancy.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "A patient reports a thin, grayish, watery discharge with a fishy odor; her vaginal pH is 5.0. Which condition does the nurse most suspect, and what treatment is anticipated?",
            options: ["Candidiasis — fluconazole","Bacterial vaginosis — metronidazole","Trichomoniasis — acyclovir","Toxic shock syndrome — hospitalize immediately"],
            answer: 1,
            rationale: "Bacterial vaginosis produces a thin, gray, fishy discharge with a vaginal pH greater than 4.5; it is treated with metronidazole (Flagyl) or clindamycin cream.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "A patient on antibiotics reports thick, curd-like white discharge with severe itching and a vulvar rash. Which treatment does the nurse anticipate?",
            options: ["Metronidazole","Fluconazole (Diflucan) or nystatin","Penicillin","Ceftriaxone"],
            answer: 1,
            rationale: "Thick, white, curd-like discharge with itching indicates candidiasis (yeast); it is treated with fluconazole or nystatin. Antibiotics, diabetes, and immunosuppression are risk factors.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "A patient reports a frothy yellow-green vaginal discharge with itching and dysuria; a wet mount shows a motile organism. This is the most common non-viral STI. Which infection and treatment does the nurse anticipate?",
            options: ["Bacterial vaginosis - clindamycin cream","Trichomoniasis - metronidazole","Candidiasis - fluconazole","Chlamydia - azithromycin"],
            answer: 1,
            rationale: "Trichomoniasis (Trichomonas vaginalis, the most common non-viral STI) causes a yellow-green discharge and is diagnosed by seeing the motile organism on a wet mount; it is treated with metronidazole.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "A patient has irregular periods, hirsutism, acne, obesity, and insulin resistance. Which condition is most likely?",
            options: ["Endometriosis","Polycystic ovarian syndrome (PCOS)","Fibrocystic breast changes","Bacterial vaginosis"],
            answer: 1,
            rationale: "PCOS features irregular periods, elevated androgens (hirsutism, acne), obesity, insulin resistance, and infertility. It is managed with oral contraceptives, metformin, and spironolactone.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which procedure definitively diagnoses endometriosis?",
            options: ["Mammogram","Laparoscopy","Wet mount","Pap smear"],
            answer: 1,
            rationale: "Endometriosis is diagnosed by laparoscopy. It causes pelvic pain around menses and is often found during an infertility workup.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A patient has mobile, tender breast lumps that worsen before her menses. Which is the most likely condition, and what self-care is recommended?",
            options: ["Breast cancer - immediate mastectomy","Fibrocystic breast changes - limit caffeine and sodium","Mastitis - antibiotics","Fibroadenoma - chemotherapy"],
            answer: 1,
            rationale: "Fibrocystic breast changes (the most common benign breast disorder) cause mobile, tender lumps that worsen before menses; management includes limiting caffeine and sodium and sometimes oral contraceptives. A fixed mass with skin retraction is the red flag for cancer.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which sexually transmitted infection is the leading cause of cervical cancer and is prevented with the Gardasil vaccine?",
            options: ["Herpes simplex virus","Human papillomavirus (HPV)","Chlamydia","Syphilis"],
            answer: 1,
            rationale: "HPV causes genital warts and is the leading cause of cervical cancer; the Gardasil vaccine helps prevent it. It is diagnosed by an abnormal Pap smear and biopsy.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A male infant has an extra X chromosome (XXY), leading to small testes and low sperm production. This describes:",
            options: ["Turner syndrome","Klinefelter syndrome","Down syndrome","Trisomy 18"],
            answer: 1,
            rationale: "Klinefelter syndrome is XXY (male), with small testes, low or absent sperm, and fertility issues. Turner syndrome is monosomy X (female); Down syndrome is trisomy 21.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which prenatal test samples chorionic villi, can be done very early, but CANNOT detect neural tube defects?",
            options: ["Amniocentesis","Chorionic villus sampling (CVS)","Quad screen","Nonstress test"],
            answer: 1,
            rationale: "CVS samples chorionic villi (placental tissue) and can be performed early, but it cannot detect neural tube defects. Amniocentesis samples amniotic fluid and can.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A pregnant patient has a high fever, chills, and unilateral flank pain. Which condition is most likely, and how is it treated?",
            options: ["Cystitis — oral antibiotics at home","Pyelonephritis — IV fluids and IV antibiotics","Bacterial vaginosis — metronidazole","Toxic shock syndrome — supportive care only"],
            answer: 1,
            rationale: "High fever, chills, and unilateral flank pain suggest pyelonephritis (upper UTI), treated with IV fluids and IV antibiotics. Cystitis causes low-grade fever, dysuria, and hematuria.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Down syndrome is caused by which chromosomal abnormality?",
            options: ["Monosomy X","Trisomy 21","XXY","A 14/21 translocation"],
            answer: 1,
            rationale: "Down syndrome is trisomy 21 (three copies of chromosome 21), identified by karyotype. Monosomy X is Turner syndrome; XXY is Klinefelter syndrome.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which fertility medication stimulates follicle growth and egg release?",
            options: ["Bromocriptine","Clomiphene citrate (Clomid)","Progesterone","Methotrexate"],
            answer: 1,
            rationale: "Clomiphene citrate (Clomid) stimulates follicle growth and egg release. Bromocriptine inhibits prolactin to induce ovulation.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which are essential factors for female fertility? Select all that apply.",
            options: ["Favorable cervical mucus","Patent, normally motile fallopian tubes","Ovaries that produce and release normal eggs","A favorable endometrium","A retroverted uterus"],
            answers: [0, 1, 2, 3],
            rationale: "Female fertility requires favorable cervical mucus, patent/motile tubes, ovulation of normal eggs, a favorable endometrium, and adequate hormones. A retroverted uterus is not required.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "Which statement is an accurate description of dysmenorrhea?",
            options: ["Pain with menses","Endometrial hyperplasia","Bleeding between menses","Heavy bleeding with menses"],
            answer: 0,
            rationale: "Dysmenorrhea is defined as pain with menses. Endometrial hyperplasia results from anovulation and persistent estrogen stimulation. Bleeding between menses is metrorrhagia. Heavy bleeding with menses is menorrhagia.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which finding would indicate infection in a pregnant client?",
            options: ["Chills","Fever","Diarrhea","Flank pain","Burning on urination"],
            answers: [0,1,2,3,4],
            rationale: "Findings indicative of infection include chills, fever, diarrhea, flank pain, and burning on urination. These findings would be reported to the health care provider for additional testing.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "A 16-year-old high school student comes to a community health center because of the fear of having contracted herpes. The teenager is upset and shares this information with the community health center nurse. Which response would the nurse provide?",
            options: ["\"Let me get a brief health history now.\"","\"Try not to worry until you know whether you have herpes.\"","\"You sound worried. Let me make arrangements to have you examined.\"","\"Herpes has received too much attention in the media; let’s be realistic.\""],
            answer: 2,
            rationale: "Telling the client that she sounds worried and offering to arrange an examination immediately identifies the client's fear as real and offers a service to meet the need for information about the client's physical status. Obtaining the health history ignores the client's concern and focuses on the nurse's need to complete the task of obtaining a history. Telling the client not to worry minimizes the client's concern about having a sexually transmitted infection. Saying that herpes has received too much attention in the media minimizes the client's concern and implies that the client is being unrealistic.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which action would the nurse include in the plan of care for a client who is being treated for a sexually transmitted infection and reports fever and irregular bleeding?",
            options: ["The use of analgesics","Abdominal palpation","Complete blood count","Culture of the cervical canal","Administration of antibiotics as prescribed","Teaching about negative effects of douching"],
            answers: [0,1,2,3,4,5],
            rationale: "Sexually transmitted infection is a common cause of pelvic inflammatory disease (PID). Symptoms include fever, chronic pelvic pain, abnormal vaginal discharge, nausea and anorexia, and irregular vaginal bleeding. Analgesics may be needed to provide for patient comfort. Palpation of the abdomen and pelvic organs may reveal tenderness. A complete blood count may reveal elevated leukocytes and sedimentation rate. Cultures of the cervical canal are done to identify the infecting or organism, which most commonly is Neisseria gonorrhoeae Chlamydia trachomatis. Urinalysis is usually done to identify infection of the urinary tract. Antimicrobials are begun promptly to treat the infection. Douching results in changes in the vaginal flora and predisposes the woman to the development of PID, bacterial vaginosis, and ectopic pregnancy.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which information regarding risks that may result from an untreated chlamydia infection would the nurse include when providing education for a female client?",
            options: ["Sterility","Ectopic pregnancy","Blocked Fallopian tubes","Pelvic inflammatory disease","Increased likelihood of HIV infection"],
            answers: [0,1,2,3,4],
            rationale: "Untreated chlamydia can result in sterility in both women and men, an increased risk for ectopic pregnancy, blocked Fallopian tubes, pelvic infammatory disease, and a five-time greater risk for contracting HIV infection.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which symptom indicates pelvic inflammatory disease?",
            options: ["Fever","Elevated erythrocyte sedimentation rate (ESR)","Chronic pelvic pain","Irregular vaginal bleeding","Abnormal vaginal discharge","Bilateral adnexal tenderness"],
            answers: [0,1,2,3,4,5],
            rationale: "Fever, elevated ESR and C-reactive protein, chronic pelvic pain, irregular vaginal bleeding, abnormal vaginal discharge, and bilateral adnexal tenderness are all symptoms of pelvic inflammatory disease, an infection of the upper reproductive tract.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "After treatment for a bladder infection, a client asks whether there is anything she can do to prevent cystitis in the future. Which response would the nurse give?",
            options: ["\"Avoid regular use of tampons.\"","\"Decrease your intake of prune juice.\"","\"Increase your daily fluid consumption.\"","\"Cleanse the perineum from back to front.\""],
            answer: 2,
            rationale: "Increasing fluid intake flushes the urinary tract of microorganisms. Use of tampons does not increase the risk of cystitis. Fluid consumption should be increased, not decreased. The preferred method of cleansing is from front to back (urethra to vagina); however, studies have shown that this method of cleansing is not a significant factor in the prevention of cystitis.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which preexisting condition is an indication for a cesarean birth?",
            options: ["Gonorrhea","Chlamydia","Chronic hepatitis","Active genital herpes"],
            answer: 3,
            rationale: "Once the membranes have ruptured, an active herpes infection can infect the fetus; because herpes does not cross the placenta, a cesarean birth prevents transfer of the virus to the fetus. Gonorrhea, chlamydia, and chronic hepatitis are not indications for a cesarean birth; treatment is pharmacological.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which sexually transmitted infection is caused by protozoa?",
            options: ["Scabies","Chancroid","Pediculosis","Trichomoniasis"],
            answer: 3,
            rationale: "Trichomoniasis is caused by protozoa. A parasite causes scabies. Bacteria cause chancroid. A parasite also causes pediculosis.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which is associated with in vitro fertilization embryo transfer (IVF-ET)?",
            options: ["Embryonic human immunodeficiency virus (HIV)","Tubal pregnancy","Congenital anomalies","Hyperemesis gravidarum"],
            answer: 1,
            rationale: "There is an increased risk of tubal pregnancy with IVF-ET. There is not an increased risk for embryonic HIV infection, congenital anomalies, or hyperemesis gravidarum with IVF-ET.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "Which intervention would the nurse recommend to relieve symptoms of a yeast infection?",
            options: ["Using a sitz bath","Sleeping in tight leggings","Sitting in a warm bubble bath","Using tampons if she is on her period"],
            answer: 0,
            rationale: "A sitz bath with or without colloidal oatmeal can be very soothing to irritated skin. It is better to sleep without underwear if possible; tight leggings can worsen symptoms. Use of bath salts or bubble bath is not recommended because it can irritate the already swollen skin. If a woman has her period, treatment should continue, and she should avoid using tampons because they can absorb the vaginal medication that may have been prescribed.",
            topic: "Disorders & Genetics",
            source: "eaq"
          },
          {
            stem: "The nurse teaches a client who is about to undergo an amniocentesis. Which is the primary purpose of the use of ultrasonography during the procedure?",
            options: ["Estimation of the gestational age of the fetus","Estimation of the amniotic fluid index","Determination of the position of the fetus and the placenta","Determination of the location of maternal abdominal organs"],
            answer: 2,
            rationale: "The position of the fetus and placenta are located by means of ultrasonography to prevent trauma to the fetus from the needle during the amniocentesis. Although ultrasonography can be used to determine gestational age, this is not its purpose before an amniocentesis. Determining the amount of fluid in the amniotic sac is not the purpose of ultrasonography just before an amniocentesis. The position of maternal organs are not determined during an amniocentesis. The gravid uterus anatomically sits above the vital abdominal organs.",
            topic: "Disorders & Genetics",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "antepartum",
      label: "Antepartum Care",
      week: 1,
      sets: {
        mustKnow: [
          {
            stem: "A patient reports that her last menstrual period began on March 10 and ended March 15. Using Naegele's rule, what is her estimated date of birth?",
            options: ["December 17","December 22","January 17","December 10"],
            answer: 0,
            rationale: "Naegele's rule uses the FIRST day of the LMP (March 10): subtract 3 months (December 10), then add 7 days = December 17.",
            topic: "Antepartum Care",
            source: "exam-1"
          },
          {
            stem: "A patient at 30 weeks' gestation has a fundal height of 25 cm. What is the nurse's best interpretation?",
            options: ["This is expected and requires no action","This is more than 2 cm off from the gestational age and should be reported","This confirms intrauterine growth restriction","Fundal height is unreliable and should be ignored"],
            answer: 1,
            rationale: "Fundal height should be within about ±2 cm of gestational age in weeks (from ~22–34 weeks). 25 cm at 30 weeks is a 5-cm discrepancy that needs evaluation.",
            topic: "Antepartum Care",
            source: "exam-1"
          },
          {
            stem: "A patient delivering today at 36 2/7 weeks has this history: one miscarriage at 9 weeks, one vaginal birth at 39 weeks, and a cesarean birth of twins at 35 weeks. All children are living. What is her GTPAL after today's birth?",
            options: ["G4 T1 P2 A1 L4","G3 T1 P1 A1 L4","G5 T1 P2 A1 L4","G4 T2 P1 A1 L3"],
            answer: 0,
            rationale: "Gravida counts pregnancies: miscarriage + term birth + twin pregnancy + today = G4. Term 1 (39 wk). Preterm 2 (the 35-wk twins and today). Abortions 1. Living 4 (1 + twins + today).",
            topic: "Antepartum Care",
            source: "exam-1"
          },
          {
            stem: "A pregnant patient's partner answers every question for her and will not leave the room. What is the nurse's most appropriate action?",
            options: ["Continue the visit with the partner present to save time","Create a private moment — for example, escorting her alone to give a urine sample — to screen for intimate partner violence","Ask the patient about abuse directly in front of the partner","Document \"no abuse\" since she did not report any"],
            answer: 1,
            rationale: "Intimate partner violence increases in pregnancy and patients rarely disclose with a controlling partner present. Create private screening time and never raise it in front of others.",
            topic: "Antepartum Care",
            source: "exam-2"
          },
          {
            stem: "By approximately how many weeks should a first-time mother feel fetal movement (quickening)?",
            options: ["8 weeks","12 weeks","20 weeks","32 weeks"],
            answer: 2,
            rationale: "Quickening occurs by about 20 weeks and is a key indicator of fetal well-being.",
            topic: "Antepartum Care",
            source: "exam-2"
          },
          {
            stem: "A patient at 17 weeks is anxious because her quad screen (MSAFP) came back abnormal. What is the nurse's best teaching?",
            options: ["\"This confirms your baby has a birth defect.\"","\"This is a maternal blood SCREEN, not a diagnosis — it means follow-up testing such as ultrasound or amniocentesis is needed.\"","\"The test is drawn from the amniotic fluid and is diagnostic.\"","\"An abnormal result at 17 weeks is always a lab error.\""],
            answer: 1,
            rationale: "The quad screen/MSAFP is a maternal blood SCREEN (drawn ~15–22 weeks), not diagnostic — an abnormal result means further testing is needed.",
            topic: "Antepartum Care",
            source: "exam-2"
          },
          {
            stem: "Which findings are POSITIVE (diagnostic) signs of pregnancy? Select all that apply.",
            options: ["Amenorrhea","Auscultation of the fetal heartbeat by the examiner","A positive urine pregnancy test","Fetal movement felt by the examiner","Visualization of the fetus on ultrasound"],
            answers: [1, 3, 4],
            rationale: "Positive signs can only be explained by pregnancy: hearing the fetal heartbeat, the examiner feeling fetal movement, and seeing the fetus on ultrasound. Amenorrhea is presumptive; a positive pregnancy test is probable.",
            topic: "Antepartum Care",
            source: "exam-2"
          },
          {
            stem: "Which findings are PROBABLE (objective) signs of pregnancy? Select all that apply.",
            options: ["Goodell's, Chadwick's, and Hegar's signs","A positive pregnancy test","Braxton Hicks contractions","Auscultation of the fetal heartbeat by the examiner","Nausea and vomiting"],
            answers: [0, 1, 2],
            rationale: "Probable (objective) signs include Goodell's/Chadwick's/Hegar's signs, a positive pregnancy test, Braxton Hicks contractions, and palpating the fetal outline. Auscultating the fetal heartbeat is a POSITIVE (diagnostic) sign; nausea and vomiting is PRESUMPTIVE (subjective).",
            topic: "Antepartum Care",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "Why does a pregnant woman develop physiologic (pseudo) anemia?",
            options: ["The body stops making red blood cells","Plasma volume increases faster than the red blood cell count, diluting the concentration","Iron stores are completely depleted","The spleen destroys red blood cells"],
            answer: 1,
            rationale: "Blood volume rises 40-50% in pregnancy; because plasma volume increases faster than the red blood cell count, the RBC concentration is diluted, producing physiologic (pseudo) anemia.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "Pregnancy is a hypercoagulable state, which increases the risk of:",
            options: ["Spontaneous bleeding","Blood clots (venous thromboembolism)","Iron-deficiency anemia","Dehydration"],
            answer: 1,
            rationale: "Increased clotting factors plus venous stasis make pregnancy hypercoagulable, raising the risk of clots (VTE).",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "The recommended total weight gain for a woman with a normal pre-pregnancy BMI is:",
            options: ["11-20 lb","15-25 lb","25-35 lb","28-40 lb"],
            answer: 2,
            rationale: "Normal-BMI: 25-35 lb. Underweight 28-40, overweight 15-25, obese 11-20. The pattern is ~1 lb/week in the last two trimesters.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "A pregnant patient's partner develops fatigue, trouble sleeping, and weight gain. This is known as:",
            options: ["Ambivalence","Couvade syndrome","Introversion","Binding in"],
            answer: 1,
            rationale: "Couvade syndrome is when the partner experiences pregnancy-like symptoms such as fatigue, sleep trouble, and weight gain.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "A pregnant patient develops brownish patches on her face. The nurse explains that this hyperpigmentation (chloasma, the 'mask of pregnancy'):",
            options: ["Is a sign of liver failure","Is hormone-driven, worsened by sun exposure, and usually fades after delivery","Requires immediate treatment","Means she has preeclampsia"],
            answer: 1,
            rationale: "Chloasma (melasma) and linea nigra are hormone-driven hyperpigmentation changes, worsened by sun exposure, that typically fade postpartum.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "Late in pregnancy a woman develops a 'waddling' gait and increased low-back curvature. What causes these musculoskeletal changes?",
            options: ["Calcium deficiency","Relaxin and pregnancy hormones loosening the pelvic joints, plus a shifted center of gravity","A pinched sciatic nerve","Dehydration"],
            answer: 1,
            rationale: "Relaxin and other pregnancy hormones loosen the pelvic joints ('waddle' gait), and the enlarging uterus shifts the center of gravity, causing lordosis.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "In the first trimester a patient says she is happy about the pregnancy but also fearful. The nurse recognizes this contradictory feeling as:",
            options: ["Ambivalence, a normal early emotional response","Introversion","Couvade syndrome","A sign of depression requiring referral"],
            answer: 0,
            rationale: "Ambivalence - holding contradictory emotions such as happiness and fear - is a normal maternal emotional response, especially early in pregnancy.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "For an uncomplicated pregnancy, prenatal visits between 28 and 36 weeks occur:",
            options: ["Every 4 weeks","Every 2 weeks","Every week","Monthly"],
            answer: 1,
            rationale: "Up to 28 weeks: every 4 weeks; 28-36 weeks: every 2 weeks; 36 weeks to birth: weekly.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "A rubella titer drawn at the first prenatal visit determines:",
            options: ["Blood type","Immunity to rubella","Gestational diabetes","Neural tube defects"],
            answer: 1,
            rationale: "The rubella titer checks immunity to rubella. A non-immune woman receives the MMR vaccine postpartum, since it is a live virus.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "Which are Rubin's maternal tasks of pregnancy? Select all that apply.",
            options: ["Ensuring safe passage through pregnancy, labor, and birth","Seeking acceptance of the child by others","Seeking acceptance of herself as a mother ('binding in')","Learning to give of oneself on behalf of the child","Returning to pre-pregnancy weight before delivery"],
            answers: [0, 1, 2, 3],
            rationale: "Rubin's four tasks are ensuring safe passage, seeking acceptance of the child by others, seeking acceptance of self as mother, and learning to give of oneself for the child. Weight is not one of them.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "A client who is at 20 weeks’ gestation visits the prenatal clinic for the first time. Assessment reveals temperature of 98.8°F (37.1°C), pulse of 80 beats per minute, blood pressure of 128/80 mm Hg, weight of 142 lb (64.4 kg) (prepregnancy weight was 132 lb [59.9 kg]), fetal heart rate (FHR) of 140 beats per minute, urine that is negative for protein, and fasting blood glucose level of 92 mg/dL (5.2 mmol/L). Which would the nurse do after making these assessments?",
            options: ["Report the findings because the client needs immediate intervention.","Document the results because they are expected at 20 weeks’ gestation.","Record the findings in the medical record because they are not within the norm but are not critical.","Prepare the client for an emergency admission because these findings may represent jeopardy to the client and fetus."],
            answer: 1,
            rationale: "All data presented are expected for a client at 20 weeks’ gestation and should be documented. There is no need for immediate intervention or an emergency admission because all findings are expected.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "The first day of a client’s last menstrual period was July 22. Which is the estimated date of birth (EDB)?",
            options: ["May 7","April 29","April 22","March 6"],
            answer: 1,
            rationale: "Her EDB is April 29. Naegeles rule is an indirect, noninvasive method for estimating the date of birth: EDB = last menstrual period + 1 year – 3 months + 7 days. May 7 is beyond the EDB. April 22 and March 6 are both before the EDB.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "A prenatal client’s vaginal mucosa is noted to have a purplish discoloration. Which sign would be documented in the client’s clinical record?",
            options: ["Hegar","Goodell","Chadwick","Braxton-Hicks"],
            answer: 2,
            rationale: "A purplish coloration, called the Chadwick sign, results from the increased vascularity and blood vessel engorgement of the vagina. The Hegar sign is softening of the lower uterine segment. The Goodell sign is softening of the cervix. After the fourth month of pregnancy, irregular, painless uterine contractions, called Braxton-Hicks contractions, can be felt through the abdominal wall.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "Which laboratory test is conducted during the initial prenatal visit?",
            options: ["1-hour glucose tolerance test","3-hour glucose tolerance test","Cervical culture for Neisseria gonorrhoeae","Chest x-ray for a positive tuberculosis skin test (TST)"],
            answer: 2,
            rationale: "During the initial prenatal visit, a cervical culture for N. gonorrhoeae is obtained. A 1-hour glucose tolerance test is completed at 24 to 28 weeks of gestation. A 3-hour glucose tolerance test is completed if a pregnant client fails the 1-hour glucose tolerance test. A chest x-ray is required after 20 weeks of gestation if the client has a positive TST.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "Which condition is detected by an alpha-fetoprotein test?",
            options: ["Kidney defects","Cardiac anomalies","Neural tube defects","Urinary tract anomalies"],
            answer: 2,
            rationale: "The alpha-fetoprotein test detects neural tube defects, Down syndrome, and other congenital anomalies. It is a screening test that affords a tentative diagnosis; confirmation requires more definitive testing. Anomalies of the kidneys, heart, and urinary tract are not revealed by the alphafetoprotein test.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "Which term would the nurse use to describe the first fetal movements that a pregnant client feels?",
            options: ["Lightening","Quickening","Engagement","Ballottement"],
            answer: 1,
            rationale: "The word quickening originates from the Middle English word quik, which means \"alive.\" Lightening is the descent of the fetus into the birth canal toward the end of pregnancy. Engagement occurs when the presenting part is at the level of the ischial spines. Ballottement refers to the technique that causes the fetus to rebound in the amniotic fluid after pressure has been exerted against the fetus.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "A pregnant client tells the nurse that she has two toddlers at home and that their father abandoned the family last month and she doesn’t know what to do. Which conclusion would the nurse make about the client’s emotional state?",
            options: ["She is angry that the father has left.","She feels overwhelmed by the situation.","She is expressing ambivalence about her pregnancy.","She is denying the reality of her pregnancy."],
            answer: 1,
            rationale: "Because of the difficult home situation, this client is experiencing multiple stressors that could cause difficulty with coping. The client also directly tells the nurse that she doesn’t know what to do, suggesting that she is overwhelmed with her situation. There is no information to support the conclusion that the client is angry or that she is ambivalent about the pregnancy. The client is attending the prenatal clinic, which indicates that she is aware of reality and is not in denial.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "On a routine prenatal visit, which is the sign or symptom that a healthy primigravida at 20 weeks' gestation will most likely report for the first time?",
            options: ["Quickening","Palpitations","Pedal edema","Vaginal spotting"],
            answer: 0,
            rationale: "The recognition of fetal movement or quickening commonly occurs in primigravidas at 18 to 20 weeks' gestation; it is felt about 2 weeks earlier in multigravidas. Palpitations should not occur in the healthy primigravidas. Pedal edema may occur at the end of the pregnancy as the gravid uterus presses on the femoral arteries, impeding circulation. Immediate follow-up care is required when it occurs this early in the pregnancy. Vaginal spotting is abnormal and requires immediate follow-up care.",
            topic: "Antepartum Care",
            source: "eaq"
          },
          {
            stem: "Which cervical changes are observed during pregnancy?",
            options: ["The cervical tip becomes soft.","The fragility of cervical tissues decreases.","The volume of cervical muscle increases.","The external cervical os appears as a jagged slit.","The elasticity of cervical collagen-rich connective tissue increases."],
            answers: [0,2,4],
            rationale: "By the beginning of the sixth week of pregnancy, the cervical tip softens. During pregnancy, the cervical muscle and its collagen-rich connective tissues increase in volume and become loose and highly elastic. Cervical tissue fragility also increases. The external cervical os appears as a jagged slit postpartum; however, it does not during pregnancy.",
            topic: "Antepartum Care",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "antepartum2",
      label: "Antepartum Care II",
      week: 2,
      sets: {
        mustKnow: [
          {
            stem: "A fetus at 34 weeks is undergoing a non-stress test. Which finding does the nurse document as REACTIVE?",
            options: ["One acceleration of 10 bpm lasting 10 seconds in 20 minutes","Two accelerations of 15 bpm above baseline lasting 15 seconds each within 20 minutes","No accelerations over a 40-minute period","Late decelerations after each contraction"],
            answer: 1,
            rationale: "At ≥32 weeks, reactive = at least 2 accelerations of 15 bpm above baseline lasting 15 seconds within 20 minutes. Under 32 weeks the criteria drop to 10 bpm for 10 seconds.",
            topic: "Antepartum Care II",
            source: "exam-1"
          },
          {
            stem: "An amniocentesis is performed for fetal lung maturity. Which lecithin/sphingomyelin (L/S) ratio indicates MATURE fetal lungs?",
            options: ["1:2 or lower","2:1 or higher","1:1 exactly","Any ratio — the L/S ratio does not assess the lungs"],
            answer: 1,
            rationale: "An L/S ratio of 2:1 or greater indicates mature fetal lungs (adequate surfactant).",
            topic: "Antepartum Care II",
            source: "exam-1"
          },
          {
            stem: "A contraction stress test shows late decelerations with more than half of the contractions. How does the nurse interpret this result?",
            options: ["Negative — reassuring","Positive — indicating poor placental perfusion","Reactive — reassuring","Equivocal — no follow-up needed"],
            answer: 1,
            rationale: "The CST is \"backwards\": a POSITIVE CST (late decels with more than half of contractions) is the bad result indicating poor placental perfusion. A negative CST is reassuring.",
            topic: "Antepartum Care II",
            source: "exam-2"
          },
          {
            stem: "The nurse is reviewing the biophysical profile (BPP). Which components are assessed by ultrasound? Select all that apply.",
            options: ["Fetal breathing","Amniotic fluid index","Fetal tone","Fetal movement","Non-stress test"],
            answers: [0, 1, 2, 3],
            rationale: "BATMAN: Breathing, Amniotic fluid, Tone, Movement are the four ultrasound components (up to 8/8); the Non-stress test is the fifth and is not by ultrasound. Each scores 0 or 2.",
            topic: "Antepartum Care II",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "Which measure helps relieve heartburn in pregnancy?",
            options: ["Lie down flat right after eating","Take non-sodium antacids as recommended","Increase caffeine intake","Eat large meals less often"],
            answer: 1,
            rationale: "Heartburn (the uterus displaces the stomach and the esophageal sphincter relaxes) is eased with non-sodium antacids and small, frequent meals.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which measure helps relieve first-trimester nausea and vomiting?",
            options: ["Eat a large breakfast immediately on waking","Eat dry crackers or toast before rising, with small frequent meals","Drink coffee before getting up","Lie flat after each meal"],
            answer: 1,
            rationale: "Nausea (from increased hCG) is eased by dry crackers or toast before rising, small frequent meals, and avoiding greasy or spicy foods.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Breast care teaching during pregnancy includes:",
            options: ["Wash the nipples with soap daily","Avoid using soap on the nipples","Stop wearing a bra","Apply alcohol to the nipples"],
            answer: 1,
            rationale: "Avoid soap on the nipples because it dries them out. A supportive bra is recommended, and a nipple shield can help flat or inverted nipples.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Proper seat belt use in pregnancy places the lap belt:",
            options: ["Across the top of the abdomen","Under the abdomen","Behind the back","It should not be worn"],
            answer: 1,
            rationale: "The lap belt goes under the abdomen. Any pregnant patient in a car accident should be evaluated.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A patient reports fewer than 2 fetal movements in a 2-hour period after eating, drinking, and emptying her bladder. The nurse should advise her to:",
            options: ["Wait another day and recount","Contact her provider","Increase fluids only","Take a warm bath"],
            answer: 1,
            rationale: "Fewer than 2 movements in 2 hours (after eating, drinking, and voiding) warrants contacting the provider to evaluate fetal well-being.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A patient of childbearing age is prescribed isotretinoin (Accutane) for acne. What is the priority teaching?",
            options: ["It is safe throughout pregnancy","It causes many birth defects, so reliable birth control is required while taking it","It should be taken with folic acid to prevent defects","It only affects the fetus in the third trimester"],
            answer: 1,
            rationale: "Isotretinoin (Accutane) is a potent teratogen that causes many birth defects; reliable contraception is required to receive it. No medication is considered 100% safe in pregnancy.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Why might a segment of umbilical cord be tested for cocaine after delivery?",
            options: ["Cocaine is stored in the cord for years","Cocaine metabolizes rapidly, so a maternal urine screen may be negative within 24-48 hours","The cord is easier to obtain than blood","Cocaine is not detectable in maternal urine at all"],
            answer: 1,
            rationale: "Cocaine metabolizes fast, so a urine screen can be negative within 24-48 hours; a cord segment reveals exposure during pregnancy.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A 38-year-old is pregnant with her first baby. Because she is of advanced maternal age (35 or older), the nurse anticipates counseling about the increased risk of:",
            options: ["Postterm pregnancy only","Down syndrome and other chromosomal conditions","A shorter labor","A decreased need for prenatal visits"],
            answer: 1,
            rationale: "At 35 or older (advanced maternal age), the risk of Down syndrome and other chromosomal conditions rises, so screening/diagnostic testing is offered. AMA also carries higher risks of gestational diabetes, hypertension, and cesarean birth.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Nuchal translucency ultrasound, performed at 11-14 weeks, is a screen for:",
            options: ["Neural tube defects","Down syndrome risk","Gestational diabetes","Fetal lung maturity"],
            answer: 1,
            rationale: "Nuchal translucency measures the clear area behind the fetal neck (>3 mm is at risk) and screens for Down syndrome — it is a screen, not diagnostic.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which outcomes are associated with maternal tobacco use in pregnancy? Select all that apply.",
            options: ["Low birth weight","Preterm birth","Premature rupture of membranes","Increased SIDS risk after birth","Fetal macrosomia"],
            answers: [0, 1, 2, 3],
            rationale: "Tobacco causes vasoconstriction, leading to low birth weight, preterm birth, PROM, and (after birth) increased SIDS and infections. Macrosomia is linked to diabetes, not smoking.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "Morning sickness generally disappears by the end of which month?",
            options: ["Fifth month","Third month","Fourth month","Second month"],
            answer: 1,
            rationale: "Because of a decrease in chorionic gonadotropin, morning sickness seldom persists beyond the first trimester. Morning sickness usually ends at the end of the third month, not the second month, when the chorionic gonadotropin level falls. It is still present in the second month because of the high level of chorionic gonadotropin but has usually diminished by the fifth month.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which is a primary teaching point for a pregnant adolescent at the first prenatal clinic visit?",
            options: ["Instructing her about the care of an infant","Informing her of the risks of bottle-feeding","Advising her to watch for danger signs of preeclampsia","Encouraging her to continue regularly scheduled prenatal care"],
            answer: 3,
            rationale: "It is not uncommon for adolescents to avoid prenatal care; many do not recognize the deleterious effect that lack of prenatal care can have on them and their infants. Instruction in the care of an infant can be done in the later part of pregnancy and reinforced during the postpartum period. Informing the client of the benefits of breast-feeding are important. However, a discussion of the risks of bottle feeding may not be appropriate at the first prenatal visit. Advising the client to watch for danger signs of preeclampsia is necessary, but it is not the priority intervention at this time as the onset of preeclampsia is after 20 weeks' gestation.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which medication is safe to take during pregnancy?",
            options: ["Metronidazole","Aspirin","Codeine","Loratadine (Claritin)"],
            answer: 3,
            rationale: "Loratadine (Claritin) is a Category B and may be taken safely during all stages of pregnancy. Metronidazole should not be used during the first trimester of pregnancy. Salicylates like aspirin and codeine should be avoided throughout pregnancy.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which is a neonatal effect of maternal smoking during pregnancy?",
            options: ["Low birth weight","Facial abnormalities","Chronic lung problems","Hyperglycemic reactions"],
            answer: 0,
            rationale: "Smoking during pregnancy causes a decrease in placental perfusion, resulting in a newborn who is small for gestational age (SGA). Facial abnormalities and developmental restriction may occur if the woman ingests alcoholic drinks during pregnancy, resulting in fetal alcohol syndrome. Smoking during pregnancy and chronic lung problems in newborns are not related. Maternal smoking may result in an SGA neonate; these neonates may experience hypoglycemia, not hyperglycemia.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which would be included in the plan of care for an obstetrical client who has been taking carbamazepine throughout the first trimester of pregnancy?",
            options: ["Evaluation for fetal hydramnios","Evaluation for a neural tube defect","Evaluation for cardiac malformation","Chromosomal assessment for Down syndrome"],
            answer: 1,
            rationale: "Carbamazepine is associated with neural tube defects. Fetal hydramnios, cardiac malformation, and Down syndrome are not related to the use of carbamazepine.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "A nonstress test (NST) is scheduled for a client with mild preeclampsia. During an NST, the client asks what it means when the fetal heart rate goes up every time the fetus moves. Which is an appropriate response?",
            options: ["\"These accelerations are a sign of fetal well-being.\"","\"These accelerations indicate fetal head compression.\"","\"Umbilical cord compression is causing these accelerations.\"","\"Uteroplacental insufficiency is causing these accelerations.\""],
            answer: 0,
            rationale: "The NST is performed before labor begins. Accelerations with movement and a baseline variability of 5 to 15 beats/min indicate fetal well-being. This reactive NST is considered positive. Early decelerations are associated with fetal head compression during a contraction stress test (CST) or during labor. Variable decelerations are associated with cord compression during a CST or during labor. Late decelerations during a CST or during labor are associated with uteroplacental insufficiency.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which information about adolescent growth and development would the nurse need to understand before discussing changes in body size to a 16-year-old adolescent at 24 weeks’ gestation?",
            options: ["Adolescents generally regain their figures 2 weeks after the birth, so size is of moderate concern.","Adolescents are in a high-risk category, so weight gain should be limited to prevent complications.","Body image is very important to adolescents; therefore, pregnant teenagers are overly concerned about body size.","Physiological growth in adolescents is more rapid than in adults, so the gravid size is larger than that of an adult woman."],
            answer: 2,
            rationale: "Because of the changes in body size, the pregnant adolescent may feel insecure as she struggles to establish her identity. There are no data to support the statement that adolescents generally regain their figures 2 weeks after the birth. The optimal weight gain for an adolescent is at the upper range for her body mass index; this will help prevent complications, so limiting weight gain does not prevent complications. Although physiological growth is rapid, the adolescent's gravid size falls within the expected parameters for pregnant women and is not larger than that of adult women.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which factor contraindicates sexual intercourse during pregnancy?",
            options: ["Fetal tachycardia","Presence of leukorrhea","Premature rupture of membranes","Imminence of the estimated date of birth"],
            answer: 2,
            rationale: "Ruptured membranes leave the products of conception exposed to bacterial invasion. Intact membranes act as a barrier against organisms that may cause an intrauterine infection. Fetal tachycardia may occur during sex, but there is no evidence that it is harmful for the fetus. Leukorrhea is common because of increased production of mucus containing exfoliated vaginal epithelial cells; intercourse is not contraindicated by leukorrhea. Intercourse is not contraindicated near the estimated date of birth if the membranes are intact; modification of sexual positions may be needed because of the enlarged abdomen.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "When providing information to high school students about the reproductive cycle, after which age in hours will the school nurse teach that the ovum is no longer viable for fertilization?",
            options: ["10","24","36","48"],
            answer: 1,
            rationale: "After ovulation, the egg lives for 12 to 24 hours and must be fertilized during that time if a woman is to become pregnant. At 10 hours old, the egg is still viable for fertilization. At 36 or 48 hours, the ovum is too old for fertilization, has already begun disintegration, and will be shed along with the uterine lining during the next menses.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "A client at 35 weeks' gestation asks the nurse why her breathing has become more difficult. How would the nurse respond?",
            options: ["Your lower rib cage is more restricted.","Your diaphragm has been displaced upward.","Your lungs have increased in size since you got pregnant.","The height of your rib cage has increased since you got pregnant."],
            answer: 1,
            rationale: "The pressure of the enlarging fetus causes upward displacement of the diaphragm, which results in thoracic breathing; this limits the descent of the diaphragm on inspiration. The lower rib cage expands; it does not become restricted. There is no change in the size of the lungs during pregnancy. The thoracic cage enlarges; it does not rise.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Women who become pregnant for the first time at a later reproductive age (35 years or older) are at risk for which complications?",
            options: ["Seizures","Preterm labor","Gestational diabetes","Chromosomal anomalies","Bleeding in the first trimester"],
            answers: [1,2,3,4],
            rationale: "Increased risk for preterm labor is linked to age; it occurs more commonly in older primigravidas and adolescents. Mature women also have a significantly increased incidence of gestational diabetes mellitus. After 35 years of age, mature women have an increased risk of having children with chromosomal abnormalities. Bleeding in the first trimester as a result of spontaneous abortion is more common in mature gravidas. Seizures are not more common in mature gravidas.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which information would the nurse give a pregnant client about having a chorionic villus sampling (CVS)?",
            options: ["The test can lead to spontaneous abortion.","The results are not as accurate.","The information it provides is inadequate.","It must be done with the use of laparoscopic surgery."],
            answer: 0,
            rationale: "The American Congress of Obstetricians and Gynecologists recommends that CVS not be performed before 9 weeks’ gestation and should be performed between 10 to 12 weeks. The test, if successfully performed, is 100% accurate, and it provides enough information for a diagnosis. A laparoscopic procedure is not necessary, because CVS is performed either by means of transcervical catheter aspiration or transabdominal needle aspiration. The risks of the procedure include spontaneous abortion, infection, and Rh sensitization.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "For which reason is an ultrasound done during the first trimester?",
            options: ["Estimate fetal age","Detect hydrocephalus","Rule out congenital defects","Approximate fetal linear growth"],
            answer: 0,
            rationale: "– Measurement of the crown rump length is useful in approximating fetal age in the first trimester. Hydrocephalus cannot be detected during the first trimester. Ultrasonography is used to detect structural defects in the second trimester. It is too early in this pregnancy to determine fetal linear growth.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "During a nonstress test, the baseline fetal heart rate of 130 to 140 beats per minute rises to 160 twice and 157 once during a 20-minute period. Each of these episodes lasts 20 seconds. Which action would the nurse take?",
            options: ["Discontinue the test because the pattern is within the normal range.","Encourage the client to drink more fluids to decrease fetal heart rate.","Notify the primary health care provider and prepare for an emergency birth.","Record this nonreassuring pattern and continue the test for further evaluation."],
            answer: 0,
            rationale: "The baseline heart rate is within the expected range. The accelerations meet the criteria for an increase of 15 beats that lasts at least 15 seconds during a 20-minute period. This is a reassuring pattern that is indicative of fetal well-being. Drinking more fluids is unnecessary because the fetal heart rate is within the expected range. Preparing for an emergency birth is unnecessary because the test results indicate fetal well-being. The test results meet the standards for a reassuring pattern; further evaluation is unnecessary.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which information about nausea and vomiting in the first trimester would the nurse provide to the pregnant client?",
            options: ["It is always present during early pregnancy.","It will disappear when lightening occurs.","It is a common response to an unwanted pregnancy.","It may be related to an increased human chorionic gonadotropin level."],
            answer: 3,
            rationale: "An increased level of human chorionic gonadotropin, or hCG, may cause nausea and vomiting, but the exact reason is unknown. Some pregnant patients do not experience nausea and vomiting. Lightening occurs at the end of the third trimester; nausea and vomiting usually cease at the end of the first trimester. Nausea and vomiting are unrelated to whether a pregnancy is desired or unwanted.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "A pregnant client asks how smoking will affect her baby. Which information about cigarette smoking will influence the nurse’s response?",
            options: ["It relieves maternal tension, and the fetus responds accordingly to the reduction in stress.","The resulting vasoconstriction affects both fetal and maternal blood vessels.","Substances contained in smoke permeate through the placenta and compromise the fetus’s well-being.","Effects are limited because fetal circulation and maternal circulation are separated by the placental barrier."],
            answer: 1,
            rationale: "Cigarette smoking or continued exposure to secondary smoke causes both maternal and fetal vasoconstriction, resulting in fetal growth retardation and increased fetal and infant mortality. There is no clinical evidence that smoking relieves tension or that the fetus is more relaxed. Smoking causes vasoconstriction; permeability of the placenta to smoke is irrelevant. Although the fetal and maternal circulations are separate, vasoconstriction occurs in both mother and fetus.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which recommendation would the nurse make to a pregnant client who sits almost continuously during her working hours?",
            options: ["\"Try to walk around every few hours during the workday.\"","\"Ask for time in the morning and afternoon to elevate your legs.\"","\"Tell your boss that you won't be able to work beyond the second trimester.\"","\"Ask for time in the morning and afternoon so you can go get something to eat.\""],
            answer: 0,
            rationale: "Maintaining the sitting position for prolonged periods may constrict the vessels of the legs, particularly those in the popliteal spaces, and may diminish venous return. Walking causes the leg muscles to contract and applies gentle pressure to the veins, thereby promoting venous return. Walking around several times each morning and afternoon will improve circulation; the legs may be elevated while the client is sitting at her desk. If the client is feeling well, there are no contraindications to working throughout her pregnancy. Adequate nourishment can be obtained during mealtimes; the client does not require extra nutrition breaks.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "A 42-year-old client at 39 weeks' gestation has a reactive nonstress test (NST). Which interpretation pertains to this result?",
            options: ["Immediate birth is indicated.","This is the desired response at this stage of gestation.","Further testing is unnecessary with this desired outcome.","The result is inconclusive, indicating the need for further evaluation."],
            answer: 1,
            rationale: "An NST indicates that the fetus is healthy because there is an active pattern of fetal heart rate acceleration with movement. The result is positive and desired; immediate birth is not required. Further testing is needed. If the pregnancy continues, another test of fetal well-being will probably be done. The results were positive, not inconclusive.",
            topic: "Antepartum Care II",
            source: "eaq"
          },
          {
            stem: "Which suggestion would the nurse make to a client with morning sickness?",
            options: ["\"Eat dry crackers before you get out of bed.\"","\"Increase your fat intake before bedtime.\"","\"Drink high-carbohydrate fluids with meals.\"","\"Eat 2 small meals a day and a snack at noon.\""],
            answer: 0,
            rationale: "Nausea and vomiting in the morning occur in almost 50% of all pregnancies. Eating dry crackers before getting out of bed in the morning is a simple remedy that may provide relief. Increasing fat intake does not relieve the nausea. Drinking high-carbohydrate fluids with meals is not helpful; separating fluids from solids at mealtime is more advisable. Eating 2 small meals a day and a snack at noon does not meet the nutritional needs of a pregnant woman, nor will it relieve nausea. Some women find that eating 5 or 6 small meals daily instead of three large ones is helpful.",
            topic: "Antepartum Care II",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "nutrition",
      label: "Maternal Nutrition",
      week: 2,
      sets: {
        mustKnow: [
          {
            stem: "A woman trying to conceive asks how much folic acid she should take daily. What is the nurse's response?",
            options: ["At least 100 mcg","At least 400 mcg","At least 1,000 mcg","At least 4,000 mcg"],
            answer: 1,
            rationale: "At least 400 mcg of folic acid daily is recommended during pregnancy or when trying to conceive; inadequate folic acid is linked to neural tube defects.",
            topic: "Maternal Nutrition",
            source: "exam-1"
          },
          {
            stem: "A patient with an adequate diet asks whether she really needs any supplement during pregnancy. Which single supplement is still truly required?",
            options: ["Calcium","Iron","Vitamin C","Magnesium"],
            answer: 1,
            rationale: "Even with an adequate diet, iron is the one supplement still truly needed — it supports the expanded maternal blood volume and oxygen-carrying capacity.",
            topic: "Maternal Nutrition",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "Calcium and phosphorus needs increase in pregnancy primarily to support:",
            options: ["Maternal blood clotting","Mineralization of the fetal bones and teeth","Oxygen transport","Neural tube closure"],
            answer: 1,
            rationale: "Calcium and phosphorus support mineralization of the fetal bones and teeth (and acid-base buffering). Iron supports oxygen transport; folic acid supports neural tube closure.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A severe maternal iodine deficiency can cause which condition in the infant?",
            options: ["Neural tube defect","Cretinism","Macrosomia","Hemophilia"],
            answer: 1,
            rationale: "Iodine is essential for thyroxine; severe deficiency causes cretinism. Iodized table salt is a good source.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "Which group of vitamins is fat-soluble and stored in the liver?",
            options: ["The B vitamins and C","A, D, E, and K","C and D only","All the B vitamins"],
            answer: 1,
            rationale: "Vitamins A, D, E, and K are fat-soluble and stored in the liver. Vitamin C and the B vitamins are water-soluble and excreted in urine.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "The role of vitamin K in pregnancy is:",
            options: ["Absorption of calcium","Synthesis of prothrombin for blood clotting","Antioxidation","Energy metabolism"],
            answer: 1,
            rationale: "Vitamin K supports synthesis of prothrombin for blood clotting and is found in green leafy vegetables.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "Recommended daily fluid intake in pregnancy is:",
            options: ["Two 8-oz glasses","Four 8-oz glasses","Eight to ten 8-oz glasses, at least half as water","As much as possible, all as juice"],
            answer: 2,
            rationale: "Eight to ten 8-oz glasses of fluid a day, with at least half as water.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "Which food contains at least 100 mcg of folate per serving?",
            options: ["Bread","Broccoli","Cooked pasta","Black-eyed peas","Ready-to-eat breakfast cereal"],
            answers: [3,4],
            rationale: "Neural tube defects (NTDs), or failures in closure of the neural tube, are more common in infants of women with poor folic acid intake. Proper closure of the neural tube is required for normal formation of the spinal cord, and the neural tube begins to close within the first month of gestation, often before a person realizes she is pregnant. Therefore, all people who are capable of 0.4 becoming pregnant should take mg of folic acid every day, in addition to consuming dietary sources of folate. One-half cup of black-eyed peas contains at least 100 mcg of folate. Ready-to-eat breakfast cereal contains 200 mcg of folate. A slice of bread contains 20 mcg, not 100 mcg of folate. One-half cup of broccoli and a cup of pasta contain 50 mcg, not 100 mcg of folate.",
            topic: "Maternal Nutrition",
            source: "eaq"
          },
          {
            stem: "Which high-risk nutritional practice must be assessed for when a pregnant client is found to be anemic?",
            options: ["Pica","Caffeine intake","Alcohol use","Artificial sweetener use"],
            answer: 0,
            rationale: "The practice of pica, especially the ingestion of heavy metals, must be considered when pregnant women are found to be anemic. Caffeine, alcohol, and artificial sweeteners are not directly linked to anemia in pregnant women.",
            topic: "Maternal Nutrition",
            source: "eaq"
          },
          {
            stem: "How many milligrams of calcium would the nurse instruct the 30-year-old client to consume during pregnancy?",
            options: ["1500 mg","1000 mg","2500 mg","2000 mg"],
            answer: 1,
            rationale: "The adult pregnant client should consume 1000 mg of calcium daily. The nurse would explore her diet to identify good sources of calcium and recommend a calcium supplement if the client cannot obtain the recommended amount of calcium from her diet. 1500 mg, 2500 mg, and 2000 mg are all more than the recommended intake.",
            topic: "Maternal Nutrition",
            source: "eaq"
          },
          {
            stem: "The nurse teaches a pregnant client regarding the necessity for a folic acid supplement. Folic acid taken in the first trimester of pregnancy helps reduce the risk for which neonatal disorder?",
            options: ["Phenylketonuria","Down syndrome","Neural tube defects","Erythroblastosis fetalis"],
            answer: 2,
            rationale: "0.4 A folic acid supplement ( mg/day) greatly reduces the incidence of fetal neural tube defects. Phenylketonuria is a genetic disorder that cannot be prevented by the action of folic acid. Down syndrome is a genetic disorder that also cannot be prevented by the action of folic acid. Erythroblastosis fetalis is related to the Rh factor and is not prevented by the action of folic acid.",
            topic: "Maternal Nutrition",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "complications",
      label: "Antepartum Complications",
      week: 2,
      sets: {
        mustKnow: [
          {
            stem: "A patient with gestational diabetes brings her glucose log: fasting 92, one hour after breakfast 158, two hours after dinner 112. Which value should the nurse address with the provider?",
            options: ["The fasting value of 92","The one-hour value of 158","The two-hour value of 112","None — all values are at goal"],
            answer: 1,
            rationale: "GDM goals: fasting <95, one hour <140, two hours <120. The fasting 92 and two-hour 112 are at goal; the one-hour 158 is above the 140 target.",
            topic: "Antepartum Complications",
            source: "exam-1"
          },
          {
            stem: "The nurse assesses a pregnant patient with a cardiac disorder at each prenatal visit. Which findings indicate cardiac DECOMPENSATION? Select all that apply.",
            options: ["New cough","Dyspnea","Palpitations","Edema","Weight loss"],
            answers: [0, 1, 2, 3],
            rationale: "Signs of cardiac decompensation include a new cough, dyspnea, edema, palpitations, rales, and weight GAIN — not weight loss.",
            topic: "Antepartum Complications",
            source: "exam-1"
          },
          {
            stem: "A patient's 3-hour glucose tolerance test returns with the fasting and 2-hour values elevated; the 1-hour and 3-hour values are normal. How does the nurse interpret this?",
            options: ["Normal — at least three values must be elevated","She has gestational diabetes — two or more elevated values are diagnostic","The test must be repeated because only two values were abnormal","This indicates type 1 diabetes"],
            answer: 1,
            rationale: "On the 3-hour glucose tolerance test, if any TWO of the four values are elevated, the patient is diagnosed with gestational diabetes.",
            topic: "Antepartum Complications",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "In the FIRST trimester, a patient's insulin needs typically:",
            options: ["Increase sharply","Decrease","Stay exactly the same","Stop entirely"],
            answer: 1,
            rationale: "Early in pregnancy hormones enhance insulin production/response, so needs decrease; from late first trimester on they act as insulin antagonists and needs increase (may double or quadruple by term).",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "Why is an infant of a diabetic mother at risk for respiratory distress syndrome?",
            options: ["The infant cannot produce insulin","High fetal insulin inhibits the enzymes needed for surfactant","The lungs are over-mature","The infant has too little glucose in utero"],
            answer: 1,
            rationale: "High fetal insulin inhibits surfactant-producing enzymes, delaying lung maturity and causing respiratory distress syndrome.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "An Rh-negative pregnant woman has a negative antibody screen. When is RhoGAM routinely given DURING the pregnancy?",
            options: ["At 12 weeks","At 28 weeks","Only after delivery","At every prenatal visit"],
            answer: 1,
            rationale: "RhoGAM 300 mcg is given prophylactically at 28 weeks when the indirect Coombs (antibody screen) is negative, and again within 72 hours after birth if the newborn is Rh-positive.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "Which is the most common anemia in pregnancy, and how is it treated?",
            options: ["Folic acid deficiency - vitamin K","Iron-deficiency anemia - supplemental iron","Sickle cell anemia - exchange transfusion","Pernicious anemia - B12 injections"],
            answer: 1,
            rationale: "Iron-deficiency anemia is the most common anemia in pregnancy (diagnosed around Hgb <11 g/dL because plasma volume dilutes the count) and is treated with supplemental iron.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "Folic acid deficiency anemia in pregnancy increases the risk of:",
            options: ["Macrosomia","Fetal neural tube defects","Gestational hypertension","Polyhydramnios"],
            answer: 1,
            rationale: "Folic acid deficiency raises the risk of fetal neural tube defects; all childbearing-age women should take 400 mcg daily before pregnancy.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "Which are the classic signs of diabetes the nurse would review?",
            options: ["Bradycardia, hypertension, and edema","Polyuria, polydipsia, polyphagia, and weight loss","Constipation, weight gain, and cold intolerance","Jaundice, dark urine, and pale stools"],
            answer: 1,
            rationale: "The classic signs of diabetes are polyuria, polydipsia, polyphagia, and weight loss, reflecting inadequate insulin production or use.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "Left-ventricular dysfunction developing from the last month of pregnancy up to about 5 months postpartum is:",
            options: ["Eisenmenger syndrome","Peripartum cardiomyopathy","Mitral valve prolapse","Congenital heart disease"],
            answer: 1,
            rationale: "Peripartum cardiomyopathy is left-ventricular dysfunction from the last month of pregnancy to ~5 months postpartum, with edema, cough, chest pain, and fatigue.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "In a threatened miscarriage, the cervix is ___ and the placenta is ___:",
            options: ["dilated; separated","closed; still attached","dilated; still attached","closed; separated"],
            answer: 1,
            rationale: "Threatened: cervix closed, placenta still attached, with some bleeding. Imminent (inevitable): cervix dilated and placenta separated.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A type O mother delivers a type A infant. The nurse monitors the newborn primarily for:",
            options: ["Severe anemia and hydrops","Hyperbilirubinemia (jaundice) from hemolysis","Hypoglycemia","Polycythemia"],
            answer: 1,
            rationale: "In ABO incompatibility (mother type O, infant A/B/AB), maternal antibodies cause hemolysis and hyperbilirubinemia/jaundice; severe anemia is rare, unlike Rh incompatibility.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "Which are MATERNAL risks of diabetes in pregnancy? Select all that apply.",
            options: ["Polyhydramnios","Preeclampsia or eclampsia","Ketoacidosis (a major cause of stillbirth)","Difficult labor (dystocia) from a large baby","Chronically low blood glucose"],
            answers: [0, 1, 2, 3],
            rationale: "Maternal risks of diabetes include polyhydramnios, preeclampsia/eclampsia, ketoacidosis (a major cause of stillbirth), dystocia, and infections. Maternal blood glucose runs high, not low.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "Which position increases cardiac output in the obstetrical client with cardiac disease?",
            options: ["Trendelenburg","Low semi-Fowler","Lateral positioning","Supine with legs elevated"],
            answer: 2,
            rationale: "Lateral positioning improves the cardiac output of an obstetrical client with cardiac disease. Trendelenburg, low semi-Fowler, and the supine position are not appropriate positions to improve the cardiac output of an obstetrical client with cardiac disease. Placing the client in these positions allows the weight of the uterus to remain on the vena cava, impeding the blood flow.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "Which occurs immediately after birth that increases the risk for cardiac decompensation in a client with a compromised cardiac system?",
            options: ["Increased pressure is placed on the veins.","Intra-abdominal pressure is significantly increased.","The blood flow to the heart is decreased considerably.","Extravascular fluid is remobilized into the vascular compartment."],
            answer: 3,
            rationale: "During the immediate period after birth the extravascular fluid is remobilized into the vascular compartment, increasing the client’s risk for cardiac decompensation. At the moment of birth, the pressure on the veins is removed, the intra-abdominal pressure decreases dramatically, and the blood flow to the heart is significantly increased.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "Which cardiac disease has the lowest risk for maternal mortality?",
            options: ["Endocarditis","Aortic stenosis","Patent ductus arteriosus","Pulmonary hypertension"],
            answer: 2,
            rationale: "A client with patent ductus arteriosus has the lowest risk for maternal mortality. A client with aortic stenosis has a higher risk of maternal mortality. A client with endocarditis or pulmonary hypertension has the highest risk of maternal mortality.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "After an incomplete abortion, a client asks the nurse to tell her again what is meant by an \"incomplete abortion.\" Which response by the nurse is appropriate?",
            options: ["\"I don’t think you should focus on this anymore.\"","\"It’s when the fetus dies but is retained in the uterus for at least 2 months.\"","\"It’s when parts of the pregnancy tissues are expelled and parts remain in the uterus.\"","\"I think it’s best for you to ask your primary health care provider for the answer to that question.\""],
            answer: 2,
            rationale: "A correct and simple definition answers the question and fulfills the client's need to know. Telling the client not to focus on the topic anymore denies the client's right to know. The definition of a missed abortion is when the fetus dies but is retained in the uterus for at least 2 months. Telling the client to ask her primary health care provider for the answer is an abdication of the nurse's responsibility; the nurse can independently reinforce information and correct misconceptions.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "For which complication would a client who has had a spontaneous abortion be assessed?",
            options: ["Hemorrhage","Dehydration","Hypertension","Subinvolution"],
            answer: 0,
            rationale: "Hemorrhage may result if placental tissue is retained or uterine atony occurs. There is no indication that the client has been deprived of fluids. Hypotension, not hypertension, may occur with postabortion hemorrhage. Subinvolution is more likely to occur after a full-term birth.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "The nurse is caring for four postpartum clients, each with a different medical condition. Which condition will result in the primary health care provider advising the new mother not to breast-feed?",
            options: ["Mastitis","Inverted nipples","Herpes genitalis","Human immunodeficiency virus (HIV) infection"],
            answer: 3,
            rationale: "Breast-feeding by a mother infected with HIV is contraindicated, because breast milk can transmit the virus to the infant. A mother with mastitis would be counseled to continue breast-feeding during treatment for mastitis. Breast-feeding is not contraindicated in a client with inverted nipples. If the infant cannot latch, a breast shield can provide mild suction to help evert the nipples. Breastfeeding is not contraindicated in a client with genital herpes. The newborn may contract the infection during a vaginal birth but not from breast milk.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "Cramping and vaginal spotting at 12 weeks’ gestation with an audible fetal heart rate and a closed cervix is characteristic of which problem?",
            options: ["Missed abortion","Inevitable abortion","Incomplete abortion","Threatened abortion"],
            answer: 3,
            rationale: "Because the cervix is closed, this is considered a threatened abortion. The lifeless products of conception are retained in a missed abortion. Once the cervix is dilated abortion is inevitable. Portions of the products of conception will have to be passed for a diagnosis of incomplete abortion.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "Between which weeks of gestation would a client with type 1 diabetes expect to increase her insulin dosage?",
            options: ["10th and 12th weeks of gestation","18th and 22nd weeks of gestation","24th and 28th weeks of gestation","36th and 40th weeks of gestation"],
            answer: 2,
            rationale: "At the end of the second trimester and the beginning of the third trimester, insulin needs increase because of an increase in maternal resistance to insulin. During the earlier part of pregnancy, fetal demands for maternal glucose may cause a tendency toward hypoglycemia. During the last weeks of pregnancy, maternal resistance to insulin decreases, and insulin needs decrease accordingly.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "The risk for which pregnancy complication is increased in the client with Type 1 Diabetes Mellitus?",
            options: ["Hypertensive disorders of pregnancy","Placenta accreta","Increased appetite","Oligohydramnios in the third trimester"],
            answer: 0,
            rationale: "The likelihood of gestational hypertension increases fourfold in the client with diabetes mellitus, probably because of a preexisting vascular disorder. Abnormal implantation occurs because of scarring or uterine abnormalities, not because of diabetes. Most pregnant women have an increased appetite; excessive weight gain in the diabetic client may be caused by a macrosomic fetus and hydramnios. More than 2000 mL of amniotic fluid (hydramnios, polyhydramnios) is associated with diabetes; its exact cause is unknown. It also occurs with major congenital fetal anomalies, Rh sensitization, and infections (e.g., syphilis, toxoplasmosis, cytomegalovirus, herpes, and rubella).",
            topic: "Antepartum Complications",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "hypertensive",
      label: "Hypertensive Disorders",
      week: 2,
      sets: {
        mustKnow: [
          {
            stem: "A patient at 34 weeks with severe preeclampsia is started on a magnesium sulfate infusion. Her partner asks, \"Is this the medicine that brings her blood pressure down?\" What is the nurse's best response?",
            options: ["\"Yes — magnesium is our first-line blood pressure medication.\"","\"No — magnesium is given to prevent seizures. A separate medication is used for her blood pressure.\"","\"Yes, and it will also start her labor.\"","\"No — magnesium is given to increase her urine output.\""],
            answer: 1,
            rationale: "Magnesium sulfate prevents seizures in severe preeclampsia, eclampsia, and HELLP — it is not an antihypertensive. Blood pressure is treated separately (labetalol, hydralazine, nifedipine).",
            topic: "Hypertensive Disorders",
            source: "exam-1"
          },
          {
            stem: "A patient with acute severe hypertension has a history of asthma. Which medication should the nurse question?",
            options: ["IV hydralazine","Oral nifedipine","IV labetalol","Magnesium sulfate"],
            answer: 2,
            rationale: "IV labetalol is a beta-blocker and is avoided in asthma (\"labetalol, lungs\"). Hydralazine or nifedipine would be chosen instead — those two are avoided in tachycardia.",
            topic: "Hypertensive Disorders",
            source: "exam-1"
          },
          {
            stem: "A patient on a magnesium sulfate infusion has an indwelling catheter. Over the last 4 hours the drainage bag collected 100 mL. What should the nurse do?",
            options: ["Nothing — this exceeds the minimum acceptable output","Recognize the output is below 30 mL/hr and notify the provider, since magnesium is renally excreted","Increase the magnesium infusion rate","Recognize this as an expected side effect of magnesium and continue"],
            answer: 1,
            rationale: "100 mL ÷ 4 hr = 25 mL/hr, below the minimum of 30 mL/hr. Magnesium is excreted by the kidneys, so falling urine output raises the risk of toxicity and must be reported.",
            topic: "Hypertensive Disorders",
            source: "exam-1"
          },
          {
            stem: "Which findings in a patient receiving magnesium sulfate indicate TOXICITY rather than expected side effects? Select all that apply.",
            options: ["Absent deep tendon reflexes","Feeling flushed and warm","Respiratory rate of 10","Slurred speech and decreased level of consciousness","Mild drowsiness"],
            answers: [0, 2, 3],
            rationale: "Toxicity = absent reflexes, decreased respiratory rate, and decreased LOC/slurred speech; antidote is IV calcium gluconate. Flushing, warmth, and mild drowsiness are expected at a therapeutic level (4–7).",
            topic: "Hypertensive Disorders",
            source: "exam-1"
          },
          {
            stem: "A patient at 26 weeks has a one-time blood pressure of 146/94 with no proteinuria, headache, or visual changes. What does the nurse anticipate?",
            options: ["An immediate diagnosis of gestational hypertension","Rechecking the blood pressure — diagnosis requires two elevated readings at least 4 hours apart","Starting magnesium sulfate now","Immediate induction of labor"],
            answer: 1,
            rationale: "Hypertension is not diagnosed on a single reading. It requires two readings of ≥140 systolic or ≥90 diastolic at least 4 hours apart.",
            topic: "Hypertensive Disorders",
            source: "exam-2"
          },
          {
            stem: "A patient with a history of preeclampsia in her last pregnancy is now 14 weeks pregnant. Which preventive medication does the nurse anticipate?",
            options: ["Low-dose aspirin 81 mg daily","Magnesium sulfate infusion","IV labetalol","Calcium gluconate"],
            answer: 0,
            rationale: "Low-dose aspirin, 81 mg, is standard for anyone at risk for preeclampsia, started between 12 and 28 weeks.",
            topic: "Hypertensive Disorders",
            source: "exam-2"
          },
          {
            stem: "A patient with acute severe hypertension has a heart rate of 128 and no history of asthma. Which order should the nurse question?",
            options: ["IV labetalol","IV hydralazine","Magnesium sulfate infusion","Low-dose aspirin 81 mg"],
            answer: 1,
            rationale: "IV hydralazine (and oral nifedipine) should be avoided in tachycardia. Labetalol would be appropriate here — it is the one avoided in asthma.",
            topic: "Hypertensive Disorders",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "Which antihypertensive is often used in the postpartum period but is avoided in a patient with tachycardia?",
            options: ["IV labetalol","Oral nifedipine","IV magnesium sulfate","IV calcium gluconate"],
            answer: 1,
            rationale: "Oral nifedipine is often used postpartum but is avoided in tachycardia (as is hydralazine). Labetalol is the one avoided in asthma; magnesium prevents seizures and calcium gluconate is its antidote.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Gestational hypertension is new hypertension after 20 weeks WITHOUT:",
            options: ["Edema","Proteinuria","Headache","Weight gain"],
            answer: 1,
            rationale: "Gestational hypertension is BP at least 140/90 after 20 weeks with no proteinuria. If BP remains elevated 6 weeks postpartum, it is chronic hypertension.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "In preeclampsia, a decrease in which vasodilator allows vasoconstriction and reduced perfusion?",
            options: ["Prostacyclin","Oxytocin","Insulin","Surfactant"],
            answer: 0,
            rationale: "Decreased prostacyclin (a vasodilator) allows vasoconstriction, reducing renal and placental perfusion and causing fetal hypoxia.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Which patient is at HIGHEST risk for developing preeclampsia?",
            options: ["A 25-year-old on her third uncomplicated pregnancy","A first-time mother with chronic hypertension and diabetes carrying twins","A 22-year-old with a normal BMI","A woman with a prior term vaginal birth"],
            answer: 1,
            rationale: "Risk factors for preeclampsia include first pregnancy, chronic hypertension, chronic renal disease, diabetes, multiple gestation, age under 20 or over 40, and a family history. Several factors together raise the risk most.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Magnesium sulfate for preeclampsia is typically continued for at least how long after delivery?",
            options: ["2 hours","6 hours","24 hours","1 week"],
            answer: 2,
            rationale: "Magnesium is continued for at least 24 hours postpartum, since seizures can still occur in the first week after birth.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Hypertension present before pregnancy or before 20 weeks is classified as:",
            options: ["Gestational hypertension","Chronic hypertension","Preeclampsia","Eclampsia"],
            answer: 1,
            rationale: "Chronic hypertension is BP at least 140/90 before pregnancy or before 20 weeks (or persisting 6 weeks postpartum).",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "A deep tendon reflex graded 4+ indicates:",
            options: ["A diminished reflex","A normal reflex","Hyperreflexia and increased seizure risk","Magnesium toxicity"],
            answer: 2,
            rationale: "4+ is hyperreflexic — the more irritated the CNS, the higher the seizure risk. Rising reflexes signal worsening preeclampsia; absent reflexes suggest magnesium toxicity.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Which reflects correct blood pressure measurement technique in pregnancy?",
            options: ["Patient lying flat, arm above the head","Patient at rest at least 5 minutes, sitting, arm at heart level","Standing, immediately after walking","Any cuff size is acceptable"],
            answer: 1,
            rationale: "Have the patient rest at least 5 minutes, sitting or semi-reclining, arm at heart level, with an appropriately sized cuff (width ~40% of the arm).",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Which test most accurately quantifies proteinuria when evaluating for preeclampsia?",
            options: ["A single random urine dipstick","A 24-hour urine collection for protein and creatinine clearance","A serum potassium level","A urine culture"],
            answer: 1,
            rationale: "A 24-hour urine collection for protein and creatinine clearance is more accurate than a quick dipstick for quantifying proteinuria.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Which are FETAL effects of preeclampsia? Select all that apply.",
            options: ["Placental abruption","Intrauterine growth restriction (IUGR)","Oligohydramnios","Stillbirth","Fetal macrosomia"],
            answers: [0, 1, 2, 3],
            rationale: "Reduced placental perfusion in preeclampsia causes placental abruption, IUGR, oligohydramnios, abnormal umbilical artery Doppler, and stillbirth. Macrosomia is associated with diabetes, not preeclampsia.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "A client at 36 weeks’ gestation has a blood pressure of 140/90. Which additional sign of preeclampsia would the nurse assess for?",
            options: ["Urine dipstick positive for protein","Mild ankle edema","Episodes of dizziness on arising","Weight gain of 2 lb (907 g) in 2 weeks"],
            answer: 0,
            rationale: "Preeclampsia is characterized by increased blood pressure and proteinuria. Mild ankle edema, known as physiological edema, is commonly seen in the third trimester. Although no longer a diagnostic criterion for preeclampsia, edema evidenced by excessive weight gain or edema of the hands and face may support the diagnosis. Episodes of dizziness on arising may occur in the third trimester because the enlarged uterus impedes venous return, causing supine hypotension. Weight gain of 2 lb in 2 weeks is expected during the third trimester.",
            topic: "Hypertensive Disorders",
            source: "eaq"
          },
          {
            stem: "Why is it important for the nurse to encourage a client with preeclampsia to lie in the left-lateral recumbent position?",
            options: ["Uterine and kidney perfusion are maximized, and compression of the major vessels is relieved.","Intra-abdominal pressure on the iliac veins is maximized, and there is increased blood flow to the pelvic area.","Aortic compression is maximized, thereby decreasing uterine arterial pressure and increasing uterine blood flow.","Hemoconcentration is maximized, thereby reducing blood volume and cardiac output and increasing placental perfusion."],
            answer: 0,
            rationale: "In the left-lateral position the gravid uterus no longer compresses major vessels; cardiac output is maintained; glomerular filtration and uterine perfusion rates increase. Maximizing intra-abdominal pressure on the iliac veins will decrease, not increase, blood flow to the pelvic area. Maximizing aortic compression will decrease, not increase, uterine blood flow. Hemoconcentration occurs and uterine perfusion decreases in the standing and sitting positions.",
            topic: "Hypertensive Disorders",
            source: "eaq"
          },
          {
            stem: "The nurse admits a client with severe preeclampsia to the high-risk prenatal unit. Which is the next nursing intervention after the vital signs have been obtained?",
            options: ["Calling the primary health care provider","Checking the client's reflexes","Determining the client's blood type","Establishing an intravenous (IV) line"],
            answer: 3,
            rationale: "The client is exhibiting signs of preeclampsia. An IV should be initiated as soon as possible in the event that this client requires antihypertensive treatment or seizure prophylaxis. The presence of hyperreflexia indicates central nervous system irritability, a sign of a worsening condition. Checking the client's reflexes will help direct the primary health care provider to appropriate interventions and alert the nurse to the possibility of seizures. This should be completed following IV insertion. Although the primary health care provider will be called, in the absence of critical vital signs, a complete assessment should be performed first to obtain the information needed.",
            topic: "Hypertensive Disorders",
            source: "eaq"
          },
          {
            stem: "Assessment of a primigravida at 32 weeks’ gestation shows a blood pressure of 170/110 mm Hg, 4+ proteinuria, and edema of the face and extremities. With which complication are these findings consistent?",
            options: ["Eclampsia","Severe preeclampsia","Chronic hypertension","Gestational hypertension"],
            answer: 1,
            rationale: "With severe preeclampsia, arteriolar spasms result in hypertension and decreased arterial perfusion of the kidneys. This in turn causes an alteration in the glomeruli, resulting in oliguria and proteinuria, retention of sodium and water, and edema. Eclampsia is characterized by seizures; there are no data to indicate that the client is having or has had seizures. Chronic hypertension is hypertension diagnosed before pregnancy or before 20 weeks’ gestation. Hypertension that is first diagnosed during pregnancy that persists beyond the postpartum period is also considered chronic hypertension. Gestational hypertension is hypertension that first occurs during midpregnancy without proteinuria; it is definitively diagnosed when the hypertension resolves 12 weeks after delivery.",
            topic: "Hypertensive Disorders",
            source: "eaq"
          },
          {
            stem: "A 26-year-old G1 P0 client at 29 weeks’ gestation has gained 8 lb (3.6 kg) in 2 weeks; her blood pressure has increased from 128/74 Hg to 150/90 mm Hg; and she has developed 1+ proteinuria on urine dipstick. Which condition do these signs suggest?",
            options: ["Mild preeclampsia","Severe preeclampsia","Chronic hypertension","Gestational hypertension"],
            answer: 0,
            rationale: "Preeclampsia is hypertension that develops after 20 weeks’ gestation in a previously normotensive woman. With mild preeclampsia the systolic blood pressure is below 160 mm Hg and diastolic BP is below 110 mm Hg. Proteinuria is present, but there is no evidence of organ dysfunction. Severe preeclampsia is a systolic blood pressure of greater than 160 mm Hg or diastolic blood pressure of at least 110 mm Hg and proteinuria of 5 g or more per 24-hour specimen. Chronic hypertension is hypertension that is present before the pregnancy or diagnosed before 20 weeks’ gestation. Gestational hypertension is the onset of hypertension during pregnancy without other signs or symptoms of preeclampsia and without preexisting hypertension.",
            topic: "Hypertensive Disorders",
            source: "eaq"
          },
          {
            stem: "Which inference would the nurse draw when crackles are heard while auscultating the lungs of a client admitted with severe preeclampsia?",
            options: ["Seizure activity is imminent.","Pulmonary edema may have developed.","Diaphragmatic function is being impaired by the enlarged uterus.","Bronchial constriction was precipitated by the stress of pregnancy."],
            answer: 1,
            rationale: "Pulmonary edema is associated with severe preeclampsia; as vasospasms worsen, capillary endothelial damage results in capillary leakage into the alveoli. Crackles are not an indication of an impending seizure; signs of an impending seizure include hyperreflexia, developing or worsening clonus, severe headache, visual disturbances, and epigastric pain. Pregnancy does not precipitate bronchial constriction, although the hormones associated with pregnancy can cause nasal congestion. Impaired diaphragmatic function is a discomfort associated with pregnancy that may result in shortness of breath or dyspnea, not crackles.",
            topic: "Hypertensive Disorders",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "intrapartum1",
      label: "Intrapartum Care I",
      week: 3,
      sets: {
        mustKnow: [
          {
            stem: "It has been 35 minutes since the birth and the placenta has not delivered. The nurse is concerned because a prolonged third stage increases the risk of:",
            options: ["Uterine rupture","Hemorrhage and retained placenta","Precipitous labor","Cord prolapse"],
            answer: 1,
            rationale: "The third stage should last no longer than 30 minutes; beyond that raises the risk of hemorrhage and retained placenta.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A client's sterile vaginal exam is 8 cm / 90% / +1. The nurse identifies this as:",
            options: ["First stage, latent phase","First stage, transition phase","Second stage","Not yet in labor"],
            answer: 1,
            rationale: "8–10 cm is the transition phase of the first stage. Stage/phase in the first stage is judged by dilation (latent 0–3, active 4–7, transition 8–10).",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A vaginal exam reveals the presenting part at +4 station. The nurse recognizes that:",
            options: ["The baby is not yet engaged","Birth is imminent","The baby is still floating","A cesarean is required"],
            answer: 1,
            rationale: "At +4 the head is visible (beyond crowning) and birth is imminent. Zero station is engagement at the ischial spines; +5 is born.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "To document contraction frequency, the nurse measures the time from:",
            options: ["The start of one contraction to the end of that same contraction","The start of one contraction to the start of the next contraction","The end of one contraction to the start of the next","The peak of one contraction to the peak of the next"],
            answer: 1,
            rationale: "Frequency = start of one contraction to the start of the next (in minutes). Start-to-end of the same contraction is duration (seconds).",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A fetus is in the ROA position. The nurse explains this is a favorable position because:",
            options: ["The baby will be born face-up","The occiput is anterior, so the baby is born face-down and is easier to deliver","It indicates a breech presentation","It requires forceps"],
            answer: 1,
            rationale: "Occiput anterior (e.g., ROA) means the baby is born face-down, which is anatomically easier to deliver. A posterior position (face-up) is harder and causes back labor.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A multigravida who is 9 cm dilated reports a strong urge to push. What is the nurse's best action?",
            options: ["Encourage her to push with each contraction","Coach her to avoid pushing until she is fully dilated","Apply fundal pressure to speed delivery","Position her for immediate delivery"],
            answer: 1,
            rationale: "Never push before 10 cm — pushing on an incomplete cervix can tear it or cause it to swell. Coach breathing until fully dilated.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "The nurse documents that the fetal head is engaged. This means the presenting part has descended to:",
            options: ["The pelvic inlet","Zero station, at the ischial spines","+2 station","The perineum"],
            answer: 1,
            rationale: "Engagement occurs when the presenting part reaches 0 station at the ischial spines — the narrowest part of the pelvis.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A woman calls stating she has been having contractions. Which finding best confirms she is in TRUE labor?",
            options: ["Contractions that ease with a warm bath","Progressive cervical dilation and effacement","Irregular contractions every 20 minutes","Contractions felt only in the abdomen"],
            answer: 1,
            rationale: "Progressive cervical change is the hallmark of true labor; true-labor contractions are regular, intensify, and are not relieved by rest or a warm bath.",
            topic: "Intrapartum Care I",
            source: "exam-2"
          },
          {
            stem: "During the fourth stage, the nurse palpates a soft, boggy uterus. The priority action is to:",
            options: ["Document this as a normal finding","Massage the fundus","Encourage ambulation","Offer oral fluids"],
            answer: 1,
            rationale: "A soft, boggy uterus is uterine atony — the leading cause of postpartum hemorrhage. Massage the fundus to firm it.",
            topic: "Intrapartum Care I",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "The Five Ps of labor are Passage, Passenger, Position, Powers, and:",
            options: ["Placenta","Psyche","Pain","Pelvis"],
            answer: 1,
            rationale: "The fifth P is Psyche — the patient's psychological state, including fear, anxiety, fatigue, and support system.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "Effacement of the cervix refers to:",
            options: ["The opening of the cervix, measured 0-10 cm","The thinning and shortening of the cervix, measured 0-100%","The descent of the fetal head","The station of the presenting part"],
            answer: 1,
            rationale: "Effacement is the thinning and shortening of the cervix (0-100%). Dilation is the opening of the cervix (0-10 cm).",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "Which describes the anterior fontanelle of the fetal skull?",
            options: ["Triangle-shaped, closing at 6-8 weeks","Diamond-shaped, the larger of the two, closing by about 18 months","Diamond-shaped, closing at birth","The same size as the posterior fontanelle"],
            answer: 1,
            rationale: "The anterior fontanelle is diamond-shaped and the larger of the two, closing by about 18 months. The posterior fontanelle is triangle-shaped and closes around 6-8 weeks.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "In a frank breech presentation, the fetus is positioned with:",
            options: ["The head fully flexed, presenting first","Hips flexed and knees extended, with the bottom presenting first","One foot presenting first","A shoulder presenting first"],
            answer: 1,
            rationale: "Frank breech = hips flexed, knees extended, bottom presenting first. Complete breech has hips and knees flexed; footling has a foot presenting; a shoulder presentation is a transverse lie.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "In the three-letter fetal position notation (e.g., ROA), what does the FIRST letter indicate?",
            options: ["The fetal presenting part","Whether the part faces the mother's front or back","Which side of the MOTHER's pelvis the presenting part is closest to (right or left)","The station"],
            answer: 2,
            rationale: "The first letter is the side of the MOTHER's pelvis (R or L). The second is the landmark (O=occiput, M=mentum, S=sacrum, A=acromion) and the third is the direction (anterior, posterior, transverse).",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "The maternal urge to bear down, caused by endogenous oxytocin release when vaginal stretch receptors are activated, is the:",
            options: ["Valsalva maneuver","Ferguson reflex","Ferning reflex","Let-down reflex"],
            answer: 1,
            rationale: "The Ferguson reflex is the urge to bear down from endogenous oxytocin release. Excess Valsalva reduces blood flow to mother and baby.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "The secondary powers of labor refer to:",
            options: ["Involuntary uterine contractions","The mother's voluntary pushing (bearing-down) efforts","Cervical effacement","The Ferguson reflex"],
            answer: 1,
            rationale: "Secondary powers are the mother's voluntary pushing efforts. Primary powers are the involuntary uterine contractions that dilate and efface the cervix.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "During which phase of the first stage of labor (4-7 cm) do patients most often request an epidural?",
            options: ["Latent phase","Active phase","Transition phase","Second stage"],
            answer: 1,
            rationale: "The active phase (4-7 cm) is usually when patients ask for an epidural. The latent phase (0-3 cm) is typically the longest; transition (8-10 cm) is the most intense.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "A newborn's head looks slightly cone-shaped right after a vaginal birth. The nurse explains this molding:",
            options: ["Is a birth injury requiring imaging","Occurs because the skull bones overlap along the sutures to fit through the pelvis, and resolves within about 24 hours","Is a sign of hydrocephalus","Is permanent"],
            answer: 1,
            rationale: "Molding occurs because the fetal skull bones can overlap along the sutures and fontanelles to fit through the pelvis; the cone shape resolves within about 24 hours.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "Which are cephalic (head-first) presentations? Select all that apply.",
            options: ["Vertex","Military","Brow","Face","Frank breech"],
            answers: [0, 1, 2, 3],
            rationale: "Vertex, military, brow, and face are all cephalic (head-first) presentations, differing by how flexed the head is. Frank breech is a breech (bottom-first) presentation.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "Which test is used to confirm breech presentation?",
            options: ["Ultrasound","Fetal scalp pH","Amniocentesis","Digital pelvimetry"],
            answer: 0,
            rationale: "A sonogram of the pelvis is an accurate and safe test for breech presentation. Fetal scalp pH is performed to assess fetal well-being. Amniocentesis is a test of the components of the amniotic fluid; it does not reveal the position of the fetus. Digital pelvimetry is an external measurement obtained by the primary health care provider. While a vaginal exam may give clues to the presentation of the fetus, it is best practice to confirm a suspected breech presentation with ultrasound.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "Which factor distinguishes true labor from false labor?",
            options: ["Cervical dilation is evident.","Contractions stop when the client walks around.","The client’s contractions progress only when she is in a side-lying position.","Contractions occur immediately after the membranes rupture."],
            answer: 0,
            rationale: "Progressive cervical dilation is the most accurate indication of true labor. With true labor, contractions will increase with activity. Contractions of true labor persist in any position. Contractions may not begin until 24 to 48 hours after the membranes rupture.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "When assessing a client who gave birth 1 day ago, the nurse finds the fundus is firm at 1 fingerbreadth below the umbilicus and the perineal pad is saturated with lochia rubra. Which is the nurse's next action?",
            options: ["Recording these expected findings","Obtaining a prescription for an oxytocic medication","Asking the client when she last changed the perineal pad","Notifying the primary health care provider of excessive bleeding"],
            answer: 2,
            rationale: "The amount of lochia would be excessive if the pad were saturated in 15 minutes; saturating the pad in 2 hours is considered heavy bleeding. If the pad has not been changed for a longer period, this could account for the large quantity of lochia, so asking the client when she last changed the perineal pad is appropriate. These findings cannot be supported or recorded without additional information. Excessive bleeding cannot be established without more information from the client. Oxytocics are administered for uterine atony; the need for this is not supported by the assessment of a firm fundus.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "One hour after a birth the nurse palpates a client’s fundus to determine whether involution is taking place. The fundus is firm, in the midline, and 2 fingerbreadths below the umbilicus. Which would the nurse do next?",
            options: ["Encourage the client to void.","Notify the health care provider immediately.","Massage the uterus and attempt to express clots.","Continue periodic assessments and record the findings."],
            answer: 3,
            rationale: "Immediately after birth the uterus is 2 cm below the umbilicus; during the first several postpartum hours the uterus will rise slowly to just above the level of the umbilicus. These findings are expected, and they should be recorded. Encouraging the client to void is unnecessary; if the bladder is full, the uterus will be higher and pushed to one side. Notifying the health care provider is unnecessary; involution is occurring as expected. Massage is used when the uterus is soft and \"boggy.\"",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "When a fetus is in a footling breech presentation, the nurse plans and implements care with which consideration in mind?",
            options: ["Severe back discomfort will occur.","Length of labor usually is shortened.","Cesarean birth probably will be necessary.","Meconium in the amniotic fluid is a sign of fetal hypoxia."],
            answer: 2,
            rationale: "A cesarean birth may be performed when the fetus is in the breech presentation because the risk of morbidity and mortality is increased. A vertex presentation in the occiput posterior position usually causes back pain. Labor is usually longer with a fetus in the breech presentation because the buttocks are not as effective as the head as a dilating wedge. Meconium is a common finding in the amniotic fluid of a client whose fetus is in a breech presentation, because contractions compress the fetal intestinal tract, causing release of meconium.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "While caring for a client during labor, which would the nurse remember about the second stage of labor?",
            options: ["It ends at the time of birth.","It ends as the placenta is expelled.","It begins with the transition phase of labor.","It begins with the onset of strong contractions."],
            answer: 0,
            rationale: "The second stage of labor begins with full cervical dilation and ends with the birth of the infant. The third stage of labor begins after birth, continues until the separation of the placenta from the uterine wall, and ends with the expulsion of the placenta. The transition phase of labor is the last phase of the first stage of labor. The onset of strong contractions occurs during the active phase of the first stage of labor.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "A client is admitted at 40 weeks’ gestation with her cervix dilated 5 cm and 100% effaced, the presenting part at station 0, and fetal heart tones heard just above the umbilicus. Which fetal presentation is indicated by these assessment findings?",
            options: ["Face","Brow","Breech","Shoulder"],
            answer: 2,
            rationale: "In the breech presentation, the fetal head is in the fundal portion of the uterus; the chest or back is at or above the umbilicus, where fetal heart tones can be heard. In the vertex presentation the head is the presenting part; the chest and back are in lower quadrants, where the fetal heart is heard. The brow presentation is a type of cephalic presentation in which the fetal head is partially extended; the fetal heart is heard in the lower abdomen, not above the umbilicus. In the shoulder presentation the fetal heart usually is heard in the midabdominal region.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "During the assessment of a client in labor, the cervix is determined to be dilated 4 cm. Which stage of labor would the nurse record?",
            options: ["First","Second","Prodromal","Transitional"],
            answer: 0,
            rationale: "The frst stage of labor is from zero cervical dilation to full cervical dilation (10 cm). The second stage is from full cervical dilation to delivery. The prodromal stage is before cervical dilation begins. The transitional phase is the first stage of labor, from 8 cm of dilation to 10 cm of dilation.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "Which information would tell the nurse if a woman at 40 weeks’ gestation having contractions is in true labor?",
            options: ["The cervix dilates and becomes effaced in true labor.","Bloody show is the first sign of true labor.","The membranes rupture at the beginning of true labor.","Fetal movements lessen and become weaker in true labor."],
            answer: 0,
            rationale: "The major diference between true and false labor is that true labor can be confirmed by the presence of dilation and effacement of the cervix. Bloody show may occur before or after true labor begins. The membranes may rupture before or after labor begins. Fetal movements continue unchanged throughout labor.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "When the cervix of a woman in labor is dilated 9 cm, she states that she has the urge to push. Which action would the nurse implement at this time?",
            options: ["Having her pant-blow during contractions","Placing her legs in stirrups to facilitate pushing","Encouraging her to bear down with each contraction","Reviewing the pushing techniques taught in childbirth classes"],
            answer: 0,
            rationale: "Although there are exceptions, the information given indicates that the best response is inhibiting pushing by having the client use pant-blow breathing. Pushing may cause cervical trauma when the cervix is not completely dilated. It is too early to prepare for the second stage of labor or to have the client bear down with each contraction if the cervix is not fully dilated. At this time the client is completely introverted and will be unreceptive to a review of pushing techniques.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "In which location is the presenting part of the fetus when it is at 0 station?",
            options: ["Entering the vagina","Floating within the bony pelvis","At the level of the ischial spines","Above the level of the ischial spines"],
            answer: 2,
            rationale: "The ischial spines are used as landmarks in relation to the fetus’s head because they reflect the progression of labor; 0 station indicates that the presenting part is at the ischial spines. When the head enters the vagina, it is below the ischial spines and its position is designated with positive numbers (+1 to +4). When the presenting part is floating, the fetus is at –5 station. A position above the ischial spines is designated by a minus number (–1 to –4).",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "Which clinical data indicate that the client at 39 weeks’ gestation is in true labor?",
            options: ["Contractions occur every 10 minutes with no change in frequency over 2 hours, and the cervix is closed.","Contractions are not evident; the cervix is dilated 3 cm and 50% effaced, and there is no change after 4 hours of staying out of bed.","Contractions occur every 5 to 10 minutes, the cervix is dilated 2 cm and 75% effaced, and dilation has increased to 3 cm in 2 hours.","Contractions are irregular, occurring every 10 to 15 minutes, the cervix is dilated one fingertip and is 50% effaced, and there is no change with 4 hours of bed rest."],
            answer: 2,
            rationale: "Progressive cervical dilation and regular contractions that become progressively closer and increase in intensity are indications of true labor. The other options (contractions that occur every 10 minutes with no change in frequency over 2 hours and a closed cervix; contractions that are not evident with the cervix dilated 3 cm and 50% effaced and no change after 4 hours of staying out of bed; and irregular contractions every 10 to 15 minutes with the cervix dilated one fingertip and 50% effaced, and no change with 4 hours of bed rest) are not indications of true labor.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "Which statements regarding the involution process are correct?",
            options: ["Involution begins immediately after expulsion of the placenta.","Involution is the self-destruction of excess hypertrophied tissue.","Involution progresses rapidly during the next few days after birth.","Involution is the return of the uterus to a nonpregnant state after birth.","Involution may be caused by retained placental fragments and infections."],
            answers: [0,2,3],
            rationale: "The involution process is the return of the uterus to a nonpregnant state after birth; it begins immediately after expulsion of the placenta and contraction of the uterine smooth muscle. This process progresses rapidly during the first few days after birth. Subinvolution is the self-destruction of excess hypertrophied tissue; this process may be caused by retained placental fragments or infection.",
            topic: "Intrapartum Care I",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "intrapartum2",
      label: "Intrapartum Care II",
      week: 3,
      sets: {
        mustKnow: [
          {
            stem: "A tracing shows decelerations that begin after the contraction peak and do not return to baseline until after the contraction ends. What is the nurse's FIRST intervention?",
            options: ["Reposition the client to her side","Document a normal finding","Increase the oxytocin","Encourage her to push"],
            answer: 0,
            rationale: "These are LATE decelerations (uteroplacental insufficiency — a perfusion problem). Repositioning to the side is the first, non-invasive step (the C in UNCOIL).",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A tracing shows abrupt, sharp decelerations that vary in their timing relative to the contractions. The most likely cause is:",
            options: ["Head compression","Umbilical cord compression","Uteroplacental insufficiency","A fetal sleep cycle"],
            answer: 1,
            rationale: "Abrupt, variably-timed decelerations are VARIABLE decelerations, caused by umbilical cord compression (think nuchal cord). Reposition the mother first.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "The nurse explains that the single BEST indicator of fetal oxygenation on the tracing is:",
            options: ["The baseline rate","Variability","The presence of accelerations","Contraction frequency"],
            answer: 1,
            rationale: "Variability — fluctuation around the baseline — is the best indicator of fetal oxygenation; moderate (6–25 bpm) is desired. Absent variability is ominous.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A laboring client is Group B Strep positive and reports a penicillin allergy. The nurse anticipates which antibiotic for prophylaxis?",
            options: ["Ampicillin","Clindamycin","Gentamicin","Azithromycin"],
            answer: 1,
            rationale: "GBS prophylaxis is penicillin (drug of choice); if she is penicillin-allergic, clindamycin (900 mg IV every 4 hours until delivery) is used.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A fetal baseline is 170 bpm for 12 minutes. What is the nurse's FIRST action?",
            options: ["Check the maternal temperature","Prepare for immediate delivery","Apply oxygen to the mother","Increase the IV fluids"],
            answer: 0,
            rationale: "For fetal tachycardia (>160 for ≥10 min) the first action is to check the maternal temperature — an elevated maternal temp is often reflected in a tachycardic baby.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A laboring patient is thrashing in pain and the external toco is not registering any contractions. What should the nurse do FIRST?",
            options: ["Immediately medicate her for pain","Palpate the fundus to assess contractions and rule out abruption or uterine rupture","Readjust the toco belt and keep waiting","Increase the oxytocin"],
            answer: 1,
            rationale: "If she is thrashing and the toco is not registering, palpate the fundus FIRST to rule out a placental abruption or uterine rupture before readjusting the monitor or medicating.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A fetal heart rate deceleration lasts 3 minutes (more than 2 but less than 10 minutes). The nurse recognizes this as a prolonged deceleration and is most concerned about:",
            options: ["Head compression - a benign finding","A prolapsed umbilical cord or placental abruption","A normal fetal sleep cycle","Maternal fever"],
            answer: 1,
            rationale: "A prolonged deceleration lasts at least 2 but less than 10 minutes (10 minutes would be a new baseline). Think prolapsed cord or abruption and determine the cause. (Early decelerations are the benign head-compression pattern.)",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A fetus at 34 weeks has a rise of 15 bpm above baseline lasting 15 seconds. The nurse documents this as:",
            options: ["A reassuring acceleration","A late deceleration","Minimal variability","Fetal tachycardia"],
            answer: 0,
            rationale: "At ≥32 weeks, an acceleration is ≥15 bpm above baseline for ≥15 seconds — a reassuring sign of fetal well-being (under 32 weeks it is 10 bpm for 10 seconds).",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A tracing shows decelerations that mirror the contractions, with the nadir at the peak of the contraction. What is the nurse's FIRST action?",
            options: ["Turn off the oxytocin","Perform a sterile vaginal exam to assess progress","Give a rapid IV fluid bolus","Prepare for a cesarean"],
            answer: 1,
            rationale: "Mirroring decels are EARLY decelerations (head compression) — benign. Do a vaginal exam; the head may be low and birth approaching.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A patient with tachysystole is ordered terbutaline. Before giving it, the nurse checks the maternal heart rate and finds it is 124 bpm. What should the nurse do?",
            options: ["Give the terbutaline as ordered","Hold the terbutaline - it is held if the maternal heart rate is 120 bpm or higher","Double the dose so it works faster","Give it only if the fetal heart rate is also high"],
            answer: 1,
            rationale: "Terbutaline (a tocolytic) raises the maternal heart rate, so it is held if the maternal heart rate is 120 bpm or higher.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "The nurse notes a sinusoidal fetal heart rate pattern. This is ominous because it suggests the fetus is:",
            options: ["In a normal sleep cycle","Acidotic and needs to be delivered","Simply very active","Having reassuring accelerations"],
            answer: 1,
            rationale: "A sinusoidal pattern suggests the fetus may be acidotic and needs to be delivered — notify the provider immediately.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "The fetus is in the ROA position. Where should the nurse place the fetal heart rate transducer?",
            options: ["Right lower quadrant","Right upper quadrant","Left lower quadrant","Over the umbilicus"],
            answer: 0,
            rationale: "The FHR is heard best over the fetal shoulders/back. ROA = occiput anterior on the mother's right with the head down — so the right lower quadrant.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "In a 10-minute window the nurse counts 7 contractions. The nurse recognizes this as:",
            options: ["Normal labor","Uterine tachysystole","Inadequate labor","A prolonged deceleration"],
            answer: 1,
            rationale: "Tachysystole is 6 or more contractions in a 10-minute period — the uterus does not get enough time to rest.",
            topic: "Intrapartum Care II",
            source: "exam-2"
          },
          {
            stem: "An external tocotransducer is in place. To assess contraction INTENSITY, the nurse must:",
            options: ["Read it directly off the toco monitor","Palpate the abdomen","Place a fetal scalp electrode","Wait for the provider"],
            answer: 1,
            rationale: "The external toco gives frequency and duration only — the nurse must palpate the abdomen to judge intensity (an internal IUPC calculates it).",
            topic: "Intrapartum Care II",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "Where does the nurse place the external toco (tocodynamometer) to monitor contractions?",
            options: ["Over the fetal shoulders and back","On the fundus of the uterus","Over the maternal bladder","On the mother's flank"],
            answer: 1,
            rationale: "The toco (contraction monitor) goes on the fundus of the uterus, where contractions are strongest. The ultrasound (fetal heart rate) transducer, by contrast, goes over the fetal shoulders and back.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A fetal scalp electrode (FSE) requires which condition before it can be placed?",
            options: ["An epidural","Ruptured membranes","Full dilation","A negative GBS"],
            answer: 1,
            rationale: "The FSE is internal and requires ruptured membranes. It is placed on a firm part of the skull, avoiding sutures and fontanelles.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "What is the normal fetal heart rate baseline, and how long must it be observed to determine it?",
            options: ["100-140 bpm, over 2 minutes","110-160 bpm, over at least 10 minutes","120-180 bpm, over 5 minutes","140-180 bpm, over 30 minutes"],
            answer: 1,
            rationale: "The normal FHR baseline is 110-160 bpm, determined by observing the rate for at least 10 minutes.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A fetal heart rate change that occurs WITH a contraction is described as:",
            options: ["Episodic","Periodic","Sinusoidal","Baseline"],
            answer: 1,
            rationale: "Periodic changes occur with contractions; episodic changes are NOT associated with a contraction.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A fetal tracing shows minimal variability (less than 5 bpm). Besides fetal compromise, which benign causes should the nurse consider?",
            options: ["Maternal fever","A fetal sleep cycle, opioid pain medication, or magnesium sulfate","Cord compression","Maternal dehydration"],
            answer: 1,
            rationale: "Minimal variability (<5 bpm) can be caused by a fetal sleep cycle, opioid pain medication, or something relaxing such as magnesium sulfate - not always distress. Moderate variability (6-25 bpm) is desired.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "When a laboring patient's membranes rupture, the COAT acronym reminds the nurse to document:",
            options: ["Cervix, Onset, Amount, Temperature","Color, Odor, Amount, and Time","Contractions, Oxygen, Activity, Tone","Cord, Output, Apgar, Tracing"],
            answer: 1,
            rationale: "COAT = Color, Odor, Amount, and Time - what to document when the membranes rupture.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "After rupture of membranes, the amniotic fluid is green-tinged. The nurse recognizes this as:",
            options: ["Normal amniotic fluid","Meconium-stained fluid, which can signal fetal compromise","A definite sign of infection","Bloody show"],
            answer: 1,
            rationale: "Green-tinged fluid is meconium-stained and can signal fetal compromise; normal amniotic fluid is clear or straw-colored, sometimes with white flecks of vernix (a light yellow tint can be normal).",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which pushing technique is preferred during the second stage of labor?",
            options: ["Prolonged breath-holding (closed-glottis/Valsalva) pushing","Open-glottis pushing with shorter (about 6-8 second) pushes","Continuous pushing between contractions","Pushing before full dilation"],
            answer: 1,
            rationale: "Open-glottis pushing with shorter (about 6-8 second) pushes is preferred; prolonged closed-glottis (Valsalva) pushing reduces blood flow to the mother and baby.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Once a laboring patient's membranes have ruptured, how often should the nurse assess her temperature?",
            options: ["Every 4 hours, as usual","At least every 2 hours (or more often), because of the infection risk","Only if she reports feeling warm","Once per shift"],
            answer: 1,
            rationale: "Temperature is checked every 4 hours normally, but at least every 2 hours (or more often) once membranes are ruptured, because of the increased infection risk.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which does a sterile vaginal exam in labor assess? Select all that apply.",
            options: ["Cervical dilation","Cervical effacement","Fetal station","Fetal presentation","Maternal blood pressure"],
            answers: [0, 1, 2, 3],
            rationale: "A sterile vaginal exam assesses cervical dilation (0-10 cm), effacement (0-100%), fetal station, and the presenting part/position. Blood pressure is not assessed by a vaginal exam.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          }
        ],
        eaq: [
          {
            stem: "Which technique would the nurse suggest to a laboring woman’s partner that involves gently stroking the woman’s abdomen in rhythm with her breathing during a contraction?",
            options: ["Massage","Effleurage","Acupressure","Counterpressure"],
            answer: 1,
            rationale: "Effleurage is the gentle stroking of the abdomen in rhythm with her breathing during a contraction. Massage is the application of therapeutic touch and pressure on the body. Acupressure is the application of pressure along special acupressure points. Counterpressure is the application of pressure to the sacrum during a contraction.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "When a client at 39 weeks’ gestation arrives at the birthing suite she says, \"I’ve been having contractions for 3 hours, and I think my water broke.\" Which action would the nurse take to confirm that the membranes have ruptured?",
            options: ["Take the client’s oral temperature.","Test the leaking fluid with nitrazine paper.","Obtain a clean-catch urine specimen.","Inspect the perineum for leaking fluid."],
            answer: 1,
            rationale: "Nitrazine paper will turn dark blue if amniotic fluid is present; it remains the same color in the presence of urine. Temperature assessment is not specific to ruptured membranes at this time; vital signs are part of the initial assessment. Although this may be done as part of the initial assessment, a urine test is unrelated to leakage of amniotic fluid. Inspecting the perineum for leaking fluid will not confirm rupture of the membranes.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Between contractions that are 2 to 3 minutes apart and last about 45 seconds the internal fetal monitor shows a fetal heart rate (FHR) of 100 beats/min. Which is the priority nursing action?",
            options: ["Notify the health care provider.","Resume continuous fetal heart monitoring.","Continue to monitor the maternal vital signs.","Document the fetal heart rate as an expected response to contractions."],
            answer: 0,
            rationale: "The expected FHR is 110 to 160 beats/min between contractions. An FHR of 100 beats/min is bradycardia (baseline FHR slower than 110 beats/min) and indicates that the fetus may be compromised, requiring notifying the health care provider and medical intervention. Resuming continuous fetal heart monitoring may be dangerous. The fetus may be compromised, and time should not be spent on monitoring. Continuing to monitor the maternal vital signs is not the priority at this time. Although a fetal heart rate slower than 110 beats/minute should be documented, it is not an expected response.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "The nurse applies fetal and uterine monitors to the abdomen of a client in active labor. When the client has contractions, the nurse notes an abrupt 15 beats/min deceleration of the fetal heart rate below the baseline lasting 15 seconds. Which nursing action would be next?",
            options: ["Calling the primary health care provider","Changing the maternal position","Obtaining the maternal blood pressure","Preparing the environment for an immediate birth"],
            answer: 1,
            rationale: "The fetus is responding to partial cord compression. Stimulation of the fetal sympathetic nervous system is evidenced by the fetal heart rate deceleration. It is an initial response to mild hypoxia that accompanies partial cord compression during contractions; changing the maternal position can alleviate the compression. This is a compensatory physiologic response by a healthy fetus; the nurse, not the practitioner, should intervene by alleviating cord compression. Taking the client's blood pressure delays nursing interventions to help the fetus. Variable decelerations are not indicative of the need for an immediate birth.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "For which reason would the nurse encourage a client to void during the first stage of labor?",
            options: ["A full bladder is often injured during labor.","A full bladder may inhibit the progress of labor.","A full bladder jeopardizes the status of the fetus.","A full bladder predisposes the client to urinary infection."],
            answer: 1,
            rationale: "A full bladder inhibits the progress of labor by encroaching on the uterine space and impeding the descent of the fetal head. The bladder may become atonic, but is not physically damaged during the course of labor. A full bladder may lead to prolonged labor but generally does not jeopardize fetal status as long as adequate placental perfusion continues. A full bladder during labor does not predispose the client to infection.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which is a sensory simulation strategy a laboring client can use as a nonpharmacological strategy for pain management?",
            options: ["Gentle massage of the abdomen","Biofeedback-assisted relaxation techniques","Application of a heat pack to the lower back","Selecting a focal point and beginning breathing techniques"],
            answer: 3,
            rationale: "Use of a focal point and breathing techniques are sensory simulation strategies. Heat and massage are cutaneous stimulation strategies; biofeedback-assisted relaxation is a cognitive strategy.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "When the fetal monitor is applied to a client’s abdomen, it records late decelerations. Which action would the nurse take?",
            options: ["Notify the health care provider.","Elevate the head of the bed.","Reposition the client on her left side.","Administer oxygen by way of facemask."],
            answer: 2,
            rationale: "Late decelerations may indicate impaired placental perfusion. Turning the client on her left side relieves pressure on the vena cava and aorta, improving circulation to the placenta. Calling the health care provider is premature. The nurse should notify the practitioner if late decelerations continue after nursing interventions are implemented. Elevating the head of the bed will increase pressure on the vena cava and aorta, further reducing placental perfusion. Oxygen may be administered if placing the client on her left side does not resolve the late decelerations.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which common problem affects the client in labor when an external fetal monitor has been applied to her abdomen?",
            options: ["Intrusion on movement","Inability to take sedatives","Interference with breathing techniques","Increased frequency of vaginal examinations"],
            answer: 0,
            rationale: "Because the client is attached to a machine and movement may alter the tracings, movement is discouraged. Placement of the external monitor leads does not interfere with the administration of sedatives. An external monitor does not interfere with breathing techniques. An external monitor does not necessitate more frequent vaginal examinations.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which is the immediate nursing action when a client’s membranes rupture spontaneously, releasing clear, odorless fluid?",
            options: ["Change the bedding.","Notify the practitioner.","Assess the fetal heart rate (FHR).","Obtain the client’s blood pressure."],
            answer: 2,
            rationale: "The FHR will reflect how the fetus tolerated the rupture of the membranes; if there is compression of the cord, it will be reflected in a change in the FHR. Although the client’s comfort is important, addressing comfort by changing the bedding is not the priority. Although the practitioner should be notified, it is not the priority. Blood pressure is not influenced by rupture of the membranes.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which is the priority initial nursing intervention during the admission of a primigravida in labor?",
            options: ["Monitoring the fetal heart rate","Asking the client when she ate last","Obtaining the client’s health history","Determining whether the membranes have ruptured"],
            answer: 0,
            rationale: "Determining fetal well-being supersedes all other measures; if the fetal heart rate is absent or persistently decelerating, immediate intervention is required. The health history, including the client’s last meal and whether the membranes have ruptured, may be taken once fetal well-being has been established.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which priority intervention would the nurse initiate when a fetal heart pattern signifying uteroplacental insufficiency occurs?",
            options: ["Inserting a urinary catheter","Administering oxygen by means of nasal cannula","Helping the client turn to the side-lying position","Encouraging the client to pant with her next contraction"],
            answer: 2,
            rationale: "Assisting the client to turn to the side-lying position will improve uterine blood flow, and fetal oxygenation will increase. Inserting a urinary catheter is unnecessary; in addition, it requires a primary health care provider’s prescription. Oxygen may be administered eventually if necessary, but this is not the first intervention. Encouraging the client to pant with her next contraction will not increase uterine blood flow or oxygen to the fetus.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which condition is most commonly associated with late decelerations of the fetal heart rate?",
            options: ["Head compression","Maternal hypothyroidism","Uteroplacental insufficiency","Umbilical cord compression"],
            answer: 2,
            rationale: "Late decelerations, suggestive of fetal hypoxia, occur in the setting of uteroplacental insufficiency. Head compression results in early decelerations; this finding is considered benign. Hypothyroidism is unrelated to late decelerations. Umbilical cord compression results in variable decelerations.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which factor will increase the risk for uterine atony in a postpartum client?",
            options: ["Multiple gestation pregnancy","Gestational anemia","Hypertonic contractions","Group Beta Streptococcus (GBS) bacteria"],
            answer: 0,
            rationale: "A multiple gestation thins the uterine wall by overstretching it; therefore the efficiency of contractions is reduced. Atony is more likely in this client. Gestational anemia is physiological anemia that is benign; although anemia may cause fatigue during labor, it does not affect uterine contractility. Hypertonic contractions will cause increased discomfort, fatigue, dehydration, and increased emotional distress, not uterine atony. Therapeutic interventions include rest and sedation. GBS is not associated with an increase risk for uterine atony.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which is the priority nursing intervention for the postpartum client whose fundus is 3 fingerbreadths above the umbilicus, boggy, and midline?",
            options: ["Massaging the uterine fundus","Helping the client to the bathroom","Assessing the peri-pad for the amount of lochia","0.2 Administering intramuscular methylergonovine (Methergine) mg"],
            answer: 0,
            rationale: "A uterus that is displaced and above the umbilicus indicates relaxation of the uterine muscle. Fundal massage is necessary to stimulate uterine contractions. The status of the fundus and correction of uterine relaxation must be done before the client is helped to the bathroom, the amount of lochia is assessed, or methylergonovine (Methergine) is administered.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "When palpating a client's fundus on the second postpartum day, the nurse determines that it is above the umbilicus and displaced to the right. Which conclusion is supported by this finding?",
            options: ["There is a slow rate of involution.","There are retained placental fragments.","The bladder has become distended.","The uterine ligaments are overstretched."],
            answer: 2,
            rationale: "A distended bladder will displace the fundus upward and laterally to the right. A slow rate of involution is manifested by slow contractions and uterine descent into the pelvis. If retained placental fragments were present, the uterus would be boggy in addition to being displaced and vaginal bleeding would be heavy. From this assessment the nurse cannot make a judgment regarding overstretched uterine ligaments.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which phrase would the nurse use to document a fetal heart rate (FHR) increase of 15 beats over the baseline rate of 135 beats per minute that lasts 15 seconds?",
            options: ["An acceleration","An early increase","A sonographic motion","A tachycardic heart rate"],
            answer: 0,
            rationale: "An acceleration is an abrupt increase in FHR above the baseline of 15 beats/min for 15 seconds; if the acceleration persists for more than 10 minutes, it is considered a change in baseline rate. Early decelerations, not increases, occur. An early deceleration starts before the peak of the uterine contraction and returns to baseline when the uterine contraction ends. A sonographic motion is not a term used in fetal monitoring. A tachycardic FHR is one faster than 160 beats per minute.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "In the second hour after the client gives birth, her uterus is firm, above the level of the umbilicus, and to the right of midline. Which nursing action is an appropriate response to this situation?",
            options: ["Having the client empty her bladder","Watching for signs of retained secundines","Massaging the uterus vigorously to prevent hemorrhage","Explaining to the client that this is a sign of uterine stabilization"],
            answer: 0,
            rationale: "A full bladder elevates the uterus and displaces it to the right. Even though the uterus feels firm, it may relax enough to foster bleeding. The bladder should be emptied to improve uterine tone. Watching for signs of retained secundines may be done if emptying the bladder does not rectify the situation. If parts of the placenta, umbilical cord, or fetal membranes are not fully expelled during the third stage of labor, their retention limits uterine contraction and involution; a boggy uterus and bleeding may be evident. Vigorous massage tires the uterus, and even with massage the uterus is unable to contract over a full bladder. Explaining to the client that this is a sign of uterine stabilization is not accurate; the uterus will not remain contracted over a full bladder.",
            topic: "Intrapartum Care II",
            source: "eaq"
          }
        ]
      }
    }
,
    {
      id: "week4labor",
      label: "Artificial Management of Labor",
      week: 4,
      sets: {
        mustKnow: [],
        extraPractice: [],
        eaq: [
          {
            stem: "Which instruction would the nurse include when teaching episiotomy care?",
            options: ["Rest with legs elevated at least 2 times a day.","Avoid stair climbing for several days after discharge.","Perform perineal care after toileting until healing occurs.","Continue sitz baths 3 times a day if they provide comfort."],
            answer: 2,
            rationale: "Performing perineal care after toileting until the episiotomy is healed is critical to the prevention of infection, which is at the core of episiotomy care. Resting is encouraged to promote involution and general recovery from childbirth. Stair climbing may cause some discomfort but is not detrimental to healing. There is no limit to the number of sitz baths per day that the client may take if they provide comfort.",
            topic: "Artificial Management of Labor",
            source: "eaq"
          },
          {
            stem: "Which physiological changes would the nurse anticipate after an amniotomy is performed?",
            options: ["Diminished bloody show","Increased and more variable fetal heart rate","Less discomfort with contractions","Progressive dilation and effacement"],
            answer: 3,
            rationale: "Artificial rupture of the membranes (amniotomy) allows more effective exertion of pressure of the fetal head on the cervix, enhancing dilation and effacement. Vaginal bleeding (bloody show) may increase because of the progression of labor. Amniotomy does not directly affect the fetal heart rate. Discomfort may become greater because contractions usually increase in intensity and frequency after the membranes are artificially ruptured.",
            topic: "Artificial Management of Labor",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "week4complications",
      label: "Intrapartum Complications",
      week: 4,
      sets: {
        mustKnow: [],
        extraPractice: [],
        eaq: [
          {
            stem: "A client who recently was told by her primary health care provider that she has extensive terminal metastatic carcinoma of the breast tells the nurse that she believes an error has been made. She states that she does not have breast cancer, and she is not going to die. Which stage of death and dying is the client experiencing?",
            options: ["Anger","Denial","Bargaining","Acceptance"],
            answer: 1,
            rationale: "The client has difficulty accepting the inevitability of death and is attempting to of it. In the anger stage the client strikes out with \"Why me?\" and \"How could God do this?\" types of statements. The client is angry at life and still angrier to be removed from it by death. In the bargaining stage the client tries to bargain for more time. The reality of death is no longer denied, but the client attempts to manipulate and extend the remaining time. In the acceptance stage the client accepts the inevitability of death and peacefully awaits it.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "Which risk to the fetus is associated with a maternal diagnosis of chorioamnionitis?",
            options: ["Sepsis","Bacteremia","Pneumonia","Cerebral palsy (CP)","Respiratory distress syndrome (RDS)"],
            answers: [0,1,2,3,4],
            rationale: "If a pregnant client is diagnosed with chorioamnionitis, risks to the fetus include sepsis, bacteremia, pneumonia, CP, and RDS.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "A pregnant client with a history of preterm labor is at home on bed rest. Which instruction would be included in this client’s teaching plan?",
            options: ["Place blocks under the foot of the bed.","Sit upright with several pillows behind the back.","Lie on the side with the head raised on a small pillow.","Assume the knee-chest position at regular intervals throughout the day."],
            answer: 2,
            rationale: "Bed rest keeps the pressure of the fetal head off the cervix. The side-lying position keeps the gravid uterus from impeding blood flow through major vessels, thus maintaining uterine perfusion. The Trendelenburg position is used when the cord is prolapsed or the client is in shock. Sitting up in bed increases pressure on the cervix and could lead to further dilation. Assuming the knee-chest position at regular intervals throughout the day may help relieve pressure of the fetus on the cervix; however, it will not enhance uterine perfusion.",
            topic: "Intrapartum Complications",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "other",
      label: "Other EAQ Questions",
      sets: {
        mustKnow: [],
        extraPractice: [],
        eaq: [
          {
            stem: "Which intervention would the nurse recommend for post-cesarean gas pain?",
            options: ["Lying on the right side","Walking around the room","Using a straw when drinking water","Supporting the incision when moving"],
            answer: 1,
            rationale: "Walking around as much as possible can help expel excess gas after a cesarean birth. The client also may be advised to lie on the left (not right) side and rock in a rocking chair. The client should avoid using a straw when drinking water or other fluids. Supporting the incision when moving relieves incisional pain, but does not promote expulsion of gas.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which statement by a new mother observing her preterm infant in the neonatal intensive care nursery indicates that she has not yet begun the bonding process?",
            options: ["\"It’s such a tiny baby.\"","\"Do you think he’ll make it?\"","\"Why does he need to be in an incubator?\"","\"My baby looks so much like my husband.\""],
            answer: 0,
            rationale: "By failing to acknowledge the infant as a person, the client is demonstrating that she is still trying to process the current situation as reality. Acknowledging the infant by using the word \"he\" denotes a relationship. Saying that the baby looks like her husband indicates that the mother has incorporated the infant into the family.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "8 3.6 A client at the fertility clinic is being treated for hypertension and obesity and has lost lb ( kg) in the past month, and her blood pressure has decreased to 154/98 mmHg. She states she is using self-control strategies to achieve these improvements. Which would be a therapeutic response by the nurse?",
            options: ["Explaining to the client that her current program needs revision to improve results","Acknowledging the client’s achievement while encouraging continuation of her current program","Emphasizing to the client the importance of exercise in addition to reduced sodium and caloric intake","Recommending that the client ask her health care practitioner about a prescription for an antihypertensive or a diuretic"],
            answer: 1,
            rationale: "Acknowledging the client’s achievement while encouraging continuation of her current program recognizes achievement and reinforces the client’s behavior. Explaining to the client that her current program needs revision to improve results focuses on the negative rather than the positive; small gains should be reinforced. Emphasizing to the client the importance of exercising in addition to reducing sodium and caloric intake implies that the client is not doing enough; the focus should be on the positive, and the gains should be reinforced. The client may need an antihypertensive medication because her blood pressure is still elevated, and that would require discussion and consultation with her health care provider, but focusing on that rather than on her successes would not be a therapeutic response.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which client care activity may the nurse safely delegate to an unlicensed health care worker?",
            options: ["Assessing a client’s mastectomy incision for signs of inflammation","Assisting a client who is recovering from an abdominal hysterectomy to the bathroom","Providing information about side effects to a client receiving chemotherapy for breast cancer","Evaluating the effectiveness of an antiemetic that was administered to a client to relieve nausea"],
            answer: 1,
            rationale: "An unlicensed health care worker is taught how to safely ambulate clients; this activity does not require extensive nursing knowledge or expert clinical judgment. Assessment, teaching, and evaluation of client responses to care all require clinical judgment and a license to practice nursing.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "The nurse plans to delegate some of the tasks for the discharge of a postpartum client to an unlicensed health care worker. Which activity must be performed by the nurse?",
            options: ["Obtaining the client's last set of vital signs","Calling to arrange the client’s postpartum appointment","Comparing the identification bands of mother and infant","Gathering the client's personal belongings for discharge"],
            answer: 2,
            rationale: "It is the nurse's professional responsibility to compare the mother's and infant's identification bands one last time before discharge to ensure that the correct infant is discharged with the correct mother. Obtaining the client's vital signs, arranging the client's postpartum appointment, and gathering the client's personal belongings are all within the role of the unlicensed assistive personnel and may be safely delegated.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which technique should the nurse use first for a conscious obstetrical client with a severe foreign body airway obstruction?",
            options: ["Abdominal thrusts","Back blows","Chest thrusts","Suprapubic thrusts"],
            answer: 1,
            rationale: "Current guidelines recommend beginning with 5 back blows between the shoulder blades for a conscious pregnant client with a severe foreign body airway obstruction. If the obstruction is not relieved, the sequence continues with 5 chest thrusts, alternating between back blows and chest thrusts until the object is expelled or the client becomes unresponsive. Abdominal thrusts and suprapubic thrusts are not recommended for pregnant clients because of the risk to the uterus and fetus.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which statement by a breast-feeding mother indicates that the nurse’s teaching regarding stimulating the let-down reflex has been successful?",
            options: ["\"I will take a cool shower before each feeding.\"","\"I will drink a couple of quarts of fat-free milk a day.\"","\"I will wear a snug-fitting breast binder day and night.\"","\"I will apply warm packs and massage my breasts before each feeding.\""],
            answer: 3,
            rationale: "Applying warm packs and massaging the breasts before each feeding help dilate milk ducts, promote emptying of the breasts, and stimulate further lactation. Taking a cool shower before each feeding will contract the milk ducts and interfere with the let-down reflex. Heavy consumption of milk products is not required to stimulate the production of milk. Breast binders may inhibit lactation by fooling the body into thinking that milk secretion is no longer needed.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which response would the nurse give to a postpartum client who asks if she can drink a small glass of wine before breast-feeding the first time to help her relax?",
            options: ["\"I think drinking 1 glass of wine won’t be a problem. Go ahead.\"","\"You seem a little tense. Tell me how you feel about breast-feeding.\"","\"You seem to find it relaxing, but you should try to find another way to relax.\"","\"I think drinking 1 glass of wine is alright, but you had better check with your health care provider first.\""],
            answer: 1,
            rationale: "Stating that the client seems tense and initiating a discussion honors the client’s feelings and encourages expression of them; there is no reference to alcohol consumption and its relaxing effects. Alcohol ingestion should not be encouraged, because it enters the breast milk. Stating that the client needs to find another way to relax reflects the client’s statement but not her underlying feelings. Suggesting that she find another way to relax may make the client defensive and shut off communication. Although alcohol ingestion should not be encouraged because it enters breast milk, the primary health care provider need not be involved because health education is within the role of the nurse.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which information would the nurse include in the discharge teaching of a postpartum client?",
            options: ["The prenatal Kegel tightening exercises should be continued.","A bowel movement may not occur for up to a week after the birth.","The episiotomy sutures will be removed at the first postpartum visit.","A postpartum checkup should be scheduled as soon as menses returns."],
            answer: 0,
            rationale: "Kegel exercises may be resumed immediately and should be done for the rest of the client's life because they help strengthen muscles needed for urinary continence and may enhance sexual intercourse. Episiotomy sutures do not have to be removed. Bowel movements should spontaneously return in 2 to 3 days after the client gives birth; a delay of bowel movements promotes constipation, perineal discomfort, and trauma. The usual postpartum examination is 6 weeks after birth; the menses may return earlier or later than this and should not be a factor when the client is scheduling a postpartum examination.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which direction would the nurse give a client in preparation for ultrasonography at the end of her first trimester?",
            options: ["Empty her bladder.","Avoid eating for 8 hours.","Take a laxative the night before the test.","Increase fluid intake for 1 hour before the procedure."],
            answer: 3,
            rationale: "In the first trimester when fluid fills the bladder, the uterus is pushed up toward the abdominal cavity for optimum ultrasound viewing. The bladder must be full, not empty, for better visualization of the uterus. The gastrointestinal tract is not involved in ultrasound preparation, so directing the client to not eat for 8 hours before the test or to take a laxative would not be appropriate.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which cause may produce abnormal uterine bleeding?",
            options: ["Hypothyroidism","Failure to ovulate","Bleeding disorders","Unidentified pregnancy","Use of oral contraceptives","Benign lesions of the uterus"],
            answers: [0,1,2,3,4,5],
            rationale: "Common causes for any type of abnormal uterine bleeding include endocrine disorders like hypothyroidism; failure to ovulate or respond appropriately to ovulation hormones; bleeding disorders; pregnancy complications such as an unidentified pregnancy that is ending in spontaneous abortion; breakthrough bleeding, which may occur in the woman taking oral contraceptives; and lesions of the vagina, cervix, or uterus (benign or malignant).",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "A pregnant client is admitted with abdominal pain and heavy vaginal bleeding. Which is the immediate nursing action?",
            options: ["Establish intravenous access","Elevate the head of the bed","Position the client laterally to the left","Administer an intramuscular analgesic"],
            answer: 0,
            rationale: "Abdominal pain and heavy vaginal bleeding indicate significant blood loss. Establishing intravenous access is essential to provide care for this patient who may need a blood transfusion, surgery, and IV fluids. Elevating the head of the bed will decrease blood flow to vital centers in the brain. The client should be placed in the left lateral position following the establishment of adequate IV access. Giving an intramuscular analgesic may mask abdominal pain and sedate an already compromised fetus. Delivery via cesarean section is likely.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "A client at 36 weeks’ gestation presents with severe abdominal pain, heavy vaginal bleeding, a drop in blood pressure, and an increased pulse rate. Which complication of pregnancy is suggested by these signs and symptoms?",
            options: ["Hydatidiform mole","Vena cava syndrome","Marginal placenta previa","Abruptio placentae"],
            answer: 3,
            rationale: "Severe pain accompanied by bleeding at term or close to it is symptomatic of complete premature detachment of the placenta (abruptio placentae). A hydatidiform mole is diagnosed before 36 weeks’ gestation; it is not accompanied by severe pain. There is no bleeding with vena cava syndrome. Bleeding caused by placenta previa should not be painful.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which instruction would the nurse give to a client in labor who begins to experience dizziness and tingling of her hands?",
            options: ["Breathe into her cupped hands.","Pant during the next 3 contractions.","Hold her breath with the next contraction.","Use a fast, deep, or shallow breathing pattern."],
            answer: 0,
            rationale: "Dizziness and tingling of the hands are signs of respiratory alkalosis, most likely the result of hyperventilating. Breathing into cupped hands or a paper bag promotes the rebreathing of carbon dioxide. Panting during the next 3 contractions could cause the client to hyperventilate more. Holding her breath with the next contraction will not improve the client's respiratory alkalosis. Using a fast, deep, or shallow breathing pattern could cause the client to hyperventilate more.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which assessment finding would the nurse question for a client who is considering oral contraceptives?",
            options: ["Blood clots","Heart disease","Breast cancer","Impaired liver function","Undiagnosed vaginal bleeding","Smoking more than 15 cigarettes per day"],
            answers: [0,1,2,3,4,5],
            rationale: "Women with the following disorders should not take oral contraceptives or should use them with caution: thromboembolic disorders like blood clots, cerebrovascular accident, or heart disease; estrogen-dependent cancer or breast cancer; impaired liver function; confirmed or possible pregnancy; undiagnosed vaginal bleeding; a smoking pattern of more than 15 cigarettes per day for women older than 35 years (the pill is safe for women older than 35 years if they do not smoke). However, smoking increases the chance of experiencing complications in all age groups.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which definition would the nurse use to explain osteoporosis?",
            options: ["It is avascular necrosis.","It is caused by pathological fractures.","It is hyperplasia of osteoblasts.","It involves a decrease in bone substance."],
            answer: 3,
            rationale: "Osteoporosis involves a defect in the bone matrix formation that weakens bones, making them unable to withstand usual functional stresses. Avascular necrosis is the death of bone tissue that results from reduced circulation to bone. Pathological fractures can result from osteoporosis. Hyperplasia of osteoblasts is not related to osteoporosis. This occurs during bone healing.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "When can a primigravida fetal heartbeat be heard for the first time?",
            options: ["A stethoscope at 4 weeks","A fetoscope at 10 to 12 weeks","Doppler ultrasound after 20 weeks","Doppler ultrasound at 10 to 12 weeks"],
            answer: 3,
            rationale: "A fetal heartbeat can be obtained at 10 to 12 weeks with electronic Doppler ultrasound. The heartbeat cannot be obtained with a stethoscope, and 4 weeks is too early to hear a fetal heart. A fetoscope cannot pick up the heartbeat until the 17th week. The heart rate can be detected 8 to 10 weeks earlier than 20 weeks.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which maternal complications are associated with precipitous labor and birth?",
            options: ["Hypertension","Hypoglycemia","Chilling and shivering","Bleeding and infection"],
            answer: 3,
            rationale: "Precipitate birth is associated with an increased maternal morbidity rate, because hemorrhage and infection may occur as a result of the trauma of a rapid, forceful birth in a contaminated field. Hypertension is anticipated in a client with preeclampsia. There are not enough data to indicate that this client has preeclampsia. A low blood glucose level is not expected after a precipitous birth. Chilling and shivering are common maternal responses after all types of births because of cardiovascular and vasomotor changes.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which is suspected when a client at 37 weeks’ gestation experiences a sudden sharp pain in her abdomen with a period of fetal hyperactivity followed by fundal tenderness and a small amount of dark-red bleeding?",
            options: ["True labor","Placenta previa","Partial abruptio placentae","Abdominal muscular injury"],
            answer: 2,
            rationale: "Typical manifestations of abruptio placentae are sudden sharp localized pain and small amounts of dark-red bleeding caused by some degree of placental separation. True labor begins with regular contractions, not sharp localized pain. There is no pain with placenta previa, just the presence of bright-red bleeding. There are no data to indicate that the client sustained an injury.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which assessment would the nurse include in the plan of care for a postpartum client with large, painful varicose veins?",
            options: ["Monitoring daily clotting times","Assessing for peripheral pulses","Monitoring daily hemoglobin values","Assessing for signs of thrombophlebitis"],
            answer: 3,
            rationale: "Varicose veins predispose the client to thrombophlebitis; warmth, redness, and pain in the calf are signs of thrombophlebitis. The clotting mechanism is not affected; clot formation results because of venous pooling and decreased venous return caused by the impaired vasculature. The problem is venous, not arterial, so pulses are not affected. Hemoglobin values are affected by the amount of bleeding that occurred during the birth, which usually is not severe enough to impair circulatory competency.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "The nurse is teaching participants in a prenatal class regarding breast-feeding versus formula feeding. A client asks, \"What is the primary advantage of breast-feeding?\" Which response is most appropriate?",
            options: ["\"Breast-fed infants have fewer infections.\"","\"Breast-feeding inhibits ovulation in the mother.\"","\"Breast-fed infants adhere more easily to a feeding schedule.\"","\"Breast-feeding provides more protein than cow's milk formula does.\""],
            answer: 0,
            rationale: "Maternal antibodies are transferred from the mother in breast milk, providing protection for a longer time than do antibodies transferred to the fetus by way of the placenta. The neonate is protected by the antibodies and thus has fewer infections. The fetus' own antibody system is immature at birth. Women who breast-feed completely (day and night with no supplementary feedings) may avoid ovulation and resumption of the menstrual cycle. Use of formula or solid foods decreases breast-feeding frequency and can lead to ovulation. Ovulation generally occurs before menses, making it difficult to know when the menstrual cycle is resuming. Therefore, breast-feeding is considered one of the least reliable methods of contraception for the new mother. Because of the higher carbohydrate content of breast milk, which is digested rapidly, breast-fed infants wake more frequently than formula-fed infants. Their feeding demands take more time to regulate than do the formula-fed infants'. Breast milk has 1.1 g protein/100 mL; cow's milk has 3.5 g/100 mL. Whole cow's milk is unsuitable for infants.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which type of lochia would the nurse expect to observe on a client's menstrual pad on the second day after a vaginal delivery?",
            options: ["Scant alba","Scant rubra","Moderate rubra","Moderate serosa"],
            answer: 2,
            rationale: "The uterus sloughs off the blood, tissue, and mucus of the endometrium postdelivery. This happens in 3 stages that will vary in length and represent the normal healing of the endometrium. Lochia rubra is the first and heaviest stage of lochia. The blood that is expelled during lochia rubra will be bright red and may contain blood clots. The lochia rubra phase typically lasts for about 3 days but may last up to 7 days. On the second day postpartum, the amount of lochia rubra is typically moderate, as the heaviest flow occurs in the first few days following delivery. Lochia serosa is the second stage of postpartum bleeding and is thinner in consistency and brownish or pink in color. Lochia serosa typically lasts about 2 weeks, although for some women it can last up to 4 to 6 weeks postpartum.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "A client has just given birth to an infant with Down syndrome. The mother is crying and asks the nurse what she is supposed to do now. Which response would the nurse give?",
            options: ["\"Tell me what you know about Down syndrome.\"","\"I would just continue to rest and recover from your delivery.\"","\"You really need to pull yourself together for your baby.\"","- \"Should I call in a chaplain or social worker for you?\""],
            answer: 0,
            rationale: "Asking the client what she knows about Down syndrome is an open-ended question that will facilitate teaching and open dialogue. Telling the client to just recover is not addressing the client's emotional adjustment. Chastising the client for emotional expression will block further dialogue. A chaplain or social worker is not needed at this moment but could potentially be used later.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "For which complication would the nurse closely monitor a client with a diagnosis of abruptio placentae?",
            options: ["Cerebral hemorrhage","Pulmonary edema","Impending seizures","Hypovolemic shock"],
            answer: 3,
            rationale: "With abruptio placentae, uterine bleeding can result in massive internal hemorrhage, causing hypovolemic shock. A cerebral hemorrhage may occur with a dangerously high blood pressure; there is no information indicating the presence of a dangerously high blood pressure. Pulmonary edema may occur with severe preeclampsia or heart disease, and seizures are associated with severe preeclampsia; there is no information indicating the presence of these conditions.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "A breast-feeding mother experiences redness and pain in the left breast, a temperature of 100.8°F 38.2 ( °C), chills, and malaise. Which condition would the nurse suspect?",
            options: ["Mastitis","Engorgement","Blocked milk duct","Inadequate milk production"],
            answer: 0,
            rationale: "Because of the presence of generalized symptoms, the nurse would suspect mastitis. Engorgement would involve both breasts, not one. A blocked milk duct is usually marked by swelling and pain in one area of the breast but does not have systemic symptoms. There is no indication of the volume of milk being produced.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which disease is in the top five leading causes of death in American women?",
            options: ["Alzheimer","Diabetes mellitus","Liver disease","Influenza and pneumonia"],
            answer: 0,
            rationale: "Alzheimer disease is in the top five leading cause of death among American women. Diabetes mellitus, liver disease, influenza, and pneumonia are consistently in the top ten leading causes of death for American women.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Offspring of men of advanced paternal age are at an increased risk for which condition?",
            options: ["Schizophrenia","Cystic fibrosis","Sickle cell anemia","Tay-Sachs disease"],
            answer: 0,
            rationale: "Advanced paternal age increases the risks of some autosomal dominant disorders, autism spectrum disorder, and schizophrenia. Cystic fibrosis, sickle cell anemia, and Tay-Sachs disease are recessive diseases, and the risk of these diseases does not increase because of advanced paternal age.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "A client is being initiated on bisphosphonates. Which advice will the nurse provide?",
            options: ["\"Take it on an empty stomach.\"","\"This medication should be taken at night before bed.\"","\"These medications should be taken with food or milk.\"","\"Lie down for a bit after taking the medication.\""],
            answer: 0,
            rationale: "Bisphosphonates should be taken on an empty stomach in the morning because food and some minerals reduce absorption. The client should remain upright for 30 minutes after taking the medication.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which statement accurately describes the current advice regarding breast self-examination (BSE)?",
            options: ["BSEs clearly decrease mortality.","BSEs prevent unnecessary testing.","BSEs should be done immediately before menstruation.","BSE should be taught to all women."],
            answer: 3,
            rationale: "It is true that the American Cancer Society and breastcancer.org continue to recommend selfexaminations. BSEs do not clearly decrease mortality. Rather than save women from unnecessary testing, they tend to result in unnecessary procedures, including biopsies. It's best to do selfexaminations when breasts are not tender or swollen as they often are right before or after menstruation.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which is the expected color and consistency of amniotic fluid at 36 weeks’ gestation?",
            options: ["Clear, dark amber colored, and containing shreds of mucus","Straw colored, clear, and containing little white specks","Milky, greenish yellow, and containing shreds of mucus","Greenish yellow, cloudy, and containing little white specks"],
            answer: 1,
            rationale: "By 36 weeks' gestation, amniotic fluid should be pale yellow or straw-colored with small particles of – vernix caseosa present. Dark amber colored fluid suggests the presence of bilirubin, an ominous sign. Greenish-yellow fluid may indicate the presence of meconium and suggests fetal compromise. Cloudy fluid suggests the presence of purulent material.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Several hours after delivery, a new mother expresses ambivalence regarding her infant. How will the nurse promote bonding between this mother and her newborn?",
            options: ["Having the mother feed the infant","Removing the infant from the mother's arms if it cries","Positioning the infant so its head rests on the mother's shoulder","Encouraging the mother to sleep for 4 to 6 hours before interacting with the infant"],
            answer: 0,
            rationale: "Feeding the infant promotes bonding through physical interaction, and positioning the infant in a face-to-face position facilitates eye contact. Removing the infant decreases the pair's time together. Positioning the infant on the mother's shoulder prevents the face-to-face contact that promotes bonding. It is important to have the parent and infant interact as soon as possible after birth to promote bonding.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which client is at increased risk for postpartum hemorrhage?",
            options: ["One who breast-feeds in the birthing room","One who receives a pudendal block for the birth","One whose third stage lasts less than 10 minutes","One who gives birth to an infant weighing 9 lb 8 oz (4366 g)"],
            answer: 3,
            rationale: "The risk for a postpartum hemorrhage is greater with large infants, because the uterine musculature has been stretched excessively, thus impairing the ability of the uterus to contract after the birth. Early breast-feeding stimulates uterine contractions and lessens the chance of hemorrhage. Having a pudendal block for the birth does not contribute to the risk for postpartum hemorrhage, because the anesthetic for a pudendal block does not affect uterine contractions. A third stage of labor lasting less than 10 minutes is a short third stage; a prolonged third stage of labor, 30 minutes or longer, could increase the risk of postpartum hemorrhage.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which client statement leads the nurse to conclude that the client has been experiencing menorrhagia?",
            options: ["\"It hurts when I have intercourse.\"","\"I have a foul-smelling vaginal discharge.\"","\"I have bleeding between my menstrual periods.\"","\"I have severe bleeding during my menstrual periods.\""],
            answer: 3,
            rationale: "Menorrhagia is severe bleeding during a menstrual period. Painful intercourse is the definition of dyspareunia. Foul-smelling vaginal discharge is a sign of a vaginal infection. Metrorrhagia is uterine bleeding that occurs at any time other than during the menstrual period.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which type of isolation precautions would the postpartum nurse plan to implement for a client who has given birth by urgent cesarean section related to active herpes simplex virus (genitalia) following onset of labor and rupture of membranes 8 hours ago?",
            options: ["Standard","Droplet","Contact","Airborne"],
            answer: 2,
            rationale: "Contact precautions include a gown, mask, and gloves; the client should be in a private room. Airborne and droplet precautions are not necessary for a person with genital herpes. The client and newborn should be placed in contact precautions until infant culture results are available and neonatal infection has been ruled out. This neonate may have been exposed to genital herpes when the client arrived with ruptured membranes in active labor. Normally, the amniotic sac serves as another protection against neonatal exposure. Maternal genital herpes, when neonatal exposure is not suspected following rupture of membranes, requires only standard precautions.",
            topic: "Other EAQ Questions",
            source: "eaq"
          }
        ]
      }
    }
  ]
};
