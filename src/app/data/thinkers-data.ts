import { Thinker } from './types';

export const THINKERS: Thinker[] = [
  {
    name: 'პლატონი',
    years: 'ძვ.წ. 428/427 – ძვ.წ. 348/347',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/220px-Plato_Silanion_Musei_Capitolini_MC1377.jpg',
    nationality: 'ძველი საბერძნეთი',
    contribution: '„სახელმწიფო" — სამართლიანობის, იდეალური სახელმწიფოსა და ფილოსოფოს-მეფის კონცეფცია',
    details: 'ანტიკური ფილოსოფიის უმნიშვნელოვანესი წარმომადგენელი. სოკრატეს მოწაფე, არისტოტელეს მასწავლებელი. აკადემიის დამფუძნებელი ათენში. მისმა დიალოგებმა მთელი дასავლური ფილოსოფიის საფუძვლები ჩაუყარა.',
    field: 'ფილოსოფია, პოლიტიკური თეორია'
  },
  {
    name: 'პავლე მოციქული',
    years: 'დაახ. 5 – დაახ. 64/67 ახ.წ.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Saint_Paul%2C_Rembrandt_van_Rijn_%28and_Workshop%3F%29%2C_c._1657.jpg/220px-Saint_Paul%2C_Rembrandt_van_Rijn_%28and_Workshop%3F%29%2C_c._1657.jpg',
    nationality: 'რომის იმპერია (ტარსუსი)',
    contribution: 'ეპისტოლე რომაელთა მიმართ — რწმენით გამართლების დოქტრინა',
    details: 'ქრისტიანული თეოლოგიის ფუნდამენტური ფიგურა. თავდაპირველად ქრისტიანების მდევნელი, მოგვიანებით ქრისტეს უდიდესი მისიონერი. მისი ეპისტოლეები ახალი აღთქმის მნიშვნელოვან ნაწილს შეადგენს.',
    field: 'თეოლოგია, ფილოსოფია'
  },
  {
    name: 'ნიკოლო მაკიაველი',
    years: '1469 – 1527',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg/220px-Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg',
    nationality: 'იტალია (ფლორენცია)',
    contribution: '„მთავარი" — პოლიტიკური რეალიზმი და ძალაუფლების თეორია',
    details: 'ფლორენციელი დიპლომატი, მოაზროვნე და მწერალი. თანამედროვე პოლიტიკური მეცნიერების ერთ-ერთი ფუძემდებელი. მისი „მთავარი" ძალაუფლების პრაქტიკული ანალიზის კლასიკურ ნიმუშად ითვლება.',
    field: 'პოლიტიკური ფილოსოფია'
  },
  {
    name: 'თომას ჰობსი',
    years: '1588 – 1679',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Thomas_Hobbes_%28portrait%29.jpg/220px-Thomas_Hobbes_%28portrait%29.jpg',
    nationality: 'ინგლისი',
    contribution: '„ლევიათანი" — სოციალური კონტრაქტი და სუვერენის აბსოლუტური ძალაუფლება',
    details: 'ინგლისელი ფილოსოფოსი, სოციალური კონტრაქტის თეორიის ერთ-ერთი ფუძემდებელი. მისი „ლევიათანი" სახელმწიფოს ფილოსოფიის ქვაკუთხედია. ცხოვრობდა ინგლისის სამოქალაქო ომის პერიოდში.',
    field: 'პოლიტიკური ფილოსოფია'
  },
  {
    name: 'ჯონ ლოკი',
    years: '1632 – 1704',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JohnLocke.png/220px-JohnLocke.png',
    nationality: 'ინგლისი',
    contribution: '„მეორე ტრაქტატი" — ბუნებითი უფლებები, საკუთრება და რევოლუციის უფლება',
    details: 'ინგლისელი ფილოსოფოსი, ლიბერალიზმის ფუძემდებელი, „ცრურწმენის ფილოსოფია" ემპირიზმის მამა. მისი პოლიტიკური ფილოსოფია პირდაპირ აისახა ამერიკისა და საფრანგეთის რევოლუციებზე.',
    field: 'პოლიტიკური ფილოსოფია, ეპისტემოლოგია'
  },
  {
    name: 'ადამ სმითი',
    years: '1723 – 1790',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/AdamSmith.jpg/220px-AdamSmith.jpg',
    nationality: 'შოტლანდია',
    contribution: '„ხალხთა სიმდიდრე" — თავისუფალი ბაზარი და „უხილავი ხელი"',
    details: 'შოტლანდიელი ეკონომისტი და ფილოსოფოსი, „ეკონომიკის მამა". მის „ხალხთა სიმდიდრე" თანამედროვე ეკონომიკური მეცნიერების საფუძვლადაა მიჩნეული. ასევე ავტორია „მორალურ სენტიმენტთა თეორიისა".',
    field: 'ეკონომიკა, მორალური ფილოსოფია'
  },
  {
    name: 'იმანუელ კანტი',
    years: '1724 – 1804',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/220px-Kant_gemaelde_3.jpg',
    nationality: 'პრუსია (კიონიგსბერგი)',
    contribution: '„რა არის განმანათლებლობა?" — ინტელექტუალური ემანსიპაციის მოწოდება',
    details: 'გერმანელი ფილოსოფოსი, განმანათლებლობის მთავარი ფიგურა. მისი კრიტიკული ფილოსოფია ეთიკის, ეპისტემოლოგიისა და ესთეტიკის ფუნდამენტი გახდა. ცნობილია კატეგორიული იმპერატივით.',
    field: 'ფილოსოფია, ეთიკა'
  },
  {
    name: 'მერი უოლსტონკრაფტი',
    years: '1759 – 1797',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg/220px-Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg',
    nationality: 'ინგლისი',
    contribution: '„ქალის უფლებების დაცვა" — ფემინიზმის ფუძემდებელი ტექსტი',
    details: 'ინგლისელი მწერალი და ფილოსოფოსი, ფემინისტური ფილოსოფიის პიონერი. მოითხოვდა ქალთა თანასწორ განათლებას და მოქალაქეობრივ უფლებებს. მწერალი მერი შელის დედა.',
    field: 'ფილოსოფია, ფემინიზმი'
  },
  {
    name: 'კარლ მარქსი',
    years: '1818 – 1883',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/220px-Karl_Marx_001.jpg',
    nationality: 'გერმანია / ინგლისი',
    contribution: '„კომუნისტური პარტიის მანიფესტი" — კლასთა ბრძოლა და კაპიტალიზმის კრიტიკა',
    details: 'გერმანელი ფილოსოფოსი, ეკონომისტი და რევოლუციონერი. მარქსიზმის ფუძემდებელი. მისმა იდეებმა XX საუკუნის ისტორიაზე უზარმაზარი გავლენა მოახდინა.',
    field: 'ფილოსოფია, ეკონომიკა, სოციოლოგია'
  },
  {
    name: 'ჩარლზ დარვინი',
    years: '1809 – 1882',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg',
    nationality: 'ინგლისი',
    contribution: '„სახეობათა წარმოშობა" — ევოლუციის თეორია და ბუნებრივი გადარჩევა',
    details: 'ინგლისელი ბუნებისმეტყველი, ევოლუციის თეორიის ავტორი. „ბიგლის" ხომალდით მოგზაურობისას შეგროვებულმა მონაცემებმა ბუნებრივი გადარჩევის თეორია შთააგონა.',
    field: 'ბიოლოგია, ბუნებისმეტყველება'
  },
  {
    name: 'ჯონ სტიუარტ მილი',
    years: '1806 – 1873',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg/220px-John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg',
    nationality: 'ინგლისი',
    contribution: '„თავისუფლების შესახებ" — ინდივიდუალური თავისუფლება და ზიანის პრინციპი',
    details: 'ინგლისელი ფილოსოფოსი და ეკონომისტი, უტილიტარიზმისა და ლიბერალიზმის უდიდესი წარმომადგენელი. პარლამენტის წევრი, ქალთა უფლებების დამცველი.',
    field: 'ფილოსოფია, ეკონომიკა, პოლიტიკა'
  },
  {
    name: 'ილია ჭავჭავაძე',
    years: '1837 – 1907',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ilia_Chavchavadze.jpg/220px-Ilia_Chavchavadze.jpg',
    nationality: 'საქართველო',
    contribution: 'რჩეული წერილები — ეროვნული განათლება, ენისა და კულტურის დაცვა',
    details: 'ქართველი მწერალი, პუბლიცისტი, საზოგადო მოღვაწე, „ერის მამა". ქართული ეროვნული მოძრაობის ლიდერი, ბანკირი, გამომცემელი. 2987 წელს წმინდანად შეერაცხა.',
    field: 'ლიტერატურა, პუბლიცისტიკა, საზოგადოებრივი აზროვნება'
  }
];
