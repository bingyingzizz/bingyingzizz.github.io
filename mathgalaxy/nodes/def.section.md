# 截口　`def.section`
截口（Section）$E_{x}$ 与 $E^{y}$
layer 6 · 定义 · 乘积测度与 Fubini · 实变函数+数学分析
[在星图里打开](../#n=def.section)　·　[节点索引](../index.md)

设 $E \subseteq X \times Y$。对 $x \in X$、$y \in Y$ 定义

$$E_x := \{y \in Y : (x, y) \in E\}$$
$$E^y := \{x \in X : (x, y) \in E\}$$

分别叫 $E$ 在 $x$ 处的**纵截口**与在 $y$ 处的**横截口**。
> 陈述续见 [nodes/def.section.2.md](./def.section.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.section.4.md](./def.section.4.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.section.5.md](./def.section.5.md)

## English abstract · reviewed by bingyingzizz (2026-10-16) · Chinese is authoritative
> English abstract 续见 [nodes/def.section.3.md](./def.section.3.md)

refs: Folland, Real Analysis, §2.5

## 说明
直观：把平面图形用一根竖线（或横线）切一刀，切出来的那条线段就是截口。

截口是 Fubini 定理的语言：重积分 $\iint f d(\mu \times \nu)$ 就是「先沿截口积一次，再把各条截口的积分对另一变量积一次」。

引用：`def.section`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
