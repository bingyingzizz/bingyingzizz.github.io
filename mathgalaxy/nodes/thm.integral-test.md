# 积分判别法　`thm.integral-test`
定理：积分判别法（Cauchy 积分判别法）
layer 18 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.integral-test)　·　[节点索引](../index.md)

设 $f : [1, +\infty) \to [0, +\infty)$ **非负且递减**。则级数 $\sum f(n)$ 与反常积分 $\int_1^{+\infty} f$ 同敛散，即

$$\sum_{n=1}^{\infty} f(n) < +\infty \iff \int_1^{+\infty} f(x)\,dx < +\infty$$

更精确地，对每个 $N$ 有不等式

$$\int_1^{N+1} f \le \sum_{n=1}^{N} f(n) \le f(1) + \int_1^{N} f$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.integral-test.2.md](./thm.integral-test.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.integral-test.md`

引用：`thm.integral-test`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
