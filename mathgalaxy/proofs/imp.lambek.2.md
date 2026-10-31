# 理想判据 $\implies$ 只需有限生成理想（Lambek）
`imp.lambek` · 推出 · strong 边 · 根 `../`

`prop.flat-equivalences` 平坦的等价说法 → `thm.lambek` 只需有限生成理想

**第二步（化到自由模的子模）**：取满射 $R^{n} \twoheadrightarrow M$，令 $K$ 为 $M_{1}$ 的原像。两个短正合列 $0 \to K \to R^{n} \to M \to 0$ 与 $0 \to M_{1} \to M \to 0$ 的张量版本摆成 $3 \times 3$ 图，用蛇引理：若 $K \otimes M \to R^{n} \otimes M$ 单，则 $M_{1} \otimes M \to M \otimes M$ 单 ✓。

> 续见 proofs/imp.lambek.3.md
