# 理想判据 $\implies$ 只需有限生成理想（Lambek）
`imp.lambek` · 推出 · strong 边 · 根 `../`

`prop.flat-equivalences` 平坦的等价说法 → `thm.lambek` 只需有限生成理想

**必要性**显然：有限生成右理想也是右理想 ✓。

**充分性**：要证 $M$ 作为**左**模平坦：即对一切**右**模的单射 $Q_{1} \rightarrowtail Q$，$Q_{1} \otimes_{R} M \to Q \otimes_{R} M$ 单。（⚠ 原稿在这里让 $M$ 同时当左模与右模 —— 那只能验证「射入 $M$ 自身」的平坦性，不是定义里的「一切右模」。）

**第一步（化到有限生成）**：$Q$ 是它有限生成子模的滤过余极限，$(-) \otimes_{R} M$ 保滤过余极限，故只需对**有限生成**的 $Q$ 验证 ✓。

> 续见 proofs/imp.lambek.2.md
