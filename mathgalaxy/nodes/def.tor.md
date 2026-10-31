# 挠积　`def.tor`
挠积：张量函子的左导出函子
layer 13 · 定义 · 平坦模 · 同调代数
[在星图里打开](../#n=def.tor)　·　[节点索引](../index.md)

设 $R$ 是环，$M$ 是右 $R$-模、$N$ 是左 $R$-模，取 $M$ 的一条投射消解 $P_{\bullet} \twoheadrightarrow M$（用删除消解）。**挠积**定义为 $H_{n}(P_{\bullet} \otimes_{R} N)$，即

$$\operatorname{Tor}_{n}^{R}(M, N) := H_{n}\bigl(P_{\bullet} \otimes_{R} N\bigr).$$
> 陈述续见 [nodes/def.tor.2.md](./def.tor.2.md)


## 它能推出什么 / 谁在用它
- 被 [`prop.tor-symmetry`](../nodes/prop.tor-symmetry.md) 挠积的对称性 用
- 被 [`thm.tor-torsion`](../nodes/thm.tor-torsion.md) 挠积给出挠元 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.tor.3.md](./def.tor.3.md)

refs: Rotman, An Introduction to Homological Algebra (2nd ed.), Ext 与 Tor 的部分 · Tor 的定义；Weibel, An Introduction to Homological Algebra, 关于 Tor（torsion product）的部分

> 说明见 `notes/def.tor.md`

引用：`def.tor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
