# 极小多项式　`def.minimal-poly`
极小多项式（算子的）$\mu_T$
layer 14 · 定义 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=def.minimal-poly)　·　[节点索引](../index.md)

设 $\dim V < \infty$，$T : V \to V$。集合

$$I_T := \{\, p \in K[x] : p(T) = 0 \,\}$$

是 $K[x]$ 的一个非零理想（由 Cayley–Hamilton，$\chi_T \in I_T$）。由于 $K[x]$ 是主理想整环，存在**唯一**的首一多项式 $\mu_T$ 使 $I_T = (\mu_T)$。

$\mu_T$ 叫 $T$ 的**极小多项式**。它是零化 $T$ 的**次数最低**的首一多项式（唯一）。
> 陈述续见 [nodes/def.minimal-poly.2.md](./def.minimal-poly.2.md)


## 它能推出什么 / 谁在用它
- 被 [`thm.primary-decomposition`](../nodes/thm.primary-decomposition.md) 根子空间分解 用

- …另有出边，续页见 [nodes/def.minimal-poly.4.md](./def.minimal-poly.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.minimal-poly.3.md](./def.minimal-poly.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 6；Lang, Linear Algebra

> 说明见 `notes/def.minimal-poly.md`

引用：`def.minimal-poly`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
