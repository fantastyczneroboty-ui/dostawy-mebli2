# Dostawy Mebli — instrukcja uruchomienia

Aplikacja składa się z gotowych plików HTML/CSS/JS. Baza danych i miejsce na
zdjęcia to darmowy **Supabase**. Poniżej krok po kroku, jak wszystko połączyć
i wystawić stronę w internecie za darmo.

---

## KROK 1 — Załóż konto w Supabase

1. Wejdź na **https://supabase.com** i kliknij **Start your project** (możesz
   zalogować się przez GitHub albo e-mail).
2. Kliknij **New project**.
3. Podaj nazwę (np. `dostawy-mebli`), ustaw hasło do bazy (zapisz je gdzieś)
   i wybierz region najbliższy Polsce (np. Frankfurt).
4. Poczekaj około minuty, aż projekt się utworzy.

## KROK 2 — Utwórz tabelę w bazie danych

1. W panelu projektu wejdź w zakładkę **SQL Editor** (ikonka po lewej).
2. Kliknij **New query** i wklej poniższy kod, a następnie kliknij **Run**:

```sql
create table deliveries (
  id uuid primary key default gen_random_uuid(),
  item_name text not null,
  address text not null,
  phone text not null,
  payment text not null,
  photo_url text,
  created_at timestamptz default now()
);

alter table deliveries enable row level security;

create policy "Allow all access"
  on deliveries
  for all
  using (true)
  with check (true);
```

> **Uwaga o bezpieczeństwie:** ta polityka pozwala każdemu, kto zna adres
> Twojego projektu i klucz publiczny, na odczyt/zapis danych — logowanie
> PIN-em działa tylko "na wejściu" do strony, a nie na poziomie bazy danych.
> To rozwiązanie w zupełności wystarczy dla prywatnego, wewnętrznego
> narzędzia jak to. Gdybyś chciał w przyszłości podnieść poziom
> zabezpieczeń (prawdziwe konta użytkowników), daj znać — da się to
> rozbudować.

## KROK 3 — Utwórz magazyn na zdjęcia

1. Przejdź do zakładki **Storage** (po lewej).
2. Kliknij **New bucket**, nazwij go dokładnie: `delivery-photos`.
3. Zaznacz opcję **Public bucket** (żeby zdjęcia dało się wyświetlać na
   stronie) i zapisz.

## KROK 4 — Pobierz dane dostępowe

1. Przejdź do **Project Settings** (ikonka koła zębatego) → **API**.
2. Skopiuj wartość **Project URL**.
3. Skopiuj wartość **anon public** (to jest publiczny klucz, nie sekretny —
   bezpiecznie umieścić go w kodzie strony).

## KROK 5 — Uzupełnij plik `config.js`

Otwórz plik `config.js` w folderze ze stroną i wklej swoje dane:

```js
const SUPABASE_URL = "https://twoj-projekt.supabase.co";
const SUPABASE_ANON_KEY = "twoj-dlugi-klucz-anon";
```

Możesz też zmienić kod logowania, zmieniając linijkę:

```js
const LOGIN_PIN = "7788";
```

---

## KROK 6 — Publikacja strony za darmo (GitHub Pages)

1. Załóż darmowe konto na **https://github.com** (jeśli jeszcze nie masz).
2. Kliknij **New repository**, nadaj nazwę np. `dostawy-mebli`, ustaw jako
   **Public**, kliknij **Create repository**.
3. Na stronie repozytorium kliknij **Add file → Upload files** i przeciągnij
   wszystkie pliki z folderu projektu (`index.html`, `home.html`, `add.html`,
   `browse.html`, `delivery.html`, `edit.html`, `style.css`, `config.js`,
   `auth.js`).
4. Kliknij **Commit changes**.
5. Wejdź w **Settings** repozytorium → w menu po lewej wybierz **Pages**.
6. W sekcji **Build and deployment → Branch** wybierz `main` i folder `/root`,
   kliknij **Save**.
7. Po chwili (1–2 minuty) GitHub pokaże Ci adres strony, coś w stylu:
   `https://twoja-nazwa.github.io/dostawy-mebli/`

To jest Twoja darmowa domena — możesz ją zapisać w telefonie jako zakładkę
albo dodać "do ekranu głównego", żeby wyglądało jak zwykła aplikacja.

---

## Jak korzystać z aplikacji

- **Logowanie:** kod `7788` (albo Twój własny, jeśli zmieniłeś w `config.js`).
- **Dodaj dostawę:** menu główne → "Dodaj dostawę" → wypełnij formularz →
  "Zapisz dostawę".
- **Przeglądaj dostawy:** menu główne → "Przeglądaj dostawy" — lista
  numerowana, każda pozycja to link do szczegółów.
- **Szczegóły dostawy:** adres jest klikalnym linkiem, który otwiera trasę
  w Mapach Google. Można też edytować lub usunąć dostawę.

## Uwaga dot. listy dostaw

W liście przeglądania jako opis pozycji pokazuję cały wpisany **adres
dostawy** (a nie tylko nazwę miejscowości) — bo adres wpisujesz jako dowolny
tekst i automatyczne wyciąganie samej nazwy miasta z takiego tekstu nie
zawsze byłoby trafne. Jeśli wolisz, żeby na liście widoczna była **tylko
nazwa miejscowości** (a pełny adres dopiero w szczegółach), daj znać — dodam
do formularza osobne pole "Miejscowość" i to zmienię, to prosta poprawka.
