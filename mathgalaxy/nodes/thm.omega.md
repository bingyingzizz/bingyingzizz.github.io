# 自然数集存在　`thm.omega`
自然数集 $\omega$ 存在
layer 5 · 定理 · 数系的构造 · 集合论

存在**最小归纳集** $\omega$：它含有 $\emptyset$，对 $x \mapsto x \cup \{x\}$ 封闭，且含于一切归纳集之中：

$$\omega = \{ \emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}, \{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}, \ldots  \}$$
> 陈述续见 `nodes/thm.omega.2.md`


## 为什么成立（入边，证明在 proofs/）
- `ax.inf` 无穷公理 + `ax.power` 幂集公理 + `ax.sep` 分离公理模式：无穷公理 + 幂集公理 + 分离公理模式 $\implies \omega$ 存在　proofs/imp.inf-to-omega.md
- `thm.product` 笛卡尔积存在：「幂集造容器 + 分离筛内容」——同一个证明模板　proofs/ana.sep-container.md

## 它能推出什么 / 谁在用它
- 被 `def.countable` 可数与不可数 用
- 被 `thm.induction` 归纳原理与递推定义 用
- 被 `def.int` 整数 ℤ 用

refs: Kunen, Set Theory, I.5

- …另有出边，续页见 `nodes/thm.omega.3.md`

## 说明
$\omega$ 同时也是最小的极限序数。构造它需要无穷公理 + 幂集公理 + 分离公理模式三者合力。
