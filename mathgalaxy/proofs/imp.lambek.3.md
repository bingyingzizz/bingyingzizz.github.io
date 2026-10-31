# 理想判据 $\implies$ 只需有限生成理想（Lambek）
`imp.lambek` · 推出 · strong 边 · 根 `../`

`prop.flat-equivalences` 平坦的等价说法 → `thm.lambek` 只需有限生成理想

**第三步（对 $n$ 归纳）**：只需证对每个有限生成子模 $K \subseteq R^{n}$，$K \otimes M \to R^{n} \otimes M$ 单。
- $n = 1$：$K$ 是有限生成右理想，正是假设 ✓。
- $n > 1$：写 $R^{n} = R^{n-1} \oplus R$，令 $K_{1} = K \cap R^{n-1}$、$K_{2}$ 为 $K$ 在第二个分量上的像（有限生成右理想），则 $0 \to K_{1} \to K \to K_{2} \to 0$ 与 $0 \to R^{n-1} \to R^{n} \to R \to 0$ 正合。张量后两列竖直映射（$K_{1} \to$ 与 $K_{2} \to$）按归纳假设与 $n = 1$ 情形是单射，故由蛇引理（两条外层单射夹出中间单射）$K \otimes M \to R^{n} \otimes M$ 单 ✓。∎

> 续见 proofs/imp.lambek.4.md
