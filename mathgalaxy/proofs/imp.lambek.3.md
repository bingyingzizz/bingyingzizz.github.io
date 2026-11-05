# 理想判据 $\implies$ 只需有限生成理想（Lambek）
`imp.lambek` · 推出 · strong 边 · 根 `../`

`prop.flat-equivalences` 平坦的等价说法 → `thm.lambek` 只需有限生成理想

**第三步（对 $n$ 归纳）**：只需证对每个有限生成右子模 $K \subseteq R^{n}$，$K \otimes M \to R^{n} \otimes M$ 单。\n\n⚠ **骨架声明**：这一步只在 $R$ **诺特**时直接成立（那时 $K_{1} = K \cap R^{n-1}$ 自动有限生成）。一般环上 $K_{1}$ 未必有限生成，标准补法是换用「$K$ 在 $R^{n}$ 中的**有限生成子模**上取滤过余极限」的论证（或直接引 Lambek 原文的归纳），**本图没有把这套补法展开** —— 所以下面两行的归纳只当**思路**读，不当完整证明。
- $n = 1$：$K$ 是有限生成右理想，正是假设 ✓。
- $n > 1$：写 $R^{n} = R^{n-1} \oplus R$，令 $

> 续见 proofs/imp.lambek.4.md
