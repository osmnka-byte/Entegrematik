/**
 * HTML içeriğinden tahmini okuma süresini hesaplar.
 * Ortalama okuma hızı: 200 kelime/dakika
 */
export function getReadingTime(htmlContent: string): number {
  // HTML tag'larını temizle
  const text = htmlContent.replace(/<[^>]*>/g, '');
  // Kelime sayısı (Türkçe dahil)
  const wordCount = text.trim().split(/\s+/).length;
  // 200 kelime/dakika
  const readingTime = Math.ceil(wordCount / 200);
  return Math.max(1, readingTime); // Minimum 1 dakika
}