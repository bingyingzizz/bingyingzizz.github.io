# 归纳原理保证可以对公式作归纳
`imp.derived-formula-induction` · 推出 · strong 边 · 根 `../`

`thm.induction` 归纳原理与递推定义 → `def.formula` 公式

公式全体是「含全部原子公式、并对连接词与量词封闭」的**最小**集合。给公式 $\varphi$ 定义**复杂度** $c(\varphi)$：原子公式的复杂度为 $0$，每次套一个连接词或一个量词就加 $1$；它是 $\mathbb{N}$ 的元素。

设性质 $P$ 满足：原子公式有 $P$；且 $\varphi$ 有 $P$ 时 $\neg\varphi$ 有 $P$，$\varphi,\psi$ 都有 $P$ 时 $(\varphi\wedge\psi)$ 等有 $P$，$\varphi$ 有 $P$ 时 $\forall v_{i}\varphi$、$\exists v_{i}\varphi$ 有 $P$。

> 续见 proofs/imp.derived-formula-induction.2.md
