// ============================================================
// KONFIGURACJA — uzupełnij te dwie wartości po założeniu
// darmowego konta na https://supabase.com (patrz README.md)
// ============================================================
const SUPABASE_URL = "https://vyziznntgiyfllaburot.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eml6bm50Z2l5ZmxsYWJ1cm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNzgxODAsImV4cCI6MjA5ODc1NDE4MH0.UCTLV-P9BKKNn8fcyUJ5Ft7Ri8edCUdwVhczPYMUbm8";

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
