using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp1
{
    // Ez az osztály egy-egy állatot ír le.
    // Van neve, osztálya (pl. Madár), súlya és várható élettartama.
    public class Allat
    {
        // Konstruktor: amikor új Allat objektumot készítünk,
        // itt adjuk meg az adatait.
        public Allat(string name, string species, double weight, int lifeTime)
        {
            Name = name;
            Species = species;
            Weight = weight;
            LifeTime = lifeTime;
        }

        // Tulajdonságok: ezeket lehet kiolvasni és módosítani is.
        public string Name { get; set; }
        public string Species { get; set; }
        public double Weight { get; set; }
        public int LifeTime { get; set; }

        // ToString: amikor kiírunk egy Allat objektumot,
        // ez a szöveg jelenik meg helyette.
        public override string ToString()
        {
            return $"{Name} | {Species} | {Weight} kg | {LifeTime} év";
        }
    }

    internal class Program
    {
        // Ez a metódus egy számot vagy szöveget ír ki.
        static void kiirat(string a, string b)
        {
            Console.WriteLine(b);
            Console.WriteLine(a);
            Console.WriteLine("****************");
            Console.WriteLine("");
        }

        // Ez a metódus egy Allat-listát ír ki soronként.
        static void kiirat(List<Allat> a, string b)
        {
            Console.WriteLine(b);
            Console.WriteLine(string.Join("\n", a));
            Console.WriteLine("****************");
            Console.WriteLine("");
        }

        // Ez a metódus egy szöveg-listát ír ki soronként.
        static void Kiirat(List<string> a, string b)
        {
            Console.WriteLine(b);
            Console.WriteLine(string.Join("\n", a));
            Console.WriteLine("****************");
            Console.WriteLine("");
        }
        static void Main(string[] args)
        {
            // Itt tároljuk az összes állatot.
            List<Allat> allatok = new List<Allat>()
            {
                new Allat("Oroszlán", "Emlős", 190.5, 14),
                new Allat("Vándorsólyom", "Madár", 1.1, 15),
                new Allat("Zöld leguán", "Hüllő", 4.0, 20),
                new Allat("Kék bálna", "Emlős", 140000.0, 85),
                new Allat("Császárpingvin", "Madár", 35.0, 20),
                new Allat("Afrikai elefánt", "Emlős", 6000.0, 70),
                new Allat("Aranyhal", "Hal", 0.1, 5),
                new Allat("Lelkes farkashal", "Hal", 3.2, 12),
                new Allat("Peregrin", "Madár", 0.9, 12),
                new Allat("Gepárd", "Emlős", 50.0, 12),
                new Allat("Barna medve", "Emlős", 300.0, 25),
                new Allat("Vörös róka", "Emlős", 7.5, 4),
                new Allat("Lápi teknős", "Hüllő", 1.5, 40),
                new Allat("Komodói sárkány", "Hüllő", 80.0, 30),
                new Allat("Király kobra", "Hüllő", 6.0, 20),
                new Allat("Fekete rigó", "Madár", 0.1, 3),
                new Allat("Fehér cápa", "Hal", 1100.0, 70),
                new Allat("Atlanti lazac", "Hal", 5.0, 7),
                new Allat("Közönséges polp", "Puhatestű", 5.0, 2),
                new Allat("Ékszerteknős", "Hüllő", 0.8, 25),
                new Allat("Láma", "Emlős", 130.0, 20),
                new Allat("Szurikáta", "Emlős", 0.8, 12),
                new Allat("Vörös óriáskenguru", "Emlős", 85.0, 23),
                new Allat("Vandorpatkany", "Emlős", 0.3, 2),
                new Allat("Sarki róka", "Emlős", 4.5, 6),
                new Allat("Fehérfejű rétisas", "Madár", 4.5, 20),
                new Allat("Strucc", "Madár", 120.0, 40),
                new Allat("Tavi pisztráng", "Hal", 2.5, 8),
                new Allat("Skorpióhal", "Hal", 1.2, 15),
                new Allat("Szalagos tigris", "Emlős", 220.0, 15)
            };

            //  && jelentése: „és”.
            // || jelentése: „vagy”.
            // Where = szűrés.
            // Select = csak egy tulajdonság kivétele.
            // Count = darabszám.
            // Sum = összeg.
            // Average = átlag.
            // OrderBy = növekvő sorrend.
            // OrderByDescending = csökkenő sorrend.
            // Take(3) = első 3 elem.
            // Any = van - e ilyen elem. 

            // 1. Hány Madár van? ***
            var a = allatok.Where(x => x.Species == "Madár").Count().ToString();
            kiirat(a, "Hány Madár van: ");
                // Hagyomanyosan
                int madarakSzama = 0;
                // Végigmegyünk minden állaton.
                foreach (Allat allat in allatok)
                {
                    // Ha Madár, növeljük a számlálót.
                    if (allat.Species == "Madár")
                    {
                        madarakSzama++;
                    }
                }



            // 2. Melyik állatok súlya nagyobb 100 kg-nál? ***
            var b = allatok.Where(x => x.Weight > 100).Select(x => x.Name).ToList();
            Kiirat(b, "Melyik állatok súlya nagyobb 100 kg-nál: ");
                // Hagyomanyosan
                List<string> nehezAllatok = new List<string>();
                foreach (Allat allat in allatok)
                {
                    if (allat.Weight > 100)
                    {
                        nehezAllatok.Add(allat.Name);
                    }
                }



            // 3. Legalább 15 évet élő állatok, Z-A sorrendben. ***
            var c = allatok.Where(x => x.LifeTime >= 15).Select(x => x.Name).OrderByDescending(x => x).ToList();
            Kiirat(b, "Legalább 15 évet élő állatok, Z-A sorrendben: ");
                // Hagyomanyosan
                List<string> hosszuEletuAllatok = new List<string>();
                foreach (Allat allat in allatok)
                {
                    // Legalább 15 év: >= 15
                    if (allat.LifeTime >= 15)
                    {
                        hosszuEletuAllatok.Add(allat.Name);
                    }
                }
                // Növekvő ABC-sorrend, majd megfordítás = Z-A sorrend.
                hosszuEletuAllatok.Sort();
                hosszuEletuAllatok.Reverse();



            // 4. Az Emlősök átlagos élettartama. ***
            var d = Math.Round(allatok.Where(x => x.Species == "Emlős").Average(x => x.LifeTime), 2).ToString();
            kiirat(d, "Az Emlősök átlagos élettartama: ");
                // Hagyomanyosan
                double emlosokElettartamanakOsszege = 0;
                int emlosokSzama = 0;

                foreach (Allat allat in allatok)
                {
                    if (allat.Species == "Emlős")
                    {
                        emlosokElettartamanakOsszege += allat.LifeTime;
                        emlosokSzama++;
                    }
                }
                // Átlag = összeg / darabszám
                double atlagElettartam = emlosokElettartamanakOsszege / emlosokSzama;
                // Két tizedesjegyre kerekítés.
                atlagElettartam = Math.Round(atlagElettartam, 2);



            // 5. A legnehezebb Madár. ***
            var e = allatok.Where(x => x.Species == "Madár").Max(x => x.Weight).ToString();
            kiirat(e, "A legnehezebb Madár: ");
                // Hagyomanyosan
                Allat legnehezebbMadár = null;
                foreach (Allat allat in allatok)
                {
                    // Csak a Madarakat nézzük.
                    if (allat.Species == "Madár")
                    {
                        // Ha még nincs eltárolt madár, vagy ez nehezebb,
                        // akkor ezt tároljuk el.
                        if (legnehezebbMadár == null || allat.Weight > legnehezebbMadár.Weight)
                        {
                            legnehezebbMadár = allat;
                        }
                    }
                }




            // 6. A Halak összsúlya. ***
            var f = allatok.Where(x => x.Species == "Hal").Sum(x => x.Weight).ToString();
            kiirat(f, "A Halak összsúlya: ");
                // Hagyomanyosan
                double halakOsszsulya = 0;
                foreach (Allat allat in allatok)
                {
                    if (allat.Species == "Hal")
                    {
                        halakOsszsulya += allat.Weight;
                    }
                }



            // 7. Olyan állatok, amelyek neve rövidebb 10 karakternél. ***
            var g = allatok.Where(x => x.Name.Length < 10).ToString();
            kiirat(g, "Olyan állatok, amelyek neve rövidebb 10 karakternél");
                // Hagyomanyosan
                List<string> rovidNevuAllatok = new List<string>();
                foreach (Allat allat in allatok)
                {
                    // A szóköz is karakter, ezért a Name.Length-et nézzük.
                    if (allat.Name.Length < 10)
                    {
                        rovidNevuAllatok.Add(allat.Name);
                    }
                }



            // 8. Olyan állatok, amelyek neve a vagy A betűre végződik. ***
            var h = allatok.Where(x => x.Name.EndsWith("a") || x.Name.EndsWith("A")).Select(x => x.Name).ToList();
            Kiirat(h, "Olyan állatok, amelyek neve a vagy A betűre végződik: ");
                // Hagyomanyosan
                List<string> aBetureVegzodoAllatok = new List<string>();
                foreach (Allat allat in allatok)
                {
                    // EndsWith: mire végződik a név.
                    if (allat.Name.EndsWith("a") || allat.Name.EndsWith("A"))
                    {
                        aBetureVegzodoAllatok.Add(allat.Name);
                    }
                }




            // 9. A 3 legrövidebb ideig élő állat. ***
            var i = allatok.OrderBy(x => x.LifeTime).Take(3).ToString();
            kiirat(i, "A 3 legrövidebb ideig élő állat: ");

            // 10. Van-e olyan állat, amelynek a nevében szerepel a "farkas" vagy az "oroszlánhal" szó? ***
            var j = allatok.Any(x => x.Name.Contains("farkas") || x.Name.Contains("oroszlánhal")).ToString();
            kiirat(j, "Van-e olyan állat, amelynek a nevében szerepel a 'farkas' vagy az 'oroszlánhal' szó: ");

        }
    }
}