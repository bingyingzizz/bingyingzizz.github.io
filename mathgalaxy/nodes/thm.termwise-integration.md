# 逐项积分　`thm.termwise-integration`
定理：非负函数级数可以逐项积分
layer 19 · 定理 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=thm.termwise-integration)　·　[节点索引](../index.md)

设 $\{f_n\} \subseteq L^+$，则

$$\int \sum_{n=1}^{\infty} f_n = \sum_{n=1}^{\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.mct`](../nodes/thm.mct.md) 单调收敛定理：MCT $\implies$ 逐项积分　[proofs/imp.termwise.md](../proofs/imp.termwise.md)
- [`def.measure`](../nodes/def.measure.md) 测度：用到了定义 测度　[proofs/def-link.premeasure-termwise.md](../proofs/def-link.premeasure-termwise.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.termwise-integration.2.md](./thm.termwise-integration.2.md)

refs: Folland, Real Analysis, Theorem 2.15

> 说明见 `notes/thm.termwise-integration.md`

引用：`thm.termwise-integration`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
