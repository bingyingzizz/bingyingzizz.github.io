# 不可约多项式　`def.irreducible-poly`
不可约多项式
layer 10 · 定义 · 多项式与因式分解 · 抽象代数
[在星图里打开](../#n=def.irreducible-poly)　·　[节点索引](../index.md)

设 $f \in K[x]$ 是非零、非单位（即 $\deg f \ge 1$）。称 $f$ **可约**，当且仅当存在 $g, h \in K[x]$ 满足

$$f = g\,h, \qquad \deg g \ge 1, \ \deg h \ge 1$$

否则称 $f$ **不可约**（irreducible）。

等价说法：$f$ 不可约 $\iff$ $f$ 在环 $K[x]$ 里不能写成两个次数更小的非单位之积 $\iff$ 主理想 $(f)$ 是 $K[x]$ 的**极大理想**。

## 它能推出什么 / 谁在用它
- 被 [`thm.poly-ufd`](../nodes/thm.poly-ufd.md) K[x] 是唯一分解整环 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.irreducible-poly.2.md](./def.irreducible-poly.2.md)

refs: Lang, Algebra, Ch. IV；Dummit–Foote, Abstract Algebra, Ch. 9

> 说明见 `notes/def.irreducible-poly.md`

引用：`def.irreducible-poly`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
