// ============================================================
// KONFIGURACJA — uzupełnij te dwie wartości po założeniu
// darmowego konta na https://supabase.com (patrz README.md)
// ============================================================
const SUPABASE_URL = "WKLEJ_TUTAJ_SWOJ_PROJECT_URL";
const SUPABASE_ANON_KEY = "WKLEJ_TUTAJ_SWOJ_ANON_KEY";

// Kod PIN do logowania (możesz zmienić na dowolne 4 cyfry)
const LOGIN_PIN = "7788";

// Nazwa bucketu (magazynu na zdjęcia) w Supabase Storage
const PHOTOS_BUCKET = "delivery-photos";

// Domyślne dane sprzedawcy na fakturach (można zmienić tutaj raz na zawsze,
// albo ręcznie przy każdej fakturze — pola na stronie są edytowalne)
const SELLER_NAME = "Nazwa Twojej Firmy";
const SELLER_ADDRESS = "ul. Przykładowa 1, 00-000 Miasto";
const SELLER_NIP = "000-000-00-00";

// ---- Inicjalizacja klienta Supabase (nie zmieniaj poniżej) ----
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
