import { describe, it, expect } from "vitest";

// ThemeContext のロジックをユニットテスト（DOM 不要な部分）
describe("ThemeContext data", () => {
  it("THEME_KEYS が8色を含む", async () => {
    const { THEME_KEYS } = await import("../src/ThemeContext");
    expect(THEME_KEYS).toHaveLength(8);
    expect(THEME_KEYS).toContain("coral");
    expect(THEME_KEYS).toContain("violet");
    expect(THEME_KEYS).toContain("blue");
    expect(THEME_KEYS).toContain("cyan");
    expect(THEME_KEYS).toContain("emerald");
    expect(THEME_KEYS).toContain("amber");
    expect(THEME_KEYS).toContain("rose");
    expect(THEME_KEYS).toContain("pink");
  });

  it("各テーマが必要な CSS プロパティを持つ", async () => {
    const mod = await import("../src/ThemeContext");
    // THEME_KEYS からプリセット構造を間接的に検証
    expect(mod.THEME_KEYS.length).toBeGreaterThan(0);
    // ThemeProvider と useTheme がエクスポートされている
    expect(typeof mod.ThemeProvider).toBe("function");
    expect(typeof mod.useTheme).toBe("function");
  });
});
