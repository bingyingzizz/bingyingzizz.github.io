# 拉阿伯判别法（Raabe）　`thm.raabe-test`
Raabe 判别法：$n(a_n/a_{n+1}-1)$ 的极限
layer 21 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.raabe-test)　·　[节点索引](../index.md)

设 $a_n>0$，$R=\lim_{n\to\infty} n\Bigl(\frac{a_n}{a_{n+1}}-1\Bigr)$。则
1. $R>1$ 时 $\sum a_n$ 收敛；
2. $R<1$ 时 $\sum a_n$ 发散；
3. $R=1$ 时判别法失效。

## 为什么成立（入边，证明在 proofs/）
- [`thm.kummer`](../nodes/thm.kummer.md) Kummer 判别法：Raabe 判别法：Kummer 取 $c_n=n$　[proofs/imp.kummer-raabe.md](../proofs/imp.kummer-raabe.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.gauss-test`](../nodes/thm.gauss-test.md) 高斯判别法（Gauss）

refs: Knopp, Theory and Application of Infinite Series；Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.raabe-test.md`

引用：`thm.raabe-test`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
