const questions = [
  {
    q: "Tezlikning SI tizimidagi birligi qanday?",
    o: ["km/soat", "m/s²", "m/s", "N"],
    a: 2
  },
  {
    q: "Tezlanish ifodasini toping",
    o: ["F=ma", "a=Δv/Δt", "g=S/t", "S=v₀t+at²/2"],
    a: 1
  },
  {
    q: "Notekis harakatda tezlik ifodasini aniqlang",
    o: ["v=v₀+at", "v=S/t", "v=at", "v=ds/dt"],
    a: 3
  },
  {
    q: "Tekis tezlanuvchan harakatda yo'l formulasini toping.",
    o: ["S=v₀t+at²/2", "v=s/t", "S=vt", "S=at²/2"],
    a: 0
  },
  {
    q: "Tezlik ifodasini toping",
    o: ["F=ma", "a=Δv/Δt", "v=s/t", "S=v₀t+at²/2"],
    a: 2
  },
  {
    q: "Jismning tezligi vaqtga bog'liq holda qanday o'lchanadi?",
    o: ["Jismning holatiga bog'liq", "Masofa va vaqt nisbatiga ko'ra", "Jismning og'irligiga qarab", "Havo qarshiligiga ko'ra"],
    a: 1
  },
  {
    q: "To'g'ri chiziqli tekis harakatda tezlik qanday o'zgaradi?",
    o: ["To'xtaydi", "Har xil", "Sekinlashadi", "Doim bir xil miqdorda"],
    a: 3
  },
  {
    q: "Erkin tushayotgan jismning tezlanishi qanday o'zgaradi?",
    o: ["O'zgarmas", "Sekinlashadi", "Tezlashadi", "Tushmaydi"],
    a: 0
  },
  {
    q: "Harakat trayektoriyasi nimani ifodalaydi?",
    o: ["Faqat boshlang'ich holatini", "Jismning qoldirgan izi", "Jismning og'irlik markazini", "Havo qarshiligini"],
    a: 1
  },
  {
    q: "Agar tezlik o'zgarmasa, harakat qanday nomlanadi?",
    o: ["Bir hil tezlanishli", "Aylanma", "Bir hil tezlikli", "To'xtovsiz"],
    a: 2
  },
  {
    q: "O'zgarmas tezlik bilan harakat qilayotgan jismning yo'li qanday hisoblanadi?",
    o: ["S=at²/2", "S=vt", "S=ω/t", "S=mg"],
    a: 1
  },
  {
    q: "Jismning tezligi qanday holatda nol bo'ladi?",
    o: ["Harakat boshlanishida", "Sekinlashganda", "Harakatda", "Harakat oxirida"],
    a: 3
  },
  {
    q: "Yo'nalishga ega bo'lmagan kattaliklar qaysilar?",
    o: ["Massa, vaqt", "Tezlik", "Yo'l", "Tezlanish"],
    a: 0
  },
  {
    q: "Jism erkin tushganda tezlanish qanday belgilanadi?",
    o: ["m", "v", "g", "S"],
    a: 2
  },
  {
    q: "Tezligi bir hil bo'lgan jism qanday yo'l bosadi?",
    o: ["O'zgaruvchan", "O'zgarmas", "Chiziqli", "Kvadratik"],
    a: 1
  },
  {
    q: "Jism tezligini o'zgartirgan kamaytirgan holda harakat qilganda nima yuz beradi?",
    o: ["Tezlanadi", "Sekinlashadi", "Harakat to'xtaydi", "Siljish nolga teng bo'ladi"],
    a: 1
  },
  {
    q: "Jismning trayektoriyasi to'g'ri chiziq bo'lsa, harakat qanday?",
    o: ["Egri chiziqli", "To'g'ri chiziqli", "Aylanma", "To'xtagan"],
    a: 1
  },
  {
    q: "Yo'l vaqtga qanday bog'liq?",
    o: ["Kvadratik", "Doimiy", "Chiziqli", "O'zgaruvchan"],
    a: 2
  },
  {
    q: "Jismning holati qanday kattalik bilan belgilanadi?",
    o: ["Tezlik", "Tezlanish", "Radius", "Koordinata"],
    a: 3
  },
  {
    q: "Harakat davomida tezlik nolga teng bo'lsa, jism qanday holatda bo'ladi?",
    o: ["Harakatda", "Tinch xolatda", "Sekinlashadi", "Tezlanadi"],
    a: 1
  },
  {
    q: "Yo'l va ko'chishning umumiy xususiyati nimada?",
    o: ["O'lchov birligida", "Yo'nalishda", "Bosib o'tilgan masofada", "Faqat vaqtga bog'liq"],
    a: 0
  },
  {
    q: "Erkin tushish tezlanishining qiymati qanday?",
    o: ["g=10 m/s²", "g=8.9 m/s²", "g=9.8 m/s²", "g=7.8 m/s²"],
    a: 2
  },
  {
    q: "Aylanma harakatda burchak tezlik qanday hisoblanadi?",
    o: ["m=v/r", "ω=φ/t", "ω=r/v", "ω=g*t"],
    a: 1
  },
  {
    q: "Tekis tezlanuvchan harakatda oxirgi tezlik qanday topiladi?",
    o: ["v=S/t", "v=gt", "v=v₀+at", "v=a/S"],
    a: 2
  },
  {
    q: "To'liq aylanishning burchak tezligi qanday hisoblanadi?",
    o: ["ω=rv", "ω=2π/T", "ω=v/r", "ω=tθ"],
    a: 1
  },
  {
    q: "Aylanma harakatda markazga intilma tezlanish qanday topiladi?",
    o: ["a=v²/r", "a=gt", "a=r/v²", "a=ωr"],
    a: 0
  },
  {
    q: "To'g'ri chiziqli tekis tezlanuvchan harakat tengkamasi qaysi?",
    o: ["x=vt", "x=x₀+v₀t+(1/2)at²", "x=gt²", "x=at"],
    a: 1
  },
  {
    q: "Doimiy tezlikka ega jismning o'rtacha tezligi qanday hisoblanadi?",
    o: ["v=at", "v=gt", "v=S/a", "v=S_um/t_um"],
    a: 3
  },
  {
    q: "Jismning aylanish chastotasi qanday hisoblanadi?",
    o: ["f=1/T", "f=T/1", "f=v/r", "f=ω/T"],
    a: 0
  },
  {
    q: "O'zgarmas tezlikli harakatda vaqt qanday topiladi?",
    o: ["t=v/S", "t=S/v", "t=a*v", "t=g/S"],
    a: 1
  },
  {
    q: "2 m/s tezlik bilan harakat qilayotgan jismning 5 sekunddagi masofasi qancha?",
    o: ["5 m", "15 m", "10 m", "20 m"],
    a: 2
  },
  {
    q: "Koptok 2 m balandlikdan qo'yib yuborildi, yerga urilib qaytgandan so'ng 1.5 m balandlikda tutib olindi. Koptokning yo'li va ko'chishi moduli nimaga teng?",
    o: ["S=0.5; L=3.5", "S=2; L=3.5", "S=3.5; L=0.5", "S=0.5; L=3.5"],
    a: 2
  },
  {
    q: "Odam diametri 1 km bo'lgan ko'l atrofini aylanib chiqdi. Uning yo'li va ko'chishini toping.",
    o: ["S=1500m; L=1000m", "S=3140m; L=0m", "S=1570m; L=0m", "S=1000m; L=1570m"],
    a: 1
  },
  {
    q: "Sportchi 100 m sharqqa yugurdi, so'ng burilib yana 100 m shimolga yugurdi. Sportchining ko'chishi moduli nimaga teng?",
    o: ["S=200m; L=141m", "S=200m; L=100m", "S=141m; L=200m", "S=200m; L=200m"],
    a: 0
  },
  {
    q: "Samolyot to'g'ri yo'nalishda 600 km uchdi, so'ngra to'g'ri burchak ostida burilib yana 800 km uchdi. Samolyotning ko'chishini toping?",
    o: ["L=200km", "L=1400km", "L=1000km", "L=1200km"],
    a: 2
  },
  {
    q: "Kuchning ta'siri ostidagi jismning tezlanishi qanday hisoblanadi?",
    o: ["a=F*m", "a=m/F", "a=F/v", "a=F/m"],
    a: 3
  },
  {
    q: "Nyutonning birinchi qonuni nimani ifodalaydi?",
    o: ["Kuch bilan tezlanishning tengligini", "Harakatning o'zgarmasligi yoki tinchlik", "Kuch va qarshilikning nisbatini", "Jismning impulsini"],
    a: 1
  },
  {
    q: "Moddiy nuqtaning impulsi qanday ifodalanadi?",
    o: ["p=Ft", "p=mv", "p=mg", "p=v/t"],
    a: 1
  },
  {
    q: "Kuch birligi qaysi?",
    o: ["Joule", "Pascal", "Nyuton", "Kilogramm"],
    a: 2
  },
  {
    q: "Moddiy nuqtaga ta'sir etuvchi og'irlik kuchi qanday hisoblanadi?",
    o: ["F=m/a", "F=mg", "F=g/m", "F=am"],
    a: 1
  },
  {
    q: "Nyutonning uchinchi qonuni nimani bildiradi?",
    o: ["Kuch va tezlanishning tengligi", "Jismning tinchlanishi", "Har bir kuchga qarshi teng va teskari yo'nalgan kuch borligini", "Harakatning davomiyligi"],
    a: 2
  },
  {
    q: "F = ma tenglama qaysi qonunni ifodalaydi?",
    o: ["Nyutonning birinchi qonuni", "Nyutonning ikkinchi qonuni", "Nyutonning uchinchi qonuni", "Tinchlik qonuni"],
    a: 1
  },
  {
    q: "Aylanma harakatda markazga intilma kuch qanday hisoblanadi?",
    o: ["F=mg", "F=r/v", "F=mv²/r", "F=vm"],
    a: 2
  },
  {
    q: "Jism impulsining o'zgarishi qaysi kattalik bilan aniqlanadi?",
    o: ["mg", "Ft", "v/t", "m*v"],
    a: 1
  },
  {
    q: "Tizimga ta'sir qiluvchi kuchlarning yig'indisi nol bo'lsa, bu nima?",
    o: ["Tezlanish", "Aylanma harakat", "Impulsning oshishi", "Tinchlik holati"],
    a: 3
  },
  {
    q: "Butun olam tortishish qonunini toping.",
    o: ["F=ma", "F=γ(m₁·m₂)/r²", "F=mg²/R", "F-gradE"],
    a: 1
  },
  {
    q: "Ishqalanish kuchi ifodasini aniqlang.",
    o: ["F=μmg", "F=mg²/2", "F=mgh", "F=ma"],
    a: 0
  },
  {
    q: "Qiymati quyidagi ifodaga teng Kariolis kuchi qanday kuch? F=2mϑω",
    o: ["Elastiklik kuchi", "Inertsiya kuchi", "Gravitatsion kuchi", "Ishqalanish kuchi"],
    a: 1
  },
  {
    q: "Massaning klassik ta'rifini bering.",
    o: ["Jismdagi modda miqdori", "Ta'sir etuvchi kuchni tezlanishga nisbati", "Jismning inertlik o'lchovi", "Massa o'zgarmas kattalik"],
    a: 2
  },
  {
    q: "Ushbu ifoda qanday qonunni ifodalaydi? F=dp/dt",
    o: ["Nyutonning birinchi qonuni", "Nyutonning ikkinchi qonuni", "Maksvell qonuni", "Butun olam tortishish qonuni"],
    a: 1
  },
  {
    q: "ρ=m/v - nimani ifodalovchi formula?",
    o: ["Energiyani", "Kuchni", "Zichlikni", "Tezlikni"],
    a: 2
  },
  {
    q: "m=ρV ifodalovchi formula?",
    o: ["Massani", "Energiyani", "Kuchni", "Tezlikni"],
    a: 0
  },
  {
    q: "Nyutonning 2-qonuni ifodasini toping.",
    o: ["F=γ(m₁·m₂)/r²", "a=F/m", "F=mg²/R", "F=-gradE"],
    a: 1
  },
  {
    q: "Moddiy nuqtaning harakat tenglamasini toping.",
    o: ["M=Iβ", "F=ma", "E=mϑ²/2", "E=mgh"],
    a: 1
  },
  {
    q: "Inertsial sanoq sistemasiga nisbatan jismga ta'sir etayotgan kuchlar yigindisi nolga teng bo'lsa shu sistemaga nisbatan jism:",
    o: ["Aylana bo'ylab harakatda bo'ladi", "Notekis harakatda bo'ladi", "To'g'ri chiziqli tekis harakatda bo'ladi", "Tezlanishli harakatda bo'ladi"],
    a: 2
  },
  {
    q: "Elastiklik kuchi ifodasini aniqlang.",
    o: ["F=mg²/2", "F=mgh", "F=-kx", "F=ma"],
    a: 2
  },
  {
    q: "Kariolis kuchi qanday kuch?",
    o: ["Inertsiya kuchi", "Elastiklik kuchi", "Gravitatsion kuchi", "Ishqalanish kuchi"],
    a: 0
  },
  {
    q: "P=mυ - nimani ifodalovchi formula?",
    o: ["Energiyani", "Impulsni", "Kuchni", "Tezlikni"],
    a: 1
  },
  {
    q: "Jismning olgan tezlanishi kuch yo'nalishida bo'lib shu kuchga to'g'ri proporsianal jism massasiga teskari proporsianaldir. Bu tarifga mos javobni toping.",
    o: ["Nyutonning 1-qonuni", "Nyutonning 2-qonuni", "Nyutonning 3-qonuni", "Nyutonning 4-qonuni"],
    a: 1
  },
  {
    q: "F=mv²/r ifoda nomini toping.",
    o: ["Ishqalanish kuchi", "Markazdan qochma kuch", "Elastik kuchi", "Guk qonuni"],
    a: 1
  },
  {
    q: "Moddiy nuqtaning tezlanishi nolga teng bo'lsa, bu nimani bildiradi?",
    o: ["Harakat yo'nalishini o'zgartiradi", "Tinch holat yoki o'zgarmas tezlik", "Kuchning mavjudligini", "Ishning bajarilishini"],
    a: 1
  },
  {
    q: "Jismga ta'sir qiluvchi kuch va vaqtning ko'paytmasi nimani bildiradi?",
    o: ["Energiya", "Ish", "Kuch impuls", "Tezlanish"],
    a: 2
  },
  {
    q: "Moddiy nuqtaning jism impulsining o'zgarishi qanday ifodalanadi?",
    o: ["Δp=ma", "Ft=mυ-mυ₀", "Δp=v/t", "Δp=F/m"],
    a: 1
  },
  {
    q: "Gravitatsiya kuchining doimiyligi qanday?",
    o: ["G=9.8 m/s²", "G=10 m/s²", "G=6.67*10⁻¹¹ Nm²/kg²", "G=3.14 rad"],
    a: 2
  },
  {
    q: "Jismning og'irligi qanday?",
    o: ["P=Fd", "P=mg", "P=mv", "P=vt"],
    a: 1
  },
  {
    q: "Massasi 10 kg bo’lgan jism 5 m/s tezlik bilan harakatlansa uning impulsi qanday bo’ladi? (Ns)",
    o: ["2", "5", "25", "50"],
    a: 3
  },
  {
    q: "Jism 8 N ta’sirida 2 m/s² tezlanish bilan harakatlanmoqda. Jismning massasini aniqlang.",
    o: ["5 kg", "4 kg", "3 kg", "3,2 kg"],
    a: 1
  },
  {
    q: "2 N kuch ta’sir qilayotgan jismning harakat tenglamasi x=2t+0,1t² ko’rinishida jismning massasi nimaga teng?",
    o: ["1 kg", "3 kg", "10 kg", "3,2 kg"],
    a: 2
  },
  {
    q: "Qandaydir kuch massasi 4 kg bo’lgan jismga 2 m/s² tezlanish bera oladi. Bu kuch 10 kg massali jismga qanday tezlanish beradi?",
    o: ["0,4 m/s²", "0,8 m/s²", "0,3 m/s²", "0,2 m/s²"],
    a: 1
  },
  {
    q: "Jism 12 N kuch ta’sirida 1 m/s² tezlanish oladi. Bu jismga 0,2 m/s² tezlanish berish uchun qanday kuch qo’yish kerak?",
    o: ["3,2 N", "1,2 N", "2,4 N", "2,8 N"],
    a: 2
  },
  {
    q: "Impuls momentini saqlanish qonuniga misol keltiring",
    o: ["Yugurib ketayotgan odam yiqilganda oldi bilan tushishi", "Sportchini aylanma harakatida qoʼllarini yigʼib olishi", "Mashinada oʼtirgan odam, mashina burilishida aks tomonga ogʼishi", "Miltiqdan oʼq otilganda «tepki» hosil boʼlishi"],
    a: 1
  },
  {
    q: "Inertsiya momenti qanday ifodalanadi?",
    o: ["I = mv²", "I = ∑mr²", "I = Fr", "I = mr"],
    a: 1
  },
  {
    q: "Inertsiya momentining o'lchov birligi nima?",
    o: ["N•m", "kg/m", "kg•m²", "kg•m"],
    a: 2
  },
  {
    q: "Aylanish o'qiga nisbatan inertsiya momenti qanday o'zgaradi?",
    o: ["Masofaning kvadrat ildizi bilan o'sadi", "Masofaning kvadrati bilan o'sadi", "Masofaning kubi bilan o'sadi", "Masofaga teskari proporsional"],
    a: 1
  },
  {
    q: "Silindrning aylanish o'qiga nisbatan inertsiya momenti qanday?",
    o: ["I = mr²", "I = (1/3)mr²", "I = (1/2)mr²", "I = mv*r"],
    a: 2
  },
  {
    q: "Halqaning aylanish o'qiga nisbatan inertsiya momenti qanday?",
    o: ["I = (1/2)mr²", "I = (1/3)mr²", "I = mr²", "I = mv*r"],
    a: 2
  },
  {
    q: "Bir xil aylanish chastotasida katta inertsiya momentiga ega jismning harakati qanday bo'ladi?",
    o: ["Tezlashadi", "Sekinlashadi", "O'zgarmaydi", "To'xtaydi"],
    a: 1
  },
  {
    q: "Inertsiya momentining umumiy ta'rifi qaysi?",
    o: ["Chiziqli harakat tezligi", "Aylanish harakatiga qarshilik ko'rsatish o'lchovi", "Tashqi kuch ta'siri", "Harakat yo'nalishini belgilash"],
    a: 1
  },
  {
    q: "To'g'ri chiziqli harakat uchun inertsiya momenti qanday hisoblanadi?",
    o: ["I = mr", "Inertsiya momenti faqat aylanish harakati uchun mavjud", "I = Fr", "I = m*v²"],
    a: 1
  },
  {
    q: "Shteyner teoremasining formulasi qaysi?",
    o: ["I = mr²", "I = (1/2)mr²", "I = Ic + md²", "I = Fr²"],
    a: 2
  },
  {
    q: "Radius ortishi bilan halqaning inertsiya momenti qanday o'zgaradi?",
    o: ["Kamayadi", "O'zgarmaydi", "Ortadi", "Nolga teng bo'ladi"],
    a: 2
  },
  {
    q: "Bir xil massa va radiusga ega ikki jism: silindr va halqaning inertsiya momentlari qanday?",
    o: ["Silindrning inertsiya momenti kattaroq", "Halqaning inertsiya momenti kattaroq", "Teng", "Farq qilmaydi"],
    a: 1
  },
  {
    q: "Aylanayotgan jismlar uchun kinetik energiya qanday ifodalanadi?",
    o: ["E = (1/2)mv²", "E = mgh", "E = (1/2)Iω²", "E = F*d"],
    a: 2
  },
  {
    q: "Sferaning aylanish o'qiga nisbatan inertsiya momenti qanday hisoblanadi?",
    o: ["I = mr²", "I = (2/5)mr²", "I = (1/2)mr²", "I = (1/3)mr²"],
    a: 1
  },
  {
    q: "Aylanish o'qidan uzoqlashish jismning inertsiya momentiga ta'siri qanday ta’sir qiladi?",
    o: ["Kamayadi", "Ortadi", "O'zgarmaydi", "Nolinchi bo'ladi"],
    a: 1
  },
  {
    q: "Massa markazidan o’tuvchi o’qga nisbatan sterjenning inertsiya momenti qanday?",
    o: ["I = (1/2)mr²", "I = mr²", "I = (2/5)mr²", "I = (1/12)ml²"],
    a: 3
  },
  {
    q: "Inertsiya momenti qanday xususiyatga ega?",
    o: ["Chiziqli tezlikka bog'liq", "Jismning aylanish harakatiga bog'liq", "Faqat tortishish kuchiga bog'liq", "To'g'ri chiziqli tezlanishga bog'liq"],
    a: 1
  },
  {
    q: "Inertsiya momenti qanday aniqlanadi?",
    o: ["Chiziqli tezlik orqali", "Ish va energiya orqali", "Massa va masofaning kvadrati orqali", "Harakat tenglamalari orqali"],
    a: 2
  },
  {
    q: "Inertsiya momenti qanday hodisalarni tushuntiradi?",
    o: ["To'lqin harakatini", "Gyroskopik effektlarni", "Yorug'lik sinishini", "Harorat o'zgarishini"],
    a: 1
  },
  {
    q: "Aylanma harakatda burchak tezlanish qanday aniqlanadi?",
    o: ["𝛽 = F/m", "𝛽 = v/r", "𝛽 = M/I", "𝛽 = Fr"],
    a: 2
  },
  {
    q: "Shteyner teoremasi qaysi holatda qo'llaniladi?",
    o: ["Massa ortganda", "O'q o'zgarganda", "Radius kamayganda", "Tezlik oshganda"],
    a: 1
  },
  {
    q: "Radiusning o'zgarishi inertsiya momentiga qanday ta'sir qiladi?",
    o: ["Radiusga teskari proporsional", "O'zgarmaydi", "Kvadratiga proporsional", "Kvadrat ildiziga proporsional"],
    a: 2
  },
  {
    q: "Inertsiya momenti va burchak tezlik orasidagi bog'lanish qaysi?",
    o: ["Chiziqli tezlik orqali", "Impuls orqali", "Kinetik energiya orqali", "Ish orqali"],
    a: 2
  },
  {
    q: "Kuch momentining ifodasi qanday?",
    o: ["M = m•a", "M = I•α", "M = F•r", "M = F/r"],
    a: 2
  },
  {
    q: "Kuch momentining o'lchov birligi nima?",
    o: ["J", "kg•m/s", "N•m", "W"],
    a: 2
  },
  {
    q: "Qanday sharoitda kuch momenti nolga teng bo'ladi?",
    o: ["Kuchning yo'nalishi o'qga parallel bo'lsa", "Kuchning kattaligi nol bo'lsa", "Kuchning masofasi nol bo'lsa", "Yuqoridagilarning barchasi"],
    a: 3
  },
  {
    q: "Impuls momentining formulasi qaysi?",
    o: ["L = m•v", "L = I•ω", "L = F•r", "L = m•a"],
    a: 1
  },
  {
    q: "Impuls momentining o'lchov birligi nima?",
    o: ["kg•m/s", "N•m", "kg•m²/s", "J"],
    a: 2
  },
  {
    q: "Kuch momenti qanday kattalik hisoblanadi?",
    o: ["Skalyar", "Vektor", "Har doim musbat", "Har doim nol"],
    a: 1
  },
  {
    q: "Radiusi R=0.5 m bo'lgan bir jinsli aylanma diskning massasini m=2 kg deb olib, diskning inertsiya momentini toping?",
    o: ["0.5 kg/m²", "0.25 kg/m²", "1 kg/m²", "0.75 kg/m²"],
    a: 1
  },
  {
    q: "Massasi m=3 kg bo'lgan kichik jism radiusi r=0.2 m bo‘lgan aylana bo‘ylab bir xil tezlik bilan harakat qilmoqda. Agar aylana markaziga nisbatan kuch momenti M=F⋅r bo‘lsa, F=5 N bo‘lganda kuch momentini toping.",
    o: ["2 Nm", "0.5 Nm", "1 Nm", "1.5 Nm"],
    a: 2
  },
  {
    q: "Radiusi R=0.3 m bo‘lgan va massasi m=4 kg bo‘lgan to‘liq aylana ustida harakat qilayotgan jismlar impuls momentini L=I⋅ω orqali hisoblang. Agar ω=2 rad/s bo‘lsa, impuls momenti qancha bo‘ladi?",
    o: ["0.36 kgm²/s", "0.72 kgm²/s", "0.18 kgm²/s", "0.54 kgm²/s"],
    a: 1
  },
  {
    q: "Massasi m=5 kg va radiusi r=0.1 m bo‘lgan aylana markaziga nisbatan jism aylantirilib, unga F=10 N kuch ta’sir qildi. Agar aylanishdagi kuch momenti M ni toping.",
    o: ["5 Nm", "1 Nm", "2.5 Nm", "10 Nm"],
    a: 1
  },
  {
    q: "Radiusi R=0.25 m bo'lgan bir jinsli aylanma diskning massasini m=1 kg deb olib, diskning inertsiya momentini toping?",
    o: ["0.5125 kg/m²", "1.125 kg/m²", "0.03125 kg/m²", "0.75 kg/m²"],
    a: 2
  },
  {
    q: "Qanday kuchlarni konservativ kuchlar deb hisoblash mumkin?",
    o: ["Moddiy nuqta bir holatdan boshqa holatga oʼtganda, yo'lga bogʼliq boʼlgan kuchni", "Ixtiyoriy yopiq yoʼlda bajarilgan ish nolga teng boʼlgan kuchni", "Tezlanishga bogʼliq boʼlgan kuchni", "Tezlikka bogʼliq boʼlgan kuchni"],
    a: 1
  },
  {
    q: "Qanday holda energiyaning saqlanish qonuni bajarilmaydi?",
    o: ["Yopiq sistemada toʼla energiya oʼzgarmas boʼlganda", "Yopiq sistemada faqat konservativ kuchlar bo'lganda", "Yopiq sistemada nokonservativ kuchlar taʼsiri boʼlganda", "Tashqi nokonservativ kuchlar boʼlmaganda"],
    a: 2
  },
  {
    q: "Mexanik energiyaning saqlanish qonuni qanday taʼriflanadi?",
    o: ["Tashqi va ichki kuchlar taʼsiridagi sistemaning toʼla energiyasi oʼzgarmaydi", "Energiya bordan yoʼq boʼlmaydi, faqat bir turdan ikkinchi turga aylanadi", "Yakkalangan berk sistemaning toʼla mexanik energiyasi oʼzgarmaydi", "Kinetik energiya faqat issiqlikka aylanadi"],
    a: 2
  },
  {
    q: "Kinetik energiya qaysi omillarga bog‘liq?",
    o: ["Jismning massasi va tezligiga", "Jismning massasi va balandligiga", "Jismning kuchlanishiga", "Jismning zichligiga"],
    a: 0
  },
  {
    q: "Potensial energiya formulasi qanday?",
    o: ["Ep = (1/2)mv²", "Ep = mgh", "Ep = F·d", "Ep = mg/h"],
    a: 1
  },
  {
    q: "Mexanik ishni qanday aniqlash mumkin?",
    o: ["Jismning hajmi orqali", "Harorat va massaning nisbatidan", "Kuch va masofa ko‘paytmasi orqali", "Kuch va balandlik ko‘paytmasi orqali"],
    a: 2
  },
  {
    q: "Quvvatning ma’nosi nimada?",
    o: ["Biror vaqt ichida bajarilgan ish", "Jismning harakat tezligi", "Jismning balandligi", "Jismning massasining zichligi"],
    a: 0
  },
  {
    q: "Jismning kinetik energiyasini qanday oshirish mumkin?",
    o: ["Uning massasini kamaytirish orqali", "Uning tezligini oshirish orqali", "Uning balandligini kamaytirish orqali", "Uning haroratini oshirish orqali"],
    a: 1
  },
  {
    q: "Potensial energiya va kinetik energiya birga nima deyiladi?",
    o: ["Mexanik energiya", "Quvvat", "Ish", "Zichlik"],
    a: 0
  },
  {
    q: "Energiya nima?",
    o: ["Jismning harakatlanish va holatini saqlash qobiliyati", "Jismning faqat harakatlanish qobiliyati", "Jismning issiqlik saqlash qobiliyati", "Jismning zichlikni o‘lchash qobiliyati"],
    a: 0
  },
  {
    q: "Ishning birligi nima?",
    o: ["N·m", "Joul (J)", "Watt (W)", "Kilogramm (kg)"],
    a: 1
  },
  {
    q: "Quvvatning birligi nima?",
    o: ["Joul (J)", "Nyuton (N)", "Watt (W)", "Metr (m)"],
    a: 2
  },
  {
    q: "Biror jismining energiyasi nima?",
    o: ["Jismning harakati yoki holati bilan bog‘liq bo‘lgan miqdor", "Jismning faqat harakatlanish bilan bog‘liq bo‘lgan miqdor", "Jismning faqat issiqlik bilan bog‘liq bo‘lgan miqdor", "Jismning zichligi"],
    a: 0
  },
  {
    q: "Potentsial energiya nima?",
    o: ["Jismning joylashuvi yoki holatiga bog‘liq bo‘lgan energiya", "Jismning harakatlanishiga bog‘liq energiya", "Jismning tezlikka bog‘liq energiya", "Jismning o‘lchamiga bog‘liq energiya"],
    a: 0
  },
  {
    q: "Mexanik energiyaning birligi nima?",
    o: ["Watt (W)", "Joul (J)", "Nyuton (N)", "Metr (m)"],
    a: 1
  },
  {
    q: "Agar jismning massasi 2 kg va tezligi 3 m/s bo‘lsa, kinetik energiya qancha bo‘ladi?",
    o: ["12 J", "6 J", "9 J", "18 J"],
    a: 2
  },
  {
    q: "Agar kuch F = 20 N bo‘lsa va masofa S= 3 m bo‘lsa, bajarilgan ish qancha bo‘ladi?",
    o: ["40 J", "60 J", "20 J", "10 J"],
    a: 1
  },
  {
    q: "Biror jism 5 m balandlikka ko‘tarilgan va massasi 4 kg bo‘lsa, potensial energiya qancha bo‘ladi? (g = 10 m/s²)",
    o: ["100 J", "200 J", "50 J", "250 J"],
    a: 1
  },
  {
    q: "Agar quvvat 10 W bo‘lsa va vaqt 5 s bo‘lsa, qancha ish bajariladi?",
    o: ["10 J", "20 J", "50 J", "5 J"],
    a: 2
  },
  {
    q: "Agar jismning to’la mexanik energiyasi Et=100 J va uning potentsial energiyasi Ep=60 J bo‘lsa, kinetik energiyasi qancha bo‘ladi?",
    o: ["30 J", "40 J", "50 J", "20 J"],
    a: 1
  },
  {
    q: "Agar jismlarning birida kuch F=10 N bo‘lsa va u 5 m masofani bosib o‘tsa, unda bajarilgan ish qancha bo‘ladi?",
    o: ["25 J", "10 J", "50 J", "5 J"],
    a: 2
  },
  {
    q: "Agar bir jismlarning mexanik energiyasi Et=25 J bo‘lsa va uning potentsial energiyasi Ep=15 J, kinetik energiyasi qancha bo‘ladi?",
    o: ["10 J", "5 J", "15 J", "20 J"],
    a: 0
  },
  {
    q: "Agar bir jismining potentsial energiyasi Ep=50 J bo‘lsa va u 5 m masofani ko‘tarilsa, unda ishlatilgan kuchni toping.",
    o: ["5 N", "10 N", "50 N", "25 N"],
    a: 1
  },
  {
    q: "Agar energiyaning saqlanish qonuniga binoan tizimda ishlatilgan ish A=100 J bo‘lsa va tizimning boshlang‘ich energiyasi E0=150 J tizimning oxirgi energiyasini toping.",
    o: ["50 J", "250 J", "100 J", "200 J"],
    a: 1
  },
  {
    q: "Agar tizimning boshlang‘ich tezligi v0=10 m/s va oxirgi tezligi vf=5 m/s bo‘lsa, tizimning kinetik energiyasi qanday o‘zgaradi?",
    o: ["5 marta kamayadi", "4 marta kamayadi", "6 marta kamayadi", "25 marta kamayadi"],
    a: 1
  },
  {
    q: "Agar bir jismining potentsial energiyasi Ep=100 J bo‘lsa va u 5 m masofaga ko‘tarilsa, unda ishlatilgan kuchni toping.",
    o: ["5 N", "50 N", "20 N", "25 N"],
    a: 2
  },
  {
    q: "Agar energiyaning saqlanish qonuniga binoan tizimda ishlatilgan ish A=60 J bo‘lsa va tizimning boshlang‘ich energiyasi E0=100 J tizimning oxirgi energiyasini toping.",
    o: ["40 J", "250 J", "100 J", "160 J"],
    a: 3
  },
  {
    q: "Agar tizimning boshlang‘ich tezligi v0=15 m/s va oxirgi tezligi vf=5 m/s bo‘lsa, tizimning kinetik energiyasi qanday o‘zgaradi?",
    o: ["9 marta kamayadi", "5 marta kamayadi", "6 marta kamayadi", "25 marta kamayadi"],
    a: 0
  },
  {
    q: "Mexanik tebranishlar nima?",
    o: ["Vaqt davomida takrorlanuvchi jarayonlar", "Tananing xususiy massasi", "Harakatning chiziqli ko‘rinishi", "Koordinatalar sistemasining o‘zgarishi"],
    a: 0
  },
  {
    q: "Koordinatalar sistemasida tebranishning holati qanday ifodalanadi?",
    o: ["Vaqtning integrali orqali", "Amplituda va faza orqali", "Fazo tezligi orqali", "Zarrachalarning energiyasi orqali"],
    a: 1
  },
  {
    q: "Chiziqli garmonik tebranishlar uchun energiya qaysi kattaliklar orqali ifodalanadi?",
    o: ["Faqat kinetik energiya orqali", "Kinetik va potensial energiya orqali", "Elektromagnit energiya orqali", "Mexanik ish orqali"],
    a: 1
  },
  {
    q: "Garmonik tebranishlarning davri nima?",
    o: ["Massaning qiymati", "Tezlanishning o‘zgarishi", "Bir to‘liq tebranishni amalga oshirish uchun ketadigan vaqt", "Kuchlanishning maksimal qiymati"],
    a: 2
  },
  {
    q: "Erkin tebranishlarning amplitudasi nima bilan belgilanadi?",
    o: ["Kuchlanish bilan", "Tezlanishning o‘zgarishi bilan", "Tizimning boshlang‘ich energiyasi bilan", "Radiusning kattaligi bilan"],
    a: 2
  },
  {
    q: "Majburiy tebranishlarda rezonans qachon sodir bo‘ladi?",
    o: ["Majburiy chastota xususiy chastotaga teng bo‘lganda", "Kuchlanish nol bo‘lganda", "Tezlik maksimal bo‘lganda", "Massa kamayganda"],
    a: 0
  },
  {
    q: "Matematik mayatnikning tebranish davri nimaga bog‘liq?",
    o: ["Mayatnikning uzunligiga", "Jismning massasiga", "Amplitudaga", "Burchak tezligiga"],
    a: 0
  },
  {
    q: "Mexanik tebranishlar nima?",
    o: ["Vaqt davomida takrorlanuvchi jarayonlar", "Tananing xususiy massasi", "Harakatning chiziqli ko‘rinishi", "Koordinatalar sistemasining o‘zgarishi"],
    a: 0
  },
  {
    q: "Koordinatalar sistemasida tebranishning holati qanday ifodalanadi?",
    o: ["Vaqtning integrali orqali", "Fazo tezligi orqali", "Amplituda va faza orqali", "Zarrachalarning energiyasi orqali"],
    a: 2
  },
  {
    q: "Chiziqli garmonik tebranishlar uchun energiya qaysi kattaliklar orqali ifodalanadi?",
    o: ["Faqat kinetik energiya orqali", "Kinetik va potensial energiya orqali", "Elektromagnit energiya orqali", "Mexanik ish orqali"],
    a: 1
  },
  {
    q: "Garmonik tebranishlarning davri nima?",
    o: ["Massaning qiymati", "Bir to‘liq tebranishni amalga oshirish uchun ketadigan vaqt", "Tezlanishning o‘zgarishi", "Kuchlanishning maksimal qiymati"],
    a: 1
  },
  {
    q: "Erkin tebranishlarning amplitudasi nima bilan belgilanadi?",
    o: ["Tizimning boshlang‘ich energiyasi bilan", "Kuchlanish bilan", "Tezlanishning o‘zgarishi bilan", "Radiusning kattaligi bilan"],
    a: 0
  },
  {
    q: "Majburiy tebranishlarda rezonans qachon sodir bo‘ladi?",
    o: ["Kuchlanish nol bo‘lganda", "Tezlik maksimal bo‘lganda", "Majburiy chastota xususiy chastotaga teng bo‘lganda", "Massa kamayganda"],
    a: 2
  },
  {
    q: "Matematik mayatnikning tebranish davri nimaga bog‘liq?",
    o: ["Jismning massasiga", "Mayatnikning uzunligiga", "Amplitudaga", "Burchak tezligiga"],
    a: 1
  },
  {
    q: "So'nuvchi tebranishlar nima?",
    o: ["Amplitudasi vaqt o'tishi bilan kamayadigan tebranishlar", "Amplitudasi o'zgarmaydigan tebranishlar", "Chastotasi ortib boradigan tebranishlar", "Faqat tashqi kuch ta'sirida bo'ladigan tebranishlar"],
    a: 0
  },
  {
    q: "Garmonik tebranish tenglamasi qaysi?",
    o: ["x = A cos(ωt + φ₀)", "F = ma", "E = mc²", "P = mv"],
    a: 0
  },
  {
    q: "Tebranish chastotasi birligi nima?",
    o: ["Joul", "Gerts (Hz)", "Vatt", "Nyuton"],
    a: 1
  },
  {
    q: "Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
    o: ["P = (1/3)nm₀v²", "F = kx", "E = mgh", "U = RI"],
    a: 0
  },
  {
    q: "Ideal gaz holat tenglamasi (Mendeleyev-Klapeyron) qaysi?",
    o: ["PV = (m/M)RT", "P = F/S", "V = S/t", "Q = cmΔT"],
    a: 0
  },
  {
    q: "Absolyut harorat shkalasi (Kelvin) va Selsiy orasidagi bog'lanish?",
    o: ["T = t + 273", "T = t - 273", "T = 2t", "T = t/273"],
    a: 0
  },
  {
    q: "Gaz doimiysi R ning qiymati qancha?",
    o: ["8.31 J/(mol·K)", "6.62 * 10⁻³⁴ J·s", "9.81 m/s²", "1.38 * 10⁻²³ J/K"],
    a: 0
  },
  {
    q: "Boltsman doimiysi (k) ning ma'nosi nima?",
    o: ["Bitta molekulaning o'rtacha kinetik energiyasini harorat bilan bog'laydi", "Gazning umumiy bosimini o'lchaydi", "Molekulalar massasini aniqlaydi", "Gaz hajmini hisoblaydi"],
    a: 0
  },
  {
    q: "Izotermik jarayonda qaysi parametr o'zgarmas qoladi?",
    o: ["Bosim", "Hajm", "Harorat", "Massa markazi"],
    a: 2
  },
  {
    q: "Izobar jarayonda qaysi parametr o'zgarmas qoladi?",
    o: ["Harorat", "Bosim", "Hajm", "Zichlik"],
    a: 1
  },
  {
    q: "Izoxor jarayonda qaysi parametr o'zgarmas qoladi?",
    o: ["Bosim", "Harorat", "Hajm", "Impuls"],
    a: 2
  },
  {
    q: "Termodinamikaning birinchi qonuni ifodasi?",
    o: ["Q = ΔU + A", "F = ma", "E = hν", "P = IV"],
    a: 0
  },
  {
    q: "Adiabatik jarayon nima?",
    o: ["Tashqi muhit bilan issiqlik almashinuvi bo'lmaydigan jarayon", "O'zgarmas bosimda kechadigan jarayon", "Harorat o'zgarmaydigan jarayon", "Hajm kamayadigan jarayon"],
    a: 0
  },
  {
    q: "Issiqlik mashinasining foydali ish koeffitsienti (FIK) qanday topiladi?",
    o: ["η = (Q₁ - Q₂) / Q₁", "η = Q₁ / Q₂", "η = Q₂ / Q₁", "η = (Q₁ + Q₂) / Q₁"],
    a: 0
  },
  {
    q: "Karno sikli qaysi jarayonlardan tashkil topgan?",
    o: ["2 ta izoterma va 2 ta adiabata", "2 ta izobara va 2 ta izoxora", "Izoterma va izoxora", "Adiabata va izobara"],
    a: 0
  },
  {
    q: "Ichki energiya nima?",
    o: ["Tizimni tashkil etuvchi zarralarning barcha turdagi harakat va o'zaro ta'sir energiyalari yig'indisi", "Faqat tizimning kinetik energiyasi", "Tizimning potensial energiyasi", "Tizim bajargan ish"],
    a: 0
  },
  {
    q: "Gazning bajargan ishi (o'zgarmas bosimda) qanday topiladi?",
    o: ["A = PΔV", "A = VΔP", "A = F/S", "A = mgh"],
    a: 0
  },
  {
    q: "Erkinlik darajasi (i) bir atomli gazlar uchun nechaga teng?",
    o: ["3", "5", "6", "1"],
    a: 0
  },
  {
    q: "Erkinlik darajasi (i) ikki atomli gazlar uchun nechaga teng?",
    o: ["3", "5", "6", "2"],
    a: 1
  },
  {
    q: "Gaz bosimi birligi SI tizimida nima?",
    o: ["Paskal (Pa)", "Bar", "Atmrosfera", "Millimetr simob ustuni"],
    a: 0
  },
  {
    q: "Diffuziya hodisasi nimani isbotlaydi?",
    o: ["Molekulalarning tartibsiz harakatini", "Molekulalarning o'zaro tortishishini", "Gazlarning og'irligini", "Molekulalar hajmini"],
    a: 0
  },
  {
    q: "O'rtacha kvadratik tezlik formulasi?",
    o: ["v = √(3RT/M)", "v = √(2gh)", "v = at", "v = S/t"],
    a: 0
  },
  {
    q: "Issiqlik sig'imi nima?",
    o: ["Jism haroratini 1 Kelvinga oshirish uchun kerak bo'lgan issiqlik miqdori", "Jismning massasi", "Gazning bosimi", "Bajarilgan ish"],
    a: 0
  },
  {
    q: "Suyuqlikning sirt taranglik koeffitsienti birligi?",
    o: ["N/m", "J/m", "N·m", "Vatt"],
    a: 0
  },
  {
    q: "Kapillyar ko'tarilish balandligi formulasi?",
    o: ["h = 2σ / (ρgr)", "h = v²/2g", "h = m/ρ", "h = P/ρg"],
    a: 0
  },
  {
    q: "Suyuqlikning qovushqoqligi nima bilan tavsiflanadi?",
    o: ["Ichki ishqalanish koeffitsienti (η)", "Sirt taranglik", "Zichlik", "Hajm"],
    a: 0
  },
  {
    q: "Bernulli tenglamasi nimani ifodalaydi?",
    o: ["Oquvchi suyuqlik uchun energiyaning saqlanish qonunini", "Suyuqlikning zichligini", "Gazlarning kengayishini", "Molekulalar harakatini"],
    a: 0
  },
  {
    q: "Puazeyl qonuni nima haqida?",
    o: ["Qovushqoq suyuqlikning quvurlardan oqishi", "Gazlarning bosimi", "Issiqlik almashinuvi", "Zarralarning to'qnashuvi"],
    a: 0
  },
  {
    q: "Reunolds soni (Re) nimani belgilaydi?",
    o: ["Oqimning xarakterini (laminar yoki turbulent)", "Suyuqlikning haroratini", "Bosim o'zgarishini", "Molekulalar sonini"],
    a: 0
  },
  {
    q: "Entropiya nima?",
    o: ["Tizimning tartibsizlik o'lchovi", "Energiyaning bir turi", "Bajarilgan ish", "Gazning harorati"],
    a: 0
  },
  {
    q: "Termodinamikaning ikkinchi qonuni mohiyati?",
    o: ["Issiqlik o'z-o'zidan sovuq jismdan issiq jismga o'tmasligi", "Energiya saqlanishi", "Absolyut nolga erishib bo'lmasligi", "Gaz bosimi o'zgarmasligi"],
    a: 0
  },
  {
    q: "Faza o'tishi nima?",
    o: ["Moddaning bir agregat holatidan boshqasiga o'tishi", "Tezlikning o'zgarishi", "Kimyoviy reaksiya", "Yorug'likning sinishi"],
    a: 0
  },
  {
    q: "Kritik holat (nuqta) nima?",
    o: ["Suyuqlik va bug' orasidagi farq yo'qoladigan holat", "Muzning erish nuqtasi", "Gazning yonish harorati", "Vakuum holati"],
    a: 0
  },
  {
    q: "So'nuvchi tebranishlar nima?",
    o: ["Amplitudasi vaqt o'tishi bilan kamayadigan tebranishlar", "Amplitudasi o'zgarmaydigan tebranishlar", "Chastotasi ortib boradigan tebranishlar", "Faqat tashqi kuch ta'sirida bo'ladigan tebranishlar"],
    a: 0
  },
  {
    q: "Garmonik tebranish tenglamasi qaysi?",
    o: ["F = ma", "x = A cos(ωt + φ₀)", "E = mc²", "P = mv"],
    a: 1
  },
  {
    q: "Tebranish chastotasi birligi nima?",
    o: ["Joul", "Vatt", "Gerts (Hz)", "Nyuton"],
    a: 2
  },
  {
    q: "Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
    o: ["P = (1/3)nm₀v²", "F = kx", "E = mgh", "U = RI"],
    a: 0
  },
  {
    q: "Ideal gaz holat tenglamasi (Mendeleyev-Klapeyron) qaysi?",
    o: ["P = F/S", "PV = (m/M)RT", "V = S/t", "Q = cmΔT"],
    a: 1
  },
  {
    q: "Absolyut harorat shkalasi (Kelvin) va Selsiy orasidagi bog'lanish qanday?",
    o: ["T = t + 273", "T = t - 273", "T = 2t", "T = t/273"],
    a: 0
  },
  {
    q: "Gaz doimiysi R ning qiymati qancha?",
    o: ["6.62 * 10⁻³⁴ J·s", "8.31 J/(mol·K)", "9.81 m/s²", "1.38 * 10⁻²³ J/K"],
    a: 1
  },
  {
    q: "Boltsman doimiysi (k) ning fizik ma'nosi nima?",
    o: ["Bitta molekulaning o'rtacha kinetik energiyasini harorat bilan bog'laydi", "Gazning umumiy bosimini o'lchaydi", "Molekulalar massasini aniqlaydi", "Gaz hajmini hisoblaydi"],
    a: 0
  },
  {
    q: "Izotermik jarayonda qaysi parametr o'zgarmas qoladi?",
    o: ["Bosim", "Hajm", "Massa markazi", "Harorat"],
    a: 3
  },
  {
    q: "Izobar jarayonda qaysi parametr o'zgarmas qoladi?",
    o: ["Harorat", "Hajm", "Bosim", "Zichlik"],
    a: 2
  },
  {
    q: "Izoxor jarayonda qaysi parametr o'zgarmas qoladi?",
    o: ["Hajm", "Bosim", "Harorat", "Impuls"],
    a: 0
  },
  {
    q: "Termodinamikaning birinchi qonuni ifodasi qaysi?",
    o: ["F = ma", "Q = ΔU + A", "E = hν", "P = IV"],
    a: 1
  },
  {
    q: "Adiabatik jarayon nima?",
    o: ["Tashqi muhit bilan issiqlik almashinuvi bo'lmaydigan jarayon", "O'zgarmas bosimda kechadigan jarayon", "Harorat o'zgarmaydigan jarayon", "Hajm kamayadigan jarayon"],
    a: 0
  },
  {
    q: "Issiqlik mashinasining foydali ish koeffitsienti (FIK) qanday topiladi?",
    o: ["η = Q₁ / Q₂", "η = (Q₁ - Q₂) / Q₁", "η = Q₂ / Q₁", "η = (Q₁ + Q₂) / Q₁"],
    a: 1
  },
  {
    q: "Karno sikli qaysi jarayonlardan tashkil topgan?",
    o: ["2 ta izoterma va 2 ta adiabata", "2 ta izobara va 2 ta izoxora", "Izoterma va izoxora", "Adiabata va izobara"],
    a: 0
  },
  {
    q: "Ichki energiya nima?",
    o: ["Tizimni tashkil etuvchi zarralarning barcha turdagi harakat va o'zaro ta'sir energiyalari yig'indisi", "Faqat tizimning kinetik energiyasi", "Tizimning potensial energiyasi", "Tizim bajargan ish"],
    a: 0
  },
  {
    q: "Gazning bajargan ishi (o'zgarmas bosimda) qanday topiladi?",
    o: ["A = VΔP", "A = PΔV", "A = F/S", "A = mgh"],
    a: 1
  },
  {
    q: "Erkinlik darajasi (i) bir atomli gazlar uchun nechaga teng?",
    o: ["1", "5", "3", "6"],
    a: 2
  },
  {
    q: "Erkinlik darajasi (i) ikki atomli gazlar uchun nechaga teng?",
    o: ["3", "6", "2", "5"],
    a: 3
  },
  {
    q: "Gaz bosimi birligi SI tizimida nima?",
    o: ["Bar", "Paskal (Pa)", "Atmosfera", "Millimetr simob ustuni"],
    a: 1
  },
  {
    q: "Diffuziya hodisasi nimani isbotlaydi?",
    o: ["Molekulalarning tartibsiz harakatini", "Molekulalarning o'zaro tortishishini", "Gazlarning og'irligini", "Molekulalar hajmini"],
    a: 0
  },
  {
    q: "O'rtacha kvadratik tezlik formulasi qaysi?",
    o: ["v = √(3RT/M)", "v = √(2gh)", "v = at", "v = S/t"],
    a: 0
  },
  {
    q: "Issiqlik sig'imi nima?",
    o: ["Jism haroratini 1 Kelvinga oshirish uchun kerak bo'lgan issiqlik miqdori", "Jismning massasi", "Gazning bosimi", "Bajarilgan ish"],
    a: 0
  },
  {
    q: "Suyuqlikning sirt taranglik koeffitsienti birligi nima?",
    o: ["J/m", "N/m", "N·m", "Vatt"],
    a: 1
  },
  {
    q: "Kapillyar ko'tarilish balandligi formulasi qaysi?",
    o: ["h = v²/2g", "h = m/ρ", "h = 2σ / (ρgr)", "h = P/ρg"],
    a: 2
  },
  {
    q: "Suyuqlikning qovushqoqligi nima bilan tavsiflanadi?",
    o: ["Sirt taranglik", "Ichki ishqalanish koeffitsienti (η)", "Zichlik", "Hajm"],
    a: 1
  },
  {
    q: "Bernulli tenglamasi nimani ifodalaydi?",
    o: ["Oquvchi suyuqlik uchun energiyaning saqlanish qonunini", "Suyuqlikning zichligini", "Gazlarning kengayishini", "Molekulalar harakatini"],
    a: 0
  },
  {
    q: "Puazeyl qonuni nima haqida?",
    o: ["Gazlarning bosimi", "Issiqlik almashinuvi", "Zarralarning to'qnashuvi", "Qovushqoq suyuqlikning quvurlardan oqishi"],
    a: 3
  },
  {
    q: "Reunolds soni (Re) nimani belgilaydi?",
    o: ["Oqimning xarakterini (laminar yoki turbulent)", "Suyuqlikning haroratini", "Bosim o'zgarishini", "Molekulalar sonini"],
    a: 0
  },
  {
    q: "Entropiya nima?",
    o: ["Energiyaning bir turi", "Tizimning tartibsizlik o'lchovi", "Bajarilgan ish", "Gazning harorati"],
    a: 1
  },
  {
    q: "Termodinamikaning ikkinchi qonuni mohiyati nimadan iborat?",
    o: ["Issiqlik o'z-o'zidan sovuq jismdan issiq jismga o'tmasligi", "Energiya saqlanishi", "Absolyut nolga erishib bo'lmasligi", "Gaz bosimi o'zgarmasligi"],
    a: 0
  },
  {
    q: "Faza o'tishi nima?",
    o: ["Tezlikning o'zgarishi", "Kimyoviy reaksiya", "Moddaning bir agregat holatidan boshqasiga o'tishi", "Yorug'likning sinishi"],
    a: 2
  },
  {
    q: "Kritik holat (nuqta) nima?",
    o: ["Suyuqlik va bug' orasidagi farq yo'qoladigan holat", "Muzning erish nuqtasi", "Gazning yonish harorati", "Vakuum holati"],
    a: 0
  },
 {
    q: "Bug'lanish issiqligi nima?",
    o: ["Gazni sovitish uchun kerakli energiya", "Muzni eritish energiyasi", "Suyuqlikni bug'ga aylantirish uchun sarflanadigan issiqlik", "Haroratni o'lchash birligi"],
    a: 2
  },
  {
    q: "Yuzaning namlanishi nima bilan bog'liq?",
    o: ["Adgeziya va koheziya kuchlari nisbati bilan", "Atmosfera bosimi bilan", "Faqat harorat bilan", "Suyuqlik hajmi bilan"],
    a: 0
  },
  {
    q: "Ideal gaz molekulalarining o'rtacha kinetik energiyasi nimaga bog'liq?",
    o: ["Faqat bosimga", "Faqat absolyut haroratga", "Molekulalar soniga", "Idishning shakliga"],
    a: 1
  },
  {
    q: "Suyuqlik oqimining uzluksizlik tenglamasi qaysi?",
    o: ["P1V1 = P2V2", "F = ma", "E = mc2", "S1v1 = S2v2"],
    a: 3
  },
  {
    q: "Guk qonuni ifodasi qaysi?",
    o: ["F = ma", "F = kx", "P = mv", "E = mgh"],
    a: 1
  },
  {
    q: "Yung moduli nimani xarakterlaydi?",
    o: ["Moddaning elastiklik xususiyatini", "Issiqlik o'tkazuvchanligini", "Modda zichligini", "Elektr qarshiligini"],
    a: 0
  },
  {
    q: "Nisbiy deformatsiya nima?",
    o: ["Kuchning yuzaga nisbati", "Absolyut deformatsiyaning boshlang'ich o'lchamga nisbati", "Massa va hajm ko'paytmasi", "Tezlikning vaqtga nisbati"],
    a: 1
  },
  {
    q: "Mexanik tebranishlar nima?",
    o: ["Vaqt davomida takrorlanuvchi jarayonlar", "Harakatning chiziqli ko'rinishi", "Tananing xususiy massasi", "Koordinatalar sistemasining o'zgarishi"],
    a: 0
  },
  {
    q: "Garmonik tebranishlarning davri nima?",
    o: ["Massaning qiymati", "Tezlanishning o'zgarishi", "Bir to'liq tebranishni amalga oshirish uchun ketadigan vaqt", "Kuchlanishning maksimal qiymati"],
    a: 2
  },
  {
    q: "Erkin tebranishlarning amplitudasi nima bilan belgilanadi?",
    o: ["Kuchlanish bilan", "Tizimning boshlang'ich energiyasi bilan", "Tezlanishning o'zgarishi bilan", "Radiusning kattaligi bilan"],
    a: 1
  },
  {
    q: "Ideal gazning ichki energiyasi nimaga bog'liq?",
    o: ["Faqat haroratga", "Gazning rangiga", "Faqat bosimga", "Idishning shakliga"],
    a: 0
  },
  {
    q: "Molekula kontsentratsiyasi nima?",
    o: ["Gazning umumiy massasi", "Hajm birligidagi molekulalar soni", "Molekulaning tezligi", "Gazning zichligi"],
    a: 1
  },
  {
    q: "Suyuqlikning idish tubiga beradigan bosimi nimaga bog'liq?",
    o: ["Idishning shakliga", "Atmosfera bosimiga", "Suyuqlik ustuni balandligiga", "Suyuqlik rangiga"],
    a: 2
  },
  {
    q: "Paskal qonuni nimani ifodalaydi?",
    o: ["Tashqi bosim suyuqlik va gazlarda hamma tomonga teng uzatilishini", "Suyuqlikning oqish tezligini", "Gazning kengayishini", "Issiqlik o'tkazuvchanlikni"],
    a: 0
  },
  {
    q: "Arximed kuchi nimaga teng?",
    o: ["Jismning massasiga", "Suyuqlik zichligiga", "Jism tomonidan siqib chiqarilgan suyuqlik og'irligiga", "Atmosfera bosimiga"],
    a: 2
  },
  {
    q: "Zichlik birligi nima?",
    o: ["kg/m2", "kg/m3", "N/m", "J/kg"],
    a: 1
  },
  {
    q: "Inertsiya momenti qanday formula bilan ifodalanadi?",
    o: ["I = m/r2", "I = ∑mr2", "I = Fr", "I = mv"],
    a: 1
  },
  {
    q: "Suyuqlikning sirt taranglik koeffitsienti birligi qaysi?",
    o: ["J/m", "Pa", "N/m", "N*m"],
    a: 2
  },
  {
    q: "Termodinamikaning 2-qonuni qanday jarayonlarni taqiqlaydi?",
    o: ["Issiqlikning sovuq jismdan issiq jismga o'z-o'zidan o'tishini", "Energiyaning bir turdan boshqasiga aylanishini", "Gazlarning kengayishini", "Ish bajarilishini"],
    a: 0
  },
  {
    q: "Karno siklining FIK (foydali ish koeffitsienti) formulasi qaysi?",
    o: ["η = (T1+T2)/T1", "η = T2/T1", "η = Q2/Q1", "η = (T1-T2)/T1"],
    a: 3
  },
  {
    q: "Suyuqlik yuzasining egriligi natijasida hosil bo'ladigan qo'shimcha bosim qanday nomlanadi?",
    o: ["Atmosfera bosimi", "Laplas bosimi", "Gidrostatik bosim", "Paskal bosimi"],
    a: 1
  },
  {
    q: "Reunolds soni Re < 2300 bo'lsa, oqim qanday xarakterga ega?",
    o: ["Turbulent", "Laminar", "Uzluksiz", "Aylanma"],
    a: 1
  },
  {
    q: "Entropiya tushunchasi nimani ifodalaydi?",
    o: ["Tizimning tartiblilik darajasini", "Tizimning tezligini", "Tizimning tartibsizlik o'lchovini", "Tizimning og'irligini"],
    a: 2
  },
  {
    q: "Jismning erkinlik darajasi i=5 bo'lsa, bu qanday gaz?",
    o: ["Bir atomli", "Ikki atomli", "Uch atomli", "Ko'p atomli"],
    a: 1
  },
  {
    q: "Suyuqlikning qovushqoqligini o'lchaydigan asbob nima?",
    o: ["Barometr", "Viskozimetr", "Manometr", "Termometr"],
    a: 1
  },
  {
    q: "Adiabata ko'rsatkichi (γ) nima?",
    o: ["P va V ko'paytmasi", "Cp va Cv issiqlik sig'imlari nisbati", "Molyar massa va zichlik nisbati", "Cp va Cv yig'indisi"],
    a: 1
  },
  {
    q: "Bir atomli gazlar uchun Cp/Cv nisbati qanchaga teng?",
    o: ["1.33", "2.0", "1.67", "1.4"],
    a: 2
  },
  {
    q: "Suyuqlikning sirt taranglik koeffitsienti birligini ko'rsating.",
    o: ["Barchasi to'g'ri", "N/m", "J/m²", "kg/s²"],
    a: 0
  },
  {
    q: "Suyuqlikning idish devorini namlashi nima bilan tushuntiriladi?",
    o: ["Suyuqlik va qattiq jism molekulalari orasidagi tortishish kuchi suyuqlikning o'zinikidan katta bo'lsa", "Suyuqlik molekulalarining o'zaro tortishishi kuchli bo'lsa", "Faqat tashqi bosim hisobiga", "Suyuqlik zichligi katta bo‘lsa"],
    a: 0
  },
  {
    q: "Qovushqoq suyuqlikda harakatlanayotgan sharchaga ta'sir etuvchi qarshilik kuchi (Stoks qonuni) qaysi?",
    o: ["F = ma", "F = kx", "F = 6πηrv", "F = μN"],
    a: 2
  },
  {
    q: "Ideal issiqlik mashinasining FIK isitkich harorati T1=600K va sovitkich harorati T2=300K bo'lganda qancha bo'ladi?",
    o: ["25%", "50%", "75%", "100%"],
    a: 1
  },
  {
    q: "Gazning o'rtacha kvadratik tezligi qaysi formula bilan aniqlanadi?",
    o: ["v = √(2RT/M)", "v = √(8RT/πM)", "v = √(3RT/M)", "v = √(kT/m)"],
    a: 2
  },
  {
    q: "Bolsman doimiysi (k) ning qiymati qancha?",
    o: ["6.67*10⁻¹¹ N*m²/kg²", "1.38*10⁻²³ J/K", "8.31 J/mol*K", "9.1*10⁻³¹ kg"],
    a: 1
  },
  {
    q: "Gazning bosimi molekulalarning konsentratsiyasiga qanday bog'liq?",
    o: ["Bog'liq emas", "Teskari proporsional", "Kvadratik bog'liq", "To'g'ri proporsional"],
    a: 3
  },
  {
    q: "Termodinamikaning 1-qonuni izotermik jarayon uchun qanday ko'rinishda bo'ladi?",
    o: ["Q = A", "Q = ΔU", "ΔU = A", "Q = 0"],
    a: 0
  },
  {
    q: "Suyuqlikning bug'lanish tezligi nimaga bog'liq?",
    o: ["Suyuqlik sirtining yuzasiga", "Suyuqlik haroratiga", "Barchasi to'g'ri", "Suyuqlik ustidagi bug'ning harakatiga"],
    a: 2
  },
  {
    q: "Moddaning uchlanish nuqtasi nima?",
    o: ["Modda faqat gaz va suyuq holatda bo'ladigan nuqta", "Modda bug'lanadigan nuqta", "Qattiq, suyuq va gaz holatlari muvozanatda bo'ladigan harorat va bosim", "Modda plazmaga aylanadigan nuqta"],
    a: 2
  },
  {
    q: "Issiqlik o'tkazuvchanlik koeffitsientining birligi nima?",
    o: ["J/K", "W/(m*K)", "N/m", "Pa*s"],
    a: 1
  },
  {
    q: "Erkinlik darajasi i=6 bo'lgan gaz molekulasi necha atomli?",
    o: ["Ikki atomli", "Bir atomli", "Bunday gaz mavjud emas", "Ko'p atomli (uch va undan ortiq)"],
    a: 3
  },
  {
    q: "Gaz kengayganda uning ustida tashqi kuchlar manfiy ish bajarsa, gazning o'zi qanday ish bajaradi?",
    o: ["Ish bajarmaydi", "Musbat ish bajaradi", "Manfiy ish bajaradi", "Energiyasi kamayadi"],
    a: 1
  },
  {
    q: "Jismning solishtirma issiqlik sig'imi nima?",
    o: ["1 kg moddani 1 gradusga isitish uchun kerak bo'lgan issiqlik miqdori", "Jismning butun massasini 1 gradusga isitish uchun ketadigan issiqlik", "1 mol moddaning issiqlik sig'imi", "Jismning qaynash issiqligi"],
    a: 0
  },
  {
    q: "Rezonans hodisasi qachon kuzatiladi?",
    o: ["Majburiy kuch chastotasi tizimning xususiy chastotasidan ancha katta bo'lganda", "Tebranishlar so'nganda", "Amplituda minimal bo'lganda", "Majburiy kuch chastotasi tizimning xususiy chastotasiga teng bo'lganda"],
    a: 3
  },
  {
    q: "To'lqin uzunligi (λ) va chastota (ν) orasidagi bog'lanish (v - to'lqin tezligi)?",
    o: ["λ = v * ν", "λ = v / ν", "λ = ν / v", "λ = 1 / ν"],
    a: 1
  },
  {
    q: "Matematik mayatnikning ipi uzunligi 4 marta ortsa, davri qanday o'zgaradi?",
    o: ["4 marta ortadi", "2 marta ortadi", "2 marta kamayadi", "O'zgarmaydi"],
    a: 1
  },
  {
    q: "Tovush to'lqinlari qaysi turdagi to'lqinlar hisoblanadi?",
    o: ["Faqat ko'ndalang", "Elektromagnit", "Mexanik bo'ylama", "Faqat bo'ylama"],
    a: 2
  },
  {
    q: "Ideal gaz uchun adiabata tenglamasi (Puasson tenglamasi) qaysi?",
    o: ["P/T = const", "PV^γ = const", "PV = const", "V/T = const"],
    a: 1
  },
  {
    q: "Garmonik tebranishning to'la mexanik energiyasi nimaga proporsional?",
    o: ["Vaqtga", "Amplitudaning o'ziga", "Chastotaga", "Amplitudaning kvadratiga"],
    a: 3
  },
  {
    q: "Suyuqlikning yuzasiga tushirilgan tashqi bosim qanday uzatiladi (Paskal qonuni)?",
    o: ["Faqat pastga", "Hamma yo'nalishda bir xil", "Faqat kuch yo'nalishida", "Faqat idish devorlariga"],
    a: 1
  },
  {
    q: "Arximed kuchi qaysi kattalikka bog'liq emas?",
    o: ["Jismning zichligiga", "Suyuqlik zichligiga", "Jismning botgan qismi hajmiga", "Erkin tushish tezlanishiga"],
    a: 0
  },
  {
    q: "Bernulli tenglamasi nimani ifodalaydi?",
    o: ["Suyuqlik oqimi uchun energiyaning saqlanish qonunini", "Impulsning saqlanish qonunini", "Gaz bosimining o'zgarishini", "Nyutonning 3-qonunini"],
    a: 0
  },
  {
    q: "Suyuqlikning sirt taranglik kuchi qaysi formula bilan aniqlanadi?",
    o: ["F = kx", "F = mg", "F = σl", "F = PS"],
    a: 2
  },
  {
    q: "Suyuqlik oqimining uzluksizlik tenglamasi qaysi?",
    o: ["F = ma", "S1v1 = S2v2", "P1V1 = P2V2", "E = mc²"],
    a: 1
  },
  {
    q: "Guk qonuni ifodasi qaysi?",
    o: ["P = mv", "E = mgh", "F = ma", "F = kx"],
    a: 3
  },
  {
    q: "Yung moduli nimani xarakterlaydi?",
    o: ["Modda zichligini", "Moddaning elastiklik xususiyatini", "Issiqlik o'tkazuvchanligini", "Elektr qarshiligini"],
    a: 1
  },
  {
    q: "Nisbiy deformatsiya nima?",
    o: ["Absolyut deformatsiyaning boshlang'ich o'lchamga nisbati", "Kuchning yuzaga nisbati", "Massa va hajm ko'paytmasi", "Tezlikning vaqtga nisbati"],
    a: 0
  },
  {
    q: "Mexanik tebranishlar nima?",
    o: ["Harakatning chiziqli ko'rinishi", "Tananing xususiy massasi", "Vaqt davomida takrorlanuvchi jarayonlar", "Koordinatalar sistemasining o'zgarishi"],
    a: 2
  },
  {
    q: "Koordinatalar sistemasida tebranishning holati qanday ifodalanadi?",
    o: ["Vaqtning integrali orqali", "Amplituda va faza orqali", "Fazo tezligi orqali", "Zarrachalarning energiyasi orqali"],
    a: 1
  },
  {
    q: "Chiziqli garmonik tebranishlar uchun energiya qaysi kattaliklar orqali ifodalanadi?",
    o: ["Faqat kinetik energiya orqali", "Elektromagnit energiya orqali", "Mexanik ish orqali", "Kinetik va potensial energiya orqali"],
    a: 3
  },
  {
    q: "Garmonik tebranishlarning davri nima?",
    o: ["Bir to'liq tebranishni amalga oshirish uchun ketadigan vaqt", "Massaning qiymati", "Tezlanishning o'zgarishi", "Kuchlanishning maksimal qiymati"],
    a: 0
  },
  {
    q: "Erkin tebranishlarning amplitudasi nima bilan belgilanadi?",
    o: ["Kuchlanish bilan", "Tezlanishning o'zgarishi bilan", "Tizimning boshlang'ich energiyasi bilan", "Radiusning kattaligi bilan"],
    a: 2
  },
  {
    q: "Ideal gazning ichki energiyasi nimaga bog'liq?",
    o: ["Faqat bosimga", "Faqat haroratga", "Idishning shakliga", "Gazning rangiga"],
    a: 1
  },
  {
    q: "Molekula kontsentratsiyasi nima?",
    o: ["Hajm birligidagi molekulalar soni", "Gazning umumiy massasi", "Molekulaning tezligi", "Gazning zichligi"],
    a: 0
  },
  {
    q: "Quyidagilardan qaysi biri skalyar kattalik?",
    o: ["Tezlik", "Tezlanish", "Kuch", "Energiyaning har qanday turi"],
    a: 3
  },
  {
    q: "Issiqlik miqdori birligi nima?",
    o: ["Vatt (W)", "Paskal (Pa)", "Joul (J)", "Kelvin (K)"],
    a: 2
  },
  {
    q: "Suyuqlikning idish tubiga beradigan bosimi nimaga bog'liq?",
    o: ["Suyuqlik ustuni balandligiga", "Idishning shakliga", "Atmosfera bosimiga", "Suyuqlik rangiga"],
    a: 0
  },
  {
    q: "Paskal qonuni nimani ifodalaydi?",
    o: ["Tashqi bosim suyuqlik va gazlarda hamma tomonga teng uzatilishini", "Suyuqlikning oqish tezligini", "Gazning kengayishini", "Issiqlik o'tkazuvchanlikni"],
    a: 0
  },
  {
    q: "Arximed kuchi nimaga teng?",
    o: ["Jismning massasiga", "Suyuqlik zichligiga", "Atmosfera bosimiga", "Jism tomonidan siqib chiqarilgan suyuqlik og'irligiga"],
    a: 3
  },
  {
    q: "Zichlik birligi nima?",
    o: ["kg/m²", "kg/m³", "N/m", "J/kg"],
    a: 1
  },
  {
    q: "Inertsiya momenti qanday formula bilan ifodalanadi?",
    o: ["I = m/r²", "I = Fr", "I = ∑mr²", "I = mv"],
    a: 2
  },
  {
    q: "Suyuqlikning sirt taranglik koeffitsienti birligi qaysi?",
    o: ["N/m", "J/m", "N·m", "Pa"],
    a: 0
  },
  {
    q: "Bernulli tenglamasi qaysi qonunga asoslangan?",
    o: ["Impulsning saqlanish qonuni", "Massa saqlanish qonuni", "Energiyaning saqlanish qonuni", "Nyutonning 2-qonuni"],
    a: 2
  },
  {
    q: "Termodinamikaning 2-qonuni qanday jarayonlarni taqiqlaydi?",
    o: ["Energiyaning bir turdan boshqasiga aylanishini", "Issiqlikning sovuq jismdan issiq jismga o'z-o'zidan o'tishini", "Gazlarning kengayishini", "Ish bajarilishini"],
    a: 1
  },
  {
    q: "Karno siklining FIK (foydali ish koeffitsienti) formulasi qaysi?",
    o: ["η = (T1+T2)/T1", "η = T2/T1", "η = (T1-T2)/T1", "η = Q2/Q1"],
    a: 2
  },
  {
    q: "Molekulyar kinetik nazariyaning asosiy tenglamasi P=1/3 nmv² dagi 'n' nimani bildiradi?",
    o: ["Molekulalar massasi", "Molekulalar konsentratsiyasi", "Molekulalar tezligi", "Molekulalar soni"],
    a: 1
  },
  {
    q: "Ideal gazning ichki energiyasi qaysi parametrga bog'liq?",
    o: ["Faqat bosimga", "Faqat hajmga", "Idish shakliga", "Faqat haroratga"],
    a: 3
  },
  {
    q: "Suyuqlik yuzasining egriligi natijasida hosil bo'ladigan qo'shimcha bosim qanday nomlanadi?",
    o: ["Atmosfera bosimi", "Gidrostatik bosim", "Laplas bosimi", "Paskal bosimi"],
    a: 2
  },
  {
    q: "Reyunolds soni Re < 2300 bo'lsa, oqim qanday xarakterga ega?",
    o: ["Turbulent", "Uzluksiz", "Aylanma", "Laminar"],
    a: 3
  },
  {
    q: "Gazning solishtirma issiqlik sig'imi Cp va Cv orasidagi Mayer tenglamasini toping.",
    o: ["Cp + Cv = R", "Cp - Cv = R", "Cp / Cv = R", "Cp = Cv"],
    a: 1
  },
  {
    q: "Entropiya tushunchasi nimani ifodalaydi?",
    o: ["Tizimning tartiblilik darajasini", "Tizimning tartibsizlik o'lchovini", "Tizimning tezligini", "Tizimning og'irligini"],
    a: 1
  },
  {
    q: "Jismning erkinlik darajasi i=5 bo'lsa, bu qanday gaz?",
    o: ["Bir atomli", "Uch atomli", "Ko'p atomli", "Ikki atomli"],
    a: 3
  },
  {
    q: "Adiabata tenglamasi (Puasson) qaysi?",
    o: ["PV = const", "V/T = const", "PV^γ = const", "P/T = const"],
    a: 2
  },
  {
    q: "Suyuqlikning qovushqoqligini o'lchaydigan asbob nima?",
    o: ["Barometr", "Viskozimetr", "Manometr", "Termometr"],
    a: 1
  },
  {
    q: "Molekulalarning o'rtacha kvadratik tezligi qaysi formula bilan aniqlanadi?",
    o: ["v = √(2RT/M)", "v = √(8RT/πM)", "v = P/ρ", "v = √(3RT/M)"],
    a: 3
  },
  {
    q: "Garmonik tebranishning differensial tenglamasini toping.",
    o: ["d²x/dt² + ω²x = 0", "dx/dt + ωx = 0", "F = -kx", "E = kx²/2"],
    a: 0
  },
  {
    q: "So'nuvchi tebranishlarda amplituda qanday qonuniyat bo'yicha kamayadi?",
    o: ["Chiziqli", "Kvadratik", "Eksponensial", "Logarifmik"],
    a: 2
  },
  {
    q: "Matematik mayatnikning tebranish davri formulasi qaysi?",
    o: ["T = 2π√(k/m)", "T = 2π√(l/g)", "T = 2π√(I/mgd)", "T = 1/f"],
    a: 1
  },
  {
    q: "Fizik mayatnikning tebranish davri formulasi qaysi?",
    o: ["T = 2π√(l/g)", "T = 2π√(m/k)", "T = 2π√(I/mga)", "T = ω/2π"],
    a: 2
  },
  {
    q: "Rezonans hodisasi nima?",
    o: ["Amplitudaning keskin kamayishi", "Chastotaning ortishi", "Tebranishning to'xtashi", "Majburiy kuch chastotasi xususiy chastotaga mos kelganda amplitudaning keskin ortishi"],
    a: 3
  },
  {
    q: "To'lqin uzunligi (λ), tezlik (v) va davr (T) orasidagi bog'liqlikni ko'rsating.",
    o: ["λ = vT", "λ = v/T", "λ = T/v", "λ = v+T"],
    a: 0
  },
  {
    q: "Bo'ylama to'lqinlarda muhit zarralari qanday tebranadi?",
    o: ["To'lqin tarqalish yo'nalishiga perpendikulyar", "Aylana bo'ylab", "To'lqin tarqalish yo'nalishi bo'ylab", "Tebranmaydi"],
    a: 2
  },
  {
    q: "Ko'ndalang to'lqinlarda muhit zarralari qanday tebranadi?",
    o: ["To'lqin tarqalish yo'nalishiga perpendikulyar", "To'lqin tarqalish yo'nalishi bo'ylab", "Xaotik", "Faqat yuqoriga"],
    a: 0
  },
  {
    q: "Tovush to'lqinlari qaysi muhitda tarqalmaydi?",
    o: ["Suyuqlikda", "Gazda", "Vakuumda", "Qattiq jismda"],
    a: 2
  },
  {
    q: "Ultratovush chastotasi qancha?",
    o: ["16 Hz dan kichik", "20000 Hz dan yuqori", "100-200 Hz", "5000 Hz"],
    a: 1
  },
  {
    q: "Garmonik tebranishda tezlik maksimal qiymatiga qachon erishadi?",
    o: ["Maksimal og'ish nuqtasida", "Muvozanat vaziyatidan o'tayotganda", "Tebranish to'xtaganda", "Faza 90 gradus bo'lganda"],
    a: 1
  },
  {
    q: "To'lqin soni (k) qanday aniqlanadi?",
    o: ["k = 2πf", "k = v/λ", "k = 1/T", "k = 2π/λ"],
    a: 3
  },
  {
    q: "Interferensiya hodisasi nima?",
    o: ["Kogerent to'lqinlarning qo'shilishi natijasida amplitudaning taqsimlanishi", "To'lqinning to'siqni aylanib o'tishi", "To'lqinning yutilishi", "Tezlikning o'zgarishi"],
    a: 0
  },
  {
    q: "Diffraksiya hodisasi nima?",
    o: ["To'lqinlarning qo'shilishi", "To'lqinning to'siqlarni aylanib o'tishi", "To'lqinning qaytishi", "To'lqinning tarqalishi"],
    a: 1
  },
  {
    q: "Kogerent manbalar deb qanday manbalarga aytiladi?",
    o: ["Faqat amplitudalari teng bo'lgan", "Bir nuqtadan chiquvchi", "Chastotalari teng va fazalar farqi o'zgarmas bo'lgan", "Ranglari bir xil bo'lgan"],
    a: 2
  },
  {
    q: "Statsionar to'lqin nima?",
    o: ["Bir xil amplitudali va chastotali qarama-qarshi yo'nalgan ikkita to'lqinning ustma-ust tushishi", "Tarqalmaydigan to'lqin", "Faqat bitta yo'nalishda boruvchi to'lqin", "Sinuvchi to'lqin"],
    a: 0
  },
  {
    q: "Molekulyar-kinetik nazariyaning asosiy tenglamasi qaysi?",
    o: ["P = 1/3 nmv²", "F = kx", "E = mgh", "U = RI"],
    a: 0
  },
  {
    q: "Ideal gaz holat tenglamasi (Mendeleyev-Klapeyron) qaysi?",
    o: ["P = F/S", "PV = (m/M)RT", "V = S/t", "Q = cmΔT"],
    a: 1
  },
  {
    q: "Absolyut harorat shkalasi (Kelvin) va Selsiy orasidagi bog'lanish qanday?",
    o: ["T = t - 273", "T = 2t", "T = t / 273", "T = t + 273"],
    a: 3
  },
  {
    q: "Gey-Lyussak qonuni (izobarik jarayon) qanday ifodalanadi?",
    o: ["PV = const", "P/T = const", "V/T = const", "V·T = const"],
    a: 2
  },
  {
    q: "Sharl qonuni (izoxorik jarayon) qanday ifodalanadi?",
    o: ["P/T = const", "PV = const", "V/T = const", "P·T = const"],
    a: 0
  },
  {
    q: "Boyl-Mariott qonuni (izotermik jarayon) qanday ifodalanadi?",
    o: ["V/T = const", "PV = const", "P/T = const", "P/V = const"],
    a: 1
  },
  {
    q: "Gazning molyar issiqlik sig'imi (Cm) va solishtirma issiqlik sig'imi (c) orasidagi bog'lanish qanday?",
    o: ["Cm = M / c", "Cm = M + c", "Cm = M * c", "Cm = c / M"],
    a: 2
  },
  {
    q: "Ekvipartitsiya qonuniga ko'ra, har bir erkinlik darajasiga to'g'ri keluvchi o'rtacha energiya qancha?",
    o: ["E = kT", "E = 1/2 kT", "E = 3/2 kT", "E = 2kT"],
    a: 1
  },
  {
    q: "Mayer tenglamasiga ko'ra, Cp va Cv issiqlik sig'imlari farqi nimaga teng?",
    o: ["Universal gaz doimiysi R ga", "Boltsman doimiysi k ga", "Molyar massa M ga", "Nolga"],
    a: 0
  },
  {
    q: "Molekulalarning o'rtacha kvadratik tezligi haroratga qanday bog'liq?",
    o: ["Teskari proporsional", "Haroratning kvadrat ildiziga to'g'ri proporsional", "Haroratning kvadratiga proporsional", "Bog'liq emas"],
    a: 1
  },
  {
    q: "Gaz molekulalarining eng ehtimolli tezligi qanday ifodalanadi?",
    o: ["v = √(3RT/M)", "v = √(8RT/πM)", "v = √(2RT/M)", "v = RT/M"],
    a: 2
  },
  {
    q: "Barometrik formula nima uchun ishlatiladi?",
    o: ["Gaz bosimining balandlik bo'yicha o'zgarishini aniqlash uchun", "Suyuqlik oqimini o'lchash uchun", "Zichlikni topish uchun", "Issiqlik o'tkazuvchanlikni hisoblash uchun"],
    a: 0
  },
  {
    q: "Boltsman taqsimoti nimani ifodalaydi?",
    o: ["Zarrachalarning tezlik bo'yicha taqsimlanishini", "Zarrachalarning tashqi kuch maydonidagi potensial energiya bo'yicha taqsimlanishini", "Suyuqlik yuzasidagi bosimni", "Entropiyaning kamayishini"],
    a: 1
  },
  {
    q: "Molekulalarning o'rtacha erkin yugurish yo'li (λ) bosimga qanday bog'liq?",
    o: ["To'g'ri proporsional", "Bosim kvadratiga proporsional", "Bog'liq emas", "Teskari proporsional"],
    a: 3
  },
  {
    q: "Diffuziya koeffitsienti (D) molekulalarning o'rtacha tezligiga qanday bog'liq?",
    o: ["To'g'ri proporsional", "Teskari proporsional", "Bog'liq emas", "Logarifmik bog'liq"],
    a: 0
  },
  {
    q: "Suyuqlikning yopishqoqlik (ichki ishqalanish) koeffitsienti harorat ortishi bilan qanday o'zgaradi?",
    o: ["Ortadi", "O'zgarmaydi", "Kamayadi", "Avval kamayib, keyin ortadi"],
    a: 2
  },
  {
    q: "Furye qonuni (issiqlik o'tkazuvchanlik) qaysi kattaliklar orasidagi bog'lanishni ko'rsatadi?",
    o: ["Issiqlik oqimi va harorat gradienti", "Bosim va hajm", "Kuch va tezlanish", "Massa va energiya"],
    a: 0
  },
  {
    q: "Karno siklida isitkichdan olingan issiqlik miqdori Q1 va sovitkichga berilgan issiqlik miqdori Q2 bo'lsa, foydali ish (A) qanday topiladi?",
    o: ["A = Q1 + Q2", "A = Q1 * Q2", "A = Q1 / Q2", "A = Q1 - Q2"],
    a: 3
  },
  {
    q: "Kritik holatda moddaning suyuq va gaz holatlari orasidagi farq qanday bo'ladi?",
    o: ["Farq maksimal bo'ladi", "Fizik xossalaridagi farq yo'qoladi", "Zichlik nolga teng bo'ladi", "Harorat absolyut nolga tushadi"],
    a: 1
  },
  {
    q: "Suyuqlikning sirt taranglik koeffitsienti (σ) qanday birlikda o'lchanadi?",
    o: ["J/m² yoki N/m", "Pa * s", "Watt / m", "kg * m / s"],
    a: 0
  },
  {
    q: "Kapillyar naychada suyuqlik sathi qachon ko'tariladi?",
    o: ["Suyuqlik naycha devorini namlamasa", "Tashqi bosim juda yuqori bo'lsa", "Suyuqlik naycha devorini namlasa", "Suyuqlik zichligi havodan kichik bo'lsa"],
    a: 2
  },
  {
    q: "Laplas bosimi qavariq sferik sirt ostida qanday yo'nalgan bo'ladi?",
    o: ["Suyuqlik sirti ichkarisiga", "Suyuqlik sirti tashqarisiga", "Sirt bo'ylab", "Yo'nalishga ega emas"],
    a: 0
  },
  {
    q: "Guk qonuni qo'llanilish sohasi nima?",
    o: ["Plastik deformatsiyalar", "Elastik deformatsiyalar", "Suyuqliklar oqimi", "Gazlarning kengayishi"],
    a: 1
  },
  {
    q: "Nisbiy uzayish (ε) o'lchov birligi nima?",
    o: ["Metr", "Metr kvadrat", "Birlikka ega emas (o'lchamsiz)", "Paskal"],
    a: 2
  },
  {
    q: "Qattiq jismning barcha tomonlama siqilish moduli nima deb ataladi?",
    o: ["Yung moduli", "Hajmiy elastiklik moduli", "Puasson koeffitsienti", "Siljish moduli"],
    a: 1
  },
  {
    q: "Termodinamik tizimda entropiya (S) qachon ortadi?",
    o: ["Qaytar jarayonlarda", "Faqat issiqlik chiqarilganda", "Qaytmas jarayonlarda", "Mutloq nol haroratda"],
    a: 2
  },
  {
    q: "Ideal issiqlik mashinasining FIK isitkich haroratiga qanday bog'liq?",
    o: ["Isitkich harorati ortishi bilan ortadi", "Isitkich harorati ortishi bilan kamayadi", "Bog'liq emas", "Kvadratik bog'liq"],
    a: 0
  },
  {
    q: "Suyuqlikning dinamik yopishqoqlik koeffitsienti birligi nima?",
    o: ["Pa·s (Paskal-sekund)", "N/m", "kg/m³", "J/kg"],
    a: 0
  },
  {
    q: "Suyuqlik oqimi qachon turbulent bo'ladi?",
    o: ["Reyunolds soni kritik qiymatdan katta bo'lganda", "Reyunolds soni nolga teng bo'lganda", "Tezlik juda past bo'lganda", "Suyuqlik zichligi kam bo'lganda"],
    a: 0
  },
  {
    q: "Issiqlik o'tkazuvchanlik jarayonida energiya qanday ko'chadi?",
    o: ["Molekulalarning xaotik to'qnashuvlari natijasida", "Moddaning oqimi bilan", "Elektromagnit to'lqinlar orqali", "Faqat nurlanish orqali"],
    a: 0
  },
  {
    q: "Molyar issiqlik sig'imi Cp va Cv issiqlik sig'imlaridan qaysi biri doimo katta?",
    o: ["Cp doimo Cv dan katta", "Cv doimo Cp dan katta", "Ular teng", "Gaz turiga bog'liq"],
    a: 0
  },
  {
    q: "Real gaz molekulalari orasidagi o'zaro ta'sir kuchlari qachon sezilarli bo'ladi?",
    o: ["Yuqori bosim va past haroratlarda", "Past bosim va yuqori haroratlarda", "Vakuumda", "Faqat absolyut nol haroratda"],
    a: 0
  },
  {
    q: "Van-der-Vaals tenglamasida (V-b) ifodasi nimani bildiradi?",
    o: ["Molekulalar harakat qilishi mumkin bo'lgan bo'sh hajmni", "Gazning umumiy hajmini", "Molekulalarning o'z hajmini", "Suyuqlik hajmini"],
    a: 0
  },
  {
    q: "Suyuqlikning sirt taranglik energiyasi yuzaga qanday bog'liq?",
    o: ["Yuza yuzasiga to'g'ri proporsional", "Yuza yuzasiga teskari proporsional", "Bog'liq emas", "Kvadratik bog'liq"],
    a: 0
  },
  {
    q: "Kapillyar naycha radiusi 2 marta kamaysa, suyuqlikning ko'tarilish balandligi qanday o'zgaradi?",
    o: ["2 marta ortadi", "2 marta kamayadi", "4 marta ortadi", "O'zgarmaydi"],
    a: 0
  },
  {
    q: "Jovul-Tomson effekti nimani tushuntiradi?",
    o: ["Gazning drossellash (kengayish) natijasida haroratining o'zgarishini", "Suyuqlikning qaynashini", "Moddaning erishini", "Gazning elektr o'tkazuvchanligini"],
    a: 0
  },
  {
    q: "Qattiq jismning issiqlikdan chiziqli kengayish koeffitsienti birligi nima?",
    o: ["K⁻¹ (1/Kelvin)", "Metr", "Pa", "J/K"],
    a: 0
  },
  {
    q: "Guk qonunidagi Yung moduli (E) qaysi kattalikka bog'liq?",
    o: ["Faqat moddaning turiga", "Jismning shakliga", "Tashqi kuch miqdoriga", "Jismning uzunligiga"],
    a: 0
  },
  {
    q: "Deformatsiya paytida jismning ko'ndalang kesimi o'zgarishini xarakterlovchi koeffitsient?",
    o: ["Puasson koeffitsienti", "Yung moduli", "Qattiqlik koeffitsienti", "Ishqalanish koeffitsienti"],
    a: 0
  },
  {
    q: "Termodinamikaning uchinchi qonuni (Nernst teoremasi) nimani ta'kidlaydi?",
    o: ["Absolyut nol haroratga erishib bo'lmasligini", "Energiya doim saqlanishini", "Entropiya doim kamayishini", "Issiqlik mashinasi FIK 100% bo'lishini"],
    a: 0
  },
  {
    q: "Faza o'tish issiqligi (masalan, erish issiqligi) qanday aniqlanadi?",
    o: ["Q = λm", "Q = cmΔT", "Q = qm", "Q = PV"],
    a: 0
  },
  {
    q: "Kondensatsiya nima?",
    o: ["Moddaning gaz holatidan suyuq holatga o'tishi", "Moddaning suyuq holatidan gaz holatiga o'tishi", "Moddaning qattiq holatdan gaz holatiga o'tishi", "Muzning erishi"],
    a: 0
  },
  {
    q: "Sublimatsiya (haydash) hodisasi nima?",
    o: ["Moddaning qattiq holatdan suyuqlikni chetlab o'tib gazga aylanishi", "Gazning suyuqlikka aylanishi", "Suyuqlikning muzlashi", "Gazning plazmaga aylanishi"],
    a: 0
  },
  {
    q: "Havoning nisbiy namligini o'lchaydigan asbob?",
    o: ["Gigrometr", "Aremoter", "Dinamometr", "Barometr"],
    a: 0
  },
  {
    q: "Suyuqlik yuzasidagi molekulalarga ta'sir etuvchi natijaviy kuch qayerga yo'nalgan?",
    o: ["Suyuqlik ichiga", "Suyuqlikdan tashqariga", "Sirt bo'ylab", "Nolga teng"],
    a: 0
  },
  {
    q: "To'yingan bug' bosimi harorat ortishi bilan qanday o'zgaradi?",
    o: ["Tez (eksponensial) ortadi", "Kamayadi", "O'zgarmaydi", "Chiziqli kamayadi"],
    a: 0
  },
  {
    q: "Garmonik tebranishda maksimal tezlik qaysi nuqtada kuzatiladi?",
    o: ["Muvozanat vaziyatida", "Maksimal og'ish nuqtasida", "Amplitudaning yarmida", "Tebranish to'xtashidan oldin"],
    a: 0
  },
  {
    q: "Matematik mayatnikning tebranish davri jism massasiga bog'liqmi?",
    o: ["Bog'liq emas", "To'g'ri proporsional", "Teskari proporsional", "Kvadratik bog'liq"],
    a: 0
  },
  {
    q: "Agar tebranma harakatning chastotasi 50 Hz bo'lsa, davri qanchaga teng?",
    o: ["0.02 s", "0.5 s", "2 s", "50 s"],
    a: 0
  },
  {
    q: "Qaysi to'lqinlar ham ko'ndalang, ham bo'ylama bo'lishi mumkin?",
    o: ["Mexanik to'lqinlar", "Faqat tovush to'lqinlari", "Elektromagnit to'lqinlar", "Faqat yorug'lik"],
    a: 0
  },
  {
    q: "To'lqinning intensivligi nima bilan belgilanadi?",
    o: ["Amplitudaning kvadrati bilan", "To'lqin uzunligi bilan", "Muhitning rangi bilan", "Faqat manba quvvati bilan"],
    a: 0
  },
  {
    q: "Eshitish chegarasidan past chastotali tovushlar nima deyiladi?",
    o: ["Infratovush", "Ultratovush", "Gipershash", "Akustik shovqin"],
    a: 0
  },
  {
    q: "Doppler effekti nimani tushuntiradi?",
    o: ["Manba va kuzatuvchi harakati natijasida chastotaning o'zgarishini", "To'lqinning qaytishini", "To'lqinning sinishini", "Interferensiya hodisasini"],
    a: 0
  },
  {
    q: "Gazning solishtirma issiqlik sig'imi o'zgarmas bosimda (Cp) nima uchun Cv dan katta?",
    o: ["Kengayishda ish bajarilganligi sababli", "Gaz zichligi ortganligi sababli", "Molekulalar tezligi kamaygani uchun", "Bu faqat suyuqliklarga tegishli"],
    a: 0
  },
  {
    q: "Suyuqlikning namlash burchagi 180 gradusga yaqin bo'lsa, bu qanday holat?",
    o: ["Mutloq namlamaslik", "To'la namlash", "Kapillyarlik", "Sirt taranglikning yo'qligi"],
    a: 0
  },
  {
    q: "Qattiq jismlarning issiqlik sig'imi bo'yicha Dyulong-Pti qonuni qachon o'rinli?",
    o: ["Yuqori haroratlarda", "Absolyut nol yaqinida", "Faqat gazlar uchun", "Vakuumda"],
    a: 0
  },
  {
    q: "Entropiyaning statistik ma'nosi nimadan iborat?",
    o: ["Tizimning tartibsizlik darajasini ifodalaydi", "Tizimning massasini aniqlaydi", "Molekulalar sonini hisoblaydi", "Faqat bosimni o'lchaydi"],
    a: 0
  },
  {
    q: "Fazaviy o'tishning ikkinchi turiga misol keltiring?",
    o: ["Moddaning magnit xossasining yo'qolishi (Kyuri nuqtasi)", "Muzning erishi", "Suvning qaynashi", "Gazning kondensatsiyasi"],
    a: 0
  },
  {
    q: "Yopishqoq suyuqlikning laminar oqimi quvurning qaysi qismida maksimal tezlikka ega?",
    o: ["Quvur markazida (o'qida)", "Quvur devori yaqinida", "Quvurga kirishda", "Tezlik hamma yerda bir xil"],
    a: 0
  },
  {
    q: "Garmonik tebranishning fazasi nimani aniqlaydi?",
    o: ["Vaqtning istalgan momentidagi tebranish holatini", "Faqat amplitudani", "Faqat chastotani", "Tebranish yo'nalishini"],
    a: 0
  },
  {
    q: "Muhitning yutilish koeffitsienti to'lqin o'tayotganda nimaga ta'sir qiladi?",
    o: ["Amplitudaning kamayishiga", "Tezlikning ortishiga", "To'lqin uzunligining ortishiga", "Rangning o'zgarishiga"],
    a: 0
  },
  {
    q: "Ideal gaz molekulalarining o'rtacha kvadratik tezligi m0=10⁻²⁶ kg va T=300K da qancha bo'ladi (taxminan)?",
    o: ["500-1000 m/s", "10-20 m/s", "300000 km/s", "0.5 m/s"],
    a: 0
  },
  {
    q: "Modda miqdori (mol) qanday aniqlanadi?",
    o: ["ν = m / M", "ν = m * M", "ν = ρ / V", "ν = N * Na"],
    a: 0
  },
  {
    q: "Universal gaz doimiysining son qiymati qancha?",
    o: ["8.31 J/(mol·K)", "1.38 * 10⁻²³ J/K", "6.02 * 10²³ mol⁻¹", "9.8 m/s²"],
    a: 0
  },
  {
    q: "Tizimning ichki energiyasi qaysi holat funksiyasi hisoblanadi?",
    o: ["Termodinamik parametrlar funksiyasi", "Faqat tashqi kuchlar funksiyasi", "Faqat vaqt funksiyasi", "Traektoriya funksiyasi"],
    a: 0
  },
  {
    q: "Qaytar jarayon deb nimaga aytiladi?",
    o: ["Tizim va atrof-muhitda hech qanday o'zgarish qoldirmasdan orqaga qaytishi mumkin bo'lgan jarayonga", "Faqat soat mili yo'nalishidagi jarayonga", "Tez sodir bo'ladigan portlashga", "Issiqlik chiqadigan jarayonga"],
    a: 0
  },
  {
    q: "O'zgarmas bosimda gazning hajmi haroratga qanday bog'liq (Gey-Lyussak qonuni)?",
    o: ["Teskari proporsional", "Kvadratik bog'liq", "To'g'ri proporsional", "Bog'liq emas"],
    a: 2
  },
  {
    q: "Molekulalarning o'rtacha erkin yugurish yo'li konsentratsiyaga qanday bog'liq?",
    o: ["Teskari proporsional", "To'g'ri proporsional", "Bog'liq emas", "Kvadratik bog'liq"],
    a: 0
  },
  {
    q: "Real gazlarda Van-der-Vaals tuzatmasi (P + a/V²) dagi 'a' koeffitsienti nimani ifodalaydi?",
    o: ["Molekulalararo tortishish kuchini", "Molekulalarning xususiy hajmini", "Tashqi bosimni", "Gazning kinetik energiyasini"],
    a: 0
  },
  {
    q: "Suyuqlikning sirt taranglik koeffitsienti birligi J/m² dan tashqari yana qanday ifodalanishi mumkin?",
    o: ["N/m", "Pa", "kg/m", "W/m²"],
    a: 0
  },
  {
    q: "Qaysi jarayonda gazning ichki energiyasi o'zgarmaydi?",
    o: ["Izobaral", "Izoxoral", "Izotermik", "Adiabatik"],
    a: 2
  },
  {
    q: "Termodinamikaning ikkinchi qonuniga ko'ra, yopiq sistemada entropiya qanday o'zgaradi?",
    o: ["Kamayadi", "O'zgarmaydi", "Kamayadi yoki o'zgarmaydi", "Ortadi yoki o'zgarmaydi"],
    a: 3
  },
  {
    q: "Matematik mayatnikning tebranish davri qaysi kattalikka bog'liq?",
    o: ["Jism massasiga", "Ip uzunligiga", "Tebranish amplitudasiga", "Jismning zichligiga"],
    a: 1
  },
  {
    q: "Qattiq jismlarning issiqlik o'tkazuvchanligi asosan nima hisobiga amalga oshadi?",
    o: ["Modda oqimi", "Kristall panjara tebranishlari (fononlar) va erkin elektronlar", "Elektromagnit nurlanish", "Konveksiya"],
    a: 1
  },
  {
    q: "To'lqinning tarqalish tezligi va muhitning elastiklik xossasi orasidagi bog'liqlik qanday?",
    o: ["Elastiklik ortsa, tezlik ham ortadi", "Elastiklik ortsa, tezlik kamayadi", "Bog'liq emas", "Faqat chastotaga bog'liq"],
    a: 0
  },
  {
    q: "Statsionar to'lqinda ikkita qo'shni tugun orasidagi masofa nimaga teng?",
    o: ["To'lqin uzunligiga (λ)", "To'lqin uzunligining yarmiga (λ/2)", "To'lqin uzunligining to'rtdan biriga (λ/4)", "Ikkita to'lqin uzunligiga (2λ)"],
    a: 1
  },
  {
    q: "Moddaning kritik bosimi nima?",
    o: ["Suyuqlikning qaynash bosimi", "Kritik haroratda bug'ning suyuqlikka aylanishi uchun zarur bo'lgan bosim", "Atmosfera bosimi", "Absolyut nol bosimi"],
    a: 1
  },
  {
    q: "Erkinlik darajasi i=3 bo'lgan gaz uchun molyar issiqlik sig'imi Cv qanchaga teng?",
    o: ["3/2 R", "5/2 R", "R", "3 R"],
    a: 0
  },
  {
    q: "Jismning issiqlik sig'imi va uning massasi orasidagi bog'liqlik?",
    o: ["C = mc", "C = m/c", "C = c/m", "C = m + c"],
    a: 0
  },
  {
    q: "Suyuqlikning bug'lanish issiqligi harorat ortishi bilan qanday o'zgaradi?",
    o: ["Ortadi", "O'zgarmaydi", "Kamayadi", "Avval ortib, keyin kamayadi"],
    a: 2
  },
  {
    q: "Real gaz molekulalari bir-biridan uzoqlashganda ularning potensial energiyasi qanday o'zgaradi?",
    o: ["Ortadi", "Kamayadi", "O'zgarmaydi", "Nolga teng bo'ladi"],
    a: 0
  }
];