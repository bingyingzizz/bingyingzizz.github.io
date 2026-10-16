# 单调收敛定理　`thm.mct`
单调收敛定理（MCT, Monotone Convergence Theorem）
layer 18 · 定理 · 积分 · 分析学
[在星图里打开](../#n=thm.mct)　·　[节点索引](../index.md)

设 $\{f_n\} \subseteq L^+$ 满足

$$f_1 \le f_2 \le \cdots, \quad  f_n \uparrow  f\text{ 逐点}, $$

则

$$\int f = \lim_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- [`def.integral-nonneg`](../nodes/def.integral-nonneg.md) 非负函数的积分 + [`prop.simple-integral-props`](../nodes/prop.simple-integral-props.md) 简单函数积分的性质：非负积分的定义 $\implies$ 单调收敛定理　[proofs/imp.mct.md](../proofs/imp.mct.md)

- …另有入边，续页见 [nodes/thm.mct.2.md](./thm.mct.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.mct.3.md](./thm.mct.3.md)

refs: Folland, Real Analysis, Theorem 2.14

外部：Wikipedia https://en.wikipedia.org/wiki/Monotone_convergence_theorem

> 说明见 `notes/thm.mct.md`

引用：`thm.mct`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
