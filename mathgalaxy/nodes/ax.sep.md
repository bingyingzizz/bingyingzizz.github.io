# 分离公理模式　`ax.sep`
分离公理模式（Axiom Schema of Separation）
layer 4 · 公理 · ZFC 公理系统 · 集合论

对每个公式 $\varphi (x, p)$（其中 $B$ 不出现），下面是一条公理：
> 陈述续见 `nodes/ax.sep.2.md`


## 为什么成立（入边，证明在 proofs/）
- `ax.repl` 替换公理模式：替换公理模式 $\implies$ 分离公理模式　proofs/imp.repl-to-sep.md
- `def.formula` 公式：用到了定义 公式　proofs/def-link.formula-sep.md
- `def.subset` 子集：用到了定义 子集　proofs/def-link.sep-subset.md
- `def.finchar` 有限特征：「不描述整体，只给一个筛子」　proofs/ana.filter-sieve.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.empty` 空集存在
- ⇒ `thm.omega` 自然数集存在
- ⇒ `thm.product` 笛卡尔积存在
- ～弱边 `def.finchar` 有限特征

refs: Kunen, Set Theory, I.4

## 说明
它是**公理模式**而不是单条公理：每取一个公式 $\varphi$ 就得到一条公理，ZFC 因此有无穷多条公理。

限制 `$x \in A$` 是关键——不能写成 $\{ x : x \notin x \}$，否则就是罗素悖论。
