# 自然数集存在　`thm.omega`
自然数集 $\omega$ 存在
layer 5 · 定理 · 数系的构造 · 集合论
[在星图里打开](../#n=thm.omega)　·　[节点索引](../index.md)

存在**最小归纳集** $\omega$：它含有 $\emptyset$，对 $x \mapsto x \cup \{x\}$ 封闭，且含于一切归纳集之中：

$$\omega = \{ \emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}, \{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}, \ldots  \}$$

把 $\in$ 读作 $<$，$\langle \omega , \in \rangle$ 就是自然数系 $\langle \mathbb{N}, <\rangle$。

## 它能推出什么 / 谁在用它
- 被 [`def.countable`](../nodes/def.countable.md) 可数与不可数 用
- 被 [`thm.induction`](../nodes/thm.induction.md) 归纳原理与递推定义 用

- …另有出边，续页见 [nodes/thm.omega.3.md](./thm.omega.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.omega.2.md](./thm.omega.2.md)

refs: Kunen, Set Theory, I.5

## 说明
$\omega$ 同时也是最小的极限序数。构造它需要无穷公理 + 幂集公理 + 分离公理模式三者合力。

引用：`thm.omega`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
