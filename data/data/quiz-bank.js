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

   Revised 2026-07-26 (mustKnow + extraPractice only — the eaq sets were
   deliberately NOT touched): stripped giveaway phrasing out of stems,
   removed self-explaining answer options, replaced throwaway distractors
   with plausible near-misses, reframed straight recall as clinical
   vignettes, and redistributed the correct-answer positions (several
   extraPractice sets previously had nearly every answer in position B,
   and the Week 4 sets in position A). mustKnow items were re-synced to
   the rebuilt 2026-07-26 exam wording, with option ORDER varied where
   copying the exams verbatim would have clustered a topic's answers in
   one position. Question count and content are unchanged and remain
   lecture-faithful; a handful of extraPractice items were repointed to a
   different fact on the same page where they had come to duplicate a
   question on Exam 1 or 2 (oligohydramnios cause, RhoGAM trigger,
   temperature interval after ROM, external cephalic version).
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
            options: ["One artery carries oxygenated blood in and two veins carry waste out","Two arteries carry waste out and one vein carries oxygenated blood in","Three veins carry oxygenated blood in and waste is cleared by the placenta","Two veins carry oxygenated blood in and one artery carries waste out"],
            answer: 1,
            rationale: "The cord has two arteries (carry waste/deoxygenated blood away) and one vein (delivers oxygenated blood to the fetus) — \"backwards\" from adult circulation.",
            topic: "Anatomy & Physiology",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "A postmenopausal patient is being evaluated for uterine prolapse. Weakening of which structure best explains this finding?",
            options: ["Broad ligament","Round ligament","Cardinal ligament","Ovarian ligament"],
            answer: 2,
            rationale: "The cardinal ligament is the chief uterine support and helps prevent prolapse. The round ligament pulls the uterus down and forward; the broad ligament keeps it centrally placed; the ovarian ligament anchors the ovary.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "A patient at 20 weeks reports a sharp, one-sided pulling pain in her groin that happens when she stands up quickly or rolls over in bed. Which structure is the most likely source?",
            options: ["Round ligament","Cardinal ligament","Broad ligament","Ovarian ligament"],
            answer: 0,
            rationale: "The round ligament pulls the uterus down and forward and is stretched by the growing uterus, making it a common source of sharp, one-sided pain with sudden movement. The cardinal ligament is the chief support and the broad ligament keeps the uterus centrally placed.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student asks what purpose the vaginal fornices serve in conception. What is the best response?",
            options: ["They secrete the mucus that forms the mucus plug","They anchor the cervix to the sacrum","They keep the vaginal pH acidic to protect against infection","They allow semen to pool near the cervical os"],
            answer: 3,
            rationale: "The anterior and posterior fornices are recesses around the cervix that allow semen to pool, aiding sperm transport toward the cervical os.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "A patient in the second half of her cycle asks which hormone is now keeping her uterus quiet in case an embryo implants. What is the nurse's best response?",
            options: ["Estrogen","Progesterone","Follicle-stimulating hormone","Prolactin"],
            answer: 1,
            rationale: "Progesterone stabilizes the uterus for implantation, thickens cervical mucus, and supports lactation. Estrogen dominates the first half of the cycle; FSH matures the follicle; prolactin drives milk production.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "A patient charting her cycle asks what is happening in her ovary between the end of her period and ovulation. The nurse explains this is the:",
            options: ["Luteal phase","Secretory phase","Follicular phase","Ischemic phase"],
            answer: 2,
            rationale: "In the follicular phase the immature egg matures under FSH, ending in ovulation (~day 13-15). The luteal phase follows ovulation; the secretory and ischemic phases describe the endometrium, not the ovary.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is teaching about a group of fatty acids that can both relax and constrict smooth muscle and are used clinically to ripen the cervix and strengthen contractions. These are:",
            options: ["Prostaglandins","Relaxin","Prolactin","Oxytocin"],
            answer: 0,
            rationale: "Prostaglandins are fatty acids that relax and constrict smooth muscle; they are used in labor induction and to increase contractions. Relaxin softens connective tissue; oxytocin is a hormone, not a fatty acid.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "An ultrasound reports an amniotic fluid index (AFI) of 4 cm. Which item in the patient's history best explains this finding?",
            options: ["Gestational diabetes","A twin gestation","A fetus with esophageal atresia","Chronic hypertension"],
            answer: 3,
            rationale: "An AFI under 5 is oligohydramnios (<500 mL; normal AFI 5-25), linked to maternal perfusion problems such as hypertension and to fetal kidney or bladder problems. Diabetes, multiple gestation, and fetal GI/swallowing problems all cause POLYhydramnios instead.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "A male patient being evaluated for infertility asks what his prostate gland contributes. The nurse explains that it:",
            options: ["produces the sperm themselves","adds fluid that shields sperm from vaginal acid","stores sperm while they finish maturing","holds the testes away from body heat"],
            answer: 1,
            rationale: "The prostate encircles the urethra and secretes fluid that protects sperm from the acidic vaginal environment. The testes produce sperm, the epididymis stores it while it matures, and the scrotum regulates temperature.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "A patient who just found out she is 5 weeks pregnant asks whether her baby has a heartbeat yet. What is the nurse's best response?",
            options: ["\"It will start beating at about 8 weeks.\"","\"It will start beating at about 6 weeks.\"","\"It has been beating since about week 4.\"","\"It starts about the time you first feel movement.\""],
            answer: 2,
            rationale: "The fetal heart begins to beat around week 4 — often before the mother knows she is pregnant. Quickening (first felt movement) is not until 16-22 weeks.",
            topic: "Anatomy & Physiology",
            source: "quiz-bank"
          },
          {
            stem: "Which statements about meiosis (versus mitosis) are true? Select all that apply.",
            options: ["It produces eggs and sperm","Its daughter cells carry only half the genetic material","Oogenesis is complete at birth","Spermatogenesis begins at puberty","It produces exact copies of cells for tissue repair","It occurs in every body cell throughout life"],
            answers: [0, 1, 2, 3],
            rationale: "Meiosis produces gametes with half the genetic material; oogenesis is complete at birth and spermatogenesis begins at puberty. Producing exact copies for growth/repair, and occurring in body cells throughout life, both describe mitosis.",
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
            options: ["Vaginal delivery with IV acyclovir","Vacuum-assisted vaginal delivery","Cesarean birth","Tocolytics until the lesion resolves"],
            answer: 2,
            rationale: "An active HSV lesion at delivery requires a cesarean birth; vaginal exposure can cause a fatal systemic infection in the newborn. Acyclovir is started at 36 weeks to suppress outbreaks, but it does not make a vaginal birth safe once a lesion is present.",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A father has an autosomal DOMINANT disorder and is heterozygous (Dd). The mother is unaffected (dd). What does the nurse teach about each pregnancy?",
            options: ["25% of children will be affected","75% of children will be affected","No children will be affected, but all will be carriers","50% of children will be affected"],
            answer: 3,
            rationale: "Dd × dd yields 50% Dd (affected). In an autosomal dominant disorder only ONE abnormal allele is needed, so there is no silent carrier state.",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A menstruating patient who uses super-absorbent tampons presents with fever, hypotension, vomiting, and a sunburn-like rash on her trunk. The nurse recognizes this as:",
            options: ["A yeast infection that can be managed at home","Toxic shock syndrome","Normal premenstrual symptoms","Bacterial vaginosis"],
            answer: 1,
            rationale: "Toxic shock syndrome (a Staph aureus toxin linked to super-absorbent tampons) is a medical emergency requiring hospitalization, IV fluids, and antibiotics; it can progress to shock and death.",
            topic: "Disorders & Genetics",
            source: "exam-1"
          },
          {
            stem: "A pregnant patient is diagnosed with gonorrhea. Untreated, the nurse knows this most importantly can cause which complication in the newborn?",
            options: ["Neural tube defects","Macrosomia","Cleft palate","Neonatal eye infection and blindness"],
            answer: 3,
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
            options: ["Cervical cancer","Osteoporosis","Tubal damage and infertility","Gestational diabetes"],
            answer: 2,
            rationale: "PID can scar the fallopian tubes and cause infertility, which is why untreated chlamydia and gonorrhea are such a concern.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "Which diagnostic test and treatment are correct for syphilis in pregnancy?",
            options: ["Diagnosed by wet mount; treated with metronidazole","Diagnosed by pH paper; no treatment needed","Diagnosed by culture; treated with fluconazole","Diagnosed by RPR or VDRL; treated with penicillin"],
            answer: 3,
            rationale: "Syphilis is screened with RPR or VDRL (RPR preferred) and treated with penicillin. Congenital syphilis can cause IUGR, preterm birth, and stillbirth.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "Both parents are carriers for cystic fibrosis, an autosomal recessive disorder. What does the nurse teach about each pregnancy?",
            options: ["25% affected, 50% carriers, 25% unaffected","50% of children will be affected","All children will be carriers","All children will be affected"],
            answer: 0,
            rationale: "A carrier × carrier cross (Bb × Bb) yields 25% affected (bb), 50% unaffected carriers (Bb), and 25% completely unaffected (BB) for each pregnancy.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          },
          {
            stem: "A patient reports a thin, grayish, watery discharge with a fishy odor; her vaginal pH is 5.0. Which condition does the nurse most suspect, and what treatment is anticipated?",
            options: ["Candidiasis — fluconazole","Bacterial vaginosis — metronidazole","Trichomoniasis — metronidazole","Toxic shock syndrome — hospitalization"],
            answer: 1,
            rationale: "Bacterial vaginosis produces a thin, gray, fishy-smelling discharge with a vaginal pH greater than 4.5; it is treated with metronidazole (Flagyl) or clindamycin cream. Trichomoniasis is also treated with metronidazole, but its discharge is frothy and yellow-green — so the discharge, not the drug, is what distinguishes them.",
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
            stem: "A patient reports a frothy yellow-green vaginal discharge with itching and dysuria; a wet mount shows a motile organism. Which infection and treatment does the nurse anticipate?",
            options: ["Bacterial vaginosis - clindamycin cream","Candidiasis - fluconazole","Trichomoniasis - metronidazole","Chlamydia - azithromycin"],
            answer: 2,
            rationale: "Trichomoniasis (Trichomonas vaginalis, the most common non-viral STI) causes a frothy yellow-green discharge and is diagnosed by seeing the motile organism on a wet mount; it is treated with metronidazole.",
            topic: "Disorders & Genetics",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "A patient has irregular periods, hirsutism, acne, obesity, and insulin resistance. Which condition is most likely?",
            options: ["Polycystic ovarian syndrome (PCOS)","Endometriosis","Fibrocystic breast changes","Premature ovarian failure"],
            answer: 0,
            rationale: "PCOS features irregular periods, elevated androgens (hirsutism, acne), obesity, insulin resistance, and infertility. It is managed with oral contraceptives, metformin, and spironolactone.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which procedure definitively diagnoses endometriosis?",
            options: ["Pelvic ultrasound","Wet mount","Pap smear","Laparoscopy"],
            answer: 3,
            rationale: "Endometriosis is diagnosed by laparoscopy — imaging alone is not definitive. It causes pelvic pain around menses and is often found during an infertility workup.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A patient has mobile, tender breast lumps that worsen before her menses. Which is the most likely condition, and what self-care is recommended?",
            options: ["Breast cancer - biopsy and staging","Fibrocystic breast changes - limit caffeine and sodium","Mastitis - oral antibiotics","Fibroadenoma - surgical excision"],
            answer: 1,
            rationale: "Fibrocystic breast changes (the most common benign breast disorder) cause mobile, tender lumps that worsen before menses; management includes limiting caffeine and sodium and sometimes oral contraceptives. A FIXED mass with skin retraction is the red flag for cancer.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which sexually transmitted infection is diagnosed by an abnormal Pap smear with biopsy and is the leading cause of cervical cancer?",
            options: ["Herpes simplex virus","Chlamydia","Human papillomavirus (HPV)","Syphilis"],
            answer: 2,
            rationale: "HPV causes genital warts and is the leading cause of cervical cancer; the Gardasil vaccine helps prevent it. It is diagnosed by an abnormal Pap smear and biopsy.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A male client has small testes, produces little or no sperm, and is being evaluated for infertility. A karyotype shows an extra sex chromosome. This describes:",
            options: ["Klinefelter syndrome","Turner syndrome","Down syndrome","Trisomy 18"],
            answer: 0,
            rationale: "Klinefelter syndrome is XXY (male), with small testes, low or absent sperm, and fertility issues. Turner syndrome is monosomy X (female); Down syndrome is trisomy 21.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which prenatal test samples placental tissue and CANNOT detect neural tube defects?",
            options: ["Amniocentesis","Quad screen","Nonstress test","Chorionic villus sampling (CVS)"],
            answer: 3,
            rationale: "CVS samples chorionic villi (placental tissue) and can be performed very early, but it cannot detect neural tube defects. Amniocentesis samples amniotic fluid and can. Its risks include ruptured membranes, bleeding, infection, and possible limb reduction.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A pregnant patient has a high fever, chills, and unilateral flank pain. Which condition is most likely, and how is it treated?",
            options: ["Cystitis — oral antibiotics at home","Pyelonephritis — IV fluids and IV antibiotics","Cystitis — hospitalization for IV antibiotics","Pyelonephritis — oral antibiotics at home"],
            answer: 1,
            rationale: "High fever, chills, and unilateral flank pain suggest pyelonephritis (an upper UTI), which is treated with IV fluids and IV antibiotics rather than at home. Cystitis is the lower UTI — low-grade fever, dysuria, and hematuria — and is managed with oral antibiotics.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Down syndrome is caused by which chromosomal abnormality?",
            options: ["Monosomy X","XXY","Trisomy 21","Trisomy 18"],
            answer: 2,
            rationale: "Down syndrome is trisomy 21 (three copies of chromosome 21), identified by karyotype. Monosomy X is Turner syndrome; XXY is Klinefelter syndrome.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which fertility medication stimulates follicle growth and egg release?",
            options: ["Clomiphene citrate (Clomid)","Bromocriptine","Progesterone","Methotrexate"],
            answer: 0,
            rationale: "Clomiphene citrate (Clomid) stimulates follicle growth and egg release. Bromocriptine inhibits prolactin to induce ovulation; methotrexate is used for an ectopic pregnancy.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which are essential factors for female fertility? Select all that apply.",
            options: ["Favorable cervical mucus","A retroverted uterus","Patent, normally motile fallopian tubes","Ovaries that produce and release normal eggs","A favorable endometrium"],
            answers: [0, 2, 3, 4],
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
            options: ["December 22","December 17","January 17","December 10"],
            answer: 1,
            rationale: "Naegele's rule uses the FIRST day of the LMP (March 10): subtract 3 months (December 10), then add 7 days = December 17. December 10 is the intermediate step, not the answer.",
            topic: "Antepartum Care",
            source: "exam-1"
          },
          {
            stem: "A patient at 30 weeks' gestation has a fundal height of 25 cm. What is the nurse's best interpretation?",
            options: ["This is expected and requires no action","This confirms intrauterine growth restriction","This discrepancy should be reported for further evaluation","Fundal height is unreliable and should be ignored"],
            answer: 2,
            rationale: "Fundal height should be within about ±2 cm of the gestational age in weeks (from ~22–34 weeks). 25 cm at 30 weeks is a 5-cm discrepancy that needs evaluation — but it does not by itself confirm a diagnosis.",
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
            options: ["Continue the visit with the partner present to save time","Ask the patient about abuse directly in front of the partner","Document \"no abuse\" since she did not report any","Escort her alone to give a urine sample so she can be screened privately"],
            answer: 3,
            rationale: "Intimate partner violence increases in pregnancy, and patients rarely disclose with a controlling partner present. Create private screening time and never raise it in front of others.",
            topic: "Antepartum Care",
            source: "exam-2"
          },
          {
            stem: "A primigravida asks when she should first expect to feel her baby move. What is the nurse's best response?",
            options: ["Between 16 and 22 weeks","Between 8 and 12 weeks","Between 24 and 28 weeks","Between 12 and 16 weeks"],
            answer: 0,
            rationale: "Quickening is usually felt around 16–22 weeks, and by about 20 weeks in most women (earlier if it is not her first baby). It is a key indicator of fetal well-being.",
            topic: "Antepartum Care",
            source: "exam-2"
          },
          {
            stem: "A patient at 17 weeks is anxious because her quad screen (MSAFP) came back abnormal. What is the nurse's best teaching?",
            options: ["\"This confirms your baby has a birth defect.\"","\"The test is drawn from the amniotic fluid and is diagnostic.\"","\"This is a screening test, so follow-up testing such as an ultrasound or amniocentesis will be needed.\"","\"An abnormal result at 17 weeks is always a lab error.\""],
            answer: 2,
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
            options: ["Nausea and vomiting","Goodell's, Chadwick's, and Hegar's signs","A positive pregnancy test","Auscultation of the fetal heartbeat by the examiner","Braxton Hicks contractions"],
            answers: [1, 2, 4],
            rationale: "Probable (objective) signs include Goodell's/Chadwick's/Hegar's signs, a positive pregnancy test, Braxton Hicks contractions, and palpating the fetal outline. Auscultating the fetal heartbeat is a POSITIVE (diagnostic) sign; nausea and vomiting is PRESUMPTIVE (subjective).",
            topic: "Antepartum Care",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "A patient's hemoglobin and hematocrit are lower at 28 weeks than at her first prenatal visit, but her iron studies are normal. What best explains this?",
            options: ["The body stops making red blood cells during pregnancy","Her iron stores are completely depleted","Plasma volume increases faster than the red cell count, diluting the concentration","The spleen destroys red blood cells during pregnancy"],
            answer: 2,
            rationale: "Blood volume rises 40-50% in pregnancy; because plasma volume increases faster than the red blood cell count, the RBC concentration is diluted, producing physiologic (pseudo) anemia. Normal iron studies rule out true iron-deficiency anemia.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "Pregnancy is a hypercoagulable state, which increases the risk of:",
            options: ["Blood clots (venous thromboembolism)","Spontaneous bleeding","Iron-deficiency anemia","Dehydration"],
            answer: 0,
            rationale: "Increased clotting factors plus venous stasis make pregnancy hypercoagulable, raising the risk of clots (VTE).",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "The recommended total weight gain for a woman who was OBESE before pregnancy is:",
            options: ["25-35 lb","28-40 lb","11-20 lb","15-25 lb"],
            answer: 2,
            rationale: "Obese: 11-20 lb. Overweight 15-25, normal weight 25-35, underweight 28-40. The pattern is ~1 lb/week in the last two trimesters.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "A pregnant patient's partner develops fatigue, trouble sleeping, and weight gain. This is known as:",
            options: ["Ambivalence","Introversion","Binding in","Couvade syndrome"],
            answer: 3,
            rationale: "Couvade syndrome is when the partner experiences pregnancy-like symptoms such as fatigue, sleep trouble, and weight gain.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "A pregnant patient is upset about brownish patches that have appeared on her face. What is the nurse's best response?",
            options: ["This should be evaluated for liver disease","This is hormone-driven and usually fades after delivery","This requires immediate treatment","This is an early sign of preeclampsia"],
            answer: 1,
            rationale: "Chloasma (melasma, the 'mask of pregnancy') and linea nigra are hormone-driven hyperpigmentation changes, worsened by sun exposure, that typically fade postpartum.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "Late in pregnancy a woman develops a 'waddling' gait and increased low-back curvature. What causes these musculoskeletal changes?",
            options: ["Relaxin loosening the pelvic joints, plus a shifted center of gravity","Calcium deficiency","A pinched sciatic nerve","Dehydration"],
            answer: 0,
            rationale: "Relaxin and other pregnancy hormones loosen the pelvic joints ('waddle' gait), and the enlarging uterus shifts the center of gravity, causing lordosis.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "In the first trimester a patient says she is happy about the pregnancy but also fearful. The nurse recognizes this contradictory feeling as:",
            options: ["Introversion","Couvade syndrome","Ambivalence","An early sign of depression requiring referral"],
            answer: 2,
            rationale: "Ambivalence — holding contradictory emotions such as happiness and fear — is a normal maternal emotional response, especially early in pregnancy.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "For an uncomplicated pregnancy, prenatal visits between 28 and 36 weeks occur:",
            options: ["Every 4 weeks","Every week","Every 3 weeks","Every 2 weeks"],
            answer: 3,
            rationale: "Up to 28 weeks: every 4 weeks; 28-36 weeks: every 2 weeks; 36 weeks to birth: weekly.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "A rubella titer drawn at the first prenatal visit determines:",
            options: ["Blood type","Immunity to rubella","Gestational diabetes risk","Risk of a neural tube defect"],
            answer: 1,
            rationale: "The rubella titer checks immunity to rubella. A non-immune woman receives the MMR vaccine postpartum, since it is a live virus.",
            topic: "Antepartum Care",
            source: "quiz-bank"
          },
          {
            stem: "Which are Rubin's maternal tasks of pregnancy? Select all that apply.",
            options: ["Ensuring safe passage through pregnancy, labor, and birth","Returning to pre-pregnancy weight before delivery","Seeking acceptance of the child by others","Seeking acceptance of herself as a mother ('binding in')","Learning to give of oneself on behalf of the child"],
            answers: [0, 2, 3, 4],
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
            options: ["Two accelerations of 15 bpm above baseline lasting 15 seconds each within 20 minutes","One acceleration of 15 bpm lasting 15 seconds within 20 minutes","Two accelerations of 10 bpm lasting 10 seconds each within 20 minutes","No decelerations over a 40-minute period"],
            answer: 0,
            rationale: "At ≥32 weeks, reactive = at least 2 accelerations of 15 bpm above baseline lasting 15 seconds within 20 minutes. The 10 bpm for 10 seconds criteria apply only under 32 weeks, and the absence of decelerations is not what makes an NST reactive.",
            topic: "Antepartum Care II",
            source: "exam-1"
          },
          {
            stem: "An amniocentesis is performed for fetal lung maturity. Which lecithin/sphingomyelin (L/S) ratio indicates MATURE fetal lungs?",
            options: ["1:2 or lower","1:1 exactly","2:1 or higher","The L/S ratio does not assess the lungs"],
            answer: 2,
            rationale: "An L/S ratio of 2:1 or greater indicates mature fetal lungs (adequate surfactant, which keeps the alveoli open).",
            topic: "Antepartum Care II",
            source: "exam-1"
          },
          {
            stem: "A contraction stress test shows late decelerations with more than half of the contractions. How does the nurse interpret this result?",
            options: ["Negative — reassuring","Reactive — reassuring","Equivocal — repeat in one week","Positive — indicating poor placental perfusion"],
            answer: 3,
            rationale: "The CST is \"backwards\": a POSITIVE CST (late decels with more than half of contractions) is the bad result, indicating poor placental perfusion. A NEGATIVE CST is the reassuring one; equivocal means suspicious/inconclusive and calls for further monitoring.",
            topic: "Antepartum Care II",
            source: "exam-2"
          },
          {
            stem: "The nurse is reviewing the biophysical profile (BPP). Which components are assessed by ultrasound? Select all that apply.",
            options: ["Fetal breathing","Non-stress test","Amniotic fluid index","Fetal tone","Fetal movement"],
            answers: [0, 2, 3, 4],
            rationale: "BATMAN: Breathing, Amniotic fluid, Tone, Movement are the four ultrasound components (up to 8/8); the non-stress test is the fifth component and is not done by ultrasound. Each scores 0 or 2 — never a 1.",
            topic: "Antepartum Care II",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "Which measure helps relieve heartburn in pregnancy?",
            options: ["Lie down flat right after eating","Increase caffeine intake","Eat fewer, larger meals","Take non-sodium antacids as recommended"],
            answer: 3,
            rationale: "Heartburn (the uterus displaces the stomach and the esophageal sphincter relaxes) is eased with non-sodium antacids and SMALL, frequent meals — not larger ones.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which measure helps relieve first-trimester nausea and vomiting?",
            options: ["Eat dry crackers or toast before rising","Eat a large breakfast immediately on waking","Drink coffee before getting up","Lie flat after each meal"],
            answer: 0,
            rationale: "Nausea (from increased hCG) is eased by dry crackers or toast before rising, small frequent meals, and avoiding greasy or spicy foods.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which statement by a pregnant patient indicates correct understanding of breast care teaching?",
            options: ["\"I'll wash my nipples with soap every day.\"","\"I'll apply rubbing alcohol to toughen my nipples.\"","\"I'll avoid using soap on my nipples.\"","\"I'll stop wearing a bra so my breasts aren't constricted.\""],
            answer: 2,
            rationale: "Avoid soap on the nipples because it dries them out. A supportive bra is recommended, and a nipple shield worn the last 3–4 weeks can help flat or inverted nipples.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Proper seat belt use in pregnancy places the lap belt:",
            options: ["Across the top of the abdomen","Under the abdomen","Across the widest part of the abdomen","Behind the back"],
            answer: 1,
            rationale: "The lap belt goes UNDER the abdomen so a crash does not transmit force directly to the uterus. Any pregnant patient in a car accident should be evaluated.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A patient in her first trimester asks whether she can keep using her hot tub. What is the nurse's best response?",
            options: ["It is safe as long as she limits it to 30 minutes","It is safe at any point in pregnancy","It is only unsafe in the third trimester","She should avoid it, because hyperthermia in the first trimester can harm the fetus"],
            answer: 3,
            rationale: "Hyperthermia should be avoided in the first trimester — no hot tubs or overly warm water — because that is when the organs are forming and early fetal development is most vulnerable.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A patient of childbearing age is prescribed isotretinoin (Accutane) for acne. What is the priority teaching?",
            options: ["Reliable birth control is required while taking it","It is safe throughout pregnancy","It should be taken with folic acid to prevent defects","It only affects the fetus in the third trimester"],
            answer: 0,
            rationale: "Isotretinoin (Accutane) is a potent teratogen that causes many birth defects; reliable contraception is required to receive it. No medication is considered 100% safe in pregnancy.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Why might a segment of umbilical cord be tested for cocaine after delivery?",
            options: ["Cocaine is stored in the cord for years","The cord is easier to obtain than blood","A maternal urine screen may already be negative, because cocaine metabolizes rapidly","Cocaine is not detectable in maternal urine at all"],
            answer: 2,
            rationale: "Cocaine metabolizes fast, so a urine screen can be negative within 24-48 hours; a cord segment reveals exposure during the pregnancy.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A 38-year-old is pregnant with her first baby. Because she is of advanced maternal age, the nurse anticipates counseling about the increased risk of:",
            options: ["Postterm pregnancy","Down syndrome and other chromosomal conditions","A shorter labor","A decreased need for prenatal visits"],
            answer: 1,
            rationale: "At 35 or older (advanced maternal age), the risk of Down syndrome and other chromosomal conditions rises notably, so screening/diagnostic testing is offered. AMA also carries higher risks of miscarriage, gestational diabetes, gestational hypertension, placenta previa, and cesarean birth.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which test is described as a great predictor of preterm birth because it measures cervical length and detects cervical funneling?",
            options: ["Nuchal translucency","Doppler flow studies","Biophysical profile","Transvaginal ultrasound"],
            answer: 3,
            rationale: "A transvaginal ultrasound uses a sterile probe with the bladder empty to get closer to the structures; it measures cervical length and detects funneling, making it a strong predictor of preterm birth.",
            topic: "Antepartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "Which outcomes are associated with maternal tobacco use in pregnancy? Select all that apply.",
            options: ["Low birth weight","Fetal macrosomia","Preterm birth","Premature rupture of membranes","Increased SIDS risk after birth"],
            answers: [0, 2, 3, 4],
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
            options: ["Calcium","Vitamin C","Magnesium","Iron"],
            answer: 3,
            rationale: "Even with an adequate diet, iron is the one supplement still truly needed — it supports the expanded maternal blood volume and oxygen-carrying capacity.",
            topic: "Maternal Nutrition",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "Calcium and phosphorus needs increase in pregnancy primarily to support:",
            options: ["Maternal blood clotting","Oxygen transport","Neural tube closure","Mineralization of the fetal bones and teeth"],
            answer: 3,
            rationale: "Calcium and phosphorus support mineralization of the fetal bones and teeth (and acid-base buffering). Iron supports oxygen transport; folic acid supports neural tube closure.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A severe maternal iodine deficiency can cause which condition in the infant?",
            options: ["Cretinism","Neural tube defect","Macrosomia","Hemophilia"],
            answer: 0,
            rationale: "Iodine is essential for thyroxine; severe deficiency causes cretinism. Iodized table salt is a good source, and no real increase in iodine intake is needed during pregnancy.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "Which group of vitamins is fat-soluble and stored in the liver?",
            options: ["The B vitamins and C","B12, folate, and niacin","A, D, E, and K","C, D, and the B vitamins"],
            answer: 2,
            rationale: "Vitamins A, D, E, and K are fat-soluble and stored in the liver. Vitamin C and the B vitamins are water-soluble and excreted in urine.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "The role of vitamin K in pregnancy is:",
            options: ["Absorption of calcium","Synthesis of prothrombin for blood clotting","Antioxidation","Energy metabolism"],
            answer: 1,
            rationale: "Vitamin K supports synthesis of prothrombin for blood clotting and is found in green leafy vegetables. No real increase in vitamin K is needed during pregnancy.",
            topic: "Maternal Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "Recommended daily fluid intake in pregnancy is:",
            options: ["Eight to ten 8-oz glasses","Two 8-oz glasses","Four 8-oz glasses","Twelve to fourteen 8-oz glasses"],
            answer: 0,
            rationale: "Eight to ten 8-oz glasses of fluid a day, with at least half of that as water.",
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
            options: ["The fasting value of 92","The one-hour value of 158","The two-hour value of 112","All of the values are at goal"],
            answer: 1,
            rationale: "GDM goals: fasting <95, one hour <140, two hours <120. The fasting 92 and two-hour 112 are at goal; the one-hour 158 is above the 140 target.",
            topic: "Antepartum Complications",
            source: "exam-2"
          },
          {
            stem: "The nurse assesses a pregnant patient with a cardiac disorder at each prenatal visit. Which findings indicate cardiac DECOMPENSATION? Select all that apply.",
            options: ["New cough","Weight loss","Dyspnea","Palpitations","Edema"],
            answers: [0, 2, 3, 4],
            rationale: "Signs of cardiac decompensation include a new cough, dyspnea, edema, palpitations, rales, and weight GAIN — not weight loss.",
            topic: "Antepartum Complications",
            source: "exam-2"
          },
          {
            stem: "A patient's 3-hour glucose tolerance test returns with the fasting and 2-hour values elevated; the 1-hour and 3-hour values are normal. How does the nurse interpret this?",
            options: ["Normal — at least three values must be elevated","The test must be repeated","She has gestational diabetes","This indicates type 1 diabetes"],
            answer: 2,
            rationale: "On the 3-hour glucose tolerance test, if any TWO of the four values are elevated, the patient is diagnosed with gestational diabetes.",
            topic: "Antepartum Complications",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "A patient with type 1 diabetes at 9 weeks' gestation reports two episodes of morning hypoglycemia this week on her usual insulin dose. What best explains this?",
            options: ["Early pregnancy hormones enhance her insulin response, so her needs have dropped","The placenta is already producing insulin for her","Her insulin requirement doubles in the first trimester","Nausea has made her insulin absorb more slowly"],
            answer: 0,
            rationale: "Early in pregnancy hormones enhance insulin production and response, so insulin needs DECREASE. From the late first trimester on, those hormones act as insulin antagonists and needs increase — they may double or quadruple by term.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A term newborn of a mother with poorly controlled diabetes develops grunting and retractions. Which explanation does the nurse give the parents?",
            options: ["The baby's lungs matured too early and are now stiff","Maternal glucose crossing the placenta damaged the alveoli","Surfactant was washed away during the rapid delivery","The baby's high insulin level blocked the enzymes that make surfactant"],
            answer: 3,
            rationale: "High fetal insulin inhibits surfactant-producing enzymes, delaying lung maturity — so even a term infant of a diabetic mother can develop respiratory distress syndrome.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "An Rh-negative patient at 15 weeks with a negative antibody screen is admitted after a motor vehicle accident. What does the nurse anticipate?",
            options: ["Waiting for the routine 28-week dose of RhoGAM","Giving RhoGAM now, in addition to the 28-week dose","Giving RhoGAM only if the fetus is confirmed to be Rh-positive","Repeating the antibody screen in four weeks instead of giving RhoGAM"],
            answer: 1,
            rationale: "RhoGAM is given any time fetal and maternal blood could mix — after trauma, a spontaneous or induced abortion, an ectopic, or an invasive procedure such as CVS or amniocentesis — in addition to the routine 28-week dose. A Kleihauer-Betke test measures how much fetal blood is in the maternal circulation to calculate the dose needed.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A patient at 26 weeks has a hemoglobin of 10.2 g/dL and reports fatigue. Which cause and treatment does the nurse most anticipate?",
            options: ["Folic acid deficiency — vitamin K","Sickle cell anemia — exchange transfusion","Iron-deficiency anemia — supplemental iron","Pernicious anemia — B12 injections"],
            answer: 2,
            rationale: "Iron-deficiency anemia is the most common anemia in pregnancy (diagnosed around Hgb <11 g/dL, since the expanded plasma volume dilutes the count) and is treated with supplemental iron.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A patient who took no prenatal vitamins and ate a folate-poor diet before conception is counseled about fetal risk. Which risk is greatest?",
            options: ["Fetal neural tube defects","Macrosomia","Gestational hypertension","Polyhydramnios"],
            answer: 0,
            rationale: "Folic acid deficiency raises the risk of fetal neural tube defects; all women of childbearing age should take 400 mcg daily before pregnancy, since the neural tube closes very early.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A patient reports she has been unusually thirsty, urinating constantly, always hungry, and has lost six pounds. The nurse recognizes these as:",
            options: ["expected changes of the second trimester","early signs of hyperemesis gravidarum","signs of a urinary tract infection","the classic signs of diabetes"],
            answer: 3,
            rationale: "Polyuria, polydipsia, polyphagia, and weight loss are the classic signs of diabetes, reflecting inadequate insulin production or use.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A patient who delivered two months ago reports worsening fatigue, a persistent cough, chest pain, and swollen ankles. Which condition does the nurse suspect?",
            options: ["Mitral valve prolapse","Peripartum cardiomyopathy","Eisenmenger syndrome","A late postpartum hemorrhage"],
            answer: 1,
            rationale: "Peripartum cardiomyopathy is left-ventricular dysfunction developing from the last month of pregnancy to about 5 months postpartum, with edema, cough, chest pain, and fatigue.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A patient at 10 weeks reports light vaginal bleeding and mild cramping. On examination her cervix is closed. How does the nurse expect this to be classified?",
            options: ["Inevitable (imminent) miscarriage","Complete miscarriage","Threatened miscarriage","Ectopic pregnancy"],
            answer: 2,
            rationale: "Threatened: the cervix is closed and the placenta is still attached, with some bleeding. Inevitable (imminent): the cervix is dilated and the placenta has separated.",
            topic: "Antepartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A type O mother delivers a type A infant. Which finding does the nurse watch for most closely?",
            options: ["Jaundice from hemolysis","Severe anemia with hydrops","Hypoglycemia","Polycythemia"],
            answer: 0,
            rationale: "In ABO incompatibility (mother type O, infant A/B/AB), maternal antibodies cause hemolysis and hyperbilirubinemia/jaundice. Severe anemia and hydrops are features of Rh incompatibility, not ABO.",
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
            options: ["Nothing — this exceeds the minimum acceptable output","Increase the magnesium infusion rate","Recognize this as an expected side effect of magnesium and continue","Notify the provider that the output is below the acceptable minimum"],
            answer: 3,
            rationale: "100 mL ÷ 4 hr = 25 mL/hr, below the minimum of 30 mL/hr. Magnesium is excreted by the kidneys, so falling urine output raises the risk of toxicity and must be reported.",
            topic: "Hypertensive Disorders",
            source: "exam-2"
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
            options: ["Rechecking the blood pressure in at least 4 hours","An immediate diagnosis of gestational hypertension","Starting magnesium sulfate now","Immediate induction of labor"],
            answer: 0,
            rationale: "Hypertension is not diagnosed on a single reading. It requires two readings of ≥140 systolic or ≥90 diastolic at least 4 hours apart.",
            topic: "Hypertensive Disorders",
            source: "exam-2"
          },
          {
            stem: "A patient with a history of preeclampsia in her last pregnancy is now 14 weeks pregnant. Which preventive medication does the nurse anticipate?",
            options: ["Magnesium sulfate infusion","IV labetalol","Low-dose aspirin 81 mg daily","Calcium gluconate"],
            answer: 2,
            rationale: "Low-dose aspirin, 81 mg, is standard for anyone at risk for preeclampsia, started between 12 and 28 weeks. Magnesium and labetalol treat active disease, and calcium gluconate is the magnesium antidote.",
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
            stem: "A patient whose blood pressure is still elevated three days after delivery is being discharged on an oral antihypertensive. Which medication does the nurse expect?",
            options: ["IV labetalol","Oral nifedipine","Magnesium sulfate","Calcium gluconate"],
            answer: 1,
            rationale: "Oral nifedipine is commonly used for blood pressure control in the postpartum period. Labetalol and hydralazine are the IV drugs for acute severe hypertension; magnesium prevents seizures and calcium gluconate is its antidote.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "A patient at 32 weeks has blood pressures of 148/92 and 150/90 taken 5 hours apart. Her urine protein is negative and she has no headache, visual changes, or epigastric pain. How does the nurse expect this to be classified?",
            options: ["Chronic hypertension","Severe preeclampsia","Preeclampsia without severe features","Gestational hypertension"],
            answer: 3,
            rationale: "Gestational hypertension is a BP of at least 140/90 arising after 20 weeks WITHOUT proteinuria. Adding proteinuria (or severe features) would make it preeclampsia; hypertension before 20 weeks would be chronic. If her BP is still elevated 6 weeks postpartum, it is reclassified as chronic hypertension.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "A student asks why perfusion to the kidneys and placenta falls in preeclampsia. The nurse explains that the disease decreases which vasodilator?",
            options: ["Prostacyclin","Prostaglandin E2","Oxytocin","Relaxin"],
            answer: 0,
            rationale: "Decreased prostacyclin (a vasodilator) allows widespread vasoconstriction, reducing renal and placental perfusion and causing fetal hypoxia.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "Which patient on the nurse's prenatal caseload is at HIGHEST risk for developing preeclampsia?",
            options: ["A 25-year-old in her third uncomplicated pregnancy","A 30-year-old with one prior term vaginal birth","A first-time mother with chronic hypertension carrying twins","A 22-year-old with a normal BMI and no medical history"],
            answer: 2,
            rationale: "Risk factors include a first pregnancy, chronic hypertension, chronic renal disease, diabetes, multiple gestation, age under 20 or over 40, and a family history. Several factors stacked together carry the greatest risk.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "A patient with preeclampsia delivered 8 hours ago and asks when her magnesium infusion can be stopped. What is the nurse's best response?",
            options: ["\"It usually stops as soon as the placenta delivers.\"","\"It is typically continued for at least 24 hours after birth.\"","\"It will run for about 6 more hours.\"","\"You will be on it for a full week.\""],
            answer: 1,
            rationale: "Magnesium is continued for at least 24 hours postpartum, because seizures can still occur in the first week after birth.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "A patient's chart shows blood pressures of 150/95, 148/98, and 152/94 documented at 8, 12, and 16 weeks' gestation. How does the nurse expect this to be classified?",
            options: ["Gestational hypertension","Preeclampsia without severe features","Eclampsia","Chronic hypertension"],
            answer: 3,
            rationale: "Chronic hypertension is a BP of at least 140/90 that predates pregnancy or appears before 20 weeks (or persists 6 weeks postpartum). Gestational hypertension arises AFTER 20 weeks.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "The nurse grades a preeclamptic patient's deep tendon reflexes as 4+. What does this finding tell the nurse?",
            options: ["Her CNS is irritable and her seizure risk is rising","This is a normal reflex response","She is developing magnesium toxicity","Her reflexes are diminished"],
            answer: 0,
            rationale: "4+ is hyperreflexic — the more irritated the CNS, the higher the seizure risk, so rising reflexes signal worsening preeclampsia. ABSENT reflexes are the sign of magnesium toxicity.",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is about to take a blood pressure on a patient being evaluated for preeclampsia. Which technique gives the most reliable reading?",
            options: ["Lay her flat and raise the arm above her head","Take it as soon as she walks into the room","Let her rest 5 minutes, sitting, with her arm at heart level","Use whichever cuff is closest at hand"],
            answer: 2,
            rationale: "Have the patient rest at least 5 minutes, sitting or semi-reclining, arm at heart level, with an appropriately sized cuff (width about 40% of the arm).",
            topic: "Hypertensive Disorders",
            source: "quiz-bank"
          },
          {
            stem: "A patient's office urine dipstick shows 1+ protein. Which test does the nurse anticipate to quantify how much protein she is actually losing?",
            options: ["A repeat random dipstick at the next visit","A 24-hour urine for protein and creatinine clearance","A serum potassium level","A urine culture and sensitivity"],
            answer: 1,
            rationale: "A 24-hour urine collection for protein and creatinine clearance is far more accurate than a random dipstick for quantifying proteinuria.",
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
            stem: "A client delivered vaginally 35 minutes ago and the placenta has still not separated. Which risk is the nurse's primary concern?",
            options: ["Hemorrhage and retained placenta","Uterine rupture","Precipitous labor","Cord prolapse"],
            answer: 0,
            rationale: "The third stage should last no longer than 30 minutes; beyond that raises the risk of hemorrhage and retained placenta.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A client's sterile vaginal exam is 8 cm / 90% / +1. The nurse identifies this as:",
            options: ["First stage, latent phase","First stage, active phase","First stage, transition phase","Second stage"],
            answer: 2,
            rationale: "8–10 cm is the transition phase of the first stage. Phase within the first stage is judged by dilation (latent 0–3, active 4–7, transition 8–10); the second stage does not begin until 10 cm.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A nulliparous client in the second stage of labor has a presenting part at +4 station. What is the nurse's most appropriate action?",
            options: ["Reassess her cervix in one hour","Prepare for imminent birth","Notify the provider that the head is not yet engaged","Coach her to stop pushing until the provider is at the bedside"],
            answer: 1,
            rationale: "At +4 the presenting part is 4 cm below the ischial spines and visible at the perineum, so birth is imminent. Engagement is 0 station at the ischial spines, and +5 is born.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "The nurse is documenting contraction frequency. Which interval does the nurse measure?",
            options: ["The start of one contraction to the end of that same contraction","The end of one contraction to the start of the next","The start of one contraction to the start of the next","The peak of one contraction to the peak of the next"],
            answer: 2,
            rationale: "Frequency = start of one contraction to the start of the next, recorded in minutes. Start-to-end of the same contraction is the duration, recorded in seconds.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A fetus is documented in the ROA position. What does the nurse know about how this baby will be born?",
            options: ["Face-up, which typically causes back labor","In a breech presentation","With forceps assistance","Face-down, which is anatomically easier to deliver"],
            answer: 3,
            rationale: "Occiput anterior (such as ROA) means the baby is born face-down, which is anatomically easier to deliver. A posterior position (face-up) is harder and causes back labor.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A multigravida who is 9 cm dilated reports a strong urge to push. What is the nurse's best action?",
            options: ["Encourage her to push with each contraction","Apply fundal pressure to speed delivery","Position her for immediate delivery","Coach her to breathe through the contractions until she is fully dilated"],
            answer: 3,
            rationale: "Never push before 10 cm — pushing on an incomplete cervix can tear it or cause it to swell. Coach breathing until fully dilated.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "The nurse documents that the fetal head is engaged. The presenting part has reached:",
            options: ["The ischial spines","The ischial tuberosities","The pelvic inlet","The perineum"],
            answer: 0,
            rationale: "Engagement occurs when the presenting part reaches 0 station at the ischial spines — the narrowest part of the pelvis.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "A client presents to triage after four hours of contractions. Which finding best confirms she is in TRUE labor?",
            options: ["Contractions she reports as coming every five minutes","Cervical change from 2 cm to 4 cm over two hours","Contractions she rates as severe","Bloody show on the perineal pad"],
            answer: 1,
            rationale: "Progressive cervical dilation and effacement is the hallmark of true labor. Reported frequency, reported intensity, and bloody show can all occur with false labor, so only the documented cervical change confirms it.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          },
          {
            stem: "During the fourth stage, the nurse palpates a soft, boggy uterus. What is the priority action?",
            options: ["Assess for a full bladder","Increase the oxytocin infusion","Massage the fundus","Notify the provider"],
            answer: 2,
            rationale: "A soft, boggy uterus is uterine atony — the leading cause of postpartum hemorrhage. Massage the fundus first to firm it. A full bladder displaces the fundus upward and to the right but does not itself make it boggy.",
            topic: "Intrapartum Care I",
            source: "exam-1"
          }
        ],
        extraPractice: [
          {
            stem: "A laboring client is terrified and exhausted, and her labor has slowed. The nurse recognizes that this involves which of the Five Ps?",
            options: ["Powers","Psyche","Passenger","Passage"],
            answer: 1,
            rationale: "Psyche is the patient's psychological state — fear, anxiety, fatigue, culture, and support system — and it can genuinely slow labor. Powers are the contractions and pushing efforts.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "A nurse documents that a client is \"50% effaced.\" What is being described?",
            options: ["Thinning and shortening of the cervix","Opening of the cervix, measured in centimeters","Descent of the presenting part into the pelvis","The relationship of the presenting part to the ischial spines"],
            answer: 0,
            rationale: "Effacement is the thinning and shortening of the cervix, measured 0-100%. Dilation is the opening of the cervix (0-10 cm) and station is the relationship of the presenting part to the ischial spines.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "Which description of the ANTERIOR fontanelle is accurate?",
            options: ["Triangle-shaped, closing at 6-8 weeks","Diamond-shaped, closing at birth","The smaller of the two fontanelles","Diamond-shaped and the larger of the two, closing by about 18 months"],
            answer: 3,
            rationale: "The anterior fontanelle is diamond-shaped and the larger of the two, closing by about 18 months. The posterior fontanelle is triangle-shaped and closes around 6-8 weeks.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "Which finding describes a FRANK breech?",
            options: ["Hips and knees both flexed, buttocks presenting","One foot presenting first","Hips flexed and knees extended, buttocks presenting","A shoulder presenting first"],
            answer: 2,
            rationale: "Frank breech = hips flexed, knees extended, buttocks presenting. A complete breech has both hips and knees flexed; a footling has a foot presenting; a shoulder presentation is a transverse lie.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "In the three-letter fetal position notation such as ROA, what does the FIRST letter indicate?",
            options: ["Which side of the mother's pelvis the presenting part is nearest","Which fetal landmark is presenting","Whether the landmark faces the mother's front or back","The station of the presenting part"],
            answer: 0,
            rationale: "The first letter is the side of the MOTHER's pelvis (R or L). The second is the fetal landmark (O = occiput, M = mentum, S = sacrum, A = acromion) and the third is the direction (anterior, posterior, or transverse).",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "A client at 10 cm who declined an epidural suddenly feels an overwhelming urge to bear down. The nurse recognizes this as:",
            options: ["the Valsalva maneuver","the Ferguson reflex","the ferning reflex","the let-down reflex"],
            answer: 1,
            rationale: "The Ferguson reflex is the involuntary urge to bear down, triggered by endogenous oxytocin release when vaginal stretch receptors are activated. Excess Valsalva (prolonged closed-glottis pushing) reduces blood flow to mother and baby.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "A client at 10 cm is bearing down with each contraction. The nurse documents that she is using her:",
            options: ["primary powers","involuntary powers","Ferguson reflex","secondary powers"],
            answer: 3,
            rationale: "Secondary powers are the mother's voluntary pushing efforts. Primary powers are the involuntary uterine contractions that dilate and efface the cervix.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "A client who is 5 cm dilated asks for an epidural. The nurse documents that she is in which phase of labor?",
            options: ["Latent phase","Transition phase","Active phase","Second stage"],
            answer: 2,
            rationale: "The active phase is 4-7 cm and is typically when patients request an epidural. The latent phase (0-3 cm) is usually the longest and transition (8-10 cm) is the most intense.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "Parents ask why their newborn's head looks slightly cone-shaped a few hours after a vaginal birth. What is the nurse's best response?",
            options: ["\"The skull bones overlapped along the sutures to fit through the pelvis, and it will round out in about a day.\"","\"This is a birth injury and will need imaging.\"","\"It can be a sign of extra fluid around the brain.\"","\"His head will keep this shape as he grows.\""],
            answer: 0,
            rationale: "Molding occurs because the fetal skull bones can overlap along the sutures and fontanelles to fit through the pelvis; the cone shape resolves within about 24 hours.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
          },
          {
            stem: "Which are cephalic (head-first) presentations? Select all that apply.",
            options: ["Vertex","Military","Brow","Face","Frank breech","Complete breech"],
            answers: [0, 1, 2, 3],
            rationale: "Vertex, military, brow, and face are all cephalic (head-first) presentations, differing only by how flexed the fetal head is. Frank and complete breech are both breech (bottom-first) presentations.",
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
            options: ["Increase the IV fluid rate","Reposition the client to her side","Apply oxygen by non-rebreather mask","Perform a sterile vaginal exam"],
            answer: 1,
            rationale: "These are LATE decelerations (uteroplacental insufficiency — a perfusion problem). Changing her position is the first, least invasive step (the C in UNCOIL); oxygen and IV fluids follow.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A tracing shows abrupt, sharp decelerations that vary in their timing relative to the contractions. The most likely cause is:",
            options: ["Umbilical cord compression","Head compression","Uteroplacental insufficiency","A fetal sleep cycle"],
            answer: 0,
            rationale: "Abrupt, variably-timed decelerations are VARIABLE decelerations, caused by umbilical cord compression (think nuchal cord). Reposition the mother first.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "Two tracings have the same baseline and no decelerations. Which single feature tells the nurse the most about how well each fetus is oxygenated?",
            options: ["The baseline rate","Variability","The presence of accelerations","Contraction frequency"],
            answer: 1,
            rationale: "Variability — the fluctuation around the baseline — is the single best indicator of fetal oxygenation, and moderate (6–25 bpm) is what is desired. Absent variability is the ominous finding.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A laboring client is Group B Strep positive and reports a penicillin allergy. The nurse anticipates which antibiotic for prophylaxis?",
            options: ["Ampicillin","Gentamicin","Azithromycin","Clindamycin"],
            answer: 3,
            rationale: "GBS prophylaxis is penicillin (the drug of choice); if she is penicillin-allergic, clindamycin (900 mg IV every 4 hours until delivery) is used.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A fetal baseline is 170 bpm for 12 minutes. What is the nurse's FIRST action?",
            options: ["Apply oxygen by non-rebreather mask","Give an IV fluid bolus","Check the maternal temperature","Reposition the client to her left side"],
            answer: 2,
            rationale: "For fetal tachycardia (>160 for ≥10 min) the first action is to check the maternal temperature — an elevated maternal temp is often reflected in a tachycardic baby.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A laboring patient is thrashing in pain and the external toco is not registering any contractions. What should the nurse do FIRST?",
            options: ["Medicate her for pain","Palpate the fundus","Readjust the toco belt and continue monitoring","Increase the oxytocin"],
            answer: 1,
            rationale: "If she is thrashing and the toco is not registering, palpate the fundus FIRST to rule out a placental abruption or uterine rupture before readjusting the monitor or medicating.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A fetal heart rate deceleration lasts 3 minutes. The nurse is most concerned about:",
            options: ["Head compression from fetal descent","A new fetal baseline","A prolapsed umbilical cord or placental abruption","A normal fetal sleep cycle"],
            answer: 2,
            rationale: "A prolonged deceleration lasts at least 2 but less than 10 minutes; at 10 minutes it becomes a new baseline. Think prolapsed cord or abruption and determine the cause. (Early decelerations are the benign head-compression pattern.)",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A fetus at 34 weeks has a rise of 15 bpm above baseline lasting 15 seconds. The nurse documents this as:",
            options: ["An insufficient rise to qualify as an acceleration at this gestational age","Marked variability","A reassuring acceleration","A prolonged deceleration"],
            answer: 2,
            rationale: "At ≥32 weeks an acceleration is ≥15 bpm above baseline for ≥15 seconds — a reassuring sign of fetal well-being. Under 32 weeks the criteria drop to 10 bpm for 10 seconds.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A tracing shows decelerations that mirror the contractions, with the nadir at the peak of the contraction. What is the nurse's FIRST action?",
            options: ["Turn off the oxytocin","Give a rapid IV fluid bolus","Prepare for a cesarean","Perform a sterile vaginal exam"],
            answer: 3,
            rationale: "Mirroring decels are EARLY decelerations (head compression) — benign. Do a vaginal exam; the head may be low and birth approaching.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "A patient with tachysystole is ordered terbutaline. Before giving it, the nurse checks the maternal heart rate and finds it is 124 bpm. What should the nurse do?",
            options: ["Hold the terbutaline","Give the terbutaline as ordered","Give half the ordered dose","Give it after the next contraction ends"],
            answer: 0,
            rationale: "Terbutaline (a tocolytic) raises the maternal heart rate, so it is held if the maternal heart rate is 120 bpm or higher.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "The nurse notes a sinusoidal fetal heart rate pattern. What does this finding suggest?",
            options: ["A normal fetal sleep cycle","Maternal fever","Loss of contact between the monitor and the fetal heart","Possible fetal acidosis"],
            answer: 3,
            rationale: "A sinusoidal pattern suggests the fetus may be acidotic and needs to be delivered — notify the provider immediately.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "The fetus is in the ROA position. Where should the nurse place the fetal heart rate transducer?",
            options: ["Right upper quadrant","Right lower quadrant","Left lower quadrant","Over the umbilicus"],
            answer: 1,
            rationale: "The FHR is heard best over the fetal shoulders/back. ROA = occiput anterior on the mother's right with the head down — so the right lower quadrant.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "In a 10-minute window the nurse counts 7 contractions. The nurse recognizes this as:",
            options: ["Normal active labor","An elevated resting tone","Uterine tachysystole","Inadequate uterine activity"],
            answer: 2,
            rationale: "Tachysystole is 6 or more contractions in a 10-minute period — the uterus does not get enough time to rest. Resting tone is a separate measurement taken between contractions.",
            topic: "Intrapartum Care II",
            source: "exam-1"
          },
          {
            stem: "An external tocotransducer is in place and the provider asks how strong the contractions are. What must the nurse do to answer?",
            options: ["Palpate the abdomen","Read the intensity off the toco monitor","Wait for the provider to assess her","Document that intensity cannot be assessed in labor"],
            answer: 0,
            rationale: "The external toco gives frequency and duration only — the nurse must palpate the abdomen to judge intensity. Only an internal intrauterine pressure catheter measures it numerically.",
            topic: "Intrapartum Care II",
            source: "exam-2"
          }
        ],
        extraPractice: [
          {
            stem: "A nurse is applying external monitors to a laboring client. Where does the tocotransducer belong?",
            options: ["Over the fetal shoulders and back","On the fundus of the uterus","Over the maternal bladder","On the mother's flank"],
            answer: 1,
            rationale: "The toco (contraction monitor) goes on the fundus of the uterus, where contractions are strongest. The ultrasound (fetal heart rate) transducer, by contrast, goes over the fetal shoulders and back.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "The provider wants a fetal scalp electrode placed. Which condition must be met first?",
            options: ["An epidural is in place","The cervix is fully dilated","The GBS screen is negative","The membranes are ruptured"],
            answer: 3,
            rationale: "The fetal scalp electrode is an internal monitor, so it requires ruptured membranes. It is placed on a firm part of the skull, avoiding the sutures and fontanelles.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is determining a fetal heart rate baseline. Which combination is correct?",
            options: ["110-160 bpm, observed for at least 10 minutes","100-140 bpm, observed for 2 minutes","120-180 bpm, observed for 5 minutes","140-180 bpm, observed for 30 minutes"],
            answer: 0,
            rationale: "The normal fetal heart rate baseline is 110-160 bpm, determined by observing the rate for at least 10 minutes between contractions.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A fetal heart rate change that occurs WITH a contraction is documented as:",
            options: ["Episodic","Sinusoidal","Periodic","Baseline drift"],
            answer: 2,
            rationale: "Periodic changes occur with contractions; episodic changes are NOT associated with a contraction.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A laboring client received IV opioid pain medication an hour ago. Her tracing now shows a normal baseline with minimal variability and no decelerations. What is the nurse's best interpretation?",
            options: ["The fetus is acidotic","This is an expected effect of the medication","The monitor has lost contact with the fetal heart","The fetus is having a prolonged deceleration"],
            answer: 1,
            rationale: "Minimal variability (<5 bpm) is not always distress — a fetal sleep cycle, opioid pain medication, or something relaxing such as magnesium sulfate can all cause it. Moderate variability (6-25 bpm) is what is desired.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "When a laboring patient's membranes rupture, the COAT acronym reminds the nurse to document:",
            options: ["Cervix, Onset, Amount, Temperature","Contractions, Oxygen, Activity, Tone","Cord, Output, Apgar, Tracing","Color, Odor, Amount, Time"],
            answer: 3,
            rationale: "COAT = Color, Odor, Amount, and Time — what to document when the membranes rupture.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "After rupture of membranes the amniotic fluid is green-tinged. The nurse recognizes this as:",
            options: ["Meconium-stained fluid","Normal amniotic fluid","A definite sign of infection","Bloody show"],
            answer: 0,
            rationale: "Green-tinged fluid is meconium-stained and can signal fetal compromise. Normal amniotic fluid is clear or straw-colored, sometimes with white flecks of vernix; a light yellow tint can be normal.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A client is fully dilated and beginning to push. Which coaching does the nurse provide?",
            options: ["Hold your breath and push as long as you can with each contraction","Keep pushing between the contractions as well","Push in shorter efforts of about 6 to 8 seconds while breathing out","Push whenever you feel the urge, even before you are fully dilated"],
            answer: 2,
            rationale: "Open-glottis pushing in shorter efforts of about 6-8 seconds is preferred. Prolonged closed-glottis (Valsalva) pushing reduces blood flow to the mother and baby.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
          },
          {
            stem: "A client reports a gush of fluid at home but is not sure whether it was urine. Which bedside test can the NURSE perform to confirm ruptured membranes?",
            options: ["A fern test read under the microscope","Nitrazine paper that turns deep blue","A urine dipstick for protein","A wet mount for motile organisms"],
            answer: 1,
            rationale: "Nitrazine paper is non-invasive and done by the nurse at the bedside: amniotic fluid is alkaline, so it turns the paper deep blue (a positive result). Paper that stays yellow is probably not amniotic fluid. The fern test is performed by the provider and read under a microscope.",
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
        mustKnow: [
          {
            stem: "A client at 9-10 cm with a strong urge to push asks for IV pain medication. What is the nurse's best response?",
            options: ["Give the full ordered dose right away","Give half the ordered dose","Give it and alert the nursery that the newborn may need support","Withhold it and offer non-pharmacologic comfort measures"],
            answer: 3,
            rationale: "Systemic analgesia crosses the placenta; given close to delivery the medication can cause neonatal respiratory depression. With imminent birth the nurse withholds it and uses non-pharmacologic comfort measures rather than planning around a depressed newborn.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "The nurse reviews the Bishop scores of four clients being considered for induction. Which score indicates the highest likelihood of a successful vaginal birth?",
            options: ["A score of 10","A score of 7","A score of 5","A score of 2"],
            answer: 0,
            rationale: "The higher the Bishop score, the more favorable the cervix — a score of 8 or higher predicts odds similar to spontaneous labor, so 10 is the most favorable. A low score means a ripening agent is needed before oxytocin.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "During a cesarean birth, before delivery, the client's blood pressure drops and the fetal heart rate falls. What is the nurse's first action?",
            options: ["Lay her flat to improve venous return","Ensure a wedge tilts her to the left","Raise the head of the bed","Administer the ordered ephedrine"],
            answer: 1,
            rationale: "Supine positioning lets the uterus compress the vena cava, dropping the blood pressure and fetal perfusion. Tilting her to the left with a wedge under the right hip restores venous return and comes before medicating. (The wedge is removed after the baby is born.)",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A client is scheduled for an oxytocin induction. Which items must the nurse confirm are complete before the induction begins? Select all that apply.",
            options: ["An epidural already placed","A reactive non-stress test","A sterile vaginal exam with a Bishop score","Signed informed consent","Baseline maternal vital signs"],
            answers: [1,2,3,4],
            rationale: "Before an induction you need a reactive NST, a sterile vaginal exam with a Bishop score, signed consent, and baseline vital signs. An epidural is not required, and a NON-reactive NST would be a reason to hold.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "During an amniotomy the client's membranes rupture and clear fluid escapes. What is the nurse's priority action?",
            options: ["Document the time of rupture","Check the maternal temperature","Assess the fetal heart rate","Palpate the uterus for contractions"],
            answer: 2,
            rationale: "Amniotic fluid cushions the cord; once it is lost the cord can be compressed, so assessing the FHR is the priority. Documenting the time, checking the temperature, and palpating contractions all follow.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "After an epidural, a client's systolic blood pressure falls to 92 mm Hg and a late deceleration appears. Which actions should the nurse take? Select all that apply.",
            options: ["Turn her to a side-lying position","Give an IV fluid bolus of lactated Ringer's","Slow the IV rate to avoid fluid overload","Administer prescribed ephedrine","Apply oxygen by non-rebreather mask"],
            answers: [0,1,3,4],
            rationale: "Post-anesthesia hypotension with a late decel is treated by turning her to the side, giving an IV fluid bolus, ephedrine (5-10 mg IV), and oxygen. Slowing the IV would worsen the hypotension — the bolus is what restores her pressure.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A client is being prepared for an unscheduled cesarean birth. Which measures does the nurse anticipate to reduce her risk of aspiration? Select all that apply.",
            options: ["Placing a wedge to tilt her to the left","Famotidine (Pepcid) IV","Withholding oral intake for 8 hours before the incision","Metoclopramide (Reglan) IV","Bicitra by mouth within 30 minutes of incision"],
            answers: [1,3,4],
            rationale: "A pregnant client is treated as a 'full stomach.' Famotidine and metoclopramide plus a Bicitra drink neutralize and reduce stomach acid to lower aspiration risk. The left tilt prevents supine hypotension, not aspiration, and an unscheduled cesarean does not allow an 8-hour fast.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "During an oxytocin induction the nurse counts 7 contractions in a 10-minute window with a rising resting tone, and the fetus develops late decelerations. What is the priority action?",
            options: ["Turn off the oxytocin infusion","Decrease the oxytocin by half and reassess","Administer the ordered terbutaline","Apply oxygen and continue the infusion"],
            answer: 0,
            rationale: "Six or more contractions in 10 minutes is tachysystole; with late decels the baby is not tolerating it. Turning the oxytocin OFF is the priority — it is the cause. Terbutaline and oxygen may follow, but not while the cause is still infusing.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A multipara in active labor stops making cervical change after her epidural, and her contractions space out. The provider orders oxytocin. The nurse documents this intervention as:",
            options: ["Labor induction","Cervical ripening","Labor augmentation","Amnioinfusion"],
            answer: 2,
            rationale: "She was already in active labor, so stimulating her stalled contractions is augmentation. Induction is starting labor in someone who is not laboring.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "Immediately after a forceps-assisted birth, the client's fundus is firm and midline but she has a steady trickle of bright-red blood. What does the nurse suspect first?",
            options: ["A vaginal or cervical laceration","Uterine atony","Retained placental fragments","A full bladder"],
            answer: 0,
            rationale: "Bright-red bleeding with a firm, well-contracted fundus points to a laceration — a known risk of instrument deliveries — rather than atony, which causes a boggy fundus.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A client received misoprostol (Cytotec) for cervical ripening two hours ago. The provider now orders oxytocin. What is the nurse's best action?",
            options: ["Begin the oxytocin now at 2 milliunits/min","Begin the oxytocin after another 30 minutes","Begin the oxytocin once she is contracting every 5 minutes","Wait until at least 4 hours have passed since the misoprostol dose"],
            answer: 3,
            rationale: "Oxytocin should not be started within 4 hours of a misoprostol dose — together they can overstimulate the uterus and cause tachysystole.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A client is receiving an amnioinfusion for repetitive variable decelerations. The nurse notes the peri-pad has stayed dry and the uterine resting tone is climbing. What should the nurse do?",
            options: ["Continue and document a normal finding","Increase the infusion rate","Stop the amnioinfusion","Place the client in high Fowler's"],
            answer: 2,
            rationale: "Fluid going in must come back out. A dry pad with a rising resting tone means fluid is being trapped — stop the infusion immediately to avoid over-distending or rupturing the uterus.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A client desires a vaginal birth after cesarean (VBAC). Which finding in her records is the priority concern the nurse reports to the provider?",
            options: ["A previous low-transverse uterine incision","A previous classical (vertical) uterine incision","One prior cesarean birth","A Pfannenstiel skin incision"],
            answer: 1,
            rationale: "A classical (vertical) uterine incision carries a high risk of uterine rupture in labor and contraindicates a VBAC — future births should be cesarean. A low-transverse incision is the one that supports a VBAC, and the skin incision does not determine eligibility.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A client who has been induced with oxytocin for two days becomes confused and lethargic and begins vomiting. What is the nurse's priority action?",
            options: ["Increase the IV maintenance fluids","Reposition her to the left side","Stop the oxytocin infusion","Recheck her cervical dilation"],
            answer: 2,
            rationale: "Prolonged high-dose oxytocin has an antidiuretic-like effect and can cause water intoxication (acute hyponatremia) — confusion, lethargy, and vomiting. Stop the oxytocin first, then give normal saline and furosemide as ordered; adding more maintenance fluid would worsen it.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "A client who received a spinal for a cesarean reports a headache that is worse when she sits up and improves when she lies flat. The nurse recognizes this as:",
            options: ["An intravascular injection of local anesthetic","A post-dural-puncture headache","Hypotension from the spinal block","A normal postoperative finding"],
            answer: 1,
            rationale: "A positional headache after a spinal or epidural suggests a CSF leak from the puncture (a 'wet tap'). It is treated with rest, fluids, and analgesia; if it persists, a blood patch seals the leak. An intravascular injection presents immediately with ringing ears, a metallic taste, and dyspnea.",
            topic: "Artificial Management of Labor",
            source: "exam-1"
          },
          {
            stem: "The provider strips (sweeps) a client's membranes at her 39-week visit. How does the nurse explain the way this promotes labor?",
            options: ["It releases oxytocin from the posterior pituitary","It ruptures the amniotic sac","It releases prostaglandins","It softens the cervix with pressure from a balloon"],
            answer: 2,
            rationale: "Separating the amniotic membrane from the lower uterine segment releases prostaglandins (not oxytocin), which stimulate contractions. Only an OB, nurse midwife, or NP performs it; it is often uncomfortable and may cause a little vaginal bleeding afterward.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A newborn was delivered with vacuum assistance. Which finding does the nurse expect on assessment?",
            options: ["Transient facial nerve paralysis","A fractured clavicle","Bulging fontanelles","Reddened swelling on the scalp"],
            answer: 3,
            rationale: "A vacuum cup is placed on the fetal occiput, so the reddened, swollen area of the scalp marks where it was applied. That bruising raises the bilirubin, so jaundice is a risk to monitor. Facial nerve palsy is a forceps injury; the baby must already be low before a vacuum is used.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client needs an emergent cesarean birth and her platelet count is 42,000. Which type of anesthesia does the nurse anticipate?",
            options: ["An epidural","A spinal","A pudendal block","General anesthesia"],
            answer: 3,
            rationale: "General anesthesia is reserved for emergent deliveries, a very low platelet count (a spinal or epidural puncture would raise the bleeding and hematoma risk), and cases where a spinal cannot be placed, such as scoliosis rods. Its biggest risks are aspiration and postpartum hemorrhage, so regional anesthesia is preferred whenever possible.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          }
        ],
        extraPractice: [
          {
            stem: "A Foley (balloon) catheter is placed against the cervix for mechanical ripening. How does this method work?",
            options: ["It infuses oxytocin directly into the cervical canal","It presses on the cervix the way the fetal head would","It ruptures the membranes to trigger labor","It delivers a measured dose of misoprostol over 12 hours"],
            answer: 1,
            rationale: "A Foley bulb puts pressure on the cervix just as the fetal head would, releasing prostaglandins to soften the cervix and cause cramping. It can shorten labor, lower the oxytocin requirement, and be used along with oxytocin.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client has a dinoprostone (Cervidil) insert placed for cervical ripening. Which instruction does the nurse give?",
            options: ["\"Take the insert out yourself before each meal.\"","\"It will stay in place for the next three days.\"","\"Walk the halls as much as you can to help it dissolve.\"","\"Stay in bed, and pat dry after you use the bathroom.\""],
            answer: 3,
            rationale: "Cervidil is a 10 mg vaginal insert left in place about 12 hours; the client stays in bed so it stays seated in the posterior fornix, and pats dry after toileting. It is removed by pulling its string, which stops further absorption.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "The nurse explains why oxytocin is always given on a pump rather than by gravity. What would a bolus most likely produce?",
            options: ["An immediate rise in maternal blood pressure","Reversal of cervical dilation","A sustained contraction with fetal bradycardia","Maternal hyponatremia within minutes"],
            answer: 2,
            rationale: "A bolus causes a constant, hard contraction: the uterus clamps down and the fetus is not perfused, most likely producing a prolonged deceleration and fetal bradycardia. This is why oxytocin is titrated on a pump with a volume control. (Water intoxication takes prolonged high-dose infusion, not a single bolus.)",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "The provider plans a midline episiotomy. How does the nurse describe its direction compared with a mediolateral episiotomy?",
            options: ["Midline is cut straight down; mediolateral angles off to the side","Midline angles to the side; mediolateral is straight down","Both are cut straight down, differing only in depth","Midline is horizontal; mediolateral is vertical"],
            answer: 0,
            rationale: "A midline episiotomy is cut straight down toward the anus; a mediolateral episiotomy is angled off to the side. Either type can extend and is graded first through fourth degree, like a spontaneous laceration.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "For which client is a forceps-assisted birth an appropriate plan?",
            options: ["A client who is tired of pushing after 30 minutes","A client with significant cardiac disease","A client whose fetal head is still floating at a high station","A client having a routine, uncomplicated second stage"],
            answer: 1,
            rationale: "Forceps require a real indication — maternal cardiac disease (to reduce pushing effort), pulmonary compromise, intrapartum infection, a prolonged second stage, or a non-reassuring FHR. The head must be engaged and low, and the client must still push actively; forceps only guide the head.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client in the first stage of labor describes a slow, deep, dull, aching discomfort. The nurse documents which type of labor pain?",
            options: ["Somatic","Referred","Phantom","Visceral"],
            answer: 3,
            rationale: "Visceral pain is the slow, deep, dull, aching discomfort typical of the first stage. Somatic pain is the sharp, localized burning or tearing felt in transition and pushing; referred pain radiates to the back.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client asks whether the IV pain medication she is about to receive will reach her baby. What is the nurse's best response?",
            options: ["\"The placenta filters these medications out before they reach the baby.\"","\"The goal is to take away all sensation, so you will not feel anything.\"","\"It does cross the placenta, and your baby clears it slowly.\"","\"It is safest if we give it right at the moment of birth.\""],
            answer: 2,
            rationale: "All systemic analgesics cross the placenta, and the fetal liver and kidneys metabolize them poorly — so the goal is maximum relief with minimum risk, and the drug is not given right before birth because of newborn respiratory depression.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client scheduled for a cesarean asks how a spinal differs from the epidural her sister had. What is the nurse's best response?",
            options: ["The epidural leaves a catheter in place and can take up to 30 minutes; a spinal works immediately with no tube left in","The epidural works immediately, while a spinal can take up to 30 minutes","Both leave a catheter in place for continuous dosing","Neither one can cause a drop in blood pressure"],
            answer: 0,
            rationale: "An epidural is placed at L3-L4, leaves a catheter for titratable dosing, and can take up to 30 minutes for full effect. A spinal has immediate onset, uses a smaller drug volume, and the needle is removed with no tube remaining — often chosen for scheduled surgical cases. Both can cause maternal hypotension.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client receives a pudendal block before her episiotomy repair. Which effect should the nurse anticipate?",
            options: ["Profound maternal hypotension","A decreased urge to bear down","Loss of consciousness","Rapid cervical dilation"],
            answer: 1,
            rationale: "A pudendal block is useful in the second stage and for repairing an episiotomy, with less risk of maternal hypotension than a regional block — but it decreases the urge to bear down, so the client may need to push longer.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "Which are potential fetal or newborn risks of a forceps-assisted birth? Select all that apply.",
            options: ["Caput or cephalohematoma","Facial bruising and ecchymosis","Transient facial paralysis or brachial plexus injury","Elevated bilirubin afterward","Immediate cervical ripening"],
            answers: [0,1,2,3],
            rationale: "Forceps can cause bruising/ecchymosis, edema along the sides of the face, caput or cephalohematoma, transient facial paralysis or brachial plexus injury, cerebral hemorrhage or a fractured clavicle, and elevated bilirubin from the bruising. Cervical ripening is not a forceps effect.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          }
        ],
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
        mustKnow: [
          {
            stem: "A client with preterm premature rupture of membranes at 30 weeks receives the first dose of betamethasone. Which statement best reflects the nurse's understanding of this order?",
            options: ["The medication will stop her contractions","The medication is repeated every 6 hours until she delivers","Delivery should be avoided for at least 48 hours if possible","The medication is only indicated after 34 weeks"],
            answer: 2,
            rationale: "Betamethasone triggers surfactant release to accelerate fetal lung maturity. It is given under about 34 weeks, and the goal is to avoid delivery within 48 hours of the first dose so it has time to work.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "During a vaginal exam the nurse feels a pulsating umbilical cord ahead of the presenting part. What is the nurse's FIRST action?",
            options: ["Place the client in Trendelenburg position","Apply oxygen by face mask","Notify the provider and prepare for a cesarean","Lift the presenting part off the cord with the gloved hand"],
            answer: 3,
            rationale: "With a prolapsed cord the priority is to immediately relieve the compression by lifting the presenting part off the cord with the gloved hand. Trendelenburg, oxygen, notifying the provider, and preparing for cesarean all follow — and the hand stays in place until delivery.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client at 32 weeks arrives with bright-red, painless vaginal bleeding. Which action is contraindicated?",
            options: ["Applying an external fetal monitor","Performing a sterile vaginal exam","Obtaining a transabdominal ultrasound","Establishing large-bore IV access"],
            answer: 1,
            rationale: "Painless, bright-red bleeding suggests a placenta previa, and a vaginal exam could puncture the placenta and cause severe hemorrhage. Confirm the placenta's location by ultrasound instead; external monitoring and IV access are appropriate.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client's labor has slowed to fewer than 2 contractions in 10 minutes with little cervical change. Which assessment finding best explains this pattern?",
            options: ["The client is 34 years old","The client is at 39 weeks' gestation","The amniotic fluid index is 12 cm","The fetus is in a transverse lie"],
            answer: 3,
            rationale: "A dysfunctional (hypotonic) labor pattern is linked to an abnormal fetal presentation — a transverse lie keeps the presenting part from pressing on the cervix. Maternal age itself is not associated, and the gestational age and AFI listed are both normal.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client is now at 42 3/7 weeks' gestation. Which fetal risk does the nurse most anticipate?",
            options: ["Decreased placental perfusion","Polyhydramnios","Surfactant deficiency","Erythroblastosis fetalis"],
            answer: 0,
            rationale: "Past 42 weeks the aging placenta perfuses the fetus less well, raising the risk of fetal compromise, macrosomia or SGA, and meconium-stained fluid — with OLIGOhydramnios, not polyhydramnios. Surfactant deficiency is a preterm problem.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "After the fetal head delivers, the provider reports a shoulder dystocia. Which action does the nurse anticipate first?",
            options: ["Apply fundal pressure","Assist the client to flex her hips and bring both knees toward her chest","Prepare for an immediate cesarean birth","Prepare for a forceps-assisted delivery"],
            answer: 1,
            rationale: "Flexing the hips and bringing the knees toward the chest is the McRoberts maneuver, which (with suprapubic pressure) frees the trapped shoulder. Fundal pressure is contraindicated — it only jams the shoulder harder against the pubic bone.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "Forty minutes after birth the placenta has not delivered, gentle cord traction has been unsuccessful, and bleeding is increasing. What does the nurse anticipate next?",
            options: ["Continued fundal massage for another 30 minutes","Manual removal of the placenta by the provider","Ambulating the client to encourage separation","Administering an additional uterotonic to expel the placenta"],
            answer: 1,
            rationale: "The placenta should deliver within 30 minutes; beyond that, a retained placenta raises the risk of hemorrhage and infection and may require manual removal (and possibly a transfusion). Abnormal adherence — accreta, increta, percreta — should also be considered.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client is admitted for delivery of a fetus that died in utero. Which nursing action best supports her and her family?",
            options: ["Move her immediately to a unit far from the maternity floor","Ask her what she would like — such as holding the baby, mementos, or where to recover","Reassure her that she can have another baby","Limit her time with the infant to protect her from grief"],
            answer: 1,
            rationale: "Individualized, patient-led care is best: ask what she wants (holding the baby, pictures, a memory box, where to recover). Do not assume or minimize the loss. In Kentucky, KODA is notified of any death.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client is discharged home after a cerclage for cervical insufficiency. Which statement shows she understood the discharge teaching?",
            options: ["\"I'll be on strict bed rest until delivery.\"","\"I'll need a cesarean because of the stitch.\"","\"I'll call my provider if I have uterine cramping or low back pain.\"","\"I'll take antibiotics for the rest of my pregnancy.\""],
            answer: 2,
            rationale: "After a cerclage she should report cramping, low back pain, pelvic pressure, discharge changes, or bleeding. Strict bed rest, a mandatory cesarean, and lifelong antibiotics are all incorrect.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client's membranes ruptured 20 hours ago. Which assessment is the nurse's priority?",
            options: ["Maternal temperature","Maternal blood pressure","Deep tendon reflexes","Urine protein"],
            answer: 0,
            rationale: "Once membranes have been ruptured longer than 18 hours the protective barrier is gone and infection is the priority concern — hence frequent temperature checks and often prophylactic antibiotics.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client whose labor is being augmented with oxytocin develops tachysystole. Which action is contraindicated?",
            options: ["Repositioning the client to her side","Assessing the fetal heart rate","Increasing the oxytocin rate","Providing comfort measures"],
            answer: 2,
            rationale: "With tachysystole the uterus is already contracting too often, so increasing the oxytocin would worsen it. The nurse assesses, repositions, provides comfort, and turns the oxytocin down or off.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A laboring client suddenly develops chest pain, dyspnea, hypotension, and frothy sputum shortly after her membranes rupture. Which findings support a diagnosis of amniotic fluid embolism? Select all that apply.",
            options: ["Chest pain","Hypertension","Dyspnea","Frothy sputum","Hypotension"],
            answers: [0,2,3,4],
            rationale: "Amniotic fluid embolism strikes the respiratory and cardiovascular systems: chest pain, dyspnea, frothy sputum, and HYPOtension. Care is to support the cardiovascular and respiratory systems, and to displace the uterus if CPR is needed.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "An ultrasound reports an amniotic fluid index (AFI) of 3 cm. The nurse monitors the fetus most closely for:",
            options: ["Macrosomia","Preterm labor from uterine overdistention","Malpresentation from excess fluid","Cord compression and pulmonary hypoplasia"],
            answer: 3,
            rationale: "A normal AFI is 5-25 cm; an AFI of 3 is oligohydramnios. Too little fluid risks cord compression and pulmonary hypoplasia (the fetus needs to breathe in fluid for the lungs to develop), along with renal and skeletal problems. Overdistention and malpresentation are polyhydramnios problems.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client is admitted with vaginal bleeding, and the team is trying to distinguish placenta previa from placental abruption. Which assessment finding best differentiates the two?",
            options: ["The presence and character of abdominal pain","The volume of bleeding on the pad","The fetal heart rate baseline","The hemoglobin and hematocrit"],
            answer: 0,
            rationale: "Abdominal pain is the key differentiator: an abruption is painful with a firm, tender, board-like uterus, whereas a previa is classically painless bleeding with a soft uterus. Bleeding volume is misleading, because an abruption can conceal blood behind the placenta.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          },
          {
            stem: "A client in preterm labor is started on nifedipine as a tocolytic. Before giving a dose, the nurse should hold the medication and notify the provider if:",
            options: ["The systolic blood pressure is less than 90 mm Hg","The maternal heart rate is 118 bpm","The client reports mild flushing","The client has 2+ deep tendon reflexes"],
            answer: 0,
            rationale: "Nifedipine relaxes uterine smooth muscle but also lowers blood pressure. Because this client is not hypertensive, hold the dose if the systolic pressure drops below 90. The 120-bpm hold parameter belongs to terbutaline, and 2+ reflexes are normal.",
            topic: "Intrapartum Complications",
            source: "exam-1"
          }
        ],
        extraPractice: [
          {
            stem: "A client at 35 4/7 weeks is having regular contractions with cervical change. How does the nurse classify this labor?",
            options: ["Term labor","Preterm labor","A normal Braxton Hicks pattern","Post-term labor"],
            answer: 1,
            rationale: "Preterm labor is labor occurring between 20 and 36 6/7 weeks. Signs include about 8 contractions in an hour (or 4 in 20 minutes), cervical change, low menstrual-like cramps, pelvic pressure, and a low dull backache.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A client at risk for preterm birth has a positive fetal fibronectin (fFN) test. What does this result tell the nurse?",
            options: ["Her fetal lungs are fully mature","Labor is unlikely for several more weeks","Her cervix is long and firmly closed","Her risk of preterm labor or birth is increased"],
            answer: 3,
            rationale: "Fetal fibronectin is the protein that keeps the amniotic sac glued to the uterine lining, so finding it in cervical secretions means that 'glue' has been disrupted — a strong predictor of preterm labor or birth.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A transvaginal ultrasound at 26 weeks reports a cervical length of 21 mm. How does the nurse interpret this finding?",
            options: ["Normal for this gestational age","A strong predictor of preterm birth","Evidence the cervix is closed and firm","An indication for immediate induction"],
            answer: 1,
            rationale: "Cervical shortening or thinning — especially less than 25 mm before term — is abnormal and a strong predictor of preterm birth, along with a prior preterm birth or a current infection.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A client in preterm labor at 30 weeks is started on magnesium sulfate. Besides relaxing the uterus, what additional benefit does the nurse explain?",
            options: ["It matures the fetal lungs the way a steroid does","It raises her blood pressure","It protects the fetal brain","It speeds cervical dilation"],
            answer: 2,
            rationale: "Magnesium sulfate is also neuroprotective — it may decrease the fetal risk of intracranial hemorrhage and necrotizing enterocolitis. Corticosteroids, not magnesium, mature the lungs.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "An ultrasound shows the placenta completely covering the cervical os. The nurse identifies this as which type of placenta previa?",
            options: ["Marginal","Low-lying","Partial","Complete"],
            answer: 3,
            rationale: "A complete previa totally covers the cervix. A partial previa covers part of it, marginal is at the edge of the cervix, and low-lying is close but not on or touching it. With any placenta over the cervix, do not perform a vaginal exam.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A client has little visible vaginal bleeding, but her abdomen is hard and her measured abdominal girth keeps increasing. Which complication should the nurse monitor for most closely?",
            options: ["Disseminated intravascular coagulation","An amniotic fluid embolism","A prolapsed umbilical cord","Uterine inversion"],
            answer: 0,
            rationale: "This is a concealed (central) placental abruption — the blood collects behind the placenta, so the abdomen hardens and enlarges while little blood is seen. The nurse monitors uterine activity, pain, abdominal girth, and fetal tolerance, and watches for DIC from the concealed loss.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A client's nonstress test is nonreactive after 40 minutes. Which follow-up does the nurse most anticipate?",
            options: ["Repeating the NST in one week","A biophysical profile","Discharge home with fetal movement counts","Vibroacoustic stimulation to stress the fetus"],
            answer: 1,
            rationale: "A nonreactive NST is typically followed by a biophysical profile. Vibroacoustic stimulation can be used to wake a baby that may simply be asleep, but it should NOT be used on a baby already showing non-reassuring signs.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A client at 37 weeks is scheduled for an external cephalic version and is having irregular contractions. Which medication does the nurse anticipate before the procedure?",
            options: ["Subcutaneous terbutaline","IV oxytocin","Oral misoprostol","IM betamethasone"],
            answer: 0,
            rationale: "Subcutaneous terbutaline relaxes the uterus so the provider can turn the fetus. Version care also includes consent (cesarean is a possible risk), IV access, ultrasound, fasting for 8 hours, and fetal monitoring before, during, and after — plus RhoGAM afterward if she is Rh-negative.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "A postpartum client's placenta was found to have grown through the myometrium and attached to her bladder. Which type of abnormal adherence does the nurse document?",
            options: ["Placenta accreta","Placenta increta","Placenta percreta","A retained placental fragment"],
            answer: 2,
            rationale: "Percreta PERforates — it penetrates the myometrium and can attach to nearby organs such as the bowel or bladder. Accreta attaches through the endometrium to the top of the myometrium; increta invades into, but not through, the myometrium.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          },
          {
            stem: "Which are increased risks the nurse anticipates in a multiple-gestation pregnancy? Select all that apply.",
            options: ["Preterm labor","Postpartum hemorrhage","Abnormal fetal presentations","Twin-to-twin transfusion","Decreased total maternal weight-gain needs"],
            answers: [0,1,2,3],
            rationale: "Multiple gestation raises the risk of preterm labor, uterine dysfunction, abnormal presentations, instrumental/cesarean birth, postpartum hemorrhage, twin-to-twin transfusion, cord accidents, and cerebral palsy. Weight-gain needs are greater (about 40–45 lb), not decreased.",
            topic: "Intrapartum Complications",
            source: "quiz-bank"
          }
        ],
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
