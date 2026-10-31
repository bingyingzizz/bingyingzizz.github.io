# 理想判据 $\implies$ 只需有限生成理想（Lambek）
`imp.lambek` · 推出 · strong 边 · 根 `../`

`prop.flat-equivalences` 平坦的等价说法 → `thm.lambek` 只需有限生成理想

**必要性**显然：有限生成右理想也是右理想 ✓。

**充分性**：要证对一切单射 $M_{1} \rightarrowtail M$，$M_{1} \otimes M \to M \otimes M$ 单。

**第一步（化到有限生成）**：$M$ 是它有限生成子模的滤过余极限，$(-) \otimes M$ 保滤过余极限，故只需对有限生成的 $M$ 验证 ✓。

> 续见 proofs/imp.lambek.2.md
