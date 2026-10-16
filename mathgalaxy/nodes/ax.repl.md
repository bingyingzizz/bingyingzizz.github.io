# 替换公理模式　`ax.repl`
替换公理模式（Axiom Schema of Replacement）
layer 3 · 公理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=ax.repl)　·　[节点索引](../index.md)

若一个公式定义了「函数关系」，则任一集合的像仍是集合。对每个公式 $\varphi (x, y, p)$（其中 $B$ 不出现）：

$$\forall p [ \forall x\forall y\forall z ( \varphi(x,y,p) \wedge  \varphi(x,z,p) \to y = z ) \to \forall A \exists B \forall y ( y \in B \leftrightarrow  \exists x \in A, \varphi(x,y,p) ) ]$$

它保证了「替换」不会跑出集合论宇宙：像 $B$ 也是集合。

## 它能推出什么 / 谁在用它
- ⇒ [`ax.sep`](../nodes/ax.sep.md) 分离公理模式
- ⇒ [`thm.wellorder-ordinal`](../nodes/thm.wellorder-ordinal.md) 良序集的序型

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/ax.repl.2.md](./ax.repl.2.md)

refs: Kunen, Set Theory, I.6

## 说明
替换公理模式是 $Z$ 与 ZF 的分水岭。由它（加上任取一个集合 $A$）可以推出分离公理模式。

引用：`ax.repl`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
