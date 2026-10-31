# 扩张的最大性与 σ-有限唯一性
`imp.carath-unique` · 推出 · strong 边 · 根 `../`

`prop.caratheodory-extension` 预测度还原 → `thm.caratheodory-uniqueness` 扩张的唯一性

**② $\mu (E) < \infty$ 时取等。** 此时 $n = \nu (E)$ 有限（因为 $\nu (E) \le \mu (E) < \infty$）—— 但要注意 $\nu \le \mu$ 只在一侧，所以直接两边各取补集：$E$ 可测意味着对任意 $F \subseteq X$ 有 $\mu (F) = \mu (F\cap E) + \mu (F\setminus E)$，取 $F = X$ 得 $\mu (X) = \mu (E) + \mu (X\setminus E)$，**这一步要求 $\mu (X) < \infty$** 才好逐项比较。一般情形下改用 $\mathcal{M}(\mathfrak{A})$ 中 $\mu$ 有限的集合 $E_{n} \uparrow X$ 作近似（见下）。

**③ $\sigma$有限时唯一。** 取 $\mu$有限的可测集 $E_{n} \uparrow X$（$\sigma$有限的定义）。对每个 $E_{n}$，用 ② 的论证于 $E_{n} \cap E$ 上得 $\nu (E \cap E_{n}) = \mu (E \cap E_{n})$；令 $n \to \infty$，两侧分别用下连续性（$\nu$ 与 $\mu$ 都是测度）得到 $\nu (E) = \mu (E)$。

> 续见 proofs/imp.carath-unique.3.md
