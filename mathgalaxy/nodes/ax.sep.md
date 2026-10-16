# 分离公理模式　`ax.sep`
分离公理模式（Axiom Schema of Separation）
layer 4 · 公理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=ax.sep)　·　[节点索引](../index.md)

对每个公式 $\varphi (x, p)$（其中 $B$ 不出现），下面是一条公理：

$$\forall p \forall A \exists B \forall x [ x \in B \leftrightarrow  ( x \in A \wedge  \varphi(x, p) ) ]$$

由外延公理，这样的 $B$ 唯一，记作 $B = \{ x \in A : \varphi (x, p) \}$。俗称「子集公理」。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.empty`](../nodes/thm.empty.md) 空集存在
- ⇒ [`thm.omega`](../nodes/thm.omega.md) 自然数集存在

- …另有出边，续页见 [nodes/ax.sep.3.md](./ax.sep.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/ax.sep.2.md](./ax.sep.2.md)

refs: Kunen, Set Theory, I.4

## 说明
它是**公理模式**而不是单条公理：每取一个公式 $\varphi$ 就得到一条公理，ZFC 因此有无穷多条公理。

限制 `$x \in A$` 是关键——不能写成 $\{ x : x \notin x \}$，否则就是罗素悖论。

引用：`ax.sep`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
