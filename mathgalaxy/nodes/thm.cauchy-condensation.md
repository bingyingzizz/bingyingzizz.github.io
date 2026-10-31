# Cauchy 凝聚判别法　`thm.cauchy-condensation`
定理：Cauchy 凝聚判别法（按 $2^{k}$ 分组）
layer 16 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.cauchy-condensation)　·　[节点索引](../index.md)

设 $a_n \ge 0$ 且**递减**。则原级数与「按 $2^{k}$ 抽出来的那一个」同敛散，即

$$\sum_{n=1}^{\infty} a_n < +\infty \iff \sum_{k=0}^{\infty} 2^{k}\, a_{2^{k}} < +\infty$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.comparison-test`](../nodes/thm.comparison-test.md) 比较判别法：按 $2^{k}$ 分组 + 比较 $\implies$ 凝聚判别法　[proofs/imp.cauchy-condensation.md](../proofs/imp.cauchy-condensation.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.cauchy-condensation.2.md](./thm.cauchy-condensation.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.cauchy-condensation.md`

引用：`thm.cauchy-condensation`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
