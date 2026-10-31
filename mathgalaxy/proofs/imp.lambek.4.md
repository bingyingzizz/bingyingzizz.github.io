# 理想判据 $\implies$ 只需有限生成理想（Lambek）
`imp.lambek` · 推出 · strong 边 · 根 `../`

`prop.flat-equivalences` 平坦的等价说法 → `thm.lambek` 只需有限生成理想

**等价说法的翻译**：由 $0 \to I \to R \to R/I \to 0$ 与 $\operatorname{Tor}_{1}^{R}(R, M) = 0$ 得 $\operatorname{Tor}_{1}^{R}(R/I, M) \cong \ker(I \otimes M \to M)$，故「$I \otimes M \to M$ 单」与「$\operatorname{Tor}_{1}^{R}(R/I, M) = 0$」是同一句话 ✓。

> 把「所有理想」压到「有限生成理想」是实质性的：前者常常是巨大的集合，后者在常见环上可数甚至有限。⚠️ 但不能再压到「主理想」—— 那只给无挠。
