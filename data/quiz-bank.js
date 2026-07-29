/* ============================================================
   quiz-bank.js - "Build Your Own Exam" question bank.
   Organized by topic; each topic has three practice sets:
     - mustKnow: every question from the Weeks 1-4 Practice Exam
       (formerly data/exam-weeks1-4.js, archived 2026-07-29 — see
       "archive/" in the project root) that matched this topic, copied
       verbatim (not moved). Covers all 91 testable Must-Know items
       from exam-hints.html. Replaces the old exam-1/exam-2-sourced
       mustKnow set entirely as of 2026-07-29 — see that session note
       in CLAUDE.md for why (the user wanted this bank's mustKnow set
       to exactly replicate the Weeks 1-4 exam once exam-1/exam-2/
       exam-weeks1-4 were pulled off the live site).
     - extraPractice: the original quiz-bank question pool for that
       topic. It was de-duplicated against the OLD exam-1/exam-2-sourced
       mustKnow set; when mustKnow's source changed 2026-07-29 an
       exhaustive pairwise check found 4 collisions, all in `disorders`
       and all caused by the new mustKnow adding the five Disorders
       rows the old exams never covered (PCOS, endometriosis,
       fibrocystic changes, HPV). **All four were repointed the same
       day** to untested facts from week1-disorders.html: PID risk
       factors, toxic-shock lab findings, bromocriptine, and NIPT.
       Re-verified: no mustKnow/extraPractice pair now exceeds a 0.25
       token overlap on a shared fact; the handful that remain are
       shared vocabulary testing different points.
     - eaq: questions imported from the user's external EAQ (Elsevier
       Adaptive Quizzing) sets — EAQ 1-3 on 2026-07-21, EAQ 4 on
       2026-07-27, EAQ 5 on 2026-07-29. 250 source questions in, 205
       unique deployed; the rest were exact duplicates (Elsevier
       recycles items heavily) or, in one case (EAQ 4), a drag-and-drop
       sequencing item the exam engine can't render. Questions whose
       content only lives on a Week 4/5/6 page sit in dedicated
       eaq-only topic entries below (`week4labor`, `week4complications`,
       `week5postpartum`, `week6newborn1`, `week6newborn2` —
       mustKnow/extraPractice empty for Weeks 5-6, since no Exam-Prep
       content reflects those weeks until their live lectures arrive).
       Whatever isn't taught anywhere on the site lands in the final
       `other` entry ("Other EAQ Questions" — also eaq-only). See
       CLAUDE.md for the full orphan/duplicate list and topic-by-topic
       counts.
   Every question carries `topic` (the topic's own `label`, or the page
   title for the eaq-only entries) and `source` ("exam-weeks1-4",
   "quiz-bank", or "eaq") so future breakdown/report changes don't
   require re-reading and re-categorizing every question.
   Internal ids/filenames still say "quiz" (quiz-builder.html,
   window.QUIZ_BANK, assets/quiz.js) — only user-facing text was
   renamed to "Build Your Own Exam".

   Revised 2026-07-26 (mustKnow + extraPractice only, back when mustKnow
   was still exam-1/exam-2-sourced — the eaq sets were deliberately NOT
   touched): stripped giveaway phrasing out of stems, removed
   self-explaining answer options, replaced throwaway distractors with
   plausible near-misses, reframed straight recall as clinical
   vignettes, and redistributed the correct-answer positions. This pass
   is now superseded for mustKnow by the 2026-07-29 exam-weeks1-4 swap
   (that page had its own quality pass at build time) but extraPractice
   still reflects it.

   EAQ 4 imported 2026-07-27 (`EAQ/EAQ 4.md`, 50 questions): 24 added
   (26 were duplicates or unrenderable). EAQ 5 imported 2026-07-29
   (`EAQ/EAQ 5.md`, 50 questions, all newborn-assessment content): 48
   added (2 dropped as duplicates — cord vessels and ABO incompatibility
   already existed elsewhere in the bank), landing in two brand-new
   eaq-only rows (`week6newborn1` 14, `week6newborn2` 11) plus `other`
   23. All EAQ-sourced questions (205 total) were re-audited 2026-07-29
   for answer/rationale mispairing from the PDF-to-Markdown conversion —
   one genuine source-PDF garble was fixed ("attempting to of it" →
   "attempting to deny it," the death-and-dying/Denial question); no
   actual answer/rationale mismatches were found.

   Quality pass 2026-07-29 (evening), after a full audit of the non-EAQ
   sets — eaq was deliberately NOT touched:
     * 6 mustKnow questions ADDED to close sub-aspect gaps the audit
       found inside already-covered Must-Know concepts: pre-anesthetic
       fluid bolus as PREVENTION, a non-reassuring/Category III tracing
       as a systemic-analgesia contraindication, the internal-monitoring
       use of amniotomy, misoprostol's postpartum-bleeding use (all
       `week4labor`), third-stage oxytocin-then-fundal-massage
       (`intrapartum1`), and late deceleration = uteroplacental
       insufficiency (`intrapartum2`). All carry source "quiz-bank".
       NOT added: Demerol -> decreased variability, which is already
       tested by intrapartum2 extraPractice — adding it would have
       created a duplicate.
     * 9 questions REWRITTEN to remove answer tells (circular stems,
       correct options carrying their own rationale clause, and one
       item answerable by elimination because only the keyed option had
       any risk factor at all). Eight were extraPractice; one — the HPV
       item — is a mustKnow question, so mustKnow is no longer byte-
       identical to the archived Weeks 1-4 exam.
     * 2 Intrapartum Care I extraPractice questions SWAPPED for
       higher-yield content: the ROA-first-letter item (duplicated a
       mustKnow question) became the four pelvis shapes, and the
       5-cm/active-phase item (duplicated another) became the cardinal
       movements of labor.
     * 2 mustKnow questions CONVERTED to select-all-that-apply so both
       Intrapartum topics have one: true-vs-false labor
       (`intrapartum1`) and reassuring-tracing criteria
       (`intrapartum2`). No questions were added to do this.
   Counts after the pass: mustKnow 97, extraPractice 105 (unchanged),
   eaq 205 — the bank totals 407, with 10 mustKnow SATA and 10
   extraPractice SATA.

   Follow-up pass 2026-07-29 (same evening, after the user reviewed the
   above):
     * FIXED the answer-key clustering flagged above. `hypertensive`
       (was 4/7 at position D) and `week4complications` (was 8/14 at
       position D) mustKnow sets had their option order rotated —
       content and rationale untouched, only option order and the
       matching answer index changed. Both now sit at or under 2/7 and
       4/14 in any one position.
     * Re-scanned every topic (not just Intrapartum I) for
       mustKnow/extraPractice questions testing the same fact. No
       further duplicates found — the remaining topical overlaps
       (e.g. hypertensive's single-reading-recheck MK vs. its
       two-readings-classification EP) are related but test distinct
       points, the same pattern the project already keeps deliberately
       separate elsewhere (e.g. magnesium sulfate for different
       indications).
     * SATA rebalanced so every topic except `nutrition` and
       `reproductive` (Anatomy & Physiology) now carries exactly one
       mustKnow SATA and one extraPractice SATA: `disorders` MK13
       (toxic shock syndrome recognition) became a SATA on TSS
       findings; two of `week4labor`'s three mustKnow SATA (aspiration-
       prevention measures, post-epidural-hypotension actions) were
       converted back to single-answer, leaving only the oxytocin
       pre-induction-checklist SATA. No questions were added or
       removed to do this.
   Counts unchanged at 407 total; mustKnow SATA and extraPractice SATA
   are each 10, one per topic except nutrition/reproductive.
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
            source: "exam-weeks1-4"
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
            stem: "Which substance relaxes and constricts smooth muscle and is used clinically both to ripen the cervix and to strengthen contractions?",
            options: ["Relaxin","Progesterone","Prostaglandins","Estrogen"],
            answer: 2,
            rationale: "Prostaglandins relax and constrict smooth muscle and are used clinically to ripen the cervix and increase contractions. Relaxin softens connective tissue and the pelvic joints, progesterone keeps the uterus quiet during pregnancy, and estrogen supports uterine growth and blood flow.",
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
            stem: "Which statement indicates that a pregnant client requires further teaching about fetal growth and development?",
            options: ["\"The fetus keeps growing throughout pregnancy.\"","\"The fetus gets nutrients from the amniotic fluid.\"","\"The fetus may be underweight if it is exposed to smoke.\"","\"The fetus gets oxygen from blood coming through the placenta.\""],
            answer: 1,
            rationale: "The amniotic fluid provides protection, not nutrition; the fetus depends on the placenta, along with the umbilical blood vessels, for nutrients and oxygen. The other three statements are accurate and indicate that the client understood the teaching.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          },
          {
            stem: "Which comment from an adolescent after a sex education class alerts the nurse to have a private discussion with the student?",
            options: ["\"I can't get pregnant if I have sex during my period.\"","\"The pill may prevent me from getting pregnant, but I can still get a sexually transmitted infection.\"","\"I won't get pregnant if I swim in a pool where a boy has just masturbated.\"","\"A condom won't always protect me from getting pregnant, but it can help protect me from getting an STI.\""],
            answer: 0,
            rationale: "Although unusual, conception can occur during a menstrual period. The other three statements are accurate: the pill prevents ovulation but gives no protection from a sexually transmitted organism, sperm cannot survive in a large body of water, and condoms lower STI risk but are not 100% effective at preventing pregnancy.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          },
          {
            stem: "During which time in pregnancy would the nurse inform the client that the fetus shows a marked increase in size?",
            options: ["At the end of the first trimester","During the second trimester","During the third trimester","No difference is observed"],
            answer: 2,
            rationale: "During the third trimester the fetus lays down fat deposits and gains the most weight. Fetal weight gain occurs throughout pregnancy, including the second trimester, but it is most marked in the third. There is little fetal weight gain during the first trimester, when organ development is occurring.",
            topic: "Anatomy & Physiology",
            source: "eaq"
          },
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
            source: "exam-weeks1-4"
          },
          {
            stem: "A father has an autosomal DOMINANT disorder and is heterozygous (Dd). The mother is unaffected (dd). What does the nurse teach about each pregnancy?",
            options: ["25% of children will be affected","75% of children will be affected","No children will be affected, but all will be carriers","50% of children will be affected"],
            answer: 3,
            rationale: "Dd × dd yields 50% Dd (affected). In an autosomal dominant disorder only ONE abnormal allele is needed, so there is no silent carrier state.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "Both parents are carriers for cystic fibrosis, an autosomal recessive disorder. What does the nurse teach about each pregnancy?",
            options: ["25% affected, 50% carriers, 25% unaffected","50% of children will be affected","All children will be carriers","All children will be affected"],
            answer: 0,
            rationale: "A carrier × carrier cross (Bb × Bb) yields 25% affected (bb), 50% unaffected carriers (Bb), and 25% completely unaffected (BB) for each pregnancy.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A 26-year-old has an abnormal Pap smear and a biopsy confirming human papillomavirus. She tells the nurse she feels fine and has never had any warts or symptoms. Which teaching is the priority?",
            options: ["Having no warts means she is not carrying the virus","She needs continued Pap screening despite having no symptoms","A course of oral antibiotics will clear the infection","The Gardasil vaccine will now cure her infection"],
            answer: 1,
            rationale: "HPV is a viral STI that frequently causes no symptoms - many clients never develop genital warts - and its incubation can run for years, so a normal past Pap does not rule out later exposure. Because HPV is the leading cause of cervical cancer, continued Pap screening is the priority. Warts are treated with cryotherapy or shave/acid removal; Gardasil prevents infection but does not cure an existing one, and antibiotics do not treat a virus.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient develops pelvic inflammatory disease after an untreated chlamydia infection. Which long-term complication is most important to include in teaching?",
            options: ["Cervical cancer","Osteoporosis","Tubal damage and infertility","Gestational diabetes"],
            answer: 2,
            rationale: "PID can scar the fallopian tubes and cause infertility, which is why untreated chlamydia and gonorrhea are such a concern.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A pregnant patient is diagnosed with gonorrhea. Untreated, the nurse knows this most importantly can cause which complication in the newborn?",
            options: ["Neural tube defects","Macrosomia","Cleft palate","Neonatal eye infection and blindness"],
            answer: 3,
            rationale: "Untreated gonorrhea (and chlamydia) can cause neonatal conjunctivitis and blindness. Gonorrhea is treated with ceftriaxone (Rocephin) plus azithromycin.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A 32-year-old reports several tender, movable lumps in both breasts that hurt more in the week before her period and ease afterward. Which teaching is most appropriate?",
            options: ["Limit caffeine and sodium — these cyclic, mobile lumps are the most common benign breast change","A lump that is fixed in place with overlying skin dimpling, like hers, is an expected benign finding","Avoid mammography, because it cannot tell a cyst from a solid mass","Expect infertility, which is the most common complication of this condition"],
            answer: 0,
            rationale: "Fibrocystic changes are the most common benign breast disorder, likely from an estrogen/progesterone imbalance. The lumps are mobile, tender, and track with the cycle; treatment is limiting caffeine and sodium, sometimes oral contraceptives. Diagnosis is by mammogram and fine-needle aspiration. A FIXED mass with skin retraction is the cancer red flag — not this.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient reports a frothy yellow-green vaginal discharge with itching and dysuria; a wet mount shows a motile organism. Which infection and treatment does the nurse anticipate?",
            options: ["Bacterial vaginosis - clindamycin cream","Candidiasis - fluconazole","Trichomoniasis - metronidazole","Chlamydia - azithromycin"],
            answer: 2,
            rationale: "Trichomoniasis (Trichomonas vaginalis, the most common non-viral STI) causes a frothy yellow-green discharge and is diagnosed by seeing the motile organism on a wet mount; it is treated with metronidazole.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient on antibiotics reports thick, curd-like white discharge with severe itching and a vulvar rash. Which treatment does the nurse anticipate?",
            options: ["Metronidazole","Fluconazole (Diflucan) or nystatin","Penicillin","Ceftriaxone"],
            answer: 1,
            rationale: "Thick, white, curd-like discharge with itching indicates candidiasis (yeast); it is treated with fluconazole or nystatin. Antibiotics, diabetes, and immunosuppression are risk factors.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A 24-year-old reports no periods for four months, worsening acne, and coarse hair growth on her face. Labs show elevated androgens and insulin resistance, and transvaginal ultrasound shows enlarged ovaries with numerous small cysts. Which condition does the nurse recognize, and which medication is anticipated?",
            options: ["Polycystic ovarian syndrome — metformin","Endometriosis — a gonadotropin-releasing hormone agonist","Pelvic inflammatory disease — intravenous antibiotics","Fibrocystic breast changes — a thiazide diuretic"],
            answer: 0,
            rationale: "PCOS presents with irregular or absent periods, elevated testosterone and androgens (acne, hirsutism, alopecia, a deeper voice), obesity, and insulin resistance, with enlarged ovaries full of small cysts on transvaginal ultrasound. Treatment includes oral contraceptives, metformin, and spironolactone; infertility is the main complication.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient reports a thin, grayish, watery discharge with a fishy odor; her vaginal pH is 5.0. Which condition does the nurse most suspect, and what treatment is anticipated?",
            options: ["Candidiasis — fluconazole","Bacterial vaginosis — metronidazole","Trichomoniasis — metronidazole","Toxic shock syndrome — hospitalization"],
            answer: 1,
            rationale: "Bacterial vaginosis produces a thin, gray, fishy-smelling discharge with a vaginal pH greater than 4.5; it is treated with metronidazole (Flagyl) or clindamycin cream. Trichomoniasis is also treated with metronidazole, but its discharge is frothy and yellow-green — so the discharge, not the drug, is what distinguishes them.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "Which diagnostic test and treatment are correct for syphilis in pregnancy?",
            options: ["Diagnosed by wet mount; treated with metronidazole","Diagnosed by pH paper; no treatment needed","Diagnosed by culture; treated with fluconazole","Diagnosed by RPR or VDRL; treated with penicillin"],
            answer: 3,
            rationale: "Syphilis is screened with RPR or VDRL (RPR preferred) and treated with penicillin. Congenital syphilis can cause IUGR, preterm birth, and stillbirth.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A menstruating patient who uses super-absorbent tampons is being evaluated for toxic shock syndrome. Which findings would the nurse expect? Select all that apply.",
            options: ["Fever","A sunburn-like rash on the trunk","Vomiting","Hypotension","Thick, curd-like white discharge","A painless genital chancre"],
            answers: [0,1,2,3],
            rationale: "Toxic shock syndrome (a Staph aureus toxin linked to super-absorbent tampons) presents with fever, a sunburn-like rash on the trunk, vomiting, hypotension, and inflamed mucous membranes; it is a medical emergency requiring hospitalization, IV fluids, and antibiotics. Thick, curd-like discharge describes candidiasis, and a painless chancre is the presentation of syphilis — neither is a finding of toxic shock syndrome.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A 29-year-old has had pelvic pain that peaks with every menstrual period and has been unable to conceive for two years. Laparoscopy shows endometrial tissue outside the uterus. She tells the nurse she still hopes to become pregnant. Which treatment does the nurse anticipate?",
            options: ["Surgical removal of the endometrial implants","Continuous oral contraceptives","Metronidazole for 7 days","A single intramuscular dose of penicillin"],
            answer: 0,
            rationale: "Endometriosis is endometrial tissue growing outside the uterus, diagnosed by laparoscopy and often found during an infertility workup. Surgical removal suits a client who wants to conceive; oral contraceptives are also a treatment but not while she is trying to become pregnant. Adhesions causing infertility are the main complication.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A maternal serum alpha-fetoprotein (AFP) level comes back HIGH. Which fetal concern is most associated with this result?",
            options: ["Down syndrome","An open neural tube defect such as spina bifida","Trisomy 18","Turner syndrome"],
            answer: 1,
            rationale: "HIGH AFP is associated with open neural tube defects (spina bifida, anencephaly), and also with multiples and diabetes. LOW AFP is linked to Down syndrome or trisomy 18.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A pregnant client has a history of genital herpes (HSV-2) but no current lesions. At what point does the nurse anticipate suppressive acyclovir will be started?",
            options: ["At 20 weeks","At the first prenatal visit","At 36 weeks","Only if a lesion appears in labor"],
            answer: 2,
            rationale: "Suppressive acyclovir is started at 36 weeks to prevent an outbreak near delivery. An active genital lesion at delivery requires a cesarean, because neonatal herpes can be fatal.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client at 22 weeks' gestation has burning with urination, urgency, and a low-grade fever; a urine culture confirms cystitis. She asks why she cannot just wait to see whether it clears up on its own. What is the nurse's best response?",
            options: ["\"An untreated bladder infection can travel up to your kidneys, and it also raises your risk of preterm labor.\"","\"Cystitis in pregnancy clears on its own once you increase your fluid intake.\"","\"The main worry is that it will cause malformations of your baby's kidneys.\"","\"We wait until the third trimester to treat it, when antibiotics are safest for the baby.\""],
            answer: 0,
            rationale: "Cystitis is a lower UTI — usually E. coli or staph — causing dysuria, urgency, hematuria, and a low-grade fever. Untreated it can ascend to pyelonephritis (high fever, chills, unilateral flank pain), and UTIs in pregnancy also increase the risk of preterm labor. It is treated promptly with oral antibiotics guided by the culture.",
            topic: "Disorders & Genetics",
            source: "exam-weeks1-4"
          }
        ],
        extraPractice: [
          {
            stem: "A client is being treated for pelvic inflammatory disease. Which items in her history does the nurse identify as risk factors?",
            options: ["A history of multiple partners and IUD use","A history of fibrocystic breast changes","A family history of ovarian cancer","Long-term oral contraceptive use"],
            answer: 0,
            rationale: "Risk factors for PID are multiple partners, IUD use, and untreated gonorrhea or chlamydia. PID can also be asymptomatic, which is part of why it goes on to cause tubal damage and infertility. Fibrocystic changes, a family cancer history, and oral contraceptives are not risk factors for it.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A client is admitted with suspected toxic shock syndrome. Which laboratory pattern does the nurse expect?",
            options: ["Low BUN with elevated platelets","Elevated BUN, elevated liver enzymes, and low platelets","Elevated platelets with normal liver enzymes","Low bilirubin with an elevated white count only"],
            answer: 1,
            rationale: "Toxic shock syndrome shows an increased BUN, increased liver enzymes (AST/ALT), increased bilirubin, and LOW platelets. It is a medical emergency treated with hospitalization, IV fluids, and antibiotics.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "Which fertility medication works by inhibiting prolactin so that FSH and LH rise and ovulation is induced?",
            options: ["Clomiphene citrate (Clomid)","Bromocriptine (Parlodel)","Progesterone supplementation","Gonadotropins (FSH/LH)"],
            answer: 1,
            rationale: "Bromocriptine (Parlodel) inhibits prolactin, which allows FSH and LH to rise and induces ovulation. Clomiphene citrate stimulates follicle growth and egg release directly, progesterone supplementation treats inadequate progesterone, and gonadotropins are given when FSH/LH themselves are inadequate.",
            topic: "Disorders & Genetics",
            source: "quiz-bank"
          },
          {
            stem: "A 39-year-old asks about a blood test her provider mentioned that screens the fetus for chromosomal conditions without a needle procedure. Which test is the nurse describing?",
            options: ["Chorionic villus sampling","Amniocentesis","NIPT (cell-free DNA)","A biophysical profile"],
            answer: 2,
            rationale: "NIPT measures circulating fetal cell-free DNA in a sample of maternal blood, and is offered to older mothers, after an abnormal ultrasound, or with a prior affected child. Chorionic villus sampling and amniocentesis both retrieve fetal genetic material through an invasive procedure, and a biophysical profile assesses fetal well-being, not chromosomes.",
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
            stem: "A client is deciding between chorionic villus sampling and amniocentesis. Which statement by the nurse is accurate?",
            options: ["CVS samples amniotic fluid and amniocentesis samples the placenta","CVS samples the placenta and cannot screen for neural tube defects","Only amniocentesis can identify a chromosomal disorder","CVS is the safer choice because it carries no procedural risk"],
            answer: 1,
            rationale: "Both tests retrieve genetic material - CVS samples the chorionic villi (placenta) and amniocentesis samples the amniotic fluid. Because CVS does not sample amniotic fluid, it cannot be used to screen for neural tube defects; alpha-fetoprotein and ultrasound are used for that. Both can identify chromosomal disorders, and both carry procedural risk.",
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
            stem: "A pregnant patient's partner answers every question for her and will not leave the room. What is the nurse's most appropriate action?",
            options: ["Continue the visit with the partner present to save time","Ask the patient about abuse directly in front of the partner","Document \"no abuse\" since she did not report any","Escort her alone to give a urine sample so she can be screened privately"],
            answer: 3,
            rationale: "Intimate partner violence increases in pregnancy, and patients rarely disclose with a controlling partner present. Create private screening time and never raise it in front of others.",
            topic: "Antepartum Care",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient at 17 weeks is anxious because her quad screen (MSAFP) came back abnormal. What is the nurse's best teaching?",
            options: ["\"This confirms your baby has a birth defect.\"","\"The test is drawn from the amniotic fluid and is diagnostic.\"","\"This is a screening test, so follow-up testing such as an ultrasound or amniocentesis will be needed.\"","\"An abnormal result at 17 weeks is always a lab error.\""],
            answer: 2,
            rationale: "The quad screen/MSAFP is a maternal blood SCREEN (drawn ~15–22 weeks), not diagnostic — an abnormal result means further testing is needed.",
            topic: "Antepartum Care",
            source: "exam-weeks1-4"
          },
          {
            stem: "A primigravida at 20 weeks' gestation tells the nurse she has been feeling \"little flutters\" low in her abdomen for the past few days. How should the nurse interpret this finding?",
            options: ["Quickening — expected at this gestation, and a presumptive sign of pregnancy","Quickening — expected at this gestation, and a positive sign of pregnancy","Braxton Hicks contractions — expected, and a probable sign of pregnancy","An unexpected finding this early that should be reported to the provider"],
            answer: 0,
            rationale: "Quickening is fetal movement first felt by the mother, expected at about 20 weeks. Because only she can feel it, it is subjective — a presumptive sign. Fetal movement felt by the EXAMINER is what makes it a positive sign. Braxton Hicks are painless contractions, not flutters.",
            topic: "Antepartum Care",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient reports that her last menstrual period began on March 10 and ended March 15. Using Naegele's rule, what is her estimated date of birth?",
            options: ["December 22","December 17","January 17","December 10"],
            answer: 1,
            rationale: "Naegele's rule uses the FIRST day of the LMP (March 10): subtract 3 months (December 10), then add 7 days = December 17. December 10 is the intermediate step, not the answer.",
            topic: "Antepartum Care",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient at 30 weeks' gestation has a fundal height of 25 cm. What is the nurse's best interpretation?",
            options: ["This is expected and requires no action","This confirms intrauterine growth restriction","This discrepancy should be reported for further evaluation","Fundal height is unreliable and should be ignored"],
            answer: 2,
            rationale: "Fundal height should be within about ±2 cm of the gestational age in weeks (from ~22–34 weeks). 25 cm at 30 weeks is a 5-cm discrepancy that needs evaluation — but it does not by itself confirm a diagnosis.",
            topic: "Antepartum Care",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient delivering today at 36 2/7 weeks has this history: one miscarriage at 9 weeks, one vaginal birth at 39 weeks, and a cesarean birth of twins at 35 weeks. All children are living. What is her GTPAL after today's birth?",
            options: ["G4 T1 P2 A1 L4","G3 T1 P1 A1 L4","G5 T1 P2 A1 L4","G4 T2 P1 A1 L3"],
            answer: 0,
            rationale: "Gravida counts pregnancies: miscarriage + term birth + twin pregnancy + today = G4. Term 1 (39 wk). Preterm 2 (the 35-wk twins and today). Abortions 1. Living 4 (1 + twins + today).",
            topic: "Antepartum Care",
            source: "exam-weeks1-4"
          },
          {
            stem: "Which findings are PRESUMPTIVE (subjective) signs of pregnancy? Select all that apply.",
            options: ["Amenorrhea","Quickening","Abdominal striae","Urinary frequency","Uterine souffle","Breast tenderness and enlargement"],
            answers: [0,1,3,5],
            rationale: "Presumptive (subjective) signs can all be explained by something other than pregnancy: amenorrhea, nausea/vomiting, excessive fatigue, urinary frequency, breast tenderness/enlargement, and quickening. Abdominal striae and a uterine souffle are PROBABLE (objective) signs.",
            topic: "Antepartum Care",
            source: "exam-weeks1-4"
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
            stem: "A client's biophysical profile is reported as 6 out of 8. A nursing student asks why no single component was scored a 1. What is the nurse's best response?",
            options: ["\"Each component scores 0 or 2 — never 1 — so a 6 means one was not met, and a non-stress test comes next.\"","\"Components score 0, 1, or 2; a 6 is reassuring and needs no follow-up.\"","\"Each component scores 0 or 2, and anything under 8 means she goes for an immediate cesarean birth.\"","\"A score of 1 is used only for amniotic fluid volume, which is measured on its own scale.\""],
            answer: 0,
            rationale: "Every BPP component — Breathing, Amniotic fluid, Tone, Movement, plus the Non-stress test (BATMAN) — is all-or-nothing: 0 or 2, never 1. Anything short of 8/8 prompts a non-stress test, not immediate delivery.",
            topic: "Antepartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "The nurse is reviewing the biophysical profile (BPP). Which components are assessed by ultrasound? Select all that apply.",
            options: ["Fetal breathing","Non-stress test","Amniotic fluid index","Fetal tone","Fetal movement"],
            answers: [0,2,3,4],
            rationale: "BATMAN: Breathing, Amniotic fluid, Tone, Movement are the four ultrasound components (up to 8/8); the non-stress test is the fifth component and is not done by ultrasound. Each scores 0 or 2 — never a 1.",
            topic: "Antepartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is undergoing a contraction stress test (CST). Which result is the desired, reassuring finding?",
            options: ["A positive CST","An equivocal CST","An unsatisfactory CST","A negative CST"],
            answer: 3,
            rationale: "The CST is 'backwards': a NEGATIVE result (no late decelerations) is reassuring, while a POSITIVE result (late decels with more than half of contractions) signals poor placental perfusion.",
            topic: "Antepartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A fetus at 34 weeks is undergoing a non-stress test. Which finding does the nurse document as REACTIVE?",
            options: ["Two accelerations of 15 bpm above baseline lasting 15 seconds each within 20 minutes","One acceleration of 15 bpm lasting 15 seconds within 20 minutes","Two accelerations of 10 bpm lasting 10 seconds each within 20 minutes","No decelerations over a 40-minute period"],
            answer: 0,
            rationale: "At ≥32 weeks, reactive = at least 2 accelerations of 15 bpm above baseline lasting 15 seconds within 20 minutes. The 10 bpm for 10 seconds criteria apply only under 32 weeks, and the absence of decelerations is not what makes an NST reactive.",
            topic: "Antepartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "An amniocentesis is performed for fetal lung maturity. Which lecithin/sphingomyelin (L/S) ratio indicates MATURE fetal lungs?",
            options: ["1:2 or lower","1:1 exactly","2:1 or higher","The L/S ratio does not assess the lungs"],
            answer: 2,
            rationale: "An L/S ratio of 2:1 or greater indicates mature fetal lungs (adequate surfactant, which keeps the alveoli open).",
            topic: "Antepartum Care II",
            source: "exam-weeks1-4"
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
            options: ["It is safe if she keeps each session under 30 minutes","She should avoid it only if she develops a fever","She should avoid it, particularly in the first trimester","It is safe as long as she stays well hydrated"],
            answer: 2,
            rationale: "Hot tubs and saunas raise the maternal core temperature, and hyperthermia during the first trimester - the period of organ formation - can harm the fetus. Limiting the session, staying hydrated, and waiting for a fever do not prevent the rise in core temperature.",
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
            options: ["Cocaine is stored in cord tissue for years afterward","Cord tissue reflects exposure over a longer window than maternal urine","The cord is simply easier to collect than a blood sample","Cocaine cannot be detected in maternal urine at all"],
            answer: 1,
            rationale: "Cocaine metabolizes rapidly, so a maternal urine screen may already be negative by the time she delivers; a segment of umbilical cord reflects exposure over a longer period. It is not stored for years, ease of collection is not the reason, and cocaine IS detectable in maternal urine within its short window.",
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
            stem: "A client with a history of preterm birth is being monitored for cervical change during this pregnancy. Which test does the nurse anticipate?",
            options: ["Nuchal translucency screening","Transvaginal ultrasound","Doppler flow studies","A biophysical profile"],
            answer: 1,
            rationale: "Transvaginal ultrasound measures cervical length and detects funneling, which makes it a strong predictor of preterm birth. Nuchal translucency screens for chromosomal conditions, Doppler flow studies assess placental and fetal blood flow, and a biophysical profile assesses fetal well-being rather than the cervix.",
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
            source: "exam-weeks1-4"
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
            source: "exam-weeks1-4"
          },
          {
            stem: "The nurse assesses a pregnant patient with a cardiac disorder at each prenatal visit. Which findings indicate cardiac DECOMPENSATION? Select all that apply.",
            options: ["New cough","Weight loss","Dyspnea","Palpitations","Edema"],
            answers: [0,2,3,4],
            rationale: "Signs of cardiac decompensation include a new cough, dyspnea, edema, palpitations, rales, and weight GAIN — not weight loss.",
            topic: "Antepartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient's 3-hour glucose tolerance test returns with the fasting and 2-hour values elevated; the 1-hour and 3-hour values are normal. How does the nurse interpret this?",
            options: ["Normal — at least three values must be elevated","The test must be repeated","She has gestational diabetes","This indicates type 1 diabetes"],
            answer: 2,
            rationale: "On the 3-hour glucose tolerance test, if any TWO of the four values are elevated, the patient is diagnosed with gestational diabetes.",
            topic: "Antepartum Complications",
            source: "exam-weeks1-4"
          }
        ],
        extraPractice: [
          {
            stem: "A patient with type 1 diabetes at 9 weeks' gestation reports two episodes of morning hypoglycemia this week on her usual insulin dose. What best explains this?",
            options: ["The placenta has begun producing insulin on her behalf","Early pregnancy hormones enhance her insulin response","Her insulin requirement doubles during the first trimester","Nausea has slowed the absorption of her injected insulin"],
            answer: 1,
            rationale: "In the first trimester the insulin requirement DECREASES, because pregnancy hormones enhance insulin production and response, and fetal demand for maternal glucose adds a tendency toward hypoglycemia. Needs climb later, from the late first trimester onward. The placenta does not produce insulin, and nausea affects intake rather than the absorption of injected insulin.",
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
            stem: "A patient at 24 weeks reports she has been unusually thirsty, urinating constantly, always hungry, and has lost six pounds. Which action does the nurse anticipate?",
            options: ["Reassurance that increased thirst and appetite are expected at this point","A clean-catch urine specimen for culture","Screening for gestational diabetes","An antiemetic, with weekly weight checks"],
            answer: 2,
            rationale: "Polyuria, polydipsia, polyphagia, and weight loss are the classic signs of diabetes and call for glucose screening rather than reassurance. A urine culture would fit frequency and dysuria without the other findings, and antiemetics treat hyperemesis, which causes vomiting rather than constant hunger.",
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
            stem: "When caring for a client in the third trimester of pregnancy with a history of myocardial infarction, which statement made by the client would concern the nurse the most?",
            options: ["\"I have been tired throughout this pregnancy.\"","\"When I stand for a while, my legs get swollen.\"","\"I experienced quite a bit of nausea in the first trimester.\"","\"I have been using cough drops to try and get rid of my cough.\""],
            answer: 3,
            rationale: "Obstetrical clients with a history of myocardial infarction are at risk for cardiac decompensation, and a frequent moist cough is one of its findings. Fatigue throughout the pregnancy is ongoing rather than new, and dependent swelling after prolonged standing and first-trimester nausea are both common in pregnancy.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "A client comes to the emergency department reporting severe abdominal cramping and heavy bleeding at 10 weeks' gestation. Examination reveals heavy bleeding, an open cervical os, and tissue present. Which type of abortion is the client experiencing?",
            options: ["Missed","Complete","Inevitable","Threatened"],
            answer: 2,
            rationale: "An open cervical os with heavy bleeding and tissue present means a spontaneous abortion is inevitable. In a missed abortion the fetus has died but the products of conception are retained, with a closed os and possibly no bleeding or cramping. In a complete abortion all fetal tissue has passed and the cervix is closed. A threatened abortion shows spotting with a closed cervical os.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "The nurse is assessing a client with a tentative diagnosis of hydatidiform mole. Which clinical finding would the nurse anticipate?",
            options: ["Hypotension","Decreased fetal heart rate","Unusual uterine enlargement","Painless, heavy vaginal bleeding"],
            answer: 2,
            rationale: "The proliferation of fluid-filled trophoblastic tissue causes the uterus to enlarge more quickly than it would with a fetus. HYPERtension, not hypotension, often occurs with a molar pregnancy; there is no fetus within the mole, so there is no fetal heart rate; and any vaginal bleeding is usually slight rather than heavy.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
          {
            stem: "A client has had surgery for a ruptured fallopian tube from an ectopic pregnancy. Which information would be included in the postoperative teaching plan?",
            options: ["Effect on future pregnancies","How to prevent another tubal pregnancy","Need for Rho(D) immune globulin to prevent isoimmunization","Importance of not douching after intercourse, because this may dislodge a fertilized egg"],
            answer: 0,
            rationale: "Removing a fallopian tube does not impair the ovaries' ability to release an egg, which may still be fertilized in the remaining tube if it is undamaged. There is no known way to prevent a future tubal pregnancy, nothing indicates this client is Rh negative, and douche liquid does not reach the fallopian tube.",
            topic: "Antepartum Complications",
            source: "eaq"
          },
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
            stem: "A patient at 26 weeks has a blood pressure of 146/94 with no proteinuria, headache, or visual changes. This is her first elevated reading. What does the nurse anticipate?",
            options: ["Rechecking the blood pressure in at least 4 hours","An immediate diagnosis of gestational hypertension","Starting magnesium sulfate now","Immediate induction of labor"],
            answer: 0,
            rationale: "Hypertension is not diagnosed on a single reading. It requires two readings of ≥140 systolic or ≥90 diastolic at least 4 hours apart.",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient with acute severe hypertension has a history of asthma. Which medication order should the nurse question?",
            options: ["IV hydralazine","IV labetalol","Oral nifedipine","Magnesium sulfate"],
            answer: 1,
            rationale: "IV labetalol is a beta-blocker and is avoided in asthma (\"labetalol, lungs\"). Hydralazine or nifedipine would be chosen instead — those two are the ones avoided in tachycardia.",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client with severe preeclampsia has been on a magnesium sulfate infusion for six hours, and her blood pressure is still 168/108. What does the nurse anticipate?",
            options: ["Increasing the magnesium infusion rate","Documenting this as an expected response to magnesium","Adding a separate antihypertensive such as labetalol","Discontinuing the magnesium infusion"],
            answer: 2,
            rationale: "Magnesium sulfate in preeclampsia is given to PREVENT seizures — not to lower blood pressure. A persistently high pressure calls for a separate antihypertensive (labetalol, hydralazine, nifedipine), not more magnesium.",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient with a history of preeclampsia in her last pregnancy is now 14 weeks pregnant. Which preventive medication does the nurse anticipate?",
            options: ["Low-dose aspirin 81 mg daily","Magnesium sulfate infusion","IV labetalol","Calcium gluconate"],
            answer: 0,
            rationale: "Low-dose aspirin, 81 mg, is standard for anyone at risk for preeclampsia, started between 12 and 28 weeks. Magnesium and labetalol treat active disease, and calcium gluconate is the magnesium antidote.",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient on a magnesium sulfate infusion has an indwelling catheter. Over the last 4 hours the drainage bag collected 100 mL. What should the nurse do?",
            options: ["Nothing — this exceeds the minimum acceptable output","Notify the provider that the output is below the acceptable minimum","Increase the magnesium infusion rate","Recognize this as an expected side effect of magnesium and continue"],
            answer: 1,
            rationale: "100 mL ÷ 4 hr = 25 mL/hr, below the minimum of 30 mL/hr. Magnesium is excreted by the kidneys, so a falling urine output raises the risk of toxicity and must be reported.",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
          },
          {
            stem: "Which findings in a patient receiving magnesium sulfate indicate TOXICITY rather than expected side effects? Select all that apply.",
            options: ["Feeling flushed and warm","Absent deep tendon reflexes","Mild drowsiness","Respiratory rate of 10","Slurred speech and a decreased level of consciousness"],
            answers: [1,3,4],
            rationale: "Toxicity = absent reflexes, a decreased respiratory rate, and decreased LOC/slurred speech; the antidote is IV calcium gluconate. Flushing, warmth, and mild drowsiness are expected at a therapeutic level (4–7).",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient with acute severe hypertension has a heart rate of 128 and no history of asthma. Which order should the nurse question?",
            options: ["IV labetalol","Magnesium sulfate infusion","IV hydralazine","Low-dose aspirin 81 mg"],
            answer: 2,
            rationale: "IV hydralazine (and oral nifedipine) should be avoided in tachycardia. Labetalol would be appropriate here — it is the one avoided in asthma.",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient on a magnesium sulfate infusion has a serum magnesium level of 5.5 mEq/L. She is flushed and mildly drowsy, with 2+ deep tendon reflexes and a respiratory rate of 16. What should the nurse do?",
            options: ["Stop the infusion and give calcium gluconate","Notify the provider that the level is subtherapeutic","Increase the infusion rate","Continue the infusion and keep monitoring"],
            answer: 3,
            rationale: "The therapeutic magnesium range is 4–7, so 5.5 is on target. Flushing, warmth, and mild drowsiness are expected at a therapeutic level. Toxicity would show as absent reflexes, a falling respiratory rate, and a decreased level of consciousness.",
            topic: "Hypertensive Disorders",
            source: "exam-weeks1-4"
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
            options: ["A 26-year-old in her third pregnancy with a family history of preeclampsia","A 30-year-old with well-controlled diabetes in her second pregnancy","A 38-year-old first-time mother with chronic hypertension carrying twins","A 22-year-old primigravida with an otherwise normal history"],
            answer: 2,
            rationale: "Risk factors include chronic hypertension, chronic renal disease, diabetes, Rh incompatibility, a first pregnancy, a family history of preeclampsia, age under 20 or over 40, multiple gestation, IVF, and new paternity. Every patient listed carries at least one risk factor, but they stack: this client has chronic hypertension, a first pregnancy, AND a multiple gestation.",
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
            stem: "A client's sterile vaginal exam is 8 cm / 90% / +1. The nurse identifies this as:",
            options: ["First stage, active phase","First stage, latent phase","Second stage","First stage, transition phase"],
            answer: 3,
            rationale: "8–10 cm is the transition phase of the first stage. Phase within the first stage is judged by dilation (latent 0–3, active 4–7, transition 8–10); the second stage does not begin until 10 cm.",
            topic: "Intrapartum Care I",
            source: "exam-weeks1-4"
          },
          {
            stem: "A multigravida who is 9 cm dilated reports a strong urge to push. What is the nurse's best action?",
            options: ["Coach her to breathe through the contractions until she is fully dilated","Encourage her to push with each contraction","Apply fundal pressure to speed delivery","Position her for immediate delivery"],
            answer: 0,
            rationale: "Never push before 10 cm — pushing on an incomplete cervix can tear it or cause it to swell. Coach breathing until fully dilated.",
            topic: "Intrapartum Care I",
            source: "exam-weeks1-4"
          },
          {
            stem: "During the fourth stage, the nurse palpates a soft, boggy uterus. What is the priority action?",
            options: ["Assess for a full bladder","Increase the oxytocin infusion","Massage the fundus","Notify the provider"],
            answer: 2,
            rationale: "A soft, boggy uterus is uterine atony — the leading cause of postpartum hemorrhage. Massage the fundus first to firm it. A full bladder displaces the fundus upward and to the right but does not itself make it boggy.",
            topic: "Intrapartum Care I",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client presents to triage after four hours of contractions. Which findings indicate TRUE labor rather than false labor? Select all that apply.",
            options: ["Cervical change from 2 cm to 4 cm over two hours","Contractions that grow closer together over time","Contractions that ease after a warm bath and rest","Contractions that become more painful as time passes","Bloody show on the perineal pad"],
            answers: [0,1,3],
            rationale: "In true labor the cervix changes progressively, the contractions become regular and closer together, and they hurt more over time; rest, warmth, and massage do NOT relieve them. Contractions that ease with a warm bath and rest point to false labor. Bloody show is a premonitory sign that the cervix is softening and can occur without labor, so it does not distinguish the two. Progressive cervical change remains the single biggest discriminator.",
            topic: "Intrapartum Care I",
            source: "exam-weeks1-4"
          },
          {
            stem: "On vaginal exam the nurse palpates the fetal occiput in the right anterior quadrant of the maternal pelvis. How should the nurse document the position, and what does it suggest?",
            options: ["ROA — a favorable position; the baby should be born face-down","LOA — a favorable position; the baby should be born face-down","ROP — an unfavorable position associated with intense back labor","RSA — a breech position that usually requires a cesarean birth"],
            answer: 0,
            rationale: "Position is read in three parts: the side of the maternal pelvis (Right), the fetal landmark (Occiput), then the direction (Anterior) — ROA. Find the landmark first. Occiput anterior is the most favorable position and the baby is born face-down; a sacral landmark such as RSA would mean breech.",
            topic: "Intrapartum Care I",
            source: "exam-weeks1-4"
          },
          {
            stem: "A multipara's sterile vaginal exam is documented as 10 cm / 100% / +4. What is the nurse's most appropriate action?",
            options: ["Coach her to avoid pushing until the head is engaged","Reassess her cervix in one hour","Prepare for imminent birth","Notify the provider that the presenting part is still floating"],
            answer: 2,
            rationale: "At +4 the presenting part is 4 cm below the ischial spines and visible at the perineum, so birth is imminent. Engagement is 0 station at the ischial spines, a floating presenting part is a negative station, and +5 is born.",
            topic: "Intrapartum Care I",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client's contractions begin at 10:00, 10:04, and 10:08, each lasting 60 seconds. How should the nurse document the frequency?",
            options: ["Every 4 minutes","Every 3 minutes","Sixty seconds","Every 4 minutes lasting 4 minutes"],
            answer: 0,
            rationale: "Frequency = start of one contraction to the start of the next (in minutes), so 10:00 to 10:04 is every 4 minutes. Start-to-end of the same contraction is the duration (60 seconds).",
            topic: "Intrapartum Care I",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client's placenta delivers eight minutes after the birth. Which action does the nurse anticipate?",
            options: ["Fundal massage only, reserving oxytocin for heavy bleeding","An IV oxytocin bolus given just before the placenta separates","An IV oxytocin bolus, followed by fundal massage","Waiting until the fourth stage to give any uterotonic"],
            answer: 2,
            rationale: "Oxytocin is given as an IV bolus right AFTER the placenta delivers, to decrease blood loss, and fundal massage follows to confirm the uterus stays firm. Giving it before the placenta separates risks trapping the placenta, and waiting for heavy bleeding or for the fourth stage gives up the prevention.",
            topic: "Intrapartum Care I",
            source: "quiz-bank"
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
            stem: "A client's pelvis is described as flat, with a wide but shallow inlet. Which complication does the nurse most anticipate?",
            options: ["The fetus settling into an occiput posterior position","The fetus lying transverse, side to side","Rapid descent through the pelvic outlet","Cephalopelvic disproportion from a narrow arch"],
            answer: 1,
            rationale: "A platypelloid (flat) pelvis is the least common shape, at about 3%. The baby may take longer to get into the pelvis and is more likely to be in a transverse lie. The anthropoid pelvis raises the risk of an occiput posterior position, and the android (male-type) pelvis, with its longer sacrum and narrow arch, is the one linked to cephalopelvic disproportion.",
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
            stem: "During the mechanisms of labor, the fetal head rotates from occiput transverse to occiput anterior. Which movement is the nurse observing?",
            options: ["Descent","Flexion","Internal rotation","Extension"],
            answer: 2,
            rationale: "Internal rotation is the movement in which the fetal head turns from occiput transverse to occiput anterior. Descent is affected by amniotic fluid pressure, contractions, and pushing effort; flexion brings the chin toward the chest so a smaller head diameter presents; and in extension the occiput, then face, then chin deliver.",
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
            stem: "A primigravida at 40 weeks' gestation arrives at the birthing center with abdominal cramping and bloody show. Her membranes ruptured 30 minutes before arrival. A vaginal examination reveals 1 cm of dilation and the presenting part at -1 station. Which action would the nurse take after obtaining the fetal heart rate and maternal vital signs?",
            options: ["Teach the client how to push with each contraction","Provide the client with comfort measures for relaxation","Prepare to have the client's blood typed and cross-matched","Encourage the client to perform patterned, paced breathing"],
            answer: 1,
            rationale: "The client is in early first-stage labor and is experiencing the expected discomforts of labor, so the nurse initiates measures that promote relaxation. Pushing begins in the second stage, there is no evidence of excessive bleeding requiring a transfusion, and patterned paced breathing belongs to the transition phase rather than early labor.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
          {
            stem: "Which is the nurse's first action when a client in active labor starts screaming, \"The baby is coming! Do something!\"?",
            options: ["Notify the practitioner of the imminent birth","Tell the client that it is too soon and encourage her to pant","Check the perineal area for visibility of the presenting part","Help the client hold her knees together and explain what to expect"],
            answer: 2,
            rationale: "The first action is to confirm whether birth is imminent by checking the perineal area for the presenting part; the nurse stays with the client and asks a colleague to call the practitioner. Telling her it is too soon demeans the client and she may well be right, and holding the knees together is contraindicated — it can injure the fetus if birth is imminent.",
            topic: "Intrapartum Care I",
            source: "eaq"
          },
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
            stem: "A laboring client is Group B Strep positive and reports a penicillin allergy. The nurse anticipates which antibiotic for prophylaxis?",
            options: ["Ampicillin","Clindamycin","Gentamicin","Azithromycin"],
            answer: 1,
            rationale: "GBS prophylaxis is penicillin (the drug of choice); if she is penicillin-allergic, clindamycin (900 mg IV every 4 hours until delivery) is used.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A fetal heart rate deceleration lasts 3 minutes. The nurse is most concerned about:",
            options: ["Head compression from fetal descent","A new fetal baseline","A prolapsed umbilical cord or placental abruption","A normal fetal sleep cycle"],
            answer: 2,
            rationale: "A prolonged deceleration lasts at least 2 but less than 10 minutes; at 10 minutes it becomes a new baseline. Think prolapsed cord or abruption and determine the cause. (Early decelerations are the benign head-compression pattern.)",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "An IUPC is in place during an oxytocin induction. Over a 10-minute window the nurse sums the contraction intensities above resting tone and obtains 150 Montevideo units; the resting tone is 12 mm Hg. How should the nurse interpret this?",
            options: ["Contractions are inadequate to dilate the cervix; anticipate titrating the oxytocin up","Contractions are adequate; maintain the current oxytocin rate","This meets the definition of tachysystole; turn the oxytocin off","The resting tone is too high; stop the infusion and reposition her"],
            answer: 0,
            rationale: "Montevideo units are each contraction's peak minus the resting baseline, summed over 10 minutes. Adequate labor needs more than 200 (up to about 300), so 150 is inadequate. A resting tone under 25 mm Hg is normal, and tachysystole is defined by frequency — 6 or more contractions in 10 minutes — not by MVUs.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "The nurse notes a sinusoidal fetal heart rate pattern. What does this finding suggest?",
            options: ["A normal fetal sleep cycle","Maternal fever","Loss of contact between the monitor and the fetal heart","Possible fetal acidosis"],
            answer: 3,
            rationale: "A sinusoidal pattern suggests the fetus may be acidotic and needs to be delivered — notify the provider immediately.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A tracing shows abrupt, sharp decelerations that vary in their timing relative to the contractions. The most likely cause is:",
            options: ["Umbilical cord compression","Head compression","Uteroplacental insufficiency","A fetal sleep cycle"],
            answer: 0,
            rationale: "Abrupt, variably-timed decelerations are VARIABLE decelerations, caused by umbilical cord compression (think nuchal cord). Reposition the mother first.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A fetal baseline is 170 bpm for 12 minutes. What is the nurse's FIRST action?",
            options: ["Apply oxygen by non-rebreather mask","Give an IV fluid bolus","Check the maternal temperature","Reposition the client to her left side"],
            answer: 2,
            rationale: "For fetal tachycardia (>160 for ≥10 min) the first action is to check the maternal temperature — an elevated maternal temp is often reflected in a tachycardic baby.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "Which findings make a fetal heart rate tracing reassuring? Select all that apply.",
            options: ["A baseline of 110-160 bpm","Absent variability","Moderate variability","Occasional decelerations when the baseline and variability are good","Late decelerations of any magnitude","A sinusoidal pattern"],
            answers: [0,2,3],
            rationale: "A reassuring tracing has a baseline of 110-160, moderate (good) variability, and no repetitive decelerations - occasional decels are acceptable when the baseline and variability are good, and a few variables alongside an acceleration and good variability is still reassuring. Variability is the single best indicator of fetal oxygenation. Absent variability, late decelerations of ANY magnitude, and a sinusoidal pattern are all non-reassuring.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A patient with tachysystole is ordered terbutaline. Before giving it, the nurse checks the maternal heart rate and finds it is 124 bpm. What should the nurse do?",
            options: ["Hold the terbutaline","Give the terbutaline as ordered","Give half the ordered dose","Give it after the next contraction ends"],
            answer: 0,
            rationale: "Terbutaline (a tocolytic) raises the maternal heart rate, so it is held if the maternal heart rate is 120 bpm or higher.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A laboring patient is thrashing in pain and the external toco is not registering any contractions. What should the nurse do FIRST?",
            options: ["Medicate her for pain","Palpate the fundus","Readjust the toco belt and continue monitoring","Increase the oxytocin"],
            answer: 1,
            rationale: "If she is thrashing and the toco is not registering, palpate the fundus FIRST to rule out a placental abruption or uterine rupture before readjusting the monitor or medicating.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "The fetus is in the ROA position. Where should the nurse place the fetal heart rate transducer?",
            options: ["Right upper quadrant","Right lower quadrant","Left lower quadrant","Over the umbilicus"],
            answer: 1,
            rationale: "The FHR is heard best over the fetal shoulders/back. ROA = occiput anterior on the mother's right with the head down — so the right lower quadrant.",
            topic: "Intrapartum Care II",
            source: "exam-weeks1-4"
          },
          {
            stem: "A tracing shows the fetal heart rate beginning to fall at the peak of each contraction and not returning to baseline until after the contraction has ended. What does this pattern indicate?",
            options: ["Head compression as the fetus descends","Umbilical cord compression","Uteroplacental insufficiency","An expected response to a strong contraction"],
            answer: 2,
            rationale: "A deceleration that starts around the peak of the contraction and has NOT returned to baseline by the time the contraction ends is a LATE deceleration. In VEAL CHOP, Late pairs with Placental insufficiency - a perfusion problem that always has to be corrected. Early decelerations mirror the contraction and are the benign head-compression pattern, and variables are abrupt and tied to cord compression.",
            topic: "Intrapartum Care II",
            source: "quiz-bank"
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
            stem: "Which immediate action would the nurse take if a client in the active phase of labor says, \"I feel all wet. I think I wet myself.\"?",
            options: ["Give her the bedpan","Change the bed linens","Inspect her perineum","Take an oral temperature"],
            answer: 2,
            rationale: "Inspecting the perineum determines whether the membranes have ruptured and whether the umbilical cord has prolapsed. Giving the bedpan is not a priority, changing the linens is done eventually but is not the priority, and the temperature is taken once rupture has been established.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which complication is prevented by coaching a client in the second stage of labor to take a breath at least every 6 seconds while pushing with each contraction?",
            options: ["Fetal hypoxia","Perineal lacerations","Carpopedal spasms","Maternal hypertension"],
            answer: 0,
            rationale: "Prolonged breath holding at this stage of labor decreases placental and fetal oxygenation, which can lead to fetal hypoxia. Perineal lacerations occur with rapid, uncontrolled expulsion of the fetus; carpopedal spasms and maternal hypertension are not caused by prolonged breath holding.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "The nurse uses Leopold maneuvers to assess a client at 40 weeks' gestation. Which factor is assessed with this maneuver?",
            options: ["Station of the fetus","Position of the fetus","Duration of the contractions","Frequency of the contractions"],
            answer: 1,
            rationale: "Leopold maneuvers identify the position of the fetus: the nurse palpates the abdomen to locate the head, back, and small parts. Station is determined during a vaginal examination, and contraction duration and frequency are timed with a hand on the fundus or read from the electronic monitor.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
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
          },
          {
            stem: "Which information would be reinforced with a new father who is acting as a coach during labor?",
            options: ["Leave the room periodically so that his wife can rest between contractions","Let his wife know the progress she is making and tell her that she is doing a good job","Keep conversation in the birthing room to a minimum so his wife can concentrate","Maintain his wife in the supine position so the monitoring equipment is not disturbed"],
            answer: 1,
            rationale: "Identifying progress and providing encouragement motivate the client and promote a positive self-concept. A client in active labor should have continuous partner support if possible, the amount of conversation depends on the phase of labor, and lying flat on her back may induce supine hypotension — a side-lying position is encouraged and does not disturb the monitors.",
            topic: "Intrapartum Care II",
            source: "eaq"
          },
          {
            stem: "Which is the expected color and consistency of amniotic fluid at 36 weeks’ gestation?",
            options: ["Clear, dark amber colored, and containing shreds of mucus","Straw colored, clear, and containing little white specks","Milky, greenish yellow, and containing shreds of mucus","Greenish yellow, cloudy, and containing little white specks"],
            answer: 1,
            rationale: "By 36 weeks' gestation, amniotic fluid should be pale yellow or straw-colored with small particles of – vernix caseosa present. Dark amber colored fluid suggests the presence of bilirubin, an ominous sign. Greenish-yellow fluid may indicate the presence of meconium and suggests fetal compromise. Cloudy fluid suggests the presence of purulent material.",
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
            stem: "A client is scheduled for an oxytocin induction. Which items must the nurse confirm are complete before the induction begins? Select all that apply.",
            options: ["An epidural already placed","A reactive non-stress test","A sterile vaginal exam with a Bishop score","Signed informed consent","Baseline maternal vital signs"],
            answers: [1,2,3,4],
            rationale: "Before an induction you need a reactive NST, a sterile vaginal exam with a Bishop score, signed consent, and baseline vital signs. An epidural is not required, and a NON-reactive NST would be a reason to hold.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client at 9-10 cm with a strong urge to push asks for IV pain medication. What is the nurse's best response?",
            options: ["Give the full ordered dose right away","Give half the ordered dose","Give it and alert the nursery that the newborn may need support","Withhold it and offer non-pharmacologic comfort measures"],
            answer: 3,
            rationale: "Systemic analgesia crosses the placenta; given close to delivery the medication can cause neonatal respiratory depression. With imminent birth the nurse withholds it and uses non-pharmacologic comfort measures rather than planning around a depressed newborn.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "During a cesarean birth, before delivery, the client's blood pressure drops and the fetal heart rate falls. What is the nurse's first action?",
            options: ["Lay her flat to improve venous return","Ensure a wedge tilts her to the left","Raise the head of the bed","Administer the ordered ephedrine"],
            answer: 1,
            rationale: "Supine positioning lets the uterus compress the vena cava, dropping the blood pressure and fetal perfusion. Tilting her to the left with a wedge under the right hip restores venous return and comes before medicating. (The wedge is removed after the baby is born.)",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client desires a vaginal birth after cesarean (VBAC). Which finding in her records is the priority concern the nurse reports to the provider?",
            options: ["A previous classical (vertical) uterine incision","A previous low-transverse uterine incision","One prior cesarean birth","A Pfannenstiel skin incision"],
            answer: 0,
            rationale: "A classical (vertical) uterine incision carries a high risk of uterine rupture in labor and contraindicates a VBAC — future births should be cesarean. A low-transverse incision is the one that supports a VBAC, and the skin incision does not determine eligibility.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client needs an emergent cesarean birth and her platelet count is 42,000. Which type of anesthesia does the nurse anticipate?",
            options: ["An epidural","A spinal","A pudendal block","General anesthesia"],
            answer: 3,
            rationale: "General anesthesia is reserved for emergent deliveries, a very low platelet count (a spinal or epidural puncture would raise the bleeding and hematoma risk), and cases where a spinal cannot be placed, such as scoliosis rods. Its biggest risks are aspiration and postpartum hemorrhage, so regional anesthesia is preferred whenever possible.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "During an amniotomy the client's membranes rupture and clear fluid escapes. What is the nurse's priority action?",
            options: ["Document the time of rupture","Check the maternal temperature","Assess the fetal heart rate","Palpate the uterus for contractions"],
            answer: 2,
            rationale: "Amniotic fluid cushions the cord; once it is lost the cord can be compressed, so assessing the FHR is the priority. Documenting the time, checking the temperature, and palpating contractions all follow.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A multipara in active labor stops making cervical change after her epidural, and her contractions space out. The provider orders oxytocin. The nurse documents this intervention as:",
            options: ["Labor induction","Cervical ripening","Labor augmentation","Amnioinfusion"],
            answer: 2,
            rationale: "She was already in active labor, so stimulating her stalled contractions is augmentation. Induction is starting labor in someone who is not laboring.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is being prepared for an unscheduled cesarean birth. Which nursing action specifically reduces her risk of aspiration during the procedure?",
            options: ["Placing a wedge to tilt her to the left","Administering famotidine (Pepcid) and metoclopramide (Reglan) IV","Withholding oral intake for 8 hours before the incision","Inserting an indwelling urinary catheter"],
            answer: 1,
            rationale: "A pregnant client is treated as a 'full stomach.' Famotidine and metoclopramide, plus a Bicitra drink, neutralize and reduce stomach acid to lower aspiration risk. The left tilt prevents supine hypotension, not aspiration; an unscheduled cesarean does not allow time for an 8-hour fast; and a urinary catheter has no bearing on aspiration risk.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "Immediately after a forceps-assisted birth, the client's fundus is firm and midline but she has a steady trickle of bright-red blood. What does the nurse suspect first?",
            options: ["A vaginal or cervical laceration","Uterine atony","Retained placental fragments","A full bladder"],
            answer: 0,
            rationale: "Bright-red bleeding with a firm, well-contracted fundus points to a laceration — a known risk of instrument deliveries — rather than atony, which causes a boggy fundus.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client who has been induced with oxytocin for two days becomes confused and lethargic and begins vomiting. What is the nurse's priority action?",
            options: ["Increase the IV maintenance fluids","Reposition her to the left side","Stop the oxytocin infusion","Recheck her cervical dilation"],
            answer: 2,
            rationale: "Prolonged high-dose oxytocin has an antidiuretic-like effect and can cause water intoxication (acute hyponatremia) — confusion, lethargy, and vomiting. Stop the oxytocin first, then give normal saline and furosemide as ordered; adding more maintenance fluid would worsen it.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is receiving an amnioinfusion for repetitive variable decelerations. The nurse notes the peri-pad has stayed dry and the uterine resting tone is climbing. What should the nurse do?",
            options: ["Continue and document a normal finding","Increase the infusion rate","Stop the amnioinfusion","Place the client in high Fowler's"],
            answer: 2,
            rationale: "Fluid going in must come back out. A dry pad with a rising resting tone means fluid is being trapped — stop the infusion immediately to avoid over-distending or rupturing the uterus.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client received misoprostol (Cytotec) for cervical ripening two hours ago. The provider now orders oxytocin. What is the nurse's best action?",
            options: ["Begin the oxytocin now at 2 milliunits/min","Begin the oxytocin after another 30 minutes","Begin the oxytocin once she is contracting every 5 minutes","Wait until at least 4 hours have passed since the misoprostol dose"],
            answer: 3,
            rationale: "Oxytocin should not be started within 4 hours of a misoprostol dose — together they can overstimulate the uterus and cause tachysystole.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "The provider asks the nurse to obtain a Bishop score before starting an induction. Which assessments does the nurse need to complete?",
            options: ["Cervical dilatation, effacement, position, and consistency, plus fetal station","Cervical dilatation, effacement, and consistency, plus contraction frequency and duration","Fetal station, lie, presentation, and attitude, plus cervical dilatation","Cervical dilatation and effacement, plus maternal vital signs and the fetal heart rate baseline"],
            answer: 0,
            rationale: "The Bishop score has five components — four cervical (dilatation, effacement, position, consistency) and one fetal (station). The higher the score the more likely a vaginal birth; 8 or higher is favorable, about the same odds as someone already in spontaneous labor.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A newborn was delivered with vacuum assistance. Which finding does the nurse expect on assessment?",
            options: ["Transient facial nerve paralysis","A fractured clavicle","Bulging fontanelles","Reddened swelling on the scalp"],
            answer: 3,
            rationale: "A vacuum cup is placed on the fetal occiput, so the reddened, swollen area of the scalp marks where it was applied. That bruising raises the bilirubin, so jaundice is a risk to monitor. Facial nerve palsy is a forceps injury; the baby must already be low before a vacuum is used.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "The provider strips (sweeps) a client's membranes at her 39-week visit. How does the nurse explain the way this promotes labor?",
            options: ["It releases oxytocin from the posterior pituitary","It ruptures the amniotic sac","It releases prostaglandins","It softens the cervix with pressure from a balloon"],
            answer: 2,
            rationale: "Separating the amniotic membrane from the lower uterine segment releases prostaglandins (not oxytocin), which stimulate contractions. Only an OB, nurse midwife, or NP performs it; it is often uncomfortable and may cause a little vaginal bleeding afterward.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "After an epidural, a client's systolic blood pressure falls to 92 mm Hg and a late deceleration appears. Which action should the nurse take FIRST?",
            options: ["Slow the IV infusion rate","Turn the client to a side-lying position","Notify the anesthesia provider","Prepare for an emergency cesarean birth"],
            answer: 1,
            rationale: "Post-anesthesia hypotension with a late deceleration is treated first by turning her to a side-lying position to relieve vena cava compression, followed by an IV fluid bolus, ephedrine, and oxygen. Slowing the IV would worsen the hypotension — the bolus, not less fluid, is what restores her pressure. Notifying the provider and preparing for cesarean are premature before trying repositioning and fluid.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "During an oxytocin induction the nurse counts 7 contractions in a 10-minute window with a rising resting tone, and the fetus develops late decelerations. What is the priority action?",
            options: ["Turn off the oxytocin infusion","Decrease the oxytocin by half and reassess","Administer the ordered terbutaline","Apply oxygen and continue the infusion"],
            answer: 0,
            rationale: "Six or more contractions in 10 minutes is tachysystole; with late decels the baby is not tolerating it. Turning the oxytocin OFF is the priority — it is the cause. Terbutaline and oxygen may follow, but not while the cause is still infusing.",
            topic: "Artificial Management of Labor",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is about to receive an epidural, and the nurse hangs 1,000 mL of warmed lactated Ringer's to infuse before the block is placed. Which complication is this intended to prevent?",
            options: ["A post-dural-puncture headache","Intravascular injection of the anesthetic","Maternal hypotension after the block","Urinary retention after the block"],
            answer: 2,
            rationale: "Warmed lactated Ringer's or normal saline (1,000-1,500 mL) is given BEFORE a spinal or epidural because hypotension is the most common side effect of the block, and the added volume supports her circulation. A wet tap causes the post-dural-puncture headache, a test dose is what detects intravascular injection, and urinary retention is managed with a bladder catheter.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client at 6 cm requests IV pain medication. Her contractions are every 3 minutes, her vital signs are stable, and the fetal tracing shows a baseline of 145 bpm with absent variability and recurrent late decelerations. What is the nurse's best action?",
            options: ["Give the medication, since her labor pattern is well established","Withhold the medication and report the tracing to the provider","Give half the ordered dose to limit fetal exposure","Give the medication and alert the nursery to possible neonatal depression"],
            answer: 1,
            rationale: "Before systemic analgesia is given, the baby should have a baseline of 110-160, a reactive non-stress test, and moderate variability - a non-reassuring strip is a contraindication. Absent variability with recurrent late decelerations is a Category III tracing, which has to be reported and acted on rather than medicated around. Halving or timing the dose does not make an abnormal tracing safe.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "A client's labor has stalled and the external toco is not picking up her contractions adequately. The provider performs an amniotomy. Which purpose does this serve for this client?",
            options: ["It confirms the fetal position","It allows an internal monitor to be placed","It establishes her Bishop score","It prevents compression of the umbilical cord"],
            answer: 1,
            rationale: "An amniotomy is used to induce labor, to augment labor, and to allow internal monitoring - a fetal scalp electrode or intrauterine pressure catheter can only be placed once the membranes are ruptured, which is what this client needs. It does not confirm position or establish a Bishop score, and losing the fluid cushion RAISES the risk of cord compression, which is why the fetal heart rate is checked as soon as the membranes rupture.",
            topic: "Artificial Management of Labor",
            source: "quiz-bank"
          },
          {
            stem: "Misoprostol (Cytotec) is ordered for a client. In which situation is this medication appropriate?",
            options: ["To ripen the cervix while an oxytocin infusion is running","To control bleeding after the placenta has delivered","To stop preterm contractions as a tocolytic","To reverse magnesium sulfate toxicity"],
            answer: 1,
            rationale: "Misoprostol is a prostaglandin given vaginally to ripen the cervix and stimulate contractions, and it is also given AFTER delivery to control bleeding - never with a baby still in utero for that purpose. It must not run at the same time as oxytocin; wait at least 4 hours after the last misoprostol dose. It is not a tocolytic, and calcium gluconate is the magnesium antidote.",
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
            stem: "A client's labor has slowed to fewer than 2 contractions in 10 minutes with little cervical change. Which assessment finding best explains this pattern?",
            options: ["The fetus is in a transverse lie","The client is 34 years old","The client is at 39 weeks' gestation","The amniotic fluid index is 12 cm"],
            answer: 0,
            rationale: "A dysfunctional (hypotonic) labor pattern is linked to an abnormal fetal presentation — a transverse lie keeps the presenting part from pressing on the cervix. Maternal age itself is not associated, and the gestational age and AFI listed are both normal.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client at 32 weeks arrives with bright-red, painless vaginal bleeding. Which action is contraindicated?",
            options: ["Applying an external fetal monitor","Performing a sterile vaginal exam","Obtaining a transabdominal ultrasound","Establishing large-bore IV access"],
            answer: 1,
            rationale: "Painless, bright-red bleeding suggests a placenta previa, and a vaginal exam could puncture the placenta and cause severe hemorrhage. Confirm the placenta's location by ultrasound instead; external monitoring and IV access are appropriate.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client in preterm labor is started on nifedipine as a tocolytic. Before giving a dose, the nurse should hold the medication and notify the provider if:",
            options: ["The maternal heart rate is 118 bpm","The client reports mild flushing","The systolic blood pressure is less than 90 mm Hg","The client has 2+ deep tendon reflexes"],
            answer: 2,
            rationale: "Nifedipine relaxes uterine smooth muscle but also lowers blood pressure. Because this client is not hypertensive, hold the dose if the systolic pressure drops below 90. The 120-bpm hold parameter belongs to terbutaline, and 2+ reflexes are normal.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is discharged home after a cerclage for cervical insufficiency. Which statement shows she understood the discharge teaching?",
            options: ["\"I'll be on strict bed rest until delivery.\"","\"I'll need a cesarean because of the stitch.\"","\"I'll take antibiotics for the rest of my pregnancy.\"","\"I'll call my provider if I have uterine cramping or low back pain.\""],
            answer: 3,
            rationale: "After a cerclage she should report cramping, low back pain, pelvic pressure, discharge changes, or bleeding. Strict bed rest, a mandatory cesarean, and lifelong antibiotics are all incorrect.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client's membranes ruptured 20 hours ago. Which assessment is the nurse's priority?",
            options: ["Maternal temperature","Maternal blood pressure","Deep tendon reflexes","Urine protein"],
            answer: 0,
            rationale: "Once membranes have been ruptured longer than 18 hours the protective barrier is gone and infection is the priority concern — hence frequent temperature checks and often prophylactic antibiotics.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is admitted with vaginal bleeding, and the team is trying to distinguish placenta previa from placental abruption. Which assessment finding best differentiates the two?",
            options: ["The volume of bleeding on the pad","The presence and character of abdominal pain","The fetal heart rate baseline","The hemoglobin and hematocrit"],
            answer: 1,
            rationale: "Abdominal pain is the key differentiator: an abruption is painful with a firm, tender, board-like uterus, whereas a previa is classically painless bleeding with a soft uterus. Bleeding volume is misleading, because an abruption can conceal blood behind the placenta.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "Thirty-five minutes after birth the placenta still has not delivered. In the operating room the provider reports that it has invaded the uterine muscle but has not perforated through it. Which term describes this finding?",
            options: ["Placenta accreta","Placenta percreta","Placenta increta","Placenta previa"],
            answer: 2,
            rationale: "Accreta attaches to the myometrium, increta invades into it, and percreta perforates through it — the deeper the invasion, the greater the hemorrhage risk. Previa is an implantation problem over the cervical os, not an adherence problem. A placenta undelivered at 30 minutes is retained, carrying hemorrhage and infection risk.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is now at 42 3/7 weeks' gestation. Which fetal risk does the nurse most anticipate?",
            options: ["Polyhydramnios","Surfactant deficiency","Erythroblastosis fetalis","Decreased placental perfusion"],
            answer: 3,
            rationale: "Past 42 weeks the aging placenta perfuses the fetus less well, raising the risk of fetal compromise, macrosomia or SGA, and meconium-stained fluid — with OLIGOhydramnios, not polyhydramnios. Surfactant deficiency is a preterm problem.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client is admitted for delivery of a fetus that died in utero. Which nursing action best supports her and her family?",
            options: ["Ask her what she would like — such as holding the baby, mementos, or where to recover","Move her immediately to a unit far from the maternity floor","Reassure her that she can have another baby","Limit her time with the infant to protect her from grief"],
            answer: 0,
            rationale: "Individualized, patient-led care is best: ask what she wants (holding the baby, pictures, a memory box, where to recover). Do not assume or minimize the loss. In Kentucky, KODA is notified of any death.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "After the fetal head delivers, the provider reports a shoulder dystocia. Which action does the nurse anticipate first?",
            options: ["Apply fundal pressure","Assist the client to flex her hips and bring both knees toward her chest","Prepare for an immediate cesarean birth","Prepare for a forceps-assisted delivery"],
            answer: 1,
            rationale: "Flexing the hips and bringing the knees toward the chest is the McRoberts maneuver, which (with suprapubic pressure) frees the trapped shoulder. Fundal pressure is contraindicated — it only jams the shoulder harder against the pubic bone.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A client with preterm premature rupture of membranes at 30 weeks receives the first dose of betamethasone. Which statement best reflects the nurse's understanding of this order?",
            options: ["The medication will stop her contractions","The medication is repeated every 6 hours until she delivers","Delivery should be avoided for at least 48 hours if possible","The medication is only indicated after 34 weeks"],
            answer: 2,
            rationale: "Betamethasone triggers surfactant release to accelerate fetal lung maturity. It is given under about 34 weeks, and the goal is to avoid delivery within 48 hours of the first dose so it has time to work.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "An ultrasound reports an amniotic fluid index (AFI) of 3 cm. The nurse monitors the fetus most closely for:",
            options: ["Macrosomia","Preterm labor from uterine overdistention","Malpresentation from excess fluid","Cord compression and pulmonary hypoplasia"],
            answer: 3,
            rationale: "A normal AFI is 5-25 cm; an AFI of 3 is oligohydramnios. Too little fluid risks cord compression and pulmonary hypoplasia (the fetus needs to breathe in fluid for the lungs to develop), along with renal and skeletal problems. Overdistention and malpresentation are polyhydramnios problems.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "During a vaginal exam the nurse feels a pulsating umbilical cord ahead of the presenting part. What is the nurse's FIRST action?",
            options: ["Lift the presenting part off the cord with the gloved hand","Place the client in Trendelenburg position","Apply oxygen by face mask","Notify the provider and prepare for a cesarean"],
            answer: 0,
            rationale: "With a prolapsed cord the priority is to immediately relieve the compression by lifting the presenting part off the cord with the gloved hand. Trendelenburg, oxygen, notifying the provider, and preparing for cesarean all follow — and the hand stays in place until delivery.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "Forty minutes after birth the placenta has not delivered, gentle cord traction has been unsuccessful, and bleeding is increasing. What does the nurse anticipate next?",
            options: ["Continued fundal massage for another 30 minutes","Manual removal of the placenta by the provider","Ambulating the client to encourage separation","Administering an additional uterotonic to expel the placenta"],
            answer: 1,
            rationale: "The placenta should deliver within 30 minutes; beyond that, a retained placenta raises the risk of hemorrhage and infection and may require manual removal (and possibly a transfusion). Abnormal adherence — accreta, increta, percreta — should also be considered.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
          },
          {
            stem: "A laboring client suddenly develops chest pain, dyspnea, hypotension, and frothy sputum shortly after her membranes rupture. Which findings support a diagnosis of amniotic fluid embolism? Select all that apply.",
            options: ["Chest pain","Hypertension","Dyspnea","Frothy sputum","Hypotension"],
            answers: [0,2,3,4],
            rationale: "Amniotic fluid embolism strikes the respiratory and cardiovascular systems: chest pain, dyspnea, frothy sputum, and HYPOtension. Care is to support the cardiovascular and respiratory systems, and to displace the uterus if CPR is needed.",
            topic: "Intrapartum Complications",
            source: "exam-weeks1-4"
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
            stem: "A client elects to have her pregnancy terminated at 16 weeks' gestation after learning that she is carrying a fetus with Down syndrome. Which factor would the nurse consider in the plan of care at this time?",
            options: ["The client will need counseling because of emotional instability","The high risk for a postabortion infection should be discussed with the client","A hysterotomy will be performed to accomplish the abortion","The client should be given time to discuss her feelings about the decision"],
            answer: 3,
            rationale: "The client must feel comfortable enough to discuss her feelings; this helps her in the grieving process. Concluding that she is emotionally unstable is a false assumption, an induced abortion is a sterile procedure that should not predispose her to infection, and a second-trimester abortion is usually accomplished by dilation and evacuation rather than a hysterotomy.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "Which postpartum complication would the nurse monitor for in a client with hydramnios?",
            options: ["Infection","Hemorrhage","Hypertension","Thromboembolism"],
            answer: 1,
            rationale: "A client with hydramnios is at risk for hemorrhage in the postpartum period, because the overdistended uterus does not contract down well. Infection, hypertension, and thromboembolism are not specific risk factors related to hydramnios.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "Which is the most appropriate nursing intervention for a client admitted to the high-risk prenatal unit at 35 weeks' gestation with a diagnosis of complete placenta previa?",
            options: ["Applying a pad to the perineal area","Having oxygen available at the bedside","Allowing bathroom privileges with assistance","Educating the client regarding the intensive care nursery"],
            answer: 1,
            rationale: "If hemorrhage occurs, oxygen is necessary to prevent maternal and fetal compromise. A perineal pad is not necessary — close monitoring is; a client with a complete previa is usually on complete bed rest; and discussing the neonatal intensive care nursery is premature, since it may ultimately be unnecessary.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "Which is the priority nursing care focus for a client at 34 weeks' gestation with contractions every 5 minutes and cervical dilation of 4 cm?",
            options: ["Promoting maternal and fetal well-being during labor","Reducing the anxiety associated with preterm labor","Supporting communication between the client and her partner","Assisting the client and her partner with breathing techniques as labor progresses"],
            answer: 0,
            rationale: "Promoting client and fetal well-being is the priority nursing care focus as labor progresses. Reducing anxiety, supporting communication, and assisting with breathing techniques are each a single aspect of this client's need, whereas promoting maternal and fetal well-being describes the overall priority.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "A client who recently was told by her primary health care provider that she has extensive terminal metastatic carcinoma of the breast tells the nurse that she believes an error has been made. She states that she does not have breast cancer, and she is not going to die. Which stage of death and dying is the client experiencing?",
            options: ["Anger","Denial","Bargaining","Acceptance"],
            answer: 1,
            rationale: "The client has difficulty accepting the inevitability of death and is attempting to deny it. In the anger stage the client strikes out with \"Why me?\" and \"How could God do this?\" types of statements. The client is angry at life and still angrier to be removed from it by death. In the bargaining stage the client tries to bargain for more time. The reality of death is no longer denied, but the client attempts to manipulate and extend the remaining time. In the acceptance stage the client accepts the inevitability of death and peacefully awaits it.",
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
          },
          {
            stem: "A pregnant client is admitted with abdominal pain and heavy vaginal bleeding. Which is the immediate nursing action?",
            options: ["Establish intravenous access","Elevate the head of the bed","Position the client laterally to the left","Administer an intramuscular analgesic"],
            answer: 0,
            rationale: "Abdominal pain and heavy vaginal bleeding indicate significant blood loss. Establishing intravenous access is essential to provide care for this patient who may need a blood transfusion, surgery, and IV fluids. Elevating the head of the bed will decrease blood flow to vital centers in the brain. The client should be placed in the left lateral position following the establishment of adequate IV access. Giving an intramuscular analgesic may mask abdominal pain and sedate an already compromised fetus. Delivery via cesarean section is likely.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "A client at 36 weeks’ gestation presents with severe abdominal pain, heavy vaginal bleeding, a drop in blood pressure, and an increased pulse rate. Which complication of pregnancy is suggested by these signs and symptoms?",
            options: ["Hydatidiform mole","Vena cava syndrome","Marginal placenta previa","Abruptio placentae"],
            answer: 3,
            rationale: "Severe pain accompanied by bleeding at term or close to it is symptomatic of complete premature detachment of the placenta (abruptio placentae). A hydatidiform mole is diagnosed before 36 weeks’ gestation; it is not accompanied by severe pain. There is no bleeding with vena cava syndrome. Bleeding caused by placenta previa should not be painful.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "Which is suspected when a client at 37 weeks’ gestation experiences a sudden sharp pain in her abdomen with a period of fetal hyperactivity followed by fundal tenderness and a small amount of dark-red bleeding?",
            options: ["True labor","Placenta previa","Partial abruptio placentae","Abdominal muscular injury"],
            answer: 2,
            rationale: "Typical manifestations of abruptio placentae are sudden sharp localized pain and small amounts of dark-red bleeding caused by some degree of placental separation. True labor begins with regular contractions, not sharp localized pain. There is no pain with placenta previa, just the presence of bright-red bleeding. There are no data to indicate that the client sustained an injury.",
            topic: "Intrapartum Complications",
            source: "eaq"
          },
          {
            stem: "For which complication would the nurse closely monitor a client with a diagnosis of abruptio placentae?",
            options: ["Cerebral hemorrhage","Pulmonary edema","Impending seizures","Hypovolemic shock"],
            answer: 3,
            rationale: "With abruptio placentae, uterine bleeding can result in massive internal hemorrhage, causing hypovolemic shock. A cerebral hemorrhage may occur with a dangerously high blood pressure; there is no information indicating the presence of a dangerously high blood pressure. Pulmonary edema may occur with severe preeclampsia or heart disease, and seizures are associated with severe preeclampsia; there is no information indicating the presence of these conditions.",
            topic: "Intrapartum Complications",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "week5postpartum",
      label: "Postpartum Care & Complications",
      week: 5,
      sets: {
        mustKnow: [],
        extraPractice: [],
        eaq: [
          {
            stem: "A client who has just given birth is holding her newborn and asks, \"Is my baby normal?\" Which response would the nurse provide?",
            options: ["\"The pediatrician will make rounds in the morning and check your baby.\"","\"Your baby must be all right; listen to that strong cry.\"","\"Let's unwrap your baby so you can see for yourself.\"","\"Yes, because your entire pregnancy has been so normal.\""],
            answer: 2,
            rationale: "Mothers need to explore their infants visually and tactilely to assure themselves that the infant is healthy. Waiting for the pediatrician would prolong her worry, a strong cry alone does not indicate a healthy newborn, and the normalcy of the pregnancy does not necessarily correlate with the newborn's health.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "A client who had a cesarean birth is unable to void 3 hours after removal of an indwelling catheter. How would the nurse evaluate the client for bladder distention?",
            options: ["By catheterizing the client for residual urine","By palpating the client's suprapubic area gently","By asking the client whether she still feels the urge to urinate","By determining whether the client is experiencing suprapubic pain"],
            answer: 1,
            rationale: "Palpation indicates whether bladder distention is present, and assessment is done before intervention. The increased intra-abdominal space available after birth allows distention without discomfort, and trauma to the area leaves surrounding organs atonic, so the client may have a full bladder and not feel the urge to void.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which intervention would the nurse recommend for post-cesarean gas pain?",
            options: ["Lying on the right side","Walking around the room","Using a straw when drinking water","Supporting the incision when moving"],
            answer: 1,
            rationale: "Walking around as much as possible can help expel excess gas after a cesarean birth. The client also may be advised to lie on the left (not right) side and rock in a rocking chair. The client should avoid using a straw when drinking water or other fluids. Supporting the incision when moving relieves incisional pain, but does not promote expulsion of gas.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which statement by a new mother observing her preterm infant in the neonatal intensive care nursery indicates that she has not yet begun the bonding process?",
            options: ["\"It’s such a tiny baby.\"","\"Do you think he’ll make it?\"","\"Why does he need to be in an incubator?\"","\"My baby looks so much like my husband.\""],
            answer: 0,
            rationale: "By failing to acknowledge the infant as a person, the client is demonstrating that she is still trying to process the current situation as reality. Acknowledging the infant by using the word \"he\" denotes a relationship. Saying that the baby looks like her husband indicates that the mother has incorporated the infant into the family.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which statement by a breast-feeding mother indicates that the nurse’s teaching regarding stimulating the let-down reflex has been successful?",
            options: ["\"I will take a cool shower before each feeding.\"","\"I will drink a couple of quarts of fat-free milk a day.\"","\"I will wear a snug-fitting breast binder day and night.\"","\"I will apply warm packs and massage my breasts before each feeding.\""],
            answer: 3,
            rationale: "Applying warm packs and massaging the breasts before each feeding help dilate milk ducts, promote emptying of the breasts, and stimulate further lactation. Taking a cool shower before each feeding will contract the milk ducts and interfere with the let-down reflex. Heavy consumption of milk products is not required to stimulate the production of milk. Breast binders may inhibit lactation by fooling the body into thinking that milk secretion is no longer needed.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which response would the nurse give to a postpartum client who asks if she can drink a small glass of wine before breast-feeding the first time to help her relax?",
            options: ["\"I think drinking 1 glass of wine won’t be a problem. Go ahead.\"","\"You seem a little tense. Tell me how you feel about breast-feeding.\"","\"You seem to find it relaxing, but you should try to find another way to relax.\"","\"I think drinking 1 glass of wine is alright, but you had better check with your health care provider first.\""],
            answer: 1,
            rationale: "Stating that the client seems tense and initiating a discussion honors the client’s feelings and encourages expression of them; there is no reference to alcohol consumption and its relaxing effects. Alcohol ingestion should not be encouraged, because it enters the breast milk. Stating that the client needs to find another way to relax reflects the client’s statement but not her underlying feelings. Suggesting that she find another way to relax may make the client defensive and shut off communication. Although alcohol ingestion should not be encouraged because it enters breast milk, the primary health care provider need not be involved because health education is within the role of the nurse.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which assessment would the nurse include in the plan of care for a postpartum client with large, painful varicose veins?",
            options: ["Monitoring daily clotting times","Assessing for peripheral pulses","Monitoring daily hemoglobin values","Assessing for signs of thrombophlebitis"],
            answer: 3,
            rationale: "Varicose veins predispose the client to thrombophlebitis; warmth, redness, and pain in the calf are signs of thrombophlebitis. The clotting mechanism is not affected; clot formation results because of venous pooling and decreased venous return caused by the impaired vasculature. The problem is venous, not arterial, so pulses are not affected. Hemoglobin values are affected by the amount of bleeding that occurred during the birth, which usually is not severe enough to impair circulatory competency.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which type of lochia would the nurse expect to observe on a client's menstrual pad on the second day after a vaginal delivery?",
            options: ["Scant alba","Scant rubra","Moderate rubra","Moderate serosa"],
            answer: 2,
            rationale: "The uterus sloughs off the blood, tissue, and mucus of the endometrium postdelivery. This happens in 3 stages that will vary in length and represent the normal healing of the endometrium. Lochia rubra is the first and heaviest stage of lochia. The blood that is expelled during lochia rubra will be bright red and may contain blood clots. The lochia rubra phase typically lasts for about 3 days but may last up to 7 days. On the second day postpartum, the amount of lochia rubra is typically moderate, as the heaviest flow occurs in the first few days following delivery. Lochia serosa is the second stage of postpartum bleeding and is thinner in consistency and brownish or pink in color. Lochia serosa typically lasts about 2 weeks, although for some women it can last up to 4 to 6 weeks postpartum.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "A breast-feeding mother experiences redness and pain in the left breast, a temperature of 100.8°F 38.2 ( °C), chills, and malaise. Which condition would the nurse suspect?",
            options: ["Mastitis","Engorgement","Blocked milk duct","Inadequate milk production"],
            answer: 0,
            rationale: "Because of the presence of generalized symptoms, the nurse would suspect mastitis. Engorgement would involve both breasts, not one. A blocked milk duct is usually marked by swelling and pain in one area of the breast but does not have systemic symptoms. There is no indication of the volume of milk being produced.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Several hours after delivery, a new mother expresses ambivalence regarding her infant. How will the nurse promote bonding between this mother and her newborn?",
            options: ["Having the mother feed the infant","Removing the infant from the mother's arms if it cries","Positioning the infant so its head rests on the mother's shoulder","Encouraging the mother to sleep for 4 to 6 hours before interacting with the infant"],
            answer: 0,
            rationale: "Feeding the infant promotes bonding through physical interaction, and positioning the infant in a face-to-face position facilitates eye contact. Removing the infant decreases the pair's time together. Positioning the infant on the mother's shoulder prevents the face-to-face contact that promotes bonding. It is important to have the parent and infant interact as soon as possible after birth to promote bonding.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which client is at increased risk for postpartum hemorrhage?",
            options: ["One who breast-feeds in the birthing room","One who receives a pudendal block for the birth","One whose third stage lasts less than 10 minutes","One who gives birth to an infant weighing 9 lb 8 oz (4366 g)"],
            answer: 3,
            rationale: "The risk for a postpartum hemorrhage is greater with large infants, because the uterine musculature has been stretched excessively, thus impairing the ability of the uterus to contract after the birth. Early breast-feeding stimulates uterine contractions and lessens the chance of hemorrhage. Having a pudendal block for the birth does not contribute to the risk for postpartum hemorrhage, because the anesthetic for a pudendal block does not affect uterine contractions. A third stage of labor lasting less than 10 minutes is a short third stage; a prolonged third stage of labor, 30 minutes or longer, could increase the risk of postpartum hemorrhage.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "Which information would the nurse include in the discharge teaching of a postpartum client?",
            options: ["The prenatal Kegel tightening exercises should be continued.","A bowel movement may not occur for up to a week after the birth.","The episiotomy sutures will be removed at the first postpartum visit.","A postpartum checkup should be scheduled as soon as menses returns."],
            answer: 0,
            rationale: "Kegel exercises may be resumed immediately and should be done for the rest of the client's life because they help strengthen muscles needed for urinary continence and may enhance sexual intercourse. Episiotomy sutures do not have to be removed. Bowel movements should spontaneously return in 2 to 3 days after the client gives birth; a delay of bowel movements promotes constipation, perineal discomfort, and trauma. The usual postpartum examination is 6 weeks after birth; the menses may return earlier or later than this and should not be a factor when the client is scheduling a postpartum examination.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          },
          {
            stem: "The nurse is teaching participants in a prenatal class regarding breast-feeding versus formula feeding. A client asks, \"What is the primary advantage of breast-feeding?\" Which response is most appropriate?",
            options: ["\"Breast-fed infants have fewer infections.\"","\"Breast-feeding inhibits ovulation in the mother.\"","\"Breast-fed infants adhere more easily to a feeding schedule.\"","\"Breast-feeding provides more protein than cow's milk formula does.\""],
            answer: 0,
            rationale: "Maternal antibodies are transferred from the mother in breast milk, providing protection for a longer time than do antibodies transferred to the fetus by way of the placenta. The neonate is protected by the antibodies and thus has fewer infections. The fetus' own antibody system is immature at birth. Women who breast-feed completely (day and night with no supplementary feedings) may avoid ovulation and resumption of the menstrual cycle. Use of formula or solid foods decreases breast-feeding frequency and can lead to ovulation. Ovulation generally occurs before menses, making it difficult to know when the menstrual cycle is resuming. Therefore, breast-feeding is considered one of the least reliable methods of contraception for the new mother. Because of the higher carbohydrate content of breast milk, which is digested rapidly, breast-fed infants wake more frequently than formula-fed infants. Their feeding demands take more time to regulate than do the formula-fed infants'. Breast milk has 1.1 g protein/100 mL; cow's milk has 3.5 g/100 mL. Whole cow's milk is unsuitable for infants.",
            topic: "Postpartum Care & Complications",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "week6newborn1",
      label: "Newborn Assessment & Care I",
      week: 6,
      sets: {
        mustKnow: [],
        extraPractice: [],
        eaq: [
          {
            stem: "Which sign in the newborn infant would reflect an Apgar score of 1 in the category of respiration?",
            options: ["Spontaneous respirations","Grimace","Absent respiration","Weak cry"],
            answer: 3,
            rationale: "A slow, weak cry would be scored as a 1 in the category of respiration in the Apgar scoring system. Spontaneous respirations with strong, lusty cry would receive a score of 2. A grimace is a sign that is evaluated in the category of reflex irritability, not respiration. Absent respiration would receive a score of 0 in the respiration category of the Apgar score system.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "Immediately after birth, a newborn is dried before being placed in skin-to-skin contact with the mother. Which type of heat loss would this intervention prevent?",
            options: ["Radiation","Convection","Conduction","Evaporation"],
            answer: 3,
            rationale: "Evaporative heat loss is a result of the conversion of moisture into vapor, which is avoided when the newborn is dried. Radiation is the loss of heat to colder solid surfaces that are not in direct contact. Convective heat loss is a result of contact of the exposed skin with cooler surrounding air currents. Conductive heat loss is a result of direct skin contact with a cold solid object.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "Which finding is indicative of hypothermia in a newborn?",
            options: ["Seizures","Diaphoresis","Flushed skin","Hypoglycemia"],
            answer: 3,
            rationale: "Hypoglycemia in a newborn can indicate hypothermia or cold stress. Seizures, diaphoresis, and flushed skin are indicative of hyperthermia.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "A client has delivered her infant by cesarean birth. The nurse monitors the newborn’s respiration closely, because infants born via the cesarean method are prone to atelectasis. Why does this occur?",
            options: ["The ribcage is not compressed and released during birth.","The sudden temperature change at birth causes aspiration.","There is usually oxygen deprivation after a cesarean birth.","There is no gravity during the birth to promote drainage from the lungs."],
            answer: 0,
            rationale: "The release after compression of the chest during a vaginal birth is the mechanism for expansion of the newborn’s lungs; because this does not occur during a cesarean birth, lung expansion may be incomplete, and atelectasis may result. Temperature change is not implicated in aspiration. The infant is monitored closely to prevent oxygen deprivation. The newborn’s head may be held lower than the chest to allow gravity to promote drainage from the lungs after a cesarean birth.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "Which condition would the nurse document when a newborn infant is noted to have small, flat pink spots on the nape of the neck?",
            options: ["Nevi","Desquamation","Mongolian spots","Erythema toxicum"],
            answer: 0,
            rationale: "Nevi, described as small, flat pink spots, are the result of a superficial capillary defect and are most commonly found on the upper eyelids, nose, upper lip, and nape of the neck. Desquamation is peeling skin that occurs a few days after birth. Mongolian spots are bluish-black areas of pigmentation. Erythema toxicum is a transient rash that appears 24 to 72 hours after birth that can last up to 3 weeks of age.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "Which characteristic would the nurse anticipate in an infant born at 32 weeks’ gestation?",
            options: ["Barely visible areolae and nipples","Ear pinnae that spring back when folded","Definite creases of the infant’s palms and soles","A zero-degree angle on the square window sign"],
            answer: 0,
            rationale: "Breast tissue is not palpable in a newborn of less than 33 weeks’ gestation. The ear pinnae spring back in an infant at 36 weeks’ gestation. Creases of the palms and soles are not clearly defined until after the 37th week of gestation. A zero-degree square window sign is present in an infant at 40 to 42 weeks’ gestation.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "When calculating the Apgar score for a newborn, which would the nurse assess in addition to the heart rate?",
            options: ["Muscle tone","Amount of mucus","Degree of head lag","Depth of respirations"],
            answer: 0,
            rationale: "The five areas that are assessed when the Apgar score is calculated are heart rate, respiratory effort, muscle tone, reflex irritability, and color. The rate of respirations, not the depth, is assessed for an Apgar score. Amount of mucus, degree of head lag, and depth of respirations are not tested for an Apgar score.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "After the birth of a neonate, a parent asks, \"What is that white substance over the baby’s body?\" How would the nurse respond?",
            options: ["\"It’s a fungal infection called thrush.\"","\"It’s unexpected, and it’s called milia.\"","\"It’s expected, and it’s called vernix caseosa.\"","\"It’s a group of capillaries called telangiectatic nevi.\""],
            answer: 2,
            rationale: "Vernix caseosa, a cheeselike substance that protects the skin, is secreted by the fetus’s skin toward the end of pregnancy. Thrush is an oral fungal infection caused by Candida albicans; usually it is acquired during the birth process. Milia are distended tiny sweat (eccrine) glands that look like whiteheads on the infant’s nose; they disappear without special care. Telangiectatic nevi (stork bites, capillary hemangiomas) are pinkish-red, easily blanched spots that may appear on the upper eyelids, nose, upper lip, lower occiput, and nape of the neck; they have no clinical significance and fade between the first and second years of age.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "The nurse is differentiating between cephalhematoma and caput succedaneum. Which finding is unique to caput succedaneum?",
            options: ["Edema that crosses the suture line","Scalp tenderness over the affected area","Edema that increases during the first day","Scalp over the area becomes ecchymosed"],
            answer: 0,
            rationale: "Edema that crosses the suture line is the sign that differentiates these two conditions; cephalhematoma does not extend beyond the suture line. Pain or tenderness is not associated with either condition. Edema that increases during the first day of life is unusual; it should shrink. Bruising may occur with either condition.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "Which is the most important parameter for the nurse to monitor during the first 24 hours after the birth of an infant at 36 weeks’ gestation?",
            options: ["Duration of cry","Respiratory distress","Frequency of voiding","Poor nutritional intake"],
            answer: 1,
            rationale: "Respiratory distress is a common response in the preterm infant, related to possible immaturity of the newborn’s respiratory tract, manifesting as a small lumen, weakness of the respiratory musculature, paucity of functional alveoli, or insufficient calcification of the bony thorax. The tone of the cry is more pertinent than its duration. Frequency of voiding is not the priority because the newborn’s intake is limited during the first 24 hours. If the infant is in respiratory distress, the nutritional intake is not important.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "Which is the most common complication for which the nurse must monitor preterm infants?",
            options: ["Hemorrhage","Brain damage","Respiratory distress","Aspiration of mucus"],
            answer: 2,
            rationale: "Immaturity of the respiratory tract in preterm infants is evidenced by a lack of functional alveoli, smaller lumina with increased possibility of collapse of the respiratory passages, weakness of respiratory musculature, and insufficient calcification of the bony thorax, leading to respiratory distress. Hemorrhage is not a common occurrence at the time of birth unless trauma has occurred. Brain damage is not a primary concern unless severe hypoxia occurred during labor; it is difficult to diagnose at this time. Aspiration of mucus may be a problem, but generally the air passageway is suctioned as needed.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "While assessing a newborn suspected of having Trisomy 21 (Down syndrome), which would the nurse expect to note as part of the findings?",
            options: ["Long, thin fingers","Large, protruding ears","Hypertonic neck muscles","A single crease across each palm"],
            answer: 3,
            rationale: "A single crease across the palm of each hand, a characteristic finding in newborns with Down syndrome, is known as a simian crease. Stubby fingers, not long, slim fingers, are commonly found in newborns with Down syndrome. Small ears, not large, protruding ears, are commonly found in newborns with Down syndrome. Newborns with Down syndrome have hypotonic, not hypertonic, muscles.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "An infant is admitted to the nursery after a shoulder dystocia vaginal delivery. For which condition would the nurse assess the newborn?",
            options: ["Facial paralysis","Cephalohematoma","Brachial plexus injury","Spinal cord syndrome"],
            answer: 2,
            rationale: "Brachial plexus injury (Erb-Duchenne palsy) is the most common injury associated with shoulder dystocia; it is caused by pressure and traction on the brachial plexus during the birth process. The newborn’s face is not normally affected following shoulder dystocia. Cephalohematoma is a soft-tissue injury of the head and is not related to shoulder dystocia. A cephalohematoma may occur in any birth. Spinal cord syndrome is associated with a breech presentation and is not related to shoulder dystocia.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          },
          {
            stem: "The parent of a preterm infant asks the nurse in the neonatal intensive care unit why the baby is in a bed with a radiant warmer. How would the nurse explain the increased risk for hypothermia in preterm infants?",
            options: ["Have a smaller body surface area than full-term newborns","Lack the subcutaneous fat that usually provides insulation","Perspire excessively, causing a constant loss of body heat","Have a limited ability to produce antibodies against infections"],
            answer: 1,
            rationale: "Much of a full-term infant’s birth weight (almost a third) is gained during the last month of gestation, and most of this final spurt is related to an increase in subcutaneous fat, which serves as insulation; the preterm infant did not have enough time to grow in the uterus and has little of this insulating layer. The preterm infant has a relatively larger surface area per body weight than does a term infant. Preterm infants do not shiver or perspire. Depressed antibody production is unrelated to maintenance of body temperature.",
            topic: "Newborn Assessment & Care I",
            source: "eaq"
          }
        ]
      }
    },
    {
      id: "week6newborn2",
      label: "Newborn Assessment & Care II",
      week: 6,
      sets: {
        mustKnow: [],
        extraPractice: [],
        eaq: [
          {
            stem: "Which major group of substances in human milk are of special importance to the newborn and cannot be reproduced in a bottle formula?",
            options: ["Amino acids","Gamma globulins","Essential electrolytes","Complex carbohydrates"],
            answer: 1,
            rationale: "The gamma globulin antibodies in human milk provide the infant with immunity against all or most of the pathogens that the mother has encountered. Amino acids and essential electrolytes are present in commercial formulas. Complex carbohydrates are not required by the infant.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "Which situation is correlated with a positive Babinski sign in a newborn infant?",
            options: ["Hypoxia during labor","Neurological injury during birth","Hyperreflexia of the muscular system","Immaturity of the central nervous system (CNS)"],
            answer: 3,
            rationale: "Stimulation of the newborn’s immature neuromuscular system causes dorsiflexion of the big toe and fanning of the remaining toes ( Babinski sign). CNS damage resulting from hypoxia may manifest as a lack of Babinski sign. The newborn would not elicit the Babinski reflex if there were neurological injury during birth. Hyperreflexia is an abnormal increase in reflexes; it is not related to the Babinski reflex.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "Which intervention will be delayed until the newborn is 36 to 48 hours old?",
            options: ["Vitamin K injection","Test for blood glucose level","Screening for phenylketonuria","Test for necrotizing enterocolitis"],
            answer: 2,
            rationale: "In 36 to 48 hours the newborn will have ingested an ample amount of the amino acid phenylalanine, which, if not metabolized because of a lack of a specific liver enzyme, can result in excessive levels of phenylalanine in the bloodstream and brain, resulting in cognitive impairment; early detection is essential to prevent this. The infant will have a vitamin K injection soon after birth to prevent bleeding problems. Blood is withdrawn from the heel soon after birth to test for hypoglycemia. Necrotizing enterocolitis is a disorder that can affect preterm infants. It is not identified with the use of a test.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "Which method of swaddling could cause risk for injury?",
            options: ["Knees flexed","Arms flexed","Legs extended","Arms extended"],
            answer: 2,
            rationale: "Swaddling an infant tightly with the legs extended is associated with an increased risk for hip dislocation. The correct way to swaddle an infant is with the hips in slight flexion and abducted and allowing for freedom of movement of the knees. Swaddling the infant with the arms either flexed or extended does not place the newborn at risk for injury.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "A full-term infant who is large for gestational age (LGA) should be monitored for which risk?",
            options: ["Hypotension","Hypothermia","Hypocalcemia","Hypoglycemia"],
            answer: 3,
            rationale: "Infants that are LGA are considered at risk for hypoglycemia, and their glucose should be monitored following a protocol. LGA infants are not at an increased risk for hypotension, hypothermia, or hypocalcemia.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "Which part of the newborn’s foot is the best site to use to obtain blood for the required newborn metabolic testing?",
            options: ["Big toe","Foot pad","Inner sole","Outer heel"],
            answer: 3,
            rationale: "The outer heel is the preferred site to obtain blood because it is well perfused and heals quickly. The big toe, foot pad, and inner sole are all inappropriate sites from which to obtain a blood specimen from a newborn.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "Which factor contributes to the development of physiological jaundice in a newborn?",
            options: ["Immature liver function","An inability to synthesize bile","An increased maternal hemoglobin level","A high hemoglobin and low hematocrit level"],
            answer: 0,
            rationale: "Jaundice occurs because of the expected physiological breakdown of fetal red blood cells and the inability of the newborn’s immature liver to conjugate the resulting bilirubin. Conjugation and excretion, not synthesis of bile, are compromised because of the immature liver. The mother’s hemoglobin level is unrelated to the newborn’s; the mother and the fetus had separate circulations. Newborns usually have high hemoglobin and high hematocrit levels.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "The nurse notes that a healthy newborn is lying in the supine position with the head turned to the side with the legs and arms extended on the same side and flexed on the opposite side. Which reflex would the nurse document?",
            options: ["Moro","Babinski","Tonic neck","Palmar grasp"],
            answer: 2,
            rationale: "The tonic neck reflex (fencing position) is a spontaneous postural reflex of the newborn that is present until the third month. The Moro reflex is exhibited when a sudden change in equilibrium causes extension and abduction of the extremities followed by flexion and adduction. The Babinski reflex is exhibited when the examiner runs a finger up the lateral (small toe side) undersurface of the foot from the heel to the toes and then across the ball of the foot; the toes separate and flare out in response. The palmar grasp reflex is exhibited when the fingers flex around a person’s finger placed in the infant’s palm.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "The nurse in the clinic determines that a 4-day-old neonate who was born at home has purulent discharge from the eyes. Which condition would the nurse suspect?",
            options: ["Chlamydia trachomatis infection","Human immunodeficiency virus (HIV) infection","Retinopathy of prematurity (retrolental fibroplasia)","A reaction to the ophthalmic antibiotic instilled after birth"],
            answer: 0,
            rationale: "Chlamydia trachomatis infection occurs 3 to 4 days after birth; if it is not treated prophylactically with an antibiotic at birth or within 3 days, chronic follicular conjunctivitis with conjunctival scarring will occur. HIV infection in the newborn does not manifest with conjunctivitis. The high oxygen concentrations given to severely compromised preterm infants cause vasoconstriction of retinal capillaries, which can lead to blindness; there are no data to indicate that this infant was preterm (so this is not retinopathy of prematurity), severely compromised, or received oxygen. A chemical conjunctivitis occurs within the first 48 hours and is not purulent. The antibiotic instilled at birth would have prevented the infection, not caused it.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "How would the nurse best explain the probable cause of jaundice to the parents of a 3-day-old newborn?",
            options: ["An allergic response to the feedings","The body is slow to get rid of the fetal red blood cells that have been destroyed","A temporary bile duct obstruction commonly found in newborns","The seepage of maternal Rh-negative blood into the neonate’s bloodstream"],
            answer: 1,
            rationale: "After birth, fetal erythrocytes hemolyze, releasing bilirubin into the circulation; the immature liver cannot metabolize the bilirubin as rapidly as it is produced, resulting in physiological jaundice. Jaundice is not an allergic response; it is a physiological destruction of fetal red blood cells. Bile duct obstruction, which is not common in newborns, is not the cause of the jaundice. The newborn and mother have independent circulations, and Rh-negative blood does not enter the fetus’s bloodstream. A problem may occur if the mother is sensitized, because her antibodies can enter the fetal circulation.",
            topic: "Newborn Assessment & Care II",
            source: "eaq"
          },
          {
            stem: "How would the nurse screen the newborn of a diabetic mother for hypoglycemia?",
            options: ["Testing for glucose tolerance","Drawing arterial blood for glucose evaluation","Arranging for a fasting blood glucose determination","Testing heel blood with the use of a glucose-oxidase strip"],
            answer: 3,
            rationale: "Glucose-oxidase strips are used by nurses to screen infants for hypoglycemia. The glucose tolerance test and serum glucose determination using arterial blood are not used to screen newborns for hypoglycemia. Fasting blood glucose levels are not used routinely to screen newborns for hypoglycemia.",
            topic: "Newborn Assessment & Care II",
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
            stem: "Which action provides support for the fetal head as it is being delivered?",
            options: ["Applying suprapubic pressure","Placing a hand firmly against the perineum","Distributing the fingers evenly around the head","Maintaining pressure against the anterior fontanel"],
            answer: 2,
            rationale: "Distributing the fingers around the head prevents a rapid change in intracranial pressure and keeps the head from 'popping out,' which could cause maternal perineal trauma. Suprapubic pressure does not aid birth of the head, a hand held firmly against the perineum may interfere with the birth, and pressure against the anterior fontanel could injure the neonate.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which instruction would the nurse provide to a client who would like to learn breast self-examination?",
            options: ["Squeeze the nipples to examine for discharge","Use the right hand to examine the right breast","Perform the examination while in a seated position","Compress breast tissue to the chest wall with the palm to palpate for lumps"],
            answer: 0,
            rationale: "Serous or bloody discharge from the nipple is pathological and must be reported. The right hand should examine the LEFT breast, so the flattened fingers can palpate the entire breast including the tail and axillary area; the examination is best performed lying down; and the flat part of the fingers, not the palm or fingertips, is used for palpation.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which disadvantage of the diaphragm for birth control would be emphasized to a client receiving instruction about family planning methods?",
            options: ["Its failure rate is 50% when it is used alone","It is physically uncomfortable when in place","Thrombus formation and pulmonary emboli may occur","Some women find its insertion and removal inconvenient"],
            answer: 3,
            rationale: "Insertion and removal of a diaphragm take some planning, and some women find that inconvenient. The typical failure rate is about 12% in the first year when it is used with spermicide, it should not be uncomfortable when in place, and thrombus formation and pulmonary emboli are adverse effects of oral contraceptives rather than of the diaphragm.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which factor reassures the nurse that a married 35-year-old client scheduled to undergo a tubal ligation understands and is emotionally ready for the procedure?",
            options: ["The client has a son and a daughter and feels that her family is complete","She believes that the surgery will relieve her monthly dysmenorrhea","The client knows that her husband does not want any more children","She has just had a complicated birth and never wants to give birth again"],
            answer: 0,
            rationale: "Many couples who are happy with their families and feel complete choose sterilization as their method of contraception. Tubal ligation has no effect on dysmenorrhea because the hormonal influence does not change, the decision should be made by the woman herself rather than by others, and decisions about sterilization should not be made in the immediate postpartum period after a traumatic birth.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which content would the nurse emphasize in a prepared childbirth class?",
            options: ["Birth as a family experience","Labor without the use of analgesics","The course of labor and coping techniques","Hydration, relaxation, and pain control during labor"],
            answer: 2,
            rationale: "The objective of childbirth classes is to educate parents about the process of labor and birth, the options open to them, and techniques for coping. Birth as a family experience, and hydration/relaxation/pain control, are each only part of the class content, and labor without analgesics is not every woman's preference — a fair and balanced presentation is given.",
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
            stem: "A client has just given birth to an infant with Down syndrome. The mother is crying and asks the nurse what she is supposed to do now. Which response would the nurse give?",
            options: ["\"Tell me what you know about Down syndrome.\"","\"I would just continue to rest and recover from your delivery.\"","\"You really need to pull yourself together for your baby.\"","- \"Should I call in a chaplain or social worker for you?\""],
            answer: 0,
            rationale: "Asking the client what she knows about Down syndrome is an open-ended question that will facilitate teaching and open dialogue. Telling the client to just recover is not addressing the client's emotional adjustment. Chastising the client for emotional expression will block further dialogue. A chaplain or social worker is not needed at this moment but could potentially be used later.",
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
          },
          {
            stem: "The nurse teaches a new mother how to position her newborn during feedings. Which is the best way to evaluate if the teaching is effective?",
            options: ["Develop a basic teaching plan.","Ask the mother if she understands.","Observe the mother feeding the infant.","Determine the mother’s readiness to learn."],
            answer: 2,
            rationale: "A return demonstration can confirm that the desired learning from earlier teaching has taken place. Developing a teaching plan is part of the planning of the nursing process, not evaluating. A return demonstration is a more effective way of evaluating than asking the mother if she understands. Determining the mother’s readiness to learn is part of planning in the nursing process, not evaluating.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which finding in a newborn is a behavioral response to pain?",
            options: ["Crying","Tachypnea","Diaphoresis","Tachycardia"],
            answer: 0,
            rationale: "Crying is a behavioral response. Tachypnea, diaphoresis, and tachycardia are physiological responses to pain.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which stool finding would the nurse anticipate in a breastfed neonate?",
            options: ["Mustard yellow in color","Light brown in color","Firm consistency","Smooth consistency"],
            answer: 0,
            rationale: "The breastfed neonate would have a mustard yellow stool with a seedy, pasty consistency. Bottle-fed infants typically have stool that is pale yellow to light brown in color and firm, smooth consistency.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which finding is indicative of abnormal newborn breathing?",
            options: ["Stridor","Pallor","Bradypnea","Nasal flaring","Expiratory grunting"],
            answers: [0,1,2,3,4],
            rationale: "Findings indicative of abnormal breathing in newborns include stridor, pallor, bradypnea, nasal flaring, and expiratory grunting.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which is a gastrointestinal manifestation of infection in the newborn?",
            options: ["Lethargy","Irritability","Nasal flaring","Glucose instability"],
            answer: 3,
            rationale: "Glucose instability is a gastrointestinal manifestation of newborn infection. Lethargy and irritability are central nervous systems changes associated with infection. Nasal flaring is a respiratory manifestation of infection.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which adverse effect would the nurse monitor for after administering vitamin K to a newborn?",
            options: ["Bronchospasm","Elevation in liver enzymes","Jaundice","Dyspnea","Hemolysis"],
            answers: [0,1,2,3,4],
            rationale: "After administering vitamin K to a newborn, the nurse would monitor for bronchospasm because parenteral vitamin K can rarely cause hypersensitivity or anaphylactoid reactions that lead to airway constriction and wheezing. Elevation in liver enzymes may occur because vitamin K is metabolized by the liver and newborns have immature hepatic function, which can result in temporary stress to the liver. Jaundice is a potential adverse effect due to increased bilirubin levels in newborns whose livers are not fully developed. Dyspnea may develop as part of an allergic or anaphylactic reaction, requiring close observation of respiratory status. Hemolysis, although rare with vitamin K, can occur and may lead to both anemia and increased bilirubin levels.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "The nurse is reviewing the laboratory report of a newborn whose hematocrit level is 45%. Which value denotes a healthy infant?",
            options: ["Less than 40%","More than 75%","Between 45% and 65%","Between 65% and 75%"],
            answer: 2,
            rationale: "The expected hematocrit level for a healthy newborn is between 45% and 65%. Less than 40% is below the expected level and is considered anemia. More than 75% is high and is considered polycythemia. Between 65% and 75% is above the expected range.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Where would the nurse find the area of involvement associated with parietal swelling?",
            options: ["Over the eyes","Behind the ears","At the back of the head","On the top of the skull"],
            answer: 3,
            rationale: "The parietal areas behind the frontal bone form the top surfaces of the cranial cavity. A swelling in one of these areas that does not cross the suture line is a cephalhematoma. The frontal area is the area over the eyes. The temporal area is the area behind the ears. The occipital area is the area at the back of the head.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "The practice of separating parents from their newborn immediately after birth and limiting their time with the infant during the first few days after delivery contradicts studies related to which?",
            options: ["Early rooming-in","Taking-in behaviors","Taking-hold behaviors","Parent-child attachment"],
            answer: 3,
            rationale: "There is a sensitive period in the first minutes or hours after birth during which it is important for later interpersonal development that the parents have close contact with their newborn. Rooming-in may not be instituted immediately after birth. Taking-in is a maternal psychological behavior described by Reva Rubin that occurs during the first 2 postpartum days. Taking-hold is a maternal psychological behavior described by Rubin that occurs after the third postpartum day.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "The nurse is assessing a newborn with exstrophy of the bladder. Which other defect is often associated with exstrophy of the bladder and may be of concern to the nurse?",
            options: ["Absence of one kidney","Congenital heart disease","Pubic bone malformation","Tracheoesophageal fistula"],
            answer: 2,
            rationale: "Incomplete formation of the pubic bone is often associated with exstrophy of the bladder. Absence of one kidney, congenital heart disease, and tracheoesophageal fistula are not associated with exstrophy of the bladder.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Although the newborn was just cleaned and examined, the mother notes a red rash consisting of small papules on the face, chest, and back of the newborn. Which condition would the nurse recognize?",
            options: ["Harlequin sign","Vernix caseosa","Nevus flammeus","Erythema toxicum"],
            answer: 3,
            rationale: "Erythema toxicum is a benign, generalized, transient rash that is a reaction to the new environment in which a neonate finds itself. It disappears a short time after birth. It is not the harlequin sign, which is dilation of blood vessels on one side of the body resulting in red skin on one side and white skin on the other. It is not vernix caseosa, which is a thick, white, greasy substance that protects the skin in utero. It is not nevus flammeus, or port wine stain, which is a reddish-purple capillary angioma below the dermis.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which is a risk factor of necrotizing enterocolitis in the preterm infant?",
            options: ["Polycythemia","Hypoglycemia","Ventilatory support","Antibiotic administration"],
            answer: 0,
            rationale: "Necrotizing enterocolitis (NEC) is an acute inflammatory disease of the GI mucosa, commonly complicated by bowel necrosis and perforation. Polycythemia places the preterm infant at risk for necrotizing enterocolitis. Hypoglycemia and ventilatory support are not risk factors associated with necrotizing enterocolitis. Gut infections can lead to NEC, but the use of antibiotics does not.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which is prevented by providing warm, humidified oxygen to a preterm infant?",
            options: ["Apnea","Cold stress","Respiratory distress","Bronchopulmonary dysplasia"],
            answer: 1,
            rationale: "By warming and humidifying oxygen, the nurse will prevent cold stress and drying of the mucosa. Apnea and bronchopulmonary dysplasia are not associated with the administration of oxygen that is not warmed or humidified. Respiratory distress can develop in a preterm infant as a result of the cold stress.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Why should the use of baby powder on an infant be avoided?",
            options: ["Skin irritation","Skin infection","Lung irritation","Respiratory infection"],
            answer: 2,
            rationale: "The use of baby powder or cornstarch should be avoided on an infant because it is associated with lung irritation. The use of baby powder or cornstarch is not directly associated with skin irritation or with skin or respiratory infections.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "While teaching a new mother ways to decrease the risk of infection for the newborn, which type of immunity would the nurse explain was transferred to her baby through the placenta?",
            options: ["Active natural","Passive natural","Active artificial","Passive artificial"],
            answer: 1,
            rationale: "Passive natural immunity is developed from an antigen-antibody response in the mother that is transmitted to the fetus. Active natural immunity is acquired by an individual in response to a disease or an infection. Active artificial immunity is acquired by an individual in response to small amounts of antigenic material (e.g., vaccination). Passive artificial immunity is conferred by the injection of antibodies prepared in another host.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which reason would the nurse provide to a new mother about neonatal weight loss in the first 3 days of life?",
            options: ["An allergy to formula","A hypoglycemic response","Ineffective feeding techniques","Excretion of accumulated excess fluids"],
            answer: 3,
            rationale: "Early weight loss occurs because excess fluid is lost, not body mass. Weight loss is expected; there are no data to support an allergic response. Weight loss is not related to hypoglycemia. Neither breast-feeding nor formula feeding will prevent the 7% to 10% weight loss that is expected in the first few days of life.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which condition is a risk factor that may place infants at a higher risk for developing jaundice?",
            options: ["Infection","African-American race","Prematurity","Breast-feeding","Formula feeding","Maternal diabetes"],
            answers: [0,2,3,5],
            rationale: "Infants are at a higher risk of jaundice if they have an infection, are born prematurely, are exclusively breastfed, or if their mothers have diabetes. Newborns with a genetic predisposition to increased bilirubin production or delayed metabolism — including those of Middle Eastern, Mediterranean, Arabian Peninsula, Sub-Saharan African, and Southeast Asian descent — have a higher risk of developing jaundice than African-American newborns. African American infants are generally considered at the lowest risk for developing neonatal hyperbilirubinemia (newborn jaundice) compared to other racial groups. Infants who are formula-fed do not develop jaundice as often as breastfed infants.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "The nurse is monitoring the newborn of a diabetic mother for tremors, periods of apnea, cyanosis, and poor suckling ability. With which complication are these manifestations associated?",
            options: ["Hypoglycemia","Hypercalcemia","Central nervous system edema","Congenital depression of the islets of Langerhans"],
            answer: 0,
            rationale: "The pancreas of a fetus of a diabetic mother responds to the mother’s hyperglycemia by secreting large amounts of insulin; this leads to hypoglycemia after birth. Hypoglycemic manifestations are tremors, periods of apnea, cyanosis, and poor suckling ability. Hypocalcemia, not hypercalcemia, occurs in hypoglycemia. Edema may be generalized in hypoglycemia, not specific to the central nervous system. In response to the increased glucose received from the mother, the islets of Langerhans in the fetus may become hypertrophied; these cells are not congenitally depressed.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "An infant is born with a bilateral cleft palate. Plans are made to begin reconstruction immediately. Which nursing intervention would be included to promote parent-infant attachment?",
            options: ["Demonstrating positive acceptance of the infant","Placing the infant in a nursery away from view of the general public","Explaining to the parents that the infant will look normal after the surgery","Encouraging the parents to limit contact with the infant until after the surgery"],
            answer: 0,
            rationale: "By demonstrating acceptance of the infant, without regard for the defect, the nurse acts as a role model for the parents, thereby encouraging their acceptance. Infants with cleft palates can remain in the newborn nursery; they should not be hidden. Telling the parents that the child will look normal after surgery is false reassurance; it does not promote parent-infant attachment behaviors. Encouraging the parents to limit contact will delay attachment; the parents should be encouraged to have frequent contact with their infant.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "A new mother with class II heart disease tells the nurse that she is afraid that her heart condition will prevent her from caring for her baby at home when she is discharged. How would the nurse respond?",
            options: ["Suggesting that the client arrange for help at home","Asking the client to describe her concerns more fully","Telling the client to speak to her primary health care provider about her concerns","Recommending that the client schedule times when family members can assist her"],
            answer: 1,
            rationale: "Information-seeking by asking is the first step in problem-solving. Suggesting that the client arrange for help at home is presumptuous and possibly too expensive. The nurse would not make decisions for the client. Telling her to speak to her primary health care provider shifts the responsibility to the primary health care provider; the nurse would explore the client’s concerns. Recommending that she schedule times when family members can assist her is presumptuous, because it assumes that the family is willing and able to help.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "The primary health care provider tells a mother that her newborn has multiple visible birth defects. The mother seems composed and asks to see her baby. Which nursing action will be most helpful in easing the mother’s stress when she sees her child for the first time?",
            options: ["Bringing the infant as requested before she changes her mind","Describing how the infant looks before bringing the infant to her","Staying with her after bringing the infant to help her verbalize her feelings","Showing the mother pictures of the birth defects, then bringing the infant to her"],
            answer: 2,
            rationale: "Allowing the client time to verbalize her feelings and staying with her when she sees the infant for the first time are measures that will provide support, acceptance, and understanding. Bringing the infant to the mother as requested does not allow the mother adequate time to prepare to see her infant. Anomalies are difficult to describe accurately in words, especially when the mother has not been given time to express her feelings. Showing pictures may not be helpful, and discussion of treatment is premature.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "Which is included in the care of a newborn infant whose mother has had untreated syphilis since the second trimester of pregnancy?",
            options: ["Examining for a cleft palate","Testing for congenital syphilis","Assessing the infant for muscle hypotonicity","Inspecting the soles for maculopapular lesions"],
            answer: 1,
            rationale: "Because physical signs of congenital syphilis are difficult to detect at birth, the infant should be tested immediately to determine whether treatment is necessary. Cleft palate is a congenital defect that occurs in the first trimester; Treponema pallidum does not affect a fetus before the sixteenth week of gestation. Muscle hypotonicity is found in children with Down syndrome, not those with congenital syphilis. Maculopapular lesions of the soles do not manifest in the infant with congenital syphilis until about 3 months of age.",
            topic: "Other EAQ Questions",
            source: "eaq"
          },
          {
            stem: "How would the nurse suction a term neonate choking on mucus using a bulb syringe?",
            options: ["By suctioning the mouth before the nostrils","By applying oxygen and then suctioning the pharynx","By positioning the bulb far into the throat before beginning suctioning","By placing the bulb in the mouth, compressing the bulb, and starting suctioning"],
            answer: 0,
            rationale: "The mouth is suctioned before the nostrils because if the nostrils are suctioned first a reflex gasp may be stimulated, resulting in aspiration of mucus from the mouth. The newborn will be unable to inhale oxygen or even breathe if the nose and throat are occluded with mucus. Placing the bulb too far into the mouth may cause trauma or reflex bradycardia. The bulb should be compressed before it is placed in the newborn’s mouth; timing of bulb compression is essential, or mucus may be forced farther into the throat.",
            topic: "Other EAQ Questions",
            source: "eaq"
          }
        ]
      }
    }
  ]
};
