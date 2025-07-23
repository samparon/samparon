/**
 * ====================================================================
 * CONFIGURAÇÃO DO CARDÁPIO SHEETS - V3.6   - 22/07/2025 - 21h32    
 * ====================================================================
 * 
 * Este arquivo contém todas as configurações principais do sistema,
 * incluindo URLs das planilhas e textos traduzíveis.
 */

// ====================================================================
// URLs DAS PLANILHAS DO GOOGLE SHEETS
// ====================================================================
/**
 * Para alterar as planilhas utilizadas pelo cardápio, modifique as URLs abaixo.
 * Certifique-se de que as planilhas estejam publicadas e acessíveis publicamente.
 * 
 * Como obter a URL correta:
 * 1. Abra sua planilha no Google Sheets
 * 2. Vá em Arquivo > Publicar na web
 * 3. Selecione a aba específica que deseja publicar
 * 4. Escolha o formato CSV
 * 5. Copie a URL gerada
 */

//---LINKS DE DEMONSTRAÇÃO ABAIXO: TROQUE PELO SEUS LINKS

// URL of the spreadsheet with menu items (tab: Items)
const MENU_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwCsyfX8qG2olzO4XAJjyddufBIdqU1ZLShR3aL72AOAjxCK3MH-cP33jnX5_O7g/pub?gid=1442603174&single=true&output=csv';

// URL of the spreadsheet with menu categories (tab: Categories)
const CATEGORIES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwCsyfX8qG2olzO4XAJjyddufBIdqU1ZLShR3aL72AOAjxCK3MH-cP33jnX5_O7g/pub?gid=225874416&single=true&output=csv';

// URL of the spreadsheet with general settings (tab: Config)
const CONFIG_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwCsyfX8qG2olzO4XAJjyddufBIdqU1ZLShR3aL72AOAjxCK3MH-cP33jnX5_O7g/pub?gid=672598215&single=true&output=csv';

// URL of the spreadsheet with operating hours (tab: Hours)
const HOURS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwCsyfX8qG2olzO4XAJjyddufBIdqU1ZLShR3aL72AOAjxCK3MH-cP33jnX5_O7g/pub?gid=893456414&single=true&output=csv';

// URL of the spreadsheet with neighborhoods and delivery fees (tab: Bairros) **OPCIONAL**
const NEIGHBORHOODS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwCsyfX8qG2olzO4XAJjyddufBIdqU1ZLShR3aL72AOAjxCK3MH-cP33jnX5_O7g/pub?gid=2001677955&single=true&output=csv';

// URL da planilha de cupons de desconto
const COUPONS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwCsyfX8qG2olzO4XAJjyddufBIdqU1ZLShR3aL72AOAjxCK3MH-cP33jnX5_O7g/pub?gid=81782775&single=true&output=csv';

