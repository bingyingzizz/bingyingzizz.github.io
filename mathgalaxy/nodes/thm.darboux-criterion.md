# Darboux 判据　`thm.darboux-criterion`
定理（Darboux 判据）：可积 $\iff \inf_P U = \sup_P L$
layer 17 · 定理 · Riemann 积分 · 分析学
[在星图里打开](../#n=thm.darboux-criterion)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上有界。则 $f$ Riemann 可积，当且仅当

$$\inf_{P} U(f, P) = \sup_{P} L(f, P)$$

而且此时这个公共值就是 $\int_a^b f$。

## 为什么成立（入边，证明在 proofs/）
- [`def.riemann-integrable`](../nodes/def.riemann-integrable.md) Riemann 可积：可积的定义 $\implies$ Darboux 判据　[proofs/imp.darboux-criterion.md](../proofs/imp.darboux-criterion.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.darboux-criterion.2.md](./thm.darboux-criterion.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/thm.darboux-criterion.md`

引用：`thm.darboux-criterion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
