# 选择公理：Set 里每个对象都投射
`imp.ac-set-projective` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 → `def.projective-object` 投射 / 内射对象

在 $\mathbf{Set}$ 里，$X$ 投射 $\iff$ 每个满射 $f : A \twoheadrightarrow X$ 都有截面 $s : X \to A$（$f \circ s = \mathrm{id}_{X}$）。

「每个满射都有截面」正是**选择公理**：满射 $f$ 的纤维 $f^{-1}(x)$ 都非空，截面就是在每个纤维里挑一个元素 —— 而这一族挑选没有统一规则。

反过来，给定一族非空集 $\{A_{i}\}_{i \in I}$，把它们拼成满射 $\bigsqcup_{i} A_{i} \twoheadrightarrow I$，截面就是一个选择函数。

所以「$\mathbf{Set}$ 中每个对象投射」与 AC 等价 —— 这条边说的是 AC $\implies$ 前者，反向也成立（同一次论证）。
